import React from "react";
import Counter from "./components/Counter.jsx";
import ClassCounter from "./components/ClassCounter.jsx";
import "./styles/App.css";
import PostItem from "./components/PostItem";

function App() {
  return (
    <div className="App">
      <PostItem post={{ id: 1, title: "JavaScript", body: "JavaScript - язык программирования" }} />
      <PostItem post={{ id: 2, title: "JavaScript", body: "JavaScript - язык программирования" }} />
      <PostItem post={{ id: 3, title: "JavaScript", body: "JavaScript - язык программирования" }} />
    </div>
  );
}

export default App;
