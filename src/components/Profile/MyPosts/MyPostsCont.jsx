import React from "react";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsCont = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                let state = store.getState().profilePage;

                const onPostChange = (text) => {
                    store.dispatch(updatePostActionCreator(text));
                };

                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                };

                return (
                    <MyPosts onPostChange={onPostChange}
                             addPost={addPost}
                             postsDataArr={state.posts_data_arr}
                             newPostTxt={state.newPostTxt}/>
                )
                }
            }
        </StoreContext.Consumer>
    )
};

export default MyPostsCont;

