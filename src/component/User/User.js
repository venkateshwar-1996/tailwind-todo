import React from "react";
import PropTypes from "prop-types";

const User = ({ username, name, email, website, company }) => {
  return (
    <div data-testid={"user"} className="mt-4 flex flex-row m-auto container justify-center h-200">
      <div className="p-6 bg-gray-900 text-white">
        <p>User Name: {username}</p>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Website: {website}</p>
      </div>
      <div className="p-6 bg-zinc-400">
        <p>Work: {(company || {}).name}</p>
        <p>Slogan: {(company || {}).catchPhrase}</p>
        <p>Base: {(company || {}).bs}</p>
      </div>
    </div>
  );
};

User.propTypes = {
  username: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  website: PropTypes.string,
  company: PropTypes.object
};
export default User;
