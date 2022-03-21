import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// import "./Post.css";
const Post = ({ userId, userName, id, title }) => {
  return (
    <div data-testid={"post"} className="bg-slate-500 mt-1" >
      <div className="py-2 px-5">
        <h5>
          <Link to={`/user/${userId}`}>
            <span className="text-white">{userName}</span>
          </Link>
        </h5>
      </div>
      <Link className="no-underline" to={`/post/${id}`}>
        <div className="py-5 px-5">
          <p>
            <span className="text-white">{title}</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

Post.propTypes = {
  userId: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
  userName: PropTypes.string
};
export default Post;
