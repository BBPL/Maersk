import React, { Dispatch } from "react";
import Card from "../Card/Card";
import SmallCard from "../Card/SmallCard";
import Map from './../Map/Map'
import { useDispatch, useSelector } from "react-redux";
import { updateToolTip } from "../../store/actionCreators";
import { useFirestoreConnect } from "react-redux-firebase";
import { RootState } from "../../store/fireReducer";


export default function SplashScreen() {
    // export default class SplashScreen extends React.Component<{}, ApplicationState>{
    // const [isLoading, setIsLoading] = useState<boolean>(true)
    // const [ports, setPorts] = useState<IPort[]>([])

    const dispatch: Dispatch<any> = useDispatch()
 
    const updateContent = React.useCallback(
        (port: IPort) => dispatch(updateToolTip(port)),
        [dispatch, updateToolTip]
    )

    useFirestoreConnect([
        'ports'
    ])
    const portsed = useSelector<RootState,IPort[]>((state) => state.firestore.ordered.ports as IPort[])
    // console.log("portsed " + portsed)
    // const firestore = getFirestore()
    if(!portsed){
        return (
            <>
                Loading!!!
            </>
        )
    }else {
        return (
            <div className="body-content">
                <Map updateContent={updateContent} ports={portsed} />
                <SmallCard class="yellow"/>
                <SmallCard class="red"/>
                <SmallCard class="blue"/>
                <Card />
            </div>
        )
    }
}
// const portsStatus = useSelector<ApplicationState>(state => state.portsStatus)
// useEffect(() => {
//     if(portsStatus === 'idle'){
//         dispatch(fetchPorts())
//     }
// }, [portsStatus, dispatch])