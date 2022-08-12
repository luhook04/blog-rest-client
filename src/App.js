import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import PostPage from "./components/PostPage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <div className="container">
        <Routes>
          <Route exact path="/blog-rest-client" element={<Home />} />
          <Route exact path="/posts/:postId" element={<PostPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
