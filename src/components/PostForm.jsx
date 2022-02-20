import React, { useState } from "react";
import Input from "./UI/Inputs/Input.jsx";
import Button from "./UI/Buttons/Button.jsx";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (event) => {
    event.preventDefault();
    const newPost = { ...post, id: Date.now() };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
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
  );
};

export default PostForm;