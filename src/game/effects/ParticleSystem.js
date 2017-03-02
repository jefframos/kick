import * as PIXI from 'pixi.js';
import config  from '../../config';
import TweenLite from 'gsap';

export default class ParticleSystem extends PIXI.Container{
	constructor(){

		super();
		this.particles = [];
		// this.particlesContainer = new PIXI.ParticleContainer(500, {
		//     scale: true,
		//     position: true,
		//     rotation: true,
		//     uvs: true,
		//     tint: true,
		//     alpha: true
		// });

		this.particlesContainer = new PIXI.Container();

		this.addChild(this.particlesContainer);


	}
	removeAll(){
		for (var i = this.particles.length - 1; i >= 0; i--) {
			if(this.particles[i].parent){
				this.particles[i].parent.removeChild(this.particles[i]);
			}
			this.particles.splice(i,1);
		}
	}
	getParticle(src = null){
		let source = src?src:'coin/coin_0000'+Math.ceil(Math.random() * 8)+'.png';
		let sprite = PIXI.Sprite.fromImage(source);
		sprite.anchor.set(0.5)
		return sprite;
	}
	createBestParticles(pos = {x:0, y:0}, quant = 50){
		this.hasParticles = true;
		this.particleUpdater = 0;

		let yMultiplyer = 1
		let xMultiplyer = 1
		let scaleMultiplyer = 1.5
		let maxLife = 6
		let gravity = 500		
		console.log('BEST', pos);
		for (let i = 0; i < quant; i++)
		{
			pos.x = config.width * Math.random();
			let particle = new PIXI.extras.AnimatedSprite([
				PIXI.Texture.fromFrame('highscore_particle1.png'),
				PIXI.Texture.fromFrame('highscore_particle2.png'),
				PIXI.Texture.fromFrame('highscore_particle3.png'),
				PIXI.Texture.fromFrame('highscore_particle4.png')
				]);

			particle.animationSpeed = 0.1;
			particle.loop = true;
			particle.gotoAndPlay(Math.ceil(Math.random() * 4))
		    //let particle = this.getParticle('highscore_particle'+Math.ceil(Math.random() * 4)+'.png');
		    particle.anchor.set(0.5);		    
		    // particle.scale.set((0.1 * Math.random() + 0.3) * scaleMultiplyer);
		    particle.scale.set((0.7) * scaleMultiplyer);
		    let angle = Math.random() * (3.14 * 2)//- Math.atan2(this.velocity.y, this.velocity.x);
		    particle.x = pos.x;
		    particle.y = pos.y - Math.random() * config.height * 1.5 + 300;
		    particle.alpha = 1;
		    particle.direction = angle;
		    particle.turningSpeed = Math.random() < 0.5 ? 1 : -1;
		    particle.lifetime = maxLife;
		    particle.life = maxLife;
		    particle.gravity = gravity;
		    particle.speed = {
		    	x:0,
		    	y:(Math.random() * 200)* yMultiplyer
		    };
		    this.particles.push(particle);
		    this.particlesContainer.addChild(particle);
		}
	}
	createParticles(pos = {x:0, y:0}, quant = 4, src = null){
		// return

		this.hasParticles = true;
		this.particleUpdater = 0;
		
		let yMultiplyer = 1
		let xMultiplyer = 1
		let scaleMultiplyer = 1
		let maxLife = 2
		let gravity = 1200
		if(quant == 50){
			xMultiplyer = 0.4;
			yMultiplyer = 0.8
			quant = 50
			maxLife = 5;
			scaleMultiplyer = 1.3;
		}else if(quant > 30){
			xMultiplyer = 0.5;
			yMultiplyer = 0.8
			quant = 30
		}else if(quant >= 10){
			gravity = 400
			quant = 10
			yMultiplyer = 5
		}else{
			gravity = 900 * 3
			xMultiplyer = 1000;
			yMultiplyer = 1200
		}
		for (let i = 0; i < quant; i++)
		{
		    let particle = this.getParticle(src);
		    // particle.tint = 0xFF0000
		    particle.anchor.set(1, 0.5);
		    // particle.scale.set(0.05 * Math.random() + 0.025);
		    particle.scale.set((0.1 * Math.random() + 0.3) * scaleMultiplyer);
		    let angle = Math.random() * (3.14 * 2)//- Math.atan2(this.velocity.y, this.velocity.x);
		    particle.x = pos.x + Math.random() *quant - quant/2 + 25;
		    particle.y = pos.y + Math.random() *quant - quant/2;
		    particle.alpha = 0.8;
		    particle.direction = angle;
		    particle.turningSpeed = Math.random() < 0.5 ? 1 : -1;
		    particle.lifetime = maxLife;
		    particle.life = maxLife;
		    particle.gravity = gravity;
		    particle.speed = {
		    	x:Math.random() * 50 - 25 + ((quant*quant)/2 * Math.random())* xMultiplyer,
		    	y:-200 - ((quant*quant)/2 * Math.random())* yMultiplyer
		    };
		    this.particles.push(particle);
		    this.particlesContainer.addChild(particle);

		 //    if(quant >= 50){
			// 	console.log('WHAT');
			// 	console.log(particle);
			// }
		}
		// console.log(quant);
		// if(quant >= 50){
		// 	console.log('WHAT');
		// 	console.log(particle);
		// }
	}

