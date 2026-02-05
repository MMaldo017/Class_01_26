/* =========================================================
   OPERATORS, STRINGS & LOGICAL OPERATORS — PRACTICE
   ========================================================= */


/* =========================
   PART 1: ARITHMETIC OPERATORS
   ========================= */

// 1) Predict the output, then test with console.log
// a) 8 + 4
// b) 10 - 3
// c) 6 * 2
// d) 9 / 3
// e) 10 % 4


// 2) Write console.log statements to calculate:
// a) 15 + 5
// b) 20 / 4
// c) 7 % 3

let randomVar = 10;

console.log(randomVar += 10);

console.log(randomVar);// ---> 10

//compound assignment operator +=, -=, *=, /=, **=

// 3) What happens when you divide a number by 0?
// Write a console.log to test it.



/* =========================
   PART 2: UNARY OPERATORS
   ========================= */

// 4) Convert the following strings into numbers using unary +
// Log the value and typeof
// a) "42"
// b) "3.14"


// 5) Use unary - on the string "-7" and log the result
// + - 
let otherVar = "-7";

// console.log(-otherVar);

/* =========================
   PART 3: INCREMENT & COMPOUND ASSIGNMENT
   ========================= */

let counter = 5;
// console.log(counter++);
// console.log(counter);
// 6) Increase counter by 1 using ++ and log it
//prefix ++counter
//postfix counter++

// 7) Decrease counter by 1 using -- and log it


let totalPrice = 50;

// 8) Increase totalPrice by 10 using a compound assignment
// Then log totalPrice


// 9) Divide totalPrice by 2 using a compound assignment
// Then log totalPrice



/* =========================
   PART 4: STRING OPERATORS
   ========================= */

let firstName = "Alex";
let lastName = "Johnson";

// 10) Use + to log: "Alex Johnson"

// console.log(firstName + lastName);//concatenation

let price = "19.99";



// 11) What happens when you add a number to a string?
// Write a console.log using price + 5

// console.log(price + 5);//coercion "19.995"

// console.log(price - 5);



/* =========================
   PART 5: TEMPLATE LITERALS ---> data type: string ---> string interpolation or multi-line string
   ========================= */

let username = "Sam";
let userAge = 25;

// 12) Use a template literal to log:
// "Hello, my name is Sam and I am 25 years old."

console.log(`Hello, my name ${username} 
   and I am ${userAge} years 
   old`);

// 13) Create a multiline string using template literals
// The string should contain at least 3 lines and log it



/* =========================
   PART 6: LOGICAL OPERATORS (BOOLEAN ONLY) ---> send us back a boolean
   && logical AND ---> have to be true in order to get back true
   || logical OR ---> only 1 has to be true to get back true
   ! logical NOT ---> flips the boolean value
   ========================= */

let isLoggedIn = true;
let isAdmin = false;

// 14) Evaluate and log:
console.log(isLoggedIn && isAdmin);//false


let hasTicket = true;
let isVIP = true;

// 15) Evaluate and log:
hasTicket && isVIP; //true



let hasMembership = false;
let hasGuestPass = true;

// 16) Evaluate and log:
hasMembership || hasGuestPass;//true


let paidOnline = false;
let paidInStore = false;

// 17) Evaluate and log:
paidOnline || paidInStore;



let isOpen = true;

// 18) Evaluate and log:
!isOpen;


let isEmpty = false;

// 19) Evaluate and log:
!isEmpty;



let isAdult = true;
let hasID = true;
let isBanned = false;

// 20) Evaluate and log:
console.log(isAdult && hasID && !isBanned);//(true && true && !false)---> (true && true && true)



let hasPermission = false;
let isOwner = true;

// 21) Evaluate and log:
hasPermission || isOwner;



let a = true;
let b = false;
let c = true;

// 22) Evaluate and log:
console.log(a && b || c);//(true && false || true) ---> (false || true) ---> true


// 23) Add parentheses to make the order clear, then log:
console.log(a && (b || c));// ---> (true && (false || true))---> (true && true)



/* =========================
   PART 7: REAL-LIFE BOOLEAN LOGIC
   ========================= */

// 24) A user can access a page if:
// - They are logged in
// - AND they are NOT banned

let userLoggedIn = true;
let userBanned = false;

// Write the logical expression and log it



// 25) A discount applies if:
// - The user is a student
// - OR the user is a veteran

let isStudent = false;
let isVeteran = true;

// Write the logical expression and log it
