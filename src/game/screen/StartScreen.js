import * as PIXI from 'pixi.js';
import TweenLite from 'gsap';
import config  from '../../config';
import utils  from '../../utils';
import Screen from '../../screenManager/Screen'

export default class StartScreen extends Screen{
	constructor(label){
		super(label);

		let shape = PIXI.Sprite.fromFrame('big-button-up.png');
		shape.anchor.set(0.5);
		this.startButton = new PIXI.Container();
        //this.shape = new PIXI.Graphics().beginFill(0).drawCircle(0,0,80);
        this.startButton.addChild(shape)
        
        
        this.startButton.interactive = true;
        this.addChild(this.startButton)


        shape = PIXI.Sprite.fromFrame('big-button-up.png');
		shape.anchor.set(0.5);
		this.teamButton = new PIXI.Container();
        //this.shape = new PIXI.Graphics().beginFill(0).drawCircle(0,0,80);
        this.teamButton.addChild(shape)
        
        
        this.teamButton.interactive = true;
        this.addChild(this.teamButton)


        this.currentTeamData = GAME_DATA.getMyTeamData();
        // this.brandTeamSprite = PIXI.Sprite.fromFrame('seriea/'+this.currentTeamData.brand);
        this.brandTeamSprite = PIXI.Sprite.fromFrame('seriea/gremio.png');
		this.brandTeamSprite.anchor.set(0.5);
		this.brandTeamSprite.scale.set(0.5);
		this.teamButton.addChild(this.brandTeamSprite)

        shape = PIXI.Sprite.fromFrame('big-button-up.png');
		shape.anchor.set(0.5);
		this.fieldButton = new PIXI.Container();
        //this.shape = new PIXI.Graphics().beginFill(0).drawCircle(0,0,80);
        this.fieldButton.addChild(shape)
        
        
        this.fieldButton.interactive = true;
        this.addChild(this.fieldButton)

        this.screenLabel = new PIXI.Text(this.label,{font : '32px robotoblack', fill : 0xFFFFFF, align : 'right'});
        this.addChild(this.screenLabel)

        this.addEvents();


	}
	updateTeamButton(){
		this.currentTeamData = GAME_DATA.getMyTeamData();
		this.brandTeamSprite.texture = PIXI.Texture.fromFrame('seriea/'+this.currentTeamData.brand);
	}
	build(){
		super.build();

		this.startButton.x = config.width / 2;
		this.startButton.y = config.height / 2;
		this.teamButton.x = config.width - 50;
		this.teamButton.y = 50;
		this.fieldButton.x = config.width / 2 - 120;
		this.fieldButton.y = config.height / 2 - 50;
	}

	destroy(){

	}

	startGame(){

		TweenLite.to(this.fieldButton.scale, 0.3, {delay:0, x:0, y:0 });//ease:'easeInBack'});
		TweenLite.to(this.startButton.scale, 0.3, {delay:0.05, x:0, y:0});//ease:'easeInBack'});
		TweenLite.to(this.teamButton.scale, 0.3, {delay:0.1, x:0, y:0, //ease:'easeInBack', 
			onComplete:function(){
			this.screenManager.change('ChooseMatchScreen');
			// this.screenManager.change('GameScreen');
		}, onCompleteScope:this})
		
	}

	toTeamSelection(){
		TweenLite.to(this.fieldButton, 0.4, {delay:0, x:-config.width / 2 - 120});//ease:'easeInBack'});
		TweenLite.to(this.startButton, 0.4, {delay:0.1, x:-config.width / 2});//ease:'easeInBack'});
		TweenLite.to(this.teamButton, 0.4, {delay:0.2, x:-config.width / 2 + 120, //ease:'easeInBack', 
			onComplete:function(){
			this.screenManager.change('ChooseTeamScreen');
		}, onCompleteScope:this})
	}

	toFieldSlection(){
		TweenLite.to(this.fieldButton, 0.4, {delay:0.2, x:config.width + config.width / 2 - 120, //ease:'easeInBack', 
			onComplete:function(){
			this.screenManager.change('ChooseFieldScreen');
		}, onCompleteScope:this});
		TweenLite.to(this.startButton, 0.4, {delay:0.1, x:config.width + config.width / 2});//ease:'easeInBack'});
		TweenLite.to(this.teamButton, 0.4, {delay:0, x:config.width + config.width / 2 + 120})//ease:'easeInBack'})
	}
	destroy(){

	}

	update(delta){

	}

	transitionOut(nextScreen){
		super.transitionOut(nextScreen);
	}
	transitionIn(){

		super.transitionIn();
		this.updateTeamButton();

		console.log('TRANSITION IN');

		this.fieldButton.scale.set(0)
		this.startButton.scale.set(0)
		this.teamButton.scale.set(0)
		TweenLite.to(this.fieldButton.scale, 0.2, {delay:0.2, x:1, y:1});//, ease:'easeOutElastic'});
		TweenLite.to(this.startButton.scale, 0.2, {delay:0.3, x:1, y:1});//, ease:'easeOutElastic'});
		TweenLite.to(this.teamButton.scale, 0.2, {delay:0.4, x:1, y:1});//, ease:'easeOutElastic'});


	}
	
	removeEvents(){
		this.startButton.off('touchstart').off('mousedown');
		this.fieldButton.off('touchstart').off('mousedown');
		this.teamButton.off('touchstart').off('mousedown');
	}
	addEvents(){
		this.removeEvents();
		this.startButton.on('mousedown', this.startGame.bind(this)).on('touchstart', this.startGame.bind(this));
		this.teamButton.on('mousedown', this.toTeamSelection.bind(this)).on('touchstart', this.toTeamSelection.bind(this));
		this.fieldButton.on('mousedown', this.toFieldSlection.bind(this)).on('touchstart', this.toFieldSlection.bind(this));
	}
}