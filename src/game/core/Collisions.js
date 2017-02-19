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
		return {interception:interception, p1:target.p1, p2:target.p2, type:'top'}	
	}
	collideEntities(delta, entity, toCollide){
		let distance = utils.distance(toCollide.x, toCollide.y, entity.x, entity.y) < toCollide.getRadius() + entity.getRadius();
		console.log(toCollide, toCollide.getRadius());
		if(distance){
			let angle = -Math.atan2(toCollide.y - entity.y, toCollide.x - entity.x);
			angle += 90 / 180 * 3.14;
			let percent = (Math.abs(entity.velocity.x) + Math.abs(entity.velocity.y))/(Math.abs(entity.speed.x) + Math.abs(entity.speed.y))
			entity.velocity.x = Math.sin(angle) * - Math.abs(entity.speed.x * percent);
			entity.velocity.y = Math.cos(angle) * - Math.abs(entity.speed.y * percent);
		}
	}

	collideSticks(delta, entity, toCollide, ballPosition){
		let distance = utils.distance(toCollide.x, toCollide.y, ballPosition.x, ballPosition.y) < toCollide.getRadius() + entity.getRadius();
		//console.log(ballPosition.x,ballPosition.y, toCollide, toCollide.getRadius());
		if(distance){
			let angle = -Math.atan2(toCollide.y - ballPosition.y, toCollide.x - ballPosition.x);
			angle -= 10 / 180 * 3.14;
			let percent = (Math.abs(entity.velocity.x) + Math.abs(entity.velocity.y))/(Math.abs(entity.speed.x) + Math.abs(entity.speed.y))
			
			// angle -= 180 / 180 * 3.14;
			// entity.velocity.y = Math.sin(angle) * - Math.abs(entity.speed.y)// * percent);
			console.log('1',entity.velocity.y);	
			//TROCAR ENTRE SENOS E COSSENOS AQUI
			entity.velocity.y = Math.cos(angle) * (entity.velocity.y)// * percent);
			angle += 180 / 180 * 3.14;//GAMBIARRAS AQUI, QUASE LAHlo
			entity.verticalVelocity.y = Math.cos(angle) * (entity.velocity.y * 20 / percent)//(entity.shootYSpeed * percent);
			console.log('1',entity.velocity.y, entity.verticalVelocity.y);	
			console.log('angle', angle * 180 / 3.14);
			console.log('-----');	
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