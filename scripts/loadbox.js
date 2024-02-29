const musicbtn = document.querySelector(".music_off");
const musicbtnimg=document.querySelector(".music")
const musicbgfile=document.querySelector(".mainbg");
const letsgobtn =document.querySelector(".start_button");
const howtoplaybtn=document.querySelector(".howtoplay");
const tutbox = document.querySelector(".tutorial");
musicbtn.addEventListener("click",()=>{
    if (musicbtnimg.getAttribute("src")==="styles/volume-up.png") {
        musicbtnimg.setAttribute("src","styles/no-sound.png");
        musicbgfile.setAttribute("src"," ");
    }
    else{
        musicbtnimg.setAttribute("src","styles/volume-up.png");
        musicbgfile.setAttribute("src","music/hill-climb-racing_1.mp3");
    }
})
letsgobtn.addEventListener("click",()=>{
    window.location.href="index2.html";
})
console.dir(tutbox);
howtoplaybtn.addEventListener("click",()=>{
    if (tutbox.style.display==="flex") {
        tutbox.style.display="none";
    } else {
        tutbox.style.display="flex";
    }
})
letsgobtn.addEventListener("click",()=>{
    window.location.href="index2.html";
})

