import React from "react"
import Card from "../Card/Card"
import Grouping from "../Card/Grouping"

type ReasoningProps = {
    portId: string,
    cargoId: string,
    choiceId: string
}

export default function ReasoningScreen(){

    // const { portId, cargoId, choiceId } = useParams<ReasoningProps>()
 

    return(
        <div className="body-content">
            <Card />
            <div className="form-wrapper">
                <form className="form-container">
                    <h1>Decision feedback</h1>
                    <textarea placeholder="Write your decision here"/>
                    <div className="post-btn">Post</div>
                </form>
            </div>
            <Grouping/>
            <Grouping/>
        </div>
    )
}