	createParticlesEnemy(pos = {x:0, y:0}, quant = 4){
		// return

		this.hasParticles = true;
		this.particleUpdater = 0;		
		let yMultiplyer = 3
		let xMultiplyer = 1
		let scaleMultiplyer = 1
		let maxLife = 1
		let gravity = 2000

		for (let i = 0; i < quant; i++)
		{
			let id = Math.ceil(Math.random() * 3)
		    let particle = this.getParticle('enemy_frag'+id+'.png');
		    // particle.tint = 0xFF0000
		    particle.anchor.set(1, 0.5);
		    // particle.scale.set(0.05 * Math.random() + 0.025);
		    particle.scale.set((0.5 * Math.random() + 0.2) * scaleMultiplyer);
		    let angle = Math.random() * (3.14 * 2)//- Math.atan2(this.velocity.y, this.velocity.x);
		    particle.x = pos.x + Math.random() *quant - quant/2 + 25;
		    particle.y = pos.y + Math.random() *quant - quant/2;
		    particle.alpha = 0.8;
		    particle.direction = angle;
		    particle.turningSpeed = Math.random() < 0.5 ? 1 : -1;
		    particle.lifetime = maxLife;
		    particle.life = maxLife;
		    particle.gravity = gravity;
		    particle.speed = {
		    	x:(Math.random() * 500 - 250)* xMultiplyer,
		    	y:-(Math.random() * 500 - 250)* yMultiplyer
		    };
		    this.particles.push(particle);
		    this.particlesContainer.addChild(particle);
		}
	}

	createParticlesRevive(pos = {x:0, y:0}, quant = 4){
		// return

		this.hasParticles = true;
		this.particleUpdater = 0;		
		let yMultiplyer = 1
		let xMultiplyer = 1
		let scaleMultiplyer = 1
		let maxLife = 1
		let gravity = 100

		for (let i = 0; i < quant; i++)
		{
		    let particle = this.getParticle('additiveParticle2.png');
		    // particle.tint = 0xFF0000
		    particle.anchor.set(1, 0.5);
		    // particle.scale.set(0.05 * Math.random() + 0.025);
		    particle.scale.set((0.5 * Math.random() + 0.5) * scaleMultiplyer);
		    let angle = Math.random() * (3.14 * 2)//- Math.atan2(this.velocity.y, this.velocity.x);
		    particle.blendMode = PIXI.BLEND_MODES.ADD;
		    particle.x = pos.x + Math.random() *quant - quant/2 + 25;
		    particle.y = pos.y + Math.random() *quant - quant/2;
		    particle.alpha = 0.8;
		    particle.direction = angle;
		    particle.turningSpeed = Math.random() < 0.5 ? 1 : -1;
		    particle.lifetime = maxLife;
		    particle.life = maxLife;
		    particle.gravity = gravity;
		    particle.speed = {
		    	x:(Math.random() * 500 - 250)* xMultiplyer,
		    	y:(Math.random() * 500 - 250)* yMultiplyer
		    };
		    this.particles.push(particle);
		    this.particlesContainer.addChild(particle);
		}
	}


	update(delta){
		// return
		// console.log(this.particles.length);
		for (var i = this.particles.length - 1; i >= 0; i--)
	    {
	        var particle = this.particles[i];
	        particle.direction += particle.turningSpeed * 0.1;
	       	particle.position.x += particle.speed.x * particle.turningSpeed * delta// (Math.sin(particle.direction) * (particle.speed)) * delta;
	        particle.position.y += particle.speed.y * delta//(Math.cos(particle.direction) * (particle.speed) + particle.gravity) * delta;
	        particle.speed.y += particle.gravity * delta
	        //particle.rotation = -particle.direction + Math.PI;
	        // console.log(particle.lifetime / particle.life);
	        particle.alpha = particle.lifetime / particle.life + 0.1;
	        particle.scale.x -= delta*0.15
	        particle.scale.y -= delta*0.15

	        particle.lifetime -= delta;
	        if(particle.lifetime <= 0){
	        	particle.parent.removeChild(particle)
	        	this.particles.splice(i, 1);
	        }
		}
	}
}