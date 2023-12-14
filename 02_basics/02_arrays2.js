const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros) => here it does not merge both arrays,

// console.log(marvel_heros);
// output => ["Thor", "Ironman", "Spiderman" ["Superman", "Flash", "Batman"]]

// console.log(marvel_heros[3][1]);
// output => Flash

const allHeros = marvel_heros.concat(dc_heros); /* => it combines two or more arrays and 
 return a new array without modification.*/

// console.log(allHeros);
// output => ["Thor", "Ironman", "Spiderman", "Superman", "Flash", "Batman"]


const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //combines all the array and  Returns a new array with all sub array elements //
console.log(real_another_array);
// output => [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]



console.log(Array.isArray("Shashwat")) // check if its an array or not
// output => false

console.log(Array.from("Shivani")) // Creates an array from an iterable object.
// output => ['S', 'h', 'i', 'v', 'a', 'n', 'i']


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Returns a new array from a set of elements.
// output => [ 100, 200, 300 ]

