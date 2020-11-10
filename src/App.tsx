import React from 'react';
import logo from './img/maersklogo.svg'
import './App.scss';
import NavigationBar from './components/Navigation/NavigationBar';
import TopNavigation from './components/Navigation/TopNavigation/TopNavigation';
import SplashScreen from './components/Screens/SplashScreen';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import PortScreen from './components/Screens/PortScreen';
import CargoScreen from './components/Screens/CargoScreen';
import ReasoningScreen from './components/Screens/ReasoningScreen';


function App() {
  return (
    <Router>

    <div className="App">
      <NavigationBar logo={logo} />
      <div className="body-content-wrapper">
        <TopNavigation />
        <Switch>
          <Route exact path="/" component={SplashScreen} />
          <Route exact path="/port/:portId" component={PortScreen} />
          <Route exact path="/port/:portId/cargo/:cargoId" component={CargoScreen}  />
          <Route exact path="/port/:portId/cargo/:cargoId/choice/:choiceId" component={ReasoningScreen}  />
        </Switch>
      </div>
      <div className="small-devices">
        Find a proper monitor :)
      </div>
    </div>
    </Router>
  );
}

export default App;
