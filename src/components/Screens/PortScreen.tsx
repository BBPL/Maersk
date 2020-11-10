import React, { ReactComponentElement } from "react";
import { RouteComponentProps, useParams } from "react-router-dom";
import ContainerBundleList from "../ContainerBundleList/ContainerBundle";
import ContentContainer from "../ContentContainer/ContentContainer";
import calendar from './../../img/calendar.svg'

type TestProp ={
    // portId:string
}

// export default class PortScreen extends React.Component<{}, {}>{
export default function PortScreen(){

        // const { portId } = useParams<TestProp>()
        
        
        return (
            <div className="body-content">
                <ContentContainer>
                    <div className="box-description">
                        <div className="box-title">
                            Container match-making
                    </div>
                        <div className="box-date">
                            18 January 2020
                    <img src={calendar} alt="Calendar" />
                        </div>
                    </div>
                    <ContainerBundleList />
                </ContentContainer>
            </div>
        )
    // }
}