import React from "react";
import Card from "./Card";


export default function Grouping() {
    return (
        <div className="grouping-container">

            <div className="grouping">
                <h1>Users with similar decision-making</h1>
                <div>

                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}