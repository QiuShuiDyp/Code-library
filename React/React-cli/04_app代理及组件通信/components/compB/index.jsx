import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class CompB extends Component {
  state = {
    recevieMsg:''
  }
  componentDidMount(){
    // 接受消息
    this.token = PubSub.subscribe('Topic',(msg,data)=>{
      console.log(data)
      this.setState({recevieMsg:data})
    })
  }
  unSubscribe = ()=>{
    // 取消订阅
    PubSub.unsubscribe(this.token)
  }
  render() {
    return (
      <div>
        CompB接收消息：{this.state.recevieMsg}
        <button onClick={this.unSubscribe}>取消订阅</button>
      </div>
    )
  }
}
