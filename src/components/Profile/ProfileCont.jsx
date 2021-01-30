import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import * as axios from "axios";
import {
    addPostActionCreator,
    setUserProfileActionCreator,
    updatePostActionCreator
} from "../../redux/profilePageReducer";
import {withRouter} from "react-router-dom";

class ProfileCont extends React.Component {

    componentDidMount() {

        let uriData = this.props.match.params.userId;
        if(!uriData) {
            uriData = 2;
        }

            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${uriData}`)
            .then(response => {
                this.props.setUserProfileActionCreator(response.data);
            });
    }

    render() {
        return <Profile {...this.props}/>
    }

}

const mapStateToProps = (state) => {
    return {
        postsDataArr: state.profilePage.posts_data_arr,
        newPostTxt: state.profilePage.newPostTxt,
        userProfile: state.profilePage.userProfile
    };
};

let ProfileUriParamComponent = withRouter(ProfileCont);
export default connect(mapStateToProps, {updatePostActionCreator, addPostActionCreator, setUserProfileActionCreator})(ProfileUriParamComponent);