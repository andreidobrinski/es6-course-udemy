let a = 'hello';

console.log(a);

{
  let a = 'goodbye';
  console.log('inside scope: ', a);
}

// can't reassign const
//
// const array = [1, 2, 3];
// array.push(4);
// console.log(array); // [1, 2, 3, 4]
//
// array = [3];
// // syntax error
