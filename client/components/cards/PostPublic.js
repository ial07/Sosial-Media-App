import { useContext } from "react";
import renderHTML from "react-render-html";
import moment from "moment";
import {
  HeartOutlined,
  HeartFilled,
  CommentOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { UserContext } from "../../context";
import { useRouter } from "next/router";
import { ImageProfile } from "../../functions";

const PostPublic = ({
  post,
  page,
  handleDelete,
  handleLike,
  handleUnLike,
  handleComments,
  commentsCount = 2,
  removeComment,
}) => {
  const [state] = useContext(UserContext);
  const router = useRouter();

  return (
    <>
      {post && post.postedBy && (
        <div key={post._id} className="card mb-3 mt-4">
          <div className="card-header d-flex justify-content-between">
            <div>
              <ImageProfile post={post} size={40} />
              <span className="pt-2" style={{ marginLeft: "1rem" }}>
                {state && state.user && state.user._id === post.postedBy._id
                  ? "You"
                  : post.postedBy.name}
              </span>
            </div>
            <span className="pt-2" style={{ marginLeft: "1rem" }}>
              {moment(post.createdAt).fromNow()}
            </span>
          </div>
          <div className="card-body">
            <div>{renderHTML(post.content)}</div>
          </div>
          <div className="card-footer">
            {post.image && (
              <div
                style={{
                  backgroundImage: "url(" + post.image.url + ")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  height: "400px",
                }}
              ></div>
              // <Image
              //   height={300}
              //   src={`${post.image.url}`}
              //   className="img-fluid"
              //   alt="img"
              // />
            )}
          </div>

          {/* 2 Comments */}
          {post.comments && post.comments.length > 0 && (
            <ul
              className="list-group"
              style={
                page === "dashboard"
                  ? {
                      maxHeight: "150px",
                      overflow: "scroll",
                    }
                  : {
                      maxHeight: "500px",
                    }
              }
            >
              {post.comments.slice(0, commentsCount).map((cm) => (
                <li
                  className="list-group-item d-flex justify-content-between align-items-start"
                  key={cm._id}
                >
                  <div className="ms-2 me-auto">
                    <div className="d-flex">
                      <ImageProfile post={cm} size={20} />
                      <div>
                        <p className="px-2 mt-1" style={{ fontSize: 10 }}>
                          {state &&
                          state.user &&
                          state.user._id === cm.postedBy._id
                            ? "You"
                            : cm.postedBy.name}
                        </p>
                        <i
                          className="px-2 mt-1 text-muted"
                          style={{ fontSize: 11 }}
                        >
                          {cm.text}
                        </i>
                      </div>
                    </div>
                  </div>
                  <span className="badge rounded-pill text-muted">
                    {moment(cm.created).fromNow()}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
};

export default PostPublic;
