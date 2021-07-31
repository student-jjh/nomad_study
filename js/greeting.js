const loginInput =document.querySelector('#login-form input');
const loginForm = document.querySelector('#login-form');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = "hidden"; 
const USERNAME_KEY='username';
//const loginButton =document.querySelector('#login-form button');

function onLoginSubmit(event) {
    event.preventDefault();
    const userName=loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,userName);
    paintGreeting(userName);
} 

function paintGreeting(userName){
    greeting.innerText=`Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername =localStorage.getItem(USERNAME_KEY);

if (savedUsername===null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit',onLoginSubmit)
} else{
    //show the login info
    paintGreeting(savedUsername);
    
}
 