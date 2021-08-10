// 注意！这里不是使用ES6的解构的方式引入Component，而是引入默认export的react和分别export的Component
import React,{Component} from 'react'
import Hello from './components/Hello/Hello'
import Welcome from './components/Welcome/Welcome'
export default class App extends Component{
  render(){
    return (
      <div>
        <Welcome></Welcome>
        <Hello></Hello>
      </div>
    )
  }
}
