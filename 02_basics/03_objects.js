// singleton = yeh apni tarah ka ek hi object hai
// literal se bna hua object singleton kbhi nhi constructor se bna hua haa singleton bn skta

// object literal

const mySym = Symbol("key1")

const JsUser = { //object framed ; object created
    name : "Aman", // yaad hai na every element in object is separated by comma
    "full name" : "Aman Garg", // keys are considered as string or also if you define it as string then also it is ok
    [mySym] : "mykey1", // yha iska jesa syntax he na wesa hi rhega agr mySym ko brackets me ni liya toh woh ek string ki tarah hi samjhega isko aur phir jb usko datatype lekr jaoge toh string dega pr abhi humne bracket me liye hai toh uska abhi symbol aaega....1
    // also agr aap jb pure object ko output me lekr aaoge tohd ekhna ki mysym ke aage woh symbol ka alg se bta dega ki yeh symbol hai otherwise uska syntax haat mtlb uske brackets hate toh woh string samjh kr krega error kuch nhi dega pr phir bhi
    age : 18,
    location : "Jaipur",
    email : "aman@g.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Wednesday"] // array can also be given.  
}

console.log(JsUser.email) // yeh preferred nhi hai kyunki  ab maanlo woh jo full name wala element ha usko me dot me nhi likh skta beech me space he aur whi dot ke saath inverted me bilkul bhi nhi esa kuch nhi hota
console.log(JsUser["email"]) // hn pr isme kr skta hu yha dot ka nhi square bracket ka use hua hai....!
console.log(JsUser["full name"]) // DEKHA
console.log(JsUser[mySym]) //"mykey1" same syntax rehna chahiye output me toh koi dikkat nhi hogi agr dot ka use krke kroge toh bhi pr woh string ke form me lekr dega, kyunki abhi bhi output toh whi rhega pr symbol datatype me chla jaega

JsUser.email = "aman@a.com" // yeh ese directly change kr skte hai thik hai
Object.freeze(JsUser) // isse kya hua ab aage koi bhi value doge toh woh nhi lega iske upr ke changes krke woh object freeze krdega

JsUser.email = "aman@r.com" //yha mne changes kre hai pr upr iss object pr freeze hai toh woh kisi ko bhi change nhi krega 
console.log(JsUser); // yha output dekha humne toh answer me abhi bhi woh aman@a.com hi de rha hai

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); 
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());