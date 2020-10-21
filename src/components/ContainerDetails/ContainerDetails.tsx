import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ContainerStatus } from "../../data/enum";

import './ContainerDetails.scss'

export function ContainerDetails() {
    const bundle = useSelector((state:ContainerBundleState) => state.containerBundle)
    if (!bundle)
        return (<div className="container-details"/>)
    return(
        <div className="container-details">
            <div className='route-details'></div>
            <div className='potential-route-container'>
                
            </div>
            <h1>{bundle.name}</h1>
            <p>{ContainerStatus[bundle.priority]}</p>
        </div>
    )
}