import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import HomePage from "./container/HomePage";
import PostPage from './container/PostPage';
import Header from './Header';
import UserPage from "./container/UserPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/post/:postId" element={<PostPage />} />
          <Route path="/user/:userId" element={<UserPage />} />
          <Route path="/" element={<HomePage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
