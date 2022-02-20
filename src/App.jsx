import React from "react";
import Counter from "./components/Counter.jsx";
import ClassCounter from "./components/ClassCounter.jsx";
import "./styles/App.css";
import PostItem from "./components/PostItem";

function App() {
  return (
    <div className="App">
      <PostItem/>
      <PostItem/>
      <PostItem/>
      <PostItem/>
    </div>
  );
}

export default App;
