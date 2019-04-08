import React from 'react'
import { Input, List, Button } from 'antd';

const TodoUi = (props) => {
  return (
    <div>
      <div>
        <Input onChange={props.handleInputChange} value={props.inputValue} placeholder="Todo List" />
        <Button onClick={props.handleAddItem} type="primary" style={{marginTop: '10px', marginBottom: '10px', background: '#272a34'}}>Add Todo</Button>
      </div>
      <div>
      <List
        size="large"
        bordered
        style={{color: '#282', cursor: 'pointer', userSelect: 'none'}}
        dataSource={props.list}
        renderItem={ (item, index) => (<List.Item onClick={() => {props.handleDelete(index)}}>{item}</List.Item>)}
      />
      </div>
    </div>
  )
}

export default TodoUi