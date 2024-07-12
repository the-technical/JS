// Standard date - January 1,1970 midnight 
// A JavaScript date is fundamentally specified as the time in milliseconds that has elapsed since the std.

// Temporal an api is goin to be made which will made this concept easier in js

let myDate = new Date()
console.log(myDate); //2024-07-12T16:16:39.846Z

console.log(myDate.toString()); //Fri Jul 12 2024 16:16:39 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Fri Jul 12 2024
console.log(myDate.toLocaleString()); // 7/12/2024, 4:16:39 PM
console.log(myDate.toISOString()); // 2024-07-12T16:20:25.420Z
console.log(myDate.toJSON()); // 2024-07-12T16:20:25.420Z

console.log(typeof myDate); //Date is also considered as object.....!

// months are started from 0 as in 0=Jan when writing in array format but writing in yyyy-mm-dd format months start from 01 okay?

// String interpolation (let name = "Alice";  let greeting = `Hello, ${name}!`;  console.log(greeting); // Output: Hello, Alice!) can be done in this like // `${newDate.getDay()} and the time `

newDate.toLocaleString('default', '' , { // there are different methods or arguments which can be put inside of a tolocalestring
    weekday: "long", // aapko kya chahiye is pure locale string ke format me se kese chahiye yeh aap pura define kr skte ho 
    // timezone : ""  esa aur bhi kr skte ho options check krne ke liye vs code me jaakr kr skte wha uska intelligence jo he woh aur suggestions or options de deta he kya kya include kr skte hai toh aur asni bdh jaati hai........!
})

//// isi ke saath yeh wale basics khatam hue ab aage ki kahani 02_basics me btaunga