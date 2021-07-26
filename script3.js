const title = document.querySelector(".Hello h1");
//const title2 = document.querySelector("h1:second-child");

console.log(title);
//console.log(title2);

title.innerText = 'I want to have some rest'
title.style.color="red"
//title2.innerText = 'wow'



function handeTitleClick(){
    console.log("title is clicked")
    title.style.color='blue';
}

title.addEventListener("click",handeTitleClick) //여기에는 함수를 실행하는 ()를 첨부하지 않아야 함
