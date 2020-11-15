import React from "react";
import { ReactComponent as Up } from './img/up.svg'
import { ReactComponent as CardBG } from './img/card.svg'

type SmallCard = {
    class?: string
}

export default function SmallCard(prop:SmallCard) {
    
    return (
        <div className="small-card-container">
            <div className={prop.class ? `small-card ${prop.class}` : 'small-card'}>
                <CardBG className={'sc'} />
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