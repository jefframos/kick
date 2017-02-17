import * as PIXI from 'pixi.js';
import config  from '../../config';
export default class Ball extends PIXI.Container {

    constructor(game, radius = 20) {
        super();  
        this.game = game;
        this.virtualVelocity = {x:0,y:0};
        this.velocity = {x:0,y:0};
        this.speed = {x:230,y:230};
        this.friction = {x:100,y:100};
        this.rotationInfluence = {x:0,y:0};
        this.rotationSpeed = 0;
        this.scaleFator = 1;
        this.standardScale = 1;
        this.speedScale = 1;
        this.starterScale = 0.5;
        this.radius = radius;
        this.externalRadius = this.radius*1;
        this.static = false;
        this.side = 1;
        this.maxLife = 5;
        this.life = 5;
        this.collidable = true;

        this.verticalVelocity = {x:0, y:0};
        this.spriteGravityStandard = 4500;
        this.spriteGravity = 4500;
        this.shootYSpeed = -1200;
        this.spriteDirection = 1;


        this.container = new PIXI.Container();
        this.addChild(this.container);

        this.externalColisionCircle = new PIXI.Graphics();
        this.externalColisionCircle.beginFill(0x000000);
        this.externalColisionCircle.drawCircle(0,this.radius,this.radius);
        this.externalColisionCircle.alpha = 0.1;
        this.container.addChild(this.externalColisionCircle);
        this.externalColisionCircle.scale.y = 0.5


        this.spriteContainer = new PIXI.Container();
        this.container.addChild(this.spriteContainer);

        // if(this.radius > 20){

        this.sprite = PIXI.Sprite.fromImage('assets/images/onion.png');
        this.spriteContainer.addChild(this.sprite);
        this.sprite.anchor.set(0.5);
        console.log(this.radius, this.sprite.width);
        this.sprite.scale.set(this.radius / 150);
        // }

        console.log(this.container.skew.scope);
        

        this.shooting = false;
    }
   

    shoot(force, angle, angleColision) {



         let angSpeed = angleColision;
        // let angSpeed = this.ball.rotation - angleColision;
        // this.ball.rotation += angleColision// * 0.5;
        // console.log(force);
        this.rotationSpeed = angSpeed * 0.8// * 0.5;
        this.velocity.x = 0;
        this.velocity.y = 0;
        this.velocity.x = -this.speed.x * Math.sin(angleColision) * force;
        this.velocity.y = -this.speed.y * Math.cos(angleColision) * force;

        this.virtualVelocity.x = 0;
        this.virtualVelocity.y = 0;


        this.shooting = true;
        this.rotationInfluence.x = this.rotationSpeed * 850;
        this.verticalVelocity.y = -Math.abs(this.verticalVelocity.y / 2);

        let force2 = force*0.35

        this.verticalVelocity.y += this.shootYSpeed * force2;

        // this.spriteGravity = this.spriteGravityStandard * force*0.5

        console.log(this.verticalVelocity.y, force2);

        
        this.spriteDirection = 1;
        //this.sprite.y = 0;
    }
    reset() {
        this.virtualVelocity = {x:0,y:0};
        this.velocity = {x:0,y:0};

        this.rotationInfluence = {x:0,y:0};
        this.rotationSpeed = 0;
        this.shooting = false;

        this.spriteContainer.y = 0;


        this.y = config.height - 180;

        if(Math.random() < 0.995){
            this.verticalVelocity = {x:0, y:0};
            this.spriteContainer.y = 0//- Math.random() * 250;
            this.x = config.width / 2;
            this.verticalVelocity.y = 0//this.shootYSpeed;
        }else{
            this.spriteContainer.y = - Math.random() * 250;

            this.verticalVelocity.y = this.shootYSpeed;
            // this.verticalVelocity.y = Math.abs(this.verticalVelocity.y);

            let side = Math.random() < 0.5 ? 1 : -1;
            if(side == 1){
                this.x = config.width * 1.1;
            }else{
                this.x = -config.width * 0.1;
            }

            this.virtualVelocity.x = -this.speed.x * side;
            this.velocity.x = -this.speed.x * side;
        }
        this.spriteContainer.scale.set(1)

        // console.log(this.verticalVelocity);
    }
    backSide(force, force2) {
        let t = Math.abs(force2) - 0.5
        // force2 = 1 - force2
        this.velocity.x *=  t//force2
        this.velocity.y *=  t//force2

        this.verticalVelocity.y = -this.velocity.y * force2 * force
    }
    back(force, force2, forceDown) {

        // force2 > 
        //0 eh no meio
        //>0 embaixo
        //<acima
        let t = Math.abs(force2) - 0.5
        // force2 = 1 - force2
        this.velocity.y *=  t//force2
        if(forceDown){
            this.verticalVelocity.y += 3500
            this.velocity.y = -Math.abs(this.velocity.y) * 0.3;
        }else{
            this.velocity.y += 300
            this.verticalVelocity.y = -this.velocity.y * force2 * force
            
        }


    }
    getRadius() {
        // this.standardScale
        return this.scale.x * this.radius;
    }
    getExternalRadius() {
        return this.scale.x * this.externalRadius;
    }

