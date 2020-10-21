
interface IContainerBundle{
    id: number
    name: string
    priority: ContainerStatus
    potentialRoutes: IRouteProposition[]
}

interface IRouteProposition{
    name: string
    ports: IRoutePort[]
    bunkerPricing: number
    costSaving: number
}

interface IRoutePort{
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