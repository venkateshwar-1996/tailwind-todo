import React from "react";
import PropTypes from "prop-types";
// import './PostDetails.css';

const Comments = ({ comments }) => {
  const commentsList = (comments || []).map((comment) => {
    return (
      <div key={comment.name}>
        <small className="card-text">Email: {comment.email}</small>
        <p className="card-text">Comment: {comment.body}</p>
        <hr />
      </div>
    );
  });
  return commentsList;
};

const PostDetails = ({ title, body, comments, userName }) => {
  return (
    <div data-testid={'postdetails'} className="container m-auto p-50 h-500 overflow-auto ">
      <h1 className="p-1">{userName}</h1>
      <div className=" flex"> 
        <div className="bg-gray-900 p-5 w-1/2 text-white text-2xl  h-500 overflow-auto">
          <h3 className="">{title}</h3>
          <h5 className="">{body}</h5>
        </div>
        <div className="w-1/2 bg-zinc-400 px-10 py-2 scroll-m-6  h-500 overflow-auto">
          <Comments comments={comments} />
        </div>
      </div>
    </div>
  );
};

PostDetails.propTypes = {
  title: PropTypes.string,
  userName: PropTypes.string,
  body: PropTypes.string,
  comments: PropTypes.array,
};
export default PostDetails;
