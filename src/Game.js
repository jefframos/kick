import * as PIXI from 'pixi.js';

export default class Game {
	constructor(config){
		const Renderer = (config.webgl) ? PIXI.autoDetectRenderer : PIXI.CanvasRenderer;
		//config.width = window.screen.width;

	// 	width: 414,
	// height: 736,

		//config.height = window.screen.height;
		this.ratio = config.width / config.height;
		window.renderer = new Renderer(config.width || 800, config.height || 600, config.rendererOptions);
		document.body.appendChild(window.renderer.view);

		this.stage = new PIXI.Container();
		//this.animationLoop = new PIXI.AnimationLoop(window.renderer);
		//this.animationLoop.on('prerender', this.update.bind(this));
		this.resize();

		this.frameskip = 1;
		this.lastUpdate = Date.now();

		PIXI.ticker.shared.add( this._onTickEvent, this );

		this.update();



	}
	_onTickEvent( deltaTime ) {

		this.dt =  deltaTime / 60;
		// console.log( deltaTime / 60);
	}
	resize() {
		if (window.innerWidth / window.innerHeight >= this.ratio) {
			var w = window.innerHeight * this.ratio;
			var h = window.innerHeight;
		} else {
			var w = window.innerWidth;
			var h = window.innerWidth / this.ratio;
		}
		window.renderer.view.style.width = w + 'px';
		window.renderer.view.style.height = h + 'px';
	}

	update(){
		let now = Date.now();
	    this.dt = now - this.lastUpdate;
	    this.lastUpdate = now;
	    // if(this.dt < 30){
	    // 	this.frameskip = 2;
	    // }else{
	    // 	this.frameskip = 1;	    	
	    // }
	    this.dt /= 1000;
		for (var i = this.frameskip - 1; i >= 0; i--) {
			for(let i = 0; i < this.stage.children.length; i++){
				if(this.stage.children[i].update){
					// this.stage.children[i].update(this.dt / this.frameskip);
					// this.stage.children[i].update(this.dt);
					if(this.dt <= 1/30){
						this.stage.children[i].update(1/60);
					}else{
						this.stage.children[i].update(1/30);
					}
				}
			}
		}
		window.renderer.render(this.stage);
		requestAnimationFrame(this.update.bind(this));
	}

	start(){
	//	this.animationLoop.start();
	}

	stop(){
	//	this.animationLoop.stop();
	}
}
