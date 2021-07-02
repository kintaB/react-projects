import React from "react";
import Post from "./Post";
import s from "./Post.module.css";

const Posts = (props) => {
  return (
    <>
      <div className={s.mainPost}>
        {props.post.map((p, index) => (
          <Post key={index} message={p.message} likeCount={p.likeCount} />
        ))}
      </div>
    </>
  );
};

export default Posts;
