// for of
/* syntx => 

for (const iterator of object) {
    
}
*/

// Example=>

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}
/* output => 
1
2
3
4
5
*/


const greetings = "Hello shashwat!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}
/* Output =>
Each char is H
Each char is e
Each char is l
Each char is l
Each char is o
Each char is  
Each char is s
Each char is h
Each char is a
Each char is s
Each char is h
Each char is w
Each char is a
Each char is t
Each char is !
*/

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

// for of loop on an Object

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
}



/* Output => 
TypeError: myObject is not iterable
*/