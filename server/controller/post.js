import Post from "../models/post";
import User from "../models/user";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const posts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("postedBy", "_id name image")
      .populate("comments.postedBy", "_id name image")
      .sort({ createdAt: -1 })
      .limit(12);

    res.json(posts);
  } catch (err) {
    console.log(err);
  }
};

export const getPost = async (req, res) => {
  try {
    const posts = await Post.findById(req.params._id)
      .populate("postedBy", "_id name image")
      .populate("comments.postedBy", "_id name image");

    res.json(posts);
    console.log(posts);
  } catch (err) {
    console.log(err);
  }
};

export const createPost = async (req, res) => {
  //   console.log(req.body);
  const { content, image } = req.body;
  if (!content.length) {
    return res.json({
      error: "Please type anything...",
    });
  }
  // console.log("USERRR ", req.auth._id);
  try {
    const post = new Post({ content, image, postedBy: req.auth._id });
    await post.save();

    const postWithuser = await Post.findById(post._id).populate(
      "postedBy",
      "-password -secret"
    );
    res.json(postWithuser);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

export const uploadImage = async (req, res) => {
  // console.log("REQUEST FILE => ", req.files);
  try {
    const result = await cloudinary.uploader.upload(req.files.image.path);
    // console.log("UPLOAD IMAGE ", result);
    res.json({
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (err) {
    console.log(err);
  }
};

// export const postsByUser = async (req, res) => {
//   try {
//     const posts = await Post.find()
//       .populate("postedBy", "_id name image")
//       .sort({ createdAt: -1 })
//       .limit(10);

//     res.json(posts);
//   } catch (err) {
//     console.log(err);
//   }
// };

export const newsFeeds = async (req, res) => {
  try {
    const user = await User.findById(req.auth._id);
    let following = user.following;
    following.push(req.auth._id);
    //paginantion
    const currentPage = req.params.page || 1;
    const perPage = 3;

    const posts = await Post.find({ postedBy: { $in: following } })
      .skip((currentPage - 1) * perPage)
      .populate("postedBy", "_id name image")
      .populate("comments.postedBy", "_id name image")
      .sort({ createdAt: -1 })
      .limit(perPage);
    res.json(posts);
  } catch (err) {
    console.log(err);
  }
};

export const userPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params._id)
      .populate("postedBy", "_id name image")
      .populate("comments.postedBy", "_id name image");
    // console.log("INI POST =>", post);
    res.json(post);
  } catch (err) {
    console.log(err);
  }
};

export const updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params._id, req.body, {
      new: true,
    });
    res.json(post);
  } catch (err) {
    console.log(err);
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params._id);
    //remove the image from cloudinary
    if (post.image && post.image.public_id) {
      const image = await cloudinary.uploader.destroy(post.image.public_id);
    }
    res.json({ ok: true });
  } catch (err) {
    console.log(err);
  }
};

export const likePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.body._id, {
      $addToSet: { like: req.auth._id },
    });
    res.json(post);
  } catch (err) {
    console.log(err);
  }
};
export const UnLikePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.body._id, {
      $pull: { like: req.auth._id },
    });
    res.json(post);
  } catch (err) {
    console.log(err);
  }
};

export const addComment = async (req, res) => {
  try {
    const { postId, comment } = req.body;
    const post = await Post.findByIdAndUpdate(
      postId,
      {
        $push: {
          comments: {
            text: comment,
            postedBy: req.auth._id,
          },
        },
      },
      { new: true }
    )
      .sort({ created: -1 })
      .populate("postedBy", "_id name image")
      .populate("comments.postedBy", "_id name image");
    res.json(post);
  } catch (err) {
    console.log(err);
  }
};

export const removeComment = async (req, res) => {
  try {
    const { postId, comments } = req.body;
    const post = await Post.findByIdAndUpdate(
      postId,
      {
        $pull: {
          comments: {
            _id: comments._id,
          },
        },
      },
      { new: true }
    );
    res.json(post);
  } catch (err) {
    console.log(err);
  }
};

export const totalPost = async (req, res) => {
  try {
    const total = await Post.find().estimatedDocumentCount();
    res.json(total);
  } catch (err) {
    console.log(err);
  }
};
