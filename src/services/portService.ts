import { portsRef } from "../data/firebase"


export const getPorts = async () =>{
    // let res: IPort[] = []
    let res = portsRef.get().then((querySnapshot) => {
        return querySnapshot.docs.map((port) => {
            return port.data() as IPort
        })
    })

    return await res
}