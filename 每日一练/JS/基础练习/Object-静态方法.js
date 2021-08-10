class Obj {
  constructor(name, age=18){
    this.name = name
  }
  grades=[
    {
      grade:70,
      project:'英语'
    },
    {
      grade:90,
      project:'中文'
    }
  ]
}

let obj = new Obj('张三')

let name = {
  age:13
}

//  Object.assign -- 对象浅拷贝
// console.log('Object.assign -- 对象浅拷贝')
let copyObj = Object.assign(obj)
console.log('copyObj----',copyObj)
copyObj.grades[0].grade = 100
console.log('obj----',obj)
 
//Object.entries() --返回一个包含[key, value]给定对象自己的可枚举字符串属性的所有对的数组。
console.log('entries----',Object.entries(copyObj))
// 反Object.entries  --从可迭代的[key, value]中返回一个新对象
console.log('fromEntries----',Object.fromEntries(Object.entries(copyObj)))
// Object.freeze()
console.log('freeze',Object.freeze())

//返回一个数组，包含对象所有可枚举和不可枚举的属性名称
// console.log('getOwnPropertyNames',Object.getOwnPropertyNames())

console.log('keys----',Object.keys(copyObj))



