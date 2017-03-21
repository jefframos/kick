import * as PIXI from 'pixi.js';
import config  from '../../config';
import utils  from '../../utils';
export default class Collisions{
	constructor(game) {
		this.game = game;
	}
	detectTopCollision(target, entity,ballPosition){
		let interception = this.inteceptCircleLineSeg2(ballPosition, {p1:target.p1, p2:target.p2}, entity.getRadius());
		return {interception:interception, p1:target.p1, p2:target.p2, type:'top'}
	}

	detectSideCollision(target, entity,ballPosition){
		let interception = this.inteceptCircleLineSeg2(ballPosition, {p1:target.p1, p2:target.p2}, entity.getRadius());
		return {interception:interception, p1:target.p1, p2:target.p2, type:'side'}	
	}
	collideBounds(delta, entity){
		if(entity.collided){
			return;
		}

		if(entity.x < -50 || entity.x > config.width + 50){
			return true
		}

		if(entity.velocity.y < 0){
			if(entity.y < this.game.goleira.y -10){
				let ballPosition = {
					x: entity.x,
					y: entity.y + entity.spriteContainer.y * entity.scale.y
				}
				// this.game.debugBall(ballPosition, entity);
				this.game.uiManager.textLabel.text = ''//'NOT GOAL'
				let collisions = [];
				let topStickPoint = this.game.goleira.getTopStick();
				collisions.push(this.game.detectSideCollision(this.game.goleira.getLeftStick(), entity,ballPosition))
				collisions.push(this.game.detectSideCollision(this.game.goleira.getRightStick(), entity,ballPosition))
				collisions.push(this.game.detectTopCollision(topStickPoint, entity,ballPosition))

				let isGoal = true;
				let travessao = false;
				let traveRight = false;
				let traveLeft = false;
				entity.stickCollide();
				let distance = 0;
				for (var i = collisions.length - 1; i >= 0; i--) {
					let interception = collisions[i];
					if(interception.interception.length > 0){
						if(interception.type == 'side'){
							// traves = true;
							if(interception.interception[0].x > config.width/2){
								traveRight = true;
							}else{
								traveLeft = true;
							}
							// console.log('interception', interception.interception[0].x, config.width/2);
							let sideStick = {x:interception.interception[0].x, y:ballPosition.y + 1, getRadius:function(){return 1}}
							this.collideSticksSide(1/60, entity, sideStick, ballPosition)
						}else{

							travessao = true;
							let topStick = {x:ballPosition.x + 1, y:interception.interception[0].y, getRadius:function(){return 1}}
							// let topStick = {x:ballPosition.x + entity.getRadius() * 0.5, y:interception.interception[0].y, getRadius:function(){return 5}}
							this.collideSticks(1/60, entity, topStick, ballPosition)
							distance = utils.distance(interception.interception[0].y,0,ballPosition.y,0)
						}
					}
				}

				let circle = {x:ballPosition.x,y:ballPosition.y, r:entity.getRadius() * 0.9}
				let rect = this.game.goleira.getGoalRect()
				let onGoal = this.rectCircleColliding(circle, rect);

				// this.game.debugGoal(rect)

				// this.debugBall()

				if(onGoal && entity.velocity.y < 0){
					let points = 0;
					entity.verticalVelocity.y += 2000 //-entity.velocity.y// / -entity.velocity.y
					this.game.uiManager.textLabel.text = 'GOAL'
					points = 1;
					if(travessao){
						this.game.uiManager.textLabel.text = this.game.uiManager.textLabel.text+ ' - travetop'
						entity.verticalVelocity.y += 5000 //-entity.velocity.y// / -entity.velocity.y
					}
					if(traveLeft){
						entity.velocity.y *= 2; //2 * Math.abs(entity.velocity.x);
						entity.rotationInfluence.x *= 10;
						entity.velocity.x =  1.5 * Math.abs(entity.velocity.y);//-entity.velocity.y
						this.game.uiManager.textLabel.text = this.game.uiManager.textLabel.text+ ' - traveLeft'
					}
					if(traveRight){
						entity.velocity.y *= 2;
						entity.rotationInfluence.x *= -10;
						entity.velocity.x = 1.5 * -Math.abs(entity.velocity.y);//-= -entity.velocity.y
						this.game.uiManager.textLabel.text = this.game.uiManager.textLabel.text+ ' - traveRight'
					}
					entity.velocity.y *= 0.15;
					entity.rotationInfluence.x *= 0.25;
					entity.onGoal = true;


					let targets = this.game.goleira.getTargetList();
					for (var i = targets.length - 1; i >= 0; i--) {
						let dist = utils.distance(targets[i].x, targets[i].y, ballPosition.x, ballPosition.y)
						// console.log(dist, targets[i].r + entity.getRadius());
						let radiusDistance = targets[i].r + entity.getRadius()
						let radiusDistanceInner = targets[i].r/2 + entity.getRadius()/2
						if(dist < radiusDistanceInner){
							this.game.uiManager.textLabel.text = 'na mosca'
							targets[i].target.onTarget();
							if(this.game.lifes < 5)
								this.game.lifes ++
							points = GAME_DATA.perfectShoot;
						}else if(dist < radiusDistance){
							targets[i].target.onTarget();
							this.game.uiManager.textLabel.text = 'no angulo'
							points =  GAME_DATA.goodShoot;
						}
					}

					this.game.goal(points);


				}else{
					this.game.uiManager.textLabel.text = 'NO GOAL'
					this.game.missShoot();
					entity.velocity.y *= 0.6
					if(travessao && distance > 5){
						this.game.uiManager.textLabel.text = this.game.uiManager.textLabel.text+ ' - travetop - '+distance
						entity.velocity.y = -Math.abs(entity.velocity.y)
					}
					if(traveLeft){
						entity.rotationInfluence.x *= 10;
						entity.velocity.x = 3 * -Math.abs(entity.velocity.y);
						this.game.uiManager.textLabel.text = this.game.uiManager.textLabel.text+ ' - traveLeft NO'
					}
					if(traveRight){
						entity.rotationInfluence.x *= -10;
						entity.velocity.x = 3 * Math.abs(entity.velocity.y);
						this.game.uiManager.textLabel.text = this.game.uiManager.textLabel.text+ ' - traveRight NO'
					}

					entity.spriteGravity *= 5
					entity.rotationInfluence.x *= 0.25;
					console.log('finished on coll');
				}

				if(travessao || traveLeft || traveRight){
					//this.game.shake()
				}
				this.game.colliding = true;
				entity.resetCollisions();

				console.log('finished on coll');
				//this.game.finishedBall(750);
				//this.game.updateGame();
			}
		}

	}
	collideEntities2(delta, entity, toCollide){
		if(entity.obstacleCollided){
			for (var i = entity.obstacleCollided.length - 1; i >= 0; i--) {
				if(entity.obstacleCollided[i] == toCollide){
					return
				}
			}
		}
		let distance = utils.distance(toCollide.x, toCollide.y, entity.x, entity.y);
		let circleCollide = distance < toCollide.getRadius() + entity.getRadius();
		let realCollide = false;
		let headCollide = false;
		let headDistance = 0;
		if(circleCollide){
				let ballPosition = {
					x: entity.x,
					y: entity.y + entity.spriteContainer.y * entity.scale.y
				}
				let hDistance = utils.distance(0, toCollide.y, 0, ballPosition.y)
			// if(utils.distance(toCollide.x, toCollide.y - toCollide.bounds.height, entity.x, entity.y) < toCollide.bounds.height){
				let toCompare = toCollide.getBounds().height - entity.getRadius()/2
				realCollide = hDistance < toCompare;

				if(!realCollide){
					headDistance = utils.distance(0, toCollide.y - toCollide.getBounds().height, 0, ballPosition.y)
					if(headDistance < entity.getRadius()){
						console.log('NA CABECA');
						realCollide = true;
						headCollide = true;
					}
				}


				// console.log(realCollide, 'REAL COLLIDE', hDistance, toCompare, headDistance);
			// }
		}
		// console.log(toCollide, toCollide.getRadius());
		if(realCollide){
			let distPercent =  distance / (toCollide.getRadius() + entity.getRadius());
			console.log(distPercent)//, angle * 180 / 3.14);
			let angle = -Math.atan2(toCollide.y - entity.y, toCollide.x - entity.x);
			angle += 90 / 180 * 3.14;

// angle *= angle
			entity.velocity.x = Math.sin(angle) * - Math.abs(entity.speed.x);
			if(headCollide){
				let headDistPercent = headDistance / entity.getRadius() 
				// console.log('HEAD COLLIDE AQUI', headDistPercent, entity.verticalVelocity.y);
				entity.velocity.y *= (headDistPercent * 2);
				entity.verticalVelocity.y *= (headDistPercent  * 5)
				//entity.velocity.y = Math.abs(entity.velocity.y/2);
				//entity.verticalVelocity.y = Math.abs(entity.verticalVelocity.y/2);
				entity.update(1/60)
			}else{
				entity.velocity.y = Math.cos(angle) * entity.velocity.y  + (entity.velocity.y * distPercent) //+ entity.velocity.y;
			}
			// entity.velocity.y = Math.cos(angle) * - Math.abs(entity.speed.y) + entity.velocity.y - (entity.velocity.y * distPercent) //+ entity.velocity.y;


			// let percent = (Math.abs(entity.velocity.x) + Math.abs(entity.velocity.y))/(Math.abs(entity.speed.x) + Math.abs(entity.speed.y))
			// entity.rotationInfluence.x *= Math.sin(angle)
			// entity.velocity.x = Math.sin(angle) * -Math.abs(entity.speed.x) * percent;

			// //esquisito, mas por enquanto funciona
			// angle += 90 / 180 * 3.14
			// entity.velocity.y = Math.cos(angle) * (Math.abs(entity.speed.y )) + Math.cos(angle) * entity.velocity.y;//(entity.velocity.y);
			entity.obstacleCollided.push(toCollide);


			//ORIGINAL
			// let angle = -Math.atan2(entity.y - this.y, entity.x - this.x) //* 180 / 3.14
			// angle += 90 / 180 * 3.14
			// entity.velocity.x = Math.sin(angle) * - Math.abs(entity.speed.x);
			// entity.velocity.y = Math.cos(angle) * - Math.abs(entity.speed.y);
			// entity.update(1/60)
		}

		return realCollide
	}

