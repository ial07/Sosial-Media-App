import UserRoute from "../../components/routes/UserRoute";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context";
import PostForm from "../../components/forms/PostForm";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import PostList from "../../components/cards/PostList";
import PeopleList from "../../components/cards/PeopleList";
import { Modal, Pagination } from "antd";
import CommentForm from "../../components/forms/CommentForm";
import Search from "../../components/Search";
import io from "socket.io-client";

const socket = io(
  process.env.NEXT_PUBLIC_SOCKETIO,
  { path: "/socket.io" },
  {
    reconnection: true,
  }
);

const dashboard = () => {
  const [state, setState] = useContext(UserContext);

  const [content, setContent] = useState("");
  const [image, setImage] = useState({});
  const [uploading, setUploading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [peoples, setPeoples] = useState([]);
  //comments
  const [comment, setComment] = useState("");
  const [visible, setVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  //pagination
  const [totalPost, setTotalPost] = useState(0);
  const [pagination, setPagination] = useState(1);

  const router = useRouter();
  useEffect(() => {
    if (state && state.token) {
      Newsfeeds();
      findPeoples();
    }
  }, [state && state.token, pagination]);

  useEffect(() => {
    try {
      axios.get("/total-post").then(({ data }) => setTotalPost(data));
    } catch (err) {
      console.log(err);
    }
  }, []);

  const Newsfeeds = async () => {
    try {
      const { data } = await axios.get(`/news-feeds/${pagination}`);
      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const findPeoples = async () => {
    try {
      const { data } = await axios.get("/find-people");
      setPeoples(data);
    } catch (err) {
      console.log(err);
    }
  };

  const postSubmit = async (e) => {
    e.preventDefault();
    console.log(content);
    try {
      const { data } = await axios.post("/create-post", {
        content: content,
        image: image,
      });
      // console.log("data => ", data);
      if (data.error) {
        toast.error(data.error);
      } else {
        setPagination(1);
        Newsfeeds();
        toast.success("Post created!");
        setContent("");
        setImage({});
        //socket
        socket.emit("new-post", data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleImage = async (e) => {
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append("image", file);

    setUploading(true);
    try {
      const { data } = await axios.post("/upload-image", formData);
      setImage({
        url: data.url,
        public_id: data.public_id,
      });
      setUploading(false);
      // console.log("UPLOADED IMAGE => ", data);
    } catch (err) {
      console.log(err);
      setUploading(false);
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

  const handleFollow = async (user) => {
    // console.log("add follower", user);
    try {
      const { data } = await axios.put("/user-follow", { _id: user._id });
      // console.log("handle follow => ", data);
      //update local storage, update auth, keep token
      let auth = JSON.parse(localStorage.getItem("auth"));
      auth.user = data;
      localStorage.setItem("auth", JSON.stringify(auth));
      //update context
      setState({ ...state, user: data });
      //update people state
      let filtered = peoples.filter((p) => p._id !== user._id);
      setPeoples(filtered);
      // re-render the post in newsfeed
      Newsfeeds();
      toast.info(`You following ${user.name}`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLike = async (_id) => {
    try {
      const { data } = await axios.put("/like-post", { _id });
      // console.log("LIKE => ", data);
      Newsfeeds();
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnLike = async (_id) => {
    try {
      const { data } = await axios.put("/unlike-post", { _id });
      // console.log("UNLIKE => ", data);
      Newsfeeds();
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
      Newsfeeds();
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
      // console.log("REMOVE DATA ", data);
      Newsfeeds();
      toast.error("Comment deleted");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <UserRoute>
      <div className="container-fluid">
        <div className="row py-5 text-light bg-default-img">
          <div className="col text-center">
            <h1 className="dispaly-1 text-center py-5">Newsfeed</h1>
          </div>
        </div>

        <div className="row py-3">
          <div className="col-md-8">
            <PostForm
              content={content}
              setContent={setContent}
              postSubmit={postSubmit}
              handleImage={handleImage}
              uploading={uploading}
              image={image}
            />

            <PostList
              posts={posts}
              handleDelete={handleDelete}
              handleLike={handleLike}
              handleUnLike={handleUnLike}
              handleComments={handleComments}
              removeComment={removeComment}
            />

            <Pagination
              current={pagination}
              total={(totalPost / 3) * 15}
              onChange={(value) => setPagination(value)}
              className="m-5 text-center"
            />
          </div>
          <div className="col-md-4">
            <Search />
            <h4 className="m-3">List User</h4>
            <PeopleList peoples={peoples} handleFollow={handleFollow} />
          </div>
        </div>

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
    </UserRoute>
  );
};

export default dashboard;
