import React, { Component, Dispatch } from 'react'
import { ContainerStatus } from '../../data/enum'
import './ContainerBundle.scss'

type ContainerBundleProp = {
    containerBundle: IContainerBundle,
    updateContainer: (containerBundle: IContainerBundle) => void
}

export class ContainerBundle extends React.Component<ContainerBundleProp, ContainerBundleState>{

    render(){
        const {name, priority} = this.props.containerBundle
        return (
            <div className="bundle-wrapper" onClick={() => this.props.updateContainer(this.props.containerBundle)}>
                <h3>{name}</h3>
                <p>{ContainerStatus[priority]}</p>
            </div>
        )
    }
}
