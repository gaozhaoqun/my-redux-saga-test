import { put, takeEvery } from 'redux-saga/effects'
import { GEI_INIT_LIST } from './actionTypes'
import { initListAction } from './actionCreators'
import axios from 'axios'

function* fetchUser() {
  try {
    const res = yield axios.get('https://easy-mock.com/mock/5ca8bbd9a0050b65627b5722/reactmock/reactmock')
    const list = res.data
    const action = initListAction(list)
    yield put(action)
  } catch (e) {
     console.log(e.message)
  }
}

function* mySaga() {
  yield takeEvery(GEI_INIT_LIST, fetchUser);
}

export default mySaga;