import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList.jsx";
import Button from "./components/UI/Buttons/Button.jsx";
import Input from "./components/UI/Inputs/Input.jsx";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "HTML", body: "HyperText Markup Language — язык гипертекстовой разметки" },
    { id: 2, title: "CSS", body: "Cascading Style Sheets - каскадные таблицы стилей" },
    { id: 3, title: "JavaScript", body: "JavaScript - язык программирования" },
  ]);
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (event) => {
    event.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]); // Set new state for controlled component
    // Clear inputs
    setPost({ title: "", body: "" });
  };

  return (
    <div className="App">
      <form>
        <Input
          type="text"
          placeholder="Название поста"
          value={post.title}
          onChange={event => setPost({ ...post, title: event.target.value })}
        />
        <Input
          type="text"
          placeholder="Описание поста"
          value={post.body}
          onChange={event => setPost({ ...post, body: event.target.value })}
        />
        <Button onClick={addNewPost}>Создать пост</Button>
      </form>
      <PostList posts={posts} title="Список постов" />
    </div>
  );
}

export default App;
