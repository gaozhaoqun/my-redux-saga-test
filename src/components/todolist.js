import React from 'react'
import { connect } from 'react-redux'
import { handleInputChangeAction, handleAddItemAction, handleDeleteItemAction } from '../store/actionCreators'
import { Input, Button, List, Alert } from 'antd'

import './style.css'

const Todolist = props => {
  const { changeInputValue, handleAddItem, inputValue, handleDeleteItem, list, tips} = props
  return (
    <div>
      <div>
        <Alert
          description="请输入内容"
          type="error"
          className={tips ? 'show' : 'hide'}
        />
        <Input onChange={ changeInputValue } value={ inputValue }  />
        <Button onClick={ handleAddItem } style={{ marginTop: 10, marginBottom: 10, background: '#282c34', color: 'aliceblue' }}>提交</Button>
      </div>
      <List
        size="default"
        bordered
        dataSource={ list }
        renderItem={(item, index) => (
          <List.Item 
            onClick={ handleDeleteItem.bind(this, index)} 
            key ={ index } 
            style={{ color: '#282'}}
          >
            {item}
          </List.Item>
        )}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // 派发action的函数
    changeInputValue(e) {
      const action = handleInputChangeAction(e.target.value)
      dispatch(action)
    },
    handleAddItem() {
      const action = handleAddItemAction()
      dispatch(action)
    },
    handleDeleteItem(index) {
      const action = handleDeleteItemAction(index)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todolist)