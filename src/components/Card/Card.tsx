import React from "react";
import './Card.scss'
import { ReactComponent as BG } from './img/bg.svg'
import flag from './img/flag.svg'

export default function Card() {
    return (
        <div className="card-container">
            <div className="card">
                <BG className="card-bg" />
                <div className="card-content">
                    <div className="card-top">
                        <h1 className="card-user-name">Chico <br /> Leong</h1>
                        <div className="country-info">
                            <img src={flag} alt="" />
                            <p>Monaco</p>
                        </div>
                    </div>
                    <div className="card-bot">
                        <p>Role: Marine operator</p>
                    </div>
                </div>
            </div>
        </div>
    )
}