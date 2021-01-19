const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const FILL_USERS = 'FILL_USERS';
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';
const CURRENT_PAGE = 'CURRENT_PAGE';

const initState = {
    usersList: [],
    current_page: 1,
    items_count: 23,
    total_users_count: 0
};

const usersPageReducer = (state = initState, action) => {

    switch (action.type) {

        case FOLLOW_USER:
            return {
                ...state,
                usersList: state.usersList.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return user;
                })
            };

        case UNFOLLOW_USER:
            return {
                ...state,
                usersList: state.usersList.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return user;
                })
            };

        case FILL_USERS:

            return {
                ...state,
                usersList: [...action.usersList]
            };

        case TOTAL_USERS_COUNT:

            return {
                ...state,
                total_users_count: action.totalUsersCount
            };

        case CURRENT_PAGE:

            return {
                ...state,
                current_page: action.page
            };

        default:
            return state

    }

};


export const followUserActionCreator = (userId) => ({
    type: FOLLOW_USER,
    userId: userId
});

export const unfollowActionCreator = (userId) => ({
    type: UNFOLLOW_USER,
    userId: userId
});

export const fillUsersActionCreator = (users) => ({
    type: FILL_USERS,
    usersList: users
});
export const setTotalUsersAC = (totalUsersCount) => ({
    type: TOTAL_USERS_COUNT,
    totalUsersCount
});
export const setCurrentPageAC = (page) => ({
    type: CURRENT_PAGE,
    page
});


export default usersPageReducer;
