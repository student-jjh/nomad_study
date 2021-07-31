//const a = 5;
//const b = 2;

//let myName = 'JJH';

/*console.log(myName);
console.log(a+b);
console.log(a * b);
console.log(a/b);
myName="KHY"
console.log("your name is " + myName)

const amIFat = true;
console.log(amIFat);
let something;
console.log(something)*/
/*
const dayOfWeek=["mon",'tue',"wed",'thu','fri','sat'];
console.log(dayOfWeek);
console.log(dayOfWeek[0]);
//Add one more day to the array
dayOfWeek.push("sun");
console.log(dayOfWeek);


const nonsense = [1,2,"hello",true,undefined,null];

console.log(nonsense);*/
//딕셔너리 형태일까요..? 

/*const player = {
    name:'nico',
    points:'10',
    fat: true,
};
player["happy"]=true;
player.lastname="crazy";
console.log(player);
console.log(player.name);*/
/* 
//함수 만들기
function sayHello(Name) {
    console.log(("Hello my name is " + Name));
}

sayHello('NICO');

//계산기 만들기
function plus(a,b){
    console.log(a+b);
}

plus(3,5);

const player = {
    name:'nico',
    points:'10',
    fat: true,
    sayHello : function(){
        console.log("hi, my name is "+this.name)
    }
};
player.sayHello();

//2.9 Recap
// undifined 는 흔하지 않음
const cal = {
    plus : function(a,b){console.log(a+b)},
    minus : function(a,b){console.log(a-b)},
    multiple : function(a,b){console.log(a*b)},
    divide : function(a,b){console.log(a/b)},
}

//Returns
const age = 96;
function calculateAge(ageOfDoreigner) {
    return ageOfDoreigner+2;
}
*/
// if study
//console.log(calculateAge(age));
let age = prompt("How old are you?"); //자바스크립트를 정지시키고 우리를 기다리게 하는 입력
//이 이유로 인하여 더이상 prompt 함수를 사용하지 않음
console.log(typeof age);

function ageDrinking(ageOfYou){
    if (isNaN(ageOfYou)){
        alert("wirte a number!"); //숫자를 입력하지 않은 경우
    } else if (parseInt(ageOfYou)>19 && parseInt(ageOfYou)<50){
        alert("You can drink"); // 19살보다 많으면 음주 가능!
    }else{ 
        alert("You can't drink!")} // 미성년자는 음주 불가능!
}
ageDrinking(age);
