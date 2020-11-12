import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { ContainerAction, ContainerBundleState, DispatchType } from './type';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from './data/firebase';
import { rootReducer } from './store/fireReducer';
import { createFirestoreInstance } from 'redux-firestore'

const dev = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()

const rrfConfig = {
  userProfile: 'users'
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
}

const initialState = {}
const store = createStore(rootReducer, initialState, dev)
// const {persistor, store} = persist()


const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance  // <- needed if using firestore
}

const rootElement = document.getElementById("root")
render(
  <Provider store={store}>
    {/* <PersistGate loading={<div>Loading or something{console.log("wat")}</div>} persistor={persistor}> */}
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    {/* </PersistGate> */}
  </Provider>,
  rootElement
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
