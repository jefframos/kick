import * as PIXI from 'pixi.js';
import TweenLite from 'gsap';
import config  from '../../config';
import utils  from '../../utils';
import Screen from '../../screenManager/Screen'

export default class ATLStartScreen extends Screen{
	constructor(label){
		super(label);

		let shape = PIXI.Sprite.fromFrame('big-button-up.png');
		shape.anchor.set(0.5);
		this.startButton = this.getRoundedButton()//new PIXI.Container();
        //this.shape = new PIXI.Graphics().beginFill(0).drawCircle(0,0,80);
        // this.startButton.addChild(shape)
        this.startButton.label.text = 'Jogar'
        
        this.addChild(this.startButton.container)


        shape = PIXI.Sprite.fromFrame('big-button-up.png');
		shape.anchor.set(0.5);
		this.teamButton = new PIXI.Container();
        //this.shape = new PIXI.Graphics().beginFill(0).drawCircle(0,0,80);
        this.teamButton.addChild(shape)
        
        
        this.teamButton.interactive = true;
        this.addChild(this.teamButton)


        this.currentTeamData = GAME_DATA.getMyTeamData();
        this.brandTeamSprite = PIXI.Sprite.fromFrame('seriea/'+this.currentTeamData.brand);
		this.brandTeamSprite.anchor.set(0.5);
		this.brandTeamSprite.scale.set(0.5);
		this.teamButton.addChild(this.brandTeamSprite)

        shape = PIXI.Sprite.fromFrame('big-button-up.png');
		shape.anchor.set(0.5);
		this.fieldButton = new PIXI.Container();
        //this.shape = new PIXI.Graphics().beginFill(0).drawCircle(0,0,80);
        this.fieldButton.addChild(shape)
        
        
        this.fieldButton.interactive = true;
        // this.addChild(this.fieldButton)

        this.screenLabel = new PIXI.Text('ATL GRENAL\nLOGO AQUI',{font : '32px robotoblack', fill : 0xFFFFFF, align : 'center'});
        this.addChild(this.screenLabel)

        this.screenLabel.x = config.width / 2 - this.screenLabel.width / 2
        this.screenLabel.y = 60

        this.addEvents();

        this.playerContainer = new PIXI.Container()

        this.playerImage = PIXI.Sprite.fromFrame('gremista.png');
		this.playerImage.anchor.set(0.5);
		this.playerImage.scale.set(0.75);

		this.playerContainer.addChild(this.playerImage);
		this.playerContainer.x = config.width / 2;
		this.playerContainer.y = config.height / 2;

		this.playerLabel = new PIXI.Text('Duda Garbe',{font : '24px robotoblack', fill : 0xFFFFFF, align : 'center'});
		this.playerContainer.addChild(this.playerLabel);
		this.playerLabel.x = - this.playerLabel.width/2
		this.playerLabel.y = - this.playerLabel.height/2 - this.playerContainer.height / 2

		this.addChild(this.playerContainer)


	}
	getRoundedButton(size = {w:150, h:60}){
		let teamConfirmButtonContainer = new PIXI.Container()
		let teamConfirmButton = new PIXI.Graphics().beginFill(0xFFFFFF).drawRoundedRect(0,0,size.w, size.h, GRAPHICS_DATA.roundedCorner)
		teamConfirmButtonContainer.addChild(teamConfirmButton)
		// this.teamContainer.addChild(teamConfirmButtonContainer)

		teamConfirmButtonContainer.x = size.w / 2 - teamConfirmButtonContainer.width / 2
		teamConfirmButtonContainer.y = size.h - teamConfirmButtonContainer.height - 20
		
		let buttonLabel = new PIXI.Text('CHANGE',{font : '32px robotoregular', fill : 0x000000, align : 'right'});
        teamConfirmButtonContainer.addChild(buttonLabel)

		teamConfirmButtonContainer.interactive = true;
		teamConfirmButtonContainer.buttonMode = true;
		teamConfirmButtonContainer.pivot.set(teamConfirmButtonContainer.width / 2, teamConfirmButtonContainer.height / 2)
		//teamConfirmButtonContainer.on('mousedown', this.onConfirmTeam.bind(this)).on('touchstart', this.onConfirmTeam.bind(this));
		return {container:teamConfirmButtonContainer, label:buttonLabel, color:teamConfirmButton}
	}

