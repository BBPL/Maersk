import React from "react";
import { useParams } from "react-router-dom";
import { ports } from "../../data/ports";
import { date } from "../../services/dateService";
import ContainerBundleList from "../ContainerBundleList/ContainerBundle";
import ContentContainer from "../ContentContainer/ContentContainer";
import calendar from './../../img/calendar.svg'

type TestProp = {
    portId:string
}


const portName = (port: IPort | undefined) => {
    if(!port) return ''
    const name = port.portname ? port.portname : ''
    const code = port.code ? `[${port.code}]` : ''
    const country = port.country ? port.country : ''

    return `${name}${code}, ${country}[${port.iso3}]` 
}

// export default class PortScreen extends React.Component<{}, {}>{
export default function PortScreen() {

    const { portId } = useParams<TestProp>()
    // const port = useSelector<RootState,IPort | null>((state) => state.ports.current)
    const port = ports.find(x => x.PID.toString() === portId)
    return (
        <div className="body-content no-scroll">
            {/* <div></div> */}
            <ContentContainer>
                <div className="box-description">
                    <div className="box-title">
                        {portName(port)}
                    </div>
                    <div className="box-date">
                        {/* 18 January 2020 */}
                        {date()}
                        <img src={calendar} alt="Calendar" />
                    </div>
                </div>
                <ContainerBundleList />
            </ContentContainer>
        </div>
    )
    // }
}