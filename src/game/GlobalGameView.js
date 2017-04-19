import * as PIXI from 'pixi.js';
import TweenLite from 'gsap';
import config  from '../config';
export default class GlobalGameView{
    constructor(gameContainer) {    	
    	this.gameContainer = gameContainer;
    	this.updateGameBackground();
    	this.updateAllViews();
    }
    updateAllViews(){
    	let teamData = GAME_DATA.getMyTeamData();
    	console.log(teamData);
    	this.updateTeam(teamData)
    	this.updateField(GAME_DATA.getStadium())
    }
    updateTeam(team){
    	// this.sky.tint = team.color;
    }
    updateField(stadiumData){
    	let tex = PIXI.Texture.fromFrame(stadiumData.texture);

    	// TweenLite.killTweensOf(this.sky.scale);
    	TweenLite.killTweensOf(this.field.scale);

		this.field.texture = tex;
    	// this.sky.scale.y = 0.75;
    	this.field.scale.y = 0.8;
    	this.field.scale.x = 1.2;
    	// TweenLite.to(this.sky.scale, 0.5, {y:1, ease:'easeOutElastic'})
    	TweenLite.to(this.field.scale, 0.5, {x:1, y:1, ease:'easeOutElastic'})
    }
    updateGameBackground(){

    	this.backgroundContaier = new PIXI.Container();
		this.gameContainer.addChild(this.backgroundContaier);

		this.background = new PIXI.Graphics();
		this.background.beginFill(0xababab);
	    this.background.drawRect( 0, 0, config.width, config.height);
		this.backgroundContaier.addChild(this.background);

		let tex;

		// tex = PIXI.Texture.fromFrame('torcida.jpg');
		// this.sky = new PIXI.extras.TilingSprite(tex, config.width + 100, config.height + 100);//new PIXI.Graphics().beginFill(0x27BBE0).drawRect(0,0,config.width, 150);
		// this.backgroundContaier.addChild(this.sky)
		// this.sky.anchor.set(0.5,1)
		// this.sky.tileScale.x = 0.25
		// this.sky.tileScale.y = 0.25
		// this.sky.x = config.width / 2;
		// this.sky.y = 220


		tex = PIXI.Texture.fromFrame('grass1.png');
		this.field = new PIXI.extras.TilingSprite(tex, config.width  + 100, config.height  + 200);//new PIXI.Graphics().beginFill(0x3C8C57).drawRect(0,0,config.width, config.height);
		this.backgroundContaier.addChild(this.field)
		this.field.tileScale.x = 0.25/2
		this.field.tileScale.y = 0.25/2
		this.field.anchor.x = 0.5;
		this.field.y = 150;
		this.field.x = config.width / 2



    }
}