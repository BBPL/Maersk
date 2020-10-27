import React, { Component, Dispatch } from 'react'
import { ContainerStatus } from '../../data/enum'
import { getRandomInt } from '../../data/helper'
import './ContainerBundle.scss'
import divider from './img/divider.svg'


type ContainerBundleProp = {
    containerBundle: IContainerBundle,
    // updateContainer: (containerBundle: IContainerBundle) => void
}

export class ContainerBundle extends React.Component<ContainerBundleProp, ContainerBundleState>{

    render(){
        const {name,priority,potentialRoutes,} = this.props.containerBundle;
        return(
            <tr>
                <td className="bundle-name">{name}</td>
                <td className="bundle-status">{ContainerStatus[priority]}</td>
                <td className="bundle-arrival">{potentialRoutes[getRandomInt(3)].name}</td>
                <td className="bundle-price">{potentialRoutes[0].costSaving}</td>
                <td className="divider"><img src={divider} alt="Divider"/></td>
                <td className="suggestion">
                    <div className="suggested-actions-btn"><p> Suggested Actions</p></div>
                </td>
            </tr>
        )
    }

    // render(){
    //     const {name, priority} = this.props.containerBundle
    //     return (
    //         <div className="bundle-wrapper" onClick={() => this.props.updateContainer(this.props.containerBundle)}>
    //             <h3>{name}</h3>
    //             <p>{ContainerStatus[priority]}</p>
    //         </div>
    //     )
    // }
}
