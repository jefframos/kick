import * as PIXI from 'pixi.js';
import config  from '../../config';
import Trail from './Trail';
export default class Ball extends PIXI.Container {

    constructor(game, radius = 20) {
        super();
        this.virtualVelocity = {x:0,y:0};
        this.velocity = {x:0,y:0};
        this.speed = {x:230,y:230};
        this.friction = {x:250,y:200};
        this.standardFriction = {x:275,y:200};
        this.rotationInfluence = {x:0,y:0};
        this.rotationSpeed = 0;
        this.scaleFator = 1;
        this.standardScale = 1;
        this.speedScale = 1;
        this.starterScale = 0.5;
        
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
        this.shadow.drawCircle(0,1,1);
        this.shadow.alpha = 0.5;
        this.container.addChild(this.shadow);
        this.shadow.scale.y = 0.5

        this.spriteContainer = new PIXI.Container();
        this.container.addChild(this.spriteContainer);

        let texture = PIXI.Texture.fromFrame('ball.png');
        this.sprite = new PIXI.Sprite(texture)
        this.spriteContainer.addChild(this.sprite);
        this.sprite.anchor.set(0.5);

       

       
    }
   build(game, radius = 50){
        this.game = game;
        this.radius = radius;
        this.externalRadius = this.radius*1;

        
        this.shadow.width = this.radius * 2
        this.shadow.height = this.radius
        this.shadow.y = this.radius / 2;
        TweenLite.to(this.shadow, 0.2, {alpha:0.5})

         // if(this.radius > 20){
        
        this.sprite.width = this.radius * 2
        this.sprite.height = this.radius * 2
        // this.sprite.scale.set(this.radius / this.sprite.width);
        // }

        this.shooting = false;
        this.killed = false;
        this.obstacleCollided = [];

   }

