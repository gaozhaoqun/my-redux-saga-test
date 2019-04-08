import React, { Component } from 'react'
import "antd/dist/antd.css"
import TodoUi from './toduUi'
import store from '../../store'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getInitJsonSaga } from '../../store/actionCreators'

class TodoList extends Component {
  constructor() {
    super()
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.state = store.getState()
    store.subscribe(this.handleStoreChange)
  }

  handleStoreChange() {
    this.setState(store.getState())
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleAddItem() {
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleDelete(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }

  render() {
    return (
      <TodoUi
      handleInputChange={this.handleInputChange}  
      inputValue={this.state.inputValue}
      handleAddItem={this.handleAddItem}
      list={this.state.list}
      handleDelete={this.handleDelete}
      />
    )
  }

  componentDidMount() {
    const action = getInitJsonSaga()
    store.dispatch(action)
  }
  
}

export default TodoList