// 注意！这里不是使用ES6的解构的方式引入Component，而是引入默认export的react和分别export的Component
import React, {Component} from 'react'
import CompA from './components/compA'
import CompB from './components/compB'
export default class App extends Component{
  // 兄弟组件传值可以使用消息订阅的方式，采用第三方库 https://github.com/mroderick/PubSubJS
  render(){
    return (
      <div>
        <CompA></CompA>
        <CompB></CompB>
      </div>
    )
  }
}
