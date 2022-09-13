import express from "express";
import formidable from "express-formidable";

const router = express.Router();

import { requireSignin, canEditDeletePost, isAdmin } from "../middlewares";
import {
  createPost,
  uploadImage,
  newsFeeds,
  userPost,
  updatePost,
  deletePost,
  likePost,
  UnLikePost,
  addComment,
  removeComment,
  totalPost,
  posts,
  getPost,
} from "../controller/post";

router.post("/create-post", requireSignin, createPost);

router.post(
  "/upload-image",
  requireSignin,
  formidable({ maxFieldsSize: 3 * 1024 * 1024 }),
  uploadImage
);

router.get("/posts", posts);
router.get("/post/:_id", getPost);

router.get("/news-feeds/:page", requireSignin, newsFeeds);

router.get("/user-post/:_id", requireSignin, userPost);

router.get("/total-post", totalPost);

router.put("/update-post/:_id", requireSignin, canEditDeletePost, updatePost);

router.delete(
  "/delete-post/:_id",
  requireSignin,
  canEditDeletePost,
  deletePost
);

/// like and unlike post
router.put("/like-post", requireSignin, likePost);
router.put("/unlike-post", requireSignin, UnLikePost);

// comment post
router.put("/add-comment", requireSignin, addComment);
router.put("/remove-comment", requireSignin, removeComment);

/// ADMIN
router.delete("/admin/delete-post/:_id", requireSignin, isAdmin, deletePost);

module.exports = router;
