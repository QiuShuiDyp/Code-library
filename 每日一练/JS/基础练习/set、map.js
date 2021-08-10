// set

// map

var m = new Map()

var m1 = new Map([["key1","val1"],["key2","val2"],["key3","val3"]])

// map 常规方法
// 增加，如果有相同的key则覆盖
console.log(m1.set("key4","val4"))
// 判断是否有值
console.log(m1.has("key1"))
// 取key对应的val
console.log(m1.get('key1'))
// 删除delete
console.log(m1.delete('key1'))
// 清除map的内容
console.log(m1.clear())