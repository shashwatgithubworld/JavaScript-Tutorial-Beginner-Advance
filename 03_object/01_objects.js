// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Shashwat",
    "full name": "Shashwat Singh",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "shashwat@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) => ways to access object
// output => shashwat@google.com

// console.log(JsUser["email"]) // another way to access object
// output => shashwat@google.com

// console.log(JsUser["full name"])
// output => Shashwat Singh

// console.log(JsUser[mySym])
// output => mykey1

JsUser.email = "shashwat@chatgpt.com" // that's how you can make changes in Obj

// Object.freeze(JsUser) // you can freeze the obj if you want anyone to make changes.

JsUser.email = "hitesh@microsoft.com" // after freeze this will not change 
// console.log(JsUser);
/* output => {
  name: 'Shashwat',
  'full name': 'Shashwat Singh',
  age: 18,
  location: 'Jaipur',
  email: 'shashwat@chatgpt.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'mykey1'
}
*/

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // if you want to refrence of same obj 
}

console.log(JsUser.greeting());
// output => Hello JS user

console.log(JsUser.greetingTwo());
// output => Hello JS user, shashwat