// Function kya hai basically writing loc in package, taaki kaam asan hojae aur hume whi code baar baar n likhna pde
function sayName() {
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("G");
    console.log("A");
    console.log("R");
    console.log("G");
}

sayName() //When you write he(), you’re actually calling the function. It means you’re telling JavaScript to run the code inside the function. So, it does the work you defined, like printing "Hello from the function!" to the console.
//sayName likhoge toh error nhi aaegi pr woh kuch execute nhi krega kyunki yha sirf humne sayName ko ungli dikhayi ki yeh humara functionhai pr humuse call nhi kr rhe!!!!

function addTwoNumbers(number1,number2){
    console.log(number1 + number2);
}

addTwoNumbers(3,4) // yha toh normally apn ne result print krwa diya 
const result = addTwoNumbers(3,4)//apn result ko kisi variable me store krwana chahe toh
// lekin there's a problem with this, we do not have anything stored in result, it's just the function is not returning else and only keeping log that you have add but see the next statements

function addTwoNumbers1(number1, number2){

    let result = number1 + number2
    return result // this will return something and it is then stored in the output variable result
    return "Aman" // we know that function once returns something then anything(loc) below that will not be applied // Yeh ek unreachable code hai.....!!!
    // return number1 + number2 yeh shortcut ho skta ek variable bnana phir usko define krke usko bulana phew usse better simple directly jo output chahiye woh return krwado....
}

const result1 = addTwoNumbers1(3, 5) // it is stored in the variable result1.

console.log("Result : ", result); 

function loggedIn(username){
    return `$(username) just logged in`
}

loggedIn("AMAN") //you're not doing anything with the returned value. Even though the function returns a string, you need to either log it or store it in a variable to actually see the result.
console.log(loggedIn("AMAN")); // Output: AMAN just logged in

console.log(loggedIn()) //agr koi value pass nhi kri hai toh woh phir undefined aaata hai mtlb iska output aega undefined just logged in

// if condition me ek aur symbol hota hai exclamatory, yeh kya krta hai true ko convert kr deta hai false me and vice versa...!
function loginUserMessage(username){ // yha pr jb if lgaya isme kuch condition jese empty string "" ko maan liya jaata hai ki yeh false hai, same goes with undefined
    if(username===undefined){ // yeh isse ese bhi likha jaaa skta !username, kyu kyunki username humara undefined hai aur wkt undefined is considered as false therefore not username will be true in our scenario....
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// ab agr loginUserMessage wale function me esa kre ki pehle se hi argument ki jagah Guddu daal de toh woh kbhi if me jaega hi nhi kyunki calling ke time pr agr mene usko value nhi di toh woh guddu toh lega hi for sure aur dedi toh wha guddu ko ovewrite krke calling wale parameter ko le lega....!

function calculateCartPrice(num1){
    return num1
}

console.log(calculateCartPrice(2));//yeh toh directly function call kiya aur usne value dedi
// pr isme ek problem he abhi toh mene ek hi value di toh aasani se aagya pr agr me ek se jyada deta na toh yeh sirf first value dekr sb bhul jaata

function calculateCartPrice1(...num1){ // ab yha pr yeh dot operator lgaya hai, yaad hai woh spread operator array wala yeh wesa hi hai bs isko est operator kehte hai. dono ka mtlb same hi hota bs usecase me difference aa jata
    return num1
}

console.log(calculateCartPrice1(2,3,4,5,6,7)); // ab yha me kitni bhi values paas kru yeh array format me iska answer dega //[ 2, 3, 4, 5, 6, 7 ]

function calculateCartPrice3(val1, val2, ...num1){ //interview type questions me puch liya jaata hai
    return num1 //ek aur baat dhyaan me rkhna yeh jo rest parameter hai an yeh humesha last me hi aega as the name syggests rest of the numbers toh last me aakr sbhi remaining numbers ko apne isme store kr lega
}

console.log(calculateCartPrice3(2,3,4,5,6,7,8,9,0)); // ab yha return toh num1 hora hai upr 3 arguments hai toh do toh normal hai baaki woh val1 aur val2 me chle jaenge bche hue sb num1 me

const user = {
    username: "Aman",
    price: 399 
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); // ab yha price ki jagah prices krde toh woh phir error nhi dega undefined dega kuch he hi nhi isly naam dhyaan se...!
}

handleObject(user) //
handleObject({ // yha directly handleobject function me object daal diya hai toh alg se object bnane ki bhi as such jrurat nhi hai
    username: "Masss",
    price: 99
})

const myNewArray = [200, 400, 100, 600] 

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));