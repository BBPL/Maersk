import React from 'react';
// import logo from './logo.svg';
import logo from './img/maersklogo.svg'
import './App.css';
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

function App() {
  return (
    <div className="App">
      <NavigationBar logo={logo} />
      <TopNavigation />
      {/* <Container/>
      <ContainerDetails/> */}
    </div>
  );
}

export default App;
