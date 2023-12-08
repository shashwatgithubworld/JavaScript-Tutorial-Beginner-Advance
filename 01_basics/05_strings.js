const name = "shashwat"
const repoCount = 50

// console.log(name + repoCount + " Value"); => not recommended
//output => shashwat50 value

// In modern JS we use backticks(``) for string interpolation. basically we create a place holder 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//output => Hello my name is shashwat and my repo count is 50.

const gameName = new String('shashwat-singh')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   shashwat    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shashwat.com/shashwat%20singh"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

const gameName1 = new String('shashwat-raj-com')

console.log(gameName1.split('-'));
