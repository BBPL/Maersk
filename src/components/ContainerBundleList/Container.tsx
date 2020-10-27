import React, { Dispatch } from 'react'
import './t.scss'
import { ContainerBundle } from '../ContainerBundle/ContainerBundle'
// import { useDispatch } from 'react-redux'
import { updateBundle } from '../../store/actionCreators'
import { ContainerStatus } from '../../data/enum'
import { getRandomInt } from '../../data/helper'
import { containerBundle1, containerBundle2, containerBundle3 } from '../../data/mock/containerBundles'
import { useDispatch } from 'react-redux'

const containerBundles = [containerBundle1,containerBundle2, containerBundle3]
export const Container = () => {

    const dispatch: Dispatch<any> = useDispatch()

    const updateContainer = React.useCallback(
        (containerBundle: IContainerBundle) => dispatch(updateBundle(containerBundle)),
        [dispatch, updateBundle]
    )
    
    // const xe = getRandomInt(10)
    return (
        <div className="containerListWrapper">
            <div className="containerHeader">
                <p className="bundleName">Bundle Name</p>
                <p className="split">|</p>
                <p className="bundlePriority">Priority</p>
            </div>
            {/* {containerBundles.map((cb, index) => (
                // <ContainerBundle containerBundle={cb} updateContainer={updateContainer} />
            ))} */}
        </div>
    )
}