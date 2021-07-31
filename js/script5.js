const h1 = document.querySelector("h1");
function handeTitleClick(){
    const for_check = 'active'
    if (h1.classList.contains(for_check)){
        h1.classList.remove(for_check)
    } else{
        h1.classList.add(for_check);
    }    
}
h1.addEventListener("click",handeTitleClick);