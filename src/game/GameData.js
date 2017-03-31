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
        this.teamsData.push({id:100, attack:1.2, defense:1.2, colorData:
        {
            mainColor:COLORS_CONST.red600,
            patternColors:
                [
                    {
                        color:COLORS_CONST.red600,
                        tick:0.45
                    },
                    {
                        color:COLORS_CONST.grey50,
                        tick:0.1
                    },
                    {
                        color:COLORS_CONST.grey900,
                        tick:0.45
                    }
                ],
                patternRotation:0,
                buttonColor:COLORS_CONST.grey900,
                contrastColor:COLORS_CONST.grey50            
        }
        , goalkeeperLevel:1, type:'HARD', players:[], brand:'atletico_goianiense.png', ini:'ATG'})
        this.teamsData.push({id:50, attack:1.2, defense:1.2, colorData:
        {
            mainColor:COLORS_CONST.grey900,
            patternColors:[
                
                    {
                        color:COLORS_CONST.grey50,
                        tick:0.1
                    },
                    {
                        color:COLORS_CONST.grey900,
                        tick:0.35
                    },
                    {
                        color:COLORS_CONST.grey50,
                        tick:0.1
                    },
                    {
                        color:COLORS_CONST.grey900,
                        tick:0.35
                    },
                    {
                        color:COLORS_CONST.grey50,
                        tick:0.1
                    }
                
            ],
            buttonColor:COLORS_CONST.grey50,
            contrastColor:COLORS_CONST.grey900,
            patternRotation:0
        }
        , goalkeeperLevel:1, type:'HARD', players:[], brand:'atletico_mineiro.png', ini:'ATM'})
        this.teamsData.push({id:450, attack:1.2, defense:1.2, colorData:
        {
            mainColor:COLORS_CONST.red800,
            patternColors:[
                {
                    color:COLORS_CONST.red800,
                    tick:0.2
                },
                {
                    color:COLORS_CONST.grey900,
                    tick:0.2
                },
                {
                    color:COLORS_CONST.red800,
                    tick:0.2
                },
                {
                    color:COLORS_CONST.grey900,
                    tick:0.2
                },
                {
                    color:COLORS_CONST.red800,
                    tick:0.2
                }
            ],
            buttonColor:COLORS_CONST.grey900,
            contrastColor:COLORS_CONST.grey50,
            patternRotation:0
        }
        , goalkeeperLevel:1, type:'HARD', players:[], brand:'atletico_paranaense.png', ini:'ATP'})
        this.teamsData.push({id:10, attack:0.5, defense:0.5, colorData:
        {
            mainColor:COLORS_CONST.blue500,
            patternColors:[                
                {
                    color:COLORS_CONST.blue500,
                    tick:0.2
                },
                {
                    color:COLORS_CONST.grey50,
                    tick:0.2
                },
                {
                    color:COLORS_CONST.blue500,
                    tick:0.2
                },
                {
                    color:COLORS_CONST.grey50,
                    tick:0.2
                },
                {
                    color:COLORS_CONST.blue500,
                    tick:0.2
                }
            ],
            buttonColor:COLORS_CONST.grey50,
            contrastColor:COLORS_CONST.blue900,
            patternRotation:0
        }
        , goalkeeperLevel:0.5, type:'VERY EASY', players:[], brand:'avai.png', ini:'AVA'})
        this.teamsData.push({id:9, attack:1.5, defense:0.5, colorData:
        {
            mainColor:COLORS_CONST.blue400,
             patternColors:[                
                {
                    color:COLORS_CONST.blue400,
                    tick:0.2
                },
                {
                    color:COLORS_CONST.grey50,
                    tick:0.2
                },
                {
                    color:COLORS_CONST.red600,
                    tick:0.2
                },
                {
                    color:COLORS_CONST.grey50,
                    tick:0.2
                },
                {
                    color:COLORS_CONST.blue400,
                    tick:0.2
                }
            ],
            buttonColor:COLORS_CONST.red600,
            contrastColor:COLORS_CONST.grey50,
            patternRotation:3.14 / 2
        }
        , goalkeeperLevel:0.75, type:'EASY', players:[], brand:'bahia.png', ini:'BAH'})   
        this.teamsData.push({id:460, attack:1.2, defense:1.2, colorData:
        {
            mainColor:COLORS_CONST.grey900,
            patternColors:[
                {
                    color:COLORS_CONST.grey900,
                    tick:0.33
                },
                {
                    color:COLORS_CONST.grey50,
                    tick:0.33
                },
                {
                    color:COLORS_CONST.grey900,
                    tick:0.33
                },
            ],
            buttonColor:COLORS_CONST.grey50,
            contrastColor:COLORS_CONST.grey900,
            patternRotation:3.14 / 2
        }
        , goalkeeperLevel:1, type:'HARD', players:[], brand:'botafogo.png', ini:'BOT'})
        this.teamsData.push({id:8, attack:1.2, defense:0.8, colorData:
        {
            mainColor:COLORS_CONST.light_green800,
            patternColors:[
                {
                    color:COLORS_CONST.light_green800,
                    tick:0.33
                },
                {
                    color:COLORS_CONST.grey50,
                    tick:0.33
                },
                {
                    color:COLORS_CONST.light_green800,
                    tick:0.33
                },
            ],
            buttonColor:COLORS_CONST.grey50,
            contrastColor:COLORS_CONST.light_green900,
            patternRotation:0
        }
        , goalkeeperLevel:0.5, type:'EASY', players:[], brand:'chapecoense.png', ini:'CHA'})
        this.teamsData.push({id:0, attack:1.2, defense:1.2, colorData:
        {
            mainColor:COLORS_CONST.grey900,
            patternColors:[
            {
                    color:COLORS_CONST.red600,
                    tick:0.1
                },
                {
                    color:COLORS_CONST.grey900,
                    tick:0.15
                },
                {
                    color:COLORS_CONST.grey50,
                    tick:0.15
                },
                {
                    color:COLORS_CONST.grey900,
                    tick:0.2
                },
                {
                    color:COLORS_CONST.grey50,
                    tick:0.15
                },
                {
                    color:COLORS_CONST.grey900,
                    tick:0.15
                },
                {
                    color:COLORS_CONST.red600,
                    tick:0.1
                }
                // {
                //     color:COLORS_CONST.grey900,
                //     tick:1
                // }
            ],
            buttonColor:COLORS_CONST.red600,
            contrastColor:COLORS_CONST.grey50,
            patternRotation:3.14/2
        }
        , goalkeeperLevel:1, type:'HARD', players:[], brand:'corinthians.png', ini:'COR'})
        this.teamsData.push({id:2, attack:1, defense:1, colorData:
        {
            mainColor:COLORS_CONST.green800,
            patternColors:[
            {
                    color:COLORS_CONST.green800,
                    tick:0.2
                },
                {
                    color:COLORS_CONST.grey50,
                    tick:0.2
                },
                {
                    color:COLORS_CONST.green800,
                    tick:0.2
                },
                {
                    color:COLORS_CONST.grey50,
                    tick:0.2
                },
                {
                    color:COLORS_CONST.green800,
                    tick:0.2
                }     
            ],
            buttonColor:COLORS_CONST.grey50,
            contrastColor:COLORS_CONST.green900,
            patternRotation:0
        }
        , goalkeeperLevel:0.8, type:'NORMAL', players:[], brand:'coritiba.png', ini:'CTB'})
        this.teamsData.push({id:11, attack:1.2, defense:1.2, colorData:
        {
            mainColor:COLORS_CONST.blue900,
            patternColors:[               
                {
                    color:COLORS_CONST.grey50,
                    tick:0.2
                },
                {
                    color:COLORS_CONST.blue900,
                    tick:0.6
                },
                {
                    color:COLORS_CONST.grey50,
                    tick:0.2
                }             
            ],
            buttonColor:COLORS_CONST.grey50,
            contrastColor:COLORS_CONST.blue900,
            patternRotation:0
        }
        , goalkeeperLevel:1, type:'HARD', players:[], brand:'cruzeiro.png', ini:'CRU'})
        this.teamsData.push({id:1, attack:1, defense:1, colorData:
        {
            mainColor:COLORS_CONST.red600,
            patternColors:[
                {
                    color:COLORS_CONST.grey900,
                    tick:0.2
                },
                {
                    color:COLORS_CONST.red600,
                    tick:0.2
                },
                {
                    color:COLORS_CONST.grey900,
                    tick:0.2
                },
                {
                    color:COLORS_CONST.red600,
                    tick:0.2
                },
                {
                    color:COLORS_CONST.grey900,
                    tick:0.2
                }
               
            ],
            buttonColor:COLORS_CONST.grey900,
            contrastColor:COLORS_CONST.grey50,
            patternRotation:3.14 / 2
        }
        , goalkeeperLevel:0.8, type:'NORMAL', players:[], brand:'flamengo.png', ini:'FLA'})
        this.teamsData.push({id:107, attack:1.2, defense:1.2, colorData:
        {
            mainColor:COLORS_CONST.pink900,
            patternColors:[
            {
                    color:COLORS_CONST.pink900,
                    tick:0.45
                },
                {
                    color:COLORS_CONST.grey50,
                    tick:0.1
                },
                {
                    color:COLORS_CONST.green900,
                    tick:0.45
                }                
            ],
            buttonColor:COLORS_CONST.green900,
            contrastColor:COLORS_CONST.grey50,
            patternRotation:3.14/2
        }
        , goalkeeperLevel:1, type:'HARD', players:[], brand:'fluminense.png', ini:'FLU'})
        this.teamsData.push({id:4, attack:1.2, defense:1.2, colorData:
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
        this.teamsData.push({id:3, attack:1, defense:1, colorData:
        {
            mainColor:COLORS_CONST.green600,
            patternColors:[
                {
                    color:COLORS_CONST.grey50,
                    tick:0.5
                },
                {
                    color:COLORS_CONST.green600,
                    tick:0.5
                }
            ],
            buttonColor:COLORS_CONST.grey50,
            contrastColor:COLORS_CONST.green900,
            patternRotation:3.14/2
        }
        , goalkeeperLevel:0.8, type:'NORMAL', players:[], brand:'palmeiras.png', ini:'PAL'})
        this.teamsData.push({id:124, attack:1.2, defense:1.2, colorData:
            {
                mainColor:COLORS_CONST.grey900,
            patternColors:[
                {
                    color:COLORS_CONST.grey900,
                    tick:0.2
                },
                {
                    color:COLORS_CONST.grey50,
                    tick:0.2
                },
                {
                    color:COLORS_CONST.grey900,
                    tick:0.2
                },
                {
                    color:COLORS_CONST.grey50,
                    tick:0.2
                },
                {
                    color:COLORS_CONST.grey900,
                    tick:0.2
                }
            ],
            buttonColor:COLORS_CONST.grey50,
            contrastColor:COLORS_CONST.grey900,
            patternRotation:0
        }
        , goalkeeperLevel:1, type:'HARD', players:[], brand:'ponte_preta.png', ini:'PON'})
        this.teamsData.push({id:7, attack:1, defense:1, colorData:
            {
                mainColor:COLORS_CONST.grey50,
            patternColors:[                
                {
                    color:COLORS_CONST.grey50,
                    tick:0.166
                },
                {
                    color:COLORS_CONST.grey900,
                    tick:0.166
                },
                {
                    color:COLORS_CONST.grey50,
                    tick:0.166
                },
                {
                    color:COLORS_CONST.grey900,
                    tick:0.166
                },
                {
                    color:COLORS_CONST.grey50,
                    tick:0.166
                },
                {
                    color:COLORS_CONST.grey900,
                    tick:0.166
                }
            ],
            buttonColor:COLORS_CONST.grey900,
            contrastColor:COLORS_CONST.grey50,
            patternRotation:3.14/4
        }
        , goalkeeperLevel:0.8, type:'NORMAL', players:[], brand:'santos.png', ini:'SAN'})
        this.teamsData.push({id:6, attack:1, defense:1, colorData:
            {
                mainColor:COLORS_CONST.red600,
            patternColors:[
                {
                        color:COLORS_CONST.red600,
                        tick:0.4
                    },
                    {
                        color:COLORS_CONST.grey50,
                        tick:0.2
                    },
                    {
                        color:COLORS_CONST.grey900,
                        tick:0.4
                    }
            ],
            buttonColor:COLORS_CONST.grey900,
            contrastColor:COLORS_CONST.grey50,
            patternRotation:0
        }
        , goalkeeperLevel:0.8, type:'NORMAL', players:[], brand:'sao_paulo.png', ini:'SPA'})
        this.teamsData.push({id:5, attack:1, defense:1, colorData:
            {
                mainColor:COLORS_CONST.red800,
                patternColors:[
                {
                    color:COLORS_CONST.red800,
                    tick:0.2
                },
                {
                    color:COLORS_CONST.grey900,
                    tick:0.225
                },
                {
                    color:COLORS_CONST.yellow600,
                    tick:0.15
                },
                {
                    color:COLORS_CONST.grey900,
                    tick:0.225
                },
                {
                    color:COLORS_CONST.red800,
                    tick:0.2
                }
            ],
           
            buttonColor:COLORS_CONST.grey900,
            contrastColor:COLORS_CONST.grey50,
            patternRotation:3.14 / 4
        }
        , goalkeeperLevel:0.8, type:'NORMAL', players:[], brand:'sport.png', ini:'SPO'})
        this.teamsData.push({id:312, attack:1.2, defense:1.2, colorData:
            {
                mainColor:COLORS_CONST.grey900,
            patternColors:[
                {
                    color:COLORS_CONST.grey900,
                    tick:0.33
                },
                {
                    color:COLORS_CONST.grey50,
                    tick:0.33
                },
                {
                    color:COLORS_CONST.grey900,
                    tick:0.33
                }
        ],
        buttonColor:COLORS_CONST.grey50,
        contrastColor:COLORS_CONST.grey900,
        patternRotation:3.14 / 4
    }
    , goalkeeperLevel:1, type:'HARD', players:[], brand:'vasco.png', ini:'VAS'})
        this.teamsData.push({id:314, attack:1.2, defense:1.2, colorData:
            {
                mainColor:COLORS_CONST.red900,
            patternColors:[
            {
                color:COLORS_CONST.red900,
                tick:0.475
            },
            {
                color:COLORS_CONST.grey50,
                tick:0.05
            },
            {
                color:COLORS_CONST.grey900,
                tick:0.475
            }
        ],
        buttonColor:COLORS_CONST.grey900,
        contrastColor:COLORS_CONST.grey50,
        patternRotation:3.14/2
    }
    , goalkeeperLevel:1, type:'HARD', players:[], brand:'vitoria.png', ini:'VIT'})
        
        

        this.goodShoot = 5,
        this.perfectShoot = 10;

        this.addPlayers();

        let tempData = COOKIE_MANAGER.getCookie('player-kickxel');
        console.log(tempData);
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