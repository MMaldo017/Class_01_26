import { getUsers, addUser, getCurrentUser, setCurrentUser } from "./mockDb.js";

// --- REGISTER LOGIC ---
const registerForm = document.querySelector('form[action="/register"]');
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = document.querySelector("#firstName").value.trim();
    const lastName = document.querySelector("#lastName").value.trim();
    const email = document.querySelector("#email").value.trim().toLowerCase();
    const password = document.querySelector("#password").value.trim();
    const confirm = document.querySelector("#confirm").value.trim();

    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(password);
    console.log(typeof firstName);
    //truthy and falsy values
     if(true){
      console.log("Hello");
     }


    if (!firstName || !lastName || !email || !password || !confirm) {//
      //if (!true || !true || !false|| !true || !true)
      //if (false || false || true || false || false)
      //if(true)

      //firstName = "Martin" ---> true
      //lastName = "Maldonado" ---> true
      //email = "" ----> false
      //password = "12345678"  ---> true
      //confirm =  true ----> 
      alert("Please fill out all fields.");
      return;
    }

    if (password !== confirm) {//"12345678" !== "12245678" ---> true
      alert("Passwords do not match.");
      return;
    }

    const users = getUsers();
    console.log(users);
    const exists = users.find((u) => u.email === email);
    if (exists) {
      alert("An account with that email already exists.");
      return;
    }

    addUser({ firstName, lastName, email, password });
    // alert("Account created successfully! Redirecting to login...");
    // window.location.href = "login.html";
  });
};


let myName = "Martin";
// --- LOGIN LOGIC ---
const loginForm = document.querySelector('form[action="/login"]');
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.querySelector("#email").value.trim().toLowerCase();
    const password = document.querySelector("#password").value.trim();

    const users = getUsers();
    console.log(users);
    console.log(users[0].email)
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
      alert("Invalid email or password.");
      return;
    }

    setCurrentUser(user);
    // alert("Login successful! Redirecting to homepage...");
    // window.location.href = "../App/index2.html";
  });
}