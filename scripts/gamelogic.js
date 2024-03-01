const car =document.querySelector(".car");
const musicbtn = document.querySelector(".music_off");
const musicbtnimg=document.querySelector(".music");
const musicbgfile=document.querySelector(".mainbg");
const obstacle=document.querySelector(".obstacle");
const score=document.querySelector(".score");
const scoreplus=new Audio('music/sound effects/coin.mp3');
const clickmusic=new Audio('music/sound effects/click.mp3');
const btn=document.querySelectorAll("button");

let scoring=true;
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
btn.forEach((button)=>{
    button.addEventListener("click",()=>{
    clickmusic.play();
})})
var animationIterations = 0;

obstacle.addEventListener('animationiteration', () => {
    animationIterations++;
    score.textContent=("Score :" + animationIterations);
    if(scoring===true){
        scoreplus.play();
    }
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


console.log(obstacle.style.top);
if((obstacle.style.top==='550px' && obstacle.style.right==='50px' && car.style.right==='50px')|| (obstacle.style.top==='550px' && obstacle.style.left==='50px' && car.style.left==='50px')){
    obstacle.style.animationName='';
}
musicbtn.addEventListener("click",()=>{
    if (musicbtnimg.getAttribute("src")==="styles/volume-up.png") {
        musicbtnimg.setAttribute("src","styles/no-sound.png");
        musicbgfile.setAttribute("src"," ");
        scoring=false;
    }
    else{
        musicbtnimg.setAttribute("src","styles/volume-up.png");
        musicbgfile.setAttribute("src","music/hill-climb-racing_1.mp3");
        scoring=true;
    }
})