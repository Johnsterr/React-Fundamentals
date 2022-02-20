import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList.jsx";
import PostForm from "./components/PostForm.jsx";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "HTML", body: "HyperText Markup Language — язык гипертекстовой разметки" },
    { id: 2, title: "CSS", body: "Cascading Style Sheets - каскадные таблицы стилей" },
    { id: 3, title: "JavaScript", body: "JavaScript - язык программирования" },
  ]);

  // const addNewPost = (event) => {
  //   event.preventDefault();
  //   setPosts([...posts, { ...post, id: Date.now() }]); // Set new state for controlled component
  //   // Clear inputs
  //   setPost({ title: "", body: "" });
  // };

  return (
    <div className="App">
      <PostForm />
      <PostList posts={posts} title="Список постов" />
    </div>
  );
}

export default App;
