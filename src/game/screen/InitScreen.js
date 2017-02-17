import * as PIXI from 'pixi.js';
import TweenLite from 'gsap';
import config  from '../../config';
import utils  from '../../utils';
import Screen from '../../screenManager/Screen'
import Ball from '../entity/Ball'
import AnimationManager  from '../entity/utils/AnimationManager';
import Trail from '../entity/Trail';

export default class InitScreen extends Screen{	
	constructor(label){
		super(label);
	}
	build(){
		super.build();

		this.backgroundContaier = new PIXI.Container();
		this.addChild(this.backgroundContaier);


		this.gameContainer = new PIXI.Container();
		this.addChild(this.gameContainer);

		this.updateList = [];

		this.background = new PIXI.Graphics();
		this.background.beginFill(0xababab);
	    this.background.drawRect( 0, 0, config.width, config.height);
		this.backgroundContaier.addChild(this.background);

		this.animationContainer = new PIXI.Container();
		// this.addChild(this.animationContainer)

		this.animationModel = [];
        this.animationModel.push({
            label:'idle',
            src:'players/dead/dead00',
            totalFrames:9,
            startFrame:0,
            animationSpeed:0.2,
            movieClip:null,
            position:{x:0,y:0},
            anchor:{x:0.5,y:0.5}
        });

        this.animationManager = new AnimationManager(this.animationModel, this.animationContainer)
        // this.animationManager.finishCallback = this.finishAnimation.bind(this);
        // this.animationManager.startCallback = this.startAnimation.bind(this);
        this.animationManager.hideAll();
        this.animationManager.stopAll();
        this.animationManager.changeState('idle');

        this.ball = new Ball(this,50);

        this.gameContainer.addChild(this.ball)

        this.ball.x = config.width / 2;
        this.ball.y = config.height - 200;

        this.updateList.push(this.ball)

        // this.ball.velocity.y = -this.ball.speed.y;
        // this.ball.virtualVelocity.x = 0;
        // this.ball.virtualVelocity.y = 0;

        // this.ball2 = new Ball(this);

        // // this.addChild(this.ball2)

        // this.ball2.x = 200;
        // this.ball2.y = 400;


        // this.ball3 = new Ball(this);

        // // this.addChild(this.ball3)

        // this.ball3.x = 400;
        // this.ball3.y = 600;

        this.ingameUIContainer = new PIXI.Container();
		this.addChild(this.ingameUIContainer);

		this.backgroundIngameUI = new PIXI.Graphics().beginFill(0x023548).drawRect(0,0,config.width, config.height);
		this.backgroundIngameUI.alpha = 0;
		this.ingameUIContainer.addChild(this.backgroundIngameUI)

		this.addEvents();

		this.currentTrail = false;

		this.trailPool = [];

		this.goal = PIXI.Sprite.fromImage('assets/images/goal.png');//new PIXI.Graphics().beginFill(0x023548).drawRect(-500,-400,1000, 400);
		// this.addChild(this.goal);
		this.goal.anchor.set(0.5, 0.9)
		// this.goal.scale.set(1.3)
		this.goal.x = config.width / 2 + 16
		this.goal.y = 150
		this.goal.alpha = 0.5

		this.goleira = new PIXI.Container();
		this.gameContainer.addChild(this.goleira);

		let h = 500
		let w = 1300
		let tck = 20
		this.trave1 = new PIXI.Graphics().beginFill(0x023548).drawRect(-w/2,0,w, tck);
		this.goleira.addChild(this.trave1);
		this.trave1.y = -h
		this.trave2 = new PIXI.Graphics().beginFill(0x023548).drawRect(0,-h,tck, h);
		this.goleira.addChild(this.trave2);
		this.trave2.x = w/2

		this.trave3 = new PIXI.Graphics().beginFill(0x023548).drawRect(0,-h,tck, h);
		this.goleira.addChild(this.trave3);
		this.trave3.x = -w/2

		this.trave4 = new PIXI.Graphics().beginFill(0x023548).drawRect(-w/2,0,w, tck);
		this.goleira.addChild(this.trave4);

		this.goleira.x = config.width / 2
		this.goleira.y = 150

		this.textLabel = new PIXI.Text('---',{font : '20px', fill : 0x000000, align : 'right'});
		this.addChild(this.textLabel)
	}

