import { put, takeEvery } from 'redux-saga/effects'
import { GET_LIST_SAGA } from './actionTypes'
import { getInitListAction } from './actionCreators'
import axios from 'axios'

function* getInitList() {
  try {
    const res = yield axios.get('/index/recommend.json')
    const action = getInitListAction(res.data.list)
    yield put(action)
  } catch {
    console.log('请求失败')
  }
}

function* mySaga() {
  yield takeEvery(GET_LIST_SAGA, getInitList);
}

export default mySaga;