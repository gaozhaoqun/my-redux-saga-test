import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM, GET_INIT } from './actionTypes'

const defaultState = {
  list: [],
  inputValue: ''
}

export default (state = defaultState, action) => {

  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }

  if (action.type === ADD_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue && newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }

  if (action.type === DELETE_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }

  if (action.type === GET_INIT) {
    const newState = JSON.parse(JSON.stringify(state))
    const arr = action.list
    const temp = []
    Object.keys(arr).map( item => (
      temp.push(arr[item].title)
    ))
    newState.list = temp
    return newState
  }

  return state
}
