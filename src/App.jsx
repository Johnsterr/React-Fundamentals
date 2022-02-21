import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList.jsx";
import PostForm from "./components/PostForm.jsx";
import Select from "./components/UI/Selects/Select.jsx";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "HTML", body: "HyperText Markup Language — язык гипертекстовой разметки" },
    { id: 2, title: "CSS", body: "Cascading Style Sheets - каскадные таблицы стилей" },
    { id: 3, title: "JavaScript", body: "JavaScript - язык программирования" },
  ]);
  const [selectedSort, setSelectedSort] = useState("");

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  // Get post from child component
  const removePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "16px 0" }} />
      <div>
        <Select
          defaultValue={"Сортировка:"}
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
          value={selectedSort}
          onChange={sortPosts}
        />
      </div>
      {posts.length !== 0
        ? <PostList remove={removePost} posts={posts} title="Список постов" />
        : <h2 style={{ textAlign: "center", marginTop: "16px" }}>Список постов пуст</h2>
      }
    </div>
  );
}

export default App;
