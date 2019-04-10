import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'  // 引入 react-redux 第一个核心组件, Provider
import store from './store'  // 引入 redux的store, 为的是让react-redux 可以和redux做关联

const myApp = (  // 固定写法  Provider 组件包裹要被关联的组件 并传入 store
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(myApp, document.getElementById('root'));  // 渲染 myApp
