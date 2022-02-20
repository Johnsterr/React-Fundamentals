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

  const [title, setTitle] = useState("");

  const addNewPost = (event) => {
    event.preventDefault();
    console.log(title);
  };

  return (
    <div className="App">
      <form>
        {/* Управляемый компонент */}
        <Input
          type="text"
          placeholder="Название поста"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <Input type="text" placeholder="Описание поста" />
        <Button onClick={addNewPost}>Создать пост</Button>
      </form>
      <PostList posts={posts} title="Список постов" />
    </div>
  );
}

export default App;
