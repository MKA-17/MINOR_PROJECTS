let turn = 'X';
let tiles = document.getElementsByClassName("tiles");
//let tilecontent = document.getElementsByClassName("tilecontent");


//ChangeTurn
let change_turn = (turn)=>
{
 
    return turn ==='X'?'O':'X'
}
let boxes = document.getElementsByClassName("tiles");

//WIN_CONDITIONs
function win()
{
    
    if(boxes[0].innerHTML === boxes[1].innerHTML && boxes[0].innerHTML === boxes[2].innerHTML && (boxes[0].innerHTML=boxes[1].innerHTML=boxes[2].innerHTML) != '')
    {
        
        return true;
    }
    else if(boxes[3].innerHTML === boxes[4].innerHTML && boxes[3].innerHTML === boxes[5].innerHTML && (boxes[3].innerHTML=boxes[4].innerHTML=boxes[5].innerHTML) != '')
    {
        
        return true;
    }
    else if(boxes[6].innerHTML === boxes[7].innerHTML && boxes[6].innerHTML === boxes[8].innerHTML && (boxes[6].innerHTML=boxes[7].innerHTML=boxes[8].innerHTML) != '')
    {
        
        return true;
    }
    else if(boxes[0].innerHTML === boxes[3].innerHTML && boxes[0].innerHTML === boxes[6].innerHTML && (boxes[3].innerHTML=boxes[0].innerHTML=boxes[6].innerHTML) != '')
    {
        
        return true;
    }
    else if(boxes[1].innerHTML === boxes[4].innerHTML && boxes[1].innerHTML === boxes[7].innerHTML && (boxes[1].innerHTML=boxes[4].innerHTML=boxes[7].innerHTML) != '')
    {
        
        return true;
    }
    else if(boxes[2].innerHTML === boxes[5].innerHTML && boxes[2].innerHTML === boxes[8].innerHTML && (boxes[2].innerHTML=boxes[5].innerHTML=boxes[8].innerHTML) != '')
    {
        
        return true;
    }
    else if(boxes[0].innerHTML === boxes[4].innerHTML && boxes[0].innerHTML === boxes[8].innerHTML && (boxes[0].innerHTML=boxes[4].innerHTML=boxes[8].innerHTML) != '')
    {
        
        return true;
    }
    else if(boxes[2].innerHTML === boxes[4].innerHTML && boxes[2].innerHTML === boxes[6].innerHTML && (boxes[2].innerHTML=boxes[4].innerHTML=boxes[6].innerHTML) != '')
    {
        
        return true;

    }
   

    
}

console.log(tiles.length);


flag = 0;
let info = document.getElementsByClassName("info");

let result_box = document.getElementsByClassName("Result");
let player_turn = document.getElementsByClassName("turn");
function box(e)
{   
    flag  += 1;
    e.innerHTML = turn;
    e.onclick = null;
    console.log(e);
    result =win();
    if(result)
    {

        result_box[0].innerHTML = turn +" has won";
        gameover();
        disabling();
        return;
    
    }
    else if(flag == 9 ){
        result_box[0].innerHTML = "It's a draw";
        gameover()
        disabling();
        flag = 0;
        return;
        
    }
    turn = change_turn(turn);
    player_turn[0].innerHTML = '<b>'+"PLAYER "+turn+" TURN "+'</b>';
    
    click_audio();
} 

/*function cleaning()
{
    for(let i =0 ; i < tiles.length ; i++)
    {
        tiles[i].innerHTML = " ";
    }

}*/

function disabling()
{
    for(let i =0 ; i < tiles.length ; i++)
    {
        tiles[i].onclick = null;
    }
}
/*setInterval(()=>{
    for(i=0;i<boxes.length;i++)
    {console.log(boxes[i].innerHTML)};
},10000);
*/
//RESULT BOX
function game_result(x){
    result_box[0].innerHTML = x +" has won";
}
function click_audio()
{
    var sound = new Audio("click.wav");
    sound.play()
}

function gameover()
{
    var sound = new Audio("gameover.wav");
    sound.play()
}