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

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());