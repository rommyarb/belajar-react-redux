import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import TotalBelanja from './TotalBelanja';

function App(props) {
  // useState
  // ....

  // onclick addItem
  // ...

  return (
    <div className="App">
      {props.currentPage === 'App' && (
        <>
          <h2>DAFTAR BELANJA</h2>
          <button
            onClick={() =>
              props.dispatch({ type: 'NAVIGATE', page: 'TotalBelanja' })
            }
          >
            Page TOTAL BELANJA
          </button>
          <hr />

          <input
            type="text"
            value={props.item}
            onChange={e =>
              props.dispatch({ type: 'SET_ITEM', value: e.target.value })
            }
          />
          <button onClick={() => props.dispatch({ type: 'ADD_ITEM' })}>
            Tambahkan
          </button>

          <ol>
            {props.keranjang.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </>
      )}

      {props.currentPage === 'TotalBelanja' && <TotalBelanja />}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    item: state.item,
    keranjang: state.keranjang,
    currentPage: state.currentPage
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     setItem: value => dispatch({ type: 'SET_ITEM', value }),
//     addItem: () =>
//       dispatch({
//         type: 'ADD_ITEM'
//       })
//   };
// };

export default connect(mapStateToProps)(App);
