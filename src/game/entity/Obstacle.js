import * as PIXI from 'pixi.js';
import config  from '../../config';
export default class Obstacle extends PIXI.Container {

    constructor(game, radius = 20, bounds = {height:400}) {
        super();  
        this.game = game;
        
        this.radius = radius;
        this.externalRadius = this.radius*1;
       
        this.bounds = bounds

        this.container = new PIXI.Container();
        this.addChild(this.container);

        this.shadow = new PIXI.Graphics();
        this.shadow.beginFill(0x0000);
        this.shadow.drawCircle(0,this.radius,this.radius);
        this.shadow.alpha = 0.1;
        this.container.addChild(this.shadow);
        this.shadow.scale.y = 0.5


        this.spriteContainer = new PIXI.Container();
        this.container.addChild(this.spriteContainer);

        // if(this.radius > 20){

        this.sprite = PIXI.Sprite.fromImage('assets/images/onion.png');
        //this.spriteContainer.addChild(this.sprite);
        this.sprite.anchor.set(0.5);
        this.sprite.scale.set(this.radius / 150);


        this.shape = new PIXI.Graphics();
        this.shape.beginFill(Math.random() * 0xFFFFFF);
        this.shape.drawRect(-this.radius,-this.bounds.height,this.radius*2, this.bounds.height);
        this.container.addChild(this.shape);

        // }

       
    }
   
    reset() {

        this.killed = false;

        this.collided = false;

        this.virtualVelocity = {x:0,y:0};
        this.velocity = {x:0,y:0};

        this.rotationInfluence = {x:0,y:0};
        this.rotationSpeed = 0;

        this.sprite.rotation = 0;
       
    }
    startUpdate(){
        this.updateable = true;
    }

    getBounds() {
        // this.standardScale
        return {width:this.getRadius() * 2, height: this.scale.y * this.bounds.height}
    }
    
    getRadius() {
        // this.standardScale
        return this.scale.x * this.radius;
    }
    getExternalRadius() {
        return this.scale.x * this.externalRadius;
    }

    
    update ( delta ) {
        // delta*= 0.2
        if(this.killed){
            return
        }
        if(!this.updateable){
            return
        }

        this.x += this.velocity.x * delta * this.scale.x;
        this.y += this.velocity.y * delta * this.scale.y;
        

        if(this.rotationInfluence.x < 0){
            this.rotationInfluence.x += this.friction.x * delta;
            if(this.rotationInfluence.x > 0){
                this.rotationInfluence.x = 0
            }
        }else if(this.rotationInfluence.x > 0){
            this.rotationInfluence.x -= this.friction.x * delta;
            if(this.rotationInfluence.x < 0){
                this.rotationInfluence.x = 0
            }
        }



        if(this.velocity.x < this.virtualVelocity.x){
            this.velocity.x += this.friction.x * delta;
            if(this.velocity.x > this.virtualVelocity.x){
                this.velocity.x = this.virtualVelocity.x
            }
        }else if(this.velocity.x > this.virtualVelocity.x){
            this.velocity.x -= this.friction.x * delta;
            if(this.velocity.x < this.virtualVelocity.x){
                this.velocity.x = this.virtualVelocity.x
            }
        }

        if(this.velocity.y < this.virtualVelocity.y){
            this.velocity.y += this.friction.y * delta;
            if(this.velocity.y > this.virtualVelocity.y){
                this.velocity.y = this.virtualVelocity.y
            }
        }else if(this.velocity.y > this.virtualVelocity.y){
            this.velocity.y -= this.friction.y * delta;
            if(this.velocity.y < this.virtualVelocity.y){
                this.velocity.y = this.virtualVelocity.y
            }
        }
    }	
}
