import React from "react";
import { containerBundle1, containerBundle2, containerBundle3 } from "../../data/mock/containerBundles";
import { ContainerBundle } from "../ContainerBundle/ContainerBundle";
import './t.scss'

export default class ContainerBundleList extends React.Component<{},{}>{
    render(){
        return(
            <div className="table-wrapper">
                <table className="container-table">
                    <thead>

                    <tr className="table-heading">
                        <th><p>Container bundle</p> </th>
                        <th>Priority</th>
                        <th>Arrival</th>
                        <th>Diff</th>
                    </tr>
                    </thead>
                    <tbody>
                        <ContainerBundle containerBundle={containerBundle1}/>
                        <ContainerBundle containerBundle={containerBundle2}/>
                        <ContainerBundle containerBundle={containerBundle3}/>
                        <ContainerBundle containerBundle={containerBundle1}/>
                        <ContainerBundle containerBundle={containerBundle2}/>
                        <ContainerBundle containerBundle={containerBundle3}/>
                        <ContainerBundle containerBundle={containerBundle1}/>
                    </tbody>
                </table>
            </div>
        )
    }
} 