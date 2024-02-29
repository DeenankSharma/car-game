const car =document.querySelector(".car");
document.addEventListener("keydown",(e)=>{
    if(e.key==="ArrowRight"){
        car.style.right = "50px";
        console.log(Event)
        car.style.left = '';
    }
    else if(e.key==="ArrowLeft"){
        car.style.left = "50px";
        car.style.right = '';
        console.log(Event)
    }
})
