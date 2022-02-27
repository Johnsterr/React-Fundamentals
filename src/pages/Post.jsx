import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching.js";
import PostService from "../api/PostService.js";
import Loader from "../components/UI/Loader/Loader.jsx";

const Post = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });
  const [fetchPostComments, isLoadingComments, commentsError] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchPostComments(params.id);
  }, []);

  return (
    <div className="container container--padding-top container--padding-bottom">
      <div className="content">
        {error &&
          <h2 style={{ textAlign: "center", marginTop: "16px" }}>Произошла ошибка загрузки поста ${error}</h2>
        }
        {isLoading
          ? <div style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}><Loader /></div>
          : <div className="post-info">
            <h3>Пост с ID = {post.id}</h3>
            <h2 className="post-title">{post.title}</h2>
          </div>
        }
        {isLoadingComments
          ? <div style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}><Loader /></div>
          : <div>
            <h3 className="comments-title">Комментарии к посту</h3>
            {comments.map(comment =>
              <div className="comment" key={comment.id}>
                <h4 className="comment-email">{comment.email}</h4>
                <div className="comment-body">{comment.body}</div>
              </div>
            )}
          </div>
        }
      </div>
    </div>
  );
};

export default Post;