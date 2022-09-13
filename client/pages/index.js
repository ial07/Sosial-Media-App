import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";
import ParallaxBG from "../components/ParallaxBG";
import { UserContext } from "../context";
import PostPublic from "../components/cards/PostPublic";
import Link from "next/link";
import io from "socket.io-client";

const socket = io(
  process.env.NEXT_PUBLIC_SOCKETIO,
  { path: "/socket.io" },
  {
    reconnection: true,
  }
);

const Home = () => {
  // const [state, setState] = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [newsfeeds, setNewsfeeds] = useState([]);
  useEffect(() => {
    newsFeeds();
    fetchData();
  }, []);

  const newsFeeds = () => {
    socket.on("new-post", (newPost) => {
      setNewsfeeds([newPost, ...posts]);
      console.log(newPost, ...posts);
    });
  };

  const collection = newsFeeds.length > 0 ? newsfeeds : posts;

  // console.log(collection);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("/posts");
      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const head = () => (
    <Head>
      <title>S.O.S.IAL MEDIA</title>
      <meta name="description" content="A sosial media for developers" />
      <meta property="og:description" content="A sosial media for developers" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="S.O.S.IAL MEDIA" />
      <meta property="og:url" content="http://media-ial.com" />
      <meta property="og:image" content="http://media-ial.com/img/pedes.jpg" />
    </Head>
  );

  return (
    <>
      {head()}
      <ParallaxBG />
      <div className="container">
        {/* <button
          onClick={() => {
            socket.emit("send-message", "this is IAL!!!");
          }}
        >
          Send message
        </button> */}
        <div className="row">
          {collection.map((post) => (
            <div className="col-md-4" key={post._id}>
              <Link href={`/post/${post._id}`}>
                <div className="cardPublicPost">
                  <PostPublic post={post} />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// export async function getServerSideProps() {
//   const { data } = await axios.get("/posts");
//   return {
//     props: {
//       posts: data,
//     },
//   };
// }

export default Home;
