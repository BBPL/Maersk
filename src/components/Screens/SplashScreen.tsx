import React from "react";
import Card from "../Card/Card";
import SmallCard from "../Card/SmallCard";
import Map from './../Map/Map'




export default class SplashScreen extends React.Component<{},{}>{
    


    render(){
        return(
            <div className="body-content">
            <Map/>
            <SmallCard/>
            <SmallCard/>
            <SmallCard/>
            <Card />
            </div>
        )
    }
}