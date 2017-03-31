import * as PIXI from 'pixi.js';
import TweenLite from 'gsap';
import config  from '../../config';
export default class TeamInfoPanel extends PIXI.Container{
	constructor(){
		super();
		this.panelContainer = new PIXI.Container();
		this.addChild(this.panelContainer)

		this.teamContainer = new PIXI.Container();
		this.panelContainer.addChild(this.teamContainer)

	}
	build(w = 300, h = 500){
		this.teamPanelSize = {w:w, h:h}
		this.grid = {x:4, y:5}

		this.teamButtons = [];
		 // for (var i = 0; i < GAME_DATA.teamsData.length; i++) {		 	
		 // 	this.addTeamButton(GAME_DATA.teamsData[i].id);
		 // }

        this.panelMask = new PIXI.Graphics().beginFill(0xFFFFFF).drawRoundedRect(0,0,this.teamPanelSize.w, this.teamPanelSize.h, GRAPHICS_DATA.roundedCorner)
        this.panelContainer.addChild(this.panelMask)

        this.panelContainer.mask = this.panelMask;

        this.panelContainer.pivot.set(this.teamPanelSize.w/2, this.teamPanelSize.h/2)

        this.panelMask.pivot.set(this.teamPanelSize.w/2, this.teamPanelSize.h/2)
        // this.teamContainer.pivot.set(this.teamPanelSize.w/2, this.teamPanelSize.h/2)
		this.panelMask.position.set(this.teamPanelSize.w/2, this.teamPanelSize.h/2)

		

		this.closePopup = new PIXI.Graphics().beginFill(0xFFFFFF).drawRect(0,0,this.teamPanelSize.w, this.teamPanelSize.h)
		this.closePopup.alpha = 0;
		this.closePopup.visible = false;
		this.closePopup.interactive = true;
		this.panelContainer.addChild(this.closePopup)

		this.addEvents();

		this.openTeamPanelCallback = function(e){};
		this.confirmTeamPanelCallback = function(e){};
		this.cancelTeamPanelCallback = function(e){};


		//TEAM CONTAINER
		this.panelBackgroundShape = new PIXI.Graphics().beginFill(0xFFFFFF).drawRect(0,0,this.teamPanelSize.w, this.teamPanelSize.h)
		this.teamContainer.addChild(this.panelBackgroundShape)

		this.topImage = new PIXI.Graphics().beginFill(0xFFFFFF).drawRect(0,0,this.teamPanelSize.w, 50)
		this.teamContainer.addChild(this.topImage)

		this.teamBrand = PIXI.Sprite.fromFrame('seriea/flamengo.png')
		this.teamContainer.addChild(this.teamBrand)
		this.teamBrand.scale.set(this.teamPanelSize.w / this.teamBrand.width * 0.4)
		this.teamBrand.x = this.teamPanelSize.w / 2 - this.teamBrand.width / 2
		this.teamBrand.y = 60


		this.teamConfirmButtonContainer = new PIXI.Container()


		this.teamConfirmButton = new PIXI.Graphics().beginFill(0xFFFFFF).drawRoundedRect(0,0,this.teamPanelSize.w - 40, 60, GRAPHICS_DATA.roundedCorner)
		this.teamConfirmButtonContainer.addChild(this.teamConfirmButton)
		this.teamContainer.addChild(this.teamConfirmButtonContainer)

		this.teamConfirmButtonContainer.x = this.teamPanelSize.w / 2 - this.teamConfirmButtonContainer.width / 2
		this.teamConfirmButtonContainer.y = this.teamPanelSize.h - this.teamConfirmButtonContainer.height - 20
		
		this.buttonLabel = new PIXI.Text('CHANGE',{font : '32px robotoregular', fill : 0xFFFFFF, align : 'right'});
        this.teamConfirmButtonContainer.addChild(this.buttonLabel)

		this.teamConfirmButtonContainer.interactive = true;
		this.teamConfirmButtonContainer.buttonMode = true;
		this.teamConfirmButtonContainer.on('mousedown', this.onConfirmTeam.bind(this)).on('touchstart', this.onConfirmTeam.bind(this));

		// this.teamContainer.visible = false;
		// this.hide();
	}

	hide(){
		this.panelMask.scale.set(0);
		this.y = config.height/2 * 1.2;
		// TweenLite.to(this, 0.35, {y:config.height/2})
	}
	show(timeScale = 1){
		this.updateTeamContent(GAME_DATA.getMyTeamData())
		this.panelMask.scale.set(0);
		TweenLite.to(this.panelMask.scale, 0.2*timeScale, {y:1})
		TweenLite.to(this.panelMask.scale, 0.35*timeScale, {x:1})
		TweenLite.to(this, 0.35*timeScale, {y:config.height/2})

	}

