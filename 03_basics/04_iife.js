// IIFE => Immediately Invoked Function Expressions (IIFE)
/* An IIFE is a JavaScript function that runs as soon as it is defined. */

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')