import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// REDUCER DAFTAR BELANJA (DB)
const initialState = {
  item: '',
  keranjang: []
};
function DB_reducer(state = initialState, action) {
  // let newState = state; // SALAH
  let newState = { ...state }; // BENAR
  if (action.type === 'ADD_ITEM') {
    newState.keranjang = [...state.keranjang, state.item];
  } else if (action.type === 'SET_ITEM') {
    newState.item = action.value;
  }
  return newState;
}

const store = createStore(DB_reducer);

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
