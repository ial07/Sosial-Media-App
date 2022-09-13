import { useContext } from "react";
import moment from "moment";
import { Avatar, List } from "antd";
import { useRouter } from "next/router";
import { UserContext } from "../../context";
import { UserOutlined } from "@ant-design/icons";

const PeopleList = ({ peoples, handleFollow, handleUnFollow }) => {
  const [state] = useContext(UserContext);

  const router = useRouter();

  return (
    <div>
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
                  <a onClick={() => router.push(`/user/${person.username}`)}>
                    {person.username}
                  </a>
                  {state &&
                  state.user &&
                  person.followers &&
                  person.followers.includes(state.user._id) ? (
                    <span
                      className="text-primary btn"
                      onClick={() => handleUnFollow(person)}
                    >
                      Unfollow
                    </span>
                  ) : (
                    <span
                      className="text-primary btn"
                      onClick={() => handleFollow(person)}
                    >
                      Follow
                    </span>
                  )}
                </div>
              }
              description={`${person.about != null ? person.about : ""}`}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default PeopleList;
