"use strict";
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
class Person {
    #name;
    #age;
    get name() {
        console.log('do something for getter');
        return this.#name;
    }
    set name(newName) {
        this.#name = newName;
        console.log('rerender page');
    }

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    showage() {
        console.log(this.name + ' is ' + this.age);
        console.log(this.name, 'is', this.age);
        console.log(`${this.name} is ${this.age}`);
    }
    static print(num) {
        console.log(num);
    }
}
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.showage = function() {
//     console.log(`${this.name} is ${this.age}`);
// }
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

// polymorphism
