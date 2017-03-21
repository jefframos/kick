import * as PIXI from 'pixi.js';
import TweenLite from 'gsap';
import config  from '../../config';
import utils  from '../../utils';
import Screen from '../../screenManager/Screen'

export default class ChooseFieldScreen extends Screen{
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


        this.stadiumDataLabel = new PIXI.Text('',{font : '20px', fill : 0x000000, align : 'right'});
		this.addChild(this.stadiumDataLabel)
		this.stadiumDataLabel.y = 350;

        this.buttons = [];
        this.addButton();
        this.addButton();
        this.addButton();
        this.addButton();
        this.addEvents();
	}
	updateStadiumLabel(){
		let teamData = GAME_DATA.getStadium();

		this.stadiumDataLabel.text = 'EXTRA BALLS: ' + teamData.extraBalls;
	}
	addButton(){

		let shape = PIXI.Sprite.fromFrame('big-button-up.png');
		shape.anchor.set(0.5);
		let backButton = new PIXI.Container();
        backButton.addChild(shape)        
        backButton.interactive = true;
        backButton.y = 300;
        backButton.x = 50 + this.buttons.length * 100;
        backButton.id = this.buttons.length;
        this.addChild(backButton)

        this.buttons.push(backButton)

	}
	build(){
		super.build();
		this.backButton.x = 50;
        this.backButton.y = 50;
		this.updateStadiumLabel();
	}

	destroy(){

	}

	startGame(){
		this.screenManager.change('GameScreen')
	}

	toMainScreen(){
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
	changeField(e){
		let target = e.target || e.data.target;
		GAME_DATA.changeLevel(target.id);
		this.updateStadiumLabel();
	}
	removeEvents(){
		this.button.off('touchstart').off('mousedown');
		this.backButton.off('touchstart').off('mousedown');
		for (var i = this.buttons.length - 1; i >= 0; i--) {
			this.buttons[i].off('touchstart').off('mousedown');
		}
	}
	addEvents(){
		this.removeEvents();
		for (var i = this.buttons.length - 1; i >= 0; i--) {
			this.buttons[i].on('mousedown', this.changeField.bind(this)).on('touchstart', this.changeField.bind(this));
		}
		this.button.on('mousedown', this.startGame.bind(this)).on('touchstart', this.startGame.bind(this));
		this.backButton.on('mousedown', this.toMainScreen.bind(this)).on('touchstart', this.toMainScreen.bind(this));
	}
}