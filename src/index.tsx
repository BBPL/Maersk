import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { ContainerAction, ContainerBundleState, DispatchType } from './type';
import { applyMiddleware, createStore, Store } from 'redux';
import reducer from './store/reducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const store: Store<ApplicationState, ContainerAction> & {
  dispatch: DispatchType
} = createStore(reducer,(window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
(window as any).__REDUX_DEVTOOLS_EXTENSION__(),)
  // } = createStore(reducer, applyMiddleware(thunk))

// ReactDOM.render(
//   // <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>,
//   // </React.StrictMode>,
//   document.getElementById('root')
// );


const rootElement = document.getElementById("root")
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
