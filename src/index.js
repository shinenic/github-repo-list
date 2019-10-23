import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise';
import Reducer from './reducer'
import App from './component/App';
import * as serviceWorker from './serviceWorker';

let store = createStore(Reducer, applyMiddleware(reduxPromise))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
