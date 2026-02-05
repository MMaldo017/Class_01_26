/* =========================================================
   Week 3 JavaScript Cheat Sheet
   (Save as: week3-cheatsheet.js)
   ---------------------------------------------------------
   How to use:
   1) Include this file with <script src="week3-cheatsheet.js"></script>
   2) Open DevTools (F12) → Console.
   3) Uncomment example lines to see results.
   ========================================================= */


/* =========================
   FUNCTIONS (CORE)
   =========================
   - A function is a reusable block of code with its own scope.
   - Call it to run it. If you don’t call it, it won’t run.
   - Return ends the function and hands back a value.
   Hoisted
   function statement:
      function functionName(parameter, parameter1){
            code to run
      }

call a function
functionName(arguments);

*/

// Function Statement (HOISTED)
function add(a, b) {
  return a + b;
}
// console.log(add(2,3));






// let tempWeek1 = [11,23,12,14,15,13,12];
// let tempWeek2 = [24,26,27,28,25,21,25];


// let week1Mean = getMeanTemp(tempWeek1);
// function getMeanTemp(temperatures){
  
//   let  summ = 0;
//    for(let i = 0; i < temperatures.length; i++){
//       summ += temperatures[i]
//    }
   
//     return summ / temperatures.length;
// };




// let week2Mean = getMeanTemp(tempWeek2);

// let monthMean = [];

// monthMean.push(week1Mean,week2Mean);



// let inner = function(){
//    console.log("inner 1");
// };

// let outer = function(callback){
//    console.log("outer 1");
//    callback();//inner()
//    console.log("outer 2");
// };

// outer(inner);
// console.log('test 2');













// Function Expression (NOT hoisted)
// const multiply = function (a, b) {
//   return a * b;
// };
// console.log(multiply(3, 4)); // 12

// // Parameters vs Arguments
// function greet(name) {               // name = parameter
//   return `Hello, ${name}!`;
// }
// // console.log(greet("Alice"));      // "Alice" is an argument

// // Return ends execution immediately
// function firstEven(nums) {
//   for (let n of nums) {
//     if (n % 2 === 0) return n;
//   }
//   return null;
// }
// console.log(firstEven([1,3,5,8,9])); // 8

// let varStr = "car";
// varStr.push("s");
// console.log(varStr);

// for(let i = 0; i < varStr.length;i++){
//    console.log(varStr[i])
// }

/* =========================
   HOISTING (IMPORTANT)
   =========================
   - Function statements are hoisted.
   - Function expressions / arrow functions are NOT hoisted.
*/
// ok();                 // ✅ works (statement hoisted)
// function ok(){ /*...*/ }

// // notOk();             // ❌ ReferenceError
// const notOk = function(){ /*...*/ };


/* =========================
   CALLBACKS
   =========================
   - A callback is a function passed into another function.
   - Used in array methods, event handlers, timers, etc.
*/

function doTwice(fn) {
  fn();//false()
  fn();//false()
}
doTwice(false); // "Hi" "Hi"


/* =========================
   ASYNCHRONY: setTimeout / setInterval
   =========================
   - setTimeout(fn, ms): run once after delay
   - setInterval(fn, ms): run repeatedly until cleared
   - async functions --> a function that lets you write asynchronous code that looks synchronous
         -waiting for the information
*/

let tick = 0;
const id = setInterval(() => {
  console.log("tick", ++tick);
  if (tick >= 3) {clearInterval(id)}; // stop after 3 times
}, 1000);
console.log("Code is still running.")

// setTimeout(() => console.log("Runs later"), 2500);
// console.log("Code is still running");

/* =========================
   ARROW FUNCTIONS
   =========================
   - Shorthand for function expressions.
   - `param => expression` (implicit return)
   - `param => { statements; return value; }` (block body)
*/

// const square = x => x * x;
// console.log(square(5)); // 25

// const toSentence = (first, last) => {
//   const name = `${first} ${last}`;
//   return `Hello, ${name}.`;
// };
// console.log(toSentence("Martin", "Maldonado"));


