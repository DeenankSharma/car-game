const car =document.querySelector(".car");
const musicbtn = document.querySelector(".music_off");
const musicbtnimg=document.querySelector(".music");
const musicbgfile=document.querySelector(".mainbg");
const obstacle=document.querySelector(".obstacle");
const score=document.querySelector(".score");
const scoreplus=new Audio('music/sound effects/coin.mp3');
const clickmusic=new Audio('music/sound effects/click.mp3');
const btn=document.querySelectorAll("button");
const division=document.querySelector(".division");
const gameoverdiv=document.querySelector(".gameoverdiv");
const crash =new Audio('music/crash-7075.mp3');
const drive=new Audio('music/car-changing-gears-sound-188962.mp3')
const turn =new Audio('music/mixkit-arcade-retro-changing-tab-206.mp3');
const gameoverdivmusic = new Audio('music/mixkit-little-piano-game-over-1944.mp3');

// var obsheight=obstacle.getBoundingClientRect().height;
// var obswidth=obstacle.getBoundingClientRect().width;
// var carheight=car.getBoundingClientRect().height;
// var carwidth=car.getBoundingClientRect().width;
// var carx=car.getBoundingClientRect().x;
// var cary=car.getBoundingClientRect().y;
// var obsx=car.getBoundingClientRect().x;
// var obsy=car.getBoundingClientRect().y;
let hascrashed=false;
let turning=true;
let scoring=true;


drive.play();
drive.loop=true;

document.addEventListener("keydown",(e)=>{
    if(e.key==="ArrowRight" && turning===true){
        car.style.right = "50px";
        car.style.left = '';
        console.log('car is turning right');
        turnsound();
    }
    else if(e.key==="ArrowLeft" && turning===true){
        car.style.left = "50px";
        car.style.right = '';
        console.log('car is turning left');
        turnsound();
    }
})
btn.forEach((button)=>{
    button.addEventListener("click",()=>{
    clickmusic.play();
})})
var animationIterations = 0;
musicbtn.addEventListener("click",()=>{
    if (musicbtnimg.getAttribute("src")==="styles/volume-up.png") {
        musicbtnimg.setAttribute("src","styles/no-sound.png");
        musicbgfile.setAttribute("src","");
        scoring=false;
    }
    else{
        musicbtnimg.setAttribute("src","styles/volume-up.png");
        musicbgfile.setAttribute("src","music/hill-climb-racing_1.mp3");
        scoring=true;
    }
})
obstacle.addEventListener('animationiteration', () => {
    animationIterations++;
    score.textContent=("Score : " + animationIterations);
    if(scoring===true){
        scoreplus.play();
    }
    
    var x=Math.floor(Math.random()*2);
    if (x===1) {
        obstacle.style.right = '50px';
        obstacle.style.left = '';
        
    } else if (x===0) {
        obstacle.style.left = '50px';
        obstacle.style.right = '';
    }
});
// function collide(){
//     const obsheight=obstacle.getBoundingClientRect().height;
//     const elem=document.elementFromPoint(707,740);
//     console.log(elem);
//     if(elem.className==="obstacle"){
//         obstacle.style.animation='none';
//         division.style.animation='none';
//         obstacle.style.transform="translateY(740px)"
//     }
// }
// setInterval(collide,100);

// function getpositions(){
//     var obsheight=obstacle.getBoundingClientRect().height;
//     var obswidth=obstacle.getBoundingClientRect().width;
//     var carheight=car.getBoundingClientRect().height;
//     var carwidth=car.getBoundingClientRect().width;
//     var carx=car.getBoundingClientRect().x;
//     var cary=car.getBoundingClientRect().y;
//     var obsx=car.getBoundingClientRect().x;
//     var obsy=car.getBoundingClientRect().y;
//     if((cary<=(obsy+obsheight)) && carx===obsx){
//         obstacle.classList.add("paused");
//         division.classList.add("paused");
//     }
// }
// setInterval(getpositions,500);

function getpositions() {
    var obsheight = obstacle.getBoundingClientRect().height;
    var obswidth = obstacle.getBoundingClientRect().width;
    var carheight = car.getBoundingClientRect().height;
    var carwidth = car.getBoundingClientRect().width;
    var carleft = car.getBoundingClientRect().left;
    var cartop = car.getBoundingClientRect().top;
    var obsleft = obstacle.getBoundingClientRect().left;
    var obstop = obstacle.getBoundingClientRect().top;
    if (
        cartop<=(obstop+obsheight) &&
        obstop<=(cartop+carheight) &&
        carleft<=(obsleft+obswidth) &&
        obsleft<=(carleft+carwidth)
    ) {
        obstacle.classList.add("paused");
        division.classList.add("paused");
        turning=false;
        if(hascrashed===false){
            soundflow();
        }
    } else {
        obstacle.classList.remove("paused");
        division.classList.remove("paused");
        hascrashed=false;
    }
}

setInterval(getpositions, 500);

const soundflow= async() =>{
    await crash.play();
    hascrashed=true;
    drive.pause();
    musicbgfile.pause();
    setTimeout(()=>{
        gameoverdivmusic.play();
        gameoverdiv.style.display="block";
    },1000)
}
const turnsound = async()=>{
    await turn.play();
}