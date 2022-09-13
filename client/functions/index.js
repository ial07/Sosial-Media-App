import { Avatar } from "antd";

export const ImageProfile = ({ post, size }) => {
  // console.log("INI PERSON => ", post.postedBy.image.url);
  return post && post.postedBy.image && post.postedBy.image.url != null ? (
    <Avatar size={size} src={post.postedBy.image.url} className="mb-1 mr-3" />
  ) : (
    <Avatar size={size} className="mb-1 mr-3">
      {post.postedBy.name[0]}
    </Avatar>
  );
};
