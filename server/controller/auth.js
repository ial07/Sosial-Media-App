import User from "../models/user";
import { hashPassword, comparePassword } from "../helpers/auth";
import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";

export const register = async (req, res) => {
  const { name, email, password, secret } = req.body;
  /// validation
  if (!name) return res.json({ error: "Name is required" });
  if (!password || password.length < 6)
    return res.json({
      error: "Password is required and should be six characters long",
    });
  if (!secret) return res.json({ error: "Answer is required" });

  const exist = await User.findOne({ email });
  if (exist) return res.json({ error: "Email is taken, change another email" });

  const hashedPassword = await hashPassword(password);

  const user = new User({
    name,
    email,
    password: hashedPassword,
    secret,
    username: nanoid(),
  });

  try {
    await user.save();
    // console.log("REGISTER USER => ", user);
    return res.json({
      ok: true,
    });
  } catch (error) {
    // console.log("REGISTER FAILED => ", err);
    return res.json({ error: "Error, Try Again" });
  }
};

export const login = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  /// validation
  if (!email) return res.json({ error: "Please type the email" });
  if (!password) return res.json({ error: "Please type the Password" });
  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.json({
        error: "No user found, please type the correct email",
      });
    ///check password
    const match = await comparePassword(password, user.password);
    if (!match) return res.json({ error: "Wrong password" });

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    user.password = undefined;
    user.secret = undefined;
    res.json({
      token,
      user,
    });
  } catch (error) {
    console.log(error);
    return res.json({ error: "Error, Try again." });
  }
};

export const currentUser = async (req, res) => {
  // console.log(req);
  try {
    const user = await User.findById(req.auth._id);
    res.json({ ok: true });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

/// ADMIN ROLE
export const currentAdmin = async (req, res) => {
  // console.log(req);
  try {
    const user = await User.findById(req.auth._id);
    res.json({ ok: true });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

export const forgotPassword = async (req, res) => {
  const { email, password, secret } = req.body;
  /// validation
  if (!password || password.length < 6)
    return res.json({
      error: "New password is required and should be six characters long",
    });
  if (!secret) return res.json({ error: "Answer is required" });

  const user = await User.findOne({ email, secret });
  if (!user) {
    return res.json({
      error: "We cant verify you with those details",
    });
  }

  try {
    const hashed = await hashPassword(password);
    await User.findByIdAndUpdate(user._id, { password: hashed });
    return res.json({
      success: "Congratulations, Now you can login with your new password",
    });
  } catch (err) {
    console.log(err);
    return res.json({
      error: "Something wrong. Try again.",
    });
  }
};

export const profileUpdate = async (req, res) => {
  try {
    const { username, name, about, image } = req.body;

    let update = await User.findByIdAndUpdate(req.params._id, req.body, {
      new: true,
    });
    res.json(update);
  } catch (err) {
    if (err.code == 11000) {
      return res.json({
        error: "Username is taken by another user, please change the username",
      });
    }
    console.log(err);
  }
};

export const findPeople = async (req, res) => {
  try {
    const user = await User.findById(req.auth._id);
    //user following list
    let following = user.following;
    following.push(req.auth._id);
    const people = await User.find({
      _id: { $nin: following },
      role: { $nin: "Admin" },
    })
      .select("-password -secret")
      .limit(10);
    res.json(people);
  } catch (err) {
    console.log(err);
  }
};

//middleware for follow user
export const addFollower = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.body._id, {
      $addToSet: { followers: req.auth._id },
    });
    next();
  } catch (err) {
    console.log(err);
  }
};

export const userFollow = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.auth._id,
      {
        $addToSet: { following: req.body._id },
      },
      { new: true }
    ).select("-password -secret");
    res.json(user);
  } catch (err) {
    console.log(err);
  }
};

///following session
export const userFollowing = async (req, res) => {
  try {
    const user = await User.findById(req.auth._id);
    let following = await User.find({ _id: user.following }).limit(100);
    console.log(following);
    res.json(following);
  } catch (err) {
    console.log(err);
  }
};

///middleware for user Unfollow
export const removeFollowing = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.body._id, {
      $pull: { followers: req.auth._id },
    });
    next();
  } catch (err) {
    console.log(err);
  }
};

export const userUnfollow = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.auth._id,
      {
        $pull: { following: req.body._id },
      },
      { new: true }
    );
    res.json(user);
  } catch (err) {
    console.log(err);
  }
};

///followers session
export const userFollowers = async (req, res) => {
  try {
    const user = await User.findById(req.auth._id);
    let followers = await User.find({ _id: user.followers }).limit(100);
    console.log(followers);
    res.json(followers);
  } catch (err) {
    console.log(err);
  }
};

// ///middleware for user Stop follow
// export const removeFollower = async (req, res, next) => {
//   try {
//     const user = await User.findByIdAndUpdate(req.body._id, {
//       $pull: { following: req.auth._id },
//     });
//     next();
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const userStopFollow = async (req, res) => {
//   try {
//     const user = await User.findByIdAndUpdate(
//       req.auth._id,
//       {
//         $pull: { followers: req.body._id },
//       },
//       { new: true }
//     );
//     res.json(user);
//   } catch (err) {
//     console.log(err);
//   }
// };

/// Search USER
export const searchUser = async (req, res) => {
  const { query } = req.params;
  if (!query) return;
  /// $regex is spesial method from mongoDB
  /// The i modifier is used to perform case-insensitive matching
  try {
    const user = await User.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { username: { $regex: query, $options: "i" } },
      ],
      role: { $nin: "Admin" },
      // _id: { $nin: req.auth._id },
    }).select("-password -secret");
    res.json(user);
  } catch (err) {
    console.log(err);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username }).select(
      "-password -secret"
    );
    res.json(user);
  } catch (err) {
    console.log(err);
  }
};
