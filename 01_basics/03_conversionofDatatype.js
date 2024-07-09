let score = "33"

console.log(typeof score)
console.log(typeof(score))// This both the values will give me the smae output as string

let valueInNumber = Number(score) // now you can see that anything will be converted to number
//Also see thst the output of typof 33 = number(small letters) ; but for conversion use first letter capital "Number"

console.log(typeof valueInNumber)
console.log(valueInNumber)

/*  1. 33 => 33  number 
    2. "33" => 33 number
    3. "33abc" => NaN - not a number but if see the datatyoe gives the number
    4. null => number with 0 as value
    5. undefined => undefined 
    6. true/false => number with 1/0 as value
    7. taking string like "aman" will give NaN as value and while converting to number
*/

let Value = "rohit"
let BooleanValueOfNum = Boolean(Value)

// This type of value gives 1 as answer as there is value and something is considered to be true and if nothing is there then it is considered is false.

//Similarly if there is a number and we have to convert it into a string, then use 
let S = 33
let StringS = String(S)

console.log(StringS); // It willl give 33 normally but basically it is in string format as "33"
console.log(typeof StringS); // It will give "string"