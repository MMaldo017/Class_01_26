/* ===================
   Weekly Review — Answers (1–30)
   =================== */

// 1
let firstName = "Martin";
console.log(firstName);

// 2
firstName = "Felix";
console.log(firstName);

// 3
const birthYear = 1995;
console.log(birthYear);

// 4 (explicit values + typeof)
const primString = "hello";
const primNumber = 42;
const primBigInt = 9007199254740993n;
const primBoolean = true;
const primSymbol = Symbol("id");
const primUndefined = undefined;
const primNull = null;

console.log(typeof primString);    // "string"
console.log(typeof primNumber);    // "number"
console.log(typeof primBigInt);    // "bigint"
console.log(typeof primBoolean);   // "boolean"
console.log(typeof primSymbol);    // "symbol"
console.log(typeof primUndefined); // "undefined"
console.log(typeof primNull);      // "object"  (JS quirk)

// 5 (constructors)
const s1 = String(100);
console.log(s1, typeof s1); // "100", "string"

const n1 = Number("12.5");
console.log(n1, typeof n1); // 12.5, "number"

const b1 = Boolean("");
console.log(b1, typeof b1); // false, "boolean"

const bi1 = BigInt("12");
console.log(bi1, typeof bi1); // 12n, "bigint"

// 6
const a = +"42";
console.log(a, typeof a); // 42, "number"

// 7
const neg = -"7";
console.log(neg, typeof neg); // -7, "number"

// 8
let n = 5;
console.log(n++); // 5
console.log(n);   // 6
n = 5;
console.log(++n); // 6

// 9
let x = 10;
x += 5;
x *= 2;
console.log(x); // 30

// 10
console.log(25 % 6); // 1
console.log(3 ** 4); // 81

// 11
let msg = "Happy New ";
msg += "Year ";
msg += 2025;
console.log(msg, typeof msg); // "Happy New Year 2025", "string"

// 12
console.log("10" + 5, typeof ("10" + 5)); // "105", "string"

// 13
console.log("10" * 5, typeof ("10" * 5)); // 50, "number"

// 14
let name = "Alex";
console.log(`Hello, ${name}`); // "Hello, Alex"

// 15
const person = { name: "Alex", age: 24, email: "alex@email.com" };
console.log(person.age);       // 24
console.log(person["email"]);  // "alex@email.com"

// 16
person["current-age"] = person.age;
console.log(person["current-age"]); // 24

// 17
const mix = [14, "Martin", true, undefined, null, [12n, 25n, 12n], [1, 2, "Felix"]];
console.log(mix[5][0]); // 12n
console.log(mix[6][mix[6].length - 1]); // "Felix"

// 18
const users = [
  { name: "Calvin", surname: "Hart", age: 66, email: "email.email.com" },
  { name: "Mateus", surname: "Pinto", age: 21, email: "MateusPinto@email.com", social: ["facebook", "Instagram", "X"] }
];
console.log(users[1].email);       // "MateusPinto@email.com"
console.log(users[1].social[0]);   // "facebook"

// 19
console.log(true && true);  // true
console.log(true && false); // false
console.log(false && true); // false

// 20
console.log(false || true);  // true
console.log(false || false); // false
console.log(true || false);  // true

// 21
console.log(!true);  // false
console.log(!false); // true
console.log(!0);     // true

// 22
console.log("Hello" && "World");   // "World"
console.log(0 && "World");         // 0
console.log("" || "Default");      // "Default"
console.log("First" || "Second");  // "First"

// 23 (&& happens before ||)
console.log(false || 0 && "hi"); // false

// 24
console.log(10 === "10"); // false
console.log(10 == "10");  // true

// 25
console.log(5 !== "5"); // true
console.log(7 != 3);    // true

// 26
console.log(12 > 9);   // true
console.log(12 <= 9);  // false

// 27
console.log(typeof null); // "object"
console.log(typeof NaN);  // "number"

// 28
const arr = ["Patti", "Bob"];
const one = arr[0];
console.log(arr instanceof Array); // true
console.log(one instanceof Array); // false

// 29
let age = 24;
console.log(age >= 25 ? "You can get car insurance" : "You are too young"); // "You are too young"

// 30 (browser only)
confirm("Continue?")
  ? alert(`Hello ${prompt("Enter your name:")}!`)
  : alert("Goodbye!");


/* ===================
   Multiple Choice — Answer Key (31–45)
   ===================

31) a
32) b
33) c
34) b
35) c
36) a
37) b
38) b
39) b
40) b
41) c
42) a
43) a
44) b
45) b

*/
