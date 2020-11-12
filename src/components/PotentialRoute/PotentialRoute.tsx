import React from "react";
import { Component } from "react";

type PotentialRouteProp = {
    route: IRouteProposition
}

export class PotentialRoute extends Component<PotentialRouteProp, {}>{
    render() {
        const { bunkerPricing, costSaving, name, ports } = this.props.route
        return (
            <div className="potential-route-wrapper">
                <div className="potential-route">
                    <h1>{name}</h1>
                    <div className="potential-route-details">
                        <div className="item-ltc item">
                            <p className="description">Bunker Pricing</p>
        <p className="value">{bunkerPricing}</p>
                        </div>
                        <div className="item-rtc item"></div>
                        <div className="item-midl item"></div>
                        <div className="item-midr item"></div>
                        <div className="item-brc item"></div>
                        <div className="item-blc item"></div>
                    </div>
                </div>
            </div>
        )
    }
}