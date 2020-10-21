import { RoutePortStatus } from "../enum";
import { getRandomInt } from "../helper";


const portPolandGdansk: IRoutePort = {
    country: "Poland",
    city: "Gdansk",
    name: "DCT Gdansk",
    status: RoutePortStatus.NotChanged 
}

const portPolandGdynia: IRoutePort = {
    country: "Poland",
    city: "Gdynia",
    name: "Port of Gdynia",
    status: RoutePortStatus.NotChanged 
}

const portDenmarkAarhus: IRoutePort = {
    country: "Denmark",
    city: "Aarhus",
    name: "Aarhus",
    status: RoutePortStatus.NotChanged 
}

const portDenmarkKalundborg: IRoutePort = {
    country: "Denmark",
    city: "Kalundborg",
    name: "Kalundborg",
    status: RoutePortStatus.NotChanged 
}

const portFranceLeHavre: IRoutePort = {
    country: "France",
    city: "Le Havre",
    name: "Port of Le Havre",
    status: RoutePortStatus.NotChanged 
}

const portFranceDunkirk: IRoutePort = {
    country: "France",
    city: "Dunkirk",
    name: "Port of Dunkirk",
    status: RoutePortStatus.NotChanged 
}

const portItalyNaples: IRoutePort = {
    country: "Italy",
    city: "Naples",
    name: "Port of Naples",
    status: RoutePortStatus.NotChanged 
}

const portItalySalerno: IRoutePort = {
    country: "Italy",
    city: "Salerno",
    name: "Port of Salerno",
    status: RoutePortStatus.NotChanged 
}

export const ports: IRoutePort[] = [portDenmarkAarhus, portDenmarkKalundborg, portFranceDunkirk, portFranceLeHavre, portPolandGdansk, portPolandGdynia, portItalyNaples, portItalySalerno]
function getRandomPort(){
    return ports[getRandomInt(ports.length)]
}

export function getRandomPorts(n:number){
    let res: IRoutePort[] = []
    let randomAmountOfPorts = getRandomInt(10)
    for(let i = 0; i < randomAmountOfPorts; i++){
        let randomPort = getRandomPort()
        if(res.indexOf(randomPort))
            res.push(getRandomPort())
    }
    return res
}