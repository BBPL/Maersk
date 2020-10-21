import * as actionTypes from './actionTypes'

const initialState: ContainerBundleState = {
    containerBundle: null,
    res: 1
}


const reducer = (
    state: ContainerBundleState = initialState,
    action: ContainerAction
):ContainerBundleState => {
    switch(action.type){
        case actionTypes.UPDATE_CONTAINER:
            return {
                ...state,
                containerBundle: action.containerBundle
            }

        case actionTypes.ADD_ONE:
            return {
                ...state,
                res: state.res + 1
            }
    }
    return state
}


export default reducer