import React, { useMemo, useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList.jsx";
import PostForm from "./components/PostForm.jsx";
import PostFilter from "./components/PostFilter.jsx";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "HTML", body: "Язык гипертекстовой разметки" },
    { id: 2, title: "CSS", body: "Каскадные таблицы стилей" },
    { id: 3, title: "JavaScript", body: "Простой язык программирования" },
    { id: 4, title: "Python", body: "Еще один язык программирования" },
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  // Get post from child component
  const removePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "16px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {sortedAndSearchedPosts.length !== 0
        ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов" />
        : <h2 style={{ textAlign: "center", marginTop: "16px" }}>Список постов пуст</h2>
      }
    </div>
  );
}

export default App;
