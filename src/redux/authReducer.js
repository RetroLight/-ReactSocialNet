const SET_USER_LOGIN_DATA = 'SET_USER_LOGIN_DATA';
const SET_USER_LOG_PHOTO = 'SET_USER_LOG_PHOTO';

const initState = {
    id: null,
    login: null,
    email: null,
    isAuthorized: false,
    userLogPhoto: null
};

const authReducer = (state = initState, action) => {

    switch (action.type) {

        case SET_USER_LOGIN_DATA:
            return {
                ...state,
                ...action.data,
                isAuthorized: true
            };

        case SET_USER_LOG_PHOTO:
            return {
                ...state,
                userLogPhoto: action.userLogPhoto
            };

        default:
            return state;
    }
};


export const setUserLoginData = ({id, login, email}) => (
    {
        type: SET_USER_LOGIN_DATA,
        data: {id, login, email}
    }
);
export const setUserLogPhoto = (userLogPhoto) => (
    {
        type: SET_USER_LOG_PHOTO,
        userLogPhoto
    }
);

export default authReducer;