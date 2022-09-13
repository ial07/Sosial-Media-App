import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../context";
import PeopleList from "./cards/PeopleList";
import { toast } from "react-toastify";

const Search = () => {
  const [state, setState] = useContext(UserContext);

  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const searchUser = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(`/search-user/${query}`);
      setResult(data);
      console.log("INI RESULT => ", result);
    } catch (err) {
      console.log(err);
    }
  };

  const Newsfeeds = async () => {
    try {
      const { data } = await axios.get(`/news-feeds/${pagination}`);
      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFollow = async (user) => {
    // console.log("add follower", user);
    try {
      const { data } = await axios.put("/user-follow", { _id: user._id });
      // console.log("handle follow => ", data);
      //update local storage, update auth, keep token
      let auth = JSON.parse(localStorage.getItem("auth"));
      auth.user = data;
      localStorage.setItem("auth", JSON.stringify(auth));
      //update context
      setState({ ...state, user: data });
      //update people state
      let filtered = result.filter((p) => p._id !== user._id);
      setResult(filtered);
      // re-render the post in newsfeed
      Newsfeeds();
      toast.info(`You following ${user.name}`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnFollow = async (user) => {
    try {
      const { data } = await axios.put("/user-unfollow", { _id: user._id });
      console.log(data);
      //update local storage, update auth, keep token
      let auth = JSON.parse(localStorage.getItem("auth"));
      auth.user = data;
      localStorage.setItem("auth", JSON.stringify(auth));
      //update context
      setState({ ...state, user: data });
      //update people state
      let filtered = result.filter((p) => p._id !== user._id);
      setResult(filtered);
      // re-render the post in newsfeed
      toast.warning(`You Unfollow ${user.name}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="card p-3">
      <form className="form-inline row mt-5" onSubmit={searchUser}>
        <div className="col-8">
          <input
            onChange={(e) => {
              setQuery(e.target.value);
              setResult([]);
            }}
            value={query}
            className="form-control col"
            type="search"
            placeholder="Search"
          />
        </div>
        <div className="col-4">
          <button className="btn btn-outline-primary col-12" type="submit">
            Search
          </button>
        </div>
      </form>

      {result &&
        result.map((r) => (
          <PeopleList
            key={r._id}
            peoples={result}
            handleFollow={handleFollow}
            handleUnFollow={handleUnFollow}
          />
        ))}
    </div>
  );
};

export default Search;
