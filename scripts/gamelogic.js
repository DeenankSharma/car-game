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

// var obsheight=obstacle.getBoundingClientRect().height;
// var obswidth=obstacle.getBoundingClientRect().width;
// var carheight=car.getBoundingClientRect().height;
// var carwidth=car.getBoundingClientRect().width;
// var carx=car.getBoundingClientRect().x;
// var cary=car.getBoundingClientRect().y;
// var obsx=car.getBoundingClientRect().x;
// var obsy=car.getBoundingClientRect().y;
let turning=true;
let scoring=true;
document.addEventListener("keydown",(e)=>{
    if(e.key==="ArrowRight" && turning===true){
        car.style.right = "50px";
        car.style.left = '';
    }
    else if(e.key==="ArrowLeft" && turning===true){
        car.style.left = "50px";
        car.style.right = '';
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
        gameoverdiv.style.display="block";

    } else {
        obstacle.classList.remove("paused");
        division.classList.remove("paused");
    }
}

setInterval(getpositions, 500);
