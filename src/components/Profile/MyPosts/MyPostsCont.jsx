import React from "react";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        postsDataArr: state.profilePage.posts_data_arr,
        newPostTxt: state.profilePage.newPostTxt
    };
};

 const mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (text) => dispatch(updatePostActionCreator(text)),
        addPost: () => dispatch(addPostActionCreator())
    }
 };

const MyPostsCont = connect(mapStateToProps, mapDispatchToProps)(MyPosts);



export default MyPostsCont;