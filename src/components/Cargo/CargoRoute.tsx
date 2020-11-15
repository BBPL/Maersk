import React from "react";
import PortInfo from "./PortInfo";

export default function CargoRoute() {
    return (
        <div className="route">
            <h1>Route A</h1>
            <PortInfo />
            <PortInfo class="route-metrics" />
            <div className="confirm-route-btn">Confirm Route</div>
        </div>
    )
}