const images = ['img1.jpg','img2.jpg','img3.jpg','img4.jpg','img5.jpg','img6.jpg','img7.jpg','img8.jpg','img9.jpg'];

const chosenImage = images[Math.floor((Math.random()*images.length))];
//const background=document.getElementById("background")
//const bgImage = document.createElement("img");
const body = document.body;
//bgImage.id='image';
//bgImage.src = `img/${chosenImage}`
//console.log(bgImage.src);
body.style.backgroundImage=`url(img/${chosenImage})`;
body.style.backgroundRepeat='no-repeat';
body.style.backgroundSize='100% 100%';
//document.body.appendChild(bgImage);
