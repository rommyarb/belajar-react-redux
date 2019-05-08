import React from 'react';
import { connect } from 'react-redux';

// create a component
const TotalBelanja = props => {
  return (
    <div className="App">
      <button onClick={() => props.dispatch({ type: 'NAVIGATE', page: 'App' })}>
        {'< Back'}
      </button>
      <h2>TOTAL BELANJA:</h2>
      <ol>
        {props.keranjang.map((item, index) => (
          <li key={index}>{item + ' : Rp .......'}</li>
        ))}
      </ol>
    </div>
  );
};

const mapStateToProps = state => ({
  keranjang: state.keranjang
});

export default connect(mapStateToProps)(TotalBelanja);