/* =========================
   ARRAY METHODS (ESSENTIAL 5)
   =========================
   All take a callback with parameters like (value, index, array)
   Built in loop
*/

// 1) forEach: iterate (no return) --> development
const nums = [6, 4, 3, 2, 5, 1];
// nums.forEach(n => console.log(n));
// nums.forEach(n => console.log(n + 4))
// nums.forEach(n => String(n));

//n will equal each element in that array
//1 --> n = 6 (6 => console.log(6))
//2 --> n = 4 (4 => console.log(4))


// 2) map: transform → new array
// const doubled = nums.map(n => n * 2);
// console.log(doubled); // [12,8,6,4,10,2]
// console.log(nums);

// 3) filter: keep items that pass condition(true/false)
//creates a new array
// const evens = nums.filter(n => n % 2 === 0);//put a condition into the function
// const numbers = nums.filter(n => typeof n === "number")
// console.log(evens); // [6,4,2]

// 4) reduce: fold to a single value--> accumulator!!!!
// const sum = nums.reduce((acc, n) => acc * n, 0);
// console.log(sum); // 21
//1 acc = 0 => 0 + 6
//2 acc = 6 => 6 + 4
//3 acc = 10 => 10 + 3
//4 acc = 13 => 13 + 2
//5 acc = 15 => 15 + 5
//6 acc = 20 => 20 + 1
//7 acc = 21 ---> sum = 21

// 5) sort: order items (⚠️ mutates!)
// const letters = ["c", "a", "b"];
// letters.sort();
// console.log(letters)

// Default compares as strings; provide a compare fn for numbers:
// const asc = nums.sort((a, b) => a - b);//ascending
// console.log(asc);


// const desc = nums.sort((a, b) => b - a);//descending
// console.log(asc, desc);

// Sort objects by key:
const users = [
  { name: "Martin", age: 33 },
  { name: "Bob", age: 44 },
  { name: "Stacy", age: 24 }
];
// console.table(users.sort((a,b) => a.age - b.age));

/* BONUS: find / some / every */
const found = nums.find(n => n > 4);     // first > 4
const anyEven = nums.some(n => n % 2==0);// true if any
const allPos = nums.every(n => n > 0);   // true if all
// console.log(found, anyEven, allPos);


/* =========================
   STRING & NUMBER QUICKIES
   ========================= */
const s = "Hello World";
// console.log(s.toLowerCase(), s.includes("World"), s.indexOf("o"));

const n = 12.3456;
// console.log(n.toFixed(2)); // "12.35"
// console.log(Number.isNaN(Number("abc"))); // true


/* =========================
   COMPARISONS & LOGIC
   =========================
   - Prefer strict equality (===, !==)
   - && and || short-circuit and return a value
*/

const age = 19;
const canVote = age >= 18 ? "Yes" : "No";
// console.log(canVote); // "Yes"

// Short-circuit defaults:
const inputName = "";
const displayName = inputName || "Guest";
// console.log(displayName); // "Guest"


/* =========================
   DOM BASICS (SELECT / CHANGE)
   =========================
   - These require a real HTML page with matching elements.
   - Uncomment if you have elements present in the DOM.
*/

// SELECT
// const title = document.getElementById("title");
// const firstPara = document.querySelector(".text");
// const allItems = document.querySelectorAll("li");

// CHANGE CONTENT
// if (title) title.textContent = "New Title";

// STYLES & CLASSES
// if (firstPara) {
//   firstPara.style.color = "skyblue";
//   firstPara.classList.add("highlight");
// }
// let firstPara = {
//    style: {font: "times", color: "blue"}
// }

// CREATE / APPEND
// const list = document.getElementById("list");
// if (list) {
//   const li = document.createElement("li");
//   li.textContent = "New Item";
//   list.appendChild(li);
// }


/* =========================
   EVENTS (INTERACTIVITY)
   =========================
   - addEventListener("event", handler)
   - handler can be a named function or an arrow function
*/

// const btn = document.getElementById("btn");
// if (btn) btn.addEventListener("click", () => alert("Clicked!"));

