export default class MyInput extends React.Component{
  render(){
    let {value, defValue} = this.props
    return (
      <input type="text" defaultValue={this.state.defValue} value={value} onChange={this.changeVal}/>
    )
  }
  state={
    value:'',
    defValue:'这是默认值'
  }
  //动态变化
  changeVal = (event)=>{
    this.setState({value:event.target.value})
  }
}