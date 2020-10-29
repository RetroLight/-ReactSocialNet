import React from "react";
import cssCls from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    const posts_elements = props.posts_data_arr
        .map(post => <Post post_id={post.post_id} post_avtr={post.post_avtr} message={post.post_msg} likes={post.post_like_counter}/>);


    const text_area_elem = React.createRef();

    const onPostChange = () => {
        let action = {
            type: 'UPDATE-POST-TXT',
            newTxt: text_area_elem.current.value
        }
        props.dispatch(action);
    };

    const addPost = ()=> {
        props.dispatch({type: 'BLL-ADD-POST'})
    };

    return (
    <div>
        My posts
        <div className={cssCls.new_post_block}>
            <textarea ref={text_area_elem} className={cssCls.post_textarea} cols="30" rows="10" placeholder={'Текст поста'}
                      onChange={onPostChange} value={props.newPostTxt} />

            <button className={cssCls.post_post_btn} onClick={addPost}>Отправить</button>
        </div>
        <div className={cssCls.posts}>
            {posts_elements}
        </div>
    </div>
    )
};

export default MyPosts;

