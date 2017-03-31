import * as PIXI from 'pixi.js';
import TweenLite from 'gsap';
import config  from '../../config';
import utils  from '../../utils';
import Screen from '../../screenManager/Screen'
import TeamSelectorPanel from '../../game/ui/TeamSelectorPanel'

export default class ChooseMatchScreen extends Screen{
	constructor(label){
		super(label);

		// alert(label)

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


        shape = PIXI.Sprite.fromFrame('big-button-up.png');
		shape.anchor.set(0.5);
		this.playButton = new PIXI.Container();
        //this.shape = new PIXI.Graphics().beginFill(0).drawCircle(0,0,80);
        this.playButton.addChild(shape)
        
        this.playButton.interactive = true;
        // this.addChild(this.playButton)


        this.screenLabel = new PIXI.Text(this.label,{font : '32px mario', fill : 0x000000, align : 'right'});
        this.addChild(this.screenLabel)

        this.teamButtons = [];
        // this.addButton(0);
        // this.addButton(1);
        // this.addButton(2);
        // this.addButton(3);
        // this.addButton(4);


        this.teamSelectorPanel = new TeamSelectorPanel();
		this.teamSelectorPanel.build()
		this.teamSelectorPanel.position.set(config.width/2, config.height/2 * 1.2)
		this.teamSelectorPanel.confirmTeamPanelCallback = this.confirmChangeTeam.bind(this);

		this.addChild(this.teamSelectorPanel)
		this.teamSelectorPanel.hide();


        this.teamDataLabel = new PIXI.Text('',{font : '20px', fill : 0x000000, align : 'right'});
		// this.addChild(this.teamDataLabel)
		this.teamDataLabel.y = 350;
        this.addEvents();
	}
	confirmChangeTeam(team){
		GAME_DATA.changeOpponent(team.id);
		this.teamSelectorPanel.closePop();
		this.startGame();
	}

	updateTeamLabel(){
		let teamData = GAME_DATA.getOpponentData();

		this.teamDataLabel.text = 'ATTACK: ' + teamData.attack * 100 + ' - DEFENSE: ' + teamData.defense * 100 + '\nGOALKEEPER LEVEL: ' + teamData.goalkeeperLevel * 100
		+'\nTEAM LEVEL: ' + teamData.type
	}
	build(){
		super.build();

		this.backButton.x = 50;
        this.backButton.y = 50;

        this.playButton.x = config.width / 2;
        this.playButton.y = 500;

		this.updateTeamLabel();
	}

	addButton(id){

		let teamData = GAME_DATA.getTeamById(id);
		let shape = PIXI.Sprite.fromFrame('big-button-up.png');
		shape.anchor.set(0.5);
		shape.scale.set(0.5);
		let button = new PIXI.Container();
        button.addChild(shape)        
        button.interactive = true;
        button.y = 300;
        button.x = 50 + this.teamButtons.length * 80;
        button.id = teamData.id;
        let brand = PIXI.Sprite.fromFrame('seriea/'+teamData.brand);
        brand.anchor.set(0.5);
		brand.scale.set(0.5);
        this.addChild(button)
        button.addChild(brand)
        this.teamButtons.push(button)

	}

	changeTeam(e){
		let target = e.target || e.data.target;
		GAME_DATA.changeOpponent(target.id);
		this.updateTeamLabel();

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
		super.transitionOut(nextScreen);
	}
	transitionIn(){

		super.transitionIn();

		this.teamSelectorPanel.show();

	}

	removeEvents(){
		this.button.off('touchstart').off('mousedown');
		this.backButton.off('touchstart').off('mousedown');
		this.playButton.off('touchstart').off('mousedown');
		for (var i = this.teamButtons.length - 1; i >= 0; i--) {
			this.teamButtons[i].off('touchstart').off('mousedown');
		}
	}
	addEvents(){
		this.removeEvents();
		for (var i = this.teamButtons.length - 1; i >= 0; i--) {
			this.teamButtons[i].on('mousedown', this.changeTeam.bind(this)).on('touchstart', this.changeTeam.bind(this));
		}
		this.button.on('mousedown', this.startGame.bind(this)).on('touchstart', this.startGame.bind(this));
		this.backButton.on('mousedown', this.toMainScreen.bind(this)).on('touchstart', this.toMainScreen.bind(this));
		this.playButton.on('mousedown', this.startGame.bind(this)).on('touchstart', this.startGame.bind(this));
	}
}