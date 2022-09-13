import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";
import ParallaxBG from "../../components/ParallaxBG";
import PostPublic from "../../components/cards/PostPublic";
import { useRouter } from "next/router";

const SinglePost = () => {
  const router = useRouter();
  const _id = router.query._id;

  console.log(_id);
  const [post, setPost] = useState([]);
  useEffect(() => {
    if (_id) fetchData();
  }, [_id]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`/post/${_id}`);
      setPost(data);
      console.log(post);
    } catch (err) {
      console.log(err);
    }
  };

  const head = () => (
    <Head>
      <title>S.O.S.IAL MEDIA</title>
      <meta name="description" content={post.content} />
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
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div>
              <PostPublic post={post} />
            </div>
          </div>
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

export default SinglePost;
