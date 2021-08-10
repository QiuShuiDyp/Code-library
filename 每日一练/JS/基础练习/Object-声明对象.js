//====声明对象=====
// 声明对象的方式1：原型实例化
let obj1 = new Object()
obj1.name = 'obj1---张三'
obj1.getName = function(){
  return this.name
}

console.log(obj1.getName())

// 声明对象的方式2：直接赋值
let obj2 = {
  name:'obj2---李四',
  getName:function(){
    return this.name
  }
}

console.log(obj2.getName())

// 声明对象的方式3：构造函数
function Obj3(name) {
  this.name = name
  this.getName = function(){
    return this.name
  }
}

let obj3 = new Obj3('王五')
console.log(obj3.getName())

// 声明对象的方式4：ES6类
class Obj4 {
  name = '赵六'
  constructor(name){
    this.name = name 
  }
  getName(){
    return this.name 
  }
}

let obj4 = new Obj4('赵六')

console.log(obj4.getName())

// 声明对象的方式4：Object.create类
let obj5 = Object.create(obj4)

obj5.name = 'obj5--Object.create'
console.log(obj5.getName())
