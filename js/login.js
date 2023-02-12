// when a user submit an event, it will save in the localstorage
// example: 고양이, username, myname.....
// depending on the user input, it can show or hide the login form
// greeting message with the user name
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector ("#login-form input");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit (event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}

function paintGreeting(username) {
    greeting.innerText = `HELLO ${username} !`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting(savedUserName);
}
