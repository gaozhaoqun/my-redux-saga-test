import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM, GET_INIT, GET_LIST_SAGA } from "./actionTypes";


export const getInputChangeAction = value => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
  type: ADD_ITEM
})

export const getDeleteItemAction = index => ({
  type: DELETE_ITEM,
  index
})

export const getInitListAction = list => ({
  type: GET_INIT,
  list
})

export const getInitJsonSaga = () => ({
  type: GET_LIST_SAGA
})

// 把异步请求放在 actionCreactors 里
// export const getTodoList = () => {
//   return (dispatch) => {
//     axios.get('/index/recommend.json').then( res => {
//       const action = getInitListAction(res.data.list)
//       dispatch(action)
//     })
//   }
// }