import React, { Dispatch } from 'react'
import './t.scss'
import { ContainerBundle } from '../ContainerBundle'
// import { useDispatch } from 'react-redux'
import { updateBundle } from '../../store/actionCreators'
import { ContainerStatus } from '../../data/enum'

export const Container = () => {

    // const dispatch: Dispatch<any> = useDispatch()

    return (
        <div className="containerListWrapper">
            <div className="containerHeader">
                <p className="bundleName">Bundle Name</p>
                <p className="split">|</p>
                <p className="bundlePriority">Priority</p>
            </div>
            <ContainerBundle status={ContainerStatus.High} name="Test" updateContainer={updateBundle}/>
            <ContainerBundle status={ContainerStatus.High} name="Test2" updateContainer={updateBundle}/>
            <ContainerBundle status={ContainerStatus.High} name="Test3" updateContainer={updateBundle}/>
            <ContainerBundle status={ContainerStatus.High} name="Test4" updateContainer={updateBundle}/>
        </div>
    )
}