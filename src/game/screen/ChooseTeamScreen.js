import * as PIXI from 'pixi.js';
import TweenLite from 'gsap';
import config  from '../../config';
import utils  from '../../utils';
import Screen from '../../screenManager/Screen'

export default class ChooseTeamScreen extends Screen{
	constructor(label){
		super(label);

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


        this.screenLabel = new PIXI.Text(this.label,{font : '32px mario', fill : 0x000000, align : 'right'});
        this.addChild(this.screenLabel)

        this.teamButtons = [];
        this.addTeamButton(0);
        this.addTeamButton(1);
        this.addTeamButton(2);
        this.addTeamButton(3);
        this.addTeamButton(4);

        
        this.teamDataLabel = new PIXI.Text('',{font : '20px', fill : 0x000000, align : 'right'});
		this.addChild(this.teamDataLabel)
		this.teamDataLabel.y = 350;

		this.playerButtons = [];
        this.addPlayerButton();
        this.addPlayerButton();
        this.addPlayerButton();

		this.tempPlayerLabel = new PIXI.Text('',{font : '20px', fill : 0x000000, align : 'right'});
		this.addChild(this.tempPlayerLabel)
		this.tempPlayerLabel.y = 550;

        this.addEvents();
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

	addTeamButton(id){

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
        this.addChild(button)
        this.playerButtons.push(button)

	}

	changeTeam(e){
		let target = e.target || e.data.target;
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
		super.transitionOut(nextScreen);
	}
	transitionIn(){

		super.transitionIn();

	}

	removeEvents(){
		this.button.off('touchstart').off('mousedown');
		this.backButton.off('touchstart').off('mousedown');
		for (var i = this.teamButtons.length - 1; i >= 0; i--) {
			this.teamButtons[i].off('touchstart').off('mousedown');
		}
		for (var i = this.playerButtons.length - 1; i >= 0; i--) {
			this.playerButtons[i].off('touchstart').off('mousedown');
		}
	}
	addEvents(){
		this.removeEvents();
		for (var i = this.teamButtons.length - 1; i >= 0; i--) {
			this.teamButtons[i].on('mousedown', this.changeTeam.bind(this)).on('touchstart', this.changeTeam.bind(this));
		}

		for (var i = this.playerButtons.length - 1; i >= 0; i--) {
			this.playerButtons[i].on('mousedown', this.changePlayer.bind(this)).on('touchstart', this.changePlayer.bind(this));
		}


		this.button.on('mousedown', this.startGame.bind(this)).on('touchstart', this.startGame.bind(this));
		this.backButton.on('mousedown', this.toMainScreen.bind(this)).on('touchstart', this.toMainScreen.bind(this));
	}
}