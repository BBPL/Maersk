import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FirebaseReducer } from "react-redux-firebase";
import { signOutWithGoogle } from "../../../data/firebase";
import { RootState } from "../../../store/fireReducer";
import NavigationComponent from "../NavigationComponent/NavigationComponent";
import bellLogo from './../img/bell.svg';
import profileLogo from './../img/porfile.svg'
import searchLogo from './../img/search.svg'
import settingsLogo from '/../img/svg/settings.svg'
import { ReactComponent as MaerskLogo } from './../../../img/maersk_logo.svg'
import { ReactComponent as ProfileLogo } from './../img/profile.svg'

// export default class TopNavigation extends React.Component<{},{}>{
export default function TopNavigation(){
    const authUser = useSelector<RootState, FirebaseReducer.AuthState>(s => s.firebase.auth )
    const { photoURL, displayName } = authUser


    // render(){
    return(
        <div className="top-nav-container">
            <div className="top-nav-wrapper">
                <div className="item">
                    <MaerskLogo className="logo"/>
                </div>
                <div className="item">
                    {
                        photoURL ? 
                        <img src={photoURL} alt="Profile picture" className="profile-pic"/> 
                        : 
                        <ProfileLogo className="profile-pic"/>
                    }
                </div>
            </div>
        </div>
    )
    // }
}