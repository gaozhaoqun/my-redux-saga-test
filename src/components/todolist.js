import React from 'react'
import { connect } from 'react-redux'  // 引入第二个核心组件 connect, 
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


// 映射store里的数据 到 prop上, mapStateToProps方法就是容器组件向store声明需要的state的地方
const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}


// mapDispatchToProps用于建立组件跟store.dispatch的映射关系,可以是一个object，也可以传入函数 
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