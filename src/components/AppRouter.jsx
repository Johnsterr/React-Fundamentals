import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About.jsx";
import Posts from "../pages/Posts.jsx";
import Home from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;