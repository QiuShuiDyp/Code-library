import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class CompA extends Component {
  state = {
    count:0
  }
  sendMsg = ()=>{
    this.setState({count: this.state.count+1})
    // 发布消息
    PubSub.publish('Topic',this.state.count)
  }
  // httpFeatch = ()=>{
  //   fetch(`url`).then(resolve =>{
  //     // 这一层是对联系服务器的处理结果
  //     console.log('联系服务器成功')
  //     // .json()返回一个promise，这个promise里包含了服务器数据获取的结果
  //     return resolve.json()
  //   },reject=>{
  //     // 注意！这里失败需要return一个空的promise，来终止后面的then处理
  //     // 如果.then的结果是非promise，则代表成功，走resolve，如果.then的结果是promise，且promise的状态是onfillful，则走resolve
  //     console.log('联系服务器获取失败',reject)
  //     return new Promise(()=>{})
  //   }).then(resolve =>{
  //     console.log('数据获取成功',resolve)
  //   },reject=>{
  //     console.log('数据获取失败',reject)
  //   })
  // }
  httpFeatch = async ()=>{
    try {
      let response = await fetch(`url`)
      let result = response.json()
    } catch (error) {
      console.log('请求报错',error)
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.sendMsg}>组件A发布消息</button>
      </div>
    )
  }
}
