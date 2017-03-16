import * as PIXI from 'pixi.js';

export default class GoalkeeperAnimations{
	constructor(keeper){
        this.goalkeeper = keeper;
		this.animationsList = [];
		this.currentTimer = 0;
		this.currentAnimation = null;
        let track = []




track = []
track.push({frame:1,label:"waist",x:-2.95, y:-168.45}),track.push({frame:1,label:"thighLeft",x:50.75, y:-147.7}),track.push({frame:1,label:"kneeLeft",x:97.1, y:-106.95}),track.push({frame:1,label:"legLeft",x:103.45, y:-53.95}),track.push({frame:1,label:"feetLeft",x:109.45, y:-0.4}),track.push({frame:1,label:"thighRight",x:-54.25, y:-143.05}),track.push({frame:1,label:"kneeRight",x:-97.05, y:-109}),track.push({frame:1,label:"legRight",x:-107.5, y:-49.6}),track.push({frame:1,label:"feetRight",x:-110.9, y:-3.2}),track.push({frame:1,label:"body",x:-0.55, y:-225.9}),track.push({frame:1,label:"shoulderLeft",x:45.95, y:-227.1}),track.push({frame:1,label:"armLeft",x:99.2, y:-203.35}),track.push({frame:1,label:"handLeft",x:132.9, y:-157.25}),track.push({frame:1,label:"shoulderRight",x:-59.65, y:-218.9}),track.push({frame:1,label:"armRight",x:-112.2, y:-195.5}),track.push({frame:1,label:"handRight",x:-137.75, y:-143.6}),track.push({frame:1,label:"head",x:-3.75, y:-294})
track.push({frame:2,label:"waist",x:6.25, y:-166.2}),track.push({frame:2,label:"thighLeft",x:58.45, y:-145.1}),track.push({frame:2,label:"kneeLeft",x:105.65, y:-107.5}),track.push({frame:2,label:"legLeft",x:103.75, y:-53.75}),track.push({frame:2,label:"feetLeft",x:109.8, y:-0.1}),track.push({frame:2,label:"thighRight",x:-43.9, y:-142.15}),track.push({frame:2,label:"kneeRight",x:-84.9, y:-105.55}),track.push({frame:2,label:"legRight",x:-103.35, y:-48.45}),track.push({frame:2,label:"feetRight",x:-111, y:-2.5}),track.push({frame:2,label:"body",x:7.95, y:-221.85}),track.push({frame:2,label:"shoulderLeft",x:55.25, y:-229.1}),track.push({frame:2,label:"armLeft",x:110.4, y:-210.05}),track.push({frame:2,label:"handLeft",x:152.15, y:-171.45}),track.push({frame:2,label:"shoulderRight",x:-51.65, y:-219.95}),track.push({frame:2,label:"armRight",x:-106.3, y:-200.75}),track.push({frame:2,label:"handRight",x:-142.6, y:-155.5}),track.push({frame:2,label:"head",x:4.25, y:-291.6})
track.push({frame:3,label:"waist",x:13.55, y:-164.05}),track.push({frame:3,label:"thighLeft",x:64.35, y:-142.55}),track.push({frame:3,label:"kneeLeft",x:112.15, y:-107.35}),track.push({frame:3,label:"legLeft",x:103.4, y:-54}),track.push({frame:3,label:"feetLeft",x:109.85, y:-0.3}),track.push({frame:3,label:"thighRight",x:-35.55, y:-140.95}),track.push({frame:3,label:"kneeRight",x:-74.55, y:-101.95}),track.push({frame:3,label:"legRight",x:-98.5, y:-46.95}),track.push({frame:3,label:"feetRight",x:-111, y:-2.05}),track.push({frame:3,label:"body",x:14.85, y:-218.2}),track.push({frame:3,label:"shoulderLeft",x:62.15, y:-230.5}),track.push({frame:3,label:"armLeft",x:118.65, y:-215.25}),track.push({frame:3,label:"handLeft",x:165.6, y:-183.7}),track.push({frame:3,label:"shoulderRight",x:-45, y:-220.6}),track.push({frame:3,label:"armRight",x:-101.2, y:-204.9}),track.push({frame:3,label:"handRight",x:-145, y:-166.9}),track.push({frame:3,label:"head",x:10.6, y:-289.2})
track.push({frame:4,label:"waist",x:19, y:-162.25}),track.push({frame:4,label:"thighLeft",x:68.65, y:-140.3}),track.push({frame:4,label:"kneeLeft",x:116.7, y:-106.5}),track.push({frame:4,label:"legLeft",x:102.5, y:-54}),track.push({frame:4,label:"feetLeft",x:109.85, y:-0.35}),track.push({frame:4,label:"thighRight",x:-29, y:-139.6}),track.push({frame:4,label:"kneeRight",x:-65.8, y:-98.3}),track.push({frame:4,label:"legRight",x:-92.4, y:-44.25}),track.push({frame:4,label:"feetRight",x:-111, y:-1.5}),track.push({frame:4,label:"body",x:19.95, y:-215.2}),track.push({frame:4,label:"shoulderLeft",x:67, y:-231.2}),track.push({frame:4,label:"armLeft",x:124.25, y:-219.1}),track.push({frame:4,label:"handLeft",x:174.55, y:-193.4}),track.push({frame:4,label:"shoulderRight",x:-39.75, y:-220.9}),track.push({frame:4,label:"armRight",x:-97.1, y:-208.05}),track.push({frame:4,label:"handRight",x:-145.75, y:-176.45}),track.push({frame:4,label:"head",x:15.35, y:-287.2})
track.push({frame:5,label:"waist",x:22.65, y:-160.95}),track.push({frame:5,label:"thighLeft",x:71.5, y:-138.65}),track.push({frame:5,label:"kneeLeft",x:119.7, y:-105.75}),track.push({frame:5,label:"legLeft",x:102, y:-54.2}),track.push({frame:5,label:"feetLeft",x:109.85, y:-0.6}),track.push({frame:5,label:"thighRight",x:-24.65, y:-138.65}),track.push({frame:5,label:"kneeRight",x:-59.85, y:-95.9}),track.push({frame:5,label:"legRight",x:-88.55, y:-42.7}),track.push({frame:5,label:"feetRight",x:-110.75, y:-1.75}),track.push({frame:5,label:"body",x:23.45, y:-213.1}),track.push({frame:5,label:"shoulderLeft",x:70.1, y:-231.55}),track.push({frame:5,label:"armLeft",x:127.8, y:-221.6}),track.push({frame:5,label:"handLeft",x:179.95, y:-200.1}),track.push({frame:5,label:"shoulderRight",x:-36.1, y:-221}),track.push({frame:5,label:"armRight",x:-94.1, y:-210.1}),track.push({frame:5,label:"handRight",x:-145.7, y:-183.35}),track.push({frame:5,label:"head",x:18.55, y:-285.7})
track.push({frame:6,label:"waist",x:24.6, y:-160.15}),track.push({frame:6,label:"thighLeft",x:73, y:-137.8}),track.push({frame:6,label:"kneeLeft",x:121.4, y:-105.5}),track.push({frame:6,label:"legLeft",x:101.85, y:-54.5}),track.push({frame:6,label:"feetLeft",x:109.7, y:-0.8}),track.push({frame:6,label:"thighRight",x:-22.4, y:-138.15}),track.push({frame:6,label:"kneeRight",x:-57, y:-94.8}),track.push({frame:6,label:"legRight",x:-86.95, y:-42.3}),track.push({frame:6,label:"feetRight",x:-110.45, y:-2.05}),track.push({frame:6,label:"body",x:25.2, y:-211.95}),track.push({frame:6,label:"shoulderLeft",x:71.7, y:-231.7}),track.push({frame:6,label:"armLeft",x:129.65, y:-222.9}),track.push({frame:6,label:"handLeft",x:182.65, y:-203.75}),track.push({frame:6,label:"shoulderRight",x:-34.15, y:-221}),track.push({frame:6,label:"armRight",x:-92.5, y:-211.25}),track.push({frame:6,label:"handRight",x:-145.4, y:-187.2}),track.push({frame:6,label:"head",x:20.25, y:-284.95})
track.push({frame:7,label:"waist",x:25.4, y:-160.05}),track.push({frame:7,label:"thighLeft",x:73.95, y:-136.9}),track.push({frame:7,label:"kneeLeft",x:122.1, y:-104.8}),track.push({frame:7,label:"legLeft",x:101.35, y:-54.2}),track.push({frame:7,label:"feetLeft",x:109.6, y:-0.5}),track.push({frame:7,label:"thighRight",x:-20.25, y:-136.8}),track.push({frame:7,label:"kneeRight",x:-54.95, y:-93.45}),track.push({frame:7,label:"legRight",x:-85.85, y:-41.7}),track.push({frame:7,label:"feetRight",x:-110.7, y:-2.5}),track.push({frame:7,label:"body",x:25.35, y:-211.5}),track.push({frame:7,label:"shoulderLeft",x:71.8, y:-231.7}),track.push({frame:7,label:"armLeft",x:129.95, y:-223.85}),track.push({frame:7,label:"handLeft",x:183.1, y:-204.85}),track.push({frame:7,label:"shoulderRight",x:-33.35, y:-220.45}),track.push({frame:7,label:"armRight",x:-91.45, y:-210}),track.push({frame:7,label:"handRight",x:-144.2, y:-185.45}),track.push({frame:7,label:"head",x:20.05, y:-284.95})
track.push({frame:8,label:"waist",x:26.2, y:-159.9}),track.push({frame:8,label:"thighLeft",x:74.9, y:-136.05}),track.push({frame:8,label:"kneeLeft",x:122.85, y:-104.2}),track.push({frame:8,label:"legLeft",x:100.85, y:-53.95}),track.push({frame:8,label:"feetLeft",x:109.5, y:-0.25}),track.push({frame:8,label:"thighRight",x:-18.05, y:-135.45}),track.push({frame:8,label:"kneeRight",x:-52.95, y:-92.15}),track.push({frame:8,label:"legRight",x:-84.65, y:-41.1}),track.push({frame:8,label:"feetRight",x:-110.9, y:-3.05}),track.push({frame:8,label:"body",x:25.45, y:-211.05}),track.push({frame:8,label:"shoulderLeft",x:71.9, y:-231.7}),track.push({frame:8,label:"armLeft",x:130.25, y:-224.95}),track.push({frame:8,label:"handLeft",x:183.5, y:-205.85}),track.push({frame:8,label:"shoulderRight",x:-32.6, y:-219.85}),track.push({frame:8,label:"armRight",x:-90.4, y:-208.85}),track.push({frame:8,label:"handRight",x:-143, y:-183.7}),track.push({frame:8,label:"head",x:19.8, y:-284.9})
track.push({frame:9,label:"waist",x:16.35, y:-162.1}),track.push({frame:9,label:"thighLeft",x:65.1, y:-140.2}),track.push({frame:9,label:"kneeLeft",x:112.9, y:-106.35}),track.push({frame:9,label:"legLeft",x:102.75, y:-53.5}),track.push({frame:9,label:"feetLeft",x:110.05, y:0}),track.push({frame:9,label:"thighRight",x:-30.65, y:-136.85}),track.push({frame:9,label:"kneeRight",x:-69.9, y:-97.25}),track.push({frame:9,label:"legRight",x:-100.5, y:-47.4}),track.push({frame:9,label:"feetRight",x:-111.1, y:-3}),track.push({frame:9,label:"body",x:14.55, y:-213.25}),track.push({frame:9,label:"shoulderLeft",x:60.45, y:-231.6}),track.push({frame:9,label:"armLeft",x:119.05, y:-228.8}),track.push({frame:9,label:"handLeft",x:172.55, y:-207.7}),track.push({frame:9,label:"shoulderRight",x:-43.95, y:-222.8}),track.push({frame:9,label:"armRight",x:-101.25, y:-213.05}),track.push({frame:9,label:"handRight",x:-152, y:-185.2}),track.push({frame:9,label:"head",x:10.15, y:-286.95})
track.push({frame:10,label:"waist",x:6.35, y:-163.65}),track.push({frame:10,label:"thighLeft",x:54.75, y:-143.45}),track.push({frame:10,label:"kneeLeft",x:101.95, y:-106.2}),track.push({frame:10,label:"legLeft",x:104.1, y:-53.45}),track.push({frame:10,label:"feetLeft",x:110.2, y:0}),track.push({frame:10,label:"thighRight",x:-42.55, y:-137.1}),track.push({frame:10,label:"kneeRight",x:-84.15, y:-99.9}),track.push({frame:10,label:"legRight",x:-109.85, y:-48.05}),track.push({frame:10,label:"feetRight",x:-111.05, y:-2.95}),track.push({frame:10,label:"body",x:3.55, y:-214.85}),track.push({frame:10,label:"shoulderLeft",x:48.85, y:-230.95}),track.push({frame:10,label:"armLeft",x:107.4, y:-232.05}),track.push({frame:10,label:"handLeft",x:161.65, y:-209.5}),track.push({frame:10,label:"shoulderRight",x:-55.4, y:-225.15}),track.push({frame:10,label:"armRight",x:-112.35, y:-216.65}),track.push({frame:10,label:"handRight",x:-161.35, y:-186}),track.push({frame:10,label:"head",x:0.25, y:-288.35})
track.push({frame:11,label:"waist",x:-3.7, y:-164.6}),track.push({frame:11,label:"thighLeft",x:43.8, y:-145.4}),track.push({frame:11,label:"kneeLeft",x:89.45, y:-103.25}),track.push({frame:11,label:"legLeft",x:102.1, y:-52.65}),track.push({frame:11,label:"feetLeft",x:110.15, y:0}),track.push({frame:11,label:"thighRight",x:-54.25, y:-136.5}),track.push({frame:11,label:"kneeRight",x:-97.85, y:-101.5}),track.push({frame:11,label:"legRight",x:-116.7, y:-47.25}),track.push({frame:11,label:"feetRight",x:-111, y:-2.95}),track.push({frame:11,label:"body",x:-7.6, y:-215.8}),track.push({frame:11,label:"shoulderLeft",x:36.95, y:-229.75}),track.push({frame:11,label:"armLeft",x:95.35, y:-234.8}),track.push({frame:11,label:"handLeft",x:150.55, y:-211.6}),track.push({frame:11,label:"shoulderRight",x:-67.1, y:-226.85}),track.push({frame:11,label:"armRight",x:-123.5, y:-219.7}),track.push({frame:11,label:"handRight",x:-170.7, y:-185.8}),track.push({frame:11,label:"head",x:-9.7, y:-289.1})
track.push({frame:12,label:"waist",x:-13.95, y:-164.85}),track.push({frame:12,label:"thighLeft",x:32.6, y:-146.1}),track.push({frame:12,label:"kneeLeft",x:75.95, y:-99.05}),track.push({frame:12,label:"legLeft",x:97.15, y:-51.9}),track.push({frame:12,label:"feetLeft",x:109.55, y:-0.3}),track.push({frame:12,label:"thighRight",x:-65.95, y:-135.15}),track.push({frame:12,label:"kneeRight",x:-111, y:-102.05}),track.push({frame:12,label:"legRight",x:-121.9, y:-45.8}),track.push({frame:12,label:"feetRight",x:-110.85, y:-3.1}),track.push({frame:12,label:"body",x:-19, y:-216.05}),track.push({frame:12,label:"shoulderLeft",x:24.75, y:-227.9}),track.push({frame:12,label:"armLeft",x:82.9, y:-236.9}),track.push({frame:12,label:"handLeft",x:138.75, y:-213.9}),track.push({frame:12,label:"shoulderRight",x:-78.9, y:-227.9}),track.push({frame:12,label:"armRight",x:-134.9, y:-222.1}),track.push({frame:12,label:"handRight",x:-179.7, y:-184.9}),track.push({frame:12,label:"head",x:-19.95, y:-289.2})
track.push({frame:13,label:"waist",x:-13.4, y:-164.4}),track.push({frame:13,label:"thighLeft",x:34.9, y:-148.6}),track.push({frame:13,label:"kneeLeft",x:77.5, y:-99.15}),track.push({frame:13,label:"legLeft",x:99.3, y:-52.5}),track.push({frame:13,label:"feetLeft",x:109.6, y:-0.25}),track.push({frame:13,label:"thighRight",x:-64.5, y:-136.6}),track.push({frame:13,label:"kneeRight",x:-109, y:-102.55}),track.push({frame:13,label:"legRight",x:-120.95, y:-45.8}),track.push({frame:13,label:"feetRight",x:-110.85, y:-3.1}),track.push({frame:13,label:"body",x:-17, y:-217.1}),track.push({frame:13,label:"shoulderLeft",x:26.8, y:-227.8}),track.push({frame:13,label:"armLeft",x:84.85, y:-231.8}),track.push({frame:13,label:"handLeft",x:139.3, y:-204.05}),track.push({frame:13,label:"shoulderRight",x:-76.2, y:-226.2}),track.push({frame:13,label:"armRight",x:-132.75, y:-216.75}),track.push({frame:13,label:"handRight",x:-173.9, y:-176.3}),track.push({frame:13,label:"head",x:-20.5, y:-289.7})
track.push({frame:14,label:"waist",x:-12.85, y:-163.95}),track.push({frame:14,label:"thighLeft",x:37.25, y:-151.05}),track.push({frame:14,label:"kneeLeft",x:78.95, y:-99.3}),track.push({frame:14,label:"legLeft",x:101.35, y:-53.1}),track.push({frame:14,label:"feetLeft",x:109.55, y:-0.3}),track.push({frame:14,label:"thighRight",x:-62.9, y:-138.05}),track.push({frame:14,label:"kneeRight",x:-106.95, y:-103}),track.push({frame:14,label:"legRight",x:-119.95, y:-45.85}),track.push({frame:14,label:"feetRight",x:-110.85, y:-3.05}),track.push({frame:14,label:"body",x:-15, y:-218.05}),track.push({frame:14,label:"shoulderLeft",x:28.8, y:-227.65}),track.push({frame:14,label:"armLeft",x:86.45, y:-226.85}),track.push({frame:14,label:"handLeft",x:138.7, y:-194.6}),track.push({frame:14,label:"shoulderRight",x:-73.25, y:-224.5}),track.push({frame:14,label:"armRight",x:-130.2, y:-211.35}),track.push({frame:14,label:"handRight",x:-167.3, y:-168.1}),track.push({frame:14,label:"head",x:-20.95, y:-290.15})
track.push({frame:15,label:"waist",x:-10.45, y:-165.15}),track.push({frame:15,label:"thighLeft",x:40.55, y:-150.3}),track.push({frame:15,label:"kneeLeft",x:83.75, y:-101.35}),track.push({frame:15,label:"legLeft",x:102.5, y:-53.05}),track.push({frame:15,label:"feetLeft",x:109.9, y:0}),track.push({frame:15,label:"thighRight",x:-60.85, y:-139.4}),track.push({frame:15,label:"kneeRight",x:-104.55, y:-104.6}),track.push({frame:15,label:"legRight",x:-116.9, y:-46.8}),track.push({frame:15,label:"feetRight",x:-110.85, y:-2.85}),track.push({frame:15,label:"body",x:-11.5, y:-220.15}),track.push({frame:15,label:"shoulderLeft",x:33.15, y:-227.65}),track.push({frame:15,label:"armLeft",x:90.5, y:-220.9}),track.push({frame:15,label:"handLeft",x:138.95, y:-183.05}),track.push({frame:15,label:"shoulderRight",x:-70.3, y:-223.1}),track.push({frame:15,label:"armRight",x:-126.35, y:-207.4}),track.push({frame:15,label:"handRight",x:-161.1, y:-161.6}),track.push({frame:15,label:"head",x:-16.7, y:-291.2})
track.push({frame:16,label:"waist",x:-7.95, y:-166.3}),track.push({frame:16,label:"thighLeft",x:44.05, y:-149.5}),track.push({frame:16,label:"kneeLeft",x:88.45, y:-103.4}),track.push({frame:16,label:"legLeft",x:103.45, y:-53.35}),track.push({frame:16,label:"feetLeft",x:110, y:-0.05}),track.push({frame:16,label:"thighRight",x:-58.65, y:-140.7}),track.push({frame:16,label:"kneeRight",x:-102.1, y:-106.1}),track.push({frame:16,label:"legRight",x:-113.7, y:-47.7}),track.push({frame:16,label:"feetRight",x:-110.8, y:-2.75}),track.push({frame:16,label:"body",x:-7.9, y:-222.15}),track.push({frame:16,label:"shoulderLeft",x:37.4, y:-227.45}),track.push({frame:16,label:"armLeft",x:94.05, y:-215.05}),track.push({frame:16,label:"handLeft",x:137.55, y:-172.85}),track.push({frame:16,label:"shoulderRight",x:-67, y:-221.75}),track.push({frame:16,label:"armRight",x:-122, y:-203.4}),track.push({frame:16,label:"handRight",x:-154.1, y:-155.3}),track.push({frame:16,label:"head",x:-12.45, y:-292.25})
track.push({frame:17,label:"waist",x:-5.45, y:-167.35}),track.push({frame:17,label:"thighLeft",x:47.4, y:-148.65}),track.push({frame:17,label:"kneeLeft",x:92.85, y:-105.3}),track.push({frame:17,label:"legLeft",x:103.8, y:-53.55}),track.push({frame:17,label:"feetLeft",x:110, y:-0.15}),track.push({frame:17,label:"thighRight",x:-56.5, y:-141.95}),track.push({frame:17,label:"kneeRight",x:-99.6, y:-107.55}),track.push({frame:17,label:"legRight",x:-110.45, y:-48.55}),track.push({frame:17,label:"feetRight",x:-110.65, y:-2.8}),track.push({frame:17,label:"body",x:-4.25, y:-224.1}),track.push({frame:17,label:"shoulderLeft",x:41.65, y:-227.3}),track.push({frame:17,label:"armLeft",x:96.95, y:-209.15}),track.push({frame:17,label:"handLeft",x:135.15, y:-164.3}),track.push({frame:17,label:"shoulderRight",x:-63.5, y:-220.3}),track.push({frame:17,label:"armRight",x:-117.3, y:-199.45}),track.push({frame:17,label:"handRight",x:-146.3, y:-149.25}),track.push({frame:17,label:"head",x:-8.1, y:-293.25})
track.push({frame:18,label:"waist",x:-2.9, y:-168.4}),track.push({frame:18,label:"thighLeft",x:50.75, y:-147.65}),track.push({frame:18,label:"kneeLeft",x:97.3, y:-107.15}),track.push({frame:18,label:"legLeft",x:103.85, y:-54.15}),track.push({frame:18,label:"feetLeft",x:109.85, y:-0.55}),track.push({frame:18,label:"thighRight",x:-54.3, y:-143.1}),track.push({frame:18,label:"kneeRight",x:-97.05, y:-108.9}),track.push({frame:18,label:"legRight",x:-107.15, y:-49.45}),track.push({frame:18,label:"feetRight",x:-110.45, y:-3}),track.push({frame:18,label:"body",x:-0.55, y:-225.9}),track.push({frame:18,label:"shoulderLeft",x:45.95, y:-227.1}),track.push({frame:18,label:"armLeft",x:99.25, y:-203.35}),track.push({frame:18,label:"handLeft",x:132.85, y:-157.2}),track.push({frame:18,label:"shoulderRight",x:-59.65, y:-218.9}),track.push({frame:18,label:"armRight",x:-112.2, y:-195.6}),track.push({frame:18,label:"handRight",x:-137.9, y:-143.7}),track.push({frame:18,label:"head",x:-3.75, y:-294.05})
this.addAnimation(track,"static1",18,17);




track = []
track.push({frame:19,label:"waist",x:0.55, y:-164.1}),track.push({frame:19,label:"thighLeft",x:47.85, y:-146.3}),track.push({frame:19,label:"kneeLeft",x:92.95, y:-104.75}),track.push({frame:19,label:"legLeft",x:101.6, y:-54.15}),track.push({frame:19,label:"feetLeft",x:107.5, y:-1.6}),track.push({frame:19,label:"thighRight",x:-50.5, y:-140.3}),track.push({frame:19,label:"kneeRight",x:-94.25, y:-106.75}),track.push({frame:19,label:"legRight",x:-106.15, y:-48.75}),track.push({frame:19,label:"feetRight",x:-107.75, y:-2.65}),track.push({frame:19,label:"body",x:0, y:-225.15}),track.push({frame:19,label:"shoulderLeft",x:46, y:-234.15}),track.push({frame:19,label:"armLeft",x:101.3, y:-220.9}),track.push({frame:19,label:"handLeft",x:146.65, y:-189.15}),track.push({frame:19,label:"shoulderRight",x:-58.4, y:-217.3}),track.push({frame:19,label:"armRight",x:-110.4, y:-193.6}),track.push({frame:19,label:"handRight",x:-141.8, y:-143.8}),track.push({frame:19,label:"head",x:-0.5, y:-297.35})
track.push({frame:20,label:"waist",x:1.4, y:-163.55}),track.push({frame:20,label:"thighLeft",x:46.3, y:-141.95}),track.push({frame:20,label:"kneeLeft",x:92.95, y:-108.55}),track.push({frame:20,label:"legLeft",x:90.7, y:-57.9}),track.push({frame:20,label:"feetLeft",x:75.6, y:-3.65}),track.push({frame:20,label:"thighRight",x:-52.3, y:-141.85}),track.push({frame:20,label:"kneeRight",x:-98.55, y:-110.5}),track.push({frame:20,label:"legRight",x:-120.2, y:-55.5}),track.push({frame:20,label:"feetRight",x:-131.05, y:-10.25}),track.push({frame:20,label:"body",x:9.2, y:-223.95}),track.push({frame:20,label:"shoulderLeft",x:61.8, y:-230.3}),track.push({frame:20,label:"armLeft",x:116.3, y:-218.25}),track.push({frame:20,label:"handLeft",x:165.65, y:-190.1}),track.push({frame:20,label:"shoulderRight",x:-50.8, y:-242.8}),track.push({frame:20,label:"armRight",x:-107.15, y:-245.05}),track.push({frame:20,label:"handRight",x:-161.2, y:-220.85}),track.push({frame:20,label:"head",x:24.35, y:-298.7})
track.push({frame:21,label:"waist",x:2.25, y:-162.95}),track.push({frame:21,label:"thighLeft",x:44.65, y:-137.6}),track.push({frame:21,label:"kneeLeft",x:93.05, y:-112.85}),track.push({frame:21,label:"legLeft",x:80.4, y:-64.35}),track.push({frame:21,label:"feetLeft",x:45.6, y:-14.1}),track.push({frame:21,label:"thighRight",x:-53.9, y:-143.5}),track.push({frame:21,label:"kneeRight",x:-102.6, y:-114.65}),track.push({frame:21,label:"legRight",x:-133.45, y:-64.35}),track.push({frame:21,label:"feetRight",x:-153.25, y:-21.7}),track.push({frame:21,label:"body",x:17.6, y:-222}),track.push({frame:21,label:"shoulderLeft",x:77.05, y:-224.05}),track.push({frame:21,label:"armLeft",x:130.65, y:-213.25}),track.push({frame:21,label:"handLeft",x:184.4, y:-189.65}),track.push({frame:21,label:"shoulderRight",x:-31.9, y:-266.8}),track.push({frame:21,label:"armRight",x:-80.55, y:-294}),track.push({frame:21,label:"handRight",x:-139.25, y:-303.85}),track.push({frame:21,label:"head",x:49.95, y:-295.15})
track.push({frame:22,label:"waist",x:3.1, y:-162.35}),track.push({frame:22,label:"thighLeft",x:42.95, y:-133.45}),track.push({frame:22,label:"kneeLeft",x:93.2, y:-117.45}),track.push({frame:22,label:"legLeft",x:71, y:-73.25}),track.push({frame:22,label:"feetLeft",x:20.1, y:-32.05}),track.push({frame:22,label:"thighRight",x:-55.45, y:-145.25}),track.push({frame:22,label:"kneeRight",x:-106.5, y:-119.2}),track.push({frame:22,label:"legRight",x:-145.55, y:-75}),track.push({frame:22,label:"feetRight",x:-173.75, y:-36.85}),track.push({frame:22,label:"body",x:24.7, y:-220.3}),track.push({frame:22,label:"shoulderLeft",x:90.05, y:-213.85}),track.push({frame:22,label:"armLeft",x:142.9, y:-204.25}),track.push({frame:22,label:"handLeft",x:200.6, y:-186.8}),track.push({frame:22,label:"shoulderRight",x:-3.6, y:-284.9}),track.push({frame:22,label:"armRight",x:-34.2, y:-330.75}),track.push({frame:22,label:"handRight",x:-77.5, y:-371.8}),track.push({frame:22,label:"head",x:75.05, y:-286.8})
track.push({frame:23,label:"waist",x:3.9, y:-161.75}),track.push({frame:23,label:"thighLeft",x:23.35, y:-119.25}),track.push({frame:23,label:"kneeLeft",x:59.95, y:-79.35}),track.push({frame:23,label:"legLeft",x:35.15, y:-37.45}),track.push({frame:23,label:"feetLeft",x:-22.85, y:-9.5}),track.push({frame:23,label:"thighRight",x:-56.95, y:-147.05}),track.push({frame:23,label:"kneeRight",x:-110.55, y:-124.35}),track.push({frame:23,label:"legRight",x:-158.3, y:-88.75}),track.push({frame:23,label:"feetRight",x:-201.8, y:-64}),track.push({frame:23,label:"body",x:31.3, y:-219.15}),track.push({frame:23,label:"shoulderLeft",x:100.75, y:-201.35}),track.push({frame:23,label:"armLeft",x:152.8, y:-192.95}),track.push({frame:23,label:"handLeft",x:213.75, y:-183.2}),track.push({frame:23,label:"shoulderRight",x:31.6, y:-293.4}),track.push({frame:23,label:"armRight",x:25.35, y:-347.6}),track.push({frame:23,label:"handRight",x:12.55, y:-405.9}),track.push({frame:23,label:"head",x:98.9, y:-273.55})
track.push({frame:24,label:"waist",x:4.85, y:-161.1}),track.push({frame:24,label:"thighLeft",x:-4.9, y:-111.8}),track.push({frame:24,label:"kneeLeft",x:8.85, y:-56.3}),track.push({frame:24,label:"legLeft",x:-18.3, y:-16.7}),track.push({frame:24,label:"feetLeft",x:-79.9, y:-2.9}),track.push({frame:24,label:"thighRight",x:-58.3, y:-149.05}),track.push({frame:24,label:"kneeRight",x:-114.3, y:-130}),track.push({frame:24,label:"legRight",x:-168.85, y:-104.8}),track.push({frame:24,label:"feetRight",x:-219.85, y:-100.7}),track.push({frame:24,label:"body",x:38.6, y:-218.3}),track.push({frame:24,label:"shoulderLeft",x:109.7, y:-187.9}),track.push({frame:24,label:"armLeft",x:161, y:-180.85}),track.push({frame:24,label:"handLeft",x:223.4, y:-179.85}),track.push({frame:24,label:"shoulderRight",x:70.15, y:-289.6}),track.push({frame:24,label:"armRight",x:89.1, y:-340.1}),track.push({frame:24,label:"handRight",x:111.1, y:-395.3}),track.push({frame:24,label:"head",x:120.25, y:-255.85})
track.push({frame:25,label:"waist",x:5.85, y:-160.45}),track.push({frame:25,label:"thighLeft",x:-28.7, y:-116.8}),track.push({frame:25,label:"kneeLeft",x:-42.35, y:-56.95}),track.push({frame:25,label:"legLeft",x:-71.85, y:-19.75}),track.push({frame:25,label:"feetLeft",x:-133.65, y:-19.85}),track.push({frame:25,label:"thighRight",x:-59.5, y:-151.15}),track.push({frame:25,label:"kneeRight",x:-117.65, y:-136.05}),track.push({frame:25,label:"legRight",x:-176.7, y:-122.65}),track.push({frame:25,label:"feetRight",x:-223.9, y:-140.45}),track.push({frame:25,label:"body",x:46.75, y:-217.75}),track.push({frame:25,label:"shoulderLeft",x:115.8, y:-172.7}),track.push({frame:25,label:"armLeft",x:166.25, y:-166.95}),track.push({frame:25,label:"handLeft",x:228.15, y:-175}),track.push({frame:25,label:"shoulderRight",x:106.7, y:-273.15}),track.push({frame:25,label:"armRight",x:146.1, y:-308.9}),track.push({frame:25,label:"handRight",x:195.1, y:-341.95}),track.push({frame:25,label:"head",x:138.05, y:-233.85})
track.push({frame:26,label:"waist",x:9.1, y:-155.6}),track.push({frame:26,label:"thighLeft",x:-29.7, y:-115.05}),track.push({frame:26,label:"kneeLeft",x:-54.6, y:-58.45}),track.push({frame:26,label:"legLeft",x:-90.1, y:-25.9}),track.push({frame:26,label:"feetLeft",x:-151.05, y:-30}),track.push({frame:26,label:"thighRight",x:-57.7, y:-152.6}),track.push({frame:26,label:"kneeRight",x:-117.6, y:-147.2}),track.push({frame:26,label:"legRight",x:-178.05, y:-144.2}),track.push({frame:26,label:"feetRight",x:-222.9, y:-165.75}),track.push({frame:26,label:"body",x:57.15, y:-203.95}),track.push({frame:26,label:"shoulderLeft",x:125.9, y:-159.3}),track.push({frame:26,label:"armLeft",x:175.95, y:-151.95}),track.push({frame:26,label:"handLeft",x:237.8, y:-156.75}),track.push({frame:26,label:"shoulderRight",x:120.55, y:-255.25}),track.push({frame:26,label:"armRight",x:162.05, y:-287.9}),track.push({frame:26,label:"handRight",x:212.1, y:-318.75}),track.push({frame:26,label:"head",x:149.2, y:-215.25})
track.push({frame:27,label:"waist",x:12.25, y:-150.65}),track.push({frame:27,label:"thighLeft",x:-30.45, y:-113.55}),track.push({frame:27,label:"kneeLeft",x:-66, y:-62.2}),track.push({frame:27,label:"legLeft",x:-106.65, y:-35.45}),track.push({frame:27,label:"feetLeft",x:-166.5, y:-43.2}),track.push({frame:27,label:"thighRight",x:-55.5, y:-154.4}),track.push({frame:27,label:"kneeRight",x:-115.65, y:-158.8}),track.push({frame:27,label:"legRight",x:-175.5, y:-166.35}),track.push({frame:27,label:"feetRight",x:-217.75, y:-191.45}),track.push({frame:27,label:"body",x:66, y:-188.75}),track.push({frame:27,label:"shoulderLeft",x:134.35, y:-144.7}),track.push({frame:27,label:"armLeft",x:184.05, y:-135.75}),track.push({frame:27,label:"handLeft",x:245.7, y:-137.55}),track.push({frame:27,label:"shoulderRight",x:132.4, y:-235.75}),track.push({frame:27,label:"armRight",x:175.85, y:-265.1}),track.push({frame:27,label:"handRight",x:226.5, y:-293.75}),track.push({frame:27,label:"head",x:158.4, y:-195.35})
track.push({frame:28,label:"waist",x:15.1, y:-145.65}),track.push({frame:28,label:"thighLeft",x:-31.2, y:-112.25}),track.push({frame:28,label:"kneeLeft",x:-76.1, y:-68.05}),track.push({frame:28,label:"legLeft",x:-121.05, y:-47.75}),track.push({frame:28,label:"feetLeft",x:-179.55, y:-59.1}),track.push({frame:28,label:"thighRight",x:-52.7, y:-156.35}),track.push({frame:28,label:"kneeRight",x:-111.5, y:-170.6}),track.push({frame:28,label:"legRight",x:-168.95, y:-188.4}),track.push({frame:28,label:"feetRight",x:-208.35, y:-216.75}),track.push({frame:28,label:"body",x:72.85, y:-172.7}),track.push({frame:28,label:"shoulderLeft",x:140.9, y:-129.55}),track.push({frame:28,label:"armLeft",x:190.2, y:-118.95}),track.push({frame:28,label:"handLeft",x:251.45, y:-117.6}),track.push({frame:28,label:"shoulderRight",x:142, y:-215.2}),track.push({frame:28,label:"armRight",x:187.15, y:-241.15}),track.push({frame:28,label:"handRight",x:238.1, y:-267.7}),track.push({frame:28,label:"head",x:165.35, y:-174.4})
track.push({frame:29,label:"waist",x:17.7, y:-140.65}),track.push({frame:29,label:"thighLeft",x:-31.65, y:-110.95}),track.push({frame:29,label:"kneeLeft",x:-84.55, y:-75.75}),track.push({frame:29,label:"legLeft",x:-132.8, y:-62.55}),track.push({frame:29,label:"feetLeft",x:-189.8, y:-77.25}),track.push({frame:29,label:"thighRight",x:-49.4, y:-158.6}),track.push({frame:29,label:"kneeRight",x:-105.2, y:-182.3}),track.push({frame:29,label:"legRight",x:-158.45, y:-209.7}),track.push({frame:29,label:"feetRight",x:-194.7, y:-241.1}),track.push({frame:29,label:"body",x:77.65, y:-156.15}),track.push({frame:29,label:"shoulderLeft",x:145.4, y:-114}),track.push({frame:29,label:"armLeft",x:194.2, y:-101.95}),track.push({frame:29,label:"handLeft",x:254.85, y:-97.5}),track.push({frame:29,label:"shoulderRight",x:149.3, y:-194.1}),track.push({frame:29,label:"armRight",x:195.75, y:-216.5}),track.push({frame:29,label:"handRight",x:246.8, y:-241.05}),track.push({frame:29,label:"head",x:170, y:-153.05})
track.push({frame:30,label:"waist",x:20.15, y:-135.55}),track.push({frame:30,label:"thighLeft",x:-32.05, y:-109.8}),track.push({frame:30,label:"kneeLeft",x:-91.1, y:-84.9}),track.push({frame:30,label:"legLeft",x:-141.55, y:-79.3}),track.push({frame:30,label:"feetLeft",x:-196.8, y:-97.15}),track.push({frame:30,label:"thighRight",x:-45.4, y:-160.7}),track.push({frame:30,label:"kneeRight",x:-96.75, y:-193.3}),track.push({frame:30,label:"legRight",x:-144.2, y:-229.55}),track.push({frame:30,label:"feetRight",x:-177.1, y:-263.55}),track.push({frame:30,label:"body",x:80.4, y:-139.75}),track.push({frame:30,label:"shoulderLeft",x:147.8, y:-98.8}),track.push({frame:30,label:"armLeft",x:196, y:-85.15}),track.push({frame:30,label:"handLeft",x:256.05, y:-77.7}),track.push({frame:30,label:"shoulderRight",x:154.25, y:-172.95}),track.push({frame:30,label:"armRight",x:201.85, y:-191.8}),track.push({frame:30,label:"handRight",x:252.6, y:-214.55}),track.push({frame:30,label:"head",x:172.35, y:-131.9})
track.push({frame:31,label:"waist",x:22.35, y:-130.5}),track.push({frame:31,label:"thighLeft",x:-32.35, y:-108.7}),track.push({frame:31,label:"kneeLeft",x:-95.55, y:-95.1}),track.push({frame:31,label:"legLeft",x:-146.95, y:-97.45}),track.push({frame:31,label:"feetLeft",x:-200.4, y:-118.25}),track.push({frame:31,label:"thighRight",x:-40.85, y:-162.7}),track.push({frame:31,label:"kneeRight",x:-86.25, y:-203.4}),track.push({frame:31,label:"legRight",x:-126.35, y:-247.25}),track.push({frame:31,label:"feetRight",x:-155.75, y:-283.5}),track.push({frame:31,label:"body",x:81.3, y:-123.95}),track.push({frame:31,label:"shoulderLeft",x:148.25, y:-84}),track.push({frame:31,label:"armLeft",x:195.85, y:-68.95}),track.push({frame:31,label:"handLeft",x:255.05, y:-58.45}),track.push({frame:31,label:"shoulderRight",x:157.1, y:-152.1}),track.push({frame:31,label:"armRight",x:205.45, y:-167.35}),track.push({frame:31,label:"handRight",x:255.9, y:-188.7}),track.push({frame:31,label:"head",x:172.65, y:-111.25})
track.push({frame:32,label:"waist",x:24.4, y:-125.35}),track.push({frame:32,label:"thighLeft",x:-32.5, y:-107.5}),track.push({frame:32,label:"kneeLeft",x:-97.75, y:-106}),track.push({frame:32,label:"legLeft",x:-148.85, y:-116.3}),track.push({frame:32,label:"feetLeft",x:-200.3, y:-139.95}),track.push({frame:32,label:"thighRight",x:-35.6, y:-164.5}),track.push({frame:32,label:"kneeRight",x:-73.85, y:-212.05}),track.push({frame:32,label:"legRight",x:-105.35, y:-262.15}),track.push({frame:32,label:"feetRight",x:-131.1, y:-300.3}),track.push({frame:32,label:"body",x:80.65, y:-108.85}),track.push({frame:32,label:"shoulderLeft",x:146.95, y:-70.1}),track.push({frame:32,label:"armLeft",x:194, y:-53.5}),track.push({frame:32,label:"handLeft",x:252.2, y:-40.05}),track.push({frame:32,label:"shoulderRight",x:157.95, y:-132.1}),track.push({frame:32,label:"armRight",x:206.9, y:-143.65}),track.push({frame:32,label:"handRight",x:256.95, y:-163.75}),track.push({frame:32,label:"head",x:171.05, y:-91.45})
track.push({frame:33,label:"waist",x:24.8, y:-104.75}),track.push({frame:33,label:"thighLeft",x:-32.25, y:-87.6}),track.push({frame:33,label:"kneeLeft",x:-97.45, y:-85.2}),track.push({frame:33,label:"legLeft",x:-149, y:-93.4}),track.push({frame:33,label:"feetLeft",x:-203.45, y:-110.35}),track.push({frame:33,label:"thighRight",x:-36.95, y:-139.85}),track.push({frame:33,label:"kneeRight",x:-81.6, y:-179.7}),track.push({frame:33,label:"legRight",x:-125.8, y:-219.35}),track.push({frame:33,label:"feetRight",x:-161, y:-252.25}),track.push({frame:33,label:"body",x:80.45, y:-90.6}),track.push({frame:33,label:"shoulderLeft",x:152.85, y:-50.9}),track.push({frame:33,label:"armLeft",x:206.15, y:-38.75}),track.push({frame:33,label:"handLeft",x:265.45, y:-29.4}),track.push({frame:33,label:"shoulderRight",x:158.5, y:-112.65}),track.push({frame:33,label:"armRight",x:208.3, y:-124.1}),track.push({frame:33,label:"handRight",x:260.45, y:-136.85}),track.push({frame:33,label:"head",x:170.75, y:-71.75})
track.push({frame:34,label:"waist",x:25.15, y:-84}),track.push({frame:34,label:"thighLeft",x:-31.95, y:-67.65}),track.push({frame:34,label:"kneeLeft",x:-97.3, y:-64.15}),track.push({frame:34,label:"legLeft",x:-149.1, y:-70.3}),track.push({frame:34,label:"feetLeft",x:-205.7, y:-80.15}),track.push({frame:34,label:"thighRight",x:-37.95, y:-115.2}),track.push({frame:34,label:"kneeRight",x:-87.4, y:-146.7}),track.push({frame:34,label:"legRight",x:-140.85, y:-172.8}),track.push({frame:34,label:"feetRight",x:-184.1, y:-197.55}),track.push({frame:34,label:"body",x:80.3, y:-72.25}),track.push({frame:34,label:"shoulderLeft",x:158.55, y:-31.6}),track.push({frame:34,label:"armLeft",x:217.7, y:-24.65}),track.push({frame:34,label:"handLeft",x:277.7, y:-19.3}),track.push({frame:34,label:"shoulderRight",x:158.95, y:-93.1}),track.push({frame:34,label:"armRight",x:209.65, y:-104.45}),track.push({frame:34,label:"handRight",x:262.9, y:-109.6}),track.push({frame:34,label:"head",x:170.3, y:-52.05})
track.push({frame:35,label:"waist",x:25.65, y:-63.05}),track.push({frame:35,label:"thighLeft",x:-31.85, y:-47.45}),track.push({frame:35,label:"kneeLeft",x:-97.05, y:-42.9}),track.push({frame:35,label:"legLeft",x:-149.15, y:-46.9}),track.push({frame:35,label:"feetLeft",x:-207.05, y:-49.35}),track.push({frame:35,label:"thighRight",x:-38.5, y:-90.85}),track.push({frame:35,label:"kneeRight",x:-91.25, y:-113.35}),track.push({frame:35,label:"legRight",x:-149.95, y:-123.95}),track.push({frame:35,label:"feetRight",x:-198.55, y:-138.4}),track.push({frame:35,label:"body",x:80.15, y:-53.6}),track.push({frame:35,label:"shoulderLeft",x:164.2, y:-12.35}),track.push({frame:35,label:"armLeft",x:228.55, y:-10.95}),track.push({frame:35,label:"handLeft",x:289.05, y:-9.7}),track.push({frame:35,label:"shoulderRight",x:159.4, y:-73.45}),track.push({frame:35,label:"armRight",x:210.95, y:-84.5}),track.push({frame:35,label:"handRight",x:264.4, y:-82.05}),track.push({frame:35,label:"head",x:169.75, y:-32.25})
track.push({frame:36,label:"waist",x:25.55, y:-63.1}),track.push({frame:36,label:"thighLeft",x:-31.8, y:-47.5}),track.push({frame:36,label:"kneeLeft",x:-97, y:-43}),track.push({frame:36,label:"legLeft",x:-149.1, y:-46.85}),track.push({frame:36,label:"feetLeft",x:-206.95, y:-49.35}),track.push({frame:36,label:"thighRight",x:-38, y:-81.6}),track.push({frame:36,label:"kneeRight",x:-95.35, y:-90.8}),track.push({frame:36,label:"legRight",x:-154.95, y:-93}),track.push({frame:36,label:"feetRight",x:-204.9, y:-102.1}),track.push({frame:36,label:"body",x:80.1, y:-53.65}),track.push({frame:36,label:"shoulderLeft",x:165.6, y:-15.95}),track.push({frame:36,label:"armLeft",x:229.95, y:-15.2}),track.push({frame:36,label:"handLeft",x:287.45, y:-18.85}),track.push({frame:36,label:"shoulderRight",x:161.7, y:-67.75}),track.push({frame:36,label:"armRight",x:213.75, y:-71.55}),track.push({frame:36,label:"handRight",x:266.95, y:-68}),track.push({frame:36,label:"head",x:169.75, y:-32.25})
track.push({frame:37,label:"waist",x:25.65, y:-63.1}),track.push({frame:37,label:"thighLeft",x:-31.8, y:-47.4}),track.push({frame:37,label:"kneeLeft",x:-96.95, y:-42.95}),track.push({frame:37,label:"legLeft",x:-149.1, y:-46.8}),track.push({frame:37,label:"feetLeft",x:-206.95, y:-49.3}),track.push({frame:37,label:"thighRight",x:-36.05, y:-72.55}),track.push({frame:37,label:"kneeRight",x:-94.65, y:-67.45}),track.push({frame:37,label:"legRight",x:-153.85, y:-61.3}),track.push({frame:37,label:"feetRight",x:-204.2, y:-64.9}),track.push({frame:37,label:"body",x:80.15, y:-53.55}),track.push({frame:37,label:"shoulderLeft",x:166.7, y:-19.7}),track.push({frame:37,label:"armLeft",x:231.05, y:-19.55}),track.push({frame:37,label:"handLeft",x:283.3, y:-23.2}),track.push({frame:37,label:"shoulderRight",x:163.6, y:-61.75}),track.push({frame:37,label:"armRight",x:215.05, y:-58.45}),track.push({frame:37,label:"handRight",x:268.95, y:-53.35}),track.push({frame:37,label:"head",x:169.75, y:-32.3})
track.push({frame:38,label:"waist",x:25.75, y:-63.1}),track.push({frame:38,label:"thighLeft",x:-31.8, y:-47.35}),track.push({frame:38,label:"kneeLeft",x:-96.95, y:-42.85}),track.push({frame:38,label:"legLeft",x:-149.1, y:-46.7}),track.push({frame:38,label:"feetLeft",x:-206.95, y:-49.2}),track.push({frame:38,label:"thighRight",x:-32.7, y:-64.45}),track.push({frame:38,label:"kneeRight",x:-89, y:-45.05}),track.push({frame:38,label:"legRight",x:-146.85, y:-30.6}),track.push({frame:38,label:"feetRight",x:-196.3, y:-28.6}),track.push({frame:38,label:"body",x:80.2, y:-53.5}),track.push({frame:38,label:"shoulderLeft",x:167.65, y:-23.45}),track.push({frame:38,label:"armLeft",x:232.1, y:-23.9}),track.push({frame:38,label:"handLeft",x:282.15, y:-23.3}),track.push({frame:38,label:"shoulderRight",x:164.95, y:-55.55}),track.push({frame:38,label:"armRight",x:214.85, y:-45.4}),track.push({frame:38,label:"handRight",x:270.05, y:-38.05}),track.push({frame:38,label:"head",x:169.8, y:-32.3})
this.addAnimation(track,"jump_1",38,19, false);



        this.play('static1', 3)

        // setTimeout(function() {
        //     this.play('static1')
        // }.bind(this), 2500);

        // setTimeout(function() {
        //     this.play('jump_1')
        // }.bind(this), 5000);

        // setTimeout(function() {
        //     this.play('static1')
        // }.bind(this), 7500);


	}
	addAnimation(frames, label, speed, totFrames, loop = true){
        // console.log(frames, label, totFrames, loop);
        let tempFrames = new Array(totFrames-1);
        let startID = frames[0].frame;       
        // console.log(currentID);
        for (var i = 0; i < frames.length; i++) {
            let frameID = frames[i].frame-1 - startID
            if(!tempFrames[frameID]){
                tempFrames[frameID] = [];
            }
            tempFrames[frameID].push(frames[i])
        }

		let obj = {
			frames:tempFrames,
			label:label,
			speed:1,
            totFrames:totFrames,
            loop:loop
		}
		this.animationsList.push(obj);
	}
    buildParts(){
       let partsArray = [];
        let tempPart = {}
        tempPart = {
        label:"head",
        x:-4.9,
        y:-353.65,
        width:84.4,
        height:84.4,
        radius:42.2
        }
        partsArray.push(tempPart);
        tempPart = {
        label:"body",
        x:-8.6,
        y:-273.15,
        width:105.1,
        height:105.1,
        radius:52.55
        }
        partsArray.push(tempPart);
        tempPart = {
        label:"shoulderLeft",
        x:51.3,
        y:-303.8,
        width:52.7,
        height:52.7,
        radius:26.35
        }
        partsArray.push(tempPart);
        tempPart = {
        label:"armLeft",
        x:97.35,
        y:-324.25,
        width:52.7,
        height:52.7,
        radius:26.35
        }
        partsArray.push(tempPart);
        tempPart = {
        label:"handLeft",
        x:130.6,
        y:-364,
        width:52.8,
        height:52.8,
        radius:26.4
        }
        partsArray.push(tempPart);
        tempPart = {
        label:"waist",
        x:-8.85,
        y:-195.1,
        width:103.1,
        height:103.1,
        radius:51.55
        }
        partsArray.push(tempPart);
        tempPart = {
        label:"thighLeft",
        x:55.15,
        y:-155.75,
        width:81.9,
        height:81.9,
        radius:40.95
        }
        partsArray.push(tempPart);
        tempPart = {
        label:"kneeLeft",
        x:97.5,
        y:-118.55,
        width:68.5,
        height:68.5,
        radius:34.25
        }
        partsArray.push(tempPart);
        tempPart = {
        label:"feetLeft",
        x:139.65,
        y:-21.45,
        width:55.4,
        height:55.4,
        radius:27.7
        }
        partsArray.push(tempPart);
        tempPart = {
        label:"legLeft",
        x:116.55,
        y:-66.15,
        width:39.5,
        height:39.5,
        radius:19.75
        }
        partsArray.push(tempPart);
        tempPart = {
        label:"handRight",
        x:-154.5,
        y:-210.45,
        width:52.7,
        height:52.7,
        radius:26.35
        }
        partsArray.push(tempPart);
        tempPart = {
        label:"armRight",
        x:-108.55,
        y:-230.9,
        width:52.7,
        height:52.7,
        radius:26.35
        }
        partsArray.push(tempPart);
        tempPart = {
        label:"shoulderRight",
        x:-75.3,
        y:-270.6,
        width:52.8,
        height:52.8,
        radius:26.4
        }
        partsArray.push(tempPart);
        tempPart = {
        label:"thighRight",
        x:-62.55,
        y:-157.05,
        width:81.9,
        height:81.9,
        radius:40.95
        }
        partsArray.push(tempPart);
        tempPart = {
        label:"kneeRight",
        x:-98.45,
        y:-119.85,
        width:68.5,
        height:68.5,
        radius:34.25
        }
        partsArray.push(tempPart);
        tempPart = {
        label:"feetRight",
        x:-126.5,
        y:-22.7,
        width:55.4,
        height:55.4,
        radius:27.7
        }
        partsArray.push(tempPart);
        tempPart = {
        label:"legRight",
        x:-108.55,
        y:-67.45,
        width:39.5,
        height:39.5,
        radius:19.75
        }
        partsArray.push(tempPart);

        return partsArray
    }
	update(delta){
		if(!this.currentAnimation){
			return
		}
        this.updateFrame(delta);
	}
	play(label, time = 1){
        if(this.currentAnimation && this.currentAnimation.label == label){
            return
        }
        for (var i = this.animationsList.length - 1; i >= 0; i--) {
            if(this.animationsList[i].label == label){
                    this.customTimer = time / this.animationsList[i].totFrames;
                    this.currentAnimation = this.animationsList[i];
                    this.currentFrameID = 0
                    this.currentTimer = 0
                break
            }
        }
        console.log(this.currentAnimation.label);

        this.stopped = false;
	}

