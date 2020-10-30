import React from 'react';
// import logo from './logo.svg';
import logo from './img/maersklogo.svg'
import calendar from './img/calendar.svg'
import wave from './img/wave.svg'
import './App.scss';
// import data from './data/temp.json'
// import linedata from './data/line.json'
// import { MyResponsivePie } from './components/pie';
// import { MyLineChart } from './components/linechart';
// import { ContainerBundle } from './components/ContainerBundle';
// import { ContainerStatus } from './data/ContainerStatus';
import { Container } from './components/ContainerBundleList/Container';
import { ContainerDetails } from './components/ContainerDetails/ContainerDetails';
import NavigationBar from './components/Navigation/NavigationBar';
import TopNavigation from './components/Navigation/TopNavigation/TopNavigation';
import ContentContainer from './components/ContentContainer/ContentContainer';
import { ContainerBundle } from './components/ContainerBundle/ContainerBundle';
import ContainerBundleList from './components/ContainerBundleList/ContainerBundle';
import Card from './components/Card/Card';
import SmallCard from './components/Card/SmallCard';

function App() {
  return (
    <div className="App">
      <NavigationBar logo={logo} />
      <div className="body-content-wrapper">
        <TopNavigation />
        <div className="body-content">
          <ContentContainer>
            <div className="box-description">
              <div className="box-title">
                Container match-making
              </div>
              <div className="box-date"> 
              18 January 2020
              <img src={calendar} alt="Calendar"/>
              </div>
            </div>
            <ContainerBundleList/>
          </ContentContainer>
          <Card />
          <SmallCard/>
          {/* <SmallCard/>
          <SmallCard/>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <SmallCard/> */}
          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
          {/* <ContentContainer>
            <Card />
          </ContentContainer> */}
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