	collideEntities(delta, entity, toCollide){
		// console.log('TESTING COLLISION lalala');
		// if(entity.obstacleCollided){
		// 	for (var i = entity.obstacleCollided.length - 1; i >= 0; i--) {
		// 		if(entity.obstacleCollided[i] == toCollide){
		// 			return
		// 		}
		// 	}
		// }
		let distance = utils.distance(toCollide.x, toCollide.y, entity.x, entity.y);
		let circleCollide = distance < toCollide.getRadius() + entity.getRadius();
		let realCollide = false;
		let headCollide = false;
		let headDistance = 0;
		// console.log('LALALA',entity.y, toCollide.y)
		if(entity.y - entity.getRadius() <= toCollide.y){
			// console.log('LALALA',entity.y, entity.getRadius() ,toCollide.y)
				let ballPosition = {
					x: entity.x,
					y: entity.y + entity.spriteContainer.y * entity.scale.y
				}
				this.game.debugBall(ballPosition, entity)
				let hDistance = utils.distance(0, toCollide.y, 0, ballPosition.y)
			// if(utils.distance(toCollide.x, toCollide.y - toCollide.bounds.height, entity.x, entity.y) < toCollide.bounds.height){
				let toCompare = toCollide.getBounds().height - entity.getRadius()/2
				realCollide = hDistance < toCompare;

				if(!realCollide){
					headDistance = utils.distance(0, toCollide.y - toCollide.getBounds().height, 0, ballPosition.y)
					if(headDistance < entity.getRadius()){
						console.log('NA CABECA');
						realCollide = true;
						headCollide = true;
					}
				}


				// console.log(realCollide, 'REAL COLLIDE', hDistance, toCompare, headDistance);
			// }
		}
		// console.log(toCollide, toCollide.getRadius());
		if(realCollide){
			let distPercent =  distance / (toCollide.getRadius() + entity.getRadius());
			let angle = -Math.atan2(toCollide.y - entity.y, toCollide.x - entity.x);
			angle += 90 / 180 * 3.14;
			entity.velocity.x = Math.sin(angle) * - Math.abs(entity.speed.x);
			entity.velocity.y = Math.cos(angle) * entity.velocity.y  + (entity.velocity.y * distPercent)
			entity.obstacleCollided.push(toCollide);
		}

		return realCollide
	}

