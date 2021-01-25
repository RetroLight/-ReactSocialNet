const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const FILL_USERS = 'FILL_USERS';
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';
const CURRENT_PAGE = 'CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initState = {
    usersList: [],
    current_page: 1,
    items_count: 23,
    total_users_count: 0,
    isFetching: false
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

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        default:
            return state

    }

};

// ****************ACTION CREATORS****************

export const followUser = (userId) => ({
    type: FOLLOW_USER,
    userId: userId
});

export const unfollow = (userId) => ({
    type: UNFOLLOW_USER,
    userId
});

export const fillUsers = (users) => ({
    type: FILL_USERS,
    usersList: users
});
export const setTotalUsers = (totalUsersCount) => ({
    type: TOTAL_USERS_COUNT,
    totalUsersCount
});
export const setCurrentPage = (page) => ({
    type: CURRENT_PAGE,
    page
});
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});


export default usersPageReducer;
