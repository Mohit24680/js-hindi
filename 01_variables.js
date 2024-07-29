const accountId= 546378;
accountMail="mohit@google.com";
var accountPass="mohit";
var accountCity="HALDWANI";
let accountState;
console.log(accountId);
console.table([accountMail, accountPass, accountState, accountCity])
//we use const for things that will remain constant throughout the program. we cannot change account id in this example.
// prefer not to use var intead use let cause of issue in block scope and functional scope
// its not necessary to use semicolon in js.