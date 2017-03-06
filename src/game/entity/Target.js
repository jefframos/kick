import * as PIXI from 'pixi.js';
import config  from '../../config';
export default class Target extends PIXI.Container {

    constructor(game, radius = 20) {
        super();
        this.game = game;
        this.radius = radius;

        this.container = new PIXI.Container();
        this.addChild(this.container);

        this.backTarget = new PIXI.Graphics();
        this.backTarget.beginFill(0xFFFFFF);
        this.backTarget.drawCircle(0,0,this.radius);
        // this.backTarget.alpha = 0.1;
        this.backTarget.tint = 0xFF0000;
        this.container.addChild(this.backTarget);

        this.frontTarget = new PIXI.Graphics();
        this.frontTarget.beginFill(0xFFFFFF);
        this.frontTarget.drawCircle(0,0,this.radius - 20);
        // this.frontTarget.alpha = 0.1;
        this.frontTarget.tint = 0x0000FF;
        this.container.addChild(this.frontTarget);

        this.updateable = false;
        this.moveBounds = {x1:0, x2:100}
        this.velocity = {x:100, y:0}
        this.side = -1;
    }
    onTarget(){
        // this.updateable = false;
        
        this.frontTarget.tint = 0xFFFFFF;
        this.backTarget.tint = 0xFFFFFF;
        let timeLine = new TimelineLite();
        timeLine.add(TweenLite.to(this.scale, 0.2, {delay:0.1, x:0,y:0, ease:'easeInBack',onComplete:function(){
                this.frontTarget.tint = 0x0000FF;
                this.backTarget.tint = 0xFF0000;
            },
            onCompleteScope:this
        })
        )
        timeLine.add(TweenLite.to(this.scale, 0.75, {x:1,y:1, ease:'easeOutElastic'}))
        //  onComplete:function(){
        //     // console.log('UPDATE AGAIN');
        //     // this.updateable = true;
        // }, onStart:function(){
        //     this.scale.set(0);
        //     this.frontTarget.tint = 0x0000FF;
        //     this.backTarget.tint = 0xFF0000;
        //     // console.log('UPDATE AGAIN');
        //     // this.updateable = true;
        // }, onStartScope:this})
    }
    update(delta){
        if(!this.updateable){
            return
        }

        if(
            (this.side > 0 && this.x > this.moveBounds.x2) ||
            (this.side < 0 && this.x < this.moveBounds.x1)
            )
        {
            this.side *= -1
        }
        this.x += this.velocity.x * delta * this.side;
        this.y += this.velocity.y * delta * this.side;
    }
}