// "use strict";
console.clear();

// ~~~~~~~~~~~~~~~~~~~~ Day 1 ~~~~~~~~~~~~~~~~~~~~
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

// ~~~~~~~~~~~~~~~~~~~~ Day 2 ~~~~~~~~~~~~~~~~~~~~

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
//     Person.apply(this, [name, age]);
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
//     // console.log(this);
//     let tempArr = [];
//     for (let i = 0; i < this.length; i++) {
//         tempArr.push(cb(this[i], i, this));
//     }
//     return tempArr;
// };
// const arr = [1, 2, 3];

// console.log(arr.myMap((ele) => ele));

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

// ~~~~~~~~~~~~~~~~~~~~ Day 3 ~~~~~~~~~~~~~~~~~~~~

// // destructure;

// let a = 0;
// let b = 1;
// const arr = [0, 1, 3, 4];
// let [a, b, _, c] = arr;

// let {name, abc} = {name: 'Jojo', age: 12, company: 'Jump', abc: 123}

// const obj = {
//     id: 1,
//     name: 'David Dong',
//     links: [
//         { name: 'wechat',       link: 'wechat.com'      },
//         { name: 'apple',        link: 'apple.com'       },
//         { name: 'cnn',          link: 'cnn.com'         },
//         { name: 'fox',          link: 'fox.com'         },
//         { name: 'hbo',          link: 'hsdfsdfsdbo.com' },
//     ]
// }
// const {links} = obj;
// console.log(links.find(({ name }) => name === 'hbo').link);

// const obj = {name: 'Jojo', age: 18};
// for (const key in obj) {
//     console.log(obj[key]);
// }
// console.log(Object.keys(obj));

// Object.keys(obj).forEach((cur) => console.log(cur));
// Object.entries(obj).forEach((cur) => console.log(cur));

// // ~~~~~~interview question~~~~~~~~~~~~
// const first = [
//     { userid: 2, name: 'Velen' },
//     { userid: 56, name: 'Illidan' },
//     { userid: 23, name: 'Muradin' },
//     { userid: 12, name: 'Sylvanas' },
//     { userid: 44, name: 'Cenarius' },
//     { userid: 4, name: 'Gul\'Dan' }
// ];
// const second = [
//     { userid: 2, role: 'Mage' },
//     { userid: 4, role: 'Worlock' },
//     { userid: 56, role: 'Demon Hunter' },
//     { userid: 66, role: 'Druid' },
//     { userid: 87, role: 'Shaman' },
//     { userid: 12, role: 'Hunter' },
// ];

// function mergeArr(first, second) {
//     const arr = [...first, ...second];
//     const map = {};

//     arr.forEach(ele => {
//         map[ele.userid] = {
//             ...{ userid: null, name: null, role: null },
//             ...map[ele.userid],
//             ...ele,
//         }
//     })

//     return Object.values(map);
// }

// const map = {
//     2: {
//         ...{ userid: null, name: null, role: null },
//         ...{ userid: 2, name: 'Velen'},
//     },
//     // 2: {userid: 2, name: 'Velen', role: null}
// }

// console.log(mergeArr(first, second));
// [
//     { userid: 2, name: 'Velen', role: 'Mage'},
//     { userid: 56, name: 'Illidan', role: 'Demon Hunter' },
//     { userid: 23, name: 'Muradin', role: null },
//     ...
//     { userid: 87, name: null, role: 'Shaman' },
//     ...
// ]

// // object copy;
// shallow copy, deep copy & clone

// const obj = { name: "Dio" };
// const obj1 = obj;

// obj1.age = 188;
// console.log(obj);

// const links = [
//     { name: "wechat", link: "wechat.com" },
//     { name: "apple", link: "apple.com" },
//     { name: "cnn", link: "cnn.com" },
//     { name: "fox", link: "fox.com" },
//     { name: "hbo", link: "hsdfsdfsdbo.com" },
// ];
// const info = links.find(({name}) => name === 'cnn');