	collideGoalkeeper(delta, entity, goalkeeper){
		if(entity.goalkeeperTesting){
			return
		}
		let ball = {
			x: entity.x,
			y: entity.y + entity.spriteContainer.y * entity.scale.y,
			getRadius:function(){
				return 1
			}
		}

		if(entity.y - entity.getRadius() <= goalkeeper.y){
			console.log(ball, goalkeeper.y);
			entity.goalkeeperTest()
			// this.game.debugBall(ball, entity);
			let parts = goalkeeper.returnBodyParts();
			// for (var i = parts.length - 1; i >= 0; i--) {				
			// 	this.game.debugBall(parts[i], parts[i]);
			// }

			let collided = null;
			for (var i = parts.length - 1; i >= 0; i--) {
				let partRadius = parts[i].getRadius();
				let distance = utils.distance(parts[i].x, parts[i].y, ball.x, ball.y)

				if(distance < partRadius + entity.getRadius()){


					if(!collided || (collided && collided.distance > distance))
					{
						collided = {distance:distance, entity:parts[i]}
					}

				}
			}
			if(collided){
				let angle = -Math.atan2(collided.entity.y - ball.y, collided.entity.x - ball.x);
				angle += Math.PI * 90 / 180
				entity.velocity.x = entity.velocity.y * Math.sin(angle);

				entity.velocity.y = Math.abs(entity.velocity.y) / 3;

				return true
			}
		}
		return false

	}


