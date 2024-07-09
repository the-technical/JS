"use strict";// treat JS code of newer version
//When you write JavaScript code, sometimes it allows you to do things that can lead to errors or bugs. By adding "use strict" at the beginning of your code, you tell JavaScript to follow stricter rules, which helps catch errors early and makes your code safer.

// alert("anything inside it")  this is node js it will give error, but in browser if you type this thing it will give a pop-up of showing output

let name = "Aman"
let age = 18
let isLoggedIn = false

/* There are different types of datatypes accordingly but discussing some of them :
1. number = 2^52 something itne number use kr skte hai
2. bigint hai usme jyada use kr skte hai 
3. string = double quotes ya single quotes me likh kr use krte
4. boolean = true/false do hi hai haa yaa naa
5. null = standalone value isme mtlb agr koi value nhi daalni toh undefined nhi hai  bs value nhi hai
6. undefined = yeh khud me ek datatype hai isme var decalre hua pr define nhi 
7. symbol = unique values
8. object
aur bhi dekh skte EMAC SITE YAA PHIR MDN MOZILLA JS */

console.log(typeof undefined)//yeh khud me ek datatype hai iska toh undefined hi aata
console.log(typeof null)//ab dekho iska ouput object aaega 
// It was just a bug which was here from starting of javascript and not yet changed.
// explainng it in a simple way the label null was being confused by real value objects (like objects are considered as 0 and in the same way null is considered to be zero in many systems thus it was confused with objects)......!