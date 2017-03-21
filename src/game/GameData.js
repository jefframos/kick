import * as PIXI from 'pixi.js';
import TweenLite from 'gsap';
import config  from '../config';
export default class GameData{
    constructor() {
    	this.maxPoints = 0;
    	this.currentPoints = 0;
    	this.stadiumID = 0;
    	this.points = 0;
    	this.teamID = 0;
    	this.lifes = 0;
    	this.fieldsTextures = [];
    	this.fieldsTextures.push({texture:'grass1.png', extraBalls: 0})
    	this.fieldsTextures.push({texture:'grass1.png', extraBalls: 1})
    	this.fieldsTextures.push({texture:'grass1.png', extraBalls: 2})
    	this.fieldsTextures.push({texture:'grass2.png', extraBalls: 3})


    	this.teamsData = [];
    	this.teamsData.push({attack:1, defense:1, color:0xFF0000})
    	this.teamsData.push({attack:1.2, defense:0.8, color:0xFF0000})
    	this.teamsData.push({attack:1.5, defense:0.5, color:0x0000FF})	
    	this.teamsData.push({attack:0.5, defense:1.5, color:0x00FF00})
    	this.teamsData.push({attack:0.8, defense:1.2, color:0xFF0FF0})

        this.goodShoot = 5,
        this.perfectShoot = 10;
    }
    getStadium(){
    	return this.fieldsTextures[this.stadiumID]
    }
    getHome(){
    	return 0.6
    }
    getOpponentData(){
    	return {attack:1, defense:1}
    }
    getMyTeamData(){
    	return this.teamsData[this.teamID]
    }
    changeLevel(level){
    	this.stadiumID = level;
    	GAME_VIEW.updateField(this.fieldsTextures[this.stadiumID])
    }
    changeTeam(team){
    	this.teamID = team;
    	GAME_VIEW.updateTeam(this.teamsData[this.teamID])
    }
    startNewGame(){
        this.lifes = 12 + this.fieldsTextures[this.stadiumID].extraBalls;
        this.points = 0;
    }
}