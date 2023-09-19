import { Link } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import styles from "./Posts.module.scss";
import { useActions } from "../../hooks/useActions";
import { useEffect, useState } from "react";
import { TPost } from "../../types/post";
import { useDispatch } from "react-redux";
import { fetchAllPosts } from "../../store/asyncActions/posts";
import { Dispatch } from "redux";

const Posts = () => {
  const { fetchAllPosts } = useActions();
  const data = useTypedSelector((state) => state.posts.data);
  const isLoading = useTypedSelector((state) => state.posts.loading);
  const [posts, setPosts] = useState<TPost[]>([]);

  useEffect(() => {
    setPosts(data);
  }, [data]);

  const fetchPosts = () => {
    fetchAllPosts();
  };
  console.log(posts);

  return (
    <div className={styles.posts}>
      <div className={styles.posts__items}>
        {isLoading && <h2>Идет загрузка...</h2>}
        {posts &&
          posts.map((item) => (
            <Link
              className={styles.posts__item}
              key={item.id}
              to={`/posts/${item.id}`}
            >
              {item.title}
            </Link>
          ))}
      </div>
      <button className={styles.posts__button} onClick={() => fetchPosts()}>
        Загрузить посты., данны емне
      </button>
    </div>
  );
};

export default Posts;
