import React from "react";

type PortInfoProp = {
    class?: string
}

export default function PortInfo(props:PortInfoProp) {
    
    return (
        <>
            <div className="port-name">
                <div className="port-type">Departure Port:</div>
                <div className="port-location">Copenhagen</div>
            </div>
            <div className={props.class ? `port-info ${props.class}`: 'port-info'}>
                <div className="desc">
                    <div className="fat">Vessel ID:</div>
                    <div>Departure:</div>
                    <div>Capacity:</div>
                    <div>Arrival:</div>
                </div>
                <div className="vals">
                    <div className="fat">Mærsk Bristol</div>
                    <div>xxxxxxx</div>
                    <div>xxxxxxx</div>
                    <div>xxxxxxx</div>
                </div>
            </div>
        </>
    )
}