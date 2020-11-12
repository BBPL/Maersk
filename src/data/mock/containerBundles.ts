import { ContainerStatus } from "../enum";
import { getRandomInt } from "../helper";
import { bundleNames } from "./bundlePhrases";
import { genPotentialRoutes } from "./potentialRoutes";

export const containerBundle1: IContainerBundle = {    
    id: 1,
    name: "Container Bundle for H&M",
    cause: "The proposed vessel does not have space, as it has prioritized other containers",
    priority: getRandomInt(3),
    potentialRoutes: genPotentialRoutes(),
    highRisk: !!Math.floor(Math.random()*2)
}

export const containerBundle2: IContainerBundle = {    
    id: 1,
    name: "Bananas and Apples",
    cause: "The proposed vessel does not have space, as it has prioritized other containers",
    priority: getRandomInt(3),
    potentialRoutes: genPotentialRoutes(),
    highRisk: !!Math.floor(Math.random()*2)
}

export const containerBundle3: IContainerBundle = {    
    id: 1,
    name: "Pineapple on pizza",
    cause: "This should not be allowed",
    priority: getRandomInt(3),
    potentialRoutes: genPotentialRoutes(),
    highRisk: !!Math.floor(Math.random()*2)
}


export const randBundle: IContainerBundle = {    
    id: 1,
    name: bundleNames[getRandomInt(bundleNames.length-1)].phrase,
    cause: bundleNames[getRandomInt(bundleNames.length-1)].meaning,
    priority: getRandomInt(3),
    potentialRoutes: genPotentialRoutes(),
    highRisk: !!Math.floor(Math.random()*2)
}

