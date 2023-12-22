// Maps
/* The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value. */

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

// console.log(map);
/* Output => 
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
*/

// for of loop on Map 
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

/* Output => 
IN :- India
USA :- United States of America
Fr :- France
*/

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers.map( (num) => num + 10)
// console.log(newNums);
/* Output => 
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20 
]
*/

// const newNums = myNumbers.map( (num) => { return num + 10 })
// console.log(newNums);
/* Output => 
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20 
]
*/

// Chaining using Map 

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers
//                 .map((num) => num * 10 )
//                 .map( (num) => num + 1)

// console.log(newNums);
/* Output => 
[
  11, 21, 31, 41,  51,
  61, 71, 81, 91, 101 
]
*/

const newNums = myNumbers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);
/* Output => 
[
  41, 51,  61, 71,
  81, 91, 101     
]
*/