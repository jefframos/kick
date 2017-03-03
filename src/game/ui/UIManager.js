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
		this.game.addChild(this.textScore)
		this.textScore.x = config.width / 2 - this.textScore.width / 2;
		this.textScore.y = config.height - this.textScore.height - 20

		this.debug2 = new PIXI.Text('---',{font : '20px', fill : 0x000000, align : 'right'});
		this.game.addChild(this.debug2)
		this.debug2.y = config.height - 20;

    }
    updateLifes(){
		this.textScore.text = this.game.points;
		for (var i = this.lifesUI.length - 1; i >= 0; i--) {
			if((i + 1) > this.lifes){
				this.lifesUI[i].tint = 0x000000;
			}
		}
	}
    createLifes(){
		this.textScore.text = 0;
		if(this.lifesUI){
			for (var i = this.lifesUI.length - 1; i >= 0; i--) {
				if(this.lifesUI[i].parent){
					this.lifesUI[i].parent.removeChild(this.lifesUI[i]);
				}
			}
		}
		this.lifesUI = [];
		for (var i = 0; i < this.lifes; i++) {
			let hearthUI = PIXI.Sprite.fromImage('assets/images/onion.png');
			this.lifesUI.push(hearthUI)
			hearthUI.x = config.width - 25 * i - 20;
			hearthUI.y = 25;
			hearthUI.anchor.set(0.5);
			hearthUI.width = 20
			hearthUI.height = 20
			
			this.addChild(hearthUI)
		}
	}
}