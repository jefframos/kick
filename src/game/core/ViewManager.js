import * as PIXI from 'pixi.js';
import config  from '../../config';
export default class ViewManager{
	constructor(){
			this.globalScale = 0.75//0.95
	}
	updateObjectScale(object, height){
		// console.log(1);
		let perspectiveFactor = 1-object.y / height;
		// this.globalScale+=0.0001
		// if(this.globalScale > 0.95){
		// 	this.globalScale = 0.95
		// }
		object.scale.set(this.globalScale - perspectiveFactor*this.globalScale);
	}
}