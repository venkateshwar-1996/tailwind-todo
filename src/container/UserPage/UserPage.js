import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import User from "../../component/User";
import { DataContext } from './../../context/dataContext';
import { useParams } from "react-router-dom";

const UserPage = ({ match }) => {
  const userId = Number(useParams().userId);
  const [user, setUser] = useState({});

  const context = useContext(DataContext);
  useEffect(() => {
      const userDetails = context.users.find((user) => user.id === userId);
      setUser(userDetails);
  }, [context.users, userId]);
  
  return (
    <>
      <div>
        <User {...user} isLoading={context.loading} />
      </div>
    </>
  );
};

UserPage.propTypes = {
  match: PropTypes.object,
};
export default UserPage;
