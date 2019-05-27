import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from './saga/sagas';

/////////////////////////////////////////////////////////
// APP REDUCER:
const initState = {
  keranjang: []
};
function appReducer(state = initState, action) {
  switch (action.type) {
    case 'ITEM_ADDED':
      return { ...state, keranjang: [action.item, ...state.keranjang] };
    case 'ITEMS_RECEIVED':
      return { ...state, keranjang: action.keranjang }
    default:
      return state;
  }
}
const sagaMiddleware = createSagaMiddleware();
const store = createStore(appReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga)
/////////////////////////////////////////////////////////

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
