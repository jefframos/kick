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

        this.teamsData = [];
        this.teamsData.push({id:0, attack:1.2, defense:1.2, colorData:
        {
             mainColor:COLORS_CONST.blue500,
            patternColors:[
            {
                    color:COLORS_CONST.blue500,
                    tick:0.3
                },
                {
                    color:COLORS_CONST.grey50,
                    tick:0.1
                },
                {
                    color:COLORS_CONST.grey900,
                    tick:0.2
                },
                {
                    color:COLORS_CONST.grey50,
                    tick:0.1
                },
                {
                    color:COLORS_CONST.blue500,
                    tick:0.3
                }
            ],
            buttonColor:COLORS_CONST.grey900,
            contrastColor:COLORS_CONST.grey50,
            patternRotation:3.14/2
        }
        , goalkeeperLevel:1, type:'HARD', players:[], brand:'gremio.png', ini:'GRE'})
        this.teamsData.push({id:1, attack:1.2, defense:1.2, colorData:
        {
            mainColor:COLORS_CONST.red600,
            patternColors:[
                
                    {
                        color:COLORS_CONST.red600,
                        tick:0.3
                    },
                    {
                        color:COLORS_CONST.grey50,
                        tick:0.4
                    },
                    {
                        color:COLORS_CONST.red600,
                        tick:0.3
                    }
                
            ],
            buttonColor:COLORS_CONST.red600,
            contrastColor:COLORS_CONST.grey50,
            patternRotation:0
        }
        , goalkeeperLevel:1, type:'HARD', players:[], brand:'inter.png', ini:'INT'})
        
        

        this.goodShoot = 5,
        this.perfectShoot = 10;

        this.addPlayers();

        let tempData = COOKIE_MANAGER.getCookie('player-kickxel');
        if(!tempData){
            this.currentTeamData = {
                teamID:0,
                playerID:0,
                stadiumID:0,
                money:0,
                goldenBalls:0,
            }
            COOKIE_MANAGER.createCookie('player-kickxel', this.currentTeamData);
        }else{
            this.currentTeamData = tempData;
        }
    }
    getOther(){
        if(this.getMyTeamData().id == 0){
            this.changeOpponent(1)
        }else{
            this.changeOpponent(0)
        }
    }
    savePlayer(){
        COOKIE_MANAGER.storeObject('player-kickxel', this.currentTeamData);
    }
    getTeamById(id){
        console.log(id, this.teamsData);
        for (var i = this.teamsData.length - 1; i >= 0; i--) {
            if(this.teamsData[i].id == id){
                console.log(id, i,'ID');
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
        return this.getMyTeamData().players[this.currentTeamData.playerID];
    }
    getOpponentData(){
    	return this.getTeamById(this.opponentID)
    }
    getMyTeamData(){
        return this.getTeamById(this.currentTeamData.teamID)
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
        GAME_VIEW.updateTeam(this.getTeamById(this.currentTeamData.teamID))
        this.savePlayer();
    }
    startNewGame(){
        this.lifes = 12 + this.fieldsTextures[this.currentTeamData.stadiumID].extraBalls;
        this.points = 0;
    }
}