// import { ContainerAction, DispatchType, IContainerBundle } from "../type"
import { act } from "react-dom/test-utils"
import * as actionTypes from "./actionTypes"

export function updateBundle(containerBundle: IContainerBundle){
  const action: ContainerAction = {
      type: actionTypes.UPDATE_CONTAINER,
      containerBundle
  }
  return action
}

export function updateToolTip(port: IPort){
  const action: TooltipAction = {
    type: actionTypes.UPDATE_TOOLTIP,
    port
  }
  return action
}

// export function addOne(container){
//   const action: ContainerAction = {
//     type: actionTypes.ADD_ONE,
//   }
//   return action
// }

// export function simulateHttpRequest(action: ContainerAction) {
//   return (dispatch: DispatchType) => {
//     setTimeout(() => {
//       dispatch(action)
//     }, 500)
//   }
// }