import React from "react";
import cssCls from "./Post.module.css";

const Post = (props) => {

    let post_avtr = props.post_avtr;
    let post_msg = props.message;
    let post_likes = props.likes;
    let post_id = props.post_id;


    return (
        <div className={cssCls.item}>
            <div className={cssCls.item_text_wrapper}>
                <img src={post_avtr} alt=""/>
                <div className={cssCls.item_text}>
                    {post_msg}
                </div>
            </div>
            <div className={cssCls.like_counter}>
                <span className={cssCls.likes_num}>{post_likes}</span>
            </div>
        </div>
    )
};

export default Post;