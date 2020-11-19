import React from "react";
import Card from "./Card";


export default function Grouping() {
    return (
        <div className="grouping-container">

            <div className="grouping">
                <h1>Users with similar decision-making</h1>
                <div>

                    <Card name="Felix Felixsen" />
                    <Card name="Helena Helensen"/>
                    <Card name="Mikkel Mikkelsen"/>
                    <Card name="Alexander Alexandersen"/>
                </div>
            </div>
        </div>
    )
}