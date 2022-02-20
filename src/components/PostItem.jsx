import React from "react";

const PostItem = () => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>1. JavaScript</strong>
        <div>
          JavaScript - язык программирования
        </div>
      </div>
      <div className="posr__btns">
        <button className="btn">Удалить</button>
      </div>
    </div>
  );
};

export default PostItem;