import React from "react";
import { SyncOutlined } from "@ant-design/icons";

const AuthForm = ({
  handleSubmit,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  secret,
  setSecret,
  loading,
  username,
  setUsername,
  setAbout,
  about,
  page,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      {page !== "login" && (
        <div className="form-group p-2">
          <small>
            <label className="text-muted">Your Name</label>
          </small>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Enter Name"
          />
        </div>
      )}
      {page === "profile" && (
        <>
          <div className="form-group p-2">
            <small>
              <label className="text-muted">Username</label>
            </small>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">@</div>
              </div>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              type="text"
              className="form-control"
              placeholder="write about yourself..."
            ></textarea>
          </div>
        </>
      )}

      <div className="form-group p-2">
        <small>
          <label className="text-muted">Email</label>
        </small>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          disabled={page === "profile"}
          className="form-control"
          placeholder="Enter Email"
        />
      </div>
      {page !== "profile" && (
        <div className="form-group p-2">
          <small>
            <label className="text-muted">Password</label>
          </small>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            placeholder="Enter Password"
          />
        </div>
      )}
      {page === "register" && (
        <>
          <div className="form-group p-2">
            <small>
              <label className="text-muted">Confirm Password</label>
            </small>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              className="form-control"
              placeholder="Enter Confirm Password"
            />
          </div>
          <div className="form-group p-2">
            <small>
              <label className="text-muted">Pick a question</label>
            </small>
            <select className="form-control">
              <option>What is your favorite color?</option>
              <option>What is your bestfriend name?</option>
              <option>What city you were born?</option>
            </select>

            <small className="form-text text-muted">
              You can use this to reset your password
            </small>

            <div className="form-group">
              <input
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Write your answere here"
              />
            </div>
          </div>
        </>
      )}
      <div className="form-group p-2">
        <button className="btn btn-primary col-12">
          {loading ? (
            <SyncOutlined spin className="py-1" />
          ) : page !== "profile" ? (
            "Submit"
          ) : (
            "Update"
          )}
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
