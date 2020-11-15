import React from "react";
import { useParams } from "react-router-dom";
import { ContainerStatus } from "../../data/enum";
import { bundles } from "../../data/mock/containerBundles";
import CargoRoute from "../Cargo/CargoRoute";
import PortInfo from "../Cargo/PortInfo";
import { ContainerBundle } from "../ContainerBundle/ContainerBundle";

export type CargoProps = {
    portId: string,
    cargoId: string,
}


export default function CargoScreen() {
    const { portId, cargoId } = useParams<CargoProps>()
    const bundle = bundles.find(x => x.id.toString() === cargoId)
    // if(!bundle) {
    //     console.log(bundles)
    //     return <div>wrong cargo</div>
    // }
    // const prio = ContainerStatus[bundle?.priority].toUpperCase()

    return (
        <div className="body-content">
            <div className="cargo-wrapper">
                <div className="cargo-container">
                    <h1>Cargo Case</h1>
                    <div className="description">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                    </div>
                    <div className="routes">
                       <CargoRoute id={1}/>
                       <CargoRoute id={2}/>
                       <CargoRoute id={3}/>
                    </div>
                </div>
            </div>
        </div>
    )
}