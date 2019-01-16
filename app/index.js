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
