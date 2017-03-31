import * as PIXI from 'pixi.js';
import TweenLite from 'gsap';
import config  from '../../config';
import utils  from '../../utils';
import Screen from '../../screenManager/Screen'
import TeamSelectorPanel from '../../game/ui/TeamSelectorPanel'
import TeamInfoPanel from '../../game/ui/TeamInfoPanel'

export default class ChooseTeamScreen extends Screen{
	constructor(label){
		super(label);

		// this.bg = new PIXI.Graphics().beginFill(0x356B33).drawRect(0,0,config.width, config.height)
		// this.addChild(this.bg)

		this.button = new PIXI.Container();
        this.shape = new PIXI.Graphics().beginFill(0).drawCircle(0,0,80);
        this.button.addChild(this.shape)
        // this.outgameUIContainer.addChild(this.button)
        this.button.x = config.width / 2;
        this.button.y = config.height / 2;
        this.button.interactive = true;
        // this.addChild(this.button)


        let shape = PIXI.Sprite.fromFrame('big-button-up.png');
		shape.anchor.set(0.5);
		
		this.backButton = new PIXI.Container();
        //this.shape = new PIXI.Graphics().beginFill(0).drawCircle(0,0,80);
        this.backButton.addChild(shape)
        
        this.backButton.interactive = true;
        this.addChild(this.backButton)



        
        this.screenLabel = new PIXI.Text(this.label,{font : '32px robotoblack', fill : 0xFFFFFF, align : 'right'});
        this.addChild(this.screenLabel)


        // this.buildTeamSelectionPanel();
       

        
        this.teamDataLabel = new PIXI.Text('',{font : '20px', fill : 0x000000, align : 'right'});
		//this.addChild(this.teamDataLabel)
		this.teamDataLabel.y = 350;

		this.playerButtons = [];
        this.addPlayerButton();
        this.addPlayerButton();
        this.addPlayerButton();

		this.tempPlayerLabel = new PIXI.Text('',{font : '20px', fill : 0x000000, align : 'right'});
		//this.addChild(this.tempPlayerLabel)
		this.tempPlayerLabel.y = 550;


		this.teamInfoPanel = new TeamInfoPanel();
		this.teamInfoPanel.build()
		this.teamInfoPanel.position.set(config.width/2, config.height/2 * 1.2)
		this.teamInfoPanel.confirmTeamPanelCallback = this.showTeamSelector.bind(this);

		this.teamSelectorPanel = new TeamSelectorPanel();
		this.teamSelectorPanel.build()
		this.teamSelectorPanel.position.set(config.width/2, config.height/2 * 1.2)
		this.teamSelectorPanel.confirmTeamPanelCallback = this.confirmChangeTeam.bind(this);

		this.addChild(this.teamInfoPanel)
		this.teamInfoPanel.hide();
		this.addChild(this.teamSelectorPanel)
		this.teamSelectorPanel.hide();

        this.addEvents();
	}
	showTeamSelector(){
		this.teamInfoPanel.hide();
		this.teamSelectorPanel.show();
	}
	confirmChangeTeam(team){
		GAME_DATA.changeTeam(team.id);
		this.teamSelectorPanel.closePop();
		this.teamInfoPanel.show(0);
		this.teamSelectorPanel.hide();
		// this.toMainScreen();
	}
	updateTeamLabel(){
		let teamData = GAME_DATA.getMyTeamData();
		this.teamDataLabel.text = 'ATTACK: ' + teamData.attack * 100 + ' - DEFENSE: ' + teamData.defense * 100
		this.updatePlayerLabel();
	}

	updatePlayerLabel(){
		let teamData = GAME_DATA.getKickerData();
		this.tempPlayerLabel.text = 'POWER: ' + teamData.force * 100 + ' - CURVE: ' + teamData.curve * 100
	}

	build(){
		super.build();

		this.backButton.x = 50;
        this.backButton.y = 50;

		this.updateTeamLabel();
		this.updatePlayerLabel();
	}

	addPlayerButton(){

		let shape = PIXI.Sprite.fromFrame('big-button-up.png');
		shape.anchor.set(0.5);
		shape.scale.set(0.5);
		let button = new PIXI.Container();
        button.addChild(shape)        
        button.interactive = true;
        button.y = 500;
        button.x = 50 + this.playerButtons.length * 80;
        button.id = this.playerButtons.length;
        button.shape = shape;
        // this.addChild(button)
        //this.playerButtons.push(button)

	}

	changeTeam(e){
		let target = e.target || e.data.target;
		this.updatePopUp(target);
		GAME_DATA.changeTeam(target.id);
		this.updateTeamLabel();

	}
	changePlayer(e){
		let target = e.target || e.data.target;
		GAME_DATA.changePlayer(target.id);
		this.updatePlayerLabel();

	}

	destroy(){

	}

	startGame(){
		this.screenManager.change('GameScreen')
	}

	toMainScreen(){
		console.log('to start');
		this.screenManager.change('StartScreen')
	}

	update(delta){

	}

	transitionOut(nextScreen){
		// this.closePop();
		super.transitionOut(nextScreen);
	}
	transitionIn(){

		super.transitionIn();
		this.teamInfoPanel.show();
		this.teamSelectorPanel.hide();

	}

	removeEvents(){
		this.button.off('touchstart').off('mousedown');
		this.backButton.off('touchstart').off('mousedown');
		// for (var i = this.teamButtons.length - 1; i >= 0; i--) {
		// 	this.teamButtons[i].off('touchstart').off('mousedown');
		// }
		// for (var i = this.playerButtons.length - 1; i >= 0; i--) {
		// 	this.playerButtons[i].off('touchstart').off('mousedown');
		// }
	}
	addEvents(){
		this.removeEvents();
		// for (var i = this.teamButtons.length - 1; i >= 0; i--) {
		// 	this.teamButtons[i].on('mousedown', this.changeTeam.bind(this)).on('touchstart', this.changeTeam.bind(this));
		// }

		// for (var i = this.playerButtons.length - 1; i >= 0; i--) {
		// 	this.playerButtons[i].on('mousedown', this.changePlayer.bind(this)).on('touchstart', this.changePlayer.bind(this));
		// }


		this.button.on('mousedown', this.startGame.bind(this)).on('touchstart', this.startGame.bind(this));
		//this.closePopup.on('mousedown', this.closePop.bind(this)).on('touchstart', this.closePop.bind(this));
		this.backButton.on('mousedown', this.toMainScreen.bind(this)).on('touchstart', this.toMainScreen.bind(this));
	}
}