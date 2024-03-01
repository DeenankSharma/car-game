const homescreen=document.querySelector(".homescreen");
const reset=document.querySelector(".reset");
const input_name=document.querySelector("#player_name");
const scorevalue=document.querySelector(".score");
const submit=document.querySelector(".submit");
const stats=document.querySelector(".stats");

homescreen.addEventListener("click",()=>{
    window.location.href="index.html";
});

reset.addEventListener("click",()=>{
    window.location.href="index2.html";
});

let player_number = 0; 

function storeinls() {
    let player = {
        Name: input_name.value,
        Score: scorevalue.textContent.slice(-2)
    };
    let player_serialized = JSON.stringify(player);

    localStorage.setItem(input_name.value, player_serialized);
    player_number++;
}

submit.addEventListener("click",storeinls); 
stats.addEventListener("click",()=>{
    console.log(localStorage);
})