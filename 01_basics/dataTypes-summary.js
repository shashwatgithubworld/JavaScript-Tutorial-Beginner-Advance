// *** Primitive ****

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const name = "Shashwat"
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

 const bigNumber = 3456543576654356754n


//  *** Reference (Non primitive)  ***

// Array, Objects, Functions

// Array
const heros = ["shaktiman", "naagraj", "doga"];

// Objects
let myObj = {
    name: "hitesh",
    age: 22,
}

// Functions
const myFunction = function(){
    console.log("Hello world");
}

//  ** Return type of variables in JavaScript **

//  1) Primitive Datatypes
       Number     => number
       String     => string
       Boolean    => boolean
       null       => object
       undefined  => undefined
       Symbol     => symbol
       BigInt     => bigint

//  2) Non-primitive Datatypes
       Arrays    =>  object
       Function  =>  function
       Object    =>  object