import * as PIXI from 'pixi.js';
import config  from '../../config';
export default class ViewManager{
	constructor(){

	}
	updateObjectScale(object, height){
		let perspectiveFactor = 1-object.y / height;
		let test = 0.95;
		object.scale.set(test - perspectiveFactor*test);
	}
}