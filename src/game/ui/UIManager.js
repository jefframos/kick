import * as PIXI from 'pixi.js';
import utils  from '../../utils';
import config  from '../../config';
export default class UIManager extends PIXI.Container {

    constructor(game) {    	
    	super();
    	this.game = game;
    	this.lifesUI = [];

    }
    build(){

    	let backgroundIngameUI = new PIXI.Graphics().beginFill(0x023548).drawRect(0,0,config.width, config.height);
		backgroundIngameUI.alpha = 0;
		this.game.ingameUIContainer.addChild(backgroundIngameUI)

		this.textLabel = new PIXI.Text('---',{font : '20px', fill : 0x000000, align : 'right'});
		this.game.addChild(this.textLabel)

		this.textScore = new PIXI.Text('0',{font : '50px', fill : 0x000000, align : 'right'});
		// this.game.addChild(this.textScore)
		this.textScore.x = config.width / 2 - this.textScore.width / 2;
		this.textScore.y = config.height - this.textScore.height - 20

		this.debug2 = new PIXI.Text('---',{font : '20px', fill : 0x000000, align : 'right'});
		this.debug2.y = config.height - 20;
		this.game.addChild(this.debug2)


		this.textPlacar = new PIXI.Text('0 x 0',{font : '50px', fill : 0x000000, align : 'right'});
		this.game.addChild(this.textPlacar)

		this.textPlacar.x = config.width / 2 - this.textPlacar.width / 2;
		this.textPlacar.y = config.height - this.textPlacar.height - 20


		this.scoreBarContainer = new PIXI.Container();
		this.scoreBarContainer.alpha = 0;
		this.goalBarBack = new PIXI.Graphics().beginFill(0x000).drawRect(0,0,15, 300);
		//backgroundIngameUI.alpha = 0;
		this.scoreBarContainer.addChild(this.goalBarBack)
		this.goalBarBack.alpha = 0.3;

		this.goalBar = new PIXI.Graphics().beginFill(0x023548).drawRect(0,-300,15, 300);
		//backgroundIngameUI.alpha = 0;
		this.scoreBarContainer.addChild(this.goalBar)
		this.goalBar.y = 300;

		this.scoreBarContainer.y = 180;
		this.scoreBarContainer.x = 20;
		this.game.ingameUIContainer.addChild(this.scoreBarContainer)

		let yourGoal = new PIXI.Text('+1',{font : '20px', fill : 0x000000, align : 'right'});
		yourGoal.y = -20
		this.scoreBarContainer.addChild(yourGoal)

		let opponentGoal = new PIXI.Text('-1',{font : '20px', fill : 0x000000, align : 'right'});
		opponentGoal.y = 300
		this.scoreBarContainer.addChild(opponentGoal)


		this.shootFeedback = new PIXI.Text('',{font : '80px', fill : 0x000000, align : 'left'});
		this.shootFeedback.y = 300
		this.game.ingameUIContainer.addChild(this.shootFeedback)
		this.shootFeedback.visible = false;


    }
    gameOver(placar){
    	let result = 'win'
    	if(placar.opponent > placar.me){
    		result = 'loose'
    	}else if(placar.opponent == placar.me){
    		result = 'draw'
    	}
    	this.textPlacar.text += '\n'+result
    	TweenLite.to(this.textPlacar, 1, {y:config.height / 2})
    }
    tweenFeedback(force){
    	if(force){

    	}
    	this.shootFeedback.visible = true;
    	this.shootFeedback.alpha = 1;
    	this.shootFeedback.x = - this.shootFeedback.width;
    	this.shootFeedback.scale.x = 1.5;
    	this.shootFeedback.scale.y = .5;
    	TweenLite.to(this.shootFeedback, 0.3, {x:config.width / 2 - this.shootFeedback.width / 2})
    	TweenLite.to(this.shootFeedback.scale, 0.3, {x:1, y:1})
    	TweenLite.to(this.shootFeedback, 0.3, {alpha:0, delay: 0.5})
    }
    showCenterFeedback(label = 'gol', delay = 0){
    console.log(label, 'feedback');    	
    	this.shootFeedback.text = label;
    	this.tweenFeedback(true);
    }
   
    updateLifes(){
		this.textScore.text = GAME_DATA.points;
		for (var i = this.lifesUI.length - 1; i >= 0; i--) {
			if((i + 1) > GAME_DATA.lifes){
				this.lifesUI[i].tint = 0x000000;
			}
		}
	}
    updateGoalBar(placar, barScale, delay = 0){
    	console.log(barScale, 'GOAL');




    	TweenLite.to(this.goalBar.scale, 0.3, {delay:delay, y:barScale, ease:'easeOutBack', onComplete:function(){
    		this.textPlacar.text = placar.me + ' X ' + placar.opponent;
    	}, onCompleteScope:this});
    }
    createLifes(){
    	console.log('LIFES');
		this.textScore.text = 0;
		if(this.lifesUI){
			for (var i = this.lifesUI.length - 1; i >= 0; i--) {
				if(this.lifesUI[i].parent){
					this.lifesUI[i].parent.removeChild(this.lifesUI[i]);
				}
			}
		}
		this.lifesUI = [];
		for (var i = 0; i < GAME_DATA.lifes; i++) {
			let hearthUI = PIXI.Sprite.fromFrame('ball.png');
			
			this.lifesUI.push(hearthUI)
			hearthUI.x = config.width - 25 * i - 20;
			hearthUI.y = 25;
			hearthUI.anchor.set(0.5);
			hearthUI.width = 20
			hearthUI.height = 20
			

			this.game.ingameUIContainer.addChild(hearthUI)
		}
	}
}