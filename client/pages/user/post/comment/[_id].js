import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import Post from "../../../../components/cards/Post";
import Link from "next/link";
import { RollbackOutlined } from "@ant-design/icons";
import CommentForm from "../../../../components/forms/CommentForm";
import { Modal } from "antd";

const Postcomments = () => {
  const [post, setPost] = useState({});
  //comments
  const [comment, setComment] = useState("");
  const [visible, setVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const router = useRouter();
  const _id = router.query._id;

  useEffect(() => {
    if (_id) fetchPost();
  }, [_id]);

  const fetchPost = async () => {
    try {
      const { data } = await axios.get(`/user-post/${_id}`);
      setPost(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (post) => {
    try {
      const answer = window.confirm("Are you sure?");
      if (!answer) return;
      const { data } = await axios.delete(`/delete-post/${post._id}`);
      Newsfeeds();
      toast.error("Post deleted");
    } catch (err) {
      console.log(err);
    }
  };

  const handleLike = async (_id) => {
    try {
      const { data } = await axios.put("/like-post", { _id });
      // console.log("LIKE => ", data);
      fetchPost();
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnLike = async (_id) => {
    try {
      const { data } = await axios.put("/unlike-post", { _id });
      // console.log("UNLIKE => ", data);
      fetchPost();
    } catch (err) {
      console.log(err);
    }
  };

  const handleComments = (post) => {
    setCurrentPost(post);
    setVisible(true);
  };

  const addComment = async (e) => {
    e.preventDefault();
    // console.log("add comment post id", currentPost._id);
    // console.log("comments => ", comment);
    try {
      const { data } = await axios.put("/add-comment", {
        postId: currentPost._id,
        comment: comment,
      });
      console.log(data);
      setComment("");
      setVisible(false);
      fetchPost();
    } catch (error) {}
  };

  const removeComment = async (postId, comments) => {
    console.log(postId, comments);
    let answer = window.confirm("Are you sure?");
    if (!answer) return;
    try {
      const { data } = await axios.put("/remove-comment", {
        postId,
        comments,
      });
      console.log("REMOVE DATA ", data);
      fetchPost();
      toast.error("Comment deleted");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container-fluid mb-5">
        <div className="row py-5 text-light bg-default-img">
          <div className="col text-center">
            <h1 className="dispaly-1 text-center py-5">Newsfeed</h1>
          </div>
        </div>
        <div className="row col-md-8 offset-md-2 pt-5">
          <Post
            post={post}
            commentsCount={100}
            removeComment={removeComment}
            handleDelete={handleDelete}
            handleLike={handleLike}
            handleUnLike={handleUnLike}
            handleComments={handleComments}
          />
        </div>

        <Link href="/user/dashboard">
          <a className="d-flex justify-content-center mt-3">
            <RollbackOutlined />
          </a>
        </Link>

        <Modal
          visible={visible}
          onCancel={() => setVisible(false)}
          title="Comment"
          footer={null}
        >
          <CommentForm
            comment={comment}
            setComment={setComment}
            addComment={addComment}
          />
        </Modal>
      </div>
    </>
  );
};

export default Postcomments;
