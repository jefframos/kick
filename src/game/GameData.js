import * as PIXI from 'pixi.js';
import TweenLite from 'gsap';
import config  from '../config';
export default class GameData{
    constructor(gameContainer) {
    	this.maxPoints = 0;
    	this.currentPoints = 0;
    	this.level = 1;
    	this.points = 0;
    	this.teamID = 0;
    	this.lifes = 0;
    	this.gameContainer = gameContainer;
    	this.updateGameBackground();
    }
    updateGameBackground(){

    	this.backgroundContaier = new PIXI.Container();
		this.gameContainer.addChild(this.backgroundContaier);

		this.background = new PIXI.Graphics();
		this.background.beginFill(0xababab);
	    this.background.drawRect( 0, 0, config.width, config.height);
		this.backgroundContaier.addChild(this.background);

		let tex;

		tex = PIXI.Texture.fromImage('./assets/images/torcida.jpg');
		this.sky = new PIXI.extras.TilingSprite(tex, config.width + 100, config.height + 100);//new PIXI.Graphics().beginFill(0x27BBE0).drawRect(0,0,config.width, 150);
		this.backgroundContaier.addChild(this.sky)
		this.sky.tileScale.x = 0.25
		this.sky.tileScale.y = 0.25
		this.sky.x = -50
		this.sky.y = -50


		tex = PIXI.Texture.fromImage('./assets/images/grass1.png');
		this.field = new PIXI.extras.TilingSprite(tex, config.width  + 100, config.height  + 100);//new PIXI.Graphics().beginFill(0x3C8C57).drawRect(0,0,config.width, config.height);
		this.backgroundContaier.addChild(this.field)
		this.field.tileScale.x = 0.25/2
		this.field.tileScale.y = 0.25/2
		this.field.y = 150;
		this.field.x = -50



    }
}