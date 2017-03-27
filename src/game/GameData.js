import * as PIXI from 'pixi.js';
import TweenLite from 'gsap';
import config  from '../config';
export default class GameData{
    constructor() {
    	this.maxPoints = 0;
        this.currentPoints = 0;
    	this.opponentID = 0;
    	this.points = 0;
    	this.lifes = 0;
    	this.fieldsTextures = [];
    	this.fieldsTextures.push({texture:'grass1.png', extraBalls: 0})
    	this.fieldsTextures.push({texture:'grass1.png', extraBalls: 1})
    	this.fieldsTextures.push({texture:'grass1.png', extraBalls: 2})
    	this.fieldsTextures.push({texture:'grass2.png', extraBalls: 3})


    	this.teamsData = [];
    	this.teamsData.push({id:0, attack:1, defense:1, color:0xFFAFFA, goalkeeperLevel:0.8, type:'NORMAL', players:[], brand:'flamengo.png', ini:'FLA'})
        this.teamsData.push({id:1, attack:1.2, defense:0.8, color:0xFFAAAA, goalkeeperLevel:0.5, type:'EASY', players:[], brand:'chapecoense.png', ini:'CHA'})
        this.teamsData.push({id:2, attack:1.5, defense:0.5, color:0xAAAAFF, goalkeeperLevel:0.75, type:'EASY', players:[], brand:'bahia.png', ini:'BAH'})   
        this.teamsData.push({id:3, attack:0.5, defense:0.5, color:0xAAFFAA, goalkeeperLevel:0.5, type:'VERY EASY', players:[], brand:'avai.png', ini:'AVA'})
    	this.teamsData.push({id:4, attack:1.2, defense:1.2, color:0xFFFFFF, goalkeeperLevel:1, type:'HARD', players:[], brand:'gremio.png', ini:'GRE'})

        this.goodShoot = 5,
        this.perfectShoot = 10;

        this.addPlayers();

        let tempData = COOKIE_MANAGER.getCookie('player');
        console.log(tempData);
        if(!tempData){
            this.currentTeamData = {
                teamID:0,
                playerID:0,
                stadiumID:0
            }
            COOKIE_MANAGER.createCookie('player', this.currentTeamData);
        }else{
            this.currentTeamData = tempData;
        }
    }
    savePlayer(){
        COOKIE_MANAGER.storeObject('player', this.currentTeamData);
    }
    getTeamById(id){
        console.log(id, this.teamsData);
        for (var i = this.teamsData.length - 1; i >= 0; i--) {
            if(this.teamsData[i].id == id){
                return this.teamsData[i];
            }
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
    	return this.fieldsTextures[this.currentTeamData.stadiumID]
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
    	this.currentTeamData.stadiumID = level;
    	GAME_VIEW.updateField(this.fieldsTextures[this.currentTeamData.stadiumID])
        this.savePlayer();
    }
    changeOpponent(team){
        this.opponentID = team;
    }
    changePlayer(id){
        this.currentTeamData.playerID = id;
        this.savePlayer();
    }
    changeTeam(team){
        this.currentTeamData.teamID = team;
        GAME_VIEW.updateTeam(this.teamsData[this.currentTeamData.teamID])
        this.savePlayer();
    }
    startNewGame(){
        this.lifes = 12 + this.fieldsTextures[this.currentTeamData.stadiumID].extraBalls;
        this.points = 0;
    }
}