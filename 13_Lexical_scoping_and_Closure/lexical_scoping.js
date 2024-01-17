
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
        console.log("OUTER", secret);// do not have access to child func
        function inner(){
            let secret = "my123"
            console.log("inner", username);// child have access to parent func
        }
        function innerTwo(){
            console.log("innerTwo", username);// child have access to parent func
            console.log(secret);// do not have access to sibling func
        }
        inner()
        innerTwo()

    }
    outer()
    console.log("TOO OUTER", username);