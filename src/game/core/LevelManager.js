import * as PIXI from 'pixi.js';
import config  from '../../config';
import Ball from '../entity/Ball'
import Obstacle from '../entity/Obstacle'
export default class LevelManager{
	constructor(game){
		this.ballPool = []
		this.obstaclePool = []
		this.obstacles = []
		this.game = game;


		this.levels = [];

		let lvl = [];
		this.levels.push(lvl)

		lvl = []
		lvl.push({x:config.width / 2-100, y: 250, w:50, h:380});
		lvl.push({x:config.width / 2-60, y: 250, w:50, h:370});
		lvl.push({x:config.width / 2-20, y: 250, w:50, h:400});
		lvl.push({x:config.width / 2 + 80, y: 160, w:60, h:410});
		this.levels.push(lvl)

		lvl = [];
		lvl.push({x:config.width / 2, y: 160, w:50, h:410});
		this.levels.push(lvl)

		lvl = [];
		lvl.push({x:config.width / 2 + 100, y: 230, w:50, h:410});
		lvl.push({x:config.width / 2 - 100, y: 230, w:50, h:410});
		this.levels.push(lvl)

		lvl = [];
		lvl.push({x:config.width / 2 + 100, y: 230, w:50, h:410});
		lvl.push({x:config.width / 2 - 100, y: 230, w:50, h:410});
		lvl.push({x:config.width / 2, y: 230, w:60, h:360});
		this.levels.push(lvl)
	}
	
	addTargets(){

		this.game.goleira.addTargets();
		
	}

	createObstacle(bounds = {x:0, y:0, w:50, h:400}){
		let obstacle = this.getObstacle().build(bounds.w, {height:bounds.h});
		obstacle.x = bounds.x;
		obstacle.y = bounds.y;
		// this.game.add.(obstacle);
		this.game.add(obstacle);
		this.obstacles.push(obstacle)
	}
	createObstacles(){

		for (var i = this.obstaclePool.length - 1; i >= 0; i--) {
			// for (var j = this.game.add.updateList.length - 1; j >= 0; j--) {
			// 	if(this.game.obstacles[i] == this.game.add.updateList[j]){
			// 		this.game.add.updateList.splice(j,1);
			// 	}
			// }
			if(this.obstaclePool[i].parent)
				this.obstaclePool[i].kill();
				// this.obstaclePool[i].parent.removeChild(this.obstaclePool[i])
		}
		this.obstacles = [];
		let obstacle = null;
		let rnd = Math.floor(Math.random() * this.levels.length);


		for (var i = this.levels[rnd].length - 1; i >= 0; i--) {
			this.createObstacle(this.levels[rnd][i]);
		}


		for (var i = this.obstacles.length - 1; i >= 0; i--) {	
			let obs = this.obstacles[i];
			obs.x = Math.floor(obs.x / 4) * 4;
			obs.y = Math.floor(obs.y / 4) * 4;
		// 	this.viewManager.updateObjectScale(this.game.obstacles[i]);
		}
	}

	getObstacle(){
		for (var i = this.obstaclePool.length - 1; i >= 0; i--) {
			if(this.obstaclePool[i].killed){
				this.obstaclePool[i].reset();
				return this.obstaclePool[i]
			}
		}
		let obstacle = new Obstacle(this);
		this.obstaclePool.push(obstacle);
		this.game.add(obstacle)

		return obstacle;
	}

	getBall(){
		// console.log(this.ballPool.length);
		for (var i = this.ballPool.length - 1; i >= 0; i--) {
				// console.log(this.ballPool[i].killed , this.ballPool[i].shooting);
			if(this.ballPool[i].killed){
			// if((!this.ballPool[i].killed && !this.ballPool[i].shooting) || (this.ballPool[i].shooting && this.ballPool[i].killed)){


				this.ballPool[i].reset();
				return this.ballPool[i]
			}
		}
		let ball = new Ball(this.game,50);
		this.ballPool.push(ball);
		ball.reset();

		// for (var i = this.game.updateList.length - 1; i >= 0; i--) {
		// 	if(this.game.updateList[i] == ball){
		// 		this.game.updateList.splice(i,1);
		// 	}
		// }
		this.game.add(ball)

		return ball;
	}
}