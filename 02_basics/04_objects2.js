// const tinderUser = new Object()  ab yeh singleton hai kyunki isme ese declare hua literal aur constructor me yehi difference hai..
const tinderUser = {} // yeh singleton nhi hai

//Kuch values daal dete oobject me 
tinderUser.id = "123abc" 
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser); // saari values chli jaengi  // { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = { // ab isme dekho nesting between objects kese bhi kr skte aur neeche bhi dekho humne call krte waqt esa hi use kiya hai ache se hojata 
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Aman",
            lastname: "Garg"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname); // bdhiya ese call kro koi hata bhi doge toh bhi ek object ki tarah sb answer dega jo bhi usme hai

/* There comes a concept of optional chaining :
WITHOUT Optional Chaining:
When you use regularUser.fullname.userfullname.firstname, you assume that regularUser, regularUser.fullname, and regularUser.fullname.userfullname all exist. If any of these properties are missing or undefined, your code will throw an error.

WITH Optional Chaining:
By using regularUser.fullname?.userfullname?.firstname, you add a safety check at each level of the chain. If regularUser.fullname or regularUser.fullname.userfullname is undefined, the entire expression will safely return undefined without throwing an error. */

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const obj4 = { obj1, obj2 } // ab yeh toh dekho object ke andr object dega // output : 
console.log(obj4); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj5 = Object.assign({}, obj1, obj2, obj3) // ab assign ka esa hai naam se yeh kisi ko assign ho ri though answer jesa chahiye wesa hi hai but theoretically ek target aur ek source hota aur jb obj1,obj2 likh rha toh saari obj2 ki values obj1 me jaati aur usme saare changes hote jese reference hai toh ab jese yha humne ek extra parenthesis lgaay hai uska mtlb hua ki hum chah rhe ki woh empty parenthesis ek target ki tarah act kre aur baaki saare sources....1
console.log(obj5); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// If you do not use an empty object {} as the target, the properties will be copied into the first source object, which might not be the desired behavior...

const obj6 = {...obj1, ...obj2} // remember spread operator from our array one.....!
console.log(obj6); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email //yeh jo upr hume aaya woh ek databse he array form me aaya toh ab usme pehle user[1] se isko access kr lia aur phir uska email chahiye wgerah wgerah
console.log(tinderUser); 

console.log(Object.keys(tinderUser));  // ab isme kya hota uski jitni bhi keys hai jese id, name and isLoggedIn woh ek array ke format me aajati hai usme bht saare changess kr skte
console.log(Object.values(tinderUser)); // same as keys values bhi aajati arrays me
console.log(Object.entries(tinderUser)); // array ke andr array mtlb : [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //checks if there is a property inside it or not gives boolean value


// -----------------------------------------------Constructing and Destructing--------------------------------------------------------


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
} // apan kya krte hai yeh apn ne yeh object bnaya 

course.courseInstructor

const {courseInstructor: instructor} = course //yha se pehle usko bola object course me se utha phir kisko utha couseinstructor course mes ab usko bola instructor naam ka variable bna aur usme daal

// agr apn just neeche waali line ko bina uske krna chahte he toh const {courseInstructor} = course ab uska scope hogya har jgh variable yehi hai isly....!
console.log(courseInstructor); // scope problem khi variable dikhega hi nhi toh kisko krega access course.courseInstructor hota toh samjh jata
console.log(instructor); // yha toh usko humne hi bol dia course ke andr wale courseinstructor ko ab hum instructor bulaenge

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }.  // yeh json hai yeh ek api hai,( api maane apna kaam kis aur se krwana )  ab iska kuch naam nhi hoa , dikhta yeh bhi ek type ke object jesa hi hai, pr yeh object nhi hai isly yha keys ko bhi string format me lete 

[
    {},
    {},
    {}
] // yeh dusra tarika hai json api ko rkhne ka arrays ke andr objects
//for resources randomuser me api, json fromat checker(basic),etc..