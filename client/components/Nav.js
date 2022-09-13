import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { UserContext } from "../context";
import { useRouter } from "next/router";
import { UserOutlined } from "@ant-design/icons";

const Nav = () => {
  const [state, setState] = useContext(UserContext);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  const router = useRouter();
  const logout = () => {
    router.push("/login");
    window.localStorage.removeItem("auth");
    setState(null);
  };
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link href="/">
          <a className="logo">S.O.S-IAL MEDIA</a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          {state === null ? (
            <div className="navbar-nav">
              <Link href="/login">
                <a className={`nav-link ${current === "/login" && "linkko"}`}>
                  Login
                </a>
              </Link>
              <Link href="/register">
                <a
                  className={`nav-link ${current === "/register" && "linkko"}`}
                >
                  Register
                </a>
              </Link>
            </div>
          ) : (
            <>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link href="/user/dashboard">
                    <a
                      className={`nav-link ${
                        current === "/user/dashboard" && "linkko"
                      }`}
                    >
                      NEWSFEEDS
                    </a>
                  </Link>
                </li>
              </ul>
              <div className="dropdown dropstart">
                <UserOutlined
                  className="btn dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                />
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/user/profile/update">
                      <a
                        className={`dropdown-item ${
                          current === "/user/profile/update" && "linkko"
                        }`}
                      >
                        {state && state.user && state.user.name}
                      </a>
                    </Link>
                  </li>
                  {state.user.role === "Admin" && (
                    <li>
                      <Link href="/admin">
                        <a
                          className={`dropdown-item ${
                            current === "/admin" && "linkko"
                          }`}
                        >
                          {state && state.user && state.user.name} System
                        </a>
                      </Link>
                    </li>
                  )}
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={logout}>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
