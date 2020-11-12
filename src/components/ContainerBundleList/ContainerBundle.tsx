import React from "react";
import { getRandomInt } from "../../data/helper";
import { bundleNames } from "../../data/mock/bundlePhrases";
import { genPotentialRoutes } from "../../data/mock/potentialRoutes";
import { ContainerBundle } from "../ContainerBundle/ContainerBundle";
import './t.scss'


const bundles = (n:number) => {
    const bundles: IContainerBundle[] = []
    for (let i = 0; i < n; i++) {
        const randBundle: IContainerBundle = {    
            id: 1,
            name: bundleNames[getRandomInt(bundleNames.length-1)].phrase,
            cause: bundleNames[getRandomInt(bundleNames.length-1)].meaning,
            priority: getRandomInt(3),
            potentialRoutes: genPotentialRoutes(),
            highRisk: !!Math.floor(Math.random()*2)
        }
        bundles.push(randBundle)
    }
    return bundles
}

export default class ContainerBundleList extends React.Component<{}, {}>{
    render() {
        return (
            <div className="table-wrapper">
                <table className="container-table">
                    <thead>
                        <tr className="table-heading">
                            <th />
                            <th>Cargo ID </th>
                            <th>Priority (type)</th>
                            <th>Destination</th>
                            <th>Delivery Date</th>
                            <th/>
                            <th/>
                        </tr>
                    </thead>
                    <tbody className="scrollable">
                        {bundles(15).map((bundle, index)=>(
                            <ContainerBundle containerBundle={bundle} key={index} />
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
} 