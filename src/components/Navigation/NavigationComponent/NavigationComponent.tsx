import React from "react";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import './../../../App.scss'

type NavigationComponentProp = {
    name?: string,
    link: string,
    icon: any,
    onClick?: any,
    setLink?:any
}

export default class NavigationComponent extends React.Component<NavigationComponentProp, {}> {
    render() {
        const { name, link, icon } = this.props;
        // const icon = iconAny as Reactcomponent<
        if (name && link) {
            return (
                // <div className="nav-component-wrapper full-width">
                <Link to={this.props.link} className="nav-component-wrapper full-width" data-tip={this.props.name}>
                    <div className="nav-component-icon">
                        {/* <icon as Reactcomponent /> */}
                        <img src={this.props.icon} alt={this.props.name} />
                    </div>
                    <div className="nav-component-text">
                        {/* {this.props.name} */}
                    </div>
                </Link>
                // </div>
            )
        } else {
            return (
                <Link to={link}>
                    <div className="nav-component-wrapper" onClick={this.props.onClick}>
                        <div className="nav-component-icon">
                            <img src={icon} alt={name} />
                        </div>
                    </div>
                </Link>
            )
        }

    }
}