import * as PIXI from 'pixi.js';
import config  from '../../config';
import utils  from '../../utils';
import GoalkeeperAnimations  from './utils/GoalkeeperAnimations';
export default class Goalkeeper extends PIXI.Container {

    constructor(game, radius = 20) {
        super();
        this.game = game;
        this.radius = radius;

        this.container = new PIXI.Container();
        this.addChild(this.container);

        this.animations = new GoalkeeperAnimations(this);

    }
    build(radius = 20, bounds = {height:400}){
        radius = Math.floor(radius/4)*4;
        this.radius = radius;
        this.externalRadius = this.radius*1;
        bounds.height = Math.floor(bounds.height/4)*4;
        this.bounds = bounds


        this.drawCounter = 20

        // for (var i = this.container.children.length - 1; i >= 0; i--) {
        //     this.container.removeChild(this.container.getChildAt(i));
        // }

        // this.container = new PIXI.Container();
        // this.addChild(this.container);

        if(this.shadow && this.shadow.parent){
            this.shadow.parent.removeChild(this.shadow)
        }
        this.shadow = new PIXI.Graphics();
        this.shadow.beginFill(0x0000);
        this.shadow.drawCircle(0,this.radius,this.radius);
        this.container.addChild(this.shadow);
        this.shadow.alpha = 0.5;
        this.shadow.scale.y = 0.5


        this.spriteContainer = new PIXI.Container();
        this.container.addChild(this.spriteContainer);

        // if(this.radius > 20){

        this.bodyParts = [];


        this.frame = 1;
        this.maxFrame = 17;
        let tempBodyParts = this.animations.buildParts();
        for (var i = tempBodyParts.length - 1; i >= 0; i--) {
            this.addBodyPart(tempBodyParts[i]);
        }

        this.shape = new PIXI.Graphics();
        this.shape.beginFill(Math.random() * 0xFFFFFF);
        this.shape.drawRect(0,0,this.radius*2, this.bounds.height);


        console.log('BUILD', bounds, radius);

        let ballsSize = this.bounds.height / 4;

        

        this.zero = new PIXI.Graphics();
        this.zero.beginFill(0xFFFFFF);
        this.zero.drawCircle(0,0,5);
        this.zero.tint = 0xFFFFFF;
        this.container.addChild(this.zero);

        this.updateable = true;
        this.velocity = {x:0, y:0}
        this.side = 1


        this.container.scale.x = this.side

        // this.rotation = -0.5

        return this
    }
    setStartPosition(x,y){
        this.x = x, 
        this.y = y;
        this.initPos = {x:x, y:y};

        this.side = Math.random() < 0.5 ? -1 : 1
        // this.scale.x *= -1
    }
    reset(){
        this.animations.play('static1', 3)
        this.velocity.x = 0;
        this.x = this.initPos.x;
        this.y = this.initPos.y;

        this.inJump = false;

        this.side = Math.random() < 0.5 ? -1 : 1
    }
    endAnimation(){
        this.velocity.x = 0;
    }
    jump(angle){
        if(this.inJump){
            return
        }

        console.log( 'SPD',  this.currentBall.velocity.x);


        let dist = utils.distance(this.currentBall.x,0,this.x,0);
        let distH = utils.distance(this.currentBall.getHigh(),0,this.y,0);
        console.log('DIST',distH,this.currentBall.getHigh(), this.y);
        if(dist < 30){
            this.inJump = true;
            if(distH < 500){
                this.animations.play('jump_med1', 0.9)
                // this.animations.play('jump_low2', 0.9)
            }else{
                this.side = this.currentBall.x < this.x?-1:1;
                this.animations.play('stayMiddle_1', 0.9)
            }
            return
        }

        this.side = this.currentBall.x < this.x?-1:1;
        let id = dist > 80 ? 1 : 2;


        if(Math.random() < 0.3){
            //this.side = Math.random() < 0.5 ? -1 : 1;
        }
        if(id == 1){
            this.animations.play('jump_high2', 0.8)
            this.velocity.x = 160// *  this.side;
            if(id == 4){
                this.velocity.x += 20            
            }
        }else if(id == 2){
            this.animations.play('jump_med2', 1)
            this.velocity.x = 100// *  this.side;
        }



        this.inJump = true;
    }
    addBodyPart(partStructure){
        // console.log(partStructure);
        let part = new PIXI.Graphics();
        part.beginFill(0xFFFFFF);
        part.drawCircle(0,0,partStructure.radius);
        part.tint = 0xFFaaFF;
        this.container.addChild(part);
        part.y = partStructure.y
        part.x = partStructure.x
        this.bodyParts.push({part:part, label:partStructure.label})
    }
    registerBall(ball){
        this.currentBall = ball;
    }
    returnBodyParts(){
        // console.log(this.scale);
        let parts = [];
        let bodyPart = {};
        for (var i = this.bodyParts.length - 1; i >= 0; i--) {
            // this.bodyPart[i]
            // console.log(this.bodyParts[i].label, this.bodyParts[i].part);
            let part = this.bodyParts[i].part
             bodyPart = {
                type: this.bodyParts[i].label,
                x: this.x + this.bodyParts[i].part.x*this.scale.x*this.container.scale.x,
                y: this.y + this.bodyParts[i].part.y*this.scale.y*this.container.scale.y,
                radius: this.bodyParts[i].part.height / 2 * this.scale.y,
                getRadius:function(){return part.height / 2 * this.scale.y}.bind(this)
            }
            parts.push(bodyPart);
        }
        
        for (var i = parts.length - 1; i >= 0; i--) {
            let rotated = this.rotatePoints(this.x,this.y,parts[i].x, parts[i].y, -this.rotation);
            parts[i].x =  rotated[0];
            parts[i].y =  rotated[1];
        }
        return parts
    }

    rotatePoints(cx, cy, x, y, angle) {
        var radians = angle,
            cos = Math.cos(radians),
            sin = Math.sin(radians),
            nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
            ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
        return [nx, ny];
    }

    getRadius() {
        // this.standardScale
        return this.scale.x * this.radius;
    }
    getExternalRadius() {
        return this.scale.x * this.externalRadius;
    }
   
    printFrame(frame){
        for (var i = frame.length - 1; i >= 0; i--) {
            for (var j = this.bodyParts.length - 1; j >= 0; j--) {
                if(this.bodyParts[j].label == frame[i].label){
                    this.bodyParts[j].part.x = frame[i].x //+ (nextFrame[i].x - frame[i].x)* smooth
                    this.bodyParts[j].part.y = frame[i].y //+ (nextFrame[i].y - frame[i].y)* smooth
                }
            }
        }
    }
    update(delta){
        if(!this.updateable){
            return
        }
       // console.log(this.velocity.x);
        this.frame += delta * 3;
        if(this.frame > this.maxFrame+1){
            this.frame = 1;
        }
        this.animations.update(delta)
        if(this.animations.currentFrame){            
            this.printFrame(this.animations.currentFrame)
        }
        this.x += this.velocity.x * delta * this.side;
        this.y += this.velocity.y * delta * this.side;

        this.container.scale.x = this.side
    }
}