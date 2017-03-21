import * as PIXI from 'pixi.js';
import config  from '../../config';
import Goalkeeper from '../entity/Goalkeeper'

export default class LevelManager{
	constructor(game){
		
		this.obstacles = []
		this.game = game;

		
		//this.game.add(this.goalkeeper)
		this.levels = [];

		let lvl = [];
		this.levels.push(lvl)

		lvl = [];
		this.levels.push(lvl)

		// lvl = []
		// lvl.push({x:config.width / 2-100, y: 250, w:70, h:380});
		// lvl.push({x:config.width / 2-60, y: 260, w:70, h:370});
		// lvl.push({x:config.width / 2-20, y: 250, w:70, h:400});
		// lvl.push({x:config.width / 2 + 80, y: 190, w:70, h:410});
		// this.levels.push(lvl)

		// // lvl = [];
		// // lvl.push({x:config.width / 2, y: 160, w:70, h:410});
		// // this.levels.push(lvl)

		// lvl = [];
		// lvl.push({x:config.width / 2 + 100, y: 230, w:70, h:410});
		// lvl.push({x:config.width / 2 - 100, y: 230, w:70, h:410});
		// this.levels.push(lvl)

		// lvl = [];
		// lvl.push({x:config.width / 2 + 30, y: 280, w:70, h:410});
		// lvl.push({x:config.width / 2 - 110, y: 230, w:70, h:410});
		// this.levels.push(lvl)

		// lvl = [];
		// lvl.push({x:config.width / 2 + 100, y: 230, w:70, h:410});
		// lvl.push({x:config.width / 2 - 100, y: 230, w:70, h:410});
		// // lvl.push({x:config.width / 2, y: 230, w:60, h:360});
		// this.levels.push(lvl)

		// lvl = [];
		// // lvl.push({x:config.width / 2 + 100, y: 330, w:70, h:410});
		// lvl.push({x:config.width / 2 - 100, y: 190, w:70, h:410});
		// // lvl.push({x:config.width / 2, y: 170, w:60, h:360});
		// this.levels.push(lvl)
	}
	
	// addTargets(){

	// 	this.game.goleira.addTargets();
		
	// }

	createObstacle(bounds = {x:0, y:0, w:50, h:400}){
		let obstacle = POOL.getObstacle().build(bounds.w, {height:bounds.h});
		obstacle.x = bounds.x;
		obstacle.y = bounds.y;
		// this.game.add.(obstacle);
		this.game.add(obstacle);
		this.obstacles.push(obstacle)
	}
	createObstacles(){
		// return
		// for (var i = this.obstaclePool.length - 1; i >= 0; i--) {
		// 	// for (var j = this.game.add.updateList.length - 1; j >= 0; j--) {
		// 	// 	if(this.game.obstacles[i] == this.game.add.updateList[j]){
		// 	// 		this.game.add.updateList.splice(j,1);
		// 	// 	}
		// 	// }
		// 	if(this.obstaclePool[i].parent)
		// 		this.obstaclePool[i].kill();
		// 		// this.obstaclePool[i].parent.removeChild(this.obstaclePool[i])
		// }
		for (var i = this.obstacles.length - 1; i >= 0; i--) {
			this.obstacles[i].kill();
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
}