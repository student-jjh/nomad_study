const h1 = document.querySelector("h1");
function handeTitleClick(){
    h1.classList.toggle('active')   
}
h1.addEventListener("click",handeTitleClick);