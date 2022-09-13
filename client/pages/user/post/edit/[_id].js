import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import UserRoute from "../../../../components/routes/UserRoute";
import PostForm from "../../../../components/forms/PostForm";
import { toast } from "react-toastify";

const EditPost = () => {
  const router = useRouter();
  const _id = router.query._id;

  const [post, setPost] = useState({});
  const [content, setContent] = useState("");
  const [image, setImage] = useState({});
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (_id) fetchPost();
  }, [_id]);

  const fetchPost = async () => {
    try {
      const { data } = await axios.get(`/user-post/${_id}`);
      setPost(data);
      setContent(data.content);
      setImage(data.image);
    } catch (err) {
      console.log(err);
    }
  };

  const postSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`/update-post/${_id}`, {
        content: content,
        image: image,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success("Post has been updated");
        router.push("/user/dashboard");
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

  return (
    <UserRoute>
      <div className="container-fluid">
        <div className="row py-5 text-light bg-default-img">
          <div className="col text-center">
            <h1 className="dispaly-1 text-center py-5">Newsfeed</h1>
          </div>
        </div>

        <div className="row py-3">
          <div className="col-md-8 offset-md-2">
            <PostForm
              content={content}
              setContent={setContent}
              postSubmit={postSubmit}
              handleImage={handleImage}
              uploading={uploading}
              image={image}
            />
          </div>
        </div>
      </div>
    </UserRoute>
  );
};

export default EditPost;
