import * as PIXI from 'pixi.js';
import config  from '../../config';
import utils  from '../../utils';
export default class Collisions{
	constructor(game){
		this.game = game;
		this.chain = 0;
	}
	reset(){
		this.chain = 0;
	}
	addGoal(goals){
		if(goals == GAME_DATA.goodShoot){
			this.addGoodShoot();
		}else if(goals == GAME_DATA.perfectShoot){
			this.addPerfectShoot();
		}else{
			this.chain ++;
		}
	}
	addGoodShoot(){
		this.chain += 3;
	}
	addPerfectShoot(){
		this.chain += 10;
	}
	missGoal(){
		this.chain = 0;
	}
}