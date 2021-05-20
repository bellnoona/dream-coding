// 1. Use strict
// added in Es 5
// use this for Valina Javascript.
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6)
let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope

{
    age = 4;
    var age;
}
console.log(age);

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if ariable needs to change.

const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable date types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS 
// favor immutable data type always for a few reasons :
//  - seurity
//  - thread safety
//  - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// oject, box container
// function, first-class function

// number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// 5. Dynamic typing dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
