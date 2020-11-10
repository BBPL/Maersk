import React, { Dispatch, useState } from "react";
import Card from "../Card/Card";
import SmallCard from "../Card/SmallCard";
import Map from './../Map/Map'
import ReactTooltip from "react-tooltip";
import { useDispatch, useSelector } from "react-redux";
import { updateToolTip } from "../../store/actionCreators";


export default function SplashScreen() {
    // export default class SplashScreen extends React.Component<{}, ApplicationState>{


    const port = useSelector((state: ApplicationState) => state.port)
    const dispatch: Dispatch<any> = useDispatch()

    const updateContent = React.useCallback(
        (port: IPort) => dispatch(updateToolTip(port)),
        [dispatch, updateToolTip]
    )

    const name = port ? port.portname : ""
    return (
        <div className="body-content">
            <Map updateContent={updateContent} />
            <SmallCard />
            <SmallCard />
            <SmallCard />
            {/* <p data-tip="hello world">Tooltip</p> */}
            {/* <ReactTooltip /> */}
            <Card />
        </div>
    )
}