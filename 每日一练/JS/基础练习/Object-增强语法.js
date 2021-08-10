let name = "zhangsan"
let Obj = {
  name
}
console.log(name)
// 可计算属性，可以实现动态属性赋值，动态属性允许是JavaScript表达式，即也可以是有返回值的function
let Person = {
  [name]:'王五'
}
console.log(Person)

let Book = {
  name:'张三的书',
  author:'张三',
  publish:{
    proName:'新华出版社',
    time:20210526
  },
  getName(){
    return this.name
  }
}
let {name:bookName, author:bookAuthor} = Book
let {name,author} = Book