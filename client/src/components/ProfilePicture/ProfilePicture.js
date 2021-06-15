import React from "react";
import "./styles.css";

export default class ProfilePicture extends React.Component {
    render() {
        if (!this.props.pictureUrl) {
            return (
                <img className="profile-pic" src="/assets/default_profile_pic.svg" alt="default profile picture" onClick={this.props.openUpload} />
            );
        } else {
            return (
                <img className="profile-pic" src={this.props.pictureUrl} onClick={this.props.openUpload} alt="profile picture" />
            );
        }
    }
}