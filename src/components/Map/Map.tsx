import React from "react";
import { ReactComponent as Port } from './img/port.svg'
import { ComposableMap, Geographies, Geography, Marker, Point, ZoomableGroup } from "react-simple-maps"
import ReactTooltip from "react-tooltip";

import './map.scss'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/fireReducer";

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
type Marker = {
    markerOffSet: number,
    name: string,
    coordinates: Point
}


type MapProps = {
    updateContent: any,
    ports: IPort[]
}
function markers(ports: IPort[]): Marker[] {
    return ports.map((port, index) => {
        const name = port.code ? port.code : port.portname;
        const marker: Marker = {
            markerOffSet: 15,
            name: name,
            coordinates: [port.longitude, port.latitude]
        };
        return marker;
    });
}

// export default class Map extends React.Component<MapProps, {}>{
export default function Map({ updateContent, ports }: MapProps) {    // render() {
    const {current} = useSelector<RootState,PortState>(state => state.ports)
    return (
        <div className="map-wrapper">
            <ComposableMap className="map" projectionConfig={{ scale: 200 }}>
                {/* <ZoomableGroup zoom={1}> */}
                    <Geographies geography={geoUrl}>
                        {({ geographies }) => geographies.map(geo => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                className="tested" />
                        ))}
                    </Geographies>
                    <MarkerComponent updateContent={updateContent} ports={ports} />}
                    {/* <Markercomp */}
                {/* </ZoomableGroup> */}
            </ComposableMap>
            <ReactTooltip>{current?.portname}, {current?.iso3}</ReactTooltip>
        </div>
    )
    // }
}

type MarkerComponentProps = {
    ports: IPort[],
    updateContent: any
}

function MarkerComponent({ updateContent, ports }: MarkerComponentProps) {
    const {current} = useSelector<RootState,PortState>(state => state.ports)

    return (
        <>
            {markers(ports).map((marker, index) => (
                <Marker
                    data-tip={marker.name}
                    // data-type="warning"
                    key={index}
                    coordinates={marker.coordinates}
                    onMouseEnter={() => {
                        const port = ports?.filter(port => port.code === marker.name || port.portname === marker.name)[0]
                        updateContent(port)
                    }}
                    onMouseLeave={() => updateContent()}>
                    <g
                        fill="none"
                        // stroke="#FF5533"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        transform="translate(-12, -24)"
                        className="marker-box"
                    >
                        <Link to={`/port/${current?.PID}`}>
                            <Port className="padd" />
                        </Link>
                        {/* <circle cx="12" cy="10" r="3" />
                        <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" /> */}
                    </g>

                    {/* <text
                        textAnchor="middle"
                        y={marker.markerOffSet}
                        style={{ fill: "#5D5A6D" }}
                        >
                        {marker.name}
                    </text> */}
                </Marker>
            ))}
        </>
    )
}
