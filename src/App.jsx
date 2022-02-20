import React, { useState } from "react";
import "./styles/App.css";
import PostItem from "./components/PostItem";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "HTML", body: "HyperText Markup Language — язык гипертекстовой разметки" },
    { id: 2, title: "CSS", body: "Cascading Style Sheets - каскадные таблицы стилей" },
    { id: 3, title: "JavaScript", body: "JavaScript - язык программирования" },
  ]);
  return (
    <div className="App">
      {posts.map((post) =>
        <PostItem post={post} key={post.id} />,
      )}
    </div>
  );
}

export default App;
