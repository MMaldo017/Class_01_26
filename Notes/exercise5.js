/* =========================================================
   EXERCISES — SWITCH, WHILE, DO...WHILE (BEGINNER)
   =========================================================
   RULES:
   - Do NOT use functions
   - Do NOT use for, for...of, or for...in
   - Use ONLY:
     • switch
     • while
     • do...while
     • console.log
*/


/* =========================
   SECTION 1: SWITCH (BASICS)
   ========================= */

// 1) Create a variable called day with the value "Monday".
//    Use a switch statement to log:
//    "Start of the week" for Monday
//    "Midweek" for Wednesday
//    "Weekend" for Saturday or Sunday
//    "Unknown day" for anything else

let day = "Monday";
switch (day) {
   case "Monday":
      console.log("Start of the week");
      break;
      case "Wednesday":
         console.log("Midweek");
         break;
         case ("Saturday"):
            case ("Sunday"):
               console.log("Weekend");
               break;
               default:
                  console.log("Unknown day");
                  break;
 
}



// 2) Create a variable called role with value "editor".
//    Use switch to log:
//    "Admin access" for "admin"
//    "Editor access" for "editor"
//    "Viewer access" for "viewer"
//    "No access" for anything else


let role = "editor";
switch (role) {
   case "admin":
 
console.log("Admin access");
   break;
   case "editor":
      console.log("Editor access");
      break;
      case "viewer":
         console.log("Viewer access");
         break;
         default:
            console.log("No access");
            break;
}


/* =========================
   SECTION 2: WHILE LOOPS
   ========================= */

// 3) Use a while loop to log numbers from 1 to 5





// 4) Use a while loop to log numbers from 10 down to 1





// 5) Given the array below, use a while loop to log each color
let colors = ["red", "blue", "green"];





/* =========================
   SECTION 3: do...while LOOPS
   ========================= */

// 6) Use a do...while loop to log numbers from 1 to 3





// 7) Use a do...while loop to log the message
//    "Loop ran at least once" exactly one time





/* =========================
   SECTION 4: ARRAY LOOPING (BACKWARDS)
   ========================= */

// 8) Given the array below, write a while loop that logs
//    the elements from LAST to FIRST

// let animals = ["dog", "cat", "bird", "fish"];
// //fish, bird, cat, dog
// //pointer = 3 -> 2 -> 1 -> 0 -> -1;
// let pointer = animals.length - 1;

// while(pointer >= 0){
   
//    console.log(animals[pointer]);
//    pointer--
// };
// console.log(pointer);

// let isOver;
// let counter = 1;
// do{
//    isOver = !confirm(`[${counter++}] Continue the loop?`)
// }while(!isOver)


/* =========================
   MINI PROJECT
   =========================
   Simulate a simple menu system

   - Create a variable called choice with value "b"
   - Use switch to log:
     "You chose option A"
     "You chose option B"
     "You chose option C"
     "Invalid option"
*/
