const updatePostTxtType = 'UPDATE-POST-TXT';
const addPostType = 'BLL-ADD-POST';


const profilePageReducer = (state, action) => {
    switch (action.type) {
        case updatePostTxtType:
            state.newPostTxt = action.newTxt;
            return state;

        case addPostType:
            if (state.newPostTxt) {
                const new_post_elem = {
                    post_id: Math.floor(Math.random() * 10000000),
                    post_avtr: 'https://sun9-1.userapi.com/impf/c847219/v847219442/d9a2c/NlO4bcfVAjU.jpg?size=400x0&quality=90&crop=0,503,1536,1536&sign=6c4caa97f8264d09497534df8803782e&ava=1',
                    post_msg: state.newPostTxt,
                    post_like_counter: 0
                };
                state.posts_data_arr.unshift(new_post_elem);
                state.newPostTxt = '';
            } else {
                alert('Вы не ввели сообщение')
            }
            return state;

        default:
            return state;
    }
};

export const updatePostActionCreator = (text) => ({
    type: updatePostTxtType,
    newTxt: text
});
export const addPostActionCreator = () => ({
    type: addPostType
});

export default profilePageReducer;
