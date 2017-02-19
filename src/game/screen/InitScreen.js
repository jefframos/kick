import * as PIXI from 'pixi.js';
import TweenLite from 'gsap';
import config  from '../../config';
import utils  from '../../utils';
import Screen from '../../screenManager/Screen'
import Ball from '../entity/Ball'

import Collisions from '../core/Collisions';
import TrailManager from '../core/TrailManager';
import ViewManager from '../core/ViewManager';
import GoalView from '../entity/GoalView';

export default class InitScreen extends Screen{	
	constructor(label){
		super(label);
	}
	build(){
		super.build();

		this.backgroundContaier = new PIXI.Container();
		this.addChild(this.backgroundContaier);

		this.background = new PIXI.Graphics();
		this.background.beginFill(0xababab);
	    this.background.drawRect( 0, 0, config.width, config.height);
		this.backgroundContaier.addChild(this.background);

		this.field = new PIXI.Graphics().beginFill(0x3C8C57).drawRect(0,0,config.width, config.height);
		this.backgroundContaier.addChild(this.field)
		this.field.y = 150;

		this.sky = new PIXI.Graphics().beginFill(0x27BBE0).drawRect(0,0,config.width, 150);
		this.backgroundContaier.addChild(this.sky)

		this.gameContainer = new PIXI.Container();
		this.addChild(this.gameContainer);

		this.updateList = [];


        this.ball = new Ball(this,50);

        this.gameContainer.addChild(this.ball)

        this.ball.x = config.width / 2;
        this.ball.y = config.height - 200;


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


		this.goleira = new GoalView(this)
		this.goleira.build();
		this.goleira.x = config.width / 2
		this.goleira.y = 150

		this.gameContainer.addChild(this.goleira)

		this.textLabel = new PIXI.Text('---',{font : '20px', fill : 0x000000, align : 'right'});
		this.addChild(this.textLabel)

		this.collisions = new Collisions();
		this.viewManager = new ViewManager();
		this.trailManager = new TrailManager(this.ingameUIContainer);

        this.updateList.push(this.ball)
        this.updateList.push(this.goleira)
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
	debugBall(ballPosition, entity){
		if(this.testeBall && this.testeBall.parent){
			this.testeBall.parent.removeChild(this.testeBall)
		}
		this.testeBall = new PIXI.Graphics().lineStyle(1, 0xff0000).drawCircle(ballPosition.x,ballPosition.y, entity.getRadius());
		this.addChild(this.testeBall);
	}
	collideBounds(delta, entity){
		if(this.colliding){
			return
		}

		// if(!entity.shooting){
			if(entity.velocity.x > 0){
				if(entity.x > config.width + entity.getRadius()){
					this.reset();
				}
			}else if(entity.velocity.x < 0){
				if(entity.x < -entity.getRadius()){
					this.reset();
					// entity.virtualVelocity.x *= -0.1;
				}
			}
		// }

		if(entity.velocity.y > 0){
			if(entity.y > config.height * 0.8){
				// entity.velocity.y *= -0.5;
				// entity.y += entity.velocity.y * delta;
			}
		}else if(entity.velocity.y < 0){
			if(entity.y < this.goleira.y -10){

				if(this.colliding){
					return
				}
				let ballPosition = {
					x: this.ball.x,
					y: this.ball.y + this.ball.spriteContainer.y * this.ball.scale.y
				}
				this.textLabel.text = 'NOT GOAL'
				let collisions = [];
				let topStickPoint = this.goleira.getTopStick();
				collisions.push(this.detectSideCollision(this.goleira.getLeftStick(), entity,ballPosition))
				collisions.push(this.detectSideCollision(this.goleira.getRightStick(), entity,ballPosition))
				collisions.push(this.detectTopCollision(topStickPoint, entity,ballPosition))

				let killStandard = false
				let isGoal = true;


				for (var i = collisions.length - 1; i >= 0; i--) {
					let interception = collisions[i];
					if(interception.interception.length > 0){

						this.debugBall(ballPosition, entity);

						let distPos = (ballPosition.y - interception.p1.y) / entity.getRadius();
						if(isGoal)
							isGoal = distPos > 0;
						let distance = 1//utils.distance(interception[0].x,0,interception[1].x,0) / entity.getRadius()
						if(interception.type == 'side'){
							distPos = (ballPosition.x - interception.p1.x) / entity.getRadius();
							if(isGoal){
								isGoal = distPos > 0.1;
							}
							this.ball.backSide(distance, distPos, isGoal);

						}else{
							// console.log(ballPosition.x, ballPosition.y, interception.interception);
							let topStick = {x:ballPosition.x + this.ball.getRadius() * 0.5, y:interception.interception[0].y, getRadius:function(){return 5}}
			// 				if(utils.distance(topStick.x, topStick.y, entity.x, entity.y) < topStick.getRadius() + entity.getRadius()){
			// let angle = -Math.atan2(topStick.y - entity.y, topStick.x - entity.x);
							this.collisions.collideSticks(1/60, this.ball, topStick, ballPosition)
							//this.ball.back(distance, distPos, isGoal);
						}
						
						let label =  isGoal?'GOAL':'NOT GOAL'
						this.textLabel.text = distance +' - '+distPos+' - '+label;//interception[0].x + ' - ' +interception[0].y + ' - '+interception[1].x + ' - ' +interception[1].y//'COLIDIU'
						killStandard = true;
					}
				}



				let circle = {x:ballPosition.x,y:ballPosition.y, r:entity.getRadius() * 0.5}
				let rect = this.goleira.getGoalRect()

				let onGoal = this.collisions.rectCircleColliding(circle, rect);


				if(onGoal && this.ball.velocity.y < 0){
					this.ball.verticalVelocity.y += 8000 / -this.ball.velocity.y
					this.ball.velocity.y *= 0.25;
					this.ball.onGoal = true;
					this.textLabel.text = 'GOAL'
				}else{
					this.textLabel.text = 'NO GOAL'

					this.ball.spriteGravity *= 5
					this.ball.velocity.y *= 0.4
				}
				

				this.debugGoal(rect);
				// if(!this.colliding){
					// if(killStandard){
					// 	setTimeout(function() {this.reset();}.bind(this), 2000);
					// }else{
					// 	// this.paused = true;
					// 	setTimeout(function() {this.reset();}.bind(this), 1500);
					// }
				// }
				
				this.colliding = true;
			}
		}
	}

	
	
	update(delta){
		this.trailManager.update(delta, this.mousePosition);
		if(this.paused){
			return
		}
		super.update(delta);

		for (var i = this.updateList.length - 1; i >= 0; i--) {
			if(this.updateList[i].update){
				this.updateList[i].update(delta)
			}
			this.viewManager.updateObjectScale(this.updateList[i], config.height)
		}

		this.gameContainer.children.sort(utils.depthCompare);

		this.mousePosition = renderer.plugins.interaction.pointer.global;
		// if(this.currentTrail)
		this.verifyInterception();

		// this.collide(delta, this.ball, this.ball2)
		// this.collide(delta, this.ball, this.ball3)
		this.collideBounds(delta, this.ball)



	}

	debugGoal(rect){
		if(this.testeRect){
			this.testeRect.parent.removeChild(this.testeRect)
		}
		this.testeRect = new PIXI.Graphics().beginFill(0xFFFFFF).drawRect(rect.x,rect.y, rect.w,rect.h);
		this.addChild(this.testeRect)
		this.testeRect.alpha = 0.2
	}

	debugStick(target){
		this.testee = new PIXI.Graphics().lineStyle(2, 0xff0000).moveTo(target.p1.x,target.p1.y);
		this.testee.lineTo(target.p2.x,target.p2.y);
		this.addChild(this.testee);
	}

	verifyInterception(){
		if(!this.tapping || (this.firstPoint && this.firstPoint.y < this.mousePosition.y)){
			return
		}

		this.secPoint = {x:this.mousePosition.x,y:this.mousePosition.y};
		let interception = this.collisions.inteceptCircleLineSeg(this.ball, {p1:this.firstPoint, p2:this.secPoint});
		
		//just shoot if have two points of intersection
		if(interception.length < 2){
			return
		}
		this.tapping = false;

		//angle btx the intersection points
		let angleColision = -Math.atan2(interception[0].y - interception[1].y, interception[0].x - interception[1].x);
		angleColision += 90 / 180 * 3.14;;
		let frontBall = {x:this.ball.x, y:this.ball.y - this.ball.getRadius()}
		
		//angle btw front of the ball and the points
		let angle = -Math.atan2(this.firstPoint.y - frontBall.y, this.secPoint.x - frontBall.x);
		// let angle = -Math.atan2(this.firstPoint.y - this.secPoint.y, this.firstPoint.x - this.secPoint.x);
		angle += 90 / 180 * 3.14;
        let force = utils.distance(this.firstPoint.x, this.firstPoint.y, this.secPoint.x, this.secPoint.y) * 0.025

       
        this.ball.shoot(force, angle, angleColision);
        this.paused = true;
        setTimeout(function() {this.paused = false;}.bind(this), 100);
	}
	
	detectTopCollision(target, entity,ballPosition){
		this.debugStick(target)
		return this.collisions.detectTopCollision(target, entity,ballPosition);
	}

	detectSideCollision(target, entity,ballPosition){
		this.debugStick(target)
		return this.collisions.detectSideCollision(target, entity,ballPosition);
	}
	onTapUp(){
		this.trailManager.removeTrail();
		this.tapping = false;
	}
	onTapDown(){
		// this.ball.shoot(6.5 , 0,  0);
		this.reset();
		this.ball.shoot(6.5 + Math.random() * 0.8, Math.random() * 0.4 - 0.2,  Math.random() * 0.1 - 0.05);
		this.tapping = true;
		this.firstPoint = {x:this.mousePosition.x,y:this.mousePosition.y};
		this.trailManager.startNewTrail(this.mousePosition);
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
