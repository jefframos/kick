import * as PIXI from 'pixi.js';
import TweenLite from 'gsap';
import config  from '../../config';
import utils  from '../../utils';
import Screen from '../../screenManager/Screen';

export default class LoadScreen extends Screen{
	constructor(label){
		super(label);
	}
	build(){
		super.build();
		
		this.mapSrc = './assets/map.json';


		// this.screenManager.change('GameScreen')

		let test = new PIXI.Text(this.label,{font : '32px robotoblack', fill : 0xFFFFFF, align : 'right'});
		test = new PIXI.Text(this.label,{font : '32px robotoregular', fill : 0xFFFFFF, align : 'right'});
        this.addChild(test)
        test.visible = false;

		this.startLoad();
	}

	toGame(){
		//this.screenLabel = new PIXI.Text(this.label,{font : '46px robotoblack', fill : 0xFFFFFF, align : 'right'});  
		// this.screenManager.change('ChooseTeamScreen')
		this.screenManager.change('StartScreen')
		// this.screenManager.change('GameScreen')
	}
	startLoad(){
		let loader = new PIXI.loaders.Loader(); // you can also create your own if you want
		loader.add(this.mapSrc);
		loader.once('complete',this.onAssetsLoaded.bind(this));
		loader.load();
	}
	onAssetsLoaded(evt){
		this.toGame();
		return;		
	}
}
