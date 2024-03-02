const musicbtn = document.querySelector(".music_off");
const musicbtnimg=document.querySelector(".music")
const musicbgfile=document.querySelector(".mainbg");
const letsgobtn =document.querySelector(".start_button");
const howtoplaybtn=document.querySelector(".howtoplay");
const tutbox = document.querySelector(".tutorial");
const clickmusic=new Audio('music/sound effects/click.mp3');
const btn=document.querySelectorAll("button");


let scoring=true;
btn.forEach((button)=>{
    button.addEventListener("click",()=>{
    clickmusic.play();
})})
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
letsgobtn.addEventListener("click",()=>{
    console.log("Let's go button clicked!");
        window.location.href="index2.html";



})

howtoplaybtn.addEventListener("click",()=>{
    if (tutbox.style.display==="flex") {
        tutbox.style.display="none";
    } else {
        tutbox.style.display="flex";
    }
})
