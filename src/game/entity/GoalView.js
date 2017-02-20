import * as PIXI from 'pixi.js';
import config  from '../../config';
export default class GoalView extends PIXI.Container {

    constructor(game) {
    	super();

    	this.game = game;
    }
    build(){

    	this.goal = PIXI.Sprite.fromImage('assets/images/goal.png');//new PIXI.Graphics().beginFill(0x023548).drawRect(-500,-400,1000, 400);
		// this.addChild(this.goal);
		this.goal.anchor.set(0.5, 0.9)
		// this.goal.scale.set(1.3)
		this.goal.x = config.width / 2 + 16
		this.goal.y = 150
		this.goal.alpha = 0.5

		this.goleira = new PIXI.Container();
		this.addChild(this.goleira);

		let h = 500
		let w = 1300
		let tick = 20
		this.traveTop = new PIXI.Graphics().beginFill(0x023548).drawRect(-w/2,0,w, tick);
		this.goleira.addChild(this.traveTop);
		this.traveTop.y = -h
		this.traveLeft = new PIXI.Graphics().beginFill(0x023548).drawRect(-tick/2,-h,tick, h);
		this.goleira.addChild(this.traveLeft);
		this.traveLeft.x = w/2

		this.traveRight = new PIXI.Graphics().beginFill(0x023548).drawRect(-tick/2,-h,tick, h);
		this.goleira.addChild(this.traveRight);
		this.traveRight.x = -w/2

		// this.trave4 = new PIXI.Graphics().beginFill(0x023548).drawRect(-w/2,0,w, tck);
		// this.goleira.addChild(this.trave4);


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
    	let www = 10
		let hhh = 6
		let rect = {
			x:this.x- this.goleira.width/2 * this.scale.x + www,
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