const musicbtn = document.querySelector(".music_off");
const musicbtnimg=document.querySelector(".music")
const musicbgfile=document.querySelector(".mainbg");
const letsgobtn =document.querySelector(".start_button");
console.dir(musicbgfile)
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

