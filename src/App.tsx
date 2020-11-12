import React from 'react';
import logo from './img/maersklogo.svg'
import './App.scss';
import NavigationBar from './components/Navigation/NavigationBar';
import TopNavigation from './components/Navigation/TopNavigation/TopNavigation';
import SplashScreen from './components/Screens/SplashScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PortScreen from './components/Screens/PortScreen';
import CargoScreen from './components/Screens/CargoScreen';
import ReasoningScreen from './components/Screens/ReasoningScreen';
import { ports } from './data/ports';
import { portsRef } from './data/firebase';
import LoginScreen from './components/Screens/LoginScreen';
import { useSelector } from 'react-redux';
import { FirebaseReducer, ProfileType, useFirebase, useFirebaseConnect } from 'react-redux-firebase';
import { RootState } from './store/fireReducer';
// ports.forEach((port, index) => {
//   portsRef.doc(port.PID.toString()).set(port)
//   console.log(`adding port ${port?.PID}`)
// })


function App() {
// class App extends React.Component<{}, {}>{
  // const firebase = useFirebase()
  const {isEmpty} = useSelector<RootState,FirebaseReducer.Profile<ProfileType>>(state => state.firebase.auth)
  // const r = useFirebaseConnect(e => e.)
  // render() {
    if (!isEmpty) {
      return <LoggedIn />
    } else {
      return (
        <Router>
          <Route exact path="/" component={LoginScreen} />
        </Router>)
    }
  // }
}

function LoggedIn() {

  return (
    <Router>
      <div className="App">
        <NavigationBar logo={logo} />
        <div className="body-content-wrapper">
          <TopNavigation />
          <Switch>
            <Route exact path="/" component={SplashScreen} />
            <Route exact path="/port/:portId" component={PortScreen} />
            <Route exact path="/port/:portId/cargo/:cargoId" component={CargoScreen} />
            <Route exact path="/port/:portId/cargo/:cargoId/choice/:choiceId" component={ReasoningScreen} />
          </Switch>
        </div>
        <div className="small-devices">
          Find a proper monitor :)
          </div>
      </div>
    </Router>
  )

}

export default App;
// export default withFirebaseAuth({
//   providers,
//   firebaseAppAuth
// })(App);
