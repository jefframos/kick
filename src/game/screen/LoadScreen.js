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

		this.startLoad();
	}

	toGame(){
		this.screenManager.change('StartScreen')
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
