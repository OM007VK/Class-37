class game{
    constructor()
    {}
getGameState()
{
    gamerefence=database.ref("GameState");
    gamerefence.on("value",function(data){gameState=data.val()})
}
update(state)
  {
   database.ref("/").update({gameState :state})

  }
startGame(){
   if (gameState===0) 
   {
    player1 = new player();
    player1.getPlayerCount();
    form1 = new form();
    form1.display();
    
   }

}
  play()
  {
    form1.hideForm()
    textSixe(30);
    text("Game Start", 120, 100)
    textYPosition = 130;
    player.getPlayerInfo();
    if(allPlayers!==undefined)
    {
     for (plr in allPlayers) 
     {
        if(plr=== "player" + player1.index)
        {
          fill("red")
        }
        else
        {
          fill("black")
        }
      textSize(15);
      text(allPlayers[plr].name + " : " + allPlayers[plr].distance, 120,textYPosition)
      textYPosition = textYPosition + 20;
     }
    }

    if(keyIsDown(UP_ARROW) && player1.index !==null)
    {
      player1.distance = player1.distance + 50;
      player1.update();
    }
  }





}

  

