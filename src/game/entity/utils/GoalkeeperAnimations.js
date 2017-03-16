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
track.push({frame:19,label:"waist",x:-0.05, y:-162.6}),track.push({frame:19,label:"thighLeft",x:41.7, y:-142.6}),track.push({frame:19,label:"kneeLeft",x:88.35, y:-102}),track.push({frame:19,label:"legLeft",x:99.55, y:-53.7}),track.push({frame:19,label:"feetLeft",x:105.15, y:-3.9}),track.push({frame:19,label:"thighRight",x:-50.25, y:-138.95}),track.push({frame:19,label:"kneeRight",x:-93.3, y:-103}),track.push({frame:19,label:"legRight",x:-105.75, y:-48.7}),track.push({frame:19,label:"feetRight",x:-107.7, y:-2.7}),track.push({frame:19,label:"body",x:-0.05, y:-214.45}),track.push({frame:19,label:"shoulderLeft",x:42.05, y:-230.2}),track.push({frame:19,label:"armLeft",x:96.7, y:-218.05}),track.push({frame:19,label:"handLeft",x:141.8, y:-187.55}),track.push({frame:19,label:"shoulderRight",x:-54.35, y:-214.9}),track.push({frame:19,label:"armRight",x:-105.85, y:-191.4}),track.push({frame:19,label:"handRight",x:-137.6, y:-141.6}),track.push({frame:19,label:"head",x:0, y:-287.2})
track.push({frame:20,label:"waist",x:0.7, y:-162}),track.push({frame:20,label:"thighLeft",x:40.45, y:-137.65}),track.push({frame:20,label:"kneeLeft",x:87.9, y:-106.85}),track.push({frame:20,label:"legLeft",x:88.6, y:-58.1}),track.push({frame:20,label:"feetLeft",x:72.65, y:-5.15}),track.push({frame:20,label:"thighRight",x:-52.15, y:-140.4}),track.push({frame:20,label:"kneeRight",x:-98.3, y:-106.7}),track.push({frame:20,label:"legRight",x:-119.9, y:-55.45}),track.push({frame:20,label:"feetRight",x:-131, y:-10.3}),track.push({frame:20,label:"body",x:5.35, y:-214.05}),track.push({frame:20,label:"shoulderLeft",x:57.9, y:-226.35}),track.push({frame:20,label:"armLeft",x:112.05, y:-215}),track.push({frame:20,label:"handLeft",x:162.2, y:-186.2}),track.push({frame:20,label:"shoulderRight",x:-48.2, y:-238.95}),track.push({frame:20,label:"armRight",x:-104.35, y:-240.9}),track.push({frame:20,label:"handRight",x:-159.95, y:-216.15}),track.push({frame:20,label:"head",x:22.7, y:-288.7})
track.push({frame:21,label:"waist",x:1.55, y:-161.4}),track.push({frame:21,label:"thighLeft",x:39.25, y:-132.8}),track.push({frame:21,label:"kneeLeft",x:87.7, y:-112.35}),track.push({frame:21,label:"legLeft",x:78.45, y:-65.25}),track.push({frame:21,label:"feetLeft",x:42.3, y:-14.55}),track.push({frame:21,label:"thighRight",x:-53.95, y:-142.1}),track.push({frame:21,label:"kneeRight",x:-103.05, y:-110.9}),track.push({frame:21,label:"legRight",x:-133.15, y:-64.2}),track.push({frame:21,label:"feetRight",x:-153.3, y:-21.8}),track.push({frame:21,label:"body",x:10.55, y:-214.05}),track.push({frame:21,label:"shoulderLeft",x:73.15, y:-220}),track.push({frame:21,label:"armLeft",x:126.7, y:-209.6}),track.push({frame:21,label:"handLeft",x:183.35, y:-184.65}),track.push({frame:21,label:"shoulderRight",x:-31.3, y:-262.1}),track.push({frame:21,label:"armRight",x:-80.25, y:-288.95}),track.push({frame:21,label:"handRight",x:-141.85, y:-299.8}),track.push({frame:21,label:"head",x:46.25, y:-285.7})
track.push({frame:22,label:"waist",x:2.4, y:-160.8}),track.push({frame:22,label:"thighLeft",x:38.05, y:-128.2}),track.push({frame:22,label:"kneeLeft",x:87.9, y:-118.15}),track.push({frame:22,label:"legLeft",x:69.45, y:-74.7}),track.push({frame:22,label:"feetLeft",x:16.85, y:-31.5}),track.push({frame:22,label:"thighRight",x:-55.55, y:-143.85}),track.push({frame:22,label:"kneeRight",x:-107.6, y:-115.55}),track.push({frame:22,label:"legRight",x:-145.25, y:-74.8}),track.push({frame:22,label:"feetRight",x:-173.7, y:-36.9}),track.push({frame:22,label:"body",x:15.3, y:-215.3}),track.push({frame:22,label:"shoulderLeft",x:86.15, y:-209.8}),track.push({frame:22,label:"armLeft",x:139.2, y:-200.25}),track.push({frame:22,label:"handLeft",x:202.25, y:-181.95}),track.push({frame:22,label:"shoulderRight",x:-5.1, y:-280.5}),track.push({frame:22,label:"armRight",x:-36.45, y:-326.25}),track.push({frame:22,label:"handRight",x:-82.25, y:-370.9}),track.push({frame:22,label:"head",x:69.4, y:-278.35})
track.push({frame:23,label:"waist",x:3.4, y:-160.15}),track.push({frame:23,label:"thighLeft",x:16.75, y:-116.5}),track.push({frame:23,label:"kneeLeft",x:54.9, y:-80.5}),track.push({frame:23,label:"legLeft",x:33.95, y:-39.15}),track.push({frame:23,label:"feetLeft",x:-26, y:-10.25}),track.push({frame:23,label:"thighRight",x:-57.15, y:-145.7}),track.push({frame:23,label:"kneeRight",x:-112.3, y:-121}),track.push({frame:23,label:"legRight",x:-158.1, y:-88.45}),track.push({frame:23,label:"feetRight",x:-201.75, y:-63.95}),track.push({frame:23,label:"body",x:20.85, y:-217.7}),track.push({frame:23,label:"shoulderLeft",x:96.9, y:-197.2}),track.push({frame:23,label:"armLeft",x:149.5, y:-188.75}),track.push({frame:23,label:"handLeft",x:217.5, y:-179.75}),track.push({frame:23,label:"shoulderRight",x:28.4, y:-290.15}),track.push({frame:23,label:"armRight",x:21.05, y:-344.85}),track.push({frame:23,label:"handRight",x:8.6, y:-408.65}),track.push({frame:23,label:"head",x:91.4, y:-266.7})
track.push({frame:24,label:"waist",x:4.35, y:-159.5}),track.push({frame:24,label:"thighLeft",x:-12, y:-112.15}),track.push({frame:24,label:"kneeLeft",x:3.9, y:-57.95}),track.push({frame:24,label:"legLeft",x:-19.1, y:-18.65}),track.push({frame:24,label:"feetLeft",x:-82.5, y:-4.85}),track.push({frame:24,label:"thighRight",x:-58.65, y:-147.75}),track.push({frame:24,label:"kneeRight",x:-116.65, y:-127.1}),track.push({frame:24,label:"legRight",x:-168.75, y:-104.45}),track.push({frame:24,label:"feetRight",x:-219.8, y:-100.65}),track.push({frame:24,label:"body",x:28.35, y:-220.6}),track.push({frame:24,label:"shoulderLeft",x:105.8, y:-183.85}),track.push({frame:24,label:"armLeft",x:158.1, y:-176.35}),track.push({frame:24,label:"handLeft",x:228.4, y:-178.8}),track.push({frame:24,label:"shoulderRight",x:65.8, y:-288.05}),track.push({frame:24,label:"armRight",x:84.05, y:-339.95}),track.push({frame:24,label:"handRight",x:110.45, y:-400.15}),track.push({frame:24,label:"head",x:111.45, y:-250.7})
track.push({frame:25,label:"waist",x:5.3, y:-158.9}),track.push({frame:25,label:"thighLeft",x:-35.1, y:-120.05}),track.push({frame:25,label:"kneeLeft",x:-47.15, y:-59}),track.push({frame:25,label:"legLeft",x:-72.2, y:-21.8}),track.push({frame:25,label:"feetLeft",x:-135.3, y:-22.65}),track.push({frame:25,label:"thighRight",x:-59.85, y:-149.9}),track.push({frame:25,label:"kneeRight",x:-120.55, y:-133.65}),track.push({frame:25,label:"legRight",x:-176.75, y:-122.35}),track.push({frame:25,label:"feetRight",x:-223.85, y:-140.4}),track.push({frame:25,label:"body",x:37.9, y:-223.5}),track.push({frame:25,label:"shoulderLeft",x:111.95, y:-168.6}),track.push({frame:25,label:"armLeft",x:163.85, y:-162.2}),track.push({frame:25,label:"handLeft",x:232.95, y:-176.65}),track.push({frame:25,label:"shoulderRight",x:102.05, y:-273.65}),track.push({frame:25,label:"armRight",x:141.65, y:-311.4}),track.push({frame:25,label:"handRight",x:198.15, y:-345.75}),track.push({frame:25,label:"head",x:128.4, y:-230.75})
track.push({frame:26,label:"waist",x:8.45, y:-154}),track.push({frame:26,label:"thighLeft",x:-35.3, y:-119.55}),track.push({frame:26,label:"kneeLeft",x:-59.1, y:-61.05}),track.push({frame:26,label:"legLeft",x:-90.3, y:-28.05}),track.push({frame:26,label:"feetLeft",x:-152.25, y:-33}),track.push({frame:26,label:"thighRight",x:-58.25, y:-151.4}),track.push({frame:26,label:"kneeRight",x:-120.95, y:-145.25}),track.push({frame:26,label:"legRight",x:-178.1, y:-143.85}),track.push({frame:26,label:"feetRight",x:-222.95, y:-165.75}),track.push({frame:26,label:"body",x:48.75, y:-210.2}),track.push({frame:26,label:"shoulderLeft",x:121.85, y:-155.25}),track.push({frame:26,label:"armLeft",x:173.35, y:-147.25}),track.push({frame:26,label:"handLeft",x:242.7, y:-158.2}),track.push({frame:26,label:"shoulderRight",x:115.95, y:-256.1}),track.push({frame:26,label:"armRight",x:157.7, y:-290.45}),track.push({frame:26,label:"handRight",x:216.15, y:-321.35}),track.push({frame:26,label:"head",x:139.3, y:-212.8})
track.push({frame:27,label:"waist",x:11.5, y:-149.15}),track.push({frame:27,label:"thighLeft",x:-35.1, y:-119.05}),track.push({frame:27,label:"kneeLeft",x:-70, y:-65.5}),track.push({frame:27,label:"legLeft",x:-106.75, y:-37.55}),track.push({frame:27,label:"feetLeft",x:-167.3, y:-46.35}),track.push({frame:27,label:"thighRight",x:-56.25, y:-153.3}),track.push({frame:27,label:"kneeRight",x:-119.25, y:-157.6}),track.push({frame:27,label:"legRight",x:-175.6, y:-166}),track.push({frame:27,label:"feetRight",x:-217.85, y:-191.45}),track.push({frame:27,label:"body",x:57.95, y:-195.5}),track.push({frame:27,label:"shoulderLeft",x:130.25, y:-140.85}),track.push({frame:27,label:"armLeft",x:181.2, y:-131.2}),track.push({frame:27,label:"handLeft",x:250.65, y:-138.65}),track.push({frame:27,label:"shoulderRight",x:127.95, y:-236.9}),track.push({frame:27,label:"armRight",x:171.65, y:-267.85}),track.push({frame:27,label:"handRight",x:231.2, y:-295}),track.push({frame:27,label:"head",x:148.35, y:-193.4})
track.push({frame:28,label:"waist",x:14.25, y:-144.2}),track.push({frame:28,label:"thighLeft",x:-34.65, y:-118.4}),track.push({frame:28,label:"kneeLeft",x:-79.65, y:-71.85}),track.push({frame:28,label:"legLeft",x:-121, y:-49.85}),track.push({frame:28,label:"feetLeft",x:-179.9, y:-62.3}),track.push({frame:28,label:"thighRight",x:-53.65, y:-155.45}),track.push({frame:28,label:"kneeRight",x:-115.3, y:-170.1}),track.push({frame:28,label:"legRight",x:-169.1, y:-188.1}),track.push({frame:28,label:"feetRight",x:-208.4, y:-216.8}),track.push({frame:28,label:"body",x:65.3, y:-180}),track.push({frame:28,label:"shoulderLeft",x:136.65, y:-125.8}),track.push({frame:28,label:"armLeft",x:187.15, y:-114.55}),track.push({frame:28,label:"handLeft",x:256.45, y:-118.5}),track.push({frame:28,label:"shoulderRight",x:137.7, y:-216.7}),track.push({frame:28,label:"armRight",x:182.95, y:-244.05}),track.push({frame:28,label:"handRight",x:243, y:-267.35}),track.push({frame:28,label:"head",x:155.25, y:-173.15})
track.push({frame:29,label:"waist",x:16.85, y:-139.2}),track.push({frame:29,label:"thighLeft",x:-33.9, y:-117.75}),track.push({frame:29,label:"kneeLeft",x:-87.5, y:-80.05}),track.push({frame:29,label:"legLeft",x:-132.6, y:-64.6}),track.push({frame:29,label:"feetLeft",x:-189.65, y:-80.5}),track.push({frame:29,label:"thighRight",x:-50.5, y:-157.8}),track.push({frame:29,label:"kneeRight",x:-109, y:-182.4}),track.push({frame:29,label:"legRight",x:-158.65, y:-209.45}),track.push({frame:29,label:"feetRight",x:-194.85, y:-241}),track.push({frame:29,label:"body",x:70.55, y:-163.95}),track.push({frame:29,label:"shoulderLeft",x:141, y:-110.45}),track.push({frame:29,label:"armLeft",x:190.95, y:-97.7}),track.push({frame:29,label:"handLeft",x:259.95, y:-98.15}),track.push({frame:29,label:"shoulderRight",x:145.05, y:-195.9}),track.push({frame:29,label:"armRight",x:191.75, y:-219.6}),track.push({frame:29,label:"handRight",x:251.3, y:-239.25}),track.push({frame:29,label:"head",x:159.85, y:-152.5})
track.push({frame:30,label:"waist",x:19.2, y:-134.1}),track.push({frame:30,label:"thighLeft",x:-32.95, y:-116.85}),track.push({frame:30,label:"kneeLeft",x:-93.4, y:-89.55}),track.push({frame:30,label:"legLeft",x:-141.15, y:-81.4}),track.push({frame:30,label:"feetLeft",x:-196.2, y:-100.4}),track.push({frame:30,label:"thighRight",x:-46.6, y:-160.15}),track.push({frame:30,label:"kneeRight",x:-100.5, y:-194.15}),track.push({frame:30,label:"legRight",x:-144.35, y:-229.3}),track.push({frame:30,label:"feetRight",x:-177.1, y:-263.55}),track.push({frame:30,label:"body",x:73.8, y:-147.95}),track.push({frame:30,label:"shoulderLeft",x:143.25, y:-95.4}),track.push({frame:30,label:"armLeft",x:192.6, y:-81.05}),track.push({frame:30,label:"handLeft",x:261.15, y:-78.1}),track.push({frame:30,label:"shoulderRight",x:150.15, y:-175}),track.push({frame:30,label:"armRight",x:197.9, y:-195}),track.push({frame:30,label:"handRight",x:256.4, y:-211.45}),track.push({frame:30,label:"head",x:162.2, y:-131.95})
track.push({frame:31,label:"waist",x:21.35, y:-129.1}),track.push({frame:31,label:"thighLeft",x:-31.85, y:-115.8}),track.push({frame:31,label:"kneeLeft",x:-97.2, y:-100.05}),track.push({frame:31,label:"legLeft",x:-146.45, y:-99.5}),track.push({frame:31,label:"feetLeft",x:-199.3, y:-121.3}),track.push({frame:31,label:"thighRight",x:-42.05, y:-162.35}),track.push({frame:31,label:"kneeRight",x:-89.7, y:-204.85}),track.push({frame:31,label:"legRight",x:-126.6, y:-247}),track.push({frame:31,label:"feetRight",x:-155.8, y:-283.5}),track.push({frame:31,label:"body",x:75.2, y:-132.5}),track.push({frame:31,label:"shoulderLeft",x:143.6, y:-80.8}),track.push({frame:31,label:"armLeft",x:192.3, y:-64.95}),track.push({frame:31,label:"handLeft",x:260.15, y:-58.7}),track.push({frame:31,label:"shoulderRight",x:153.1, y:-154.5}),track.push({frame:31,label:"armRight",x:201.65, y:-170.7}),track.push({frame:31,label:"handRight",x:258.5, y:-184.6}),track.push({frame:31,label:"head",x:162.5, y:-111.95})
track.push({frame:32,label:"waist",x:23.3, y:-124}),track.push({frame:32,label:"thighLeft",x:-30.7, y:-114.4}),track.push({frame:32,label:"kneeLeft",x:-98.55, y:-111.15}),track.push({frame:32,label:"legLeft",x:-148.2, y:-118.35}),track.push({frame:32,label:"feetLeft",x:-198.8, y:-142.85}),track.push({frame:32,label:"thighRight",x:-36.9, y:-164.3}),track.push({frame:32,label:"kneeRight",x:-77, y:-214.2}),track.push({frame:32,label:"legRight",x:-105.65, y:-261.9}),track.push({frame:32,label:"feetRight",x:-131.15, y:-300.3}),track.push({frame:32,label:"body",x:75.15, y:-117.8}),track.push({frame:32,label:"shoulderLeft",x:142.2, y:-67}),track.push({frame:32,label:"armLeft",x:190.3, y:-49.65}),track.push({frame:32,label:"handLeft",x:257.3, y:-40}),track.push({frame:32,label:"shoulderRight",x:154.15, y:-134.7}),track.push({frame:32,label:"armRight",x:203.2, y:-147.15}),track.push({frame:32,label:"handRight",x:258.15, y:-159.1}),track.push({frame:32,label:"head",x:161, y:-92.8})
track.push({frame:33,label:"waist",x:23.7, y:-103.4}),track.push({frame:33,label:"thighLeft",x:-30.6, y:-94.6}),track.push({frame:33,label:"kneeLeft",x:-98.55, y:-90.2}),track.push({frame:33,label:"legLeft",x:-148.65, y:-95.45}),track.push({frame:33,label:"feetLeft",x:-202.4, y:-113.45}),track.push({frame:33,label:"thighRight",x:-38.25, y:-139.5}),track.push({frame:33,label:"kneeRight",x:-85.2, y:-180.85}),track.push({frame:33,label:"legRight",x:-126, y:-219.05}),track.push({frame:33,label:"feetRight",x:-161.05, y:-252.25}),track.push({frame:33,label:"body",x:75, y:-99.5}),track.push({frame:33,label:"shoulderLeft",x:148.2, y:-47.55}),track.push({frame:33,label:"armLeft",x:202.6, y:-34.75}),track.push({frame:33,label:"handLeft",x:270.5, y:-29.65}),track.push({frame:33,label:"shoulderRight",x:154.75, y:-115.35}),track.push({frame:33,label:"armRight",x:205.05, y:-128.05}),track.push({frame:33,label:"handRight",x:260.05, y:-132}),track.push({frame:33,label:"head",x:160.6, y:-73.1})
track.push({frame:34,label:"waist",x:24.1, y:-82.65}),track.push({frame:34,label:"thighLeft",x:-30.6, y:-74.6}),track.push({frame:34,label:"kneeLeft",x:-98.5, y:-69.2}),track.push({frame:34,label:"legLeft",x:-148.95, y:-72.4}),track.push({frame:34,label:"feetLeft",x:-205.1, y:-83.35}),track.push({frame:34,label:"thighRight",x:-39.1, y:-114.7}),track.push({frame:34,label:"kneeRight",x:-91.2, y:-146.75}),track.push({frame:34,label:"legRight",x:-141, y:-172.45}),track.push({frame:34,label:"feetRight",x:-184.1, y:-197.5}),track.push({frame:34,label:"body",x:74.8, y:-81.2}),track.push({frame:34,label:"shoulderLeft",x:154.15, y:-28.15}),track.push({frame:34,label:"armLeft",x:214.3, y:-20.45}),track.push({frame:34,label:"handLeft",x:282.8, y:-19.95}),track.push({frame:34,label:"shoulderRight",x:155.25, y:-95.85}),track.push({frame:34,label:"armRight",x:206.95, y:-108.7}),track.push({frame:34,label:"handRight",x:260.95, y:-105.2}),track.push({frame:34,label:"head",x:160.15, y:-53.35})
track.push({frame:35,label:"waist",x:24.45, y:-61.8}),track.push({frame:35,label:"thighLeft",x:-30.55, y:-54.55}),track.push({frame:35,label:"kneeLeft",x:-98.4, y:-48.05}),track.push({frame:35,label:"legLeft",x:-149.35, y:-49}),track.push({frame:35,label:"feetLeft",x:-206.8, y:-52.7}),track.push({frame:35,label:"thighRight",x:-39.7, y:-90}),track.push({frame:35,label:"kneeRight",x:-94.95, y:-112.35}),track.push({frame:35,label:"legRight",x:-150.05, y:-123.6}),track.push({frame:35,label:"feetRight",x:-198.55, y:-138.3}),track.push({frame:35,label:"body",x:74.55, y:-62.7}),track.push({frame:35,label:"shoulderLeft",x:160.05, y:-8.6}),track.push({frame:35,label:"armLeft",x:225.4, y:-6.65}),track.push({frame:35,label:"handLeft",x:294.15, y:-10.75}),track.push({frame:35,label:"shoulderRight",x:155.6, y:-76.3}),track.push({frame:35,label:"armRight",x:208.85, y:-89}),track.push({frame:35,label:"handRight",x:261.05, y:-78.6}),track.push({frame:35,label:"head",x:159.6, y:-33.45})
track.push({frame:36,label:"waist",x:24.5, y:-61.75}),track.push({frame:36,label:"thighLeft",x:-30.55, y:-54.5}),track.push({frame:36,label:"kneeLeft",x:-98.4, y:-48}),track.push({frame:36,label:"legLeft",x:-149.35, y:-48.95}),track.push({frame:36,label:"feetLeft",x:-206.8, y:-52.6}),track.push({frame:36,label:"thighRight",x:-38.85, y:-80.55}),track.push({frame:36,label:"kneeRight",x:-98.85, y:-89.3}),track.push({frame:36,label:"legRight",x:-154.95, y:-92.65}),track.push({frame:36,label:"feetRight",x:-204.9, y:-102.05}),track.push({frame:36,label:"body",x:74.6, y:-62.65}),track.push({frame:36,label:"shoulderLeft",x:161.4, y:-12.15}),track.push({frame:36,label:"armLeft",x:226.8, y:-10.85}),track.push({frame:36,label:"handLeft",x:289.1, y:-23.7}),track.push({frame:36,label:"shoulderRight",x:158.45, y:-71.05}),track.push({frame:36,label:"armRight",x:211.85, y:-76.3}),track.push({frame:36,label:"handRight",x:262.25, y:-66.8}),track.push({frame:36,label:"head",x:159.65, y:-33.5})
track.push({frame:37,label:"waist",x:24.6, y:-61.75}),track.push({frame:37,label:"thighLeft",x:-30.55, y:-54.4}),track.push({frame:37,label:"kneeLeft",x:-98.35, y:-47.9}),track.push({frame:37,label:"legLeft",x:-149.35, y:-48.9}),track.push({frame:37,label:"feetLeft",x:-206.8, y:-52.55}),track.push({frame:37,label:"thighRight",x:-36.6, y:-71.4}),track.push({frame:37,label:"kneeRight",x:-97.9, y:-65.55}),track.push({frame:37,label:"legRight",x:-153.85, y:-60.95}),track.push({frame:37,label:"feetRight",x:-204.25, y:-64.85}),track.push({frame:37,label:"body",x:74.65, y:-62.55}),track.push({frame:37,label:"shoulderLeft",x:162.55, y:-15.85}),track.push({frame:37,label:"armLeft",x:228, y:-15.15}),track.push({frame:37,label:"handLeft",x:280, y:-26.95}),track.push({frame:37,label:"shoulderRight",x:160.75, y:-65.4}),track.push({frame:37,label:"armRight",x:213.4, y:-63.25}),track.push({frame:37,label:"handRight",x:264.4, y:-55}),track.push({frame:37,label:"head",x:159.65, y:-33.55})
track.push({frame:38,label:"waist",x:24.65, y:-61.75}),track.push({frame:38,label:"thighLeft",x:-30.6, y:-54.35}),track.push({frame:38,label:"kneeLeft",x:-98.3, y:-47.85}),track.push({frame:38,label:"legLeft",x:-149.3, y:-48.85}),track.push({frame:38,label:"feetLeft",x:-206.75, y:-52.45}),track.push({frame:38,label:"thighRight",x:-32.95, y:-63.1}),track.push({frame:38,label:"kneeRight",x:-92, y:-42.7}),track.push({frame:38,label:"legRight",x:-146.8, y:-30.35}),track.push({frame:38,label:"feetRight",x:-196.4, y:-28.5}),track.push({frame:38,label:"body",x:74.65, y:-62.45}),track.push({frame:38,label:"shoulderLeft",x:163.55, y:-19.6}),track.push({frame:38,label:"armLeft",x:229.05, y:-19.45}),track.push({frame:38,label:"handLeft",x:277.15, y:-22.25}),track.push({frame:38,label:"shoulderRight",x:162.7, y:-59.55}),track.push({frame:38,label:"armRight",x:213.5, y:-50.25}),track.push({frame:38,label:"handRight",x:267.15, y:-41.9}),track.push({frame:38,label:"head",x:159.65, y:-33.6})
this.addAnimation(track,"jump_1",38,19, false);




