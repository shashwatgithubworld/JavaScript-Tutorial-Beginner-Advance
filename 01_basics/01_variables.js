const accountId = 12345;
let accountEmail = "Shashwat@gmail.com";
var accountPassword = "98765";
accountCity = "Jaipur";


//  accountId = 345678;  // Not allowed

accountEmail = "Rajput@gmail.com";
accountPassword = "01010101";
accountCity = "Delhi";
let accountState ;


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/