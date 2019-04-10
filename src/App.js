import React, { Component } from 'react';
import './App.css';
import "antd/dist/antd.css";
import TodoList from './components/todolist'

import store from './store'
import { getInitList } from './store/actionCreators'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TodoList />
        </header>
      </div>
    );
  }

  componentDidMount() {
    const action = getInitList()
    store.dispatch(action)
  }
}

export default App;
