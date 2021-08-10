import React,{Component} from 'react'
import hello from './index.module.css'
// css 模块化引入
export default class Hello extends Component{
  render(){
    return (
      <div className={hello.hello}>Hello</div>
    )
  }
}