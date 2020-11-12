import React from "react";
import  {ReactComponent as Up} from './img/up.svg'
import {ReactComponent as CardBG} from './img/card.svg'

export default class SmallCard extends React.Component<{}, {}>{

    render() {
        return (
            <div className="small-card-container">
                <div className="small-card">
                    <CardBG className="sc"/>
                    <div className="sc-content">
                        <div className="sc-description">
                            <p>Pirate attacks</p>
                        </div>
                        <div className="sc-information">
                            <p>18</p>
                            <Up className="sc-arrow" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}