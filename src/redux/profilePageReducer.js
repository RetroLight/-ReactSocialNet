const updatePostTxtType = 'UPDATE-POST-TXT';
const addPostType = 'BLL-ADD-POST';
const SET_PROFILE_USER = 'SET_PROFILE_USER';

const initState = {
    posts_data_arr: [
        {
            post_id: 1,
            post_avtr: 'https://sun9-1.userapi.com/impf/c847219/v847219442/d9a2c/NlO4bcfVAjU.jpg?size=400x0&quality=90&crop=0,503,1536,1536&sign=6c4caa97f8264d09497534df8803782e&ava=1',
            post_msg: 'My first post',
            post_like_counter: 11
        },
        {
            post_id: 2,
            post_avtr: 'https://sun9-1.userapi.com/impf/c847219/v847219442/d9a2c/NlO4bcfVAjU.jpg?size=400x0&quality=90&crop=0,503,1536,1536&sign=6c4caa97f8264d09497534df8803782e&ava=1',
            post_msg: 'Im gonna be awesome react developer',
            post_like_counter: 23
        },
        {
            post_id: 3,
            post_avtr: 'https://sun9-1.userapi.com/impf/c847219/v847219442/d9a2c/NlO4bcfVAjU.jpg?size=400x0&quality=90&crop=0,503,1536,1536&sign=6c4caa97f8264d09497534df8803782e&ava=1',
            post_msg: 'Everything will be great',
            post_like_counter: 55
        }
    ],
    newPostTxt: '',
    userProfile: null
};

const profilePageReducer = (state = initState, action) => {

    switch (action.type) {

        case updatePostTxtType:

            return {
                ...state,
                newPostTxt: action.newTxt
            };

        case addPostType:

            if (state.newPostTxt) {
                const new_post_elem = {
                    post_id: Math.floor(Math.random() * 10000000),
                    post_avtr: 'https://sun9-1.userapi.com/impf/c847219/v847219442/d9a2c/NlO4bcfVAjU.jpg?size=400x0&quality=90&crop=0,503,1536,1536&sign=6c4caa97f8264d09497534df8803782e&ava=1',
                    post_msg: state.newPostTxt,
                    post_like_counter: 0
                };
                return {
                    ...state,
                    posts_data_arr: [new_post_elem, ...state.posts_data_arr],
                    newPostTxt: ''
                };
            } else {
                alert('Вы не ввели сообщение');
                return state;
            }

        case SET_PROFILE_USER:
            return {
                ...state,
                userProfile: action.userProfile
            };

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

export const setUserProfileActionCreator = (userProfile) => (
    {
        type: SET_PROFILE_USER,
        userProfile
    }
);

export default profilePageReducer;
