//定义一个 Animal 构造函数，作为 Dog 的父类
function Animal () {
  this.superType = 'Animal';
}

Animal.prototype.superSpeak = function () {
  alert(this.superType);
}

function Dog (name) {
  this.name = name;
  this.type = 'Dog';  
}
//改变Dog的prototype指针，指向一个 Animal 实例
Dog.prototype = new Animal();
//上面那行就相当于这么写
//var animal = new Animal();
//Dog.prototype = animal;

Dog.prototype.speak = function () {
　　alert(this.type);
}
var doggie = new Dog('jiwawa');
doggie.superSpeak();  //Animal 