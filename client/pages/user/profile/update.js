import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Avatar, Image } from "antd";
import Link from "next/link";
import { UserContext } from "../../../context";
import { useRouter } from "next/router";
import AuthForm from "../../../components/forms/AuthForm";
import {
  LoadingOutlined,
  CameraOutlined,
  UserOutlined,
  QqOutlined,
  DingdingOutlined,
} from "@ant-design/icons";
import UserRoute from "../../../components/routes/UserRoute";

const updateProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [about, setAbout] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [secret, setSecret] = useState("");
  const [loading, setLoading] = useState(false);

  ///profile image
  const [image, setImage] = useState({});
  const [uploading, setUploading] = useState(false);

  const [state, setState] = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (state && state.user) {
      console.log(state.user._id);
      setName(state.user.name);
      setUsername(state.user.username);
      setEmail(state.user.email);
      setAbout(state.user.about);
      setAbout(state.user.about);
      setImage(state.user.image);
    }
  }, [state && state.user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name, email, password, confirmPassword, secret);
    setLoading(true);
    console.log(about);
    console.log(username);
    try {
      const { data } = await axios.put(`/profile-update/${state.user._id}`, {
        name: name,
        email: email,
        username: username,
        about: about,
        image: image,
      });
      console.log(data);
      if (data.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        // update the local storage
        let auth = JSON.parse(localStorage.getItem("auth"));
        auth.user = data;
        localStorage.setItem("auth", JSON.stringify(auth));
        // update context
        setState({ ...state, user: data });

        toast.success("Your profile is updated");
        // setOk(true);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
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
        <div className="row py-5 bg-default-img text-light">
          <div className="col text-center">
            <h1 className="dispaly-1 text-center ">Profile</h1>
          </div>
        </div>

        <div className="row py-5">
          <div className="col-md-6 offset-md-3">
            <label className="d-flex justify-content-center h5">
              {image && image.url ? (
                <Image width={200} src={`${image.url}`} />
              ) : uploading ? (
                <LoadingOutlined className="mt-1 text-primary" />
              ) : (
                <Avatar
                  shape="square"
                  icon={<UserOutlined />}
                  className="mt-1"
                  size={200}
                />
              )}
            </label>
            <label className="d-flex justify-content-center">
              <p className="change-photo">Change photo</p>
              <CameraOutlined size={30} className="mx-2" />
              <input
                type="file"
                onChange={handleImage}
                accept="images/*"
                hidden
              />
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
                {state && state.user && state.user.following && (
                  <Link href={`/user/following`}>
                    <a className="h6" style={{ color: "#0088ff " }}>
                      {state.user.following.length} Following
                    </a>
                  </Link>
                )}
              </div>
              <div className="col-md-6">
                <Avatar
                  icon={<DingdingOutlined />}
                  className="mt-1"
                  size={40}
                  style={{ backgroundColor: "#87d068" }}
                />
                <br />
                {state && state.user && state.user.followers && (
                  <Link href={`/user/followers`}>
                    <a className="h6" style={{ color: "#87d068 " }}>
                      {state.user.followers.length} Followers
                    </a>
                  </Link>
                )}
              </div>
            </div>
            <AuthForm
              page="profile"
              handleSubmit={handleSubmit}
              name={name}
              username={username}
              setUsername={setUsername}
              about={about}
              setAbout={setAbout}
              setName={setName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
              secret={secret}
              setSecret={setSecret}
              loading={loading}
            />
          </div>
        </div>

        {/* <div className="row">
        <div className="col">
          <div className="text-center">
            Already registered?{" "}
            <Link href="/login" className="p-2">
              Login
            </Link>
          </div>
        </div>
      </div> */}
      </div>
    </UserRoute>
  );
};

export default updateProfile;
