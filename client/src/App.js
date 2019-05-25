import React, { useState, useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import mongoose from 'mongoose';

function App(props) {
  const [item, setItem] = useState('');
  const [log, set_log] = useState('');

  useEffect(() => {
    // do it here...
  }, []);

  return (
    <div className="App">
      <h1>Log: {log}</h1>
      <h2>Daftar Belanja</h2>
      <hr />
      <input type="text" value={item} onChange={e => setItem(e.target.value)} />
      <button onClick={() => props.addItem(item)}>Tambahkan</button>
      <ol>
        {props.keranjang.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

export default connect(
  state => ({
    keranjang: state.keranjang
  }),
  dispatch => ({
    addItem: item => dispatch({ type: 'ADD_ITEM', item })
  })
)(App);
