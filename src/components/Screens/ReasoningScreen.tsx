import React from "react"
import { useParams } from "react-router-dom"
import Card from "../Card/Card"

type ReasoningProps = {
    portId: string,
    cargoId: string,
    choiceId: string
}

export default function ReasoningScreen(){

    const { portId, cargoId, choiceId } = useParams<ReasoningProps>()
 

    return(
        <div className="body-content">
            <Card />
            <div className="form-wrapper">
                <form className="form-container">
                    <h1>Decision feedback</h1>
                    <textarea placeholder="Write your decision here"/>
                    <button>Post</button>
                </form>
            </div>
        </div>
    )
}