import React, { useState } from "react"
import NavigationComponent from "./NavigationComponent/NavigationComponent"
import './Navigation.scss'
// import { ReactComponent as allgameslogo } from './../../img/allgames.svg'
import allgameslogo from './../../img/allgames.svg'
import categorieslogo from './../../img/categories.svg'
import livegameslogo from './../../img/livegames.svg'
import statisticslogo from './../../img/statistics.svg'
import { ReactComponent as Mail } from './img/mail.svg'
import { ReactComponent as House } from './img/house.svg'
import { ReactComponent as Games } from './img/games.svg'
import { ReactComponent as Settings } from './img/settings.svg'
import { ReactComponent as Profile } from './img/profile.svg'
import { ReactComponent as Signout } from './img/logout.svg'
import ReactTooltip from "react-tooltip"
import { Link } from "react-router-dom"
import { signOutWithGoogle } from "../../data/firebase"
type NavigationBarProps = {
    logo: string
}

export default class NavigationBar extends React.Component<NavigationBarProps, {}>{
    render() {
        return (
            <NewNavigation />
            // <div className="nav-wrapper">
            //     <div className="nav-logo">
            //         <img src={this.props.logo} alt="Mærsk"/>
            //     </div>
            //     <div className="nav-items-wrapper">
            //         <NavigationComponent icon={allgameslogo} name="All games" link="/"/>
            //         <NavigationComponent icon={livegameslogo} name="Live games" link="/port/1"/>
            //         <NavigationComponent icon={categorieslogo} name="Categories" link="/port/1/cargo/1"/>
            //         <NavigationComponent icon={statisticslogo} name="Statistics" link="/port/1/cargo/1/choice/1"/>
            //     </div>
            // </div>
        )
    }
}


function NewNavigation() {
    return (
        <div className="nav-wrapper">
            <div className="nav-items">
                <Link to="/" data-tip="Home" data-for="navigation">
                    <House className="logo" />
                </Link>
                <Link to="/" data-tip="Mail" data-for="navigation">
                    <Mail className="logo" />
                </Link>
                <Link to="/" data-tip="Games" data-for="navigation">
                    <Games className="logo" />
                </Link>
                <Link to="/" data-tip="Settings" data-for="navigation">
                    <Settings className="logo" />
                </Link>
                <Link to="/" data-tip="Profile" data-for="navigation">
                    <Profile className="logo" />
                </Link>
                <Link to="/" data-tip="Sign out" data-for="navigation" onClick={signOutWithGoogle}>
                    <Signout className="logo" />
                </Link>
                <ReactTooltip id="navigation" place="right"></ReactTooltip>
            </div>
        </div>
    )
}