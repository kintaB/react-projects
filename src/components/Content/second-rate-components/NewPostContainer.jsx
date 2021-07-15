import { connect } from "react-redux";
import NewPost from "./NewPost";
import { createPost, updatePostText } from "../../../redux/profileReducer";

let mapStateToProps = (state) => {
  return { profilePage: state.profilePage };
};

const NewPostContainer = connect(mapStateToProps, {
  createPost,
  updatePostText,
})(NewPost);

export default NewPostContainer;
