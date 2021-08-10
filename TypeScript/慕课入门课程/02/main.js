/*
  数组
*/
// 数组声明的方式，以声明number类型的数组举例
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
var arr3 = [1, 2, 3, 4];
// 声明元素类型混合的数组
var arr4 = [1, "arr"]; //该数组值能存放number、string类型
// arr4.push(true); //会报错，不能将boolean类型元素添加到arr4
var arr5 = [1, "arr", true];
arr5.push({ num: 1 }); //any类型允许插入任何类型的元素
/*
 元组（Tupple）元组是一个特定的数组，是固定元素，固定类型的一种数据类型
*/
var person1 = [1, "一颗赛艇"];
// person1[1] = 1; //报错，只能是string类型
// person1[2] = 111; //报错，元组是固定元素个数的，但是可以通过person1.push(111)来添加元素，是个bug
// 注意区分下面不是元组
var person2 = [1, "一颗赛艇"];
person2[0] = "江南";
person2[1] = "1";
/*
  联合（Union）与文献（Literal）类型
*/
var union;
/*
  Literal类型（字面量类型），特点是明确取值的范围
*/
var union2; //union2只能取值 0、1、2
// union2 = 4; //报错
/*
  枚举类型 Enum
*/
// 枚举类型真正的数据类型默认是数字，同时也支持赋值其他类型
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["green"] = 2] = "green";
})(Color || (Color = {}));
var color = Color.blue;
console.log(color);
var Color2;
(function (Color2) {
    Color2["red"] = "red";
    Color2["blue"] = "blue";
    Color2[Color2["green"] = 1] = "green";
})(Color2 || (Color2 = {}));
console.log(Color2.blue);
/*
  any类型，支持所有类型, unknown也是支持所有数据类型，但是会针对类型做一些保护
*/
var randomVal = 666;
randomVal = true;
randomVal = "asdga";
// randomVal = {};
// randomVal();
// randomVal.toUpperCase();
var randomVal2 = 666;
randomVal = true;
randomVal = "asdga";
randomVal = {};
if (typeof randomVal === "string") {
    randomVal.toUpperCase();
}
if (typeof randomVal === "function") {
    randomVal();
}
/*
  void、undefined、never
*/
/*
  类型断言
*/
var message;
message = "abc";
// message.endsWith("c");
var add = message.endsWith("c");
var add1 = message.endsWith("c");
