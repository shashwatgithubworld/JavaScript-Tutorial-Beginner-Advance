// SWITCH 
// syntx =>

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// Example => 1 ->

// const month = "march"

// switch (month) {
//     case "jan":
//         console.log("January");
//         break;
//     case "feb":
//         console.log("feb");
//         break;
//     case "march":
//         console.log("march");
//         break;
//     case "april":
//         console.log("april");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }

// Output => march

// Example => 2 -> 

const month = 4

switch (month) {
    case 1:
        console.log("January");
        break;

        console.log("January");
        break;
    case 2:
        console.log("feb");
        break;

        console.log("January");
        break;
    case 3:
        console.log("march");
        break;

        console.log("January");
        break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}
// Output => april