/* =========================================================
   Week 1 JavaScript Cheat Sheet
   (Save as: week1-cheatsheet.js)
   ---------------------------------------------------------
   How to use:
   1) Include this file in a page with a <script src="week1-cheatsheet.js"></script>
   2) Open DevTools (F12) → Console.
   3) Uncomment example lines to see results.
   ========================================================= */

/* =========================
   COMMENTS
   ========================= */
// Single line comment
// dkdjfosfjsodf

/*
Multi-line
comment
efe
dsfsddf
dsfsdf
*/

/* =========================
   VARIABLES
   ========================= */
/*
ONLY NEED TO DECLARE ONCE
let   → block-scoped, re-assignable
const → block-scoped, NOT re-assignable (the reference)
var   → function-scoped (legacy; avoid in modern code)
*/


let username = "Alice";//global scope


username = "Maldonado";


const MAX_USERS = 100;//global scope

// var legacy = true; // avoid

/* =========================
   PRIMITIVE DATA TYPES
   ========================= */
/*
string, number, boolean, undefined, null, bigint, symbol
= assignment operator
*/
let aString = "hello";// represents a sequence of lcharacters forming some piece of text
let randomString = "Today is Jan 13th, 2026.";
// "hello", 'hello', `hello`
// links, names, userInput
let aNumber = 42.171238;            // integer and floating point are both 'number'

let aBool = false;
let bBool = true;
//Logical data type   ---> two values (true/false);

let aUndef;                  // undefined  --> bug
// console.log(aUndef);

let aNull = null;            // special "empty" value


let aBig = 9007199254740993n;// BigInt (note the 'n')
//* bigInt can only be used with other bigInts NOT numbers
// console.log(Number.MAX_SAFE_INTEGER);

let aSym = Symbol("id");     // unique & immutable identifier
let bSym = Symbol("id");
// console.log(aSym === bSym);

// typeof checks:
console.log(typeof aString, typeof aNumber, typeof aBool, typeof aUndef);
console.log(typeof aNull); // "object" (historical quirk)
console.log(typeof aBig, typeof aSym);

/* =========================
   TYPE CONVERSION
   ========================= */
// Explicit:
let n1 = Number();       // 
let n2 = Number("abc");      // NaN --> bug *undefined
console.log(n2);
let s1 = String(123);        // "123"
let b1 = Boolean(0);         // false
let b2 = Boolean("text");    // true

// Implicit:
// console.log(11 - "2");    // 9  (string → number)
// console.log("Hello " + 5); // "Hello 5" (number → string)

/* =========================
   TRUTHY / FALSY
   ========================= */
/*
Falsy values only:
- false, 0, 0n, "", null, undefined, NaN
Everything else is truthy.
*/
// console.log(Boolean("hi")); // true
// console.log(Boolean(""));   // false
// console.log(Boolean(0));    // false

/* 
   Non-Primitive Data type (Complex data types)
=========================
   OBJECTS (key → value) --> record
   ========================= */
let emptyObj = {};
let user = {
   id: 1,
  name: "Alice",
  ageNow: 33,
  email: "alice@example.com",
  "age-2025": 34,           // keys may be quoted
  social: { ig: "alice_ig", facebook: null } // nested object
};
// Access:
console.log(user);
console.log(user.name);           // dot notation
console.log(user["name"]);
console.log(user["age-2025"]);    // bracket notation (for special keys)
console.log(user.social.ig);      // nested

// Add / remove / edit:
user.role = "student";
delete user.email;
user.name = "Martin";

console.log(user);



/* =========================
   ARRAYS (ordered lists)  --> fall under objects
   indices
   element
   ========================= */
// console.log(typeof []);
//let myArray = [];
let arr = ["Alice", 33, true, undefined, null, [1,2,3], "Zed"];// 7 elements / 6 indices 
// Indexing starts at 0:
console.log(arr[0]);      // "Alice"
console.log(arr[1]);
console.log(arr[5][0]);   // 1
console.log(arr[0][0])
console.log(arr.length);  // number of elements
console.log(arr instanceof Array); // true

