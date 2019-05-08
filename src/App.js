import React from 'react';
import './App.css';
import { connect } from 'react-redux';

function App(props) {
  // useState
  // ....

  // onclick addItem
  // ...

  return (
    <div className="App">
      <h2>DAFTAR BELANJA</h2>
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
    </div>
  );
}

const mapStateToProps = state => {
  return {
    item: state.item,
    keranjang: state.keranjang
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
