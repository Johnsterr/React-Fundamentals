import React from "react";
import Button from "./UI/Buttons/Button.jsx";

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>{props.post.id}. {props.post.title}</strong>
        <div>
          {props.post.body}
        </div>
      </div>
      <div className="post__btns">
        <Button
          className="btn"
          onClick={() => props.remove(props.post)}
        >
          Удалить
        </Button>
      </div>
    </div>
  );
};

export default PostItem;