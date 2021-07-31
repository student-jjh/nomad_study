const loginInput =document.querySelector('#login-form input');
const loginForm = document.querySelector('#login-form');
const link = document.querySelector("a");
//const loginButton =document.querySelector('#login-form button');

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
} 
function handleLinkClick(event){
    event.preventDefault();
    console.log(event);
    //alert("clicked");
}
loginForm.addEventListener('submit',onLoginSubmit)
link.addEventListener('click',handleLinkClick)
