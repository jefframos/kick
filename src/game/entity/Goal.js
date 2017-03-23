import * as PIXI from 'pixi.js';
import config  from '../../config';
import Target from '../entity/Target'
export default class Goal extends PIXI.Container {

    constructor(game) {
    	super();

    	this.game = game;
    	this.targetPool = [];
		this.targets = [];

    }
    build(){

  //   	this.goal = PIXI.Sprite.fromImage('assets/images/goal.png');//new PIXI.Graphics().beginFill(0x023548).drawRect(-500,-400,1000, 400);
		// // this.addChild(this.goal);
		// this.goal.anchor.set(0.5, 0.9)
		// // this.goal.scale.set(1.3)
		// this.goal.x = config.width / 2 + 16
		// this.goal.y = 150
		// this.goal.alpha = 0.5

		this.goleira = new PIXI.Container();
		this.addChild(this.goleira);

		let h = 560
		let w = 1700
		let tick = 24
		this.traveTop = new PIXI.Graphics().beginFill(0xFFFFFF).drawRect(-w/2,0,w, tick);
		this.goleira.addChild(this.traveTop);
		this.traveTop.y = -h
		this.traveLeft = new PIXI.Graphics().beginFill(0xFFFFFF).drawRect(-tick/2,-h,tick, h);
		this.goleira.addChild(this.traveLeft);
		this.traveLeft.x = w/2

		this.traveRight = new PIXI.Graphics().beginFill(0xFFFFFF).drawRect(-tick/2,-h,tick, h);
		this.goleira.addChild(this.traveRight);
		this.traveRight.x = -w/2

		// this.trave4 = new PIXI.Graphics().beginFill(0x023548).drawRect(-w/2,0,w, tck);
		// this.goleira.addChild(this.trave4);

    }
    show(){
    	this.goleira.scale.set(0);
    	TweenLite.to(this.goleira.scale, 1, {x:1, y:1, ease:'easeOutElastic'})
    }
    reset(){
    	for (var i = this.targets.length - 1; i >= 0; i--) {
    		if(this.targets[i].parent){
    			this.targets[i].parent.removeChild(this.targets[i]);
    		}
    	}
    	this.targets = [];
    }
    addGoalkeeper(){
    }
    addTargets(){
		let target = this.getTarget();
		target.x = -this.goleira.width / 2 + target.radius 
		target.y = -this.goleira.height + target.radius 
		this.goleira.addChild(target);
		this.targets.push(target);

		target = this.getTarget();
		target.x = this.goleira.width / 2 - target.radius 
		target.y = -this.goleira.height + target.radius 
		this.goleira.addChild(target);
		this.targets.push(target);

		target = this.getTarget(90);
		target.x = 0//this.goleira.width / 2
		target.y = -this.goleira.height * 0.25
		target.moveBounds = {x1:-400, x2:400}
		target.updateable = true;
		this.goleira.addChild(target);
		this.targets.push(target);

		// target.y = 0//-this.height

    }
    getTarget(radius = 80){
		for (var i = this.targetPool.length - 1; i >= 0; i--) {
			if(this.targetPool[i].killed){
				return this.targetPool[i]
			}
		}
		let target = new Target(this, radius);
		this.targetPool.push(target);
		return target;
	}
	getTargetList(){
		let returnList = [];
		for (var i = this.targets.length - 1; i >= 0; i--) {
			let target = this.targets[i];
	    	let p = {
	    		target:target,
				x:this.x + this.goleira.x + (target.x * this.scale.x),
				y:this.y + this.goleira.y +(target.y * this.scale.y) ,
				r: target.radius * this.scale.x 
			}
			returnList.push(p)
		}
		return returnList
    }
    getStickSide(target, side = 1){
    	let p1 = {
			x:this.x + this.goleira.x + side*((this.goleira.width / 2 ) * this.scale.x) +  -side*((target.width / 2) * this.scale.x),
			y:this.y + this.goleira.y +(target.y * this.scale.y) - target.height * this.scale.y//+ (target.height * this.goleira.scale.y)
		}
		let p2 = {
			x:p1.x, 
			y:this.y + this.goleira.y +(target.y * this.scale.y) //+ (target.height * this.goleira.scale.y)
		}

		return {p1:p1, p2:p2}
    }
    getGoalRect(){
    	let www = 14
		let hhh = 9
		let rect = {
			x:this.x- this.goleira.width/2 * this.scale.x + www - 1,
			y:this.y- this.goleira.height * this.scale.y + hhh,
			w:this.goleira.width * this.scale.x - www *2 + 4,
			h:this.goleira.height * this.scale.y - hhh
		}
		return rect
    }
    getLeftStick(){
		return this.getStickSide(this.traveLeft, -1)
    }

    getRightStick(){
    	return this.getStickSide(this.traveRight, 1)
    }
    update(delta){
    	for (var i = this.targets.length - 1; i >= 0; i--) {
    		this.targets[i].update(delta)
    	}
    }
    getTopStick(){
    	let target = this.traveTop;
    	let p1 = {
			x:this.x + this.goleira.x - target.width / 2 * this.scale.x + 2,
			y:this.y + this.goleira.y +(target.y * this.scale.y) + ((target.height / 2) * this.scale.x)
		}
		let p2 = {
			x:this.x + this.goleira.x + target.width / 2 * this.scale.x + 2,
			y:p1.y
		}

    	return {p1:p1, p2:p2}
    }
}