/* =========================
   OPERATORS
   ========================= */
// Assignment:
let x = 10;

// Arithmetic: + - * / ** %
// console.log(5 + 2, 5 - 2, 5 * 2, 5 / 2, 2 ** 3, 7 % 3);

// console.log(12 + 12);
// console.log(13 - 1);

// console.log(11 % 5);

// console.log(11 / 0);


// Unary + / - (coerce to number, or negate):
// console.log(+"123"); // 123
// console.log(+"abc"); // NaN
// console.log(-"-5");   // -5

// Unary Increment / Unary Decrement: increase or decrease the value by 1
let c = 10;
// console.log(++c); // 11 (prefix)
// console.log(c--); // 11 (postfix), then c becomes 12
// console.log(c);


// Compound assignment: += -= *= /= %= **=  --> shorthand
let total = 100;
// total = total + 10;

// console.log(total);

// total += 10.99; // 110.99
// total -= 10.99
// total *= 2;
// total /= 3;

/* =========================
   LOGICAL OPERATORS ---> we are using statements that are true or false
   ========================= */
/*
Order of operations: Logical Not (!), Logical And (&&), Logical Or (||)

RETURNS A BOOLEAN WHEN USING BOOLEAN VALUES
&& (AND) conjunction, || (OR) alternative, ! (NOT) negation
Short-circuiting with non-boolean values:
- A && B returns A if A is falsy, otherwise B
- A || B returns A if A is truthy, otherwise B
*/
 //&& ---> both operands(statements to be true in order to get back a true boolean)
   // London is a city AND London is in Great Britain  --->  true
   //London is a city AND London is in Iceland ------> false
console.log(true && true);//---> single boolean ---> true
console.log(true && false);// ---> false

// || ---> only one operand needs to be true in order to get back a true boolean
   //London is a city OR London is in Iceland     ---> true
   //London is a village OR London is in Iceland   ---> false
console.log(true || false);// ----> 1 true to get back true
console.log(false || true);// true
console.log(false || false);// false

console.log(true || false && false);// (true || false) ---> true
console.log(true || false && false && true);
console.log(false || false || true)
//! ---> changes the logical value to its opposite

console.log(!true);//false
console.log(!false);//true



// console.log(true && "OK");     // "OK"
// console.log(0 && "OK");        // 0
// console.log("Alice" || "Bob"); // "Alice"
// console.log("" || "Bob");      // "Bob"
// console.log(!true, !false);    // false true

/* =========================
   STRING TOOLS
   ========================= */
// Concatenation:
// let first = "Martin";
// let last = "Maldonado";
// console.log(first + " " + last);

// let userInput = "19.95"
// console.log(userInput + 4);


// total *= 2;
// console.log(total);
 
// let userInput = "19.50";
//  userInput = Number(userInput) + 4;


// console.log(userInput)

// Template literals (interpolation + multiline): ` `
console.log("Hello", 'World', `!`)

// let first = "Martin";
// console.log(`Hello, my name is ${first} and I am ${age} years old.`);
// const poem = `Roses are red,
// violets are blue...
// sdfsd
// sdfsd
// `;
// console.log(poem);

/* =========================
   COMPARISON OPERATORS 
   ========================= */
/* 
we are comparing data Type and data value
they return a boolean (true or false)
they compare two operands

=== strict equality (no type coercion) ---> do the two values match in data type and data value
==  loose equality  (coerces types; avoid in most cases)
!== strict inequality checking data type and value 
!=  loose inequality (coerces types; avoid in most cases)


> < >= <=  numeric or lexicographic (for strings)
lowercase > uppercase

*/
// console.log(10 > 8);
// console.log(8 >= 8);
//  console.log(10 === 10);      // true
//  console.log("10" == 10);     // true (coerces) ⚠️
//  // console.log("10" === 10);    // false (strict)
//  console.log(10 !== 5);       // true
//  console.log("b" > "a");      // true (lexicographic)
//  console.log("A" > "B");      // true ('a' > 'B')

