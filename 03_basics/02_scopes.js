//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

// *******  Nested Scopes *****\\

function one(){
    const username = "Shashwat"

    function two(){
        const website = "Google"
        console.log(username);
    }
    // console.log(website);

    // two()

}

// one()

if (true) {
    const username = "Shashwat"
    if (username === "Shashwat") {
        const website = " Singh"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ Hoisting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}
// output => 6


addTwo(5)
const addTwo = function(num){
    return num + 2
}
// output => error