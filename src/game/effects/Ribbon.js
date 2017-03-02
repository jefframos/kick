import * as PIXI from 'pixi.js';
import config  from '../../config';
import TweenLite from 'gsap';
import Rope from './Rope';

export default class Ribbon extends PIXI.Container{
	constructor(animationContainer, player){

		super();

		this.animationContainer = animationContainer;
		this.player = player;
		this.baseHeadband = new PIXI.Graphics().beginFill(0xFFFF00).drawCircle(0,0,1);
		this.baseHeadband.alpha = 0
		this.headbandTracker = [];
		let track = []

		track.push({frame:1, x:171.97512664794922, y:107.30105895996094})
		track.push({frame:2, x:171.08293380737305, y:108.80787353515625})
		track.push({frame:3, x:170.32952651977538, y:110.31468811035155})
		track.push({frame:4, x:169.51663970947266, y:111.68271713256836})
		track.push({frame:5, x:166.4237045288086, y:112.65421600341797})
		track.push({frame:6, x:163.50920791625978, y:113.2688377380371})
		track.push({frame:7, x:160.93176193237306, y:113.62571487426759})
		track.push({frame:8, x:158.53275451660156, y:113.6653678894043})
		track.push({frame:9, x:156.15357360839843, y:113.3283172607422})
		track.push({frame:10, x:154.44849395751953, y:106.9838348388672})
		track.push({frame:11, x:152.68393478393554, y:100.81779098510742})
		track.push({frame:12, x:151.11764068603517, y:94.67157363891602})
		track.push({frame:13, x:149.67030563354493, y:88.70379486083984})
		track.push({frame:14, x:151.85122146606446, y:84.83762588500976})
		track.push({frame:15, x:154.05196380615234, y:81.24902801513672})
		track.push({frame:16, x:156.43114471435547, y:77.75956268310547})
		track.push({frame:17, x:158.88963165283204, y:74.44853591918945})
		track.push({frame:18, x:160.87228240966797, y:72.60467071533203})
		track.push({frame:19, x:163.03337173461912, y:70.54271392822265})
		track.push({frame:20, x:165.17463455200195, y:68.57988967895507})
		track.push({frame:21, x:167.43485641479492, y:66.45845336914063})
		track.push({frame:22, x:168.8623649597168, y:72.94172134399413})
		track.push({frame:23, x:170.44848556518556, y:79.34568328857422})
		track.push({frame:24, x:171.95530014038084, y:85.88843078613282})
		track.push({frame:25, x:173.42246170043947, y:92.37169876098632})
		track.push({frame:26, x:172.64922790527342, y:94.31469650268555})
		track.push({frame:27, x:172.17339172363282, y:96.63439788818359})
		track.push({frame:28, x:171.73720855712892, y:99.5092414855957})
		track.push({frame:29, x:171.4992904663086, y:102.78061523437499})
		track.push({frame:30, x:171.61824951171874, y:104.06933822631835})
		track.push({frame:31, x:171.65790252685545, y:105.5563262939453})
		track.push({frame:32, x:171.97512664794922, y:107.30105895996094})

		this.headbandTracker.push({label:['running'], track:track, pos:{x:0, y:0}})


		track = []

		track.push({frame:1, x:228.24275512695314, y:39.59353561401367})
		track.push({frame:2, x:246.68140716552736, y:40.84260559082031})
		track.push({frame:3, x:270.61200180053714, y:64.23788452148438})
		track.push({frame:4, x:320.257576751709, y:46.13628311157226})
		track.push({frame:5, x:269.3232788085938, y:56.22797546386719})
		track.push({frame:6, x:259.9255142211914, y:63.82152786254883})
		track.push({frame:7, x:262.06677703857423, y:52.73851013183594})
		track.push({frame:8, x:265.79416046142575, y:52.024755859375})
		track.push({frame:9, x:269.5215438842774, y:51.46961364746094})

		this.headbandTracker.push({label:['preJumpingWall', 'jumpingWall'], track:track, pos:{x:-85, y:-15}})

		track = []

// 		track.push({frame:1, x:248.3762176513672, y:523.4994232177734})
// track.push({frame:2, x:253.2735534667969, y:526.8898864746094})
// track.push({frame:3, x:249.92274475097656, y:527.2269500732422})
// track.push({frame:4, x:241.8927001953125, y:529.9234588623046})
// track.push({frame:5, x:234.41781921386723, y:516.777978515625})
// track.push({frame:6, x:234.63591918945315, y:512.5745971679687})
// track.push({frame:7, x:234.57643737792966, y:508.6091430664062})
// track.push({frame:8, x:241.3771911621094, y:505.7936706542969})
// track.push({frame:9, x:248.09863586425786, y:503.17647094726556})
// track.push({frame:10, x:250.47790832519536, y:497.16880798339844})
// track.push({frame:11, x:253.5114807128906, y:504.4255889892578})
// track.push({frame:12, x:246.88917236328126, y:517.09521484375})
// track.push({frame:13, x:240.0091094970703, y:515.6874786376953})
// track.push({frame:14, x:244.98575439453123, y:511.2659973144531})
// track.push({frame:15, x:249.92274475097656, y:520.90205078125})
// track.push({frame:16, x:245.73919067382815, y:520.6641235351563})
// track.push({frame:17, x:248.3762176513672, y:523.4994232177734})



		track.push({frame:1, x:105.91727905273439 - 10, y:85.67363586425782})
		track.push({frame:2, x:110.79478759765624 - 10, y:89.10375366210937})
		track.push({frame:3, x:104.01386108398438 - 10, y:88.13221740722656})
		track.push({frame:4, x:96.16226196289063 - 10, y:90.49166259765624})
		track.push({frame:5, x:91.89939880371094 - 10, y:76.37464599609375})
		track.push({frame:6, x:91.95888061523438 - 10, y:72.19109191894532})
		track.push({frame:7, x:91.76060791015625 - 10, y:68.26529235839844})
		track.push({frame:8, x:98.56136169433594 - 10, y:65.44981994628907})
		track.push({frame:9, x:105.28280639648438 - 10, y:62.83262023925781})
		track.push({frame:10, x:107.58276977539063 - 10, y:63.78432922363281})
		track.push({frame:11, x:109.76376953125 - 10, y:64.91448364257812})
		track.push({frame:12, x:103.73627929687501 - 10, y:70.06957397460937})
		track.push({frame:13, x:97.31224365234375 - 10, y:75.32380065917968})
		track.push({frame:14, x:102.3087158203125 - 10, y:70.94197387695313})
		track.push({frame:15, x:104.01386108398438 - 10, y:81.80731811523438})
		track.push({frame:16, x:100.02857971191406 - 10, y:81.84697265625})
		track.push({frame:17, x:105.91727905273439 - 10, y:85.67363586425782})

		this.headbandTracker.push({label:['climbing'], track:track, pos:{x:0, y:0}})

		track = []
			track.push({frame:1, x:66.7646598815918, y:73.38329315185547})
		track.push({frame:2, x:60.61725616455078, y:67.7285385131836})
		track.push({frame:3, x:54.40559387207031, y:62.22372055053711})
		track.push({frame:4, x:67.42866516113281, y:56.65464401245117})
		track.push({frame:5, x:77.06745147705078, y:65.45806884765625})
		track.push({frame:6, x:99.55795288085938, y:65.47948837280273})
		track.push({frame:7, x:135.37139892578125, y:69.84907150268555})
		track.push({frame:8, x:122.04845428466795, y:65.6722640991211})
		track.push({frame:9, x:108.7040901184082, y:61.516876220703125})


		this.headbandTracker.push({label:['landing','dead','idle'], track:track, pos:{x:-10, y:0}})



		track = []
		track.push({frame:1, x:113.4349365234375, y:58.672558593750004})
		track.push({frame:2, x:110.00112304687501, y:61.907885742187496})
		track.push({frame:3, x:106.34897460937499, y:65.22260742187501})
		track.push({frame:4, x:105.67412109374999, y:58.275585937500004})
		track.push({frame:5, x:109.50490722656251, y:54.623437499999994})
		track.push({frame:6, x:114.328125, y:57.938159179687496})
		track.push({frame:7, x:119.96513671874999, y:66.96928710937499})
		track.push({frame:8, x:119.96513671874999, y:66.96928710937499})

		this.headbandTracker.push({label:['preJumpingGround','jumpingGround','preJumpingGround'], track:track, pos:{x:0, y:0}})


		track.push({frame:1, x:138.2197723388672, y:92.12668991088867})
		track.push({frame:2, x:125.65073394775389, y:133.24370193481445})
		track.push({frame:3, x:116.25369262695313, y:183.46038055419922})
		track.push({frame:4, x:124.91720962524414, y:187.5245018005371})
		track.push({frame:5, x:133.1445770263672, y:191.68774795532227})
		track.push({frame:6, x:140.95561981201172, y:195.9897689819336})
		track.push({frame:7, x:142.34336853027344, y:186.15657806396484})
		track.push({frame:8, x:146.03081512451172, y:176.0656623840332})
		track.push({frame:9, x:144.0879669189453, y:164.9834976196289})
		track.push({frame:10, x:142.12529373168945, y:153.74273300170898})
		track.push({frame:11, x:164.03189849853516, y:159.72987747192383})
		track.push({frame:12, x:188.0796012878418, y:164.88437271118164})
		track.push({frame:13, x:181.3589324951172, y:172.79454040527344})
		track.push({frame:14, x:174.73738861083984, y:182.56825637817383})
		track.push({frame:15, x:176.20443725585938, y:179.01958465576172})
		track.push({frame:16, x:177.7111358642578, y:175.62951278686523})

		this.headbandTracker.push({label:['landingGround','jumpingGround2'], track:track, pos:{x:20, y:20}})

		this.strip = new Rope({texture:PIXI.Texture.from('assets/images/airband.jpg'),
								joints:10,
								gravity:0.0001,
								friction:0.2,//
								iterations:1});


		this.strip2 = new Rope({texture:PIXI.Texture.from('assets/images/airband.jpg'),
								joints:8,
								gravity:0.0002,
								friction:0.2,//
								iterations:1});

		this.strip.build(100 * 0.6);
		this.strip2.build(50 * 0.6);

		this.strip2.count = 0.2
		// this.parent.setChildIndex(this.trail.mesh, 0);

		this.animationContainer.addChild(this.baseHeadband);
		this.player.parent.addChild(this.strip)
		this.player.parent.addChild(this.strip2)


		console.log(this.strip.parent);
	}
	updateColors(){
		let color = this.player.game.getHeadbandColor();

		console.log(color);
		this.strip.strip.tint = color;
		this.strip2.strip.tint = color;
	}
	updatePosition(pos){

		// console.log(this.baseHeadband.parent.scale.x);
		// if(this.baseHeadband.parent.scale.x < 0)
		// {
		// 	this.strip.scale.x = 1
		// }else{
		// 	this.strip.scale.x = -1

		// }

		let local = this.player.parent.toLocal(this.baseHeadband.position, this.baseHeadband.parent)
	//	console.log(local.x, local.y);

		//let globall = this.baseHeadband.toGlobal(new PIXI.Point(0,0))
		this.baseHeadband.x =   pos.x//(pos.x + this.player.x + this.animationContainer.x) - (this.animationContainer.width/2) //* this.player.scale.x //* this.player.scale.x;
		this.baseHeadband.y =   pos.y//(pos.y + this.player.y + this.animationContainer.y + this.animationContainer.height) * this.player.scale.y//* this.player.scale.y //* this.baseHeadband.parent.scale.y + 35;

		this.strip.startX = local.x;
		this.strip.startY = local.y;
		this.strip.update(null)//, local.x, local.y);

		this.strip2.startX = local.x;
		this.strip2.startY = local.y;
		this.strip2.update(null)//, local.x, local.y);

		//this.strip.x = local.x //+ this.player.x + this.player.parent.x
		//this.strip.y = local.y //+ this.player.y + this.player.parent.y
	}
}