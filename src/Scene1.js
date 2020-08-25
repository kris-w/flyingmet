class Scene1 extends Phaser.Scene{
	constructor(){
		super("bootGame");
	}
	
	preload(){
		this.load.image("background","assets/bg1.png");
		
		this.load.spritesheet("met","assets/met.png",{
			frameWidth:27,
			frameHeight:25
		});
		this.load.spritesheet("pengu","assets/pengu.png",{
			frameWidth:24,
			frameHeight:15
		});		
		this.load.spritesheet("explosion1","assets/explosion1.png",{
			frameWidth:30,
			frameHeight:30
		});				
	}
	
	create(){
		this.add.text(20,20, "Loading game...");
		this.scene.start("playGame");
	}
	
}