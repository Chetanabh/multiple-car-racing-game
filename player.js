class Player {
    constructor(){
        this.name = null ; 
        this.index = null ;
        this.distance = 0 ;
        this.rank = 0 ;
    }
    getPlayer(){
        var count = database.ref('playerCount');
        count.on("value",(data) => {
            playerCount = data.val();
            console.log(playerCount);

        })
    }
    updatePlayer(count){
     database.ref('/').update({
         playerCount : count 
     });
    
    }
    updateName(){
        var upName = "players/player"+ this.index;
        database.ref(upName).set({
            Name : this.name ,
            distance : this.distance 
        });
        
    }
    updateRank(rank,index){
        var upRank = "players/player" + index ;
        database.ref(upRank).update({
            Rank : rank 
        })
    }
    getCarPosition(){
        var getValue = database.ref('CarPosition');
        getValue.on("value",(data) =>{
            this.rank = data.val();
        });
    }
    static updateCarPos(rank){
        database.ref('/').update({
            CarPosition : rank 
        })
    }
    
    static fetchName(){
        var fetch = database.ref('players');
        fetch.on("value",(data) =>{
           allPlayers = data.val();
           //console.log(allPlayers);
           
        })
    }

}