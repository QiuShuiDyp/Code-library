// 注意！这里不是使用ES6的解构的方式引入Component，而是引入默认export的react和分别export的Component
import React,{Component} from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'
import './App.css'
export default class App extends Component{
  state = {
    todos:[
      {id:'001', name:'吃饭', done:true},
      {id:'002', name:'睡觉', done:true},
      {id:'003', name:'打代码', done:false}
    ]
  }
  addTodo = (doItem)=>{
    this.setState({todos:[doItem,...this.state.todos]})
  }
  render(){
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo = {this.addTodo}></Header>
          <List todos={this.state.todos}></List>
          <Footer></Footer>
        </div>
      </div>
    )
  }
}
