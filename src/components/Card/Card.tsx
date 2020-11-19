import React from "react";
import './Card.scss'
import { ReactComponent as BG } from './img/bg.svg'
import flag from './img/flag.svg'


type CardProps = {
    name: string
}

export default function Card(props:CardProps) {
    return (
        <div className="card-container">
            <div className="card">
                <BG className="card-bg" />
                <div className="card-content">
                    <div className="card-top">
                        <h1 className="card-user-name">{props.name}</h1>
                        <div className="country-info">
                            <img src={flag} alt="" />
                            <p>Monaco</p>
                        </div>
                    </div>
                    <div className="card-bot">
                        <p>Role: Marine operator</p>
                        <p>Amount of fixed contingencies: 73</p>
                    </div>
                </div>
            </div>
        </div>
    )
}