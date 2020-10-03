import React from "react";
import cssCls from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    const posts_elements = props.posts_data_arr
        .map(post => <Post post_id={post.post_id} post_avtr={post.post_avtr} message={post.post_msg} likes={post.post_like_counter}/>);

    return (
    <div>
        My posts
        <div className={cssCls.new_post_block}>
            <textarea className={cssCls.post_textarea} name="" id="" cols="30" rows="10"></textarea>
            <button className={cssCls.post_post_btn}>Отправить</button>
        </div>
        <div className={cssCls.posts}>
            {posts_elements}
        </div>
    </div>
    )
};

export default MyPosts;

