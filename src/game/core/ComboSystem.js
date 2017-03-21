import * as PIXI from 'pixi.js';
import config  from '../../config';
import utils  from '../../utils';
export default class ComboSystem{
	constructor(game){
		this.game = game;
		this.chain = 0;
		this.goalMarker = 0.5;
		this.placar = {me:0, opponent:0}

		this.opponentData = {attack:1, defense:1}
		this.myTeamData = {attack:1, defense:1}
	}
	reset(){
		this.chain = 0;
		this.goalMarker = 0.5;
		this.placar = {me:0, opponent:0}
		this.updateBars();
	}
	addGoal(goals){
		if(goals == GAME_DATA.goodShoot){
			this.addGoodShoot();
		}else if(goals == GAME_DATA.perfectShoot){
			this.addPerfectShoot();
		}else{
			this.chain ++;
			this.addGoalPoints(0.33);
		}
	}
	removeGoalPoints(pts){
		this.goalMarker -= pts * this.opponentData.attack / this.myTeamData.defense
		this.updateBars();
	}
	addGoalPoints(pts){
		this.goalMarker += pts * this.myTeamData.attack / this.opponentData.defense
		this.updateBars();
	}
	addGoodShoot(){
		this.chain += 3;

		this.addGoalPoints(0.75);
		
	}
	addPerfectShoot(){
		this.chain += 10;
		this.addGoalPoints(1);
	}
	missGoal(){
		this.chain = 0;
		this.removeGoalPoints(0.33);

	}
	updateBars(){
		this.game.uiManager.updateGoalBar(this.placar, this.goalMarker);
		if(this.goalMarker > 1){
			console.log('REAL GOAL');
			this.goalMarker = this.goalMarker - 1 + 0.5
			this.placar.me ++

		}
		else if(this.goalMarker < 0){
			console.log('TOMOU GOAL');
			this.goalMarker = 0.5
			this.placar.opponent ++

		}
		this.game.uiManager.updateGoalBar(this.placar, this.goalMarker, 0.8);

		console.log(this.placar, 'PLACAR');
	}
}