
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

type ApplicationState = {
    port: IPort | null,
    containerBundle: IContainerBundle | null,
    // res: number
}

type ContainerAction = {
    type: string
    containerBundle: IContainerBundle
}

interface IPort{
    PID: number,
    portname: string,
    code: string | null,
    country: string | null,
    iso3: string | null,
    latitude: number,
    longitude: number
} 

type TooltipAction = {
    type: string
    port: IPort
}

type DispatchType = (args:ContainerAction) => ContainerAction