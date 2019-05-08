import React, { useState } from 'react';
import './App.css';

function App(props) {
  const [item, setItem] = useState('');
  const [keranjang, setKeranjang] = useState([]);

  function addItem() {
    setKeranjang([...keranjang, item]);
  }

  return (
    <div className="App">
      <h2>DAFTAR BELANJA</h2>
      <hr />

      <input type="text" value={item} onChange={e => setItem(e.target.value)} />
      <button onClick={addItem}>Tambahkan</button>

      <ol>
        {keranjang.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
