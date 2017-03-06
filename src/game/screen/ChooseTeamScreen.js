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
        this.addChild(this.button)

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
		console.log('transitionOut');
		TweenLite.to(this.button.scale, 0.5, {x:0, y:0, ease:'easeInBack', onComplete:function(){
			this.endTransitionOut();
		}, onCompleteScope:this})

	}
	transitionIn(){

		super.transitionIn();

	}

	removeEvents(){
		this.button.off('touchstart').off('mousedown');
	}
	addEvents(){
		this.removeEvents();
		this.button.on('mousedown', this.startGame.bind(this)).on('touchstart', this.startGame.bind(this));
	}
}