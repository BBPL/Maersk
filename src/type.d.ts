
interface IContainerBundle{
    id: number
    name: string
    cause: string
    priority: number 
    potentialRoutes: IRouteProposition[],
    highRisk: boolean
}
interface IBundlePhrase{
    phrase:string,
    meaning:string
}

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
    ports: IPort[],
    portsStatus: "idle" | 'loading' | 'succeeded' | 'failed',
    error: string | null
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

type PortState = {
    current: IPort | null,
    ports: IPort[],
    loading: boolean
}

type PortAction = {
    type: string,
    ports: IPort[],
}

type ApplicationProps = {
    user:any,
    signOut:any,
    signInWithGoogle:any
}

type DispatchType = (args:ContainerAction) => ContainerAction