/* =========================
   instanceof / delete
   ========================= */
// console.log(typeof []);
// console.log([] instanceof Array); // true
// let person = { name: "Alice", age: 36 };
// delete person.age;
// console.log(person.age); // undefined

/* =========================
   TERNARY OPERATOR
   ========================= */
/*
syntax:
condition ? expressionIfTrue : expressionIfFalse
condition ---> will be evaulated to a boolean (true false)
*/
let userName = "Martin";
let myTernary = userName ? userName : "Guest";

//   true ? userName : "Guest"

let age = 33;
let canVoteMsg = (age >= 18) ? "You can vote!" : "You cannot vote.";
         //condition = true  ? "You can vote!" : "You cannot vote."
// console.log(canVoteMsg);

let number = 10;
let parity = (number % 3 === 0) ? "Even" : "Odd";
            // 1 === 0 ? "Even" : "Odd"
            // false ? "Even" : "Odd"
// console.log(parity);

// Example with OR for a default:
let usernameInput = "Maldo017";
let displayName = usernameInput ? usernameInput : "Guest"; // same as: usernameInput || "Guest"
            //condition = true ? usernameInput : "Guest"
// console.log(displayName);

/* =========================
   DIALOGS (BROWSER)
   ========================= */
alert("Heads up!");
const confirmed = confirm("Continue?"); // true if OK, false if Cancel
console.log(confirmed);
const nameInput = prompt("What is your name?"); // returns string or null
const safeName = nameInput ? nameInput : "anonymous";
//const safeName = "" ? "Martin Maldonado" : "anyonymous"
console.log(`Hello, ${safeName}`);//string interpolation

/* =========================
   LENGTH / INDEXOF (quick refs)
   ========================= */
// Strings and arrays both have length:
const s = "Hello";
const arr2 = ["a","b","c"];
// console.log(s.length);    // 5
// console.log(arr2.length); // 3

// indexOf on strings/arrays (returns index or -1 if not found):
// console.log(s.indexOf("l"));  // 2
// console.log(arr2.indexOf("b"));// 1

/* =========================
   PRACTICE SNIPPETS (UNCOMMENT)
   ========================= */

// 1) Type check demo:
// console.log(typeof "USA");          // "string"
// console.log(typeof false);          // "boolean"
// console.log(typeof 17);             // "number"
// console.log(typeof 123n);           // "bigint"
// console.log(typeof undefined);      // "undefined"
// console.log(typeof null);           // "object" (quirk)
// console.log(typeof Symbol("x"));    // "symbol"

// 2) Number conversion & NaN:
// console.log(Number("42"));          // 42
// console.log(Number("4.2"));         // 4.2
// console.log(Number("foo"));         // NaN
// console.log(isNaN(Number("foo")));  // true

// 3) Logical chains:
// console.log(true && true && false || true); // true
// console.log(true && (false || true));       // true

// 4) Building an object and reading nested values:
const profile = {
  name: "Alice",
  stats: { posts: 12, followers: 250 }
};
// console.log(profile.stats.followers);

// 5) Simple validation example:
function isStrongPassword(pw) {
  // length >= 8 AND includes a number (regex: \d)
  return pw.length >= 8 && /\d/.test(pw);
}
// console.log(isStrongPassword("abc"));        // false
// console.log(isStrongPassword("abc12345"));   // true

/* =========================
   QUICK GLOSSARY
   =========================
- Primitive: string, number, boolean, undefined, null, bigint, symbol
- Complex: object, array, function (objects under the hood)
- Truthy/Falsy: values that coerce to true/false in boolean context
- Coercion: converting between types (explicit: Number(), implicit: "5" * 2)
- Strict vs Loose: === / !== (no coercion) vs == / != (coercion)
- Template literal: backticks `...` with ${expr} interpolation
- Ternary: cond ? A : B (inline if/else)
- Short-circuit: A && B and A || B return a value, not just booleans
*/

/* =========================================================
   End of Week 1 Cheat Sheet
   ========================================================= */