	getTrail(){
		for (var i = this.trailPool.length - 1; i >= 0; i--) {
			if(this.trailPool[i].killed){
				this.trailPool[i].reset(this.mousePosition);
				return this.trailPool[i]
			}
		}
		let trail = new Trail(this.ingameUIContainer, 50, PIXI.Texture.from('assets/images/rainbow-flag2.jpg'));
		trail.trailTick = 15;
		trail.speed = 0.01;
		trail.frequency = 0.0001
		this.trailPool.push(trail);
		return trail;
	}
	reset(){
		this.paused = false;		
		this.colliding = false;
        this.ball.reset();
        
	}
	collideBounds(delta, entity){

		// if(!entity.shooting){
			if(entity.velocity.x > 0){
				if(entity.x > config.width + entity.getRadius()){
					console.log('reset');
					//entity.virtualVelocity.x *= -0.5;
					//entity.x += entity.virtualVelocity.x * delta;
					this.reset();
				}
			}else if(entity.velocity.x < 0){
				if(entity.x < -entity.getRadius()){

					console.log('reset2');

					this.reset();
					// entity.virtualVelocity.x *= -0.1;
					// entity.velocity.x = entity.virtualVelocity.x;
					// entity.x += entity.virtualVelocity.x * delta
				}
			}
		// }

		if(entity.velocity.y > 0){
			if(entity.y > config.height * 0.8){
				// entity.velocity.y *= -0.5;
				// entity.y += entity.velocity.y * delta;
			}
		}else if(entity.velocity.y < 0){
			if(entity.y < this.goal.y -10){

				if(this.colliding){
					return
				}


				//POSTE
				// let p1 = {
				// 	x:this.goleira.x - target.width / 2 * this.goleira.scale.x,
				// 	y:this.goleira.y +(target.y * this.goleira.scale.y) //+ (target.height * this.goleira.scale.y)
				// }
				// let p2 = {
				// 	x:this.goleira.x + target.width / 2 * this.goleira.scale.x,
				// 	y:this.goleira.y +(target.y * this.goleira.scale.y) //+ (target.height * this.goleira.scale.y)
				// }

				let ballPosition = {
					x: this.ball.x, //+ this.ball.spriteContainer.x,
					y: this.ball.y + this.ball.spriteContainer.y * this.ball.scale.y
				}

				let collisions = [];
				collisions.push(this.detectSideCollision(this.trave2, entity,ballPosition))
				collisions.push(this.detectSideCollision(this.trave3, entity,ballPosition))
				collisions.push(this.detectSideCollisionTop(this.trave1, entity,ballPosition))

				let killStandard = false

				for (var i = collisions.length - 1; i >= 0; i--) {
					let interception = collisions[i];
					if(interception.interception.length > 0){

						if(this.testeBall && this.testeBall.parent){
							this.testeBall.parent.removeChild(this.testeBall)
						}
						this.testeBall = new PIXI.Graphics().lineStyle(1, 0xff0000).drawCircle(ballPosition.x,ballPosition.y, entity.getRadius());
						//this.addChild(this.testeBall);

						this.colliding = true;
						let distPos = (ballPosition.y - interception.p1.y) / entity.getRadius();
						let distance = 1//utils.distance(interception[0].x,0,interception[1].x,0) / entity.getRadius()
						if(interception.type == 'side'){
							distPos = (ballPosition.x - interception.p1.x) / entity.getRadius();
							this.ball.backSide(distance, distPos, distPos > 0.6);
						}else{						
							this.ball.back(distance, distPos, distPos > 0.6);
						}
						
						this.textLabel.text = distance +' - '+distPos//interception[0].x + ' - ' +interception[0].y + ' - '+interception[1].x + ' - ' +interception[1].y//'COLIDIU'
						killStandard = true;
					}else{
						// this.textLabel.text = 'NAO COLIDIU'
					}
				}


				if(killStandard){
					setTimeout(function() {this.reset();}.bind(this), 2000);
				}else{
					this.paused = true;
					setTimeout(function() {this.reset();}.bind(this), 100);

				}
				
			}
		}
	}

	detectSideCollisionTop(target, entity,ballPosition){
		let p1 = {
			x:this.goleira.x - target.width / 2 * this.goleira.scale.x,
			y:this.goleira.y +(target.y * this.goleira.scale.y) //+ (target.height * this.goleira.scale.y)
		}
		let p2 = {
			x:this.goleira.x + target.width / 2 * this.goleira.scale.x,
			y:this.goleira.y +(target.y * this.goleira.scale.y) //+ (target.height * this.goleira.scale.y)
		}


		this.testee = new PIXI.Graphics().lineStyle(2, 0xff0000).moveTo(p1.x,p1.y);
		this.testee.lineTo(p2.x,p2.y);
		this.addChild(this.testee);

		console.log(p1,p2);
		

		let interception = this.inteceptCircleLineSeg2(ballPosition, {p1:p1, p2:p2}, entity.getRadius());
		return {interception:interception, p1:p1, p2:p2, type:'top'}
	}

