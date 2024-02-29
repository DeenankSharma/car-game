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
    let x=Math.floor(Math.random()*2);
    if (x===1) {
        obstacle.style.right = '50px';
        obstacle.style.left = '';
        
    } else if (x===0) {
        obstacle.style.left = '50px';
        obstacle.style.right = '';
    }
    // let currentStyle = window.getComputedStyle(obstacle);
    // let animationDuration = currentStyle.getPropertyValue('animation-duration');
    // console.log(parseFloat(animationDuration));
    // animationDuration=(parseFloat(animationDuration)/1.05);
    // obstacle.style.setProperty('animation-duration', animationDuration + 's');
});

// let carcoord=car.getBoundingClientRect();
// console.log(carcoord);
// let obscoord=obstacle.getBoundingClientRect();
// console.log(obscoord)
console.log(obstacle.style.top);
if((obstacle.style.top==='550px' && obstacle.style.right==='50px' && car.style.right==='50px')|| (obstacle.style.top==='550px' && obstacle.style.left==='50px' && car.style.left==='50px')){
    obstacle.style.animationName='';
}