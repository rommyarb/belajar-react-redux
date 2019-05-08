import React, { useState } from 'react';
import './App.css';

function App(props) {
  const [item, setItem] = useState('');
  return (
    <div className="App">
      <h2>DAFTAR BELANJA</h2>
      <hr />

      <input
        type="text" value={item}
        onChange={e => setItem(e.target.value)}
      />
      <button>Tambahkan</button>

      <ol>
        <li>Beras</li>
        <li>Telur</li>
        <li>Gula</li>
      </ol>
    </div>
  );
}

export default App;
