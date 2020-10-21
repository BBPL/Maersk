import { ContainerStatus } from "../enum";
import { getRandomInt } from "../helper";
import { getRandomPorts } from "./ports";
import { genPotentialRoutes } from "./potentialRoutes";

export const containerBundle1: IContainerBundle = {    
    id: 1,
    name: "Container Bundle for H&M",
    cause: "The proposed vessel does not have space, as it has prioritized other containers",
    priority: getRandomInt(3),
    potentialRoutes: genPotentialRoutes()
}

export const containerBundle2: IContainerBundle = {    
    id: 1,
    name: "Bananas and Apples",
    cause: "The proposed vessel does not have space, as it has prioritized other containers",
    priority: getRandomInt(3),
    potentialRoutes: genPotentialRoutes()
}

export const containerBundle3: IContainerBundle = {    
    id: 1,
    name: "Pineapple on pizza",
    cause: "This should not be allowed",
    priority: getRandomInt(3),
    potentialRoutes: genPotentialRoutes()
}

