import React from "react";
import { ReactComponent as MapSvg } from './img/map.svg'
import { ReactComponent as Plus } from './img/plus.svg'
import { ReactComponent as Minus } from './img/minus.svg'
import { ReactComponent as Divider } from './img/divider.svg'
import './map.scss'

export default class Map extends React.Component<{},{}>{
    

    render(){
        return(
            <div className="map-wrapper">
                <MapSvg className="map"/>
                <div className="map-zoom-container">
                    <div className="map-zoom-button"><Plus/></div>
                    <Divider className="map-zoom-divider"/>
                    <div className="map-zoom-button"><Minus/></div>
                </div>
            </div>
        )
    }
}