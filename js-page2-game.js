// Define Variable

var player = ""
var com_choose = ""
var bg_choose_com = ""
var bg_choose_player = ""


// Logic for Player's Choice

function choose(element){
    player = (element.getAttribute("value"));
    com = Math.floor(Math.random() * 101);

    if (player == "ROCK"){
        bg_choose_player = document.getElementById("player-batu");
        bg_choose_player.style.backgroundColor = "silver";
        document.getElementById("player-batu").style.pointerEvents = 'none';
        document.getElementById("player-kertas").style.pointerEvents = 'none';
        document.getElementById("player-gunting").style.pointerEvents = 'none';
        
        

    }else if(player == "SCISSORS"){
        bg_choose_player = document.getElementById("player-gunting");
        bg_choose_player.style.backgroundColor = "silver";
        document.getElementById("player-batu").style.pointerEvents = 'none';
        document.getElementById("player-kertas").style.pointerEvents = 'none';
        document.getElementById("player-gunting").style.pointerEvents = 'none';
        
        

    }else {
        bg_choose_player = document.getElementById("player-kertas");
        bg_choose_player.style.backgroundColor = "silver";
        document.getElementById("player-batu").style.pointerEvents = 'none';
        document.getElementById("player-kertas").style.pointerEvents = 'none';
        document.getElementById("player-gunting").style.pointerEvents = 'none';
        
        
    }


    //Computer's Choice in respon to player's choice

    if (com <= 33 && com >0) {
        console.log("Computer choose ROCK " + "value " + com);
        com_choose = "ROCK"
        bg_choose_com = document.getElementById("com-batu");
        bg_choose_com.style.backgroundColor = "silver";
        
    } else if (com >33 && com<=66){
        console.log("Computer choose SCISSORS " + "value " + com);
        com_choose = "SCISSORS"
        bg_choose_com = document.getElementById("com-gunting");
        bg_choose_com.style.backgroundColor = "silver";
       
    } else {
        console.log("Computer choose PAPER " + "value " + com);
        com_choose = "PAPER"
        bg_choose_com = document.getElementById("com-kertas");
        bg_choose_com.style.backgroundColor = "silver";        
    }

    

    //Game Logic and Selection

    if (player == com_choose){
        document.getElementById("output-result").classList.remove('middle-versus');
        document.getElementById("output-result").classList.add('DRAW');
        
    } else if (
        (player == "ROCK" && com_choose == "SCISSORS")  
        || (player == "PAPER" && com_choose == "ROCK")
        || (player == "SCISSORS" && com_choose == "PAPER")
        ){
        document.getElementById("output-result").classList.remove('middle-versus');
        document.getElementById("output-result").classList.add('PlayerWin');
        
    } else {
        document.getElementById("output-result").classList.remove('middle-versus');
        document.getElementById("output-result").classList.add('ComputerWin');
       
    }
} 


// Logic for Reload and Refresh Game

function reload(element){
        document.getElementById("player-gunting").style.pointerEvents = 'auto';
        document.getElementById("player-kertas").style.pointerEvents = 'auto';
        document.getElementById("player-batu").style.pointerEvents = 'auto';

        document.getElementById("player-batu").style.backgroundColor = "#9C835F";
        document.getElementById("player-gunting").style.backgroundColor = "#9C835F";
        document.getElementById("player-kertas").style.backgroundColor = "#9C835F";
        
        document.getElementById("com-batu").style.backgroundColor = "#9C835F";
        document.getElementById("com-gunting").style.backgroundColor = "#9C835F";
        document.getElementById("com-kertas").style.backgroundColor = "#9C835F";

        document.getElementById("output-result").classList.remove('DRAW');
        document.getElementById("output-result").classList.remove('PlayerWin');
        document.getElementById("output-result").classList.remove('ComputerWin');

        document.getElementById("output-result").classList.add('middle-versus');
        
   
    }