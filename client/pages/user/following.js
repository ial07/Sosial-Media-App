import { useContext, useState, useEffect } from "react";
import moment from "moment";
import { Avatar, List } from "antd";
import { useRouter } from "next/router";
import { UserContext } from "../../context";
import { QqOutlined, UserOutlined, RollbackOutlined } from "@ant-design/icons";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-toastify";

const Following = () => {
  const [state, setState] = useContext(UserContext);
  const [peoples, setPeoples] = useState([]);

  const router = useRouter();

  useEffect(() => {
    if (state && state.token) fetchFollowing();
  }, [state && state.token]);

  const fetchFollowing = async () => {
    try {
      const { data } = await axios.get("/user-following");
      console.log("FOLOWING", data);
      setPeoples(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnfollow = async (user) => {
    try {
      const { data } = await axios.put("/user-unfollow", { _id: user._id });
      console.log(data);
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
      toast.warning(`You Unfollow ${user.name}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="row col-md-6 offset-md-3">
      <div className="row text-center mb-2">
        <label>
          <Avatar
            icon={<QqOutlined size={40} />}
            className="mt-1"
            size={40}
            style={{ backgroundColor: "#0088ff " }}
          />
          <br />
          <h5 className="mt-1">Your list following</h5>
        </label>
      </div>
      <List
        itemLayout="horizontal"
        dataSource={peoples}
        renderItem={(person) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                person.image != null ? (
                  <Avatar src={`${person.image.url}`} />
                ) : (
                  <Avatar size="large" icon={<UserOutlined />} />
                )
              }
              title={
                <div className="d-flex justify-content-between">
                  {person.username}{" "}
                  <span
                    className="text-primary btn"
                    onClick={() => handleUnfollow(person)}
                  >
                    Unfollow
                  </span>
                </div>
              }
              description={`${person.about != null ? person.about : ""}`}
            />
          </List.Item>
        )}
      />
      <Link href="/user/profile/update">
        <a className="d-flex justify-content-center pt-5">
          <RollbackOutlined />
        </a>
      </Link>
    </div>
  );
};

export default Following;
