import React from "react";
import { Link } from "react-router-dom";
import SearchUser from "./component/SearchUser";
// import './Header.css';

const Header = () => {

  return (
    <div className=" h-20 w-full bg-gray-400 flex flex-row">
      {/* <Link className="px-5 self-center" to="/">
        ToDo
      </Link> */}
      <Link className="px-5 self-center"  to="/">
        Posts
      </Link>
      {/* <SearchUser /> */}
    </div>
  );
};

export default Header;
