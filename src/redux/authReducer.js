const SET_USER_LOGIN_DATA = 'SET_USER_LOGIN_DATA';

const initState = {
    id: null,
    login: null,
    email: null,
    isAuthorized: false
};

const authReducer = (state = initState, action) => {

    switch (action.type) {

        case SET_USER_LOGIN_DATA:
            return {
                ...state,
                ...action.data,
                isAuthorized: true
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

export default authReducer;