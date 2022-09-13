import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { SyncOutlined } from "@ant-design/icons";
import { UserContext } from "../../context";

const UserRoute = ({ children }) => {
  const [state] = useContext(UserContext);
  const router = useRouter();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (state && state.token) getCurrentUser();
  }, [state && state.token]);

  const getCurrentUser = async () => {
    try {
      const { data } = await axios.get(`/current-user`, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      });
      // console.log(data.ok);
      if (data.ok) setOk(true);
    } catch (error) {
      router.push("/login");
    }
  };

  process.browser &&
    state === null &&
    setTimeout(() => {
      getCurrentUser();
    }, 1000);

  return !ok ? (
    <SyncOutlined
      spin
      className="d-flex justify-content-center display-1 text-primary p-5"
    />
  ) : (
    <>{children}</>
  );
};

export default UserRoute;
