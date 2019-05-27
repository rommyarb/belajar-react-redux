import { put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import Axios from 'axios';

function* fetchItems(action) {
  const items = yield Axios.post('/api/fetchItem').then(r => r.data);
  let keranjang = [];
  items.slice().reverse().forEach(item => {
    keranjang = [...keranjang, item.title];
  });
  yield put({ type: "ITEMS_RECEIVED", keranjang });
}
function* addItem(action) {
  const add = yield Axios.post('/api/addItem', { item: action.item }).then(r => r.data)
  console.log(add);
  yield put({ type: 'ITEM_ADDED', item: action.item });
}

function* watcherSaga() {
  yield takeLatest("ADD_ITEM", addItem);
  yield takeLatest("FETCH_ITEMS", fetchItems);
}

export default watcherSaga;