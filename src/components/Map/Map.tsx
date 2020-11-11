import React, { Dispatch } from "react";
import { ReactComponent as MapSvg } from './img/map.svg'
import { ReactComponent as Plus } from './img/plus.svg'
import { ReactComponent as Minus } from './img/minus.svg'
import { ReactComponent as Divider } from './img/divider.svg'
import { ReactComponent as Port } from './img/port.svg'
import { ComposableMap, Geographies, Geography, Marker, MarkerProps, Point, ZoomableGroup } from "react-simple-maps"
import ReactTooltip from "react-tooltip";

import './map.scss'
// import { ports } from "../../data/ports";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { portsRef } from "../../data/firebase";
import { RSA_NO_PADDING } from "constants";

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
type Marker = {
    markerOffSet: number,
    name: string,
    coordinates: Point
}


type MapProps = {
    updateContent: any
}
function markers(ports: IPort[]): Marker[] { return ports.map((port, index) => {
    const name = port.code ? port.code : port.portname;
    const marker: Marker = {
        markerOffSet: 15,
        name: name,
        coordinates: [port.longitude, port.latitude]
    };
    return marker;
});}

// export function fetchPorts() {
//    return  portsRef.get().then((querySnapshot) => {
//       let res
//       querySnapshot.docs.map((port) => {
//         res = port.data()
//       })
//       console.log(res)
//       return res
//     })
//   }
// const ports:IPort[] = []
//   const markerss:MarkerProps[] = []

async function fetchPorts() {
    let res: IPort[] = []
    let r =  await portsRef.get()
    let e = r.docs.map(port  => {
        res.push(port.data() as IPort)
    })
    
    
    
    // .then((querySnapshot) => {
    //   querySnapshot.docs.map((port) => {
    //     res.push(port.data() as IPort)
    //   })
    //   // console.log("hello")
    //   console.log(res.length)
    // })
    return res
  }

// export default class Map extends React.Component<MapProps, {}>{
export default async function Map({updateContent}:MapProps){
    // render() {
    // fetchPorts()
    const port = useSelector((state: ApplicationState) => state.port)
    let ports = await fetchPorts()
    console.log("damn " + ports.length)
    while(ports.length <= 0){
        return(
            <div>
                FAK
            </div>
        )
    }
    console.log(ports.length)
    const name = port ? port.portname : ""
        return (
            <div className="map-wrapper">
                <ComposableMap className="map" projectionConfig={{ scale: 200 }}>
                    <ZoomableGroup zoom={1}>
                        <Geographies geography={geoUrl}>
                            {({ geographies }) => geographies.map(geo => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    className="tested" />
                            ))}
                        </Geographies>
                        {markers(ports).map((marker, index) => (
                            <Marker
                                data-tip={name}
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
                                    <Link to={`/port/${port?.PID}`}>
                                        <Port className="padd"/>
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
                    </ZoomableGroup>
                </ComposableMap>
                <ReactTooltip>{port?.portname}, {port?.iso3}</ReactTooltip>
            </div>
        )
    // }
}