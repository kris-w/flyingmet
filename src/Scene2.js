class Scene2 extends Phaser.Scene{
	constructor(){
		super("playGame");
	}
	
	create(){
		//create background
		this.background = this.add.tileSprite(0,0,config.width, config.height,"background");
		this.background.setOrigin(0,0);
		
		//create met
		this.met = this.add.sprite(config.width/2-50,config.height /2, "met");
		this.anims.create({
			key: "met_anim",
			frames: this.anims.generateFrameNumbers("met"),
			frameRate:8,
			repeat:-1
		});
		this.met.play("met_anim");
		
		//create a pengu
		this.pengu = this.add.sprite(config.width,config.height /2, "pengu");
		this.anims.create({
			key: "pengu_anim",
			frames: this.anims.generateFrameNumbers("pengu"),
			frameRate:8,
			repeat:-1
		});
		this.pengu.play("pengu_anim");				
		
		this.anims.create({
			key:"explosion1_anim",
			frames: this.anims.generateFrameNumbers("explosion1"),
			frameRate:8,
			repeat:0,
			hideOnComplete:true
		});
		
		//this.add.text(20,20, "Playing game", {font: "25px Arial", fill:"yellow"});
	}
	
	update(){
		this.background.tilePositionX+=2;
		this.moveEnemy(this.pengu,1);
		
		
	}

	destroyEnemy(enemy){
		enemy.setTexture("explosion1");
		enemy.play("explosion1_anim");
	}
	moveEnemy(enemy,speed){
		if (enemy.x < 0){
			this.destroyEnemy(enemy);
		}
		else{
			enemy.x-= speed;
		}

	}
	

}