	collideSticks(delta, entity, toCollide, ballPosition){
		let distance = utils.distance(toCollide.x, toCollide.y, ballPosition.x, ballPosition.y) < toCollide.getRadius() + entity.getRadius();
		//console.log(ballPosition.x,ballPosition.y, toCollide, toCollide.getRadius());
		if(distance){

			entity.stickCollide();

			let angle = -Math.atan2(toCollide.y - ballPosition.y, toCollide.x - ballPosition.x);
			//angle -= 30 / 180 * 3.14;
			let percent = (Math.abs(entity.velocity.x) + Math.abs(entity.velocity.y))/(Math.abs(entity.speed.x) + Math.abs(entity.speed.y))			
			angle -= 180 / 180 * 3.14;
			// entity.velocity.y = Math.sin(angle) * - Math.abs(entity.speed.y)// * percent);
			// console.log('1',entity.velocity.y);	
			//TROCAR ENTRE SENOS E COSSENOS AQUI

			entity.velocity.y = (Math.sin(angle) *  Math.abs((entity.velocity.y * 2)) - entity.velocity.y) / percent
			// entity.velocity.y =Math.sin(angle) * Math.abs(entity.velocity.y*2) + entity.velocity.y

			// entity.velocity.y = Math.sin(angle) * (entity.velocity.y)// * percent);
			// angle += 180 / 180 * 3.14;//GAMBIARRAS AQUI, QUASE LAHlo
			entity.verticalVelocity.y = Math.cos(angle) * (entity.velocity.y * 20 / percent)//(entity.shootYSpeed * percent);
			// console.log('2', Math.sin(angle), entity.velocity.y);	
			// console.log('1',entity.velocity.y, entity.verticalVelocity.y);	
			// console.log('angle --', angle * 180 / 3.14);
			// console.log('-----');	
		}
	}

