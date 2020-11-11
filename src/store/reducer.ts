import { convertTypeAcquisitionFromJson } from 'typescript'
import { portsRef } from '../data/firebase'
import { fetchPorts } from './actionCreators'
// import { ports } from '../data/ports'
import * as actionTypes from './actionTypes'


const initialState: ApplicationState = {
    containerBundle: null,
    port: null,
    ports: fetchPorts(),
    error: null,
    portsStatus: 'idle'
}


const reducer = (
    state: ApplicationState = initialState,
    action: TooltipAction
):ApplicationState => {
    switch(action.type){

        case actionTypes.UPDATE_TOOLTIP:
            return {
                ...state,
                port: action.port
            }
    }
    return state
}


export default reducer