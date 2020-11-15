import React from "react";
import { Link, useParams } from "react-router-dom";
import { CargoProps } from "../Screens/CargoScreen";
import PortInfo from "./PortInfo";

type CargoRouteProp ={
    id: number
}

export default function CargoRoute(props: CargoRouteProp) {

    const { portId, cargoId } = useParams<CargoProps>()
    // const bundle = bundles.find(x => x.id.toString() === cargoId)

    return (
        <div className="route">
            <h1>Route A</h1>
            <PortInfo />
            <PortInfo class="route-metrics" />
            <Link to={`/port/${portId}/cargo/${cargoId}/choice/${props.id}`} className="confirm-route-btn">Confirm Route</Link>
        </div>
    )
}