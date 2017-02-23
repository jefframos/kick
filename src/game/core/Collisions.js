import * as PIXI from 'pixi.js';
import config  from '../../config';
import utils  from '../../utils';
export default class Collisions{
	constructor() {
	}
	detectTopCollision(target, entity,ballPosition){
		let interception = this.inteceptCircleLineSeg2(ballPosition, {p1:target.p1, p2:target.p2}, entity.getRadius());
		return {interception:interception, p1:target.p1, p2:target.p2, type:'top'}
	}

	detectSideCollision(target, entity,ballPosition){
		let interception = this.inteceptCircleLineSeg2(ballPosition, {p1:target.p1, p2:target.p2}, entity.getRadius());
		return {interception:interception, p1:target.p1, p2:target.p2, type:'side'}	
	}
	collideEntities(delta, entity, toCollide){
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
			entity.velocity.y = Math.sin(angle) *  Math.abs((entity.velocity.y * 2)) + entity.velocity.y// * percent);
			//entity.verticalVelocity.y = Math.cos(angle) * (entity.velocity.y * 20 / percent)//(entity.shootYSpeed * percent);
			// console.log('2', Math.sin(angle), entity.velocity.y);	
			// console.log('1',entity.velocity.y, entity.verticalVelocity.y);	
			// console.log('angle --', angle * 180 / 3.14);
			// console.log('-----');	
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
}