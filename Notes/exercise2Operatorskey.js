/* =========================================================
   ANSWER KEY — OPERATORS, STRINGS & LOGICAL OPERATORS
   ========================================================= */


/* =========================
   PART 1
   ========================= */

console.log(8 + 4);   // 12
console.log(10 - 3);  // 7
console.log(6 * 2);   // 12
console.log(9 / 3);   // 3
console.log(10 % 4);  // 2

console.log(15 + 5);  // 20
console.log(20 / 4);  // 5
console.log(7 % 3);   // 1

console.log(10 / 0);  // Infinity



/* =========================
   PART 2
   ========================= */

console.log(+"42", typeof +"42");     // 42 "number"
console.log(+"3.14", typeof +"3.14"); // 3.14 "number"

console.log(-"-7"); // 7



/* =========================
   PART 3
   ========================= */

let counter = 5;
console.log(++counter); // 6
console.log(--counter); // 5

let totalPrice = 50;
totalPrice += 10;
console.log(totalPrice); // 60

totalPrice /= 2;
console.log(totalPrice); // 30



/* =========================
   PART 4
   ========================= */

let firstName = "Alex";
let lastName = "Johnson";
console.log(firstName + " " + lastName);

let price = "19.99";
console.log(price + 5); // "19.995"



/* =========================
   PART 5
   ========================= */

let username = "Sam";
let userAge = 25;
console.log(`Hello, my name is ${username} and I am ${userAge} years old.`);

const poem = `Line one
Line two
Line three`;
console.log(poem);



/* =========================
   PART 6
   ========================= */

console.log(isLoggedIn && isAdmin);       // false
console.log(hasTicket && isVIP);          // true
console.log(hasMembership || hasGuestPass); // true
console.log(paidOnline || paidInStore);  // false
console.log(!isOpen);                    // false
console.log(!isEmpty);                   // true
console.log(isAdult && hasID && !isBanned); // true
console.log(hasPermission || isOwner);   // true
console.log(a && b || c);                // true
console.log(a && (b || c));              // true



/* =========================
   PART 7
   ========================= */

console.log(userLoggedIn && !userBanned); // true
console.log(isStudent || isVeteran);      // true
