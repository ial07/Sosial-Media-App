import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { Avatar } from "antd";
import { CameraOutlined, LoadingOutlined } from "@ant-design/icons";

const PostForm = ({
  content,
  setContent,
  postSubmit,
  handleImage,
  uploading,
  image,
}) => {
  return (
    <div className="card">
      <div className="card-body pb-3">
        <form className="form-group">
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            className="form-control"
            placeholder="Write something..."
          ></ReactQuill>
        </form>
      </div>

      <div className="card-footer d-flex  justify-content-between text-muted">
        <button className="btn btn-primary btn-sm mt-1" onClick={postSubmit}>
          Post
        </button>

        <label>
          {image && image.url ? (
            <Avatar size={30} src={image.url} className="mt-1" />
          ) : uploading ? (
            <LoadingOutlined className="mt-1 text-primary" />
          ) : (
            <CameraOutlined className="mt-1 btn text-primary" />
          )}
          <input type="file" onChange={handleImage} accept="images/*" hidden />
        </label>
      </div>
    </div>
  );
};

export default PostForm;
