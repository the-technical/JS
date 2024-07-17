const marvel_heroes = ["thor", "Ironman", "spiderman"] 
const dc_heroes = ["superman", "flash", "batman"]
// defining two arrays 

marvel_heroes.push(dc_heroes) // this push method uses to attach two arrays but marvel heroes ke andr jb dc heroes wali array aati toh woh puri array as a element aati 

console.log(marvel_heroes);// [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heroes[3][1]); //ab isme particularly phir phle woh 4th element pr jaega aur phir usme se second element lekr answer output dega ; is case me flash answer

const allHeroes = marvel_heroes.concat(dc_heroes) //ab concatenate me esa hota hai ki naya array bnna padta usi array me changes nhi hote naye array me jesa hum chahte hai wesa hi hota
console.log(allHeroes);   // ab isme thodi si dikkat aa skti he qki woh upr pehle push kr chuka hu phir alllheroes me sb shi se ajaengy
// output : [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
//agr upr wali push lines ko comment kre toh yeh aega 

// ab ek spread operator hota hai usme mtlb samjhne ke liye ek kaanch ka glass he usse neeche fek do toh woh kese pura bikhar jaata wese hi spreah array ke elements ko pura bikher deta

const all_new_heros = [...marvel_heroes, ...dc_heroes] // ab ese triple dots se spread ka use krte aur phir mne usko array me baandh diya toh concat jesa output
console.log(all_new_heros);  // output : [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]



const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //isse kya woh array ko flat kr deta mtlb ek array me sbko daal deta aur infinity se kya woh utni depth tk chle jaega
console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5] sb kuch ek array me



console.log(Array.isArray("AmanGarg")) // yha humne pucha ki kya yeh arrray hai ab yeh oth nhi hai returns boolean value as false
console.log(Array.from("AmanGarg")) // ab yeh from wala toh kya krega ki usko array bna dega
console.log(Array.from({name: "aman"})) // ab is case me yeh ek empty array dega usko nhi pta ki yeh key ko kese convert krta usko alg se btane pdta ki yeh 
// object wgerah se ache se in keys ko arrays me convert kr skte

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //isse alg alg values ko saath me laaya jaa skta hai arrayOf

