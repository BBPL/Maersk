import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import ReactTooltip from "react-tooltip";

import './map.scss'
import { useSelector } from "react-redux";
import { RootState } from "../../store/fireReducer";
import { MarkerComponent } from "./Marker";

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


type MapProps = {
    updateContent: any,
    ports: IPort[]
}

export default function Map({ updateContent, ports }: MapProps) {    // render() {
    const { current } = useSelector<RootState, PortState>(state => state.ports)
    return (
        <div className="map-wrapper">
            <ComposableMap className="map" projectionConfig={{ scale: 200 }}>
                <Geographies geography={geoUrl}>
                    {({ geographies }) => geographies.map(geo => (
                        <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            className="tested" />
                    ))}
                </Geographies>
                <MarkerComponent updateContent={updateContent} ports={ports} />}
            </ComposableMap>
            <ReactTooltip>{current?.portname}, {current?.iso3}</ReactTooltip>
        </div>
    )
}
