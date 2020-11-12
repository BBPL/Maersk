import React from 'react'
import { ContainerStatus } from '../../data/enum'
import { getRandomInt } from '../../data/helper'
import { ports } from '../../data/ports'
import { randomDate } from '../../services/dateService'
import './ContainerBundle.scss'
import divider from './img/divider.svg'
import { ReactComponent as Warn } from './img/warn.svg'


type ContainerBundleProp = {
    containerBundle: IContainerBundle,
    // updateContainer: (containerBundle: IContainerBundle) => void
}

export class ContainerBundle extends React.Component<ContainerBundleProp, {}>{

    render(){
        const {name, priority, highRisk} = this.props.containerBundle;
        const prio = ContainerStatus[priority].toUpperCase()
        const port = ports[getRandomInt(ports.length)]
        return(
            <tr>
                <td>{highRisk ? <Warn/> : ''}</td>
                <td className="bundle-name">{name}</td>
                <td className={"bundle-status " + prio.toLowerCase()}>{prio}</td>
                <td className="bundle-arrival">{port.portname}, {port.iso3}</td>
                <td className="bundle-price">{randomDate()}</td>
                <td className="divider"><img src={divider} alt="Divider"/></td>
                <td className="suggestion">MANAGE CARGO</td>
            </tr>
        )
    }
}
