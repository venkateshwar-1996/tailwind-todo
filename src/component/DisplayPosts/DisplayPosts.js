import React, { useContext } from "react";
import Post from "../Post";
import { DataContext } from "./../../context/dataContext";
// import ListGroup from "react-bootstrap/ListGroup";
// import './DisplayPosts.css';

const DisplayPosts = () => {
  const context = useContext(DataContext);
  const posts = context.posts;

  return (
    <div className="">
      {posts.map((post, i) => {
        return (
          <div key={post.title} variant={i % 2 ? "dark" : "secondary"} >
            <Post {...post} />
          </div>
        );
      })}
    </div>
  );
};

export default DisplayPosts;
