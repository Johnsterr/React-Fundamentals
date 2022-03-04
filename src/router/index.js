import { Navigate } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Post from "../pages/Post.jsx";
import Posts from "../pages/Posts.jsx";
import Login from "../pages/Login.jsx";
import NotFound from "../pages/NotFound.jsx";

export const privateRoutes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/posts", element: <Posts /> },
  { path: "/posts/:id", element: <Post /> },
  { path: "*", element: <NotFound /> },
];

export const publicRoutes = [
  { path: "/login", element: <Login /> },
  { path: "*", element: <Navigate to="login" replace /> },
];