	detectSideCollision(target, entity,ballPosition){
		let p1 = {
			x:this.goleira.x - target.x * this.goleira.scale.x,
			y:this.goleira.y -(target.y * this.goleira.scale.y) //+ (target.height * this.goleira.scale.y)
		}
		let p2 = {
			x:this.goleira.x - target.x * this.goleira.scale.x,
			y:this.goleira.y -(target.height * this.goleira.scale.y) //+ (target.height * this.goleira.scale.y)
		}


		this.testee = new PIXI.Graphics().lineStyle(2, 0xff0000).moveTo(p1.x,p1.y);
		this.testee.lineTo(p2.x,p2.y);
		this.addChild(this.testee);

		console.log(p1,p2);
		

		let interception = this.inteceptCircleLineSeg2(ballPosition, {p1:p1, p2:p2}, entity.getRadius());
		return  {interception:interception, p1:p1, p2:p2, type:'side'}
	}
	collide(delta, entity, toCollide){
		if(utils.distance(toCollide.x, toCollide.y, entity.x, entity.y) < toCollide.getRadius() + entity.getRadius()){
			let angle = -Math.atan2(toCollide.y - entity.y, toCollide.x - entity.x);
			angle += 90 / 180 * 3.14;
			let percent = (Math.abs(entity.velocity.x) + Math.abs(entity.velocity.y))/(Math.abs(entity.speed.x) + Math.abs(entity.speed.y))
			entity.velocity.x = Math.sin(angle) * - Math.abs(entity.speed.x * percent);
			entity.velocity.y = Math.cos(angle) * - Math.abs(entity.speed.y * percent);
		}
	}
	
	update(delta){
		if(this.currentTrail){
			this.currentTrail.update(delta, this.mousePosition)
		}
		for (var i = this.trailPool.length - 1; i >= 0; i--) {
			if(!this.trailPool[i].killed && this.trailPool[i] != this.currentTrail){
				this.trailPool[i].update(delta, null);
			}
		}
		if(this.paused){
			return
		}
		super.update(delta);

		for (var i = this.updateList.length - 1; i >= 0; i--) {
			this.updateList[i].update(delta)
		}

		this.gameContainer.children.sort(utils.depthCompare);

		let perspectiveFactor = 1-this.ball.y / config.height
		// console.log(perspectiveFactor);
		this.ball.scale.set(1.1 - perspectiveFactor*1.1)

		perspectiveFactor = 1-this.goal.y / config.height
		this.goal.scale.set(1.1 - perspectiveFactor*1.1)

		perspectiveFactor = 1-this.goleira.y / config.height
		this.goleira.scale.set(1.1 - perspectiveFactor*1.1)

		this.mousePosition = renderer.plugins.interaction.pointer.global;
		// if(this.currentTrail)
		this.verifyInterception();

		// this.collide(delta, this.ball, this.ball2)
		// this.collide(delta, this.ball, this.ball3)
		this.collideBounds(delta, this.ball)



	}

	inteceptCircleLineSeg2(circle, line, radius){
	    var a, b, c, d, u1, u2, ret, retP1, retP2, v1, v2;
	    v1 = {};
	    v2 = {};
	    v1.x = line.p2.x - line.p1.x;
	    v1.y = line.p2.y - line.p1.y;
	    v2.x = line.p1.x - circle.x;
	    v2.y = line.p1.y - circle.y;
	    b = (v1.x * v2.x + v1.y * v2.y);
	    c = 2 * (v1.x * v1.x + v1.y * v1.y);
	    b *= -2;
	    d = Math.sqrt(b * b - 2 * c * (v2.x * v2.x + v2.y * v2.y - radius * radius));
	    if(isNaN(d)){ // no intercept
	        return [];
	    }
	    u1 = (b - d) / c;  // these represent the unit distance of point one and two on the line
	    u2 = (b + d) / c;    
	    retP1 = {};   // return points
	    retP2 = {}  
	    ret = []; // return array
	    if(u1 <= 1 && u1 >= 0){  // add point if on the line segment
	        retP1.x = line.p1.x + v1.x * u1;
	        retP1.y = line.p1.y + v1.y * u1;
	        ret[0] = retP1;
	    }
	    if(u2 <= 1 && u2 >= 0){  // second add point if on the line segment
	        retP2.x = line.p1.x + v1.x * u2;
	        retP2.y = line.p1.y + v1.y * u2;
	        ret[ret.length] = retP2;
	    }       
	    return ret;
	}


