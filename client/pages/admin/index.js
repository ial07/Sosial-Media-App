import AdminRoute from "../../components/routes/AdminRoute";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import renderHTML from "react-render-html";
import { Image } from "antd";

const Admin = () => {
  const [state, setState] = useContext(UserContext);

  const [posts, setPosts] = useState([]);

  const router = useRouter();
  useEffect(() => {
    if (state && state.token) {
      Newsfeeds();
    }
  }, [state && state.token]);

  const Newsfeeds = async () => {
    try {
      const { data } = await axios.get(`/posts`);
      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (post) => {
    try {
      const answer = window.confirm("Are you sure?");
      if (!answer) return;
      const { data } = await axios.delete(`/admin/delete-post/${post._id}`);
      Newsfeeds();
      toast.error("Post deleted");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AdminRoute>
      <div className="container-fluid">
        <div className="row py-5 text-light bg-default-img">
          <div className="col text-center">
            <h1 className="dispaly-1 text-center py-5">ADMIN</h1>
          </div>
        </div>
        <div className="row py-4">
          <div className="col-md-8 offset-md-2">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Content</th>
                  <th>Photo</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((p) => (
                  <tr>
                    <td>{renderHTML(p.content)}</td>
                    <td>
                      {" "}
                      {p.image && (
                        <Image
                          height={200}
                          src={`${p.image.url}`}
                          className="img-fluid"
                          alt="img"
                        />
                      )}
                    </td>
                    <td>
                      {" "}
                      <div
                        className="text-danger btn"
                        onClick={() => handleDelete(p)}
                      >
                        Delete
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminRoute>
  );
};

export default Admin;
