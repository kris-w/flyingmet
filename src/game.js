var config ={
	width:800,
	height:600,
	backgroundColor:0x000000,
	scene: [Scene1,Scene2,Scene3]
}
var game = new Phaser.Game(config);

var GameState = {
    function preload(){
	    
    }
    function create(){
	    
    }
    function update(){
	    
    }
};

game.state.add("GameState",GameState);
game.state.start("GameStates");