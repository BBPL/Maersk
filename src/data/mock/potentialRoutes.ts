import { getRandomInt } from "../helper";
import { getRandomPorts } from "./ports";

function genPotentialRoute(n:number){
    const potentialRoute: IRouteProposition = {
        costSaving: getRandomInt(10000000),
        bunkerPricing: getRandomInt(10000000),
        name: "Potential Route " + n,
        ports: getRandomPorts(getRandomInt(5))
    }
    return potentialRoute
}

export function genPotentialRoutes(){
    let res: IRouteProposition[] = []
    for (let i = 0; i < 3; i++)
        res.push(genPotentialRoute(i))
    return res
}