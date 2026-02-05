/* =========================================================
   ANSWER KEY — Weekly Review Set (1–11) + Mini Project
   (All prompts/confirm parts are browser-only)
   ========================================================= */

// 1) Variables & Data Types
let city = "Joliet";
const birthYear = 1995;

let age = 24;
age = 25; // changed later

console.log(typeof city);      // "string"
console.log(typeof birthYear); // "number"
console.log(typeof age);       // "number"


// 2) Strings & Booleans
let greeting = "Hello";
let myName = "Alex";

let combined = greeting + " " + myName;
console.log(combined); // "Hello Alex"

let isLoggedIn = false;
console.log(isLoggedIn, typeof isLoggedIn); // false "boolean"

console.log(`Hello, my name is ${myName} and I am ${age} years old.`);


// 3) Numbers, BigInt, and Conversion
let a = 12;
let b = 5;

console.log(a + b); // sum -> 17
console.log(a - b); // difference -> 7
console.log(a * b); // product -> 60

let big1 = 12n;
let big2 = 25n;
console.log(big1 * big2); // 300n

let num42 = Number("42");
console.log(num42, typeof num42); // 42 "number"

let badNum = Number("abc");
console.log(badNum, typeof badNum); // NaN "number"


// 4) Falsy & Truthy
console.log(Boolean(0));         // false
console.log(Boolean("Hello"));   // true
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false

let username = ""; // try: "" , "Martin", null, undefined
let displayName = username ? username : "Guest";
console.log(displayName);


// 5) Objects
const person = {
  name: "Alex",
  age: 25,
  email: "alex@email.com"
};

person.isStudent = true;

console.log(person.name);        // dot notation
console.log(person["email"]);    // bracket notation

person.address = {
  city: "Joliet",
  zip: "60431"
};

console.log(person.address.city); // "Joliet"


// 6) Arrays
let colors = ["red", "blue", "green", "yellow"];

console.log(colors[0]); // first -> "red"
console.log(colors[colors.length - 1]); // last -> "yellow"

colors[1] = "purple";
console.log(colors); // ["red","purple","green","yellow"]

let nested = [["apple", "banana"], ["cat", "dog"]];
console.log(nested[1][0]); // "cat"

console.log(colors instanceof Array); // true


// 7) Operators
console.log(15 + 7);  // 22
console.log(20 % 6);  // 2
console.log(3 ** 4);  // 81

let counter = 10;
counter++;
console.log(counter); // 11
counter--;
console.log(counter); // 10

let cartTotal = 100;
cartTotal += 10;
console.log(cartTotal); // 110


// 8) Logical Operators
console.log(10 > 5 && 3 === 3);          // true
console.log(false || "Hello" === "Hello"); // true
console.log(!0);                         // true

console.log(true && false || true); // true  (because (true && false) -> false, then false || true -> true)
console.log(!"" || "Hello");        // true  (!"" is true, OR short-circuits)


// 9) String Operators
let fruits1 = ["apple", "banana"];
let fruits2 = ["mango", "grape"];
let allFruits = fruits1.concat(fruits2);
console.log(allFruits); // ["apple","banana","mango","grape"]

let status = "Order:";
status += " Shipped";
console.log(status); // "Order: Shipped"

console.log(`The answer is ${a + b}`); // uses numbers from section 3

let multiLine = `Line 1
Line 2
Line 3`;
console.log(multiLine);


// 10) Comparison & Ternary
console.log(10 === "10"); // false
console.log(false == 0);  // true (loose equality coerces)
console.log("a" > "B");   // true (lexicographic; lowercase generally > uppercase in Unicode)

console.log(age >= 18 ? "You can vote" : "You cannot vote");

let cart = 140;
let points = 80;

let finalPrice = (cart >= 150 || points > 75) ? cart * 0.9 : cart;
console.log(finalPrice);


// 11) User Input (browser only)
const userName = prompt("What is your name?");
alert(`Hello, ${userName}!`);

confirm("Do you want to continue?")
  ? alert("Welcome back!")
  : alert("Okay, goodbye!");


// 🎯 Mini Project – Profile Setup (browser only)
const profileName = prompt("Enter your name:");
const profileAge = Number(prompt("Enter your age:"));
const favoriteColor = prompt("Enter your favorite color:");

const profile = {
  name: profileName,
  age: profileAge,
  favoriteColor: favoriteColor,
  hobbies: ["coding", "gaming", "working out"] // you can change this list
};

console.log(
  `Hi, my name is ${profile.name}. I am ${profile.age} years old and my favorite color is ${profile.favoriteColor}.
My hobbies are: ${profile.hobbies.join(", ")}`
);

/*
.join() notes:
- joins array items into a single string
- you choose the separator: ", " or " | " etc.
Example: ["a","b","c"].join(", ") -> "a, b, c"
*/
