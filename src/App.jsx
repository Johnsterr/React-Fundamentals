import React, { useMemo, useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList.jsx";
import PostForm from "./components/PostForm.jsx";
import Select from "./components/UI/Selects/Select.jsx";
import Input from "./components/UI/Inputs/Input.jsx";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "HTML", body: "Язык гипертекстовой разметки" },
    { id: 2, title: "CSS", body: "Каскадные таблицы стилей" },
    { id: 3, title: "JavaScript", body: "Простой язык программирования" },
    { id: 4, title: "Python", body: "Еще один язык программирования" },
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  const sortedPosts = useMemo(() => {
    console.log("Call useMemo hook in sortedPosts");
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  // Get post from child component
  const removePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "16px 0" }} />
      <div>
        <Input
          placeholder="Поиск..."
          value={searchQuery}
          onChange={event => setSearchQuery(event.target.value)}
        />
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
      {sortedAndSearchedPosts.length !== 0
        ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов" />
        : <h2 style={{ textAlign: "center", marginTop: "16px" }}>Список постов пуст</h2>
      }
    </div>
  );
}

export default App;
