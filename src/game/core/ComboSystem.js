import * as PIXI from 'pixi.js';
import config  from '../../config';
import utils  from '../../utils';
export default class ComboSystem{
	constructor(game){
		this.game = game;
		this.chain = 0;
	}
	start(){
		this.goalMarker = 0.5;
		this.placar = {me:0, opponent:0}
		this.opponentData = GAME_DATA.getOpponentData();
		this.myTeamData = GAME_DATA.getMyTeamData();
		this.updateBars();
	}
	reset(){
		this.chain = 0;
		this.goalMarker = GAME_DATA.getHome();
		this.placar = {me:0, opponent:0}
		this.updateBars();
	}
	addGoal(goals){
		if(goals == GAME_DATA.goodShoot){
			this.addGoodShoot();
		}else if(goals == GAME_DATA.perfectShoot){
			this.addPerfectShoot();
		}else{
			this.game.uiManager.showCenterFeedback('good');
			this.chain ++;
			// this.addGoalPoints(0.2);
			this.addGoalPoints(1);
		}
	}
	removeGoalPoints(pts){
		this.goalMarker = 0;
		// this.goalMarker -= pts * this.opponentData.attack / this.myTeamData.defense
		this.updateBars();
	}
	addGoalPoints(pts){
		this.goalMarker = 1;
		// this.goalMarker += pts * this.myTeamData.attack / this.opponentData.defense
		this.updateBars();
	}
	addGoodShoot(){
		this.game.uiManager.showCenterFeedback('very good');
		this.chain += 3;
		// this.addGoalPoints(0.75);
		this.addGoalPoints(1);

		
	}
	addPerfectShoot(){
		this.game.uiManager.showCenterFeedback('perfect');
		this.chain += 10;
		// this.addGoalPoints(1);
		this.addGoalPoints(3);
	}
	missGoal(){
		this.game.uiManager.showCenterFeedback('miss');
		this.chain = 0;
		this.removeGoalPoints(1);
		// this.removeGoalPoints(0.2);

	}
	updateBars(){

		//this.goalMarker = Math.max(this.goalMarker, 0)
		//this.goalMarker = Math.min(this.goalMarker, 1)
		//this.goalMarker = parseFloat(parseFloat(this.goalMarker).toFixed(2));
		//this.game.uiManager.updateGoalBar(this.placar, this.goalMarker);
		if(this.goalMarker >= 1){
			console.log('REAL GOAL');
			//this.goalMarker = Math.max(this.goalMarker - 1 + 0.4, 0.4);
			this.placar.me ++
			this.game.uiManager.showCenterFeedback('ta dentro', 1);
			this.game.shake(2, 4, 0.8)
			this.game.uiManager.updateGoalBar(this.placar, this.goalMarker, 0.5);

		}
		else if(this.goalMarker <= 0){
			console.log('TOMOU GOAL');
			//this.goalMarker = 0.6
			this.placar.opponent ++
			this.game.uiManager.showCenterFeedback('se fudeu', 1);
			this.game.uiManager.updateGoalBar(this.placar, this.goalMarker, 0.5);
		}

		console.log(this.placar, 'PLACAR GOAL', this.goalMarker);
	}
}