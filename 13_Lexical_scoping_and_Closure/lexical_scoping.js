
// function init() {
//         let name = "Mozilla"; 
//         function displayName() {
//             console.log(name); 
//         }
//         displayName();
//     }
//     init();

    function outer(){
        let username = "hitesh"
        console.log("OUTER", secret);// do not have access to child function
        function inner(){
            let secret = "my123"
            console.log("inner", username);// child have access to parent function
        }
        function innerTwo(){
            console.log("innerTwo", username);// child have access to parent func
            console.log(secret);// do not have access to sibling function
        }
        inner()
        innerTwo()

    }
    outer()
    console.log("TOO OUTER", username);
