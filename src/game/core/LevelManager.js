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
	}
	
	addTargets(){

		this.game.goleira.addTargets();
		
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
		let rnd = Math.random();

		console.log(rnd);

		if(rnd < 0.25){
			obstacle = this.getObstacle().build(50, {height:380});
			obstacle.x = config.width / 2-100;
			obstacle.y = 250;
			// this.game.add.(obstacle);
			this.game.add(obstacle);
			this.obstacles.push(obstacle)

			// this.gameContainer.addChild(obstacle)

			obstacle = this.getObstacle().build(50, {height:375});
			obstacle.x = config.width / 2-60;
			obstacle.y = 250;
			// this.game.add.(obstacle);
			this.game.add(obstacle);
			this.obstacles.push(obstacle)

			// this.gameContainer.addChild(obstacle)

			obstacle = this.getObstacle().build(50, {height:400});
			obstacle.x = config.width / 2-20;
			obstacle.y = 250;
			// this.game.add.(obstacle);
			this.game.add(obstacle);
			this.obstacles.push(obstacle)

			// this.gameContainer.addChild(obstacle)


			obstacle = this.getObstacle().build(50, {height:375});
			obstacle.x = config.width / 2+100
			obstacle.y = 160;
			// this.game.add.(obstacle);
			this.game.add(obstacle);
			this.obstacles.push(obstacle)

			// this.gameContainer.addChild(obstacle)

		}else if(rnd < 0.5){
			obstacle = this.getObstacle().build(50, {height:400});
			obstacle.x = config.width / 2;
			obstacle.y = 160;
			// this.game.add.(obstacle);
			this.game.add(obstacle);
			this.obstacles.push(obstacle)

			// this.gameContainer.addChild(obstacle)
		}else if(rnd < 0.75){
			obstacle = this.getObstacle().build(50, {height:380});
			obstacle.x = config.width / 2-100;
			obstacle.y = 250;
			// this.game.add.(obstacle);
			this.game.add(obstacle);
			this.obstacles.push(obstacle)

			// this.gameContainer.addChild(obstacle)

			obstacle = this.getObstacle().build(50, {height:375});
			obstacle.x = config.width / 2+100;
			obstacle.y = 250;
			// this.game.add.(obstacle);
			this.game.add(obstacle);
			this.obstacles.push(obstacle)

			// this.gameContainer.addChild(obstacle)
		}

		for (var i = this.obstacles.length - 1; i >= 0; i--) {	
			let obs = this.obstacles[i];
			obs.x = Math.floor(obs.x / 4) * 4;
			obs.y = Math.floor(obs.y / 4) * 4;
		// 	this.viewManager.updateObjectScale(this.game.obstacles[i]);
		}

		// this.gameContainer.addChild(obstacle)
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