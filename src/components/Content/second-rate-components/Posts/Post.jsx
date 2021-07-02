import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <>
      <div className={s.myPosts}>
        <div className={s.imgPost}>
          <img
            className={s.imgPostContent}
            src="https://www.kino-teatr.ru/movie/posters/big/8/36398.jpg"
            alt=""
          />
        </div>
        <div className={s.postContent}>
          <div className={s.textPost}>{props.message}</div>
          <div className={s.likes}>likes {props.likeCount}</div>
        </div>
      </div>
    </>
  );
};

export default Post;
