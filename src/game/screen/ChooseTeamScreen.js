import * as PIXI from 'pixi.js';
import TweenLite from 'gsap';
import config  from '../../config';
import utils  from '../../utils';
import Screen from '../../screenManager/Screen'

export default class ChooseTeamScreen extends Screen{
	constructor(label){
		super(label);

		this.button = new PIXI.Container();
        this.shape = new PIXI.Graphics().beginFill(0).drawCircle(0,0,80);
        this.button.addChild(this.shape)
        // this.outgameUIContainer.addChild(this.button)
        this.button.x = config.width / 2;
        this.button.y = config.height / 2;
        this.button.interactive = true;
        // this.addChild(this.button)


        let shape = PIXI.Sprite.fromFrame('big-button-up.png');
		shape.anchor.set(0.5);
		
		this.backButton = new PIXI.Container();
        //this.shape = new PIXI.Graphics().beginFill(0).drawCircle(0,0,80);
        this.backButton.addChild(shape)
        
        this.backButton.interactive = true;
        this.addChild(this.backButton)



        
        this.screenLabel = new PIXI.Text(this.label,{font : '32px mario', fill : 0x000000, align : 'right'});
        this.addChild(this.screenLabel)


        this.buildTeamSelectionPanel();
       

        
        this.teamDataLabel = new PIXI.Text('',{font : '20px', fill : 0x000000, align : 'right'});
		//this.addChild(this.teamDataLabel)
		this.teamDataLabel.y = 350;

		this.playerButtons = [];
        this.addPlayerButton();
        this.addPlayerButton();
        this.addPlayerButton();

		this.tempPlayerLabel = new PIXI.Text('',{font : '20px', fill : 0x000000, align : 'right'});
		//this.addChild(this.tempPlayerLabel)
		this.tempPlayerLabel.y = 550;




        this.addEvents();
	}
	buildTeamSelectionPanel(){

		this.buttonsPanelContainer = new PIXI.Container();
		this.addChild(this.buttonsPanelContainer)

		 this.teamButtons = [];
		 for (var i = 0; i < GAME_DATA.teamsData.length; i++) {
		 	
		 	this.addTeamButton(GAME_DATA.teamsData[i].id);
		 }

        this.panelBg = new PIXI.Graphics().beginFill(0xFFFFFF).drawRoundedRect(0,0,300, 300, 10)
        this.buttonsPanelContainer.addChild(this.panelBg)

        this.buttonsPanelContainer.mask = this.panelBg;

        this.buttonsPanelContainer.pivot.set(this.panelBg.width/2, this.panelBg.height/2)
		this.buttonsPanelContainer.position.set(config.width/2, config.height/2)

		this.topImage = new PIXI.Graphics().beginFill(0xFFFFFF).drawRect(0,0,300, 50)
		this.buttonsPanelContainer.addChild(this.topImage)
		this.topImage.visible = false;

		this.closePopup = new PIXI.Graphics().beginFill(0xFFFFFF).drawRect(0,0,300, 300)
		this.closePopup.alpha = 0;
		this.closePopup.visible = false;
		this.closePopup.interactive = true;
		this.buttonsPanelContainer.addChild(this.closePopup)
	}
	updateTeamLabel(){
		let teamData = GAME_DATA.getMyTeamData();
		this.teamDataLabel.text = 'ATTACK: ' + teamData.attack * 100 + ' - DEFENSE: ' + teamData.defense * 100
		this.updatePlayerLabel();
	}

	updatePlayerLabel(){
		let teamData = GAME_DATA.getKickerData();
		this.tempPlayerLabel.text = 'POWER: ' + teamData.force * 100 + ' - CURVE: ' + teamData.curve * 100
	}

	build(){
		super.build();

		this.backButton.x = 50;
        this.backButton.y = 50;

		this.updateTeamLabel();
		this.updatePlayerLabel();
	}

	addTeamButton(id){

		let grid = {x:4, y:4}
		let teamData = GAME_DATA.getTeamById(id);

		let space = {x:10, y:10};
		let wdt = (300 - space.x * 6) / grid.x / 2;
		let hgt = (300 - space.y * 6) / grid.y / 2;

		let shape = new PIXI.Graphics().beginFill(0xFFFFFF).drawCircle(0,0,wdt)//PIXI.Sprite.fromFrame('big-button-up.png');
		// shape.anchor.set(0.5);
		// shape.scale.set(0.5);

		let button = new PIXI.Container();
        button.addChild(shape)        
        button.interactive = true;
        let xpos = (this.teamButtons.length % grid.x) | 0
        let ypos = Math.floor(this.teamButtons.length / grid.x) | 0

        // button.y = ypos * hgt + wdt*2;
        button.x = space.x + wdt + (xpos * (wdt * 2 + space.x));
        button.y = space.y + hgt + (ypos * (hgt * 2 + space.y));
        button.id = teamData.id;
        let brand = PIXI.Sprite.fromFrame('seriea/'+teamData.brand);
        brand.anchor.set(0.5);
		brand.scale.set(0.5);
        shape.tint = teamData.color
        this.buttonsPanelContainer.addChild(button)
        button.shape = shape;

        // button.addChild(brand)
        this.teamButtons.push(button)

	}

