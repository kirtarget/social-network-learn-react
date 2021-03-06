import {
    setCurrentPage,
    toggleIsFetching,
    toggleFollowingInProgress,
    getUsers,
    follow,
    unfollow,
} from "../../Redux/users-reducer"
import {connect} from "react-redux"
import React from "react"
import Users from "./Users"
import Preloader from "../common/preloader"
import {withAuthRedirect} from "../hoc/withAuthRedirect"
import {compose} from "redux"

class UsersContainerComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    isFetching={this.props.isFetching}
                    followingInProcess={this.props.followingInProcess}
                    isAuth={this.props.isAuth}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProcess: state.usersPage.followingInProcess,
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleIsFetching,
        toggleFollowingInProgress,
        getUsers,
    })
)(UsersContainerComponent)
