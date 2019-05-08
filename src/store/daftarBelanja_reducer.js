const initialState = {
  item: '',
  keranjang: [],
  currentPage: 'App'
};
function DB_reducer(state = initialState, action) {
  // let newState = state; // SALAH
  let newState = { ...state }; // BENAR
  if (action.type === 'ADD_ITEM') {
    newState.keranjang = [...state.keranjang, state.item];
    // newState.keranjang.push(state.item); // BISA JUGA
  } else if (action.type === 'SET_ITEM') {
    newState.item = action.value;
  } else if (action.type === 'NAVIGATE') {
    newState.currentPage = action.page;
  }
  return newState;
}

export default DB_reducer;
