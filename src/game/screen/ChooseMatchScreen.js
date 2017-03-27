import * as PIXI from 'pixi.js';
import TweenLite from 'gsap';
import config  from '../../config';
import utils  from '../../utils';
import Screen from '../../screenManager/Screen'

export default class ChooseMatchScreen extends Screen{
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


        shape = PIXI.Sprite.fromFrame('big-button-up.png');
		shape.anchor.set(0.5);
		this.playButton = new PIXI.Container();
        //this.shape = new PIXI.Graphics().beginFill(0).drawCircle(0,0,80);
        this.playButton.addChild(shape)
        
        this.playButton.interactive = true;
        this.addChild(this.playButton)


        this.screenLabel = new PIXI.Text(this.label,{font : '32px mario', fill : 0x000000, align : 'right'});
        this.addChild(this.screenLabel)

        this.buttons = [];
        this.addButton();
        this.addButton();
        this.addButton();
        this.addButton();
        this.addButton();
        this.addEvents();

        this.addEvents();

        this.teamDataLabel = new PIXI.Text('',{font : '20px', fill : 0x000000, align : 'right'});
		this.addChild(this.teamDataLabel)
		this.teamDataLabel.y = 350;
	}
	updateTeamLabel(){
		let teamData = GAME_DATA.getOpponentData();

		this.teamDataLabel.text = 'ATTACK: ' + teamData.attack * 100 + ' - DEFENSE: ' + teamData.defense * 100 + '\nGOALKEEPER LEVEL: ' + teamData.goalkeeperLevel * 100
		+'\nTEAM LEVEL: ' + teamData.type
	}
	build(){
		super.build();

		this.backButton.x = 50;
        this.backButton.y = 50;

        this.playButton.x = config.width / 2;
        this.playButton.y = 500;

		this.updateTeamLabel();
	}

	addButton(){

		let shape = PIXI.Sprite.fromFrame('big-button-up.png');
		shape.anchor.set(0.5);
		shape.scale.set(0.5);
		let button = new PIXI.Container();
        button.addChild(shape)        
        button.interactive = true;
        button.y = 300;
        button.x = 50 + this.buttons.length * 80;
        button.id = this.buttons.length;
        this.addChild(button)

        this.buttons.push(button)

	}

	changeTeam(e){
		let target = e.target || e.data.target;
		GAME_DATA.changeOpponent(target.id);
		this.updateTeamLabel();

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
		super.transitionOut(nextScreen);
	}
	transitionIn(){

		super.transitionIn();

	}

	removeEvents(){
		this.button.off('touchstart').off('mousedown');
		this.backButton.off('touchstart').off('mousedown');
		this.playButton.off('touchstart').off('mousedown');
		for (var i = this.buttons.length - 1; i >= 0; i--) {
			this.buttons[i].off('touchstart').off('mousedown');
		}
	}
	addEvents(){
		this.removeEvents();
		for (var i = this.buttons.length - 1; i >= 0; i--) {
			this.buttons[i].on('mousedown', this.changeTeam.bind(this)).on('touchstart', this.changeTeam.bind(this));
		}
		this.button.on('mousedown', this.startGame.bind(this)).on('touchstart', this.startGame.bind(this));
		this.backButton.on('mousedown', this.toMainScreen.bind(this)).on('touchstart', this.toMainScreen.bind(this));
		this.playButton.on('mousedown', this.startGame.bind(this)).on('touchstart', this.startGame.bind(this));
	}
}