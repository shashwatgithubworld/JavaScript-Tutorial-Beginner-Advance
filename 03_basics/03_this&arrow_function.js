const user = {
    username: "shashwat",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function vodka(){
//     let username = "shashwat"
//     console.log(this.username);
// }

// vodka()


// const wisky = function () {
//     let username = "shashwat"
//     console.log(this.username);
// }

/************** arrow functions********** */

const daru =  () => {     // syntx for arrow function
    let username = "shashwat"
    console.log(this);
}
// daru()

// example =>
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 // another way of declare arrow function
// console.log(addTwo(3, 4))
// output => 7


// const addTwo = (num1, num2) => ( num1 + num2 ) //another way of declare arrow function
// console.log(addTwo())
// output => 7


const addTwo = (num1, num2) => ({username: "shashwat"}) // to return object

console.log(addTwo())
// output => { username: 'shashwat' }



