import React from "react";
import { Component, FunctionComponent } from "react";

type PotentialRouteProp = {
    route: IRouteProposition
}

export class PotentialRoute extends Component<PotentialRouteProp, {}>{
    render(){
        return (
            <div className="potential-route-wrapper">
                <div className="potential-route">
                    <h1>{this.props.route.name}</h1>
                </div>
            </div>
        )
    }
}