import React from "react";
import PostItem from "./PostItem.jsx";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return (<h2 style={{ textAlign: "center", marginTop: "16px" }}>Список постов пуст</h2>);
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        {title}
      </h1>
      {posts.map((post, index) =>
        <PostItem remove={remove} number={index + 1} post={post} key={post.id} />,
      )}
    </div>
  );
};

export default PostList;