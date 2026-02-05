// 1) Declare a variable called city and assign it the string "Chicago". 
// Log the variable to the console.
let myVar = "Chicago"; 
console.log("Chicago");
myVar = "New York";
console.log(myVar);

// 2) Create a boolean variable named isLoggedIn and set it to false. 
// Log the type of this variable.
// true = 1 / false = 0;
let isLoggedIn = false;
isLoggedIn  = true;

console.log(isLoggedIn);

// 3) Create a variable bigNum with the value 12345678901234567890n 
// and log its type to the console.
let bigNum = 12345678901234567890n;
console.log(bigNum + 5);
console.log(typeof NaN);

// 4) Convert the string "42" into a number using Number(). 
// Log the type and value.


// 5) Convert the string "Hello" into a number using Number(). 
// What gets logged?
let str2 = "Hello";
let num2 = Number(str2);

console.log(num2);


// 6) Test the following with Boolean(): 
// Boolean(0), Boolean("text"), Boolean(undefined), Boolean(null) 
// Log each result.

let myBool = Boolean();

let newNumber = Number("17");

console.log(newNumber);


// 7) Create an object called student with keys: name, age, email. 
// Give it any values you like and log the entire object.


// 8) Add a new property grade to the student object. 
// Then log just the grade.


// 9) Access and log the value of the name property using dot notation 
// and the age property using bracket notation.


// 10) Create a nested object inside student called address 
// with keys: city and zip. Log just the city.


// 11) Declare an array fruits with elements "apple", "banana", "pear". 
// Log the first element.


// 12) Change the second element of the fruits array to "strawberry". 
// Log the entire array.
let fruits = ["apple", "banana", "pear"];

fruits[1] = "strawberry";


// 13) Create an array numbers with elements [1, 2, 3, 4]. 
// Log the length of the array.


// 14) Add a nested array [10, 20, 30] as the last element of numbers. 
// Log the first element of the nested array.


// 15) Check if numbers is an array using instanceof. 
// Log the result.




//------------------------------------------------------------------------------------
// Find the error and explain what is happening!

// 1) Accessing an out-of-range index
let arr1 = [1, 2, 3];

console.log(arr1.length);
console.log(arr1[2]); 
// Why is this happening?


// 2) Using a property that doesn’t exist
let user = { name: "Sam" };
console.log(user.age); 
// What gets logged and why?


// 3) Calling a non-function
let num = 5;
num(); 
// What kind of error does this throw?


// 4) Mixing BigInt and Number
let big = 10n;
let small = 5;
console.log(big + small); 
// What error do you see?


// 5) Misspelling a variable name
let cityName = "Chicago";
console.log(cityname); 
// Why does this break?
