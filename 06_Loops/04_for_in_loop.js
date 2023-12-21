// For in 

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// for (const key in myObject) {
//     // console.log(key);
// }
/* Output => 
js
cpp  
rb   
swift
*/
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}
/* Output => 
js shortcut is for javascript
cpp shortcut is for C++
rb shortcut is for ruby
swift shortcut is for swift by apple
*/

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}
/* Output => 
js
rb  
py  
java
cpp 
*/

