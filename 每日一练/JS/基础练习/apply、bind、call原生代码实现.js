let person  = {
  name:'zhangsan',
  age:12
}
function getName(...arg){
  console.log(arg)
  console.log(`my name is ${this.name}`) 
}
// bind(target, arg1, arg2) 仅改变this指向
Function.prototype.mybind = function (_this, ...arg){
  _this.getName = this
  // 返回一个闭包，在闭包函数中删掉新增的方法
  return function(){
    _this.getName(...arg)
    delete _this.getName
  }
}
// call(target, arg1, arg2) 改变this指向，并执行函数
Function.prototype.mycall = function(_this, ...arg) {
  _this.func= this
  _this.func(arg)
  // 删除func属性
  delete _this.func
}
// apply(target, [arg1, arg2]) 改变this指向，并执行函数
Function.prototype.myapply = function(_this, arr){
  _this.func = this
  _this.func(arr)
  delete _this.func
}

function changeThis() {
  // getName.mycall(person,1,2,3)
  // getName.myapply(person, [1,2,3])
  func = getName.mybind(person,1,2,3)
  func()
}