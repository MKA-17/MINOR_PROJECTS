let container = document.getElementById("container");
let boxes = document.getElementsByClassName("box");

let score = 0;
let scorepts = document.getElementById("scorepts");
let highscore = document.getElementById("highscore");
scorepts.innerHTML = "<h2><b> SCORE: 0</b></h2>";
highscore.innerHTML = "<h2><b> HIGHEST SCORE: " + localStorage.getItem("highst_score") + "</b></h2>";
//localStorage.clear();

if(localStorage.getItem("highst_score") === null)
{
    localStorage.setItem("highst_score", JSON.stringify(0));
       
}
console.log(localStorage.getItem("highst_score") === null)

const sound = new Audio("smashsound.mp3");


let arr = Array.from(boxes);

function run_game() {
    let random_box = Math.floor(Math.random() * boxes.length);
    boxes[random_box].innerHTML = '<img src="mole.jpg" alt="mole" style="height :60px;">';
    setTimeout(() => {

        boxes[random_box].innerHTML = '<img src="mole-hole.jpg" alt="mole" style="height :80px;">';


    }, 1000)

}


setInterval(() => {
    run_game();
    if (score > eval(localStorage.getItem("highst_score"))) {
        localStorage.setItem("highst_score", JSON.stringify(score));
        highscore.innerHTML = "<h2><b> HIGHEST SCORE: " + localStorage.getItem("highst_score") + "</b></h2>";

    }

    


}, 1000)

arr.forEach((Element, index) => {
    Element.addEventListener("click", () => {
        if (Element.innerHTML === '<img src="mole.jpg" alt="mole" style="height :60px;">') {
            score += 10;
            sound.play()
            scorepts.innerHTML = "<h2><b> SCORE: " + score + "</b></h2>";
            // console.log('score', score);
        }

    })
})