	inteceptCircleLineSeg(circle, line){
	    var a, b, c, d, u1, u2, ret, retP1, retP2, v1, v2;
	    v1 = {};
	    v2 = {};
	    v1.x = line.p2.x - line.p1.x;
	    v1.y = line.p2.y - line.p1.y;
	    v2.x = line.p1.x - circle.x;
	    v2.y = line.p1.y - circle.y;
	    b = (v1.x * v2.x + v1.y * v2.y);
	    c = 2 * (v1.x * v1.x + v1.y * v1.y);
	    b *= -2;
	    d = Math.sqrt(b * b - 2 * c * (v2.x * v2.x + v2.y * v2.y - circle.getExternalRadius() * circle.getExternalRadius()));
	    if(isNaN(d)){ // no intercept
	        return [];
	    }
	    u1 = (b - d) / c;  // these represent the unit distance of point one and two on the line
	    u2 = (b + d) / c;    
	    retP1 = {};   // return points
	    retP2 = {}  
	    ret = []; // return array
	    if(u1 <= 1 && u1 >= 0){  // add point if on the line segment
	        retP1.x = line.p1.x + v1.x * u1;
	        retP1.y = line.p1.y + v1.y * u1;
	        ret[0] = retP1;
	    }
	    if(u2 <= 1 && u2 >= 0){  // second add point if on the line segment
	        retP2.x = line.p1.x + v1.x * u2;
	        retP2.y = line.p1.y + v1.y * u2;
	        ret[ret.length] = retP2;
	    }       
	    return ret;
	}
	verifyInterception(){
		if(this.firstPoint && this.firstPoint.y < this.mousePosition.y){
			return
		}
		if(!this.tapping){
			return;
		}

		this.secPoint = {x:this.mousePosition.x,y:this.mousePosition.y};
		// console.log(this.firstPoint);
		// console.log(this.secPoint);

		let interception = this.inteceptCircleLineSeg(this.ball, {p1:this.firstPoint, p2:this.secPoint});
		// console.log(interception);
		if(interception.length < 2){
			return
		}
		this.tapping = false;
		let angleColision = -Math.atan2(interception[0].y - interception[1].y, interception[0].x - interception[1].x);
		angleColision += 90 / 180 * 3.14;
		// console.log(interception, angleColision * 180 / 3.14);
		let angle = -Math.atan2(this.firstPoint.y - this.secPoint.y, this.firstPoint.x - this.secPoint.x);
		angle += 90 / 180 * 3.14;
		//this.ball.x = config.width / 2;
        //this.ball.y = config.height;
        let force = utils.distance(this.firstPoint.x, this.firstPoint.y, this.secPoint.x, this.secPoint.y) * 0.025

       
        this.ball.shoot(force, angle, angleColision);
        this.paused = true;
        setTimeout(function() {this.paused = false;}.bind(this), 100);
	}
	onTapUp(){
		this.currentTrail = null;
		this.tapping = false;

		// console.log(renderer.plugins.interaction);
	}
	onTapDown(){
		this.currentTrail = this.getTrail();
		this.currentTrail.mesh.alpha = 0.2;
		this.currentTrail.mesh.blendMode = PIXI.BLEND_MODES.ADD;
		this.currentTrail.speed = 0.1
		this.currentTrail.update(0, this.mousePosition)
		this.tapping = true;
		this.firstPoint = {x:this.mousePosition.x,y:this.mousePosition.y};
	}
	removeEvents(){
		this.ingameUIContainer.interactive = false;
		this.ingameUIContainer.off('touchstart').off('mousedown');
		this.ingameUIContainer.off('touchend').off('mouseup');
	}
	addEvents(){
		this.removeEvents();
		this.ingameUIContainer.interactive = true;
		this.ingameUIContainer.on('mousedown', this.onTapDown.bind(this)).on('touchstart', this.onTapDown.bind(this));
		this.ingameUIContainer.on('mouseup', this.onTapUp.bind(this)).on('touchend', this.onTapUp.bind(this));
	}
	
}
