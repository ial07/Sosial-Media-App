import React from "react";
import { SyncOutlined } from "@ant-design/icons";

const ForgotPassForm = ({
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  secret,
  setSecret,
  loading,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group p-2">
        <small>
          <label className="text-muted">Email</label>
        </small>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="form-control"
          placeholder="Enter Email"
        />
      </div>
      <div className="form-group p-2">
        <small>
          <label className="text-muted">New Password</label>
        </small>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
          placeholder="Enter new password"
        />
      </div>
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
      <div className="form-group p-2">
        <button className="btn btn-primary col-12">
          {loading ? <SyncOutlined spin className="py-1" /> : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default ForgotPassForm;
