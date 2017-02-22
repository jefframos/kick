import * as PIXI from 'pixi.js';
import config  from '../../config';
export default class Ball extends PIXI.Container {

    constructor(game, radius = 20) {
        super();  
        this.game = game;
        this.virtualVelocity = {x:0,y:0};
        this.velocity = {x:0,y:0};
        this.speed = {x:230,y:230};
        this.friction = {x:275,y:200};
        this.standardFriction = {x:275,y:200};
        // this.rotationFriction = {x:100,y:200};
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
        this.spriteGravityStandard = 5000;
        this.spriteGravity = 5000;
        this.shootYSpeed = -1200;
        this.spriteDirection = 1;


        this.container = new PIXI.Container();
        this.addChild(this.container);

        this.shadow = new PIXI.Graphics();
        this.shadow.beginFill(0x000000);
        this.shadow.drawCircle(0,this.radius,this.radius);
        this.shadow.alpha = 0.1;
        this.container.addChild(this.shadow);
        this.shadow.scale.y = 0.5


        this.spriteContainer = new PIXI.Container();
        this.container.addChild(this.spriteContainer);

        // if(this.radius > 20){

        this.sprite = PIXI.Sprite.fromImage('assets/images/onion.png');
        this.spriteContainer.addChild(this.sprite);
        this.sprite.anchor.set(0.5);
        this.sprite.scale.set(this.radius / 150);
        // }

        this.shooting = false;
        this.killed = false;
        this.obstacleCollided = [];
    }
   

    shoot(force, angle, angleColision) {



         let angSpeed = -angle;

         if(force > 9){
            force = 9;
         }



         this.friction.x = this.standardFriction.x * force * 0.1
         console.log(this.friction.x);
        // let angSpeed = this.ball.rotation - angleColision;
        // this.ball.rotation += angleColision// * 0.5;
        // console.log(force);
        this.rotationSpeed = angSpeed * 1.5// * 0.5;
        if(this.rotationSpeed > 1.2){
            this.rotationSpeed = 1.2
        }else if(this.rotationSpeed < -1.2){
            this.rotationSpeed = -1.2
        }
        // console.log(this.rotationSpeed, force);
        this.velocity.x = 0;
        this.velocity.y = 0;
        this.velocity.x = -this.speed.x * Math.sin(angleColision) * force;
        this.velocity.y = -this.speed.y * Math.cos(angleColision) * force;

        this.virtualVelocity.x = 0;
        this.virtualVelocity.y = 0;


        this.rotationInfluence.x = this.rotationSpeed * 850;
        this.verticalVelocity.y = -Math.abs(this.verticalVelocity.y / 2);

        let force2 = force*0.35

        this.verticalVelocity.y += this.shootYSpeed * force2;
        this.spriteDirection = 1;
        this.shooting = true;
        //this.sprite.y = 0;
    }
    reset() {

        // console.log('RESET');
        //this.updateable = true;
        this.obstacleCollided = [];
        this.shooting = false;
        this.killed = false;

        this.collided = false;

        this.virtualVelocity = {x:0,y:0};
        this.velocity = {x:0,y:0};

        this.rotationInfluence = {x:0,y:0};
        this.rotationSpeed = 0;

        this.sprite.rotation = 0;
        this.killTimer = 4;
        this.spriteGravity = this.spriteGravityStandard;
        this.onGoal = false;
        this.spriteContainer.y = 0;

        this.y = config.height - 180;

        if(Math.random() < 0.9995){
            this.verticalVelocity = {x:0, y:0};
            // this.spriteContainer.y = - Math.random() * 80;
            this.spriteContainer.y = 0//- Math.random() * 250;
            this.x = config.width / 2;
            // this.verticalVelocity.y = Math.random() * this.shootYSpeed;
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
        this.spriteContainer.scale.set(2,0);

        TweenLite.to(this.spriteContainer.scale, 0.8, {delay:0.75, x:1, y:1, ease:'easeOutElastic', onComplete:this.startUpdate, onCompleteScope:this})
        TweenLite.to(this.shadow, 0.5, {alpha:0.1})
        // this.sprite.scale.set(1)

        // console.log(this.verticalVelocity);
        // this.updateable = true;
    }
    startUpdate(){
        this.updateable = true;
    }
    backSide(force, force2) {
        let t = Math.abs(force2) - 0.5
        // force2 = 1 - force2

        // console.log('backSide', this.velocity.y);
        this.velocity.x +=  -t * this.velocity.x//force2
        this.velocity.y *=  -0.8//force2
        // this.velocity.y +=  t * this.velocity.y//force2
        // console.log('backSide2', this.velocity.y, t);

        this.verticalVelocity.y = -this.velocity.y * force2 * force*2
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
            this.velocity.y = -Math.abs(this.velocity.y) * 0.3-250;
        }else{
            this.velocity.y += 600
            this.verticalVelocity.y = -this.velocity.y * force2 * force
            
        }


    }
    stickCollide() {
        this.collided = true;

    }
    getRadius() {
        // this.standardScale
        return this.scale.x * this.radius;
    }
    getExternalRadius() {
        return this.scale.x * this.externalRadius;
    }

