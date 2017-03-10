import * as PIXI from 'pixi.js';
import config  from '../../config';
export default class Goalkeeper extends PIXI.Container {

    constructor(game, radius = 20) {
        super();
        this.game = game;
        this.radius = radius;

        this.container = new PIXI.Container();
        this.addChild(this.container);


    }
    build(radius = 20, bounds = {height:400}){
        radius = Math.floor(radius/4)*4;
        this.radius = radius;
        this.externalRadius = this.radius*1;
        bounds.height = Math.floor(bounds.height/4)*4;
        this.bounds = bounds


        

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



        this.shape = new PIXI.Graphics();
        this.shape.beginFill(Math.random() * 0xFFFFFF);
        this.shape.drawRect(0,0,this.radius*2, this.bounds.height);
        // this.shape.drawRect(-this.radius,-this.bounds.height / 2,this.radius*2, this.bounds.height);
       // this.shape.y = this.radius/2 -this.bounds.height / 2;
        // this.container.addChild(this.shape);

        //this.shape.rotation = 45;

        // let obs = ['grizz-bear-win.png', 'darwin-win.png','finn-win.png','marceline-win.png','rigby-win.png','jake-win.png','moredecai-win.png']

        // this.shape = PIXI.Sprite.fromFrame(obs[Math.floor(Math.random() * obs.length)]);
        // this.shape.anchor.set(0.5, 0.9);
        // this.container.addChild(this.shape);
        // this.shape.height = this.bounds.height
        // this.shape.scale.x = this.shape.scale.y
        // // this.shape.alpha = 0.5

        // this.shape.scale.set(1.5, 0);
        // TweenLite.killTweensOf(this.shape.scale)
        // TweenLite.to(this.shape.scale, 0.8, {delay:0.2, x:1, y:1, ease:'easeOutElastic'});

        //this.reset();

        console.log('BUILD', bounds, radius);

        let ballsSize = this.bounds.height / 4;

        this.legs = new PIXI.Graphics();
        this.legs.beginFill(0xFFFFFF);
        this.legs.drawCircle(0,0,ballsSize);
        this.legs.tint = 0x0000FF;
        this.container.addChild(this.legs);
        this.legs.y = -this.legs.height/2;

        // this.legs.y = this.radius

        this.body = new PIXI.Graphics();
        this.body.beginFill(0xFFFFFF);
        this.body.drawCircle(0,0,ballsSize);
        this.body.y = - this.legs.width
        this.body.alpha = 0.6;
        this.body.tint = 0x00FFFF;
        this.container.addChild(this.body);

        this.handLeft = new PIXI.Graphics();
        this.handLeft.beginFill(0xFFFFFF);
        this.handLeft.drawCircle(0,0,ballsSize/2);
        this.handLeft.alpha = 0.6;
        this.handLeft.tint = 0xFF00FF;
        this.container.addChild(this.handLeft);
        this.handLeft.y = this.body.y 
        this.handLeft.x = this.body.width / 2

        this.handRight = new PIXI.Graphics();
        this.handRight.beginFill(0xFFFFFF);
        this.handRight.drawCircle(0,0,ballsSize/2);
        this.handRight.alpha = 0.6;
        this.handRight.tint = 0xFF00FF;
        this.container.addChild(this.handRight);
        this.handRight.y = this.body.y
        this.handRight.x = - this.body.width / 2

        this.head = new PIXI.Graphics();
        this.head.beginFill(0xFFFFFF);
        this.head.drawCircle(0,0,ballsSize/2);
        this.head.tint = 0xFFaaFF;
        this.container.addChild(this.head);
        this.head.y = this.body.y - this.head.height -ballsSize/2

        // this.rotation = 0.1
        // this.game.debugGoalkeeper(this.getRect())
        this.updateable = true;
        this.velocity = {x:0, y:0}
        this.side = 1
        return this
    }
    returnBodyParts(){
        // console.log(this.scale);
        let parts = [];
        let bodyPart = {
            x: this.x + this.legs.x*this.scale.x,
            y: this.y + this.legs.y*this.scale.y,
            radius: this.legs.height / 2 * this.scale.y,
            getRadius:function(){return this.legs.height / 2 * this.scale.y}.bind(this)
        }
        parts.push(bodyPart);

        bodyPart = {
            x: this.x + this.body.x*this.scale.x,
            y: this.y + this.body.y*this.scale.y,
            radius: this.body.height / 2 * this.scale.y,
            getRadius:function(){return this.body.height / 2 * this.scale.y}.bind(this)
        }
        parts.push(bodyPart);

        bodyPart = {
            x: this.x + this.handLeft.x*this.scale.x,
            y: this.y + this.handLeft.y*this.scale.y,
            radius: this.handLeft.height / 2 * this.scale.y,
            getRadius:function(){return this.handLeft.height / 2 * this.scale.y}.bind(this)
        }
        parts.push(bodyPart);

        bodyPart = {
            x: this.x + this.handRight.x*this.scale.x,
            y: this.y + this.handRight.y*this.scale.y,
            radius: this.handRight.height / 2 * this.scale.y,
            getRadius:function(){return this.handRight.height / 2 * this.scale.y}.bind(this)
        }
        parts.push(bodyPart);

        bodyPart = {
            x: this.x + this.head.x*this.scale.x,
            y: this.y + this.head.y*this.scale.y,
            radius: this.head.height / 2 * this.scale.y,
            getRadius:function(){return this.head.height / 2 * this.scale.y}.bind(this)
        }
        parts.push(bodyPart);

        return parts
    }

    getRadius() {
        // this.standardScale
        return this.scale.x * this.radius;
    }
    getExternalRadius() {
        return this.scale.x * this.externalRadius;
    }

    update(delta){
        if(!this.updateable){
            return
        }

        // if(
        //     (this.side > 0 && this.x > this.moveBounds.x2) ||
        //     (this.side < 0 && this.x < this.moveBounds.x1)
        //     )
        // {
        //     this.side *= -1
        // }
        this.x += this.velocity.x * delta * this.side;
        this.y += this.velocity.y * delta * this.side;
    }
}