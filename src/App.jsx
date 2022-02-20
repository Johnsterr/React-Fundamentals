import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList.jsx";
import Button from "./components/UI/Buttons/Button.jsx";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "HTML", body: "HyperText Markup Language — язык гипертекстовой разметки" },
    { id: 2, title: "CSS", body: "Cascading Style Sheets - каскадные таблицы стилей" },
    { id: 3, title: "JavaScript", body: "JavaScript - язык программирования" },
  ]);
  return (
    <div className="App">
      <Button></Button>
      <PostList posts={posts} title="Список постов" />
    </div>
  );
}

export default App;
