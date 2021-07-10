import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import s from "./Post.module.css";

const Posts = () => {
  const posts = useSelector((state) => state.profilePage.post);
  return (
    <>
      <div className={s.mainPost}>
        {posts.map((p, index) => (
          <Post key={index} message={p.message} likeCount={p.likeCount} />
        ))}
      </div>
    </>
  );
};

export default Posts;
