// import { ContainerAction, DispatchType, IContainerBundle } from "../type"
import * as actionTypes from "./actionTypes"

export function updateBundle(containerBundle: IContainerBundle) {
  const action: ContainerAction = {
    type: actionTypes.UPDATE_CONTAINER,
    containerBundle
  }
  return action
}

export function updateToolTip(port: IPort) {
  const action: TooltipAction = {
    type: actionTypes.UPDATE_TOOLTIP,
    port
  }
  return action
}

export function setPorts(ports: IPort[]) {
  const action: PortAction = {
    type: actionTypes.GET_PORTS,
    ports: []
  }
  return action
}



// const ports:IPort[] = []
// const getPorts = portsRef.get().then((x) => {
//     x.forEach(function(r){
//         ports.push(r.data() as IPort)
//     })
// });

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