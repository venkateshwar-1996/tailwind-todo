import React, { useContext } from "react";
import DisplayPosts from "../../component/DisplayPosts";
import { DataContext } from "../../context/dataContext";

const HomePage = () => {
  const context = useContext(DataContext);
  return (
    <>
      <div data-testid="homepage" className=" mt-4 w-auto flex container m-auto justify-center">
          <DisplayPosts isLoading={context.loading} />
      </div>
    </>
  );
};

export default HomePage;
