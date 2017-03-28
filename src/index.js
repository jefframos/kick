import plugins from './plugins';
import config  from './config';
import Game from './Game';
import GameData from './game/GameData';
import CookieManager from './game/CookieManager';
import GlobalGameView from './game/GlobalGameView';
import ScreenManager from './screenManager/ScreenManager';
import GameScreen from './game/screen/GameScreen';
import LoadScreen from './game/screen/LoadScreen';
import StartScreen from './game/screen/StartScreen';
import ChooseTeamScreen from './game/screen/ChooseTeamScreen';
import ChooseFieldScreen from './game/screen/ChooseFieldScreen';
import GameOverScreen from './game/screen/GameOverScreen';
import ChooseMatchScreen from './game/screen/ChooseMatchScreen';
import Pool from './game/core/Pool';

window.COOKIE_MANAGER = new CookieManager();
window.GAME_DATA = new GameData();

window.POOL = new Pool();

// window.console.warn= function(){}
// window.console.groupCollapsed = function(teste){return teste}//('hided warnings')

PIXI.loader
	// .add('./assets/map.json')
	.add('./assets/images/game-0.json')
	.add('./assets/images/game-1.json')
	.add('./assets/images/trail1.jpg')
	// .add('./assets/images/ball.png')
	// .add('./assets/images/grass1.png')
	// .add('./assets/images/grass2.png')
	// .add('./assets/images/ringDisplaceMap.jpg')
	// .add('./assets/images/torcida.jpg')
	// .add('./assets/images/onion.png')
	// .add('./assets/images/goal.png')
	// .add('./assets/images/ui.json')
	.add('./assets/fonts/mario-webfont.woff')
	.add('./assets/fonts/mario-webfont.woff2')
	.add('./assets/fonts/stylesheet.css')
	.add('./assets/fonts/specimen_files/specimen_stylesheet.css')
	.load(configGame);

function configGame(){

	window.game = new Game(config);

	
	//create screen manager
	let screenManager = new ScreenManager();
	window.GAME_VIEW = new GlobalGameView(screenManager);
	//add screens
	let gameScreen = new GameScreen('GameScreen');
	let loadScreen = new LoadScreen('LoadScreen');
	let startScreen = new StartScreen('StartScreen');
	let chooseTeamScreen = new ChooseTeamScreen('ChooseTeamScreen');
	let chooseFieldScreen = new ChooseFieldScreen('ChooseFieldScreen');
	let gameOverScreen = new GameOverScreen('GameOverScreen');
	let chooseMatchScreen = new ChooseMatchScreen('ChooseMatchScreen');

	game.stage.addChild(screenManager);

	screenManager.addScreen(gameScreen);
	screenManager.addScreen(loadScreen);
	screenManager.addScreen(startScreen);
	screenManager.addScreen(chooseTeamScreen);
	screenManager.addScreen(chooseFieldScreen);
	screenManager.addScreen(gameOverScreen);
	screenManager.addScreen(chooseMatchScreen);
	//change to init screen
	screenManager.forceChange('LoadScreen');

	// screenManager.filters = [this.pixelate]

	game.start();
}