// console.log(links.includes({ name: "cnn", link: "cnn.com" }));

// const obj = {
//     name: "Dio",
//     child: { name: "Tom" },
//     date: new Date(),
//     foo: function() {}
// };
// console.log(obj);
// console.log(JSON.stringify(obj));

// obj.child.name = 'Jack';
// console.log(obj);
// console.log(obj1);

// lodash cloneDeep()

// // iife
// (function (num) {
//     console.log(num);
// }(123));
// ((ele, ele1) => console.log(ele + ele1))(456, 1000);

// function foo() {
//     console.log(123);
// }
// foo();

// // curring + highorder function
// function foo(a) {
// // // closure

// const machine = (function () {

//     function print(val) {
//         console.log(val);
//     }

//     return { print };
// })();

// const {print} = machine;

// print('something');

//     return function(b) {
//         return a + b;
//     }
// }
// const bar = foo(4);
// console.log(bar(5)); // 9

//~~~~~~~~~~~ interview ~~~~~~~~~~~~~

// const target = function (a, b) {
//     console.log(a + b);
// };
// // const target1 = function (num1, num2, num3) {
// //     console.log(num1 + num2 + num3);
// // };

// const fn = limitedFunction(2, target);
// const fnextends = limitedFunction(4, target);

// function limitedFunction(num, callback) {
//     return function (...args) {
//         if (num === 0) {
//             console.log("over limited!");
//         } else if (num >  0) {
//             num--;
//             callback(...args);
//         }
//     };
// }

// fnextends(1, 2); // 7;      fn: counter === 2
// fnextends(5, 4); // 9;      fn: counter === 1
// fnextends(3, 1); //         fn: counter === 0
// fnextends(6, 4); //
// fnextends(3, 9); //
// fnextends(0, 4); // over limited!
// fnextends(2, 4); // over limited!

// function foo(name) {
//     const a = 0;
//     return name;
// }
// const abc = foo('hello'); //
// class Person {
//     #age = 0;
//     constructor(name) {
//         this.name = name;
//     }
// }
// const p = new Person('Jojo');

// //~~~~~~~~~~~ interview ~~~~~~~~~~~~~
// const callback1 = (a) => a + 2; // 7
// const callback2 = (b) => b * 2; // 14
// const callback3 = (c) => c - 2; // 12

// console.log(runAll(thencalback, callback2, callback3)(4)); // 12

// function runAll(...cbs) {
//     return function(num) {
//         return cbs.reduce((acc, cur) => cur(acc), num);
//     }
// }

// ~~~~~~~~~~~~~~~~~~~~ Day 4 ~~~~~~~~~~~~~~~~~~~~

// Array.prototype.myMap = function (cb) {
//     const arr = [];
//     for (let i = 0; i < this.length; i++) {
//         arr.push(cb(this[i], i, this));
//     }
//     return arr;
// }

// const arr = [1, 2, 3];
// console.log(arr.map(
//     function (num) {
//         console.log(this.limit);
//         return num + this.limit;
//     },
//     {limit: 5}
// ));

// console.log(arr.map(target(6)));

// function target(n) {
//     return function (num) {
//         return num + n;
//     }
// }

// // this ---> object

// try {
//     console.log(a);
// } catch (error) {
//     console.log(error);
// }

// // globel
// console.log(this);
// this in an object;
// const promise = {
//     name: 'Jojo',
//     constructor: function () {
//         console.log('this for showname: ', this); // <---------console this;

//         // function foo() {   // foo ----> showname ----> obj
//         //     console.log('this for foo: ', this); // console this;
//         // }
//         const executor = () => {   // foo ----> showname ----> obj
//             console.log('this for foo: ', this); // console this;
//         }
//         foo();
//         // foo.apply(this);
//         // const bar = foo.bind(this); // <-------------
//         // bar();
//     },
// }
// // obj.showname();

// // this in a class
// class Person {

