import React from "react";

type NavigationComponentProp = {
    name?: string,
    link?: string,
    icon: string
}

export default class NavigationComponent extends React.Component<NavigationComponentProp, {}> {
    render() {
        const { name, link, icon } = this.props;
        if (name && link) {
            return (
                <div className="nav-component-wrapper">
                    <div className="nav-component-icon">
                        <img src={this.props.icon} alt={this.props.name} />
                    </div>
                    <div className="nav-component-text">
                        {this.props.name}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="nav-component-wrapper">
                    <div className="nav-component-icon">
                        <img src={this.props.icon} alt={this.props.name} />
                    </div>
                </div>
            )
        }

    }
}