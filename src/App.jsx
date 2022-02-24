import React, { useEffect, useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList.jsx";
import PostForm from "./components/PostForm.jsx";
import PostFilter from "./components/PostFilter.jsx";
import Modal from "./components/UI/Modal/Modal.jsx";
import Button from "./components/UI/Buttons/Button.jsx";
import { usePosts } from "./hooks/usePosts.js";
import { useFetching } from "./hooks/useFetching.js";
import PostService from "./api/PostService.js";
import Loader from "./components/UI/Loader/Loader.jsx";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, fetchingError] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  });

  useEffect(() => {
    fetchPosts();
  }, []);

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
      <Button onClick={fetchPosts}>Запросить посты</Button>
      <Button onClick={() => {setModal(true);}}>Создать пост</Button>
      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </Modal>
      <hr style={{ margin: "16px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {fetchingError &&
        <h2 style={{ textAlign: "center", marginTop: "16px" }}>Произошла ошибка ${fetchingError}</h2>
      }
      {isPostsLoading
        ? <div style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}><Loader /></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов" />
      }
    </div>
  );
}

export default App;