    touchGround ( delta ) {

        // console.log('touchGround');

        // console.log(this.verticalVelocity.y);
        this.verticalVelocity.y = -this.verticalVelocity.y/1.7
        // console.log(this.verticalVelocity.y);

        if(Math.abs(this.verticalVelocity.y) < 200){
            // console.log(this.verticalVelocity);
            this.verticalVelocity.y = 0;
            this.spriteContainer.y = 0;
            // this.spriteGravity = 0;
        }
        this.spriteContainer.y += this.verticalVelocity.y * delta * this.scale.x;
    }
    update ( delta ) {
        // delta*= 0.2

        this.x += this.velocity.x * delta * this.scale.x;
        this.y += this.velocity.y * delta * this.scale.y;

        if(this.shooting){
            let ang = Math.atan2(this.velocity.y, this.velocity.x)
            TweenLite.to(this.spriteContainer.scale, 0.5, {x:Math.sin(ang)*0.2 + 1, y:Math.cos(ang)*0.3+1})
        }
        //this.spriteContainer.scale.set(Math.sin(ang)*0.2 + 1, Math.cos(ang)*0.2+1)

        let percentage = Math.abs((Math.abs(this.velocity.x) + Math.abs(this.velocity.y)) / 
            (Math.abs(this.speed.x) + Math.abs(this.speed.y)));
        // console.log(this.rotationSpeed);
        this.sprite.rotation += this.rotationSpeed * percentage * 0.5;

        this.sprite.rotation += this.velocity.x / 5000

        // let hScale = (this.spriteContainer.y / 250)
        // console.log((this.spriteContainer.y / 250));
        // this.externalColisionCircle.scale.x = 1 + hScale
        // this.externalColisionCircle.scale.y = 0.5 + hScale
        if(this.shooting && percentage == 0){
            this.game.reset();
        }
        // if(percentage){
            this.velocity.x += this.rotationInfluence.x * delta * percentage;

            
            // console.log(this.rotationInfluence.x);
            this.spriteContainer.x += this.verticalVelocity.x * delta * this.scale.x;
            this.spriteContainer.y += this.verticalVelocity.y * delta * this.scale.y;
            this.verticalVelocity.y += this.spriteGravity * delta;

            //console.log(this.verticalVelocity.y);

            // if(this.verticalVelocity.y < 0){
            // }
            // this.velocity.y += Math.cos(this.rotation);
        // }

        if(this.spriteContainer.y > 0){


                this.touchGround(delta);
                
                //console.log(Math.abs(this.verticalVelocity.y));

            }

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