	collideSticksSide(delta, entity, toCollide, ballPosition){
		let distance = utils.distance(toCollide.x, toCollide.y, ballPosition.x, ballPosition.y) < toCollide.getRadius() + entity.getRadius();
		//console.log(ballPosition.x,ballPosition.y, toCollide, toCollide.getRadius());
		if(distance){

			entity.stickCollide();

			let angle = -Math.atan2(toCollide.y - ballPosition.y, toCollide.x - ballPosition.x);
			//angle -= 30 / 180 * 3.14;
			let percent = (Math.abs(entity.velocity.x) + Math.abs(entity.velocity.y))/(Math.abs(entity.speed.x) + Math.abs(entity.speed.y))			
			angle -= 180 / 180 * 3.14;
			// entity.velocity.y = Math.sin(angle) * - Math.abs(entity.speed.y)// * percent);
			// console.log('1',entity.velocity.y);	
			//TROCAR ENTRE SENOS E COSSENOS AQUI
			entity.velocity.x = -Math.cos(angle) * (entity.velocity.x*2)// * percent);
			// angle -= 180 / 180 * 3.14;//GAMBIARRAS AQUI, QUASE LAHlo
			entity.velocity.y = Math.sin(angle) *  Math.abs((entity.velocity.y * 2)) + entity.velocity.y

			// if(entity)
		}
	}

	rectCircleColliding(circle,rect){
	    var distX = Math.abs(circle.x - rect.x-rect.w/2);
	    var distY = Math.abs(circle.y - rect.y-rect.h/2);

	    if (distX > (rect.w/2 + circle.r)) { return false; }
	    if (distY > (rect.h/2 + circle.r)) { return false; }

	    if (distX <= (rect.w/2)) { return true; } 
	    if (distY <= (rect.h/2)) { return true; }

	    var dx=distX-rect.w/2;
	    var dy=distY-rect.h/2;
	    return (dx*dx+dy*dy<=(circle.r*circle.r));
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

	collideCircleWithRotatedRectangle ( circle, rect ) {
		
		var rectCenterX = rect.x;
		var rectCenterY = rect.y;

		var rectX = rectCenterX - rect.width / 2;
		var rectY = rectCenterY - rect.height / 2;

		var rectReferenceX = rectX;
		var rectReferenceY = rectY;
		
		// Rotate circle's center point back
		var unrotatedCircleX = Math.cos( rect.rotation ) * ( circle.x - rectCenterX ) - Math.sin( rect.rotation ) * ( circle.y - rectCenterY ) + rectCenterX;
		var unrotatedCircleY = Math.sin( rect.rotation ) * ( circle.x - rectCenterX ) + Math.cos( rect.rotation ) * ( circle.y - rectCenterY ) + rectCenterY;

		// Closest point in the rectangle to the center of circle rotated backwards(unrotated)
		var closestX, closestY;

		// Find the unrotated closest x point from center of unrotated circle
		if ( unrotatedCircleX < rectReferenceX ) {
			closestX = rectReferenceX;
		} else if ( unrotatedCircleX > rectReferenceX + rect.width ) {
			closestX = rectReferenceX + rect.width;
		} else {
			closestX = unrotatedCircleX;
		}
	 
		// Find the unrotated closest y point from center of unrotated circle
		if ( unrotatedCircleY < rectReferenceY ) {
			closestY = rectReferenceY;
		} else if ( unrotatedCircleY > rectReferenceY + rect.height ) {
			closestY = rectReferenceY + rect.height;
		} else {
			closestY = unrotatedCircleY;
		}
	 
		// Determine collision
		var collision = false;
		var distance = utils.distance( unrotatedCircleX, unrotatedCircleY, closestX, closestY );
		
		if ( distance < circle.getRadius() ) {
			collision = true;
		}
		else {
			collision = false;
		}

		return collision;
	}
}