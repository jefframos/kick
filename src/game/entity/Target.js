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
        this.shadow.beginFill(0x0000FF);
        this.shadow.drawCircle(0,0,this.radius);
        // this.shadow.alpha = 0.1;
        this.container.addChild(this.shadow);

    }
}