//     name = 'Dio';

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     hello() {
//         console.log(this.name);
//     }
// }

// const person = new Person('Jojo', 18);
// // const person1 = new Person('Tom', 18);
// // // console.log(person);
// person.hello();

// // control this;

// const obj = {
//     num: 12345,
//     printnum() {
//         console.log(this.num);
//     }
// }

// obj.printnum();
// /**
//  * printnumoutside: talk about this
//  * @param {String} name
//  * @param {Number} age
//  */

// // bind, call, apply

// function printnumoutside(name, age) {  // <------- 100
//     console.log(this.num);
//     console.log('name: ', name);
//     console.log('age: ', age);
// }
// // running in a eager way
// printnumoutside.call(obj, 'Dio', 190) // <-------- 1 + 100
// printnumoutside.apply(obj, ['Dio', 190]) // <-------- 2 : obj + [].length -> 100

// /**
//  * newprint: talk about this
//  * @param {String} name
//  * @param {Number} age
//  */
// const newprint = printnumoutside.bind(obj);  // running in a lazy way
// newprint('Dio', 18);

// // arrow function
// function foo() {
//     console.log('foo: ', arguments); // this
//     return {name: 'Tom'};
// }
// const bar = () => {
//     console.log('bar: ', arguments);
//     return {name: 'Tom'};
// };
// foo();
// bar();

// // event loop

// scope

// var i = 0;

// for (let i = 0; i < 5; i++) {
//     setTimeout(() => console.log(i), (5 - i) * 1000);

//     // (function (v) {
//     //     setTimeout(() => console.log(v), v * 1000);
//     // })(i);
// }
// console.log("this is i"); // 5

/**
 * call stack:
 * [for, set]
 *
 * web api (async api):
 * () => console.log(i) ---> 5   // i = 0
 * ...
 *
 * tasks queue (message queue);
 * [() => console.log(i) // i = 4, () => console.log(i) // i = 3, () => console.log(i) // i = 2]
 */

// | 0,
// | 1s -> 1,
// | 2s -----> 2,
// ...
// 0, 1, 2, 3, 4

// ~~~~~~~~~~~~~~~~~~~~ Day 5 ~~~~~~~~~~~~~~~~~~~~
// // call back and call back hell
// const foo = () => console.log("foo");

// const getRandomTime = () => Math.floor(Math.random() * 6);

// // console.log(getRandomTime());
// const callFnInRandomTime = (callback) => {
//     const timer = getRandomTime();
//     console.log(`Wait ${timer}s`);

//     setTimeout(callback, timer * 1000);
// };

// callFnInRandomTime(() => {
//     callFnInRandomTime(() => {
//         callFnInRandomTime(() => {
//             callFnInRandomTime(() => {
//                 callFnInRandomTime(() => {
//                     callFnInRandomTime(() => {
//                         callFnInRandomTime(() => {
//                             callFnInRandomTime(() => {
//                                 callFnInRandomTime(() => {
//                                     callFnInRandomTime(foo);
//                                 });
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });

// // XHR: XMLHttpRequest

// function getData(id) {
//     return new Promise((resolve, reject) => {

//         const baseUrl = "https://jsonplaceholder.typicode.com";
//         const path = "users";

//         var xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status == 200) {
//                 resolve(JSON.parse(xhttp.response));
//             }
//         };
//         xhttp.open("GET", [baseUrl, path, id].join("/"));
//         xhttp.send();
//     });
// }

// const print = (data) => console.log(data);

// // async and await
// (async () => {
//     const data7 = await getData(7); // 4
//     print(data7);
//     const data3 = await getData(3); // 2
//     print(data3);
// })(); // 6

// |---> 4
// |---> 2
// 4

// function* foo() {
//     for (let i = 0; i < 10; i++) {
//         yield console.log(i);
//     }
// }
// const fn = foo();
// fn.next();
// fn.next();
// fn.next();
// fn.next();
// fn.next();
// fn.next();

