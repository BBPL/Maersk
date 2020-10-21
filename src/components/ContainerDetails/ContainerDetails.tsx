import React, { ReactNode, useState } from "react";
import { useSelector } from "react-redux";
import { ContainerStatus } from "../../data/enum";

import './ContainerDetails.scss'

export function ContainerDetails() {
    const bundle = useSelector((state: ContainerBundleState) => state.containerBundle)
    
   
    console.log(potentialRoutes)
    

    if (!bundle)
        return (<div className="container-details" />)
    return (
        <div className="container-details">
            <div className='route-details'>
                <h1>{bundle.name}</h1>
                <h2>Priority: {ContainerStatus[bundle.priority]} </h2>
            </div>

            <div className='potential-route-container'>
            <h1>1</h1>
            <potentialRoutes/>
                
            </div>
        </div>
    )
}

function potentialRoutes() {
    const bundle = useSelector((state: ContainerBundleState) => state.containerBundle)
    const resDes = ""
    return (
        {bundle?.potentialRoutes.forEach((route,index) => {
            return(
                <div key={index} className="potential-route-wrapper">
                    <div className="potential-route">
                        {route.name}
                    </div>
                </div>
            )
            
        })}
        
    )
}