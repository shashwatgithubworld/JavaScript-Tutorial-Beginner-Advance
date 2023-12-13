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

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr)
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);