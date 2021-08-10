import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  state = {
    mouse:false
  }
  render() {
    const {doItem} = this.props
    const {mouse} = this.state
    return (
      <li onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)} style={{backgroundColor:mouse?'#ddd':'white'}}>
        <label>
          <input type="checkbox" defaultChecked={doItem.done} onChange={this.handleChangeCheck(doItem.id)}/>
          <span>{doItem.name}</span>
        </label>
        <button className="btn btn-danger" onClick={this.deleteItem} style={{display:mouse?'block':'none'}}>删除</button>
      </li>
    )
  }
  deleteItem = ()=>{

  }
  handleMouse = (flag)=>{
    return ()=>{
      this.setState({mouse:flag})
    }
  }
  handleChangeCheck = (id)=>{
    return (event)=>{
      // this.props.
    }
  }
}
