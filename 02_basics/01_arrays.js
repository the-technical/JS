// array declaration

const myArr = [0,1,2,3,4] // different elements okay abhi same numbers hi le rhe
// single element ke andr alg type ke ya same type ke elements le skte, It is an object.. multiple collection in single

// JS ke array resizable hote, no associative array like string se array ko access nhi
// JS me agr array me copy operations krte hai toh shallow copy....
// Shallow copy = change in reference if copy changes original change and Deep copy = no change in reference like copy me change original ko koi farak nhi pdta (stack aur heap yaad hai)....!
 console.log(myArr[0]); // indexing starts from zero like output would be 0

 // Array methods

myArr.push(6) // Inserts element 6 in the array
myArr.push(7) // Inserts element 7 in the array
myArr.pop() // Removes last element from the array this pop and push is same in the stack

myArr.unshift(9) // This helps inserting elements at the beginning of the array. ab iski waja se sbko shift krna pdta not optimised method to use this
myArr.shift() // Unshift ka ulta he  aage se element hata deta

myArr.includes(9) // this checks that if the number or the element is in the array or not, gives boolean value true/false
myArr.indexOf(9) // this gives the index of the element asked,, give the output as -1 as there is no -1 and there is no 9 😋

const newArr = myArr.join() // This joins the whole array elements and then converts it into strings

console.log(typeof myArr); //type = object
console.log(typeof newArr); //type = string , comma separated
console.log(newArr,myArr)

// slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3) // it gives a section of array starting from index 1 and going to one less than index 3 which is index 2
console.log(myn1);

console.log("B ", myArr); // this gives normal array without slicing
const myn2 = myArr.splice(1, 3) // this function also gives the section of arrays including the slicing section with the last index that is starting from 1 to 3 index unlike slicing which give s one less than the 3 index

// splice krne ke baad original me bhi chnage hota hai isly jb c print kiya toh bche hue elements aagye..
console.log("C ", myArr); // Also you should be knowing that this output cuts off the spliced section and gives the remaining section.
console.log(myn2); // line 40 - output : [1,2,3] ; line 39 - output : C [0,4,6] // dekha original array manipulate hogya hai
