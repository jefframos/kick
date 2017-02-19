import * as PIXI from 'pixi.js';
import config  from '../../config';
export default class ViewManager{
	constructor(){

	}
	updateObjectScale(object, height){
		let perspectiveFactor = 1-object.y / height;
		object.scale.set(1.1 - perspectiveFactor*1.1);
	}
}