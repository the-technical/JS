/*  console.log(2 > 1)
    console.log(2 >= 1)
    console.log(2 < 1)
    console.log(2 == 1)
    console.log(2 != 1)
    console.log(2 <= 1)  */

// comapring different datatypes
console.log("2" > 1); //true, it directly converts that string into number and then checks for it..

//When comparing null it will give true only when greater than or equal to : 
// The reason is that an equality check == and comparisons > < >= <=  work differently. Comparisons convert null to a number, treating as 0 and then when comapred it give true while comapring directly like null==0 doesnt converts and directly compares so it gives false

// Comparing null and undefined is not preferred. AVOID them !!!!!
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

// === doesnt converts datatypes of both the operands and then check whereas when it is not null and then == first converts datatype and then check

// ----------------- DATAtype Summary ------------------------------
 /* 
  ### Primitive DataTypes
        1. String
        2. Number
        3. Boolean
        4. Null
        5. Undefined
        6. Symbol
        7. BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);



  ### Non-Primitive DataTypes (Reference)
        1. Arrays
        2. Objects
        3. Functions
*/

// JavaScript is dynamically typed language, which means that datattypes of variables are determined by the value, they hold at runtime and can change throughout the program as we assign different values to them...!
//JavaScript is called a dynamically typed language because you don't need to tell JavaScript what type of data (like a number, string, etc.) you're using when you write your code. The type is decided when your code runs, not when you write it.

const heroes = ["IronMan","Spidey","Yoda"]

let myObj = {
      name : "Hitesh",
      age : 12
}

const myFunc = function(){
      console.log("Hello World");
}


// ---------------------------------- Memory ----------------------------------------

//Stack - primitive data types ; 

let myName = "Aman Garg"
let urName = myName
urName = "Garg Aman"

console.log(myName); // Aman Garg
console.log(urName); // Garg Aman
// You can clearly see that though i equated myname with urname but the name was different during the output. Because it works on stack and in stack value is duplicated so first the value is duplicated in urname and then when it is changed so only urname is changed but myname is not changed....!!

// Heap - Non primitve data types ;

let userOne = {
      email : "aman@g.com" , 
      upi : "aman@ok"
}

let userTwo = userOne
userTwo.email = "garg@a.com"

console.log(userOne); // { email: 'garg@a.com', upi: 'aman@ok' }
console.log(userTwo); // { email: 'garg@a.com', upi: 'aman@ok' }

// See that this is a non primitive data type and it works on heap data structure but in heap there is no duplication, there only is reference.. i.e. when userone was created, it pointed to the values of it and when usertwo was created and equated with userone, it also pointed to userone's values. Thus if changing the values of usertwo also changes the values of userone......!
// => Therefore at the end stack makes copies while heap uses reference......!
