import { CHANGE_INPUT_VALUE, DELETE_ITEM_ACTION, ADD_ITEM, GEI_INIT_LIST, INIT_DATA } from './actionTypes'

export const handleInputChangeAction = value => ({
  type: CHANGE_INPUT_VALUE,
  inputValue: value
})

export const handleAddItemAction = () => ({
  type: ADD_ITEM
})

export const handleDeleteItemAction = index => ({
  type: DELETE_ITEM_ACTION,
  index
})

export const getInitList = () => ({
  type: GEI_INIT_LIST
})

export const initListAction = data => ({
  type: INIT_DATA,
  data
})