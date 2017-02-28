import * as PIXI from 'pixi.js';
import config  from '../../config';
export default class Target extends PIXI.Container {

    constructor(game, radius = 20) {
        super();
        this.game = game;
        this.radius = radius;

        this.container = new PIXI.Container();
        this.addChild(this.container);

        this.shadow = new PIXI.Graphics();
        this.shadow.lineStyle(Math.floor(this.radius / 2 / 4)*4, 0xFF0000);
        this.shadow.beginFill(0x0000FF);
        this.shadow.drawCircle(0,0,this.radius);
        // this.shadow.alpha = 0.1;
        this.container.addChild(this.shadow);

        this.updateable = false;
        this.moveBounds = {x1:0, x2:100}
        this.velocity = {x:100, y:0}
        this.side = -1;
    }
    onTarget(){
        // this.updateable = false;
        this.scale.set(0);
        TweenLite.to(this.scale, 0.75, {delay:0.5, x:1,y:1, ease:'easeOutElastic', onComplete:function(){
            // console.log('UPDATE AGAIN');
            // this.updateable = true;
        }})
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