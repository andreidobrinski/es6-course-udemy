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