    onGoal ( ) {
        this.rotationSpeed *= 0.2;
    }
    touchGround ( delta ) {

        // console.log('touchGround');

        // console.log('1',this.verticalVelocity.y);
        if(this.onGoal){
            this.verticalVelocity.y = -this.verticalVelocity.y/3
        }else{
            this.verticalVelocity.y = -this.verticalVelocity.y/1.7
        }
        // console.log('2',this.verticalVelocity.y);

        // this.velocity.x *= 0.9

        // console.log(this.verticalVelocity.y);

        if(Math.abs(this.verticalVelocity.y) < 2500){
            // console.log(this.verticalVelocity);
            this.verticalVelocity.y = 0;
            this.spriteContainer.y = 0;
            // this.spriteGravity = 0;
        }
        this.spriteContainer.y += this.verticalVelocity.y * delta * this.scale.x;
    }
    killBall ( ) {
        this.killTimer = 99999;
        this.updateable = false;
        TweenLite.to(this.shadow, 0.2, {alpha:0})

        TweenLite.to(this.spriteContainer.scale, 0.2, {x:0,y:0, onComplete:function(){
            this.killed = true;
        }, onCompleteScope:this})
    }
    updateScale ( ) {
        let ang = 0;
        let targetScale = {x:1, y:1}
        if(!this.collided && this.shooting){
            ang = Math.atan2(this.velocity.y, this.velocity.x)
            targetScale = {x:Math.sin(ang)*0.2 + 1,y:Math.cos(ang)*0.3 + 1};
        }else if(!this.shooting){
            ang = Math.atan2(this.velocity.y, this.verticalVelocity.y)            
            targetScale = {x:Math.sin(ang)*0.2 + 1,y:Math.cos(ang)*0.2 + 1};
        }else{
            targetScale = {x:1, y:1}
        }

        this.spriteContainer.scale.x=targetScale.x;
        this.spriteContainer.scale.y=targetScale.y;

        // TweenLite.to(this.spriteContainer.scale, 0.5, targetScale)
    }
    update ( delta ) {
        // delta*= 0.2
        if(this.killed){
            return
        }
        if(!this.updateable){
            return
        }

        this.updateScale();

        this.x += this.velocity.x * delta * this.scale.x;
        this.y += this.velocity.y * delta * this.scale.y;

        // console.log(this.killTimer);
        if(this.shooting){
            this.killTimer -= delta;
            if(this.killTimer <= 0){
                this.killBall();
                
            }
        }
        //this.spriteContainer.scale.set(Math.sin(ang)*0.2 + 1, Math.cos(ang)*0.2+1)

        let percentage = Math.abs((Math.abs(this.velocity.x) + Math.abs(this.velocity.y)) / 
            (Math.abs(this.speed.x) + Math.abs(this.speed.y)));
        // console.log(this.rotationSpeed);
        this.sprite.rotation += this.rotationSpeed * percentage * 0.5;

        this.sprite.rotation += this.velocity.x / 5000

        // let hScale = (this.spriteContainer.y / 250)
        // console.log((this.spriteContainer.y / 250));
        // this.shadow.scale.x = 1 + hScale
        // this.shadow.scale.y = 0.5 + hScale
        // if(this.shooting && percentage == 0){
        //     this.game.reset();
        // }
        // if(percentage){
            this.velocity.x += this.rotationInfluence.x * delta * percentage;
            // console.log(this.velocity.x);

            
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
