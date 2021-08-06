class Game {
    constructor(){
        
    }
    getState(){
        var state = database.ref('gameState');
        state.on("value",(data) => {
            gameState = data.val();
            console.log(gameState);

        })
    }
    update(state){
     database.ref('/').update({
         gameState : state 
     });

    }
    Start(){
        form = new Form() ;
        form.display();

        player = new Player() ;
        player.getPlayer();
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);
        car1.addImage(car1Img);
        car2.addImage(car2Img);
        car3.addImage(car3Img);
        car4.addImage(car4Img);

        cars =[car1,car2,car3,car4]
    }
     play(){
         background("#c68767");

        form.hide();
        text("game started",250,250);
        Player.fetchName();
        player.getCarPosition();
        var index = 0 ;
        var pos = 100
        
        if(allPlayers !== undefined){
            var x = 200 ;
            var y 
        image(trackImg,0,-displayHeight*4,displayWidth + 50,displayHeight*5);
            for (var plr in allPlayers){
            index = index +1
            x = x + 200 ;
            y = displayHeight - allPlayers[plr].distance
            cars[index - 1].x = x ;
            cars[index - 1].y = y ;
            //console.log(plr);
            pos = pos +100
            if(plr === "player" + player.index){ 
                //cars[index - 1].shapeColor = "red" ;
                fill("yellow")
                stroke(3);
                ellipse(x,y,50);
                camera.position.x = displayWidth/2 ;
                camera.position.y = cars[index - 1].y ;
            }
            textSize(20);
            //text("all",200,100);
            //text(allPlayers[plr].Name,250,pos);
            
        }
    }
        if(keyIsDown(UP_ARROW) && player.index !== null ){
            player.distance = player.distance + 15 ;
            player.updateName();
            //console.log(player.distance);
        }
        if(player.distance > 3690){
           gameState = 2 ;
           player.rank += 1 ;
           Player.updateCarPos(player.rank);
           player.updateRank(player.rank,player.index);
           console.log(player.rank);
        }
        
     
    drawSprites();
    }
    end(){
        var pos = 0 ;
        var place = 0 ;
        if(allPlayers !== undefined){
            var winner = createElement('h3');
            for(var plr in allPlayers){
              //pos = pos + 100 ;
              if(plr == "player" + player.index){
                var refVar = database.ref('players/player'+player.index+'/Rank')
                refVar.on("value",(data) => {
                    place = data.val();
                    console.log("rank ="+place);
                })
                
              }
            }
            winner.style('font-size','40px');
            winner.style('font-color','black');
            winner.html("YOUR RANK :" + place);
            winner.position(displayWidth/2,100);
            
            /*fill("black");
            textSize(20);
            text("YOUR RANK :"+ place,displayWidth/2,100)*/

        }
        //console.log(gameState);
    }

}