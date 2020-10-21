import React, { Component, Dispatch } from 'react'
import { useDispatch } from 'react-redux'
import { ContainerStatus } from '../data/enum'
// import { updateBundle } from 'typescript'
// import { updateBundle } from '../store/actionCreators'
import './ContainerBundle.scss'

type ContainerBundleProp = {
    name: string,
    status: ContainerStatus,
    updateContainer: (containerBundle: IContainerBundle) => void
}

export const ContainerBundle: React.FC<ContainerBundleProp> = ({name,status,updateContainer}) =>  {
    const dispatch: Dispatch<any> = useDispatch()
    
    const newTe:IContainerBundle = {
        id:10,
        name: name,
        priority: status,
        potentialRoutes: []
    }

    const openNewWin = React.useCallback(
        (containerBundle: IContainerBundle) => dispatch(updateContainer(containerBundle)),
        [dispatch, updateContainer]
    )
    
    return (
    <div className="bundle-wrapper" onClick={() => openNewWin(newTe)}>
        <h3>{name}</h3>
        <p>{ContainerStatus[status]}</p>
    </div>
    )
}