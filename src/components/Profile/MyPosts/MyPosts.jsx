import React from "react";
import cssCls from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    const posts_data_arr = [
        {
            post_id: 1,
            post_avtr: 'https://sun9-1.userapi.com/impf/c847219/v847219442/d9a2c/NlO4bcfVAjU.jpg?size=400x0&quality=90&crop=0,503,1536,1536&sign=6c4caa97f8264d09497534df8803782e&ava=1',
            post_msg: 'My first post',
            post_like_counter: 11
        },
        {
            post_id: 2,
            post_avtr: 'https://sun9-1.userapi.com/impf/c847219/v847219442/d9a2c/NlO4bcfVAjU.jpg?size=400x0&quality=90&crop=0,503,1536,1536&sign=6c4caa97f8264d09497534df8803782e&ava=1',
            post_msg: 'Im gonna be awesome react  developer',
            post_like_counter: 23
        },
        {
            post_id: 3,
            post_avtr: 'https://sun9-1.userapi.com/impf/c847219/v847219442/d9a2c/NlO4bcfVAjU.jpg?size=400x0&quality=90&crop=0,503,1536,1536&sign=6c4caa97f8264d09497534df8803782e&ava=1',
            post_msg: 'Everything will be great',
            post_like_counter: 55
        }
    ];

    const posts_elements = posts_data_arr
        .map(post => <Post post_id={post.post_id} post_avtr={post.post_avtr} message={post.post_msg} likes={post.post_like_counter}/>);

    return (
    <div>
        My posts
        <div>
            New posts
        </div>
        <div className={cssCls.posts}>
            {posts_elements}
        </div>
    </div>
    )
};

export default MyPosts;

