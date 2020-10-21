// import { ContainerAction, DispatchType, IContainerBundle } from "../type"
import * as actionTypes from "./actionTypes"

export function updateBundle(containerBundle: IContainerBundle){
  const action: ContainerAction = {
      type: actionTypes.UPDATE_CONTAINER,
      containerBundle
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