    shoot(force, angle, angleColision) {

        if(this.shooting){
            return;
        }

        let playerData = GAME_DATA.getKickerData(); //{force:1.5, curve:1}

        if(!this.trail){
            this.trail = new Trail(this.game.gameContainer, 20, PIXI.Texture.from('assets/images/trail1.jpg'));
            this.trail.trailTick = 10;
            this.trail.speed = 0.1;
            this.trail.frequency = 0.001
            this.trail.mesh.alpha = 0.5
        }
        this.trail.reset(this.position);
        this.updateTrail(1/60);

         let angSpeed = -angle;

         if(force > 8.5){
            force = 8.5;
         }




         this.friction.x = this.standardFriction.x * force * 0.1
         console.log(this.friction.x);
        // let angSpeed = this.ball.rotation - angleColision;
        // this.ball.rotation += angleColision// * 0.5;
        // console.log(force);
        this.rotationSpeed = angSpeed * 1.5// * 0.5;
        if(this.rotationSpeed > 1.4){
            this.rotationSpeed = 1.4
        }else if(this.rotationSpeed < -1.4){
            this.rotationSpeed = -1.4
        }
        // console.log(this.rotationSpeed, force);
        this.velocity.x = 0;
        this.velocity.y = 0;
        this.velocity.x = -this.speed.x * Math.sin(angleColision) * force;

        this.virtualVelocity.x = 0;
        this.virtualVelocity.y = 0;


        this.rotationInfluence.x = this.rotationSpeed * 1000 * playerData.curve;
        this.verticalVelocity.y = -Math.abs(this.verticalVelocity.y*0.95 / 2);

        let force2 = force*0.32

        // console.log('FORCE', force);
        if(force < 4.5){
            force2 += 4.5 / force - 0.2

            force += 1.5
        }
        this.velocity.y = -this.speed.y * Math.cos(angleColision) * force*1.1 * playerData.force;

        this.verticalVelocity.y += this.shootYSpeed * force2;


         console.log(force, 'shootForce1', this.verticalVelocity.y, this.velocity.y, angle, angleColision, this.rotationInfluence);



        this.spriteDirection = 1;
        this.shooting = true;
        this.killTimer = 6;
        //this.sprite.y = 0;
    }
    getHigh() {
        let point = this.toGlobal(new PIXI.Point())
        let point2 = this.parent.toLocal(point)
        // this.trail.update(delta, {x:point2.x, y:point2.y + this.spriteContainer.y * this.scale.y})
        return this.y - this.spriteContainer.y //* this.scale.y
    }
    stopMiddle() {
        this.virtualVelocity = {x:0,y:0};
        this.velocity = {x:0,y:0};

        this.rotationInfluence = {x:0,y:0};
        this.rotationSpeed = 0;
        this.spriteContainer.y = - Math.random() * 250;
        this.x = config.width / 2;
        this.startUpdate();
    }
    reset() {

        console.log('RESET');

        this.triggerGoalkeeper = false;
        //this.updateable = true;

        // this.shadow.alpha = 0.5;

        this.obstacleCollided = [];
        this.shooting = false;
        this.killed = false;
        this.collideObstacle = false;

        this.collided = false;
        this.goalkeeperTesting = false;

        this.virtualVelocity = {x:0,y:0};
        this.velocity = {x:0,y:0};

        this.rotationInfluence = {x:0,y:0};
        this.rotationSpeed = 0;

        this.sprite.rotation = 0;
        this.killTimer = 3;
        this.spriteGravity = this.spriteGravityStandard;
        this.onGoal = false;
        this.spriteContainer.y = 0;

        this.y = config.height - 200;

        if(Math.random() < 0.00010){
            this.verticalVelocity = {x:0, y:0};
            //this.velocity.y = -1000
            // this.spriteContainer.y = - Math.random() * 80;
            this.spriteContainer.y =0//- Math.random() * 250;
            this.x = config.width / 2;
            // this.verticalVelocity.y = Math.random() * this.shootYSpeed;
           // this.verticalVelocity.y = this.shootYSpeed;
        }else{
            this.spriteContainer.y = - Math.random() * 250;
            this.verticalVelocity.y = this.shootYSpeed;

            let side = Math.random() < 0.5 ? 1 : -1;
            if(side == 1){
                this.x = config.width * 1.1;
            }else{
                this.x = -config.width * 0.1;
            }
            this.velocity.x = -this.speed.x * side ;
            this.friction.x = this.standardFriction.x * 0.2;
        }
        this.spriteContainer.scale.set(2,0);
        console.log(this.x, this.velocity, this.virtualVelocity, this.friction);
        this.startUpdate();

        this.killTimer = 99999;

    }
    startUpdate(){
        this.updateable = true;
    }
    stickCollide() {
        this.collided = true;
    }
    goalkeeperTest() {
        this.goalkeeperTesting = true;
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

        if(this.onGoal){
            this.verticalVelocity.y = -this.verticalVelocity.y/3
        }else{
            this.verticalVelocity.y = -this.verticalVelocity.y/1.7
        }
        if(Math.abs(this.verticalVelocity.y) < 800){
            // console.log(this.verticalVelocity);
            this.verticalVelocity.y = 0;
            this.spriteContainer.y = 0;
            // this.spriteGravity = 0;
        }
        this.spriteContainer.y += this.verticalVelocity.y * delta * this.scale.x;
    }
    resetCollisions ( ) {
        this.killTimer = 1;
        this.collideObstacle = false;
    }
    inObstacle ( ) {
        this.killTimer = 3;
        this.collideObstacle = true;
    }
    killBall ( ) {
        console.log('kill ball');
        if(this.trail){
            this.trail.reset();
        }
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
    updateTrail(delta){
        let point = this.toGlobal(new PIXI.Point())
        let point2 = this.parent.toLocal(point)
        this.trail.update(delta, {x:point2.x, y:point2.y + this.spriteContainer.y * this.scale.y})
    }
    simulate ( delta ) {
        let tempPosition = {x:this.x, y:this.y}
        tempPosition.x += this.velocity.x * delta * this.scale.x;
        tempPosition.y += this.velocity.y * delta * this.scale.y;
        return tempPosition;
    }
    update ( delta ) {
        // delta*= 0.2
        if(this.killed){
            return
        }
        if(!this.updateable){
            return
        }

        // console.log(delta);

        this.updateScale();

        this.x += this.velocity.x * delta * this.scale.x;
        this.y += this.velocity.y * delta * this.scale.y;

        // if(this.trail && this.parent && !this.trail.parent){
        //     this.game.addChild(this.trail);
        // }
        if(this.shooting && this.trail){
            this.updateTrail(delta);
        }

        if(this.x < -200 || this.x > config.width + 200){
            this.killTimer = 0;
        }
        this.killTimer -= delta;
        if(this.killTimer <= 0){
            this.killBall();
            
        }

        let percentage = Math.abs((Math.abs(this.velocity.x) + Math.abs(this.velocity.y)) / 
            (Math.abs(this.speed.x) + Math.abs(this.speed.y)));
        // console.log(this.rotationSpeed);
        this.sprite.rotation += this.rotationSpeed * percentage * 0.5;
        this.sprite.rotation += this.velocity.x / 5000

        this.velocity.x += this.rotationInfluence.x * delta * percentage;
        this.spriteContainer.x += this.verticalVelocity.x * delta * this.scale.x;
        this.spriteContainer.y += this.verticalVelocity.y * delta * this.scale.y;
        this.verticalVelocity.y += this.spriteGravity * delta;

        if(this.spriteContainer.y > 0){
            this.touchGround(delta);
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
