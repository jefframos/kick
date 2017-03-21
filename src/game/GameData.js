import * as PIXI from 'pixi.js';
import TweenLite from 'gsap';
import config  from '../config';
export default class GameData{
    constructor() {
    	this.maxPoints = 0;
    	this.currentPoints = 0;
    	this.level = 1;
    	this.points = 0;
    	this.teamID = 0;
    	this.lifes = 0;
    	this.fieldsTextures = [];
    	this.fieldsTextures.push('grass1.png')
    	this.fieldsTextures.push('grass2.png')
    	this.fieldsTextures.push('grass1.png')
    	this.fieldsTextures.push('grass2.png')


    	this.teamsData = [];
    	this.teamsData.push(0xFF0000)
    	this.teamsData.push(0x0000FF)    	
    	this.teamsData.push(0x00FF00)
    	this.teamsData.push(0xFF0FF0)

        this.goodShoot = 5,
        this.perfectShoot = 10;
    }
    changeLevel(level){
    	this.level = level;
    	GAME_VIEW.updateField(this.fieldsTextures[this.level])
    }
    changeTeam(team){
    	this.teamID = team;
    	GAME_VIEW.updateTeam(this.teamsData[this.teamID])
    }
    startNewGame(){
        this.lifes = 12;
        this.points = 0;
    }
}