const h1 = document.querySelector(".Hello h1");
//const title2 = document.querySelector("h1:second-child");

console.log(h1);
//console.log(title2);

h1.innerText = 'I want to have some rest'
h1.style.color="red"
//title2.innerText = 'wow'



function handeTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    if (currentColor==="blue"){
        newColor='tomato';
    }else{
        newColor='blue';
    }
    h1.style.color=newColor;
}


h1.addEventListener("click",handeTitleClick); //여기에는 함수를 실행하는 ()를 첨부하지 않아야 함
