import { takeEvery, takeLatest } from 'redux-saga/effects';
import Axios from 'axios';

function* insertData(action) {
  try {
    Axios.post('/addItem', {
      item: action.item
    }).then(r => {
      console.log(r.data);
    })
  } catch (e) {
    console.error(e);
  }
}

function* mySaga() {
  yield takeLatest("ADD_ITEM", insertData);
}

export default mySaga;