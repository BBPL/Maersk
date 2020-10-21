import React from "react";
import { Component, FunctionComponent } from "react";
import { RoutePortStatus } from "../../data/enum";

type PotentialRouteProp = {
    route: IRouteProposition
}

export class PotentialRoute extends Component<PotentialRouteProp, {}>{
    render(){
        const {bunkerPricing, costSaving, name, ports} = this.props.route
        return (
            <div className="potential-route-wrapper">
                <div className="potential-route">
                    <h1>{name}</h1>
                    <div>
                        <p>Bunker pricing: -{bunkerPricing}$</p>
                        <p>Cost: -{costSaving}$</p>
                        {ports.map((port, index) => (
                            <div>
                                <p>{port.name}</p>
                                <p>{RoutePortStatus[port.status]}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}