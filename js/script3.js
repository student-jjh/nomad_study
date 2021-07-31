const h1 = document.querySelector(".Hello h1");
//const title2 = document.querySelector("h1:second-child");

console.log(h1);
//console.log(title2);

h1.innerText = 'I want to have some rest'
h1.style.color="red"
//title2.innerText = 'wow'



function handeTitleClick(){
    console.log("title is clicked");
    h1.style.color='blue';
}
function handelMouseEnter(){
    h1.innerText="mouse is here";
}
function handelMouseLeave(){
    h1.innerText="mouse is no in here";
}

function handleWindowResize(){
    document.body.style.backgroundColor= "tomato";
}
function handleWindowCopy(){
    alert("copier!")
}
function handelWindowOffline(){
    alert("help no WIFI")
}
function handleWindowOnline(){
    alert("in WIFI")
}

h1.addEventListener("click",handeTitleClick); //여기에는 함수를 실행하는 ()를 첨부하지 않아야 함
h1.addEventListener("mouseenter",handelMouseEnter);
h1.addEventListener("mouseleave",handelMouseLeave);

window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline",handelWindowOffline);
window.addEventListener("online",handleWindowOnline);