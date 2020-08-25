var config ={
	width:256,
	height:240,
	backgroundColor:0x000000,
	scene: [Scene1,Scene2,Scene3],
	pixelArt: true,
	zoom:3,
	physics: {
		default: "arcade",
		arcade:{
			debug:false
		}
	}
	
}
var game = new Phaser.Game(config);

/*var GameState = {
    function preload(){
	    
    }
    function create(){
	    
    }
    function update(){
	    
    }
};

game.state.add("GameState",GameState);
game.state.start("GameStates");*/