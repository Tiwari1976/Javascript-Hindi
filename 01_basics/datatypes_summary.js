// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // false

const bigNumber = 3456543576654356754n;


// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["Shaktiman", "Naagraj", "Doga"];

let myObj = {
  name: "Naveen",
  age: 25,
};

const myFunction = function () {
  console.log("Hello World");
};

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myFunction);

// ******************************------------------------------**************************

// Stack (Primitive type)   |   Heap (Non primitive type)

let myYoutubename = "Naveentiwaridotcom"
let anotherName = myYoutubename
anotherName = "Stranger Things"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
  email: "naveen@example.com",
  upi: "naveen@okaxis" 
}

let userTwo = userOne
userTwo.email = "compounder@example.com"

console.log(userOne)
console.log(userTwo)
