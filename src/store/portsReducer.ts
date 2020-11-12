import { getPorts } from '../services/portService'
import * as actionTypes from './actionTypes'


const initialState: PortState = {
    current: null,
    ports: [],
    loading: true
}

const portReducer = (
    state: PortState = initialState,
    action: TooltipAction | PortAction
):PortState => {
    switch(action.type){

        case actionTypes.UPDATE_TOOLTIP:
            action = action as TooltipAction
            return {
                ...state,
                current: action.port
            }
        case actionTypes.GET_PORTS:
            action = action as PortAction
            console.log("calling")
            // getPorts()
            return {
                ...state,
                ports: action.ports,
                loading: false
            }
    }
    return state
}

export default portReducer