import * as PIXI from 'pixi.js';
import config  from '../../config';
export default class Obstacle extends PIXI.Container {

    constructor(game) {
        super();  
        this.game = game;
        
        // this.radius = radius;
        // this.externalRadius = this.radius*1;
       
        // this.bounds = bounds

        this.container = new PIXI.Container();
        this.addChild(this.container);

        

        // this.shadow = new PIXI.Graphics();
        // this.shadow.beginFill(0x0000);
        // this.shadow.drawCircle(0,this.radius,this.radius);
        // this.shadow.alpha = 0.1;
        // this.container.addChild(this.shadow);
        // this.shadow.scale.y = 0.5


        // this.spriteContainer = new PIXI.Container();
        // this.container.addChild(this.spriteContainer);

        // // if(this.radius > 20){

        // this.sprite = PIXI.Sprite.fromImage('assets/images/onion.png');
        // //this.spriteContainer.addChild(this.sprite);
        // this.sprite.anchor.set(0.5);
        // this.sprite.scale.set(this.radius / 150);


        // this.shape = new PIXI.Graphics();
        // this.shape.beginFill(Math.random() * 0xFFFFFF);
        // this.shape.drawRect(-this.radius,-this.bounds.height,this.radius*2, this.bounds.height);
        // this.container.addChild(this.shape);

        // this.shape.scale.set(1.5, 0);
        // TweenLite.to(this.shape.scale, 0.8, {x:1, y:1, ease:'easeOutElastic'});
        // }

       
    }
    build(radius = 20, bounds = {height:400}){
        radius = Math.floor(radius/4)*4;
        this.radius = radius;
        this.externalRadius = this.radius*1;
        bounds.height = Math.floor(bounds.height/4)*4;
        this.bounds = bounds

        console.log('DIST', this.radius);

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



        this.shaped = new PIXI.Graphics();
        this.shaped.beginFill(Math.random() * 0xFFFFFF);
        this.shaped.drawRect(-this.radius,-this.bounds.height,this.radius*2, this.bounds.height);
        this.shaped.y = this.radius/2;
        this.container.addChild(this.shaped);

        let obs = ['barreira.png']
        // let obs = ['grizz-bear-win.png', 'darwin-win.png','finn-win.png','marceline-win.png','rigby-win.png','jake-win.png','moredecai-win.png']

        this.shape = PIXI.Sprite.fromFrame(obs[Math.floor(Math.random() * obs.length)]);
        this.shape.anchor.set(0.5, 0.9);
        this.container.addChild(this.shape);
        this.shape.height = this.bounds.height
        this.shape.scale.x = this.shape.scale.y
        // this.shape.alpha = 0.5

        this.shape.scale.set(1.5, 0);
        TweenLite.killTweensOf(this.shape.scale)
        TweenLite.to(this.shape.scale, 0.8, {delay:0.2, x:1, y:1, ease:'easeOutElastic'});

        //this.reset();

        console.log('BUILD', bounds, radius);

        return this
    }
   
    kill() {
        console.log('KILL', this.container.children);
        // for (var i = this.container.children.length - 1; i >= 0; i--) {
        //      this.container.removeChild(this.container.getChildAt(i));
        // }
        // if(this.parent){
        //     this.parent.removeChild(this)
        // }

        // this.shape.scale.set(1.5, 0);
        TweenLite.killTweensOf(this.shape.scale)
        TweenLite.to(this.shape.scale, 0.2, {x:2, y:0, ease:'easeInBack', onComplete:function(){
            this.killed = true;            
            if(this.parent){
                this.parent.removeChild(this)
            }
        }, onCompleteScope:this});

    }
    reset() {

        this.killed = false;

        this.collided = false;

        this.virtualVelocity = {x:0,y:0};
        this.velocity = {x:0,y:0};

        this.rotationInfluence = {x:0,y:0};
        this.rotationSpeed = 0;

        // this.sprite.rotation = 0;

       
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
