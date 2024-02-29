const car =document.querySelector(".car");
const obstacle=document.querySelector(".obstacle");
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
var animationIterations = 0;

obstacle.addEventListener('animationiteration', () => {
    animationIterations++;
    console.log("Animation iteration: " + animationIterations);

    if (animationIterations % 2 === 1) {
        console.log("Moving obstacle to the right");
        obstacle.style.right = '50px';
        obstacle.style.left = '';
    } else if (animationIterations % 2 === 0) {
        console.log("Moving obstacle to the left");
        obstacle.style.left = '50px';
        obstacle.style.right = '';
    }
});
