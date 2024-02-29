const car =document.querySelector(".car");
const obstacle=document.querySelector(".obstacle");
document.addEventListener("keydown",(e)=>{
    if(e.key==="ArrowRight"){
        car.style.right = "50px";
        car.style.left = '';
    }
    else if(e.key==="ArrowLeft"){
        car.style.left = "50px";
        car.style.right = '';
    }
})
var animationIterations = 0;

obstacle.addEventListener('animationiteration', () => {
    animationIterations++;

    if (animationIterations % 2 === 1) {
        obstacle.style.right = '50px';
        obstacle.style.left = '';
        
    } else if (animationIterations % 2 === 0) {
        obstacle.style.left = '50px';
        obstacle.style.right = '';
    }
    let currentStyle = window.getComputedStyle(obstacle);
    let animationDuration = currentStyle.getPropertyValue('animation-duration');
    console.log(parseFloat(animationDuration));
    animationDuration=(parseFloat(animationDuration)/1.05);
    obstacle.style.setProperty('animation-duration', animationDuration + 's');
});