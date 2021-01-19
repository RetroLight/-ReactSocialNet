import React from 'react';
import cssCls from './UsersList.module.css';
import * as axios from 'axios'
import noPhoto from '../../../assets/img/noPhoto.jpeg'

class UsersList extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.items_count}&page=${this.props.current_page}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsers(response.data.totalCount);
            });

    }

    onPageClick = (page) => {
        this.props.setCurrentPage(page);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.items_count}&page=${page}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    };

    render() {

        let total_user_pages = Math.ceil(this.props.total_users_count / this.props.items_count);
        let users_pagination_arr = [];
        for (let i = 1; i <= total_user_pages; i++) {
            users_pagination_arr.push(i);
        }

        return (
            <div className={cssCls.users}>
                <div className={cssCls.users_pages_row}>
                    {
                        users_pagination_arr.map(page => {
                            return (
                                this.props.current_page === page ?
                                    <span onClick={(e) => this.onPageClick(page)}
                                          className={cssCls.active_users_page_item}>{page}</span> :
                                    <span onClick={(e) => this.onPageClick(page)}
                                          className={cssCls.users_page_item}>{page}</span>

                            );
                        })
                    }
                </div>
                {
                    this.props.usersList.map(user =>
                        <div className={cssCls.userItem}>
                            <div className={cssCls.photoBlock}>
                                <img src={user.photos.small ? user.photos.small : noPhoto} alt=""/>
                            </div>
                            <div className={cssCls.infoBlock}>
                                <div className={cssCls.userNameWrapper}>
                                    <span className={cssCls.name}>{user.name}</span>&nbsp;
                                    {/*<span className={cssCls.surname}>{user.surname}</span>*/}
                                </div>
                                <div className={cssCls.userInfoWrapper}>
                                    <div className={cssCls.userLoc}>
                                        <div>{'user.location.city'}</div>
                                        <div>{'user.location.country'}</div>
                                    </div>
                                    <div className={cssCls.userStatus}>{user.status}</div>
                                </div>
                            </div>
                            <div className={cssCls.followBtnWrap}>
                                {
                                    user.followed
                                        ? <button onClick={() => {
                                            this.props.unfollowBtn(user.id)
                                        }} className={cssCls.activeFollowBtn}>Отписаться</button>
                                        : <button onClick={() => {
                                            this.props.followBtn(user.id)
                                        }} className={cssCls.followBtn}>Подписаться</button>
                                }
                            </div>
                        </div>)
                }
                <div className={cssCls.users_pages_row}>
                    {
                        users_pagination_arr.map(page => {
                            return (
                                this.props.current_page === page ?
                                    <span onClick={(e) => this.onPageClick(page)}
                                          className={cssCls.active_users_page_item}>{page}</span> :
                                    <span onClick={(e) => this.onPageClick(page)}
                                          className={cssCls.users_page_item}>{page}</span>

                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default UsersList;

