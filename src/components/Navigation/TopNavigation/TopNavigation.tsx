import React from "react";
import NavigationComponent from "../NavigationComponent/NavigationComponent";
import bellLogo from './img/bell.svg';
import profileLogo from './img/profile.svg'
import searchLogo from './img/search.svg'
import settingsLogo from './img/settings.svg'

// import './Navigation.scss'

export default class TopNavigation extends React.Component<{},{}>{
    render(){
        return(
            <div className="top-nav-container">
                <div className="top-nav-wrapper">
                    <NavigationComponent icon={searchLogo} link="#"/>
                    <NavigationComponent icon={settingsLogo} link="#"/>
                    <NavigationComponent icon={bellLogo} link="#"/>
                    <NavigationComponent icon={profileLogo} link="#"/>
                </div>
            </div>
        )
    }
}