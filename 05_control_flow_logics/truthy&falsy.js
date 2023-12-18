const userEmail = "shashwat@google.com"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
// output => Got user email

/* falsy values

  false, 0, -0, BigInt 0n, "", null, undefined, NaN
*/

/* truthy values

  "0", 'false', " ", [], {}, function(){}
  */


  // const userEmail1 = [] // to check empty array using condition

  // if (userEmail1.length === 0) {
//     console.log("Array is empty");
// }

// output => Array is empty

// const emptyObj = {}  // to check empty obj using condition

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }
// output => Object is empty

// ****  Nullish Coalescing Operator (??): null undefined **** \\

/* The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. */


let val1;
// val1 = 5 ?? 10
// console.log(val1)
// output => 5

// val1 = null ?? 10
// console.log(val1)
// output => 10

// val1 = undefined ?? 15
// console.log(val1)
// output => 15

val1 = null ?? 10 ?? 20
// console.log(val1)
// output => 10

//**** Terniary Operator **** \\

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
// output => more than 80

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
// output => less than 80