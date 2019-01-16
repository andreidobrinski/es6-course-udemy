// Lesson: let

let a = 'hello';

console.log(a);

{
  let a = 'goodbye';
  console.log('inside scope: ', a);
}

// Lesson: const

// can't reassign const
//
// const array = [1, 2, 3];
// array.push(4);
// console.log(array); // [1, 2, 3, 4]
//
// array = [3];
// // syntax error

// Lesson: template literals

// let b = 'world';
// let string = `hello ${b}`;
// console.log(string); // hello world

// Lesson: spread operator
// let a = [7, 8, 9]
// let b = [6, ...a, 10]
// console.log(b); // [6, 7, 8, 9, 10]

// Lesson: destructuring arrays
// let c = [100, 200]
// let [a, b] = c
// console.log(a, b); // 100 200

// Lesson: destructuring objects
// let wizard = { magical: true, power: 10}
// let { magical, power } = wizard
// console.log(magical, power); // true 10

// let magical = true
// let power = 2
// let ranger = { magical: false, power: 9 }
// ({ magical, power } = ranger)
// console.log(magical, power); // false 9

// Lesson: arrow functions
// arrow functions do not create their own 'this' in scope
//
// this.a = 25
// let print = function() {
//   this.a = 50
//   console.log('this.a', this.a);
// }
//
// print(); // 50
//
// let arrowPrint = () => {
//   console.log('this.a in arrowPrint', this.a);
// }
//
// arrowPrint(); // 25
