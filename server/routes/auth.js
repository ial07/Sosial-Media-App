import express from "express";

const router = express.Router();

import { isAdmin, requireSignin } from "../middlewares";
import {
  register,
  login,
  currentUser,
  forgotPassword,
  profileUpdate,
  findPeople,
  addFollower,
  userFollow,
  userFollowing,
  userUnfollow,
  removeFollowing,
  userFollowers,
  searchUser,
  getUser,
  currentAdmin,
  // removeFollower,
  // userStopFollow,
} from "../controller/auth";

router.post("/register", register);

router.post("/login", login);

router.post("/forgot-password", forgotPassword);

router.get("/current-user", requireSignin, currentUser);

router.get("/current-admin", requireSignin, isAdmin, currentAdmin);

router.put("/profile-update/:_id", requireSignin, profileUpdate);

router.get("/find-people", requireSignin, findPeople);

router.put("/user-follow", requireSignin, addFollower, userFollow);
//following session
router.get("/user-following", requireSignin, userFollowing);
router.put("/user-unfollow", requireSignin, removeFollowing, userUnfollow);
//followers session
router.get("/user-followers", requireSignin, userFollowers);
// router.put("/user-unfollow", requireSignin, removeFollower, userStopFollow);

router.get("/search-user/:query", searchUser);
router.get("/user/:username", getUser);

module.exports = router;
