import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList.jsx";
import PostForm from "./components/PostForm.jsx";
import PostFilter from "./components/PostFilter.jsx";
import Modal from "./components/UI/Modal/Modal.jsx";
import Button from "./components/UI/Buttons/Button.jsx";
import { usePosts } from "./hooks/usePosts.jsx";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "HTML", body: "Язык гипертекстовой разметки" },
    { id: 2, title: "CSS", body: "Каскадные таблицы стилей" },
    { id: 3, title: "JavaScript", body: "Простой язык программирования" },
    { id: 4, title: "Python", body: "Еще один язык программирования" },
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  // Get post from child component
  const removePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id));
  };

  return (
    <div className="App">
      <Button onClick={() => {setModal(true);}}>Создать пост</Button>
      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </Modal>
      <hr style={{ margin: "16px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов" />
    </div>
  );
}

export default App;
