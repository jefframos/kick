import plugins from './plugins';
import config  from './config';
import Game from './Game';
import GameData from './game/GameData';
import ScreenManager from './screenManager/ScreenManager';
import InitScreen from './game/screen/InitScreen';
import LoadScreen from './game/screen/LoadScreen';
import StartScreen from './game/screen/StartScreen';



PIXI.loader
	// .add('./assets/map.json')
	.add('./assets/images/salsicha.json')
	.add('./assets/images/bg.png')
	.add('./assets/images/grass1.png')
	.add('./assets/images/grass2.png')
	.add('./assets/images/ringDisplaceMap.jpg')
	.add('./assets/images/torcida.jpg')
	.add('./assets/images/onion.png')
	.add('./assets/images/goal.png')
	// .add('./assets/images/ui.json')
	.add('./assets/fonts/luckiestguy-webfont.woff')
	.add('./assets/fonts/luckiestguy-webfont.woff2')
	.add('./assets/fonts/stylesheet.css')
	.add('./assets/fonts/specimen_files/specimen_stylesheet.css')
	.load(configGame);

function configGame(){

	window.game = new Game(config);

	
	//create screen manager
	let screenManager = new ScreenManager();
	window.GAME_DATA = new GameData(screenManager);
	//add screens
	let initScreen = new InitScreen('InitScreen');
	let loadScreen = new LoadScreen('LoadScreen');
	let startScreen = new StartScreen('StartScreen');

	game.stage.addChild(screenManager);

	screenManager.addScreen(initScreen);
	screenManager.addScreen(loadScreen);
	screenManager.addScreen(startScreen);
	//change to init screen
	screenManager.forceChange('LoadScreen');

	// screenManager.filters = [this.pixelate]

	game.start();
}
