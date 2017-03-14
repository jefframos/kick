import * as PIXI from 'pixi.js';

export default class GoalkeeperAnimations(){
	constructor(){
		this.animationsList = [];
		this.currentTimer = 0;
		this.currentAnimation = null;
	}
	addAnimation(frames, label, speed){
		let obj = {
			frames:frames,
			label:label,
			speed:speed
		}
		this.animationsList.push(obj);
	}
	update(delta){
		if(!this.currentAnimation){
			return
		}
	}
	play(label){
		this.currentTimer = 0
	}

	updateFrame(smooth = 1){
        // let currentFrame = [];
        // let nextFrame = [];
        // let next = frame + 1;

        // for (var i = this.currentAnimation.frames.length - 1; i >= 0; i--) {
        //     if(this.currentAnimation.frames[i].frame == frame){
        //         currentFrame.push(this.currentAnimation.frames[i]);
        //     }

        //     if(this.currentAnimation.frames[i].frame == next){
        //         nextFrame.push(this.currentAnimation.frames[i]);
        //     }
        // }

        // // if(!nextFrame.length){
        // //     next = 1;
        // //     for (var i = this.currentAnimation.frames.length - 1; i >= 0; i--) {
        // //         if(this.currentAnimation.frames[i].frame == next){
        // //             nextFrame.push(this.currentAnimation.frames[i]);
        // //         }
        // //     }
        // // }
        // for (var i = currentFrame.length - 1; i >= 0; i--) {
        //     for (var j = this.bodyParts.length - 1; j >= 0; j--) {
        //         if(this.bodyParts[j].label == currentFrame[i].label){
        //             this.bodyParts[j].part.x = currentFrame[i].x + (nextFrame[i].x - currentFrame[i].x)* smooth
        //             this.bodyParts[j].part.y = currentFrame[i].y + (nextFrame[i].y - currentFrame[i].y)* smooth
        //         }
        //     }
        // }
    
    }

}
