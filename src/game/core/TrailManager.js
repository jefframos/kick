import * as PIXI from 'pixi.js';
import config  from '../../config';
import Trail from '../entity/Trail';
export default class TrailManager{
	constructor(container) {
		this.container = container;
		this.currentTrail = false;
		this.trailPool = [];
	}
	getTrail(position){
		for (var i = this.trailPool.length - 1; i >= 0; i--) {
			if(this.trailPool[i].killed){
				this.trailPool[i].reset(position);
				return this.trailPool[i]
			}
		}
		let trail = new Trail(this.container, 50, PIXI.Texture.from('assets/images/trail1.jpg'));
		trail.trailTick = 15;
		trail.speed = 0.01;
		trail.frequency = 0.0001
		this.trailPool.push(trail);
		return trail;
	}
	removeTrail(){
		this.currentTrail = false
	}
	startNewTrail(position){
		this.currentTrail = this.getTrail(position);
		this.currentTrail.mesh.alpha = 0.4;
		this.currentTrail.mesh.blendMode = PIXI.BLEND_MODES.ADD;
		this.currentTrail.speed = 0.1
		this.currentTrail.update(0, position)
	}
	update(delta, position){
		if(this.currentTrail){
			this.currentTrail.update(delta, position)
		}
		for (var i = this.trailPool.length - 1; i >= 0; i--) {
			if(!this.trailPool[i].killed && this.trailPool[i] != this.currentTrail){
				this.trailPool[i].update(delta, null);
			}
		}
	}
}