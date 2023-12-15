// Array

const myArr1 = [0, 1, 2, 3, 4, 5]
// console.log(myArr[1]);
// output => 1


const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4) // another way to declare array

// Array methods

const myArr = [0, 1, 2, 3, 4, 5]

// myArr.push(6) => Add element from the end
// output => [1, 2, 3, 4, 5, 6]

// myArr.pop() => remove element from the end 
// output => [1, 2, 3, 4, 5]

// myArr.unshift(9) => Add element from the start
// output => [9, 1, 2, 3, 4, 5]

// myArr.shift() => remove element from start
// output => [1, 2, 3, 4, 5]

// console.log(myArr.includes(9)); => to check that element is included in the given array (returns - true or false)

// console.log(myArr.indexOf(3)); => to check elemnt is available on which index.

// const newArr = myArr.join() => it binds the same array and convert to string

// console.log(myArr);
// console.log(typeof newArr)
// console.log( newArr);


// slice, splice

console.log("A ", myArr);
// Output => A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3)  /*The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)*/
// console.log(myn1);
// output => [ 1, 2 ]


console.log("B ", myArr);
// output => B  [ 0, 1, 2, 3, 4, 5 ]


const myn2 = myArr.splice(1, 3) /*The splice() method of Array instances changes the contents of an array by removing  existing elements. */
// console.log(myn2);
// output => [ 1, 2, 3 ]


console.log("C ", myArr);
// output => C  [ 0, 4, 5 ]
