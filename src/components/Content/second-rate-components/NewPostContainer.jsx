import { connect } from "react-redux";
import NewPost from "./NewPost";
import {
  updatePostTextActionCreator,
  addPostActionCreator,
} from "../../../redux/profileReducer";

let mapStateToProps = (state) => {
  return { profilePage: state.profilePage };
};

let mapDispatchToProps = (dispatch) => {
  return {
    createPost: (e) => {
      let text = e.target.value;
      let newObjectPost = {
        id: "43",
        message: text,
        likeCount: "21312",
      };
      let action = addPostActionCreator(newObjectPost);
      dispatch(action);
    },
    updatePostText: (e) => {
      let text = e.target.value;
      let action = updatePostTextActionCreator(text);
      dispatch(action);
    },
  };
};

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;
