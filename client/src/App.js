import React, { useState, useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';

function App(props) {
  const [item, setItem] = useState('');

  useEffect(() => {
    props.dispatch({ type: "FETCH_ITEMS" });
  }, []);

  return (
    <div className="App">
      <h2>Daftar Belanja v1</h2>
      <hr />
      <input type="text" value={item} onChange={e => setItem(e.target.value)} />
      <button onClick={() => props.dispatch({ type: 'ADD_ITEM', item })}>Tambahkan</button>
      <ul>
        {props.keranjang.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default connect(
  state => ({
    keranjang: state.keranjang
  })
)(App);
