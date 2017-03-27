import * as PIXI from 'pixi.js';
import TweenLite from 'gsap';
import config  from '../config';
export default class GameData{
    constructor() {
    	this.maxPoints = 0;
        this.currentPoints = 0;
    	this.opponentID = 0;
    	this.stadiumID = 0;
    	this.points = 0;
    	this.lifes = 0;
    	this.fieldsTextures = [];
    	this.fieldsTextures.push({texture:'grass1.png', extraBalls: 0})
    	this.fieldsTextures.push({texture:'grass1.png', extraBalls: 1})
    	this.fieldsTextures.push({texture:'grass1.png', extraBalls: 2})
    	this.fieldsTextures.push({texture:'grass2.png', extraBalls: 3})


    	this.teamsData = [];
    	this.teamsData.push({attack:1, defense:1, color:0xFF0000, goalkeeperLevel:0.8, type:'NORMAL', players:[]})
        this.teamsData.push({attack:1.2, defense:0.8, color:0xFF0000, goalkeeperLevel:0.5, type:'EASY', players:[]})
        this.teamsData.push({attack:1.5, defense:0.5, color:0x0000FF, goalkeeperLevel:0.75, type:'EASY', players:[]})   
        this.teamsData.push({attack:0.5, defense:0.5, color:0x00FF00, goalkeeperLevel:0.5, type:'VERY EASY', players:[]})
    	this.teamsData.push({attack:1.2, defense:1.2, color:0xFF0FF0, goalkeeperLevel:1, type:'HARD', players:[]})

        this.goodShoot = 5,
        this.perfectShoot = 10;

        this.addPlayers();

        this.currentTeamData = {
            teamID:0,
            playerID:0
        }
    }
    addPlayers(){
        // let tempPlayer = {force:1, curve:1}
        for (var i = this.teamsData.length - 1; i >= 0; i--) {
            this.teamsData[i].players.push({force:1, curve:1});
            this.teamsData[i].players.push({force:0.75, curve:1.5});
            this.teamsData[i].players.push({force:1.5, curve:0.75});
        }
    }
    getStadium(){
    	return this.fieldsTextures[this.stadiumID]
    }
    getHome(){
    	return 0.6
    }
    getKickerData(){
        //force 0.75 - 1.5
        //curve 0.75 - 1.5
        return this.teamsData[this.currentTeamData.teamID].players[this.currentTeamData.playerID];
    }
    getOpponentData(){
    	return this.teamsData[this.opponentID]
    }
    getMyTeamData(){
        return this.teamsData[this.currentTeamData.teamID]
    }
    changeLevel(level){
    	this.stadiumID = level;
    	GAME_VIEW.updateField(this.fieldsTextures[this.stadiumID])
    }
    changeOpponent(team){
        this.opponentID = team;
    }
    changePlayer(id){
        this.currentTeamData.playerID = id;
    }
    changeTeam(team){
    	this.currentTeamData.teamID = team;
    	GAME_VIEW.updateTeam(this.teamsData[this.currentTeamData.teamID])
    }
    startNewGame(){
        this.lifes = 12 + this.fieldsTextures[this.stadiumID].extraBalls;
        this.points = 0;
    }
}