import React from "react";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";


const MyPostsCont = (props) => {

    let store = props.store;
    let state = store.getState().profilePage;

    const onPostChange = (text) => {
        store.dispatch(updatePostActionCreator(text));
    };

    const addPost = () => {
        store.dispatch(addPostActionCreator())
    };

    return (
        <MyPosts onPostChange={onPostChange} addPost={addPost} postsDataArr={state.posts_data_arr} newPostTxt={state.newPostTxt}/>
    )
};

export default MyPostsCont;

