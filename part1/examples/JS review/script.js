//学习JavaScript的基础语法
//变量的声明和赋值

const x = 1;
let y = 5;
console.log(x, y);

y += 10;
console.log(x, y);

y = "sometext";
console.log(x, y);

//const, let, var的区别是，const声明的变量不能被重新赋值，let声明的变量可以被重新赋值，var声明的变量也可以被重新赋值，但var有函数作用域的问题，建议使用const和let。
//另外，const和let有块级作用域，而var没有块级作用域。
//建议优先使用const，只有在需要重新赋值的时候才使用let，尽量避免使用var。

//数组
const t = [1, 2, 3, 4];
t.push(5); //push方法可以向数组末尾添加元素
console.log(t.length); //length属性可以获取数组的长度
console.log(t[0]); //通过索引访问数组元素，索引从0开始

t.forEach((value) => {
  console.log(value);
}); //forEach方法可以遍历数组

//虽然const声明的数组不能被重新赋值，但可以修改数组的内容，比如添加、删除元素等。
//在react中，经常使用函数式编程的方式来处理数组，其特点是使用不可变的数据结构。
//所以在react编程中最好不使用push这种会改变原数组的方法，而是使用concat, slice等不会改变原数组的方法，或者使用扩展运算符(...)来创建新数组。
//这样会创建新的数组，符合函数式编程的思想，保持原数组不变。

const newt = t.concat([6, 7]); //concat方法不会改变原数组，而是返回一个新数组
console.log(t); //原数组仍然是[1,2,3,4,5]
console.log(newt); //新数组是[1,2,3,4,5,6,7]

newt.forEach((value) => {
  console.log(value);
}); //遍历新数组

//更多数组的方法，比如map, filter, reduce等，都是不会改变原数组的方法，建议多使用这些方法来处理数组。
const arr = [1, 2, 3, 4, 5];
//map方法的作用是对数组的每个元素执行一个函数，返回一个新数组
const mappedArr = arr.map((value) => value * 2);
console.log(mappedArr); // [2, 4, 6, 8, 10]
//map基于原数组创建了一个新数组，原数组没有被改变

//map也可以将数组元素转化为其他完全不同的东西，比如HTML元素
const mappedArr2 = arr.map((value) => "<li>" + value + "</li>");
console.log(mappedArr2); // ['<li>1</li>', '<li>2</li>', '<li>3</li>', '<li>4</li>', '<li>5</li>']

const [first, second, ...rest] = arr; //数组的解构赋值
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]
//解构赋值可以方便地从数组中提取值，rest运算符(...)可以将剩余的元素收集到一个新数组中
//复习解构赋值
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [first2, second2, ...rest2] = arr3;

console.log(first2);
console.log(second2);
console.log(rest2);
//解构赋值可以方便地从数组中提取值，rest运算符(...)可以将剩余的元素收集到一个新数组中
//解构赋值也可以用于对象
//解构赋值只有...才是关键字，first2, second2, rest2都是变量名，可以随意命名

//数组还有许多有用的方法，建议多学习和使用

//对象
const person = {
  name: "John",
  age: 30,
}; //和java中的对象类似，是键值对的集合
//属性值可以是任意类型，比如字符串、数字、数组、函数等
//引用对象的属性可以通过点操作符(.)或者中括号([])
console.log(person.name); // John
console.log(person["age"]); // 30
//JS对象的属性是可以动态添加和删除的
person.height = 180; // 添加属性
console.log(person.height); // 180
//JS并没有类的概念，但可以通过构造函数来模拟类，虽然不常用

//函数
//定义箭头函数
const add = (a, b) => {
  return a + b;
};
console.log(add(2, 3)); // 5
//如果只有一个参数，可以省略括号
const square = (x) => {
  return x * x;
};
console.log(square(4)); // 16
//如果函数体只有一行代码，可以省略大括号和return关键字
const multiply = (a, b) => a * b;
//类似java中的Lambda表达式，可以在一行中定义简单的函数
//JS的语法比Java更简洁灵活

//例如使用map方法时，可以直接传入箭头函数
const arr2 = [1, 2, 3];
const tSquared = arr2.map((p) => p * p);
tSquared.forEach((value) => console.log(value));
//在ES6之前，定义函数的方式是使用function关键字
function subtract(a, b) {
  return a - b;
}
console.log(subtract(5, 2)); // 3
//箭头函数相比传统函数有更简洁的语法，并且不会绑定自己的this，适合用于回调函数等场景
//在react中，建议优先使用箭头函数来定义函数

//对象方法
const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',

  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
}
arto.greet()   //和Java类似，对象的方法可以通过对象名.方法名()来调用

arto.growOlder = function () {
  this.age += 1;
} //可以动态添加对象的方法,用this关键字来引用对象本身

//类
//JAVASCRIPT中没有类的概念，但可以通过构造函数来模拟类
//ES6引入了class关键字，可以更方便地定义类
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  } //与Java类似，使用constructor方法来定义构造函数
  greet() {
    console.log('hello, my name is ' + this.name);
  } //定义类的方法，不需要function关键字
}
const adam = new Person('Adam', 25); //使用new关键字来创建类的实例
adam.greet();
console.log(adam.age);
const janja = new Person('Janja', 28);
janja.greet();
console.log(janja.age);
//对于React开发者来说，理解这些基础语法大概就足够了
//更多高级语法和特性，可以在实际开发中逐步学习和掌握
