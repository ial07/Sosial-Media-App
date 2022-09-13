import Post from "./Post";

const PostList = ({
  posts,
  handleDelete,
  handleLike,
  handleUnLike,
  handleComments,
  removeComment,
}) => {
  return (
    <div>
      {posts &&
        posts.map((post) => (
          <div key={post._id}>
            <Post
              post={post}
              handleDelete={handleDelete}
              handleLike={handleLike}
              handleUnLike={handleUnLike}
              handleComments={handleComments}
              removeComment={removeComment}
              page="dashboard"
            />
          </div>
        ))}
    </div>
  );
};

export default PostList;
