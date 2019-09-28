/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
https://github.com/rezakhan1/StudioCity_SassProject.git
*/
var score, roundNumber, activPlayer, gamePlaying;
init();

 document.querySelector('.btn-roll').addEventListener('click',function(){
     if(gamePlaying){
        var dice=Math.floor(Math.random()*6)+1;
    
     
        document.querySelector('.dice').style.display="block";
        document.querySelector('.dice').src='dice-'+dice+'.png';
   
       if(dice!==1){
              //1. add round number
          roundNumber+=dice;
          var diceNo= document.querySelector('#current-'+activPlayer).textContent=roundNumber;
          //console.log(diceNo)
   
       }
       else{
           nextPlayerTurn();
       }
     }
    
    
 })

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying)
    {
                    // console.log('Hold button is Clicked')
                    //1. Add score to global score
                    score[activPlayer]+=roundNumber;
                    document.querySelector('#score-'+activPlayer).textContent=score[activPlayer];
                    //2. Next Palyyer turn
                    
                    //3. Make winner
                    if(score[activPlayer]>=20){
                    document.getElementById('name-'+activPlayer).textContent='Winner!';
                    document.querySelector('.dice').style.display="none";
                    document.querySelector('.player-'+activPlayer+'-panel').classList.add('winner');
                    document.querySelector('.player-'+activPlayer+'-panel').classList.remove('active');
                    gamePlaying=false
                    }
                    else{
                    nextPlayerTurn();
                    }
    }
  
   
});
 
document.querySelector('.btn-new').addEventListener('click',init)


function init(){
    score = [0, 0];
    activPlayer = 0;
    roundNumber = 0;
    document.querySelector('.dice').style.display = 'none';
    gamePlaying=true;
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}
function nextPlayerTurn(){
    activPlayer===0?activPlayer=1:activPlayer=0;
    roundNumber=0;
    document.getElementById('current-1').textContent='0'
    document.getElementById('current-0').textContent='0'
 
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display="none";
 
}
