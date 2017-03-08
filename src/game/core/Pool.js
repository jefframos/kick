import * as PIXI from 'pixi.js';
import config  from '../../config';
import utils  from '../../utils';
import Ball from '../entity/Ball'
import Obstacle from '../entity/Obstacle'
export default class Pool{
	constructor(){
		this.ballPool = []
		this.obstaclePool = []
	}
	getBall(){
		// console.log(this.ballPool.length);
		for (var i = this.ballPool.length - 1; i >= 0; i--) {
			if(this.ballPool[i].killed){
				this.ballPool[i].reset();
				return this.ballPool[i]
			}
		}
		let ball = new Ball();
		this.ballPool.push(ball);

		// for (var i = this.game.updateList.length - 1; i >= 0; i--) {
		// 	if(this.game.updateList[i] == ball){
		// 		this.game.updateList.splice(i,1);
		// 	}
		// }
		// this.game.add(ball)

		return ball;
	}
	getObstacle(){
		for (var i = this.obstaclePool.length - 1; i >= 0; i--) {
			if(this.obstaclePool[i].killed){
				this.obstaclePool[i].reset();
				return this.obstaclePool[i]
			}
		}
		let obstacle = new Obstacle();
		this.obstaclePool.push(obstacle);
		// this.game.add(obstacle)

		return obstacle;
	}
}