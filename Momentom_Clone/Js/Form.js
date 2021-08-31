const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = 'username';

function paintGreeting(username) {
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function loginSubmit(submitEvent) {''
    submitEvent.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userWrote = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userWrote);
    paintGreeting(userWrote);
};

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', loginSubmit);
} else {
    paintGreeting(savedUserName);
};

