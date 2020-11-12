import React from "react";
import { useSelector } from "react-redux";
import { ContainerStatus } from "../../data/enum";
import { PotentialRoute } from "../PotentialRoute/PotentialRoute";

import './ContainerDetails.scss'

export function ContainerDetails() {
    const bundle = useSelector((state: ApplicationState) => state.containerBundle)
    
    if (!bundle)
        return (<div className="container-details" />)
    return (
        <div className="container-details">
            <div className='route-details'>
                <h1>{bundle.name}</h1>
                <h2>Priority: {ContainerStatus[bundle.priority]} </h2>
            </div>

            <div className='potential-route-container'>
                {
                    bundle.potentialRoutes.map((route,index)=> (
                        <PotentialRoute route={route}/>
                    ))
                }
            </div>
        </div>
    )
}