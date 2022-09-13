import { UserProvider } from "../context";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../components/Nav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <UserProvider>
        <Nav />
        <ToastContainer position="top-center" theme="colored" />
        <Component {...pageProps} />
      </UserProvider>
    );
  }
}

export default MyApp;
