import React from "react";
import { getRandomInt } from "../../data/helper";
import { bundleNames } from "../../data/mock/bundlePhrases";
import { bundles, genBundles } from "../../data/mock/containerBundles";
import { genPotentialRoutes } from "../../data/mock/potentialRoutes";
import { ContainerBundle } from "../ContainerBundle/ContainerBundle";
import './t.scss'



export default function ContainerBundleList (){
    genBundles(15)

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
                    {bundles.map((bundle, index)=>(
                        <ContainerBundle containerBundle={bundle} key={index} />
                    ))}
                </tbody>
            </table>
        </div>
    )
} 