track = []
track.push({frame:40,label:"waist",x:-0.05, y:-162.6}),track.push({frame:40,label:"thighLeft",x:41.7, y:-142.55}),track.push({frame:40,label:"kneeLeft",x:88.3, y:-101.95}),track.push({frame:40,label:"legLeft",x:99.6, y:-53.7}),track.push({frame:40,label:"feetLeft",x:105.15, y:-3.9}),track.push({frame:40,label:"thighRight",x:-49.95, y:-138.15}),track.push({frame:40,label:"kneeRight",x:-92.65, y:-102.8}),track.push({frame:40,label:"legRight",x:-105.65, y:-48.3}),track.push({frame:40,label:"feetRight",x:-107.35, y:-2.85}),track.push({frame:40,label:"body",x:-0.05, y:-213.85}),track.push({frame:40,label:"shoulderLeft",x:42.05, y:-230.1}),track.push({frame:40,label:"armLeft",x:96.9, y:-218}),track.push({frame:40,label:"handLeft",x:141.6, y:-187.3}),track.push({frame:40,label:"shoulderRight",x:-53.85, y:-214.8}),track.push({frame:40,label:"armRight",x:-105.6, y:-191.25}),track.push({frame:40,label:"handRight",x:-137.65, y:-141.25}),track.push({frame:40,label:"head",x:0, y:-287.15})
track.push({frame:41,label:"waist",x:7.3, y:-171.05}),track.push({frame:41,label:"thighLeft",x:53.35, y:-147.2}),track.push({frame:41,label:"kneeLeft",x:93.85, y:-99.7}),track.push({frame:41,label:"legLeft",x:102.15, y:-50.35}),track.push({frame:41,label:"feetLeft",x:107.6, y:-3.4}),track.push({frame:41,label:"thighRight",x:-45, y:-139.95}),track.push({frame:41,label:"kneeRight",x:-84.4, y:-103.85}),track.push({frame:41,label:"legRight",x:-99.6, y:-46.7}),track.push({frame:41,label:"feetRight",x:-107.95, y:-1}),track.push({frame:41,label:"body",x:15.9, y:-228.7}),track.push({frame:41,label:"shoulderLeft",x:58.5, y:-235.9}),track.push({frame:41,label:"armLeft",x:112.8, y:-231}),track.push({frame:41,label:"handLeft",x:168.6, y:-208.6}),track.push({frame:41,label:"shoulderRight",x:-39.5, y:-242.15}),track.push({frame:41,label:"armRight",x:-93.55, y:-234.5}),track.push({frame:41,label:"handRight",x:-149.55, y:-215}),track.push({frame:41,label:"head",x:24.35, y:-306.55})
track.push({frame:42,label:"waist",x:14.85, y:-179.2}),track.push({frame:42,label:"thighLeft",x:65, y:-151.55}),track.push({frame:42,label:"kneeLeft",x:98.15, y:-98.05}),track.push({frame:42,label:"legLeft",x:103.45, y:-47.75}),track.push({frame:42,label:"feetLeft",x:108.8, y:-3.65}),track.push({frame:42,label:"thighRight",x:-39.85, y:-141.5}),track.push({frame:42,label:"kneeRight",x:-75.75, y:-104.75}),track.push({frame:42,label:"legRight",x:-93.25, y:-44.9}),track.push({frame:42,label:"feetRight",x:-108.25, y:0}),track.push({frame:42,label:"body",x:31.7, y:-242.65}),track.push({frame:42,label:"shoulderLeft",x:75.1, y:-246.5}),track.push({frame:42,label:"armLeft",x:128.1, y:-248.6}),track.push({frame:42,label:"handLeft",x:193.55, y:-238.75}),track.push({frame:42,label:"shoulderRight",x:-22.25, y:-270.15}),track.push({frame:42,label:"armRight",x:-73.6, y:-282.3}),track.push({frame:42,label:"handRight",x:-130.25, y:-297.95}),track.push({frame:42,label:"head",x:45.1, y:-322.8})
track.push({frame:43,label:"waist",x:22.4, y:-187.05}),track.push({frame:43,label:"thighLeft",x:76.55, y:-155.6}),track.push({frame:43,label:"kneeLeft",x:101.65, y:-97.4}),track.push({frame:43,label:"legLeft",x:103.9, y:-46.35}),track.push({frame:43,label:"feetLeft",x:109.25, y:-4.95}),track.push({frame:43,label:"thighRight",x:-34.55, y:-142.95}),track.push({frame:43,label:"kneeRight",x:-66.95, y:-105.6}),track.push({frame:43,label:"legRight",x:-86.7, y:-43.15}),track.push({frame:43,label:"feetRight",x:-108.1, y:0.15}),track.push({frame:43,label:"body",x:46.85, y:-257.2}),track.push({frame:43,label:"shoulderLeft",x:91.75, y:-263.9}),track.push({frame:43,label:"armLeft",x:142.85, y:-272.6}),track.push({frame:43,label:"handLeft",x:214.9, y:-279.4}),track.push({frame:43,label:"shoulderRight",x:-1.6, y:-299.2}),track.push({frame:43,label:"armRight",x:-39, y:-330.3}),track.push({frame:43,label:"handRight",x:-75.85, y:-376.05}),track.push({frame:43,label:"head",x:65.8, y:-337})
track.push({frame:44,label:"waist",x:29.85, y:-194.7}),track.push({frame:44,label:"thighLeft",x:88.15, y:-159.45}),track.push({frame:44,label:"kneeLeft",x:104.85, y:-97.95}),track.push({frame:44,label:"legLeft",x:103.95, y:-46.3}),track.push({frame:44,label:"feetLeft",x:109.5, y:-7.7}),track.push({frame:44,label:"thighRight",x:-29.25, y:-144.2}),track.push({frame:44,label:"kneeRight",x:-57.95, y:-106.5}),track.push({frame:44,label:"legRight",x:-79.95, y:-41.45}),track.push({frame:44,label:"feetRight",x:-107.3, y:-0.15}),track.push({frame:44,label:"body",x:62.2, y:-272.8}),track.push({frame:44,label:"shoulderLeft",x:105.8, y:-282.2}),track.push({frame:44,label:"armLeft",x:154.1, y:-297.25}),track.push({frame:44,label:"handLeft",x:228.15, y:-323.75}),track.push({frame:44,label:"shoulderRight",x:23.3, y:-328.6}),track.push({frame:44,label:"armRight",x:10.25, y:-367.8}),track.push({frame:44,label:"handRight",x:11.3, y:-427.45}),track.push({frame:44,label:"head",x:89.85, y:-350.4})
track.push({frame:45,label:"waist",x:33.4, y:-195.35}),track.push({frame:45,label:"thighLeft",x:84.3, y:-152.95}),track.push({frame:45,label:"kneeLeft",x:92.9, y:-89.15}),track.push({frame:45,label:"legLeft",x:87.2, y:-38.75}),track.push({frame:45,label:"feetLeft",x:79.8, y:2.65}),track.push({frame:45,label:"thighRight",x:-27.9, y:-143.9}),track.push({frame:45,label:"kneeRight",x:-58.7, y:-107.2}),track.push({frame:45,label:"legRight",x:-86.65, y:-44.6}),track.push({frame:45,label:"feetRight",x:-117.4, y:-8.2}),track.push({frame:45,label:"body",x:59.8, y:-275.8}),track.push({frame:45,label:"shoulderLeft",x:103.15, y:-288.5}),track.push({frame:45,label:"armLeft",x:149.9, y:-309.05}),track.push({frame:45,label:"handLeft",x:221.25, y:-348.65}),track.push({frame:45,label:"shoulderRight",x:17.8, y:-331}),track.push({frame:45,label:"armRight",x:4.35, y:-370.15}),track.push({frame:45,label:"handRight",x:3.3, y:-428.9}),track.push({frame:45,label:"head",x:81.6, y:-355.1})
track.push({frame:46,label:"waist",x:36.85, y:-196.15}),track.push({frame:46,label:"thighLeft",x:77.45, y:-144.3}),track.push({frame:46,label:"kneeLeft",x:77.6, y:-79.25}),track.push({frame:46,label:"legLeft",x:67.35, y:-30.55}),track.push({frame:46,label:"feetLeft",x:47.55, y:11.75}),track.push({frame:46,label:"thighRight",x:-26.7, y:-143.75}),track.push({frame:46,label:"kneeRight",x:-59.55, y:-108.2}),track.push({frame:46,label:"legRight",x:-93.25, y:-48.7}),track.push({frame:46,label:"feetRight",x:-128, y:-16.95}),track.push({frame:46,label:"body",x:57.15, y:-278.3}),track.push({frame:46,label:"shoulderLeft",x:99.85, y:-294.6}),track.push({frame:46,label:"armLeft",x:144.5, y:-320.4}),track.push({frame:46,label:"handLeft",x:210.1, y:-373.4}),track.push({frame:46,label:"shoulderRight",x:12.05, y:-332.85}),track.push({frame:46,label:"armRight",x:-1.55, y:-371.8}),track.push({frame:46,label:"handRight",x:-4.6, y:-429.4}),track.push({frame:46,label:"head",x:72.9, y:-359.1})
track.push({frame:47,label:"waist",x:40.2, y:-197.05}),track.push({frame:47,label:"thighLeft",x:67.45, y:-135.45}),track.push({frame:47,label:"kneeLeft",x:59.2, y:-70.25}),track.push({frame:47,label:"legLeft",x:44.75, y:-23.65}),track.push({frame:47,label:"feetLeft",x:13.45, y:17.65}),track.push({frame:47,label:"thighRight",x:-25.6, y:-143.75}),track.push({frame:47,label:"kneeRight",x:-60.4, y:-109.4}),track.push({frame:47,label:"legRight",x:-99.55, y:-53.5}),track.push({frame:47,label:"feetRight",x:-138.85, y:-26}),track.push({frame:47,label:"body",x:54.25, y:-280.55}),track.push({frame:47,label:"shoulderLeft",x:96.15, y:-300.35}),track.push({frame:47,label:"armLeft",x:138, y:-331.25}),track.push({frame:47,label:"handLeft",x:194.45, y:-396.7}),track.push({frame:47,label:"shoulderRight",x:6.05, y:-334.15}),track.push({frame:47,label:"armRight",x:-7.8, y:-373}),track.push({frame:47,label:"handRight",x:-12.4, y:-428.95}),track.push({frame:47,label:"head",x:63.9, y:-362.25})
track.push({frame:48,label:"waist",x:43.5, y:-198.05}),track.push({frame:48,label:"thighLeft",x:56.15, y:-128.6}),track.push({frame:48,label:"kneeLeft",x:39.4, y:-64.4}),track.push({frame:48,label:"legLeft",x:21.2, y:-20.2}),track.push({frame:48,label:"feetLeft",x:-19.75, y:18}),track.push({frame:48,label:"thighRight",x:-24.45, y:-143.8}),track.push({frame:48,label:"kneeRight",x:-61.25, y:-110.75}),track.push({frame:48,label:"legRight",x:-105.55, y:-58.9}),track.push({frame:48,label:"feetRight",x:-149.4, y:-35}),track.push({frame:48,label:"body",x:51.3, y:-282.3}),track.push({frame:48,label:"shoulderLeft",x:91.95, y:-305.65}),track.push({frame:48,label:"armLeft",x:130.45, y:-341.35}),track.push({frame:48,label:"handLeft",x:174.65, y:-417.35}),track.push({frame:48,label:"shoulderRight",x:0, y:-334.85}),track.push({frame:48,label:"armRight",x:-14.25, y:-373.6}),track.push({frame:48,label:"handRight",x:-19.95, y:-427.75}),track.push({frame:48,label:"head",x:54.65, y:-364.5})
track.push({frame:49,label:"waist",x:46.7, y:-199.05}),track.push({frame:49,label:"thighLeft",x:46.25, y:-124.9}),track.push({frame:49,label:"kneeLeft",x:21.05, y:-62.8}),track.push({frame:49,label:"legLeft",x:-0.3, y:-21.15}),track.push({frame:49,label:"feetLeft",x:-49.2, y:12.1}),track.push({frame:49,label:"thighRight",x:-23.35, y:-143.7}),track.push({frame:49,label:"kneeRight",x:-62.05, y:-112.2}),track.push({frame:49,label:"legRight",x:-111, y:-64.85}),track.push({frame:49,label:"feetRight",x:-159.1, y:-43.7}),track.push({frame:49,label:"body",x:48.15, y:-283.7}),track.push({frame:49,label:"shoulderLeft",x:87.25, y:-310.5}),track.push({frame:49,label:"armLeft",x:121.85, y:-350.65}),track.push({frame:49,label:"handLeft",x:151.35, y:-434.3}),track.push({frame:49,label:"shoulderRight",x:-6.3, y:-335}),track.push({frame:49,label:"armRight",x:-20.8, y:-373.55}),track.push({frame:49,label:"handRight",x:-27.2, y:-425.75}),track.push({frame:49,label:"head",x:45.3, y:-365.95})
track.push({frame:50,label:"waist",x:49.7, y:-200.15}),track.push({frame:50,label:"thighLeft",x:39.6, y:-123.8}),track.push({frame:50,label:"kneeLeft",x:6.35, y:-64.8}),track.push({frame:50,label:"legLeft",x:-18.05, y:-25.8}),track.push({frame:50,label:"feetLeft",x:-72.2, y:0.7}),track.push({frame:50,label:"thighRight",x:-22.05, y:-143.5}),track.push({frame:50,label:"kneeRight",x:-62.7, y:-113.55}),track.push({frame:50,label:"legRight",x:-115.8, y:-71.25}),track.push({frame:50,label:"feetRight",x:-167.45, y:-52.2}),track.push({frame:50,label:"body",x:44.85, y:-284.65}),track.push({frame:50,label:"shoulderLeft",x:82.25, y:-314.85}),track.push({frame:50,label:"armLeft",x:112.3, y:-359.05}),track.push({frame:50,label:"handLeft",x:125.75, y:-446.65}),track.push({frame:50,label:"shoulderRight",x:-12.7, y:-334.5}),track.push({frame:50,label:"armRight",x:-27.5, y:-372.9}),track.push({frame:50,label:"handRight",x:-34, y:-423.1}),track.push({frame:50,label:"head",x:35.9, y:-366.4})
track.push({frame:51,label:"waist",x:85.1, y:-185.05}),track.push({frame:51,label:"thighLeft",x:59, y:-113.75}),track.push({frame:51,label:"kneeLeft",x:14.65, y:-60.95}),track.push({frame:51,label:"legLeft",x:-14.3, y:-25.15}),track.push({frame:51,label:"feetLeft",x:-71.65, y:-7.5}),track.push({frame:51,label:"thighRight",x:6.8, y:-144.95}),track.push({frame:51,label:"kneeRight",x:-37.25, y:-119.7}),track.push({frame:51,label:"legRight",x:-96.85, y:-86.3}),track.push({frame:51,label:"feetRight",x:-151.75, y:-79.15}),track.push({frame:51,label:"body",x:101.35, y:-269.35}),track.push({frame:51,label:"shoulderLeft",x:144.05, y:-291.35}),track.push({frame:51,label:"armLeft",x:182.55, y:-328.55}),track.push({frame:51,label:"handLeft",x:213.4, y:-411.6}),track.push({frame:51,label:"shoulderRight",x:55.05, y:-329.95}),track.push({frame:51,label:"armRight",x:48.4, y:-370.55}),track.push({frame:51,label:"handRight",x:52.15, y:-421}),track.push({frame:51,label:"head",x:109.15, y:-351.3})
track.push({frame:52,label:"waist",x:116.35, y:-164.1}),track.push({frame:52,label:"thighLeft",x:76.5, y:-100.9}),track.push({frame:52,label:"kneeLeft",x:22.3, y:-56.35}),track.push({frame:52,label:"legLeft",x:-10.75, y:-24.35}),track.push({frame:52,label:"feetLeft",x:-69.4, y:-15.95}),track.push({frame:52,label:"thighRight",x:35.85, y:-139.95}),track.push({frame:52,label:"kneeRight",x:-11.25, y:-119.85}),track.push({frame:52,label:"legRight",x:-75.8, y:-96.35}),track.push({frame:52,label:"feetRight",x:-131.25, y:-101.5}),track.push({frame:52,label:"body",x:153.2, y:-243.15}),track.push({frame:52,label:"shoulderLeft",x:199.45, y:-255.95}),track.push({frame:52,label:"armLeft",x:244.75, y:-284.55}),track.push({frame:52,label:"handLeft",x:291.85, y:-359.55}),track.push({frame:52,label:"shoulderRight",x:120.25, y:-311.85}),track.push({frame:52,label:"armRight",x:121.95, y:-353}),track.push({frame:52,label:"handRight",x:136, y:-401.7}),track.push({frame:52,label:"head",x:177.5, y:-321.75})
track.push({frame:53,label:"waist",x:142.8, y:-138.4}),track.push({frame:53,label:"thighLeft",x:91.55, y:-85.5}),track.push({frame:53,label:"kneeLeft",x:29.1, y:-51}),track.push({frame:53,label:"legLeft",x:-7.6, y:-23.25}),track.push({frame:53,label:"feetLeft",x:-65.65, y:-23.95}),track.push({frame:53,label:"thighRight",x:63.25, y:-128.75}),track.push({frame:53,label:"kneeRight",x:13.6, y:-114.15}),track.push({frame:53,label:"legRight",x:-54.25, y:-101.35}),track.push({frame:53,label:"feetRight",x:-107.35, y:-118.8}),track.push({frame:53,label:"body",x:198.55, y:-207.1}),track.push({frame:53,label:"shoulderLeft",x:246.4, y:-210.25}),track.push({frame:53,label:"armLeft",x:296.55, y:-229}),track.push({frame:53,label:"handLeft",x:357.9, y:-292.9}),track.push({frame:53,label:"shoulderRight",x:180.25, y:-281.1}),track.push({frame:53,label:"armRight",x:190.3, y:-321.05}),track.push({frame:53,label:"handRight",x:213.9, y:-365.8}),track.push({frame:53,label:"head",x:238.35, y:-279.15})
track.push({frame:54,label:"waist",x:163.85, y:-108.95}),track.push({frame:54,label:"thighLeft",x:103.65, y:-68.1}),track.push({frame:54,label:"kneeLeft",x:34.95, y:-45.05}),track.push({frame:54,label:"legLeft",x:-4.9, y:-22}),track.push({frame:54,label:"feetLeft",x:-60.55, y:-31.15}),track.push({frame:54,label:"thighRight",x:87.75, y:-112.4}),track.push({frame:54,label:"kneeRight",x:36.3, y:-103.65}),track.push({frame:54,label:"legRight",x:-33.15, y:-102}),track.push({frame:54,label:"feetRight",x:-81.3, y:-130.85}),track.push({frame:54,label:"body",x:235.55, y:-162.75}),track.push({frame:54,label:"shoulderLeft",x:283.1, y:-156.1}),track.push({frame:54,label:"armLeft",x:336, y:-164.3}),track.push({frame:54,label:"handLeft",x:409.1, y:-214.3}),track.push({frame:54,label:"shoulderRight",x:232.75, y:-238.85}),track.push({frame:54,label:"armRight",x:250.75, y:-275.95}),track.push({frame:54,label:"handRight",x:282.95, y:-315}),track.push({frame:54,label:"head",x:289.2, y:-225.25})
track.push({frame:55,label:"waist",x:179.15, y:-76.75}),track.push({frame:55,label:"thighLeft",x:112.6, y:-49.3}),track.push({frame:55,label:"kneeLeft",x:39.7, y:-38.95}),track.push({frame:55,label:"legLeft",x:-2.55, y:-20.8}),track.push({frame:55,label:"feetLeft",x:-54.5, y:-37.4}),track.push({frame:55,label:"thighRight",x:108.35, y:-92}),track.push({frame:55,label:"kneeRight",x:55.8, y:-89.35}),track.push({frame:55,label:"legRight",x:-13.4, y:-99.05}),track.push({frame:55,label:"feetRight",x:-54.1, y:-138}),track.push({frame:55,label:"body",x:262.85, y:-111.7}),track.push({frame:55,label:"shoulderLeft",x:308.1, y:-95.55}),track.push({frame:55,label:"armLeft",x:361.45, y:-92.8}),track.push({frame:55,label:"handLeft",x:443.25, y:-126.9}),track.push({frame:55,label:"shoulderRight",x:275.6, y:-186.9}),track.push({frame:55,label:"armRight",x:300.75, y:-219.5}),track.push({frame:55,label:"handRight",x:340.3, y:-251.15}),track.push({frame:55,label:"head",x:328.05, y:-162.05})
track.push({frame:56,label:"waist",x:188.5, y:-42.9}),track.push({frame:56,label:"thighLeft",x:118.1, y:-29.8}),track.push({frame:56,label:"kneeLeft",x:43.6, y:-32.8}),track.push({frame:56,label:"legLeft",x:-0.7, y:-19.95}),track.push({frame:56,label:"feetLeft",x:-47.75, y:-42.55}),track.push({frame:56,label:"thighRight",x:124.65, y:-68.85}),track.push({frame:56,label:"kneeRight",x:71.75, y:-72.35}),track.push({frame:56,label:"legRight",x:4.6, y:-93.3}),track.push({frame:56,label:"feetRight",x:-26.6, y:-140.5}),track.push({frame:56,label:"body",x:279.25, y:-56.05}),track.push({frame:56,label:"shoulderLeft",x:320.2, y:-31.05}),track.push({frame:56,label:"armLeft",x:371.95, y:-17.45}),track.push({frame:56,label:"handLeft",x:458.95, y:-34.2}),track.push({frame:56,label:"shoulderRight",x:307, y:-127}),track.push({frame:56,label:"armRight",x:338.35, y:-153.85}),track.push({frame:56,label:"handRight",x:383.35, y:-176.75}),track.push({frame:56,label:"head",x:353.3, y:-92.1})
track.push({frame:57,label:"waist",x:188.55, y:-42.85}),track.push({frame:57,label:"thighLeft",x:118.1, y:-29.75}),track.push({frame:57,label:"kneeLeft",x:43.55, y:-32.7}),track.push({frame:57,label:"legLeft",x:-0.65, y:-19.9}),track.push({frame:57,label:"feetLeft",x:-47.7, y:-42.55}),track.push({frame:57,label:"thighRight",x:124.05, y:-67.1}),track.push({frame:57,label:"kneeRight",x:72.25, y:-70.35}),track.push({frame:57,label:"legRight",x:3.45, y:-82.7}),track.push({frame:57,label:"feetRight",x:-36.55, y:-122.1}),track.push({frame:57,label:"body",x:279.25, y:-56}),track.push({frame:57,label:"shoulderLeft",x:320.2, y:-31.1}),track.push({frame:57,label:"armLeft",x:371.95, y:-17.5}),track.push({frame:57,label:"handLeft",x:458.85, y:-34.2}),track.push({frame:57,label:"shoulderRight",x:319.9, y:-126.85}),track.push({frame:57,label:"armRight",x:356.25, y:-145.8}),track.push({frame:57,label:"handRight",x:405.05, y:-162.1}),track.push({frame:57,label:"head",x:358.55, y:-87.2})
track.push({frame:58,label:"waist",x:188.55, y:-42.85}),track.push({frame:58,label:"thighLeft",x:118.1, y:-29.7}),track.push({frame:58,label:"kneeLeft",x:43.55, y:-32.65}),track.push({frame:58,label:"legLeft",x:-0.65, y:-19.9}),track.push({frame:58,label:"feetLeft",x:-47.7, y:-42.5}),track.push({frame:58,label:"thighRight",x:123.5, y:-65.4}),track.push({frame:58,label:"kneeRight",x:72.9, y:-68.4}),track.push({frame:58,label:"legRight",x:3.55, y:-72.1}),track.push({frame:58,label:"feetRight",x:-43.5, y:-102.05}),track.push({frame:58,label:"body",x:279.2, y:-56}),track.push({frame:58,label:"shoulderLeft",x:320.15, y:-31.1}),track.push({frame:58,label:"armLeft",x:371.95, y:-17.5}),track.push({frame:58,label:"handLeft",x:458.8, y:-34.15}),track.push({frame:58,label:"shoulderRight",x:333.6, y:-123.9}),track.push({frame:58,label:"armRight",x:372.95, y:-134}),track.push({frame:58,label:"handRight",x:424.55, y:-143.1}),track.push({frame:58,label:"head",x:363.15, y:-81.55})
track.push({frame:59,label:"waist",x:188.6, y:-42.85}),track.push({frame:59,label:"thighLeft",x:118.1, y:-29.65}),track.push({frame:59,label:"kneeLeft",x:43.55, y:-32.55}),track.push({frame:59,label:"legLeft",x:-0.6, y:-19.85}),track.push({frame:59,label:"feetLeft",x:-47.65, y:-42.45}),track.push({frame:59,label:"thighRight",x:123, y:-63.65}),track.push({frame:59,label:"kneeRight",x:73.6, y:-66.6}),track.push({frame:59,label:"legRight",x:4.75, y:-61.7}),track.push({frame:59,label:"feetRight",x:-47, y:-81.15}),track.push({frame:59,label:"body",x:279.2, y:-55.95}),track.push({frame:59,label:"shoulderLeft",x:320.15, y:-31.1}),track.push({frame:59,label:"armLeft",x:371.95, y:-17.55}),track.push({frame:59,label:"handLeft",x:458.75, y:-34.15}),track.push({frame:59,label:"shoulderRight",x:346.75, y:-118.2}),track.push({frame:59,label:"armRight",x:386.8, y:-119.1}),track.push({frame:59,label:"handRight",x:440.05, y:-120.4}),track.push({frame:59,label:"head",x:366.85, y:-75.4})
track.push({frame:60,label:"waist",x:188.65, y:-42.8}),track.push({frame:60,label:"thighLeft",x:118.1, y:-29.55}),track.push({frame:60,label:"kneeLeft",x:43.55, y:-32.45}),track.push({frame:60,label:"legLeft",x:-0.6, y:-19.85}),track.push({frame:60,label:"feetLeft",x:-47.65, y:-42.45}),track.push({frame:60,label:"thighRight",x:122.55, y:-61.95}),track.push({frame:60,label:"kneeRight",x:74.45, y:-65}),track.push({frame:60,label:"legRight",x:7.2, y:-51.75}),track.push({frame:60,label:"feetRight",x:-47.1, y:-59.9}),track.push({frame:60,label:"body",x:279.2, y:-55.9}),track.push({frame:60,label:"shoulderLeft",x:320.15, y:-31.15}),track.push({frame:60,label:"armLeft",x:371.95, y:-17.6}),track.push({frame:60,label:"handLeft",x:458.7, y:-34.1}),track.push({frame:60,label:"shoulderRight",x:358.25, y:-110.65}),track.push({frame:60,label:"armRight",x:396.85, y:-102.5}),track.push({frame:60,label:"handRight",x:450.5, y:-95.6}),track.push({frame:60,label:"head",x:369.5, y:-69.1})
this.addAnimation(track,"jump_2",60,20,false);





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
