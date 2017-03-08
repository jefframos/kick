import * as PIXI from 'pixi.js';
import TweenLite from 'gsap';
import config  from '../../config';
import utils  from '../../utils';
import Screen from '../../screenManager/Screen'

export default class GameOverScreen extends Screen{
	constructor(label){
		super(label);

		this.button = new PIXI.Container();
        let shape = PIXI.Sprite.fromFrame('big-button-up.png');
		shape.anchor.set(0.5);
        this.button.addChild(shape)
        // this.outgameUIContainer.addChild(this.button)
        this.button.x = config.width / 2;
        this.button.y = config.height / 2;
        this.button.interactive = true;
        this.addChild(this.button)


        shape = PIXI.Sprite.fromFrame('big-button-up.png');
		shape.anchor.set(0.5);
		this.backButton = new PIXI.Container();
        //this.shape = new PIXI.Graphics().beginFill(0).drawCircle(0,0,80);
        this.backButton.addChild(shape)
        
        this.backButton.interactive = true;
        this.addChild(this.backButton)

        this.addEvents();

        this.screenLabel = new PIXI.Text(this.label,{font : '32px mario', fill : 0x000000, align : 'right'});
        this.addChild(this.screenLabel)

	}
	build(){
		super.build();

		this.backButton.x = 50;
        this.backButton.y = 50;

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
	}
	addEvents(){
		this.removeEvents();
		this.button.on('mousedown', this.startGame.bind(this)).on('touchstart', this.startGame.bind(this));
		this.backButton.on('mousedown', this.toMainScreen.bind(this)).on('touchstart', this.toMainScreen.bind(this));
	}
}