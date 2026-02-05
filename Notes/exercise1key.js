/* =========================
   ANSWER KEY
   ========================= */

/* -------------------------
   PART A — BASIC TASKS
   ------------------------- */

// 1) Declare a variable called city and assign it the string "Chicago". 
// Log the variable to the console.
let city = "Chicago";
console.log(city);

// 2) Create a boolean variable named isLoggedIn and set it to false. 
// Log the type of this variable.
let isLoggedIn = false;
console.log(typeof isLoggedIn); // "boolean"

// 3) Create a variable bigNum with the value 12345678901234567890n 
// and log its type to the console.
let bigNum = 12345678901234567890n;
console.log(typeof bigNum); // "bigint"

// (Extra line you had in your sheet)
console.log(typeof NaN); // "number"

// 4) Convert the string "42" into a number using Number(). 
// Log the type and value.
let n1 = Number("42");
console.log(typeof n1, n1); // "number", 42

// 5) Convert the string "Hello" into a number using Number(). 
// What gets logged?
let n2 = Number("Hello");
console.log(n2);           // NaN
console.log(typeof n2);    // "number"

// 6) Test the following with Boolean(): 
// Boolean(0), Boolean("text"), Boolean(undefined), Boolean(null) 
// Log each result.
console.log(Boolean(0));         // false
console.log(Boolean("text"));    // true
console.log(Boolean(undefined)); // false
console.log(Boolean(null));      // false

// 7) Create an object called student with keys: name, age, email. 
// Give it any values you like and log the entire object.
let student = {
  name: "Martin",
  age: 25,
  email: "martin@example.com"
};
console.log(student);

// 8) Add a new property grade to the student object. 
// Then log just the grade.
student.grade = "A";
console.log(student.grade); // "A"

// 9) Access and log the value of the name property using dot notation 
// and the age property using bracket notation.
console.log(student.name);      // dot notation
console.log(student["age"]);    // bracket notation

// 10) Create a nested object inside student called address 
// with keys: city and zip. Log just the city.
student.address = {
  city: "Chicago",
  zip: "60601"
};
console.log(student.address.city); // "Chicago"

// 11) Declare an array fruits with elements "apple", "banana", "pear". 
// Log the first element.
let fruits = ["apple", "banana", "pear"];
console.log(fruits[0]); // "apple"

// 12) Change the second element of the fruits array to "strawberry". 
// Log the entire array.
fruits[1] = "strawberry";
console.log(fruits); // ["apple", "strawberry", "pear"]

// 13) Create an array numbers with elements [1, 2, 3, 4]. 
// Log the length of the array.
let numbers = [1, 2, 3, 4];
console.log(numbers.length); // 4

// 14) Add a nested array [10, 20, 30] as the last element of numbers. 
// Log the first element of the nested array.
numbers.push([10, 20, 30]);
console.log(numbers[4][0]); // 10

// 15) Check if numbers is an array using instanceof. 
// Log the result.
console.log(numbers instanceof Array); // true


/* -------------------------
   PART B — FIND THE ERROR
   ------------------------- */

// 1) Accessing an out-of-range index
let arr1 = [1, 2, 3];
console.log(arr1[10]); 
// Logs: undefined
// Why? Index 10 doesn't exist. JS returns undefined for missing array elements.

// 2) Using a property that doesn’t exist
let user = { name: "Sam" };
console.log(user.age); 
// Logs: undefined
// Why? The object has no "age" property, so accessing it returns undefined.

// 3) Calling a non-function
let num = 5;
// num(); 
// Throws: TypeError: num is not a function
// Why? num is a number, not a function, so calling it like a function causes a TypeError.

// 4) Mixing BigInt and Number
let big = 10n;
let small = 5;
// console.log(big + small); 
// Throws: TypeError: Cannot mix BigInt and other types
// Fix options:
console.log(big + BigInt(small));   // 15n
// OR
console.log(Number(big) + small);   // 15  (but loses BigInt precision for very large values)

// 5) Misspell
