import React, { useState } from "react"
import NavigationComponent from "./NavigationComponent/NavigationComponent"
import './Navigation.scss'
// import { ReactComponent as allgameslogo } from './../../img/allgames.svg'
import allgameslogo from './../../img/allgames.svg'
import categorieslogo from './../../img/categories.svg'
import livegameslogo from './../../img/livegames.svg'
import statisticslogo from './../../img/statistics.svg'
import ReactTooltip from "react-tooltip"
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
                <NavigationComponent icon={allgameslogo} name="All games" link="/" />
                <NavigationComponent icon={livegameslogo} name="Live games" link="/port/1" />
                <NavigationComponent icon={categorieslogo} name="Categories" link="/port/1/cargo/1" />
                <NavigationComponent icon={statisticslogo} name="Statistics" link="/port/1/cargo/1/choice/1"/>
                <ReactTooltip></ReactTooltip>
            </div>
        </div>
    )
}