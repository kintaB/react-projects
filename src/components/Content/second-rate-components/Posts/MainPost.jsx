import React from "react";
import StoreContext from "../../../../storeContext";
import Post from "./Post";
import s from "./Post.module.css";

const Posts = () => {
  return (
    <StoreContext.Consumer>
      {(store) => (
        <>
          <div className={s.mainPost}>
            {store.getState().profilePage.post.map((p, index) => (
              <Post key={index} message={p.message} likeCount={p.likeCount} />
            ))}
          </div>
        </>
      )}
    </StoreContext.Consumer>
  );
};

export default Posts;