// 7, 3, 5, 1, 2, 4 ...
// getData(7)
//     .then(data => {
//         print(data);
//         return getData(3);
//     })
//     .then(data => {
//         print(data);
//         return getData(5);
//     })
//     .then(data => {
//         print(data);
//         return getData(1);
//     })
//     .then(data => {
//         print(data);
//         return getData(2);
//     })
//     .then(data => {
//         print(data);
//     });

// const getTheCompanyName = (data) => {
//     const name = data.company.name;
//     console.log(name);
// }

// getData(print, 7);
// getData(print, 3);
// getData(print, 5);

// getData((data7) => {
//     print(data7);
//     getData((data3) => {
//         print(data3);
//         getData((data5) => {
//             print(data5);
//         }, 5);
//     }, 3);
// }, 7);

// // Promise

// const status = {
//     PENDING: "pending",
//     FULFILLED: "fulfilled",
//     REJECTED: "rejected",
// };

// const isThenable = (maybePromise) =>
//     maybePromise && typeof maybePromise.then === "function";

// class MyPromise {
//     #status = status.PENDING;
//     #value = undefined;
//     #reason = undefined;
//     #thenQueue = [];
//     #finallyQueue = [];

//     constructor(executor) {
//         if (typeof executor === "function") {
//             try {
//                 executor(this.#resolve.bind(this), this.#reject.bind(this));
//             } catch (err) {
//                 this.#reject(err);
//             }
//         }
//     }

//     #propagationResolved() {
//         this.#thenQueue.forEach(([controlledPromise, fulfilledFn]) => {
//             if (typeof fulfilledFn === "function") {
//                 const valueOrPromise = fulfilledFn(this.#value);

//                 if (isThenable(valueOrPromise)) {
//                     valueOrPromise.then(
//                         (value) => controlledPromise.#resolve(value),
//                         (reason) => controlledPromise.#reject(reason)
//                     );
//                 } else {
//                     controlledPromise.#resolve(valueOrPromise);
//                 }
//             } else {
//                 return controlledPromise.#resolve(this.#value);
//             }
//         });

//         this.#finallyQueue.forEach(([controlledPromise, sideEffectFn]) => {
//             sideEffectFn();
//             controlledPromise.#resolve(this.#value);
//         });

//         this.#thenQueue = [];
//         this.#finallyQueue = [];
//     }

//     #propagationRejected() {
//         this.#thenQueue.forEach(([controlledPromise, _, catchFn]) => {
//             if (typeof catchFn === "function") {
//                 const valueOrPromise = catchFn(this.#reason);

//                 if (isThenable(valueOrPromise)) {
//                     valueOrPromise.then(
//                         (value) => controlledPromise.#resolve(value),
//                         (reason) => controlledPromise.#reject(reason)
//                     );
//                 } else {
//                     controlledPromise.#resolve(valueOrPromise);
//                 }
//             } else {
//                 return controlledPromise.#reject(this.#reason);
//             }
//         });

//         this.#finallyQueue.forEach(([controlledPromise, sideEffectFn]) => {
//             sideEffectFn();
//             controlledPromise.#reject(this.#value);
//         });

//         this.#thenQueue = [];
//         this.#finallyQueue = [];
//     }

//     #resolve(value) {
//         setTimeout(() => {
//             if (this.#status === status.PENDING) {
//                 this.#status = status.FULFILLED;
//                 this.#value = value;
//                 this.#propagationResolved();
//             }
//         }, 0);
//     }
//     #reject(reason) {
//         setTimeout(() => {
//             if (this.#status === status.PENDING) {
//                 this.#status = status.REJECTED;
//                 this.#reason = reason;
//                 this.#propagationRejected();
//             }
//         }, 0);
//     }

//     then(fulfilledFn, catchFn) {
//         const controlledPromise = new MyPromise();
//         this.#thenQueue.push([controlledPromise, fulfilledFn, catchFn]);

