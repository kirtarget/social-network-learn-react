// Переменные для экшнов

import {UserAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERSCOUNT = 'SET_TOTAL_USERSCOUNT'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const SET_FOLLOWING_IN_PROGRESS = 'SET_FOLLOWING_IN_PROGRESS'

// Создание экшнов
export const acceptFollow = (userID) => ({type: FOLLOW, userID})
export const acceptUnfollow = (userID) => ({type: UNFOLLOW, userID})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = totalUsersCount => ({type: SET_TOTAL_USERSCOUNT, totalUsersCount})
export const toggleIsFetching = isFetching => ({type: SET_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = (isFetching, userId) => ({type: SET_FOLLOWING_IN_PROGRESS, isFetching, userId})

// Санки

export const getUsers = (currentPage, pageSize) => {

    return (dispatch) => {
        dispatch(toggleIsFetching(true))

        UserAPI.getUsers(currentPage, pageSize)
            .then(response => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(response.items))
                dispatch(setTotalUsersCount(response.totalCount))
            }).catch((e) => console.warn(e))
    }
}
export const unfollow = (userId) => {

    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        UserAPI.unfollowUser(userId)
            .then(response => {

                if (response.data.resultCode === 0) {
                    dispatch(acceptUnfollow(userId))
                    dispatch(toggleFollowingInProgress(false, userId))
                }

            }).catch((e) => console.warn(e))
    }
}
export const follow = (userId) => {

    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        UserAPI.followUser(userId)
            .then(response => {

                if (response.data.resultCode === 0) {
                    dispatch(acceptFollow(userId))
                    dispatch(toggleFollowingInProgress(false, userId))
                }
            }).catch((e) => console.warn(e))
    }
}


// Начальный стейт
const initialState = {
    users: [],
    pageSize: 15,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: false,
    followingInProcess: []
}

// Диспатч
const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:

            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {

                ...state, users: state.users.map(u => {
                    if (u.id === action.userID)
                        return {...u, followed: false}

                    return u
                })
            }

        case SET_USERS:
            return {
                ...state, users: action.users
            }

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_TOTAL_USERSCOUNT:
            return {...state, totalUsersCount: action.totalUsersCount}

        case SET_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        case SET_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProcess: action.isFetching
                    ? [...state.followingInProcess, action.userId]
                    : state.followingInProcess.filter(id => id !== action.userId)
            }


        default:
            return state
    }


}

export default usersReducer