class Form {
    constructor(){
      this.title = createElement('h3');
      this.input = createInput("NAME :");
      this.button = createButton("submit");
      this.greeting = createElement('h3');
      this.reset = createButton("RESET");
    }
    display(){
      this.title.html("Car Racing");
      this.title.position(displayWidth/2 - 100,100);
      this.input.position(displayWidth/2,300);
      this.button.position(displayWidth/2+50,400);
      this.reset.position(displayWidth-100 , 10);
      
      
      
      this.button.mousePressed(()=>{
        player.name = this.input.value();
        playerCount++
        player.index = playerCount ;
        player.updatePlayer(playerCount);
        player.updateName();
        console.log(player.name);
        this.input.hide();
        this.button.hide(); 
        this.greeting.html("Hello " + player.name);
        this.greeting.position(displayWidth/2,500);
     })
     this.reset.mousePressed(() =>{
       game.update(0);
       player.updatePlayer(0);
       Player.updateCarPos(0);
       database.ref('players').remove() ;
       location.reload();
     })

    }
    hide(){
      this.title.hide();
      this.input.hide();
      this.button.hide();
      this.greeting.hide();
    }

}