import React from "react";

const CommentForm = ({ addComment, comment, setComment }) => {
  return (
    <form onSubmit={addComment}>
      <input
        type="text"
        className="form-control"
        placeholder="Write comments..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button className="btn btn-sm btn-primary w-100 mt-3">Submit</button>
    </form>
  );
};

export default CommentForm;
