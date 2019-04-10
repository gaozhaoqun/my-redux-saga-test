import { CHANGE_INPUT_VALUE, DELETE_ITEM_ACTION, ADD_ITEM, INIT_DATA } from './actionTypes'

const defaultState = {
  list: [],
  inputValue: ''
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))

  if (action.type === CHANGE_INPUT_VALUE) {
    newState.inputValue = action.inputValue
    return newState
  }

  if (action.type === ADD_ITEM) {
    newState.inputValue && newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if (action.type === DELETE_ITEM_ACTION) {
    newState.list.splice(action.index, 1)
    return newState
  }

  if (action.type === INIT_DATA) {
    newState.list.push(...action.data)
    return newState
  }

  return state
}