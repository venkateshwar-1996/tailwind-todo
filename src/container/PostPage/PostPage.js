import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { fetchComments } from "./../../helpers/fetchDetails";
import "./PostPage.css";
import PostDetails from "../../component/PostDetails";
import { DataContext } from "./../../context/dataContext";
import { useParams } from 'react-router-dom'

const PostPage = ({ match }) => {
  const postId = Number(useParams().postId);
  const [post, setPost] = useState({});
  const context = useContext(DataContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchComments(postId)
      .then((comments) => {
        const postDetails = context.posts.find((post) => post.id === postId);
        (postDetails || {}).comments = comments;
        setPost(postDetails);
      })
      .finally(() => setLoading(false));
  }, [context.posts, postId]);

  return (
    <>
      <div>
          <PostDetails {...post} isLoading={context.loading || loading} />
      </div>
    </>
  );
};

PostPage.propTypes = {
  match: PropTypes.object,
};
export default PostPage;