// Prevent form submit (stay on page):
// const form = document.getElementById("myForm");
// if (form) form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const value = form.querySelector("input")?.value || "";
//   console.log("Submitted:", value);
// });


/* =========================
   COMMON PATTERNS & PITFALLS
   =========================
   - Avoid mutating arrays while iterating; use map/filter.
   - Don’t forget `return` inside arrow function blocks.
   - `sort()` mutates the original array (clone with [...arr]).
   - Arrow functions don’t have their own `this` (lexical this).
*/

// Example: clone before sort
const original = [3,2,1];
const sortedClone = [...original].sort((a,b) => a-b);
// console.log(original, sortedClone);


/* =========================
   PRACTICE SNIPPETS (UNCOMMENT)
   ========================= */

// 1) Write a function that returns the average:
function average(arr) {
  if (!arr.length) return 0;
  const total = arr.reduce((acc, n) => acc + n, 0);
  return total / arr.length;
}
// console.log(average([10, 20, 30])); // 20

// 2) Use filter + map to get names of adults:
const people = [
  {name: "Ana", age: 17},
  {name: "Luis", age: 21},
  {name: "Mia", age: 19},
];
// console.log(people.filter(p => p.age >= 18).map(p => p.name)); // ["Luis","Mia"]

// 3) Debounce (basic idea): wait until user stops typing
function debounce(fn, delay = 300) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
}
// const onInput = debounce((v) => console.log("Search:", v), 300);
// onInput("w"); onInput("wa"); onInput("wat"); // only last runs


/* =========================
   QUICK GLOSSARY
   =========================
- Function Statement: `function f(){}` (hoisted)
- Function Expression: `const f = function(){}` (not hoisted)
- Arrow Function: `const f = x => x * 2`
- Callback: A function passed to another function
- setTimeout / setInterval: schedule tasks; clear with clearTimeout/clearInterval
- Array Helpers: forEach (iterate), map (transform), filter (keep), reduce (fold), sort (order)
- Event Listener: Runs when the event occurs (click, submit, input)
- Prevent Default: Keep the browser from doing its default action
*/


/* =========================================================
   End of Week 3 Cheat Sheet
   ========================================================= */



/*

showContact: the function should take two arguments; the first is the list of contacts, 
and the second is the index number of the contact to display; inside the function, 
check if the correct arguments are passed, that is, if the contacts are an array 
(use the instanceofArray construction for this);

showAllContacts: the function should take one argument,
 the list of contacts; inside the function, check if the given argument is an array;


*/

//create a function statement
// function showAllContacts(contacts){
//    //check if the param is an array
//    if(contacts instanceof Array){
//       //go through contacts and log each contact
//       for(let element of contacts){
//          console.log(element);
//       }
//    }else{
//       console.log("What you passed to this function is not an Array")
//    }

// }











//function showContact(contacts, indexNumber){

//is contacts and array (instanceofArray)


//}
// let contacts = [{
//     name: "Maxwell Wright",
//     phone: "(0191) 719 6495",
//     email: "Curabitur.egestas.nunc@nonummyac.co.uk"
// }, {
//     name: "Raja Villarreal",
//     phone: "0866 398 2895",
//     email: "posuere.vulputate@sed.com"
// }, {
//     name: "Helen Richards",
//     phone: "0800 1111",
//     email: "libero@convallis.edu"
// }];

// //add a new contact to contacts

// function addNewContacts(contactList, name, phone, email){

//    //add an object  to contactList
//    //create that new object
//    let newContact = {
//       //keys need to match the contactList keys
//       name: name,
//       phone: phone,
//       email: email
//    };

//       //add newContact to contactList
//       contactList.push(newContact);

// };

// addNewContacts(contacts,"Martin", "123 456 7890", "email@email.com");

// console.log(contacts);









// showContact(true, 0)
// //function statement
// function showContact(contacts,index){
   
//    //is contacts an array
//    if(contacts instanceof Array){
//       //display the element with the index === the agrument passed to index
//       //contact[index]
//       console.log(contacts[index])

//    }else{
//       //tell the user you need an array for contacts
//       console.log("Your first argument needs to be an array")
//    }
// };