//         if (this.#status === status.FULFILLED) {
//             this.#propagationResolved();
//         } else if (this.#status === status.REJECTED) {
//             this.#propagationRejected();
//         }

//         return controlledPromise;
//     }

//     catch(catchFn) {
//         return this.then(undefined, catchFn);
//     }

//     finally(sideEffectFn) {
//         if (this.#status !== status.PENDING) {
//             sideEffectFn();

//             return this.#status === status.FULFILLED
//                 ? MyPromise.resolve(this.#value)
//                 : MyPromise.reject(this.#reason);
//         }

//         const controlledPromise = new MyPromise();
//         this.#finallyQueue.push([controlledPromise, sideEffectFn]);

//         return controlledPromise;
//     }

//     static resolve(value) {
//         return new MyPromise((res, _) => res(value));
//     }
//     static reject(value) {
//         return new MyPromise((_, rej) => rej(value));
//     }
//     static all(promiseArr) {
//         return new MyPromise((res, rej) => {
//             const resArr = new Array(promiseArr.length);
//             let counter = 0; // counter = promiseArr.length;

//             promiseArr.forEach((promise, i) => {
//                 if (isThenable(promise)) {
//                     promise.then((data) => {
//                         resArr[i] = data;
//                         counter++;
//                         if ((counter === promiseArr.length)) {
//                             res(resArr);
//                         }
//                     });
//                 } else {
//                     resArr[i] = promise;
//                     counter++;
//                     if ((counter === promiseArr.length)) {
//                         res(resArr);
//                     }
//                 }
//             });
//         });
//     }
// }

// const promise1 = MyPromise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, "foo");
// });

// MyPromise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values);
// });
// expected output: Array [3, 42, "foo"]

// console.log(1);

// new MyPromise((res) => {
//     console.log(2);
//     res(3);
// }).then((data) => {
//     console.log(data);
//     console.log(4);
// });

// console.log(5);

// 1, 2, 3, 4, 5

// new Promise((resolve, reject) => {
//     resolve(345);
// })
//     .then(data => {
//         return new Promise((res, rej) => {
//             res('hello');
//         }).then(d => new Promise())
//     })
//     .then(console.log);

// fetch

// myFetch
function myFetch(url, options) {
    return new Promise((resolve, reject) => {
        const METHOD = options && options.method ? options.method : "GET";

        const xhttp = new XMLHttpRequest();
        xhttp.open(METHOD, url);

        if (options && options.headers) {
            Object.keys(options.headers).forEach((key) => {
                xhttp.setRequestHeader(key, options.headers[key]);
            });
        }

        xhttp.onreadystatechange = function () {
            if (
                this.readyState === 4 &&
                this.status >= 200 &&
                this.status < 300
            ) {
                const obj = {
                    json: function () {
                        return JSON.parse(xhttp.response);
                    },
                };
                resolve(obj);
            }
        };

        options && options.body ? xhttp.send(options.body) : xhttp.send();
    });
}

myFetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));

// myFetch("https://jsonplaceholder.typicode.com/posts/8")
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// class MyPromise {
//     thenQueue = [];
//     currentValue = undefined;

//     constructor(executor) {
//         executor(this.resolve.bind(this), this.reject);
//     }

//     resolve(resData) {
//         setTimeout(() => {
//             // console.log(this.thenQueue);
//             this.currentValue = resData;
//             while (this.thenQueue.length) {
//                 const cb = this.thenQueue.shift();
//                 this.currentValue = cb(this.currentValue);
//             }
//         }, 0);
//     }

//     reject = (data) => {};

//     then(thenFn) {
//         this.thenQueue.push(thenFn);

//         // console.log(this.thenQueue);

//         return this;
//     }
// }

// new MyPromise((resolve, reject) => {
//     resolve("hello"); // -----> tasks queue
// })
//     .then((str) => {
//         return str + " world";
//     })
//     .then((data) => {
//         console.log(data);
//         return 5;
//     })
//     .then(console.log);

//     // resolve <------- tasks queue
