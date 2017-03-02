import * as PIXI from 'pixi.js';
import Filters from 'pixi-filters';
import TweenLite from 'gsap';
import config  from '../../config';
import utils  from '../../utils';
import Screen from '../../screenManager/Screen'

import Obstacle from '../entity/Obstacle'
import Target from '../entity/Target'

import Collisions from '../core/Collisions';
import TrailManager from '../core/TrailManager';
import ViewManager from '../core/ViewManager';
import LevelManager from '../core/LevelManager';
import Goal from '../entity/Goal';


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

		let tex;

		tex = PIXI.Texture.fromImage('./assets/images/torcida.jpg');
		this.sky = new PIXI.extras.TilingSprite(tex, config.width + 100, config.height + 100);//new PIXI.Graphics().beginFill(0x27BBE0).drawRect(0,0,config.width, 150);
		this.backgroundContaier.addChild(this.sky)
		this.sky.tileScale.x = 0.25
		this.sky.tileScale.y = 0.25
		this.sky.x = -50
		this.sky.y = -50


		tex = PIXI.Texture.fromImage('./assets/images/grass1.png');
		this.field = new PIXI.extras.TilingSprite(tex, config.width  + 100, config.height  + 100);//new PIXI.Graphics().beginFill(0x3C8C57).drawRect(0,0,config.width, config.height);
		this.backgroundContaier.addChild(this.field)
		this.field.tileScale.x = 0.25/2
		this.field.tileScale.y = 0.25/2
		this.field.y = 150;
		this.field.x = -50


		this.gameContainer = new PIXI.Container();
		this.addChild(this.gameContainer);

		this.updateList = [];
		this.targets = [];
		this.currentBalls = [];
		this.lifes = 5;


        // this.currentBalls.push(this.levelManager.getBall());

        this.ingameUIContainer = new PIXI.Container();
        
		this.addChild(this.ingameUIContainer);
		this.backgroundIngameUI = new PIXI.Graphics().beginFill(0x023548).drawRect(0,0,config.width, config.height);
		this.backgroundIngameUI.alpha = 0;
		this.ingameUIContainer.addChild(this.backgroundIngameUI)


		this.outgameUIContainer = new PIXI.Container();
		this.addChild(this.outgameUIContainer);

		

		this.currentTrail = false;


		this.goleira = new Goal(this)
		this.goleira.build();
		this.goleira.x = config.width / 2
		this.goleira.y = 150

		this.gameContainer.addChild(this.goleira)

		this.textLabel = new PIXI.Text('---',{font : '20px', fill : 0x000000, align : 'right'});
		this.addChild(this.textLabel)

		this.textScore = new PIXI.Text('0',{font : '50px', fill : 0x000000, align : 'right'});
		this.addChild(this.textScore)
		this.textScore.x = config.width / 2 - this.textScore.width / 2;
		this.textScore.y = config.height - this.textScore.height - 20

		this.debug2 = new PIXI.Text('---',{font : '20px', fill : 0x000000, align : 'right'});
		this.addChild(this.debug2)
		this.debug2.y = config.height - 20;

		this.collisions = new Collisions(this);
		this.viewManager = new ViewManager();
		this.levelManager = new LevelManager(this);
		this.trailManager = new TrailManager(this.ingameUIContainer);

        // this.updateList.push(this.currentBalls)
        this.add(this.goleira)


        this.lifes = 5;
		// this.startGame();
		

        this.button = new PIXI.Container();
        this.shape = new PIXI.Graphics().beginFill(0).drawCircle(0,0,80);
        this.button.addChild(this.shape)
        this.outgameUIContainer.addChild(this.button)
        this.button.x = config.width / 2;
        this.button.y = config.height / 2;
        this.button.interactive = true;

		this.addEvents();

		this.pixelate = new PIXI.filters.PixelateFilter()
		this.pixelate.size.x = 4;
		this.pixelate.size.y = 4;
		this.gameContainer.filters = [this.pixelate]
		this.ingameUIContainer.filters = [this.pixelate]
		this.ingameUIContainer.filters = [this.pixelate]
		this.outgameUIContainer.filters = [this.pixelate]

		// this.dot = new PIXI.Graphics().beginFill(0xFF0000).drawCircle(0,0,5);
		// this.addChild(this.dot)

		// this.trail = new Trail(this, 50, PIXI.Texture.from('assets/images/rainbow-flag2.jpg'));
  //       this.trail.trailTick = 15;
  //       this.trail.speed = 0.01;
  //       this.trail.frequency = 0.001
  //       this.addChild(this.trail)

	}
	remove(entity){
		for (var i = this.updateList.length - 1; i >= 0; i--) {
			if(this.updateList[i] == entity){
				this.updateList.splice(i,1)
			}
		}
	}
	add(entity){
		this.remove(entity)
		for (var i = this.updateList.length - 1; i >= 0; i--) {
			if(this.updateList[i] == entity){
				return
			}
		}
		this.updateList.push(entity)
		this.gameContainer.addChild(entity)
	}
	

	createLifes(){
		this.textScore.text = 0;
		if(this.lifesUI){
			for (var i = this.lifesUI.length - 1; i >= 0; i--) {
				if(this.lifesUI[i].parent){
					this.lifesUI[i].parent.removeChild(this.lifesUI[i]);
				}
			}
		}
		this.lifesUI = [];
		for (var i = 0; i < this.lifes; i++) {
			let hearthUI = PIXI.Sprite.fromImage('assets/images/onion.png');
			this.lifesUI.push(hearthUI)
			hearthUI.x = config.width - 25 * i - 20;
			hearthUI.y = 25;
			hearthUI.anchor.set(0.5);
			hearthUI.width = 20
			hearthUI.height = 20
			
			this.addChild(hearthUI)
		}
	}
	updateLifes(){
		this.textScore.text = this.points;
		for (var i = this.lifesUI.length - 1; i >= 0; i--) {
			if((i + 1) > this.lifes){
				this.lifesUI[i].tint = 0x000000;
			}
		}
	}
	gameOver(){
        this.button.visible = true;
        this.button.scale.set(0);
        TweenLite.to(this.button.scale, 0.8, {x:1, y:1, ease:'easeOutElastic'})

		for (var i = this.levelManager.obstacles.length - 1; i >= 0; i--) {
			if(this.levelManager.obstacles[i].parent){
				this.levelManager.obstacles[i].parent.removeChild(this.levelManager.obstacles[i])
			}
		}

		// for (var i = this.currentBalls.length - 1; i >= 0; i--) {
		// 	if(this.currentBalls[i].parent){
		// 		this.currentBalls[i].parent.removeChild(this.currentBalls[i])
		// 	}
		// }
		
		this.goleira.reset();
		// this.currentBalls = [];
		this.levelManager.obstacles = [];

		this.gameStarted = false;

		// this.paused = true;

	}
	startGame(){
		this.lifes = 5;
		this.points = 0;
        this.getNewBall();
        this.createLifes();
        this.levelManager.createObstacles();
        this.levelManager.addTargets();
        TweenLite.to(this.button.scale, 0.2, {x:0, y:0, ease:'easeInBack'})
        // this.button.visible = false;
        this.gameStarted = true;
        // this.paused = false;
	}
	getNewBall(){
		let ball = this.levelManager.getBall();
		this.spotedBall = ball;
		this.currentBalls.push(this.spotedBall)
	}
	reset(){
		if(!this.gameStarted){
			return
		}
		setTimeout(function() {
			this.getNewBall();
		}.bind(this), 500);
		console.log('reset');
		this.paused = false;		
		this.colliding = false;
        
	}
	removeBalls(){
		for (var i = this.currentBalls.length - 1; i >= 0; i--) {
			this.currentBalls[i].killBall();
		}
	}
	debugBall(ballPosition, entity){
		if(this.testeBall && this.testeBall.parent){
			this.testeBall.parent.removeChild(this.testeBall)
		}
		this.testeBall = new PIXI.Graphics().lineStyle(1, 0xff0000).drawCircle(ballPosition.x,ballPosition.y, entity.getRadius());
		this.addChild(this.testeBall);
	}
	
	
	updateGame(){
		this.updateLifes();
		if(this.lifes){
			this.levelManager.createObstacles();
		}
	}
	missShoot(){
		this.lifes -- ;
		this.updateLifes();

		if(this.lifes <= 0){
			this.gameStarted = false;
			setTimeout(function() {
				this.removeBalls();
			}.bind(this), 750);
			setTimeout(function() {
				this.gameOver();
			}.bind(this), 1000);
			
		}

	}
	update(delta){
		this.trailManager.update(delta, this.mousePosition);
		if(this.paused){
			return
		}
		super.update(delta);

		if(this.spotedBall){
			// this.dot.x = this.spotedBall.x
			// this.dot.y = this.spotedBall.y + this.spotedBall.spriteContainer.y

			// this.trail.update(delta, {x:this.dot.x, y:this.dot.y})
		}

		this.debug2.text = delta

		for (var i = this.updateList.length - 1; i >= 0; i--) {
			if(this.updateList[i].update){
				this.updateList[i].update(delta)
			}
			this.viewManager.updateObjectScale(this.updateList[i], config.height)
		}

		this.gameContainer.children.sort(utils.depthCompare);

		if(this.tapping){
			this.mousePosition = renderer.plugins.interaction.pointer.global;
		}
		// if(this.currentTrail)

		// this.collide(delta, this.currentBalls, this.currentBalls2)
		// console.log(this.currentBalls.length);
		// if(this.debug2.text != this.currentBalls.length){
		// 	this.debug2.text = this.currentBalls.length;
		// }
		this.goleira.update(delta);

		// console.log(this.levelManager.obstacles.length);
		if(this.gameStarted){
			let collideObs = false	
			for (var i = this.currentBalls.length - 1; i >= 0; i--) {
				if(!this.currentBalls[i].collided){
					for (var j = this.levelManager.obstacles.length - 1; j >= 0; j--) {
						if(this.collisions.collideEntities(delta, this.currentBalls[i], this.levelManager.obstacles[j])){
							this.shake();
							collideObs = this.currentBalls[i];				
							//alert('collide')		
						}
					}
				}
				
				if(
					this.mousePosition &&
					(this.mousePosition.x > 0 && this.mousePosition.x < config.width) &&
					(this.mousePosition.y > 0 && this.mousePosition.y < config.height)
				){
					this.verifyInterception(this.currentBalls[i]);
				}
				this.collisions.collideBounds(delta, this.currentBalls[i])

				if(this.currentBalls[i].killed){
					this.currentBalls.splice(i, 1);
				}
			}

			if(collideObs){// && collideObs.velocity.y <= 10){
				collideObs.stickCollide();
				this.missShoot();
				this.updateGame();
				console.log('collide', collideObs.virtualVelocity.y)
				collideObs = false;
			}
		}



	}
	goal(goals = 1){
		this.points += goals;
		this.updateLifes();
	}
	noGoal(){
		this.lifes --;
		this.updateLifes();
	}

	debugGoal(rect){
		if(this.testeRect){
			this.testeRect.parent.removeChild(this.testeRect)
		}
		this.testeRect = new PIXI.Graphics().beginFill(0x00FFFF).drawRect(rect.x,rect.y, rect.w,rect.h);
		this.addChild(this.testeRect)
		this.testeRect.alpha = 0.2
	}

	debugStick(target){
		this.testee = new PIXI.Graphics().lineStyle(2, 0xff0000).moveTo(target.p1.x,target.p1.y);
		this.testee.lineTo(target.p2.x,target.p2.y);
		this.addChild(this.testee);
	}

	verifyInterception(entity){
		if(!this.tapping || (this.firstPoint && this.firstPoint.y < this.mousePosition.y)){
			return
		}

		this.secPoint = {x:this.mousePosition.x,y:this.mousePosition.y};
		let interception = this.collisions.inteceptCircleLineSeg(entity, {p1:this.firstPoint, p2:this.secPoint});
		
		//just shoot if have two points of intersection
		// if(interception.length == 1){
		// 	console.log(interception[0].y);
		// 	if(interception[0].y < entity.y){
		// 		alert('cavadinha')
		// 	}
		// }
		if(interception.length < 2){
			return
		}
		this.tapping = false;

		//angle btx the intersection points
		let angleColision = -Math.atan2(interception[0].y - interception[1].y, interception[0].x - interception[1].x);
		angleColision += 90 / 180 * 3.14;;
		let frontBall = {x:entity.x, y:entity.y - entity.getRadius()}
		
		//angle btw front of the ball and the points
		//let mid = this.getMiddlePoint(this.firstPoint.x,this.firstPoint.y, this.secPoint.x,this.secPoint.y);
		let angle = -Math.atan2(this.firstPoint.y - frontBall.y, this.secPoint.x - frontBall.x);
		// let angle = -Math.atan2(this.firstPoint.y - this.secPoint.y, this.firstPoint.x - this.secPoint.x);
		angle += 90 / 180 * 3.14;


        let force = utils.distance(this.firstPoint.x, this.firstPoint.y, this.secPoint.x, this.secPoint.y) * 0.025

        this.debug2.text = force;
       
        entity.shoot(force, angle, angleColision);

        this.reset();

        this.paused = true;
        setTimeout(function() {this.paused = false;}.bind(this), 100);
	}
	getMiddlePoint(x0,y0,x1,y1){
		let dx = x1-x0;
		let dy = y1-y0
		let midX = x0 + dx*0.50;
		let midY = y0 + dy*0.50;

		return {x:midX, y:midY}
	}
	
	detectTopCollision(target, entity,ballPosition){
		// this.debugStick(target)
		return this.collisions.detectTopCollision(target, entity,ballPosition);
	}

	detectSideCollision(target, entity,ballPosition){
		// this.debugStick(target)
		return this.collisions.detectSideCollision(target, entity,ballPosition);
	}
	onTapUp(){
		this.trailManager.removeTrail();
		this.tapping = false;
	}
	shootLeft(){
		let tempBall = this.levelManager.getBall()
		this.currentBalls.push(tempBall)
		tempBall.stopMiddle();
		tempBall.shoot(4.5 + Math.random() * 0.8, 0, Math.random() * 0.03 - 0.015 + 0.35);
	}
	shootRight(){
		let tempBall = this.levelManager.getBall()
		this.currentBalls.push(tempBall)
		tempBall.stopMiddle();
		tempBall.shoot(4.5 + Math.random() * 0.8, 0, Math.random() * 0.03 - 0.015 - 0.35);
	}
	shootTop(){
		let tempBall = this.levelManager.getBall()
		this.currentBalls.push(tempBall)
		tempBall.stopMiddle();
		tempBall.shoot(6.5 + Math.random() * 0.8, Math.random() * 0.4 - 0.2,  Math.random() * 0.1 - 0.05);
	}

	shootMiddle(){
		let tempBall = this.levelManager.getBall()
		this.currentBalls.push(tempBall)
		tempBall.stopMiddle();
		tempBall.shoot(5 + Math.random() * 0.5, Math.random() * 0.4 - 0.2,   Math.random() * 0.1 - 0.05);
	}

	onTapDown(){
		// this.currentBalls.shoot(6.5 , 0,  0);
		// for (var i = 51; i >= 0; i--) {
		// 	let rnd = Math.random()
		// 	if(rnd < 0.33){
		// 		this.shootTop()
		// 	}else if(rnd < 0.66){
				// this.shootLeft()
		// 	}else{
		// 		this.shootRight()
		// this.shootMiddle();
		// 	}
		// }
		// this.shootLeft()
		// this.shootRight()
		// this.shootTop()
		// // //TOP SHOOT
		// tempBall.shoot(6.5 + Math.random() * 0.8, Math.random() * 0.4 - 0.2,  Math.random() * 0.1 - 0.05);
		this.tapping = true;
		this.mousePosition = renderer.plugins.interaction.pointer.global;
		this.firstPoint = {x:this.mousePosition.x,y:this.mousePosition.y};
		this.trailManager.startNewTrail(this.mousePosition);
	}
	removeEvents(){
		this.ingameUIContainer.interactive = false;
		this.ingameUIContainer.off('touchstart').off('mousedown');
		this.ingameUIContainer.off('touchend').off('mouseup');
		this.button.off('touchstart').off('mousedown');
	}
	addEvents(){
		this.removeEvents();
		this.ingameUIContainer.interactive = true;
		this.ingameUIContainer.on('mousedown', this.onTapDown.bind(this)).on('touchstart', this.onTapDown.bind(this));
		this.ingameUIContainer.on('mouseup', this.onTapUp.bind(this)).on('touchend', this.onTapUp.bind(this));
		this.button.on('mousedown', this.startGame.bind(this)).on('touchstart', this.startGame.bind(this));
	}
	shake(force = 0.5, steps = 4, time = 0.4){
		let timelinePosition = new TimelineLite();
		let positionForce = (force * 50);
		let spliterForce = (force * 20);
		let speed = time / steps;
		let currentPosition = {x:this.x, y:this.y};
		for (var i = steps; i >= 0; i--) {
			timelinePosition.append(TweenLite.to(this.position, speed, {x:currentPosition.x+ Math.random() * positionForce - positionForce/2, y:currentPosition.y+ Math.random() * positionForce - positionForce/2, ease:"easeNoneLinear"}));
		};

		timelinePosition.append(TweenLite.to(this.position, speed, {x:currentPosition.x, y:currentPosition.y, ease:"easeeaseNoneLinear"}));		
	}
	
}
