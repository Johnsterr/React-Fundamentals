import { useEffect, useRef, useState } from "react";
import PostList from "../components/PostList.jsx";
import PostForm from "../components/PostForm.jsx";
import PostFilter from "../components/PostFilter.jsx";
import Modal from "../components/UI/Modal/Modal.jsx";
import Button from "../components/UI/Buttons/Button.jsx";
import { usePosts } from "../hooks/usePosts.js";
import { useFetching } from "../hooks/useFetching.js";
import { useObserver } from "../hooks/useObserver.js";
import PostService from "../api/PostService.js";
import Loader from "../components/UI/Loader/Loader.jsx";
import Select from "../components/UI/Selects/Select.jsx";
import { getPagesCount } from "../utils/pages.js";
import Pagination from "../components/UI/Pagination/Pagination.jsx";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, fetchingError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPagesCount(totalCount, limit));
  });

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  // Get post from child component
  const removePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="container container--padding-top container--padding-bottom">
      <Button style={{ marginRight: "16px" }} onClick={() => fetchPosts()}>?????????????????? ??????????</Button>
      <Button onClick={() => {setModal(true);}}>?????????????? ????????</Button>
      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </Modal>
      <hr style={{ margin: "16px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <Select
        value={limit}
        onChange={value => setLimit(value)}
        defaultValue="??????-???? ?????????????????? ???? ????????????????"
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 25, name: "25" },
          { value: -1, name: "???????????????? ??????" },
        ]}
      />
      {fetchingError &&
        <h2 style={{ textAlign: "center", marginTop: "16px" }}>?????????????????? ???????????? ${fetchingError}</h2>
      }
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="???????????? ????????????" />
      <div ref={lastElement} style={{ height: "20px", background: "red" }} />
      {isPostsLoading &&
        <div style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}><Loader /></div>
      }
      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
    </div>
  );
}

export default Posts;
