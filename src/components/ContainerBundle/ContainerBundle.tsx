import React from 'react'
import { Link, useParams } from 'react-router-dom'
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
type ParamProp = {
    portId: string
}

export function ContainerBundle(props: ContainerBundleProp){
    
    const { portId } = useParams<ParamProp>()

    const { name, priority, highRisk, id } = props.containerBundle;
    const prio = ContainerStatus[priority].toUpperCase()
    const port = ports[getRandomInt(ports.length)]
    return (
        <tr>
            <td>{highRisk ? <Warn /> : ''}</td>
            <td className="bundle-name">{id}{name}</td>
            <td className={"bundle-status " + prio.toLowerCase()}>{prio}</td>
            <td className="bundle-arrival">{port.portname}, {port.iso3}</td>
            <td className="bundle-price">{randomDate()}</td>
            <td className="divider"><img src={divider} alt="Divider" /></td>
            <td className="suggestion"><Link to={`/port/${portId}/cargo/${id}`}>Manage Cargo</Link></td>
        </tr>
    )
}
