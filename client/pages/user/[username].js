import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Avatar, Image } from "antd";
import Link from "next/link";
import { UserContext } from "../../context";
import { useRouter } from "next/router";
import { UserOutlined, QqOutlined, DingdingOutlined } from "@ant-design/icons";
import UserRoute from "../../components/routes/UserRoute";
import moment from "moment";

const UserByID = () => {
  const [result, setResult] = useState([]);

  const [state, setState] = useContext(UserContext);

  const router = useRouter();

  const userName = router.query.username;

  useEffect(() => {
    if (userName) fetchUser();
  }, [userName]);

  const fetchUser = async () => {
    try {
      const { data } = await axios.get(`/user/${userName}`);
      console.log(data);
      setResult(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <UserRoute>
      <div className="container-fluid">
        <div className="row py-5 bg-default-img text-light">
          <div className="col text-center">
            <h1 className="dispaly-1 text-center ">{result.name}</h1>
          </div>
        </div>

        <div className="row py-5">
          <p className="text-center">
            Joined {moment(result.createdAt).fromNow()}
          </p>
          <div className="col-md-6 offset-md-3">
            <label className="d-flex justify-content-center h5">
              {result.image && result.image.url ? (
                <Image width={200} src={`${result.image.url}`} />
              ) : (
                <Avatar
                  shape="square"
                  icon={<UserOutlined />}
                  className="mt-1"
                  size={200}
                />
              )}
            </label>
            <div className="row text-center">
              <div className="col-md-6">
                <Avatar
                  icon={<QqOutlined size={40} />}
                  className="mt-1"
                  size={40}
                  style={{ backgroundColor: "#0088ff " }}
                />
                <br />
                <p className="h6" style={{ color: "#0088ff " }}>
                  {result && result.following && result.following.length}{" "}
                  Following
                </p>
              </div>
              <div className="col-md-6">
                <Avatar
                  icon={<DingdingOutlined />}
                  className="mt-1"
                  size={40}
                  style={{ backgroundColor: "#87d068" }}
                />
                <br />
                <p className="h6" style={{ color: "#87d068 " }}>
                  {result && result.followers && result.followers.length}{" "}
                  Followers
                </p>
              </div>
            </div>

            <div className="form-group p-2">
              <small>
                <label className="text-muted">Name</label>
              </small>
              <input
                disabled
                value={result.name}
                type="text"
                className="form-control"
                placeholder="Enter Name"
              />
            </div>

            <div className="form-group p-2">
              <small>
                <label className="text-muted">Username</label>
              </small>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">@</div>
                </div>
                <input
                  disabled
                  value={result.username}
                  type="text"
                  className="form-control"
                  placeholder="Enter Username"
                />
              </div>
            </div>

            <div className="form-group p-2">
              <small>
                <label className="text-muted">About</label>
              </small>
              <textarea
                disabled
                value={result.about}
                type="text"
                className="form-control"
                placeholder="Hello I using S.O.S.IAL MEDIA, let's make friends.."
              ></textarea>
            </div>

            <div className="form-group p-2">
              <small>
                <label className="text-muted">Email</label>
              </small>
              <input
                value={result.email}
                type="email"
                disabled
                className="form-control"
                placeholder="Enter Email"
              />
            </div>
          </div>
        </div>
      </div>
    </UserRoute>
  );
};

export default UserByID;
