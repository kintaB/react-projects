import { connect } from "react-redux";
import NewPost from "./NewPost";
import { createPost} from "../../../redux/profileReducer";

let mapStateToProps = (state) => {
  return { profilePage: state.profilePage };
};

const NewPostContainer = connect(mapStateToProps, {
  createPost,
})(NewPost);

export default NewPostContainer;
