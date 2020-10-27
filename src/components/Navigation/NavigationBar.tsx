import React, { SVGProps } from "react"
import NavigationComponent from "./NavigationComponent/NavigationComponent"
import './Navigation.scss'
import allgameslogo from './../../img/allgames.svg'
import categorieslogo from './../../img/categories.svg'
import livegameslogo from './../../img/livegames.svg'
import statisticslogo from './../../img/statistics.svg'
type NavigationBarProps = {
    logo: string
     // title: string | undefined
}

export default class NavigationBar extends React.Component<NavigationBarProps,{}>{
    render(){
        return(
            <div className="nav-wrapper">
                <div className="nav-logo">
                    <img src={this.props.logo} alt="Mærsk"/>
                </div>
                <div className="nav-items-wrapper">
                    <NavigationComponent icon={allgameslogo} name="All games" link="#"/>
                    <NavigationComponent icon={livegameslogo} name="Live games" link="#"/>
                    <NavigationComponent icon={categorieslogo} name="Categories" link="#"/>
                    <NavigationComponent icon={statisticslogo} name="Statistics" link="#"/>
                </div>
            </div>
        )
    }
}  