	addPlayerButton(){

		let shape = PIXI.Sprite.fromFrame('big-button-up.png');
		shape.anchor.set(0.5);
		shape.scale.set(0.5);
		let button = new PIXI.Container();
        button.addChild(shape)        
        button.interactive = true;
        button.y = 500;
        button.x = 50 + this.playerButtons.length * 80;
        button.id = this.playerButtons.length;
        button.shape = shape;
        // this.addChild(button)
        //this.playerButtons.push(button)

	}

	closePop(target){
		// this.currentClone.visible = false
		this.closePopup.visible = false
		// this.topImage.visible = false;
		TweenLite.to(this.topImage,0.2,{alpha:0})
		TweenLite.to(this.buttonsPanelContainer,0.2,{y:config.height/2, ease:'easeOutCubic'})
		TweenLite.to(this.currentClone.scale,0.2,{x:1, y:1})
		TweenLite.to(this.currentClone,0.2,{x:this.currentClone.initialPosition.x,y:this.currentClone.initialPosition.y})
	}
	updatePopUp(target){

		this.topImage.visible = true;
		this.topImage.alpha = 0;
		// console.log(target.shape, 'shape');
		this.currentClone = target.shape.clone();
		this.currentClone.x = target.x;
		this.currentClone.y = target.y;
		this.currentClone.initialPosition = {x:target.x, y:target.y}
		this.closePopup.visible = true;
		// target.parent.setChildIndex(target, target.parent.children.length - 1)
		target.parent.addChild(this.currentClone)
		this.topImage.parent.setChildIndex(this.topImage, this.topImage.parent.children.length - 1)
		TweenLite.to(this.currentClone,0.2,{x:this.panelBg.width / 2, y:this.panelBg.height / 2})
		TweenLite.to(this.currentClone.scale,0.4,{x:15, y:15})
		TweenLite.to(this.topImage,0.2,{alpha:1})
		TweenLite.to(this.buttonsPanelContainer,0.2,{y:config.height/2 - 50})
	}
	changeTeam(e){
		let target = e.target || e.data.target;
		this.updatePopUp(target);
		GAME_DATA.changeTeam(target.id);
		this.updateTeamLabel();

	}
	changePlayer(e){
		let target = e.target || e.data.target;
		GAME_DATA.changePlayer(target.id);
		this.updatePlayerLabel();

	}

	destroy(){

	}

	startGame(){
		this.screenManager.change('GameScreen')
	}

	toMainScreen(){
		console.log('to start');
		this.screenManager.change('StartScreen')
	}

	update(delta){

	}

	transitionOut(nextScreen){
		this.closePop();
		super.transitionOut(nextScreen);
	}
	transitionIn(){

		super.transitionIn();

	}

	removeEvents(){
		this.button.off('touchstart').off('mousedown');
		this.backButton.off('touchstart').off('mousedown');
		for (var i = this.teamButtons.length - 1; i >= 0; i--) {
			this.teamButtons[i].off('touchstart').off('mousedown');
		}
		for (var i = this.playerButtons.length - 1; i >= 0; i--) {
			this.playerButtons[i].off('touchstart').off('mousedown');
		}
	}
	addEvents(){
		this.removeEvents();
		for (var i = this.teamButtons.length - 1; i >= 0; i--) {
			this.teamButtons[i].on('mousedown', this.changeTeam.bind(this)).on('touchstart', this.changeTeam.bind(this));
		}

		for (var i = this.playerButtons.length - 1; i >= 0; i--) {
			this.playerButtons[i].on('mousedown', this.changePlayer.bind(this)).on('touchstart', this.changePlayer.bind(this));
		}


		this.button.on('mousedown', this.startGame.bind(this)).on('touchstart', this.startGame.bind(this));
		this.closePopup.on('mousedown', this.closePop.bind(this)).on('touchstart', this.closePop.bind(this));
		this.backButton.on('mousedown', this.toMainScreen.bind(this)).on('touchstart', this.toMainScreen.bind(this));
	}
}