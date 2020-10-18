import React from "react";
import cssCls from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    const posts_elements = props.posts_data_arr
        .map(post => <Post post_id={post.post_id} post_avtr={post.post_avtr} message={post.post_msg} likes={post.post_like_counter}/>);


    const text_area_elem = React.createRef();

    const onPostChange = () => {
        props.updatePostTxt(text_area_elem.current.value)
    };

    return (
    <div>
        My posts
        <div className={cssCls.new_post_block}>
            <textarea ref={text_area_elem} className={cssCls.post_textarea} name="" id="" cols="30" rows="10" onClick={props.clearField} onChange={onPostChange} value={props.newPostTxt}/>

            <button className={cssCls.post_post_btn} onClick={props.bll_add_post}>Отправить</button>
        </div>
        <div className={cssCls.posts}>
            {posts_elements}
        </div>
    </div>
    )
};

export default MyPosts;