    endAnimationCallback(){
        this.goalkeeper.endAnimation();
       // if(this.currentAnimation.label == 'jump_1'){
       //      console.log(this.currentAnimation.label);
       //      this.play('static1', 2)
       // }
    }
    stopAnimation(){
        this.stopped = true;
        this.endAnimationCallback();
    }
    calcFrame(currentFrame, smooth = 1, frameID = 0){
        let nextFrameID = frameID + 1

        //console.log(this.currentAnimation.loop, nextFrameID, this.currentAnimation.frames.length);
        if(nextFrameID >= this.currentAnimation.frames.length){
            if(!this.currentAnimation.loop){
                this.stopAnimation();
                return currentFrame
            }else{
                nextFrameID = 0;
            }
        }

        let nextFrame = this.currentAnimation.frames[nextFrameID]


        if(!nextFrame){
            return currentFrame
        }
        let interpolatedData = []
        for (var i = currentFrame.length - 1; i >= 0; i--) {
            for (var j = nextFrame.length - 1; j >= 0; j--) {
                if(nextFrame[j].label == currentFrame[i].label){
                    let obj = {x:0, y:0, label:currentFrame[i].label}
                    // console.log(currentFrame[i].label);
                    obj.x = currentFrame[i].x + (nextFrame[i].x - currentFrame[i].x)* smooth
                    obj.y = currentFrame[i].y + (nextFrame[i].y - currentFrame[i].y)* smooth
                    interpolatedData.push(obj)
                }
            }
        }
        return interpolatedData
    }
	updateFrame(delta){

        // console.log( this.currentFrameID, this.stopped);
        if(!this.currentAnimation || this.stopped){
            return
        }
        // let currentFrame = [];
        // let nextFrame = [];
        // console.log('updateFrame');


        this.currentFrameID += delta / this.customTimer;
        if(this.currentFrameID >= this.currentAnimation.frames.length-1){
            this.currentFrameID = 0;
        }

        // let next = this.currentFrameID + 1;

        // console.log(this.currentFrameID);
        let cFrame = Math.ceil(this.currentFrameID)
        let nTime = this.currentFrameID - Math.ceil(this.currentFrameID)
        // console.log(cFrame);

        // console.log(this.currentAnimation.label);
        if(this.currentAnimation.frames[cFrame]){
            this.currentFrame = this.calcFrame(this.currentAnimation.frames[cFrame], nTime, cFrame)
        }
        //this
        // for (var i = this.currentAnimation.frames.length - 1; i >= 0; i--) {
        //     if(this.currentAnimation.frames[i].frame == frame){
        //         currentFrame.push(this.currentAnimation.frames[i]);
        //     }

        //     if(this.currentAnimation.frames[i].frame == next){
        //         nextFrame.push(this.currentAnimation.frames[i]);
        //     }
        // }

        // // if(!nextFrame.length){
        // //     next = 1;
        // //     for (var i = this.currentAnimation.frames.length - 1; i >= 0; i--) {
        // //         if(this.currentAnimation.frames[i].frame == next){
        // //             nextFrame.push(this.currentAnimation.frames[i]);
        // //         }
        // //     }
        // // }
        // for (var i = currentFrame.length - 1; i >= 0; i--) {
        //     for (var j = this.bodyParts.length - 1; j >= 0; j--) {
        //         if(this.bodyParts[j].label == currentFrame[i].label){
        //             this.bodyParts[j].part.x = currentFrame[i].x + (nextFrame[i].x - currentFrame[i].x)* smooth
        //             this.bodyParts[j].part.y = currentFrame[i].y + (nextFrame[i].y - currentFrame[i].y)* smooth
        //         }
        //     }
        // }
    
    }

}
