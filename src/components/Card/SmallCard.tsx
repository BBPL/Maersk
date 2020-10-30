import React from "react";
import up from './img/up.svg'
import down from './img/down.svg'



export default class SmallCard extends React.Component<{}, {}>{

    render() {
        return (
            <div className="small-card-container">
                <div className="small-card">
                    <div className="sc sc-bg-1"></div>
                    <div className="sc sc-bg-2"></div>
                    <div className="sc sc-bg-3"></div>
                    <div className="sc-content">
                        <div className="sc-description">
                            <p>Pirate attacks</p>
                        </div>
                        <div className="sc-information">
                            <p>18</p>
                            <img src={up} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}