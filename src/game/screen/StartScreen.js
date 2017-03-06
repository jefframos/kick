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
        this.startButton.x = config.width / 2;
        this.startButton.y = config.height / 2;
        this.startButton.interactive = true;
        this.addChild(this.startButton)


        shape = PIXI.Sprite.fromFrame('big-button-up.png');
		shape.anchor.set(0.5);
		this.teamButton = new PIXI.Container();
        //this.shape = new PIXI.Graphics().beginFill(0).drawCircle(0,0,80);
        this.teamButton.addChild(shape)
        this.teamButton.x = config.width / 2 + 120;
        this.teamButton.y = config.height / 2 - 50;
        this.teamButton.interactive = true;
        this.addChild(this.teamButton)


        shape = PIXI.Sprite.fromFrame('big-button-up.png');
		shape.anchor.set(0.5);
		this.fieldButton = new PIXI.Container();
        //this.shape = new PIXI.Graphics().beginFill(0).drawCircle(0,0,80);
        this.fieldButton.addChild(shape)
        this.fieldButton.x = config.width / 2 - 120;
        this.fieldButton.y = config.height / 2 - 50;
        this.fieldButton.interactive = true;
        this.addChild(this.fieldButton)


        this.addEvents();


	}
	build(){
		super.build();
	}

	destroy(){

	}

	startGame(){
		this.screenManager.change('InitScreen')
	}

	update(delta){

	}

	transitionOut(nextScreen){
		this.nextScreen = nextScreen;
		TweenLite.to(this.startButton.scale, 0.5, {x:0, y:0, ease:'easeInBack', onComplete:function(){
			this.endTransitionOut();
		}, onCompleteScope:this})

	}
	transitionIn(){

		super.transitionIn();
		this.startButton.scale.set(0)
		TweenLite.to(this.startButton.scale, 0.8, {delay:0.2, x:1, y:1, ease:'easeOutElastic'});


	}

	removeEvents(){
		this.startButton.off('touchstart').off('mousedown');
	}
	addEvents(){
		this.removeEvents();
		this.startButton.on('mousedown', this.startGame.bind(this)).on('touchstart', this.startGame.bind(this));
	}
}