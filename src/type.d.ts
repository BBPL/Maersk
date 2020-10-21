
interface IContainerBundle{
    id: number
    name: string
    cause: string
    priority: number 
    potentialRoutes: IRouteProposition[]
}

// enum ContainerStatus{
//     Low,
//     Medium,
//     High
// }

interface IRouteProposition{
    name: string
    ports: IRoutePort[]
    bunkerPricing: number
    costSaving: number
}

interface IRoutePort{
    country: string
    city: string
    name: string
    status: RoutePortStatus
}

type ContainerBundleState = {
    containerBundle: IContainerBundle | null,
    res: number
}

type ContainerAction = {
    type: string
    containerBundle: IContainerBundle
}

type DispatchType = (args:ContainerAction) => ContainerAction