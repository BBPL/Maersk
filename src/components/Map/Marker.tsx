import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Marker, Point } from "react-simple-maps"
import { RootState } from "../../store/fireReducer"
import { ReactComponent as Port } from './img/port.svg'


type MarkerComponentProps = {
    ports: IPort[],
    updateContent: any
}

type Marker = {
    markerOffSet: number,
    name: string,
    coordinates: Point
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


export function MarkerComponent({ updateContent, ports }: MarkerComponentProps) {
    const { current } = useSelector<RootState, PortState>(state => state.ports)

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