	updateTeamButton(){
		this.currentTeamData = GAME_DATA.getMyTeamData();
		this.brandTeamSprite.texture = PIXI.Texture.fromFrame('seriea/'+this.currentTeamData.brand);
	}
	build(){
		super.build();

		this.startButton.container.x = config.width / 2;
		this.startButton.container.y = config.height - 120;
		this.teamButton.x = config.width - 50;
		this.teamButton.y = 50;
		this.fieldButton.x = config.width / 2 - 120;
		this.fieldButton.y = config.height / 2 - 50;
	}

	destroy(){

	}

	startGame(){

		// TweenLite.to(this.fieldButton.scale, 0.3, {delay:0, x:0, y:0 });//ease:'easeInBack'});
		// TweenLite.to(this.startButton.scale, 0.3, {delay:0.05, x:0, y:0});//ease:'easeInBack'});
		// TweenLite.to(this.teamButton.scale, 0.3, {delay:0.1, x:0, y:0, //ease:'easeInBack', 
		// 	onComplete:function(){
		// 	//this.screenManager.change('ChooseMatchScreen');

		GAME_DATA.getOther();

		this.screenManager.change('GameScreen');
		// }, onCompleteScope:this})
		
	}

	toTeamSelection(){
		// TweenLite.to(this.fieldButton, 0.4, {delay:0, x:-config.width / 2 - 120});//ease:'easeInBack'});
		// TweenLite.to(this.startButton, 0.4, {delay:0.1, x:-config.width / 2});//ease:'easeInBack'});
		// TweenLite.to(this.teamButton, 0.4, {delay:0.2, x:-config.width / 2 + 120, //ease:'easeInBack', 
		// 	onComplete:function(){
		// 	//this.screenManager.change('ChooseTeamScreen');
		// }, onCompleteScope:this})
	}

	toFieldSlection(){
		// TweenLite.to(this.fieldButton, 0.4, {delay:0.2, x:config.width + config.width / 2 - 120, //ease:'easeInBack', 
		// 	onComplete:function(){
		// 	//this.screenManager.change('ChooseFieldScreen');
		// }, onCompleteScope:this});
		// TweenLite.to(this.startButton, 0.4, {delay:0.1, x:config.width + config.width / 2});//ease:'easeInBack'});
		// TweenLite.to(this.teamButton, 0.4, {delay:0, x:config.width + config.width / 2 + 120})//ease:'easeInBack'})
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
		return

		console.log('TRANSITION IN');

		this.fieldButton.scale.set(0)
		this.startButton.container.scale.set(0)
		this.teamButton.scale.set(0)
		TweenLite.to(this.fieldButton.scale, 0.2, {delay:0.2, x:1, y:1});//, ease:'easeOutElastic'});
		TweenLite.to(this.startButton.container.scale, 0.2, {delay:0.3, x:1, y:1});//, ease:'easeOutElastic'});
		TweenLite.to(this.teamButton.scale, 0.2, {delay:0.4, x:1, y:1});//, ease:'easeOutElastic'});


	}
	
	removeEvents(){
		this.startButton.container.off('touchstart').off('mousedown');
		this.fieldButton.off('touchstart').off('mousedown');
		this.teamButton.off('touchstart').off('mousedown');
	}
	addEvents(){
		this.removeEvents();
		this.startButton.container.on('mousedown', this.startGame.bind(this)).on('touchstart', this.startGame.bind(this));
		this.teamButton.on('mousedown', this.toTeamSelection.bind(this)).on('touchstart', this.toTeamSelection.bind(this));
		this.fieldButton.on('mousedown', this.toFieldSlection.bind(this)).on('touchstart', this.toFieldSlection.bind(this));
	}
}