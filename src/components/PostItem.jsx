import React from "react";
import Button from "./UI/Buttons/Button.jsx";
import { useNavigate } from "react-router-dom";

const PostItem = (props) => {
  let navigate = useNavigate();

  return (
    <div className="post">
      <div className="post__content">
        <strong>{props.post.id}. {props.post.title}</strong>
        <div>
          {props.post.body}
        </div>
      </div>
      <div className="post__btns">
        <Button style={{ marginRight: "16px" }} onClick={() => navigate(`/posts/${props.post.id}`)}>
          Открыть
        </Button>
        <Button onClick={() => props.remove(props.post)}>
          Удалить
        </Button>
      </div>
    </div>
  );
};

export default PostItem;