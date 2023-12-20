// while loop
/* syntx
while (condition) {
    
}
*/

let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }
/* output =>
Value of index is 0
Value of index is 2
Value of index is 4
Value of index is 6
Value of index is 8
Value of index is 10
*/

let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    // console.log(`My heros is ${myArray[arr]}`);
    arr = arr + 1
}
/* output => 
My heros is flash
My heros is batman  
My heros is superman
*/

let score = 1

//*** Do while loop ***\\

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 5);
/* output => 
Score is 1
Score is 2
Score is 3
Score is 4
Score is 5
*/
let score1 = 11

do {
    console.log(`Score1 is ${score1}`);
    score++
} while (score1 <= 5);
/*
output => Score1 is 11
*/