	onConfirmTeam(e){
		if(this.currentSelectedTeam){
			this.confirmTeamPanelCallback(this.currentSelectedTeam)
			// this.closePop();
		}else{
			console.log('erro bizarro');
		}
	}
	updateTeamContent(team){
		this.teamBrand.texture = PIXI.Texture.fromFrame('seriea/'+team.brand)
		this.teamConfirmButton.tint = team.colorData.buttonColor;
		this.panelBackgroundShape.tint = team.colorData.mainColor;
		this.buttonLabel.tint = team.colorData.contrastColor;
		this.buttonLabel.x = this.teamConfirmButtonContainer.width / 2 - this.buttonLabel.width / 2
		this.buttonLabel.y = this.teamConfirmButtonContainer.height / 2 - this.buttonLabel.height / 2
		this.currentSelectedTeam = team;
	}
	changeTeamCallback(e){
		let target = e.target || e.data.target;
		this.updateTeamContent(GAME_DATA.getTeamById(target.id));
		this.updatePopUp(target);
	}
	removeEvents(){
		for (var i = this.teamButtons.length - 1; i >= 0; i--) {
			this.teamButtons[i].off('touchstart').off('mousedown');
		}
		// for (var i = this.playerButtons.length - 1; i >= 0; i--) {
		// 	this.playerButtons[i].off('touchstart').off('mousedown');
		// }
	}
	addEvents(){
		this.removeEvents();
		for (var i = this.teamButtons.length - 1; i >= 0; i--) {
			this.teamButtons[i].on('mousedown', this.changeTeamCallback.bind(this)).on('touchstart', this.changeTeamCallback.bind(this));
		}

		// for (var i = this.playerButtons.length - 1; i >= 0; i--) {
		// 	this.playerButtons[i].on('mousedown', this.changePlayer.bind(this)).on('touchstart', this.changePlayer.bind(this));
		// }
		this.closePopup.on('mousedown', this.closePop.bind(this)).on('touchstart', this.closePop.bind(this));
	}


	addTeamButton(id){

		
		let teamData = GAME_DATA.getTeamById(id);

		let space = {x:10, y:10};
		let wdt = (this.teamPanelSize.w - space.x * 6) / this.grid.x / 2;
		let hgt = (this.teamPanelSize.h - space.y * 6) / this.grid.y / 2;

		let shape = new PIXI.Graphics().beginFill(0xFFFFFF).drawCircle(0,0,wdt)//PIXI.Sprite.fromFrame('big-button-up.png');
		
		let mask = new PIXI.Graphics().beginFill(0xFFFFFF).drawCircle(0,0,wdt)//PIXI.Sprite.fromFrame('big-button-up.png');
		// shape.anchor.set(0.5);
		// shape.scale.set(0.5);

		let button = new PIXI.Container();
        button.addChild(shape)        
        button.addChild(mask)        
        button.interactive = true;
        button.buttonMode = true;
        let xpos = (this.teamButtons.length % this.grid.x) | 0
        let ypos = Math.floor(this.teamButtons.length / this.grid.x) | 0

        // button.y = ypos * hgt + wdt*2;
        button.x = space.x + wdt + (xpos * (wdt * 2 + space.x));
        button.y = space.y + hgt + (ypos * (hgt * 2 + space.y));
        button.id = teamData.id;
        let brand = PIXI.Sprite.fromFrame('seriea/'+teamData.brand);
        brand.anchor.set(0.5);
		brand.scale.set(0.5);
        shape.tint = teamData.colorData.mainColor
        let roundPattern = this.getRoundPattern(teamData.colorData.patternColors);

        roundPattern.rotation = teamData.colorData.patternRotation;
        roundPattern.scale.set(wdt * 2 / roundPattern.width)
        button.addChild(roundPattern)
        roundPattern.mask = mask;
        this.panelContainer.addChild(button)
        button.shape = shape;

        // button.addChild(brand)
        this.teamButtons.push(button)

	}
	getRoundPattern(colorData){
		let container = new PIXI.Container();
		let size = 100
		let width = size//size / colorData.length;
		for (var i = 0; i < colorData.length ; i++) {
			let square = new PIXI.Graphics().beginFill(0xFFFFFF).drawRect(0,0,width * colorData[i].tick, size)
			square.tint = colorData[i].color;
			square.x = container.width;
			container.addChild(square)
		}
		container.pivot.set(size/2)
		return container;
	}
	hideTeamContainer(){
		this.teamContainer.visible = false;
	}
	closePop(target){
		// this.currentClone.visible = false
		this.closePopup.visible = false
		// this.topImage.visible = false;
		TweenLite.to(this.teamContainer,0.2,{alpha:0})
		TweenLite.to(this.panelContainer,0.2,{y:0, ease:'easeOutCubic', onComplete:this.hideTeamContainer, onCompleteScope:this})
		if(this.currentClone){
			TweenLite.to(this.currentClone,0.2,{delay:0.2, alpha: 0})
			TweenLite.to(this.currentClone.scale,0.2,{x:1, y:1})
			TweenLite.to(this.currentClone,0.2,{x:this.currentClone.initialPosition.x,y:this.currentClone.initialPosition.y})
		}
	}
	updatePopUp(target){

		this.teamContainer.visible = true;
		this.teamContainer.alpha = 0;
		// console.log(target.shape, 'shape');
		if(this.currentClone && this.currentClone.parent){
			this.currentClone.parent.removeChild(this.currentClone);
		}
		this.currentClone = target.shape.clone();
		this.currentClone.x = target.x;
		this.currentClone.y = target.y;
		this.currentClone.initialPosition = {x:target.x, y:target.y}
		this.closePopup.visible = true;
		// target.parent.setChildIndex(target, target.parent.children.length - 1)
		target.parent.addChild(this.currentClone)
		this.teamContainer.parent.setChildIndex(this.teamContainer, this.teamContainer.parent.children.length - 1)
		TweenLite.to(this.currentClone,0.2,{x:this.panelMask.width / 2, y:this.panelMask.height / 2})
		TweenLite.to(this.currentClone.scale,0.4,{x:15, y:15})
		TweenLite.to(this.teamContainer,0.2,{alpha:1, delay:0.1})
		TweenLite.to(this.panelContainer,0.2,{y:- 50})
	}

}