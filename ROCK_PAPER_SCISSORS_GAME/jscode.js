let possble_events = ["ROCK", "PAPER", "SCISSORS"]
let player_choice_dispaly = document.getElementById("player");
let computer_choice_dispaly = document.getElementById("computer");
let player_choice = document.getElementsByClassName("playerchoice");
let computer_Score = document.getElementById("compscore");
let player_Score = document.getElementById("playscore");
let game_result = document.getElementById("gameresult");//.innerHTML="gfd"
//SCORES
let c = 0;
let p =0;


function GetVal(e){
player_choice_dispaly.innerHTML = (e.value );
Random_event_generator();
comparison();
//console.log(player_choice_dispaly.innerHTML === computer_choice_dispaly.innerHTML);
}

function Random_event_generator()
{
let val = Math.floor(Math.random()*player_choice.length);
computer_choice_dispaly.innerHTML = possble_events[val]; 
}

function comparison()
{
if(player_choice_dispaly.innerHTML === computer_choice_dispaly.innerHTML)
{
     game_result.innerHTML = "IT'S A DRAW!";

}

else if(player_choice_dispaly.innerHTML === "ROCK" && computer_choice_dispaly.innerHTML === "SCISSORS" )
{
    game_result.innerHTML = "PLAYER WINS!";
    p += 1;
}
else if(player_choice_dispaly.innerHTML === "ROCK" && computer_choice_dispaly.innerHTML === "PAPER" )
{
    game_result.innerHTML = "COMPUTER WINS!";
    c += 1;
}
else if(player_choice_dispaly.innerHTML === "PAPER" && computer_choice_dispaly.innerHTML === "ROCK" )
{
    game_result.innerHTML = "PLAYER WINS!";
    p += 1;
}
else if(player_choice_dispaly.innerHTML === "PAPER" && computer_choice_dispaly.innerHTML ===  "SCISSORS")
{
    game_result.innerHTML = "COMPUTER WINS!";
    c += 1;
}

else if(player_choice_dispaly.innerHTML === "SCISSORS" && computer_choice_dispaly.innerHTML ===  "ROCK")
{
    game_result.innerHTML = "COMPUTER WINS!";
    c += 1;
}
else if(player_choice_dispaly.innerHTML === "SCISSORS" && computer_choice_dispaly.innerHTML ===  "PAPER")
{
    game_result.innerHTML = "PLAYER WINS!";
    p += 1;
}
player_Score.innerHTML = p;
computer_Score.innerHTML = c;


}
