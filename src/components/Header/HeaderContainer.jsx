import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setUserLoginData, setUserLogPhoto} from "../../redux/authReducer";
import * as axios from "axios";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if(response.data.resultCode === 0) {
                    this.props.setUserLoginData(response.data.data);
                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
                        .then(response => {
                            this.props.setUserLogPhoto(response.data.photos.small);

                        });
                }
            });
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.authReducer.id,
        login: state.authReducer.login,
        email: state.authReducer.email,
        isAuthorized: state.authReducer.isAuthorized,
        userLogPhoto: state.authReducer.userLogPhoto
    }
};

export default connect(mapStateToProps, {setUserLoginData, setUserLogPhoto})(HeaderContainer);