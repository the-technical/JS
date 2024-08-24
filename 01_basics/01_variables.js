const accountId = 12345
let accountEmail = "AmanGarg@google.com" //let helps overcoming the limitations of the var
var accountPassword = "110823" //kindly dont use var as issue of the block scope and functional scope
/* -> var is like one big, sometimes messy, pencil box that you carry around all day. It’s easy to get confused and pick the wrong pencil, but you’re allowed to use it anytime.
   -> let is like having separate pencil boxes for each class, so you only use what you need when you need it, and everything stays organized and clear. */

acccountCity = "Jaipur" //though js is safe to use any variable without using any let and var but prefer not to use this way
let accountState; //ab JS me semicolon lgao na lagao aapki marzi
//Agr aap JS me variable declare kre aur usse define na kre toh phir uska jb output nikale toh udhr "undefined" aata hai

// JS doesn't know about scope and things like block scope and functional scope earlier

// accountID = 12245 //This will not get changed as it has been declared const and now changing const value would not be done, it is just fixed.
accountEmail = "GargAman@k.com"
accountPassword = "1234567"
acccountCity = "Bengaluru"

/*
console.log(accountId)
console.log(accountEmail)
console.log(accountPassword)
console.log(acccountCity) 
THE THINGS WRITTEN IS A GOOD WAY TO PRINT OUR OUTPUT BUT TIME CONSUMING THUS DOING WITH NEW TECHNIQUES
*/

console.table([accountId,accountEmail,accountPassword,acccountCity])
// This way of writing in the tabular format is a very good way this helps in clear understanding.....