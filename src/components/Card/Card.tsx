import React from "react";
import './Card.scss'
import bg from './img/bg.svg'
import flag from './img/flag.svg'

export default class Card extends React.Component<{},{}>{
    render(){
        return(
            <div className="card-container">
                <div className="card">
                    <div className="card-bg">
                        <img src={bg} alt=""/>
                    </div>
                    <div className="card-content">
                        <div className="card-top">
                            <h1 className="card-user-name">Chico <br/> Leong</h1>
                            <div className="country-info">
                                <img src={flag} alt=""/>
                                <p>Monaco</p>
                            </div>
                        </div>
                        <div className="card-bot">
                            <p>Role: Marine operator</p>
                            <p>Amount of vessels matched: 172</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}