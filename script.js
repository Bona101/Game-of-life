let id = 0;
let end = true;
const bell = document.querySelectorAll(".cell");
var index = 0;
let play = document.querySelector("#play");
let stop = document.querySelector("#stop");
let count = 0;
var neighbours = [];
var state = [];

for (i = 0; i < bell.length; i++){
    bell[i].addEventListener("click", function() {
        this.classList.toggle("live");
    })
}

function game() {
    state = [];
    for (i = 101; i < bell.length - 101; i++){
        if (bell[i].classList.contains("live")){

            if(bell[i+1].classList.contains("live")){
                count++;
            }
            if(bell[i-1].classList.contains("live")){
                count++;
            }
            if(bell[i+99].classList.contains("live")){
                count++;
            }
            if(bell[i+100].classList.contains("live")){
                count++;
            }
            if(bell[i+101].classList.contains("live")){
                count++;
            }
            if(bell[i-99].classList.contains("live")){
                count++;
            }
            if(bell[i-100].classList.contains("live")){
                count++;
            }
            if(bell[i-101].classList.contains("live")){
                count++;
            }
            if (count === 2 || count === 3){
               state.push(1);

            }
            else {
                state.push(0);
            }
            
        }

        else {

            if(bell[i+1].classList.contains("live")){
                count++;
            }
            if(bell[i-1].classList.contains("live")){
                count++;
            }
            if(bell[i+99].classList.contains("live")){
                count++;
            }
            if(bell[i+100].classList.contains("live")){
                count++;
            }
            if(bell[i+101].classList.contains("live")){
                count++;
            }
            if(bell[i-99].classList.contains("live")){
                count++;
            }
            if(bell[i-100].classList.contains("live")){
                count++;
            }
            if(bell[i-101].classList.contains("live")){
                count++;
            }
            if (count === 3){
                state.push(1);
            }
            else {
                state.push(0);
            }

        }
        count = 0;
    }
    for (i = 0; i < state.length; i++){
        if (state[i] === 1){
            bell[i+101].classList.add("live");
        }
        else {
            bell[i+101].classList.remove("live");
        }
    }
}

play.addEventListener("click", function (){
    id = setInterval(function (){
        let i = 0;
        while (i<bell.length){
            if (bell[i].classList.contains("live")){
                end = false;
                break;
            }
            i++;
        }
        if(end){
            clearInterval(id);
        }
        game();
        end = true;
    }, 100);
});

stop.addEventListener("click", function (){
    clearInterval(id);
})