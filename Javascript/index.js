"use strict";
console.clear();
// ES6: ECMAscript
// Javascript:  ES + Web.api;
// Nodejs: ES + Node.api;

// Primitive Data
// string, number, boolean, undefined, null, symbol

// transfer by value;

// var num = '3';
// var num1 = Number(3);
// // new Number() vs. Number()

// class Person {

// }
// var p = new Person();

// foo(a);
// console.log(a);
// console.log(typeof Object);

// console.log(typeof num1);

// var a = undefined; //
// var b = a;

// console.log(typeof NaN);

//  type null;

// Reference Data, Object data;

// var arr = [];
// var arr1 = new Array();

// console.log(obj.__proto__.constructor);
// console.log(arr.__proto__.constructor);

// var a = 0;
// var obj = {
//     name: "Jojo",
//     age: 18,
// };
// var obj1 = obj;

// obj1.name = 'Dio';
// console.log(obj);

// function foo(a, testObj) {
//     a = 4;
//     testObj.name = 'Dio';
// }
// foo(a, obj);
// console.log(a);
// console.log(obj); // <-----

// // coercion
// console.log(true + false);
// '1' - '12'

// var str = Number('1234');
// var str1 = String(1234);
// var str = '1234';
// console.log(1 + +'test'); // 13
// var str1 = 1234;
// console.log(1 + (str1 + ''));

// console.log(str1 + '' === str + '');

// var tar = 65421; // 12456;
// console.log(+(tar + '').split('').reverse().join(''));

// // == vs. ===
// console.log(str1 == str); //change the type // 1, coercion 2, compire
// console.log(str1 === str); // 1, compire
// console.log(undefined == null); //change the type // 1, coercion 2, compire
// console.log(undefined === null); // 1, compire
// console.log(NaN == NaN);
// console.log(NaN === NaN);

// undefined
// NaN
// ''
// 0
// false
// null

//               var           let            const        function
// hoisting:     y               y              y             y
// scope:      function        block          block         block

// function foo() {

//     test();
//     // if (true) {
//         function test() {}
//     // }
// }
// foo();

// var a = 0;
// var a = 3;
// const b = 0;
// const b = 3;
// const pi = Math.PI;
// reassign

// // mutable data vs. immutable data // seter, spread operator
// let obj = {};
// obj = {};
// const arr = [];

// // oop: Object Oriented Programming
// encapsulation

// Person.print(3);

// function foo() {}
// foo.print = function(num) {
//     console.log(num);
// }
// foo.print(3434)
// function bar() {}

// const jojo = new Person("Jojo", 18);

// const dio = new Person("Dio", 188);

// console.log(jojo.name);

// jojo.name // get
// jojo.name = 'Dio'; // set

// jojo.showage();

// console.log(dio);
// dio.showage();

// const obj = {};
// obj.name = 'Jojo';
// console.log(obj);

// inheritance
// class Person {
//     #name;
//     #age;
//     get age() {
//         // console.log('do something for getter');
//         return this.#age;
//     }
//     set age(newAge) {
//         this.#age = newAge;
//         // console.log('rerender page');
//     }
//     get name() {
//         // console.log('do something for getter');
//         return this.#name;
//     }
//     set name(newName) {
//         this.#name = newName;

//         console.log('rerender page');
//     }

//     constructor(name, age) {
//         this.#name = name;
//         this.#age = age;
//     }

//     showage() {
//         // // console.log(this.name + ' is ' + this.age);
//         // // console.log(this.name, 'is', this.age);
//         // console.log(`${this.#name} is ${this.#age}`);
//         console.log('this in the person class');
//     }
//     static print(num) {
//         console.log(num);
//     }
// }

// const p = new Person()
// p.name = 
// console.log(Person);

// class Employee extends Person {

//     constructor(name, age, company) {
//         super(name, age);
//         this.company = company;
//     }

//     showage(company) {
//         console.log(`${this.name} is ${this.age} form ${company}`);
//     }
// }

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.showage = function() {
//     console.log(`${this.name} is ${this.age}`);
// }
// function Employee(name, age, company) {
//     Person.call(this, name, age);
//     this.company = company;
// }
// Employee.prototype = Person.prototype;

// const employee = new Employee('Jojo', 18, 'Jump');
// // employee.name = 'Dio'
// // console.log(employee);
// employee.showage();
// employee.showage('Jump');

// poly-morph-ism // Many Forms
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     move() {
//         console.log('move');
//     }

//     walk() {}
// }
// const a = new Animal('FF');
// a.name
// class Fash extends Animal {
//     constructor(name) {
//         super(name);
//     }
//     move() {
//         return console.log(this.name + ' can swim');
//     }
// }
// class Bird extends Animal {
//     constructor(name) {
//         super(name);
//     }
//     move() {
//         return console.log(this.name + ' can fly');
//     }
// }
// class Monkey extends Animal {
//     constructor(name) {
//         super(name);
//     }
// }
// const fish = new Fash('fish');
// const bird = new Bird('bird');
// const monkey = new Monkey('monkey');
// fish.move();
// bird.move();
// monkey.move();

// // loop in Js

// const arr = [
//     { name: "TT", age: 12 },
//     { name: "DD", age: 12 },
//     { name: "RR", age: 81 },
// ];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 2) {
//         break;
//     }
//     console.log(arr[i]);
// }
// const arr = [1, 2, 3];
// for (const i in arr) {  // '0'
//     if (arr[i] === 2) {
//         continue;
//     }
//     // console.log(typeof i);
//     console.log(arr[i]);
// }
// for (let ele of arr) {
//     // '0'
//     // console.log(typeof i);
//     console.log(ele);
// }

// function foo(num) {
//     if (num === 2) {
//         continue;
//     }
//     console.log(num + 1);
// }

// const arr = [1, 2, 3];

// arr.forEach((num, i, array) => {
//     array[i] = num + 5;
// });

// Array.prototype.myForEach = function (cb) {
//     for (let i = 0; i < this.length; i++) {
//         cb(this[i], i, this);
//     }
// };

// console.log('foreach', arr.myForEach((num, i, array) => {
//     array[i] = num + 5;
// }));

// Array.prototype.myMap = function (cb) {
//     let tempArr = [];
//     for (let i = 0; i < this.length; i++) {
//         tempArr.push(cb(this[i], i, this));
//     }
//     return tempArr;
// }

// Array.prototype.myFilter = function (cb) {
//     let tempArr = [];
//     for (let i = 0; i < this.length; i++) {
//         if (cb(this[i], i, this)) {
//             tempArr.push(this[i]);
//         }
//     }
//     return tempArr;
// }

// console.log(arr.myFilter((cur, i, array) => {
//     return num > 1;
// }));

// forEach, map, filter, reduce

// '' + a + a = aa + b + b = aabb + c + c = aabbcc

// const arr = [1, 2, 3];
// console.log(arr.reduce((acc, cur) => acc + cur, 0)); // 'aabbcc'

// const arr = [
//     { name: "TT", age: 12 },
//     { name: "DD", age: 12 },
//     { name: "RR", age: 81 },
// ];

// Array.prototype.myReduce = function (...args) {
//     let [acc, index] = args.length > 1
//         ? [args[1], 0]
//         : [this[0], 1];

//     for (let i = index; i < this.length; i++) {
//         acc = args[0](acc, this[i]);
//     }
//     return acc;
// };
// const str = 'abc'; // [a, b, c]
// console.log(str.split('').myReduce((acc, cur) => acc + cur + cur, '')); // 'aabbcc'

// function foo(arr) {
//     // const obj = {};
//     // arr.forEach(ele => {
//     //     obj[ele.name] = ele.age;
//     // });
//     // return obj;  // mutable

//     // return arr.myReduce((acc, cur) => {
//     //     acc[cur.name] = cur.age;
//     //     return acc;
//     // }, {});  // mutable

//     return arr.reduce((acc, cur) => ({...acc, [cur.name]: cur.age}), {}); // immutable
// } // mutable & immutable

// console.log(foo(arr)); //{ TT: 12, DD: 12, RR: 81 }

// const numbers = [175, 50, 25];
// const res = numbers.myReduce(myFunc); 
// console.log(res);

// function myFunc(acc, cur) {
//     return acc - cur;
// }

// console.log(arr);

// const obj = {
//     name: 'Jojo',
//     age: 18
// }

// for (const key in arr) {  // '0'
//     console.log(typeof key);
//     console.log(arr[key]);
// }

// // rest parameter vs. spread operator

// function foo(...args) {
//     console.log(args);

// }
// foo(1, 2, 3);

// const arr = [1, 2, 3];
// const arr1 = [4, ...arr, 78];
// const charArr = [...'abc'];

// function target(num, str) {
//     console.log(num, str);
// } 

// function retra(target) {
//     return function(...args) {  // take
//         target(...args)  // drop
//     }
// }
// const test = retra(target);

// // target(3, 'str');
// test(3, 'str'); // 3, 'str'

// const str = 'test';
// console.log([...new Set([...str])].join(''));

// let obj1 = {};

// obj1 = {
//     ...obj1,
//     age: 19
// }
// obj1 = {
//     ...obj1,
//     name: 'world'
// } // immutabel

// const obj = {
//     name: 'Hello',
//     age: 'test',
// }

// console.log(obj);

// const a = {name: 'Hello'};
// const b = {name: 'Hello'};
// const c = {name: 'efg'};

// c[b] = 456;

// // destructure;

// // object copy;

// // iife

// // curring

// // closure

// // this

// // event loop

// // call back and call back hell

// // 
