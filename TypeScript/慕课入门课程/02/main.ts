/*
  数组
*/
// 数组声明的方式，以声明number类型的数组举例
let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];
let arr3 = [1, 2, 3, 4];

// 声明元素类型混合的数组
let arr4 = [1, "arr"]; //该数组值能存放number、string类型
// arr4.push(true); //会报错，不能将boolean类型元素添加到arr4
let arr5: any[] = [1, "arr", true];
arr5.push({ num: 1 }); //any类型允许插入任何类型的元素
/*
 元组（Tupple）元组是一个特定的数组，是固定元素，固定类型的一种数据类型
*/
let person1: [number, string] = [1, "一颗赛艇"];
// person1[1] = 1; //报错，只能是string类型
// person1[2] = 111; //报错，元组是固定元素个数的，但是可以通过person1.push(111)来添加元素，是个bug

// 注意区分下面不是元组
let person2 = [1, "一颗赛艇"];
person2[0] = "江南";
person2[1] = "1";

/*
  联合（Union）与文献（Literal）类型
*/
let union: string | number | boolean | string[];

/*
  Literal类型（字面量类型），特点是明确取值的范围
*/
let union2: 0 | 1 | 2; //union2只能取值 0、1、2
// union2 = 4; //报错

/*
  枚举类型 Enum
*/
// 枚举类型真正的数据类型默认是数字，同时也支持赋值其他类型
enum Color {
  red,
  blue,
  green,
}
let color = Color.blue;
console.log(color);

enum Color2 {
  red = "red",
  blue = "blue",
  green = 1,
}
console.log(Color2.blue);

/*
  any类型，支持所有类型, unknown也是支持所有数据类型，但是会针对类型做一些保护
*/
let randomVal: any = 666;
randomVal = true;
randomVal = "asdga";
// randomVal = {};
// randomVal();
// randomVal.toUpperCase();

let randomVal2: unknown = 666;
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
let message: any;
message = "abc";
// message.endsWith("c");
let add = (<string>message).endsWith("c");
let add1 = (message as string).endsWith("c");

/*
  函数类型
*/
let log = function (message) {
  console.log("hello");
};

let log2 = function (message: string, num: number = 0) {
  console.log(message, num);
};

/*
  对象，TypeScript的对象是一个key-type的形式，即每个属性的type是指定的
*/
const person = {
  firstName: "一颗赛艇",
  lastName: "zhang",
};
// person.firstName = 1; //会报错,当指定person类型为any的时候，该语句正常不报错

/**
 * interface 与 class
 */
// interface
let drawPoint = (point: Point) => {
  console.log({ x: point.x, y: point.y });
};
interface Point {
  x: number;
  y: number;
}
const prop = {
  x: 1,
  y: 2,
  z: 3,
};
drawPoint(prop);
// drawPoint({ x: "一颗", y: "赛艇" }); //会报错，入参和interface不匹配

// class
interface IPoint {
  x: number;
  y: number;
  drawpoint: () => void;
  getDistance: (p: IPoint) => number;
}

class Point implements IPoint {
  // 使用了访问修饰符的属性，可以不用再额外声明，TS默认会创建并在构造函数中赋值，同样的修饰符还有private, protect
  constructor(private x: number, private y: number) {}
  drawpoint = () => {
    console.log(this.x, this.y);
  };
  getDistance = (p: IPoint) => {
    return Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.y, 2);
  };
}
