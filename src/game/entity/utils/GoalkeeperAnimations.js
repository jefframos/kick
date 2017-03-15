import * as PIXI from 'pixi.js';

export default class GoalkeeperAnimations{
	constructor(keeper){
        this.goalkeeper = keeper;
		this.animationsList = [];
		this.currentTimer = 0;
		this.currentAnimation = null;




let track = []
track.push({frame:1,label:'waist',x:-5.25, y:-172.5})
track.push({frame:1,label:'thighLeft',x:53.85, y:-149.2})
track.push({frame:1,label:'kneeLeft',x:98.85, y:-109.35})
track.push({frame:1,label:'legLeft',x:103.95, y:-54.9})
track.push({frame:1,label:'feetLeft',x:111.55, y:0.5})
track.push({frame:1,label:'thighRight',x:-56.9, y:-145.45})
track.push({frame:1,label:'kneeRight',x:-98.95, y:-111.65})
track.push({frame:1,label:'legRight',x:-109.15, y:-51.3})
track.push({frame:1,label:'feetRight',x:-114, y:-4.25})
track.push({frame:1,label:'body',x:-3.65, y:-253.35})
track.push({frame:1,label:'shoulderLeft',x:47.1, y:-296.9})
track.push({frame:1,label:'armLeft',x:79.6, y:-335.35})
track.push({frame:1,label:'handLeft',x:101.95, y:-386.8})
track.push({frame:1,label:'shoulderRight',x:-70.4, y:-216.1})
track.push({frame:1,label:'armRight',x:-115.05, y:-192.25})
track.push({frame:1,label:'handRight',x:-166.8, y:-172.25})
track.push({frame:1,label:'head',x:-4.25, y:-343.25})
track.push({frame:2,label:'waist',x:-1.65, y:-170.8})
track.push({frame:2,label:'thighLeft',x:57.7, y:-149})
track.push({frame:2,label:'kneeLeft',x:102.45, y:-108.8})
track.push({frame:2,label:'legLeft',x:104.05, y:-54.3})
track.push({frame:2,label:'feetLeft',x:111.7, y:0.95})
track.push({frame:2,label:'thighRight',x:-52.95, y:-144.7})
track.push({frame:2,label:'kneeRight',x:-94.45, y:-110.6})
track.push({frame:2,label:'legRight',x:-107.15, y:-50.9})
track.push({frame:2,label:'feetRight',x:-114.15, y:-3.95})
track.push({frame:2,label:'body',x:1.75, y:-252.85})
track.push({frame:2,label:'shoulderLeft',x:55.85, y:-291.65})
track.push({frame:2,label:'armLeft',x:92.6, y:-326.05})
track.push({frame:2,label:'handLeft',x:122.3, y:-373.45})
track.push({frame:2,label:'shoulderRight',x:-69.65, y:-224.3})
track.push({frame:2,label:'armRight',x:-117.35, y:-207.55})
track.push({frame:2,label:'handRight',x:-171.3, y:-195.7})
track.push({frame:2,label:'head',x:2.9, y:-343.4})
track.push({frame:3,label:'waist',x:1.8, y:-168.95})
track.push({frame:3,label:'thighLeft',x:61.5, y:-148.75})
track.push({frame:3,label:'kneeLeft',x:106.25, y:-108.45})
track.push({frame:3,label:'legLeft',x:104.65, y:-54.2})
track.push({frame:3,label:'feetLeft',x:111.75, y:1})
track.push({frame:3,label:'thighRight',x:-49.05, y:-143.9})
track.push({frame:3,label:'kneeRight',x:-89.9, y:-109.5})
track.push({frame:3,label:'legRight',x:-105.25, y:-50.5})
track.push({frame:3,label:'feetRight',x:-114.2, y:-3.8})
track.push({frame:3,label:'body',x:7.3, y:-252.25})
track.push({frame:3,label:'shoulderLeft',x:64.3, y:-286})
track.push({frame:3,label:'armLeft',x:104.7, y:-315.8})
track.push({frame:3,label:'handLeft',x:141.05, y:-358.3})
track.push({frame:3,label:'shoulderRight',x:-67.9, y:-233.45})
track.push({frame:3,label:'armRight',x:-117.5, y:-224.25})
track.push({frame:3,label:'handRight',x:-172.4, y:-220.8})
track.push({frame:3,label:'head',x:10.1, y:-343.4})
track.push({frame:4,label:'waist',x:5.4, y:-166.95})
track.push({frame:4,label:'thighLeft',x:65.2, y:-148.45})
track.push({frame:4,label:'kneeLeft',x:109.85, y:-107.95})
track.push({frame:4,label:'legLeft',x:104.85, y:-54.05})
track.push({frame:4,label:'feetLeft',x:111.75, y:1})
track.push({frame:4,label:'thighRight',x:-45.25, y:-142.95})
track.push({frame:4,label:'kneeRight',x:-85.45, y:-108.25})
track.push({frame:4,label:'legRight',x:-103.4, y:-50.15})
track.push({frame:4,label:'feetRight',x:-114.25, y:-3.75})
track.push({frame:4,label:'body',x:12.85, y:-251.55})
track.push({frame:4,label:'shoulderLeft',x:72.25, y:-279.95})
track.push({frame:4,label:'armLeft',x:115.65, y:-304.9})
track.push({frame:4,label:'handLeft',x:157.9, y:-341.35})
track.push({frame:4,label:'shoulderRight',x:-64.8, y:-243.45})
track.push({frame:4,label:'armRight',x:-115.25, y:-241.95})
track.push({frame:4,label:'handRight',x:-169.7, y:-246.65})
track.push({frame:4,label:'head',x:17.35, y:-343.25})
track.push({frame:5,label:'waist',x:8.85, y:-165})
track.push({frame:5,label:'thighLeft',x:68.7, y:-148.1})
track.push({frame:5,label:'kneeLeft',x:113.15, y:-107.25})
track.push({frame:5,label:'legLeft',x:104.75, y:-53.95})
track.push({frame:5,label:'feetLeft',x:111.75, y:0.85})
track.push({frame:5,label:'thighRight',x:-41.45, y:-141.85})
track.push({frame:5,label:'kneeRight',x:-80.95, y:-106.8})
track.push({frame:5,label:'legRight',x:-101.15, y:-49.6})
track.push({frame:5,label:'feetRight',x:-114.3, y:-3.75})
track.push({frame:5,label:'body',x:18.35, y:-250.65})
track.push({frame:5,label:'shoulderLeft',x:79.7, y:-273.55})
track.push({frame:5,label:'armLeft',x:125.65, y:-293.3})
track.push({frame:5,label:'handLeft',x:172.75, y:-323.05})
track.push({frame:5,label:'shoulderRight',x:-60.1, y:-253.75})
track.push({frame:5,label:'armRight',x:-110.25, y:-259.95})
track.push({frame:5,label:'handRight',x:-163.05, y:-272.75})
track.push({frame:5,label:'head',x:24.6, y:-342.95})
track.push({frame:6,label:'waist',x:12.2, y:-162.85})
track.push({frame:6,label:'thighLeft',x:72.15, y:-147.5})
track.push({frame:6,label:'kneeLeft',x:116.2, y:-106.15})
track.push({frame:6,label:'legLeft',x:104.2, y:-53.75})
track.push({frame:6,label:'feetLeft',x:111.7, y:0.9})
track.push({frame:6,label:'thighRight',x:-37.7, y:-140.65})
track.push({frame:6,label:'kneeRight',x:-76.45, y:-105.25})
track.push({frame:6,label:'legRight',x:-98.95, y:-49})
track.push({frame:6,label:'feetRight',x:-114.25, y:-3.8})
track.push({frame:6,label:'body',x:23.85, y:-249.7})
track.push({frame:6,label:'shoulderLeft',x:86.65, y:-267})
track.push({frame:6,label:'armLeft',x:134.45, y:-281.3})
track.push({frame:6,label:'handLeft',x:185.45, y:-303.65})
track.push({frame:6,label:'shoulderRight',x:-53.85, y:-263.8})
track.push({frame:6,label:'armRight',x:-102.4, y:-277.6})
track.push({frame:6,label:'handRight',x:-152.35, y:-298.15})
track.push({frame:6,label:'head',x:31.85, y:-342.45})
track.push({frame:7,label:'waist',x:15.45, y:-160.75})
track.push({frame:7,label:'thighLeft',x:75.4, y:-146.8})
track.push({frame:7,label:'kneeLeft',x:118.95, y:-104.85})
track.push({frame:7,label:'legLeft',x:103.45, y:-53.55})
track.push({frame:7,label:'feetLeft',x:111.65, y:0.85})
track.push({frame:7,label:'thighRight',x:-34.05, y:-139.45})
track.push({frame:7,label:'kneeRight',x:-72.05, y:-103.65})
track.push({frame:7,label:'legRight',x:-96.85, y:-48.5})
track.push({frame:7,label:'feetRight',x:-114.1, y:-3.9})
track.push({frame:7,label:'body',x:29.3, y:-248.6})
track.push({frame:7,label:'shoulderLeft',x:93.05, y:-260.25})
track.push({frame:7,label:'armLeft',x:142.15, y:-268.9})
track.push({frame:7,label:'handLeft',x:195.8, y:-283.45})
track.push({frame:7,label:'shoulderRight',x:-46.1, y:-273.15})
track.push({frame:7,label:'armRight',x:-91.95, y:-294.25})
track.push({frame:7,label:'handRight',x:-137.95, y:-321.8})
track.push({frame:7,label:'head',x:39.1, y:-341.9})
track.push({frame:8,label:'waist',x:18.65, y:-158.5})
track.push({frame:8,label:'thighLeft',x:78.6, y:-146.2})
track.push({frame:8,label:'kneeLeft',x:121.8, y:-103.85})
track.push({frame:8,label:'legLeft',x:103.1, y:-53.75})
track.push({frame:8,label:'feetLeft',x:111.5, y:0.45})
track.push({frame:8,label:'thighRight',x:-30.45, y:-138.05})
track.push({frame:8,label:'kneeRight',x:-67.8, y:-101.95})
track.push({frame:8,label:'legRight',x:-94.85, y:-48.05})
track.push({frame:8,label:'feetRight',x:-114, y:-4.1})
track.push({frame:8,label:'body',x:34.75, y:-247.45})
track.push({frame:8,label:'shoulderLeft',x:98.95, y:-253.45})
track.push({frame:8,label:'armLeft',x:148.6, y:-256.4})
track.push({frame:8,label:'handLeft',x:203.7, y:-262.7})
track.push({frame:8,label:'shoulderRight',x:-37.15, y:-281.45})
track.push({frame:8,label:'armRight',x:-79.3, y:-309.25})
track.push({frame:8,label:'handRight',x:-120.4, y:-343.15})
track.push({frame:8,label:'head',x:46.3, y:-341.05})
track.push({frame:9,label:'waist',x:18.7, y:-155.3})
track.push({frame:9,label:'thighLeft',x:79.45, y:-144.8})
track.push({frame:9,label:'kneeLeft',x:123.2, y:-102.2})
track.push({frame:9,label:'legLeft',x:101.85, y:-53.25})
track.push({frame:9,label:'feetLeft',x:111.45, y:0.65})
track.push({frame:9,label:'thighRight',x:-29.25, y:-136.95})
track.push({frame:9,label:'kneeRight',x:-65.75, y:-100.6})
track.push({frame:9,label:'legRight',x:-93.65, y:-47.4})
track.push({frame:9,label:'feetRight',x:-113.95, y:-3.6})
track.push({frame:9,label:'body',x:35.8, y:-244.85})
track.push({frame:9,label:'shoulderLeft',x:101.45, y:-248.05})
track.push({frame:9,label:'armLeft',x:151.05, y:-248.65})
track.push({frame:9,label:'handLeft',x:205.05, y:-262.2})
track.push({frame:9,label:'shoulderRight',x:-33.4, y:-283.15})
track.push({frame:9,label:'armRight',x:-71.9, y:-315.1})
track.push({frame:9,label:'handRight',x:-103.1, y:-360.45})
track.push({frame:9,label:'head',x:45.75, y:-337.5})
track.push({frame:10,label:'waist',x:18.75, y:-152.2})
track.push({frame:10,label:'thighLeft',x:80.2, y:-143.45})
track.push({frame:10,label:'kneeLeft',x:124.5, y:-100.65})
track.push({frame:10,label:'legLeft',x:100.45, y:-52.95})
track.push({frame:10,label:'feetLeft',x:111.35, y:0.6})
track.push({frame:10,label:'thighRight',x:-28.15, y:-135.95})
track.push({frame:10,label:'kneeRight',x:-63.7, y:-99.35})
track.push({frame:10,label:'legRight',x:-92.5, y:-46.8})
track.push({frame:10,label:'feetRight',x:-113.9, y:-3.25})
track.push({frame:10,label:'body',x:36.8, y:-242.25})
track.push({frame:10,label:'shoulderLeft',x:103.8, y:-242.85})
track.push({frame:10,label:'armLeft',x:153.3, y:-240.9})
track.push({frame:10,label:'handLeft',x:205.05, y:-261.45})
track.push({frame:10,label:'shoulderRight',x:-29.35, y:-284.95})
track.push({frame:10,label:'armRight',x:-63.8, y:-320.6})
track.push({frame:10,label:'handRight',x:-82.05, y:-374.3})
track.push({frame:10,label:'head',x:45.15, y:-333.95})
track.push({frame:11,label:'waist',x:18.75, y:-148.95})
track.push({frame:11,label:'thighLeft',x:80.85, y:-142.15})
track.push({frame:11,label:'kneeLeft',x:125.6, y:-99.05})
track.push({frame:11,label:'legLeft',x:99, y:-52.7})
track.push({frame:11,label:'feetLeft',x:111.1, y:0.5})
track.push({frame:11,label:'thighRight',x:-27.1, y:-135.05})
track.push({frame:11,label:'kneeRight',x:-61.65, y:-98.25})
track.push({frame:11,label:'legRight',x:-91.35, y:-46.4})
track.push({frame:11,label:'feetRight',x:-113.75, y:-2.9})
track.push({frame:11,label:'body',x:37.75, y:-239.7})
track.push({frame:11,label:'shoulderLeft',x:106.1, y:-237.65})
track.push({frame:11,label:'armLeft',x:155.3, y:-233.3})
track.push({frame:11,label:'handLeft',x:203.85, y:-260.4})
track.push({frame:11,label:'shoulderRight',x:-24.85, y:-286.6})
track.push({frame:11,label:'armRight',x:-54.95, y:-325.5})
track.push({frame:11,label:'handRight',x:-58.2, y:-383.7})
track.push({frame:11,label:'head',x:44.6, y:-330.25})
track.push({frame:12,label:'waist',x:18.7, y:-145.8})
track.push({frame:12,label:'thighLeft',x:81.4, y:-140.75})
track.push({frame:12,label:'kneeLeft',x:126.65, y:-97.45})
track.push({frame:12,label:'legLeft',x:97.6, y:-52.6})
track.push({frame:12,label:'feetLeft',x:110.8, y:0.25})
track.push({frame:12,label:'thighRight',x:-26.1, y:-134.3})
track.push({frame:12,label:'kneeRight',x:-59.65, y:-97.25})
track.push({frame:12,label:'legRight',x:-90.15, y:-46.1})
track.push({frame:12,label:'feetRight',x:-113.5, y:-2.75})
track.push({frame:12,label:'body',x:38.6, y:-237.2})
track.push({frame:12,label:'shoulderLeft',x:108.15, y:-232.55})
track.push({frame:12,label:'armLeft',x:157.2, y:-225.95})
track.push({frame:12,label:'handLeft',x:201.45, y:-258.85})
track.push({frame:12,label:'shoulderRight',x:-20.05, y:-287.95})
track.push({frame:12,label:'armRight',x:-45.5, y:-329.6})
track.push({frame:12,label:'handRight',x:-32.95, y:-387.95})
track.push({frame:12,label:'head',x:43.95, y:-326.6})
track.push({frame:13,label:'waist',x:18.6, y:-142.65})
track.push({frame:13,label:'thighLeft',x:81.8, y:-139.45})
track.push({frame:13,label:'kneeLeft',x:127.55, y:-95.85})
track.push({frame:13,label:'legLeft',x:96.05, y:-52.65})
track.push({frame:13,label:'feetLeft',x:110.5, y:-0.15})
track.push({frame:13,label:'thighRight',x:-25.05, y:-133.55})
track.push({frame:13,label:'kneeRight',x:-57.65, y:-96.4})
track.push({frame:13,label:'legRight',x:-89, y:-45.8})
track.push({frame:13,label:'feetRight',x:-113.15, y:-2.65})
track.push({frame:13,label:'body',x:39.35, y:-234.6})
track.push({frame:13,label:'shoulderLeft',x:110, y:-227.55})
track.push({frame:13,label:'armLeft',x:158.9, y:-218.65})
track.push({frame:13,label:'handLeft',x:198, y:-256.8})
track.push({frame:13,label:'shoulderRight',x:-15.15, y:-288.9})
track.push({frame:13,label:'armRight',x:-35.6, y:-332.8})
track.push({frame:13,label:'handRight',x:-7.55, y:-386.9})
track.push({frame:13,label:'head',x:43.2, y:-322.95})

this.addAnimation(track, 'static1', 13, 1)

track = []
track.push({frame:15,label:"waist",x:15.3, y:-150.75})
track.push({frame:15,label:"thighLeft",x:78.85, y:-142.3})
track.push({frame:15,label:"kneeLeft",x:125.25, y:-101})
track.push({frame:15,label:"legLeft",x:100.8, y:-52.95})
track.push({frame:15,label:"feetLeft",x:111.35, y:0.5})
track.push({frame:15,label:"thighRight",x:-29.5, y:-136.1})
track.push({frame:15,label:"kneeRight",x:-64.4, y:-99.05})
track.push({frame:15,label:"legRight",x:-93.1, y:-46.7})
track.push({frame:15,label:"feetRight",x:-113.9, y:-2.75})
track.push({frame:15,label:"body",x:38.55, y:-238.35})
track.push({frame:15,label:"shoulderLeft",x:108.3, y:-239.55})
track.push({frame:15,label:"armLeft",x:158.2, y:-240.25})
track.push({frame:15,label:"handLeft",x:197.15, y:-279.15})
track.push({frame:15,label:"shoulderRight",x:-28.75, y:-275.85})
track.push({frame:15,label:"armRight",x:-63.25, y:-310.6})
track.push({frame:15,label:"handRight",x:-68.1, y:-369.95})
track.push({frame:15,label:"head",x:48.65, y:-326.55})
track.push({frame:16,label:"waist",x:13.55, y:-154.8})
track.push({frame:16,label:"thighLeft",x:77.05, y:-143.6})
track.push({frame:16,label:"kneeLeft",x:123.55, y:-103.25})
track.push({frame:16,label:"legLeft",x:102.85, y:-53.2})
track.push({frame:16,label:"feetLeft",x:111.6, y:0.6})
track.push({frame:16,label:"thighRight",x:-31.8, y:-137.5})
track.push({frame:16,label:"kneeRight",x:-67.95, y:-100.65})
track.push({frame:16,label:"legRight",x:-95.2, y:-47.4})
track.push({frame:16,label:"feetRight",x:-114.1, y:-3.15})
track.push({frame:16,label:"body",x:37.75, y:-240.2})
track.push({frame:16,label:"shoulderLeft",x:106.7, y:-245.9})
track.push({frame:16,label:"armLeft",x:156.5, y:-251.45})
track.push({frame:16,label:"handLeft",x:195.3, y:-290.7})
track.push({frame:16,label:"shoulderRight",x:-34.15, y:-266.9})
track.push({frame:16,label:"armRight",x:-74.4, y:-295.35})
track.push({frame:16,label:"handRight",x:-95.15, y:-350.35})
track.push({frame:16,label:"head",x:51.05, y:-328.15})
track.push({frame:17,label:"waist",x:11.55, y:-158.85})
track.push({frame:17,label:"thighLeft",x:74.95, y:-144.75})
track.push({frame:17,label:"kneeLeft",x:121.45, y:-105.15})
track.push({frame:17,label:"legLeft",x:104.6, y:-53.35})
track.push({frame:17,label:"feetLeft",x:111.85, y:0.7})
track.push({frame:17,label:"thighRight",x:-34.2, y:-139})
track.push({frame:17,label:"kneeRight",x:-71.4, y:-102.1})
track.push({frame:17,label:"legRight",x:-97, y:-48})
track.push({frame:17,label:"feetRight",x:-114.2, y:-3.55})
track.push({frame:17,label:"body",x:36.75, y:-242})
track.push({frame:17,label:"shoulderLeft",x:104.55, y:-252.25})
track.push({frame:17,label:"armLeft",x:153.75, y:-262.55})
track.push({frame:17,label:"handLeft",x:192.4, y:-302.2})
track.push({frame:17,label:"shoulderRight",x:-37.8, y:-257.9})
track.push({frame:17,label:"armRight",x:-82.55, y:-279.2})
track.push({frame:17,label:"handRight",x:-117.25, y:-325.65})
track.push({frame:17,label:"head",x:53.05, y:-329.7})
track.push({frame:18,label:"waist",x:9.5, y:-162.8})
track.push({frame:18,label:"thighLeft",x:72.6, y:-145.9})
track.push({frame:18,label:"kneeLeft",x:119.1, y:-107.05})
track.push({frame:18,label:"legLeft",x:106.15, y:-53.85})
track.push({frame:18,label:"feetLeft",x:111.9, y:0.4})
track.push({frame:18,label:"thighRight",x:-36.75, y:-140.75})
track.push({frame:18,label:"kneeRight",x:-75.05, y:-103.9})
track.push({frame:18,label:"legRight",x:-99.05, y:-48.95})
track.push({frame:18,label:"feetRight",x:-114.1, y:-4.1})
track.push({frame:18,label:"body",x:35.45, y:-243.95})
track.push({frame:18,label:"shoulderLeft",x:101.95, y:-258.45})
track.push({frame:18,label:"armLeft",x:150.05, y:-273.55})
track.push({frame:18,label:"handLeft",x:188.5, y:-313.5})
track.push({frame:18,label:"shoulderRight",x:-39.85, y:-250.1})
track.push({frame:18,label:"armRight",x:-87.85, y:-263.5})
track.push({frame:18,label:"handRight",x:-133.45, y:-298.15})
track.push({frame:18,label:"head",x:54.9, y:-331.1})
track.push({frame:19,label:"waist",x:7.5, y:-164.25})
track.push({frame:19,label:"thighLeft",x:70.15, y:-146.5})
track.push({frame:19,label:"kneeLeft",x:116.4, y:-107.6})
track.push({frame:19,label:"legLeft",x:106, y:-53.75})
track.push({frame:19,label:"feetLeft",x:111.95, y:0.65})
track.push({frame:19,label:"thighRight",x:-39.6, y:-141.7})
track.push({frame:19,label:"kneeRight",x:-78.45, y:-105.25})
track.push({frame:19,label:"legRight",x:-100.6, y:-49.3})
track.push({frame:19,label:"feetRight",x:-114.15, y:-4.05})
track.push({frame:19,label:"body",x:29.9, y:-245.8})
track.push({frame:19,label:"shoulderLeft",x:95.1, y:-264.85})
track.push({frame:19,label:"armLeft",x:141.9, y:-283.8})
track.push({frame:19,label:"handLeft",x:178.2, y:-325.7})
track.push({frame:19,label:"shoulderRight",x:-45.8, y:-245.55})
track.push({frame:19,label:"armRight",x:-95.05, y:-253.65})
track.push({frame:19,label:"handRight",x:-145, y:-281.25})
track.push({frame:19,label:"head",x:46.65, y:-333.6})
track.push({frame:20,label:"waist",x:5.45, y:-165.7})
track.push({frame:20,label:"thighLeft",x:67.6, y:-147.05})
track.push({frame:20,label:"kneeLeft",x:113.65, y:-107.95})
track.push({frame:20,label:"legLeft",x:105.8, y:-53.8})
track.push({frame:20,label:"feetLeft",x:112, y:0.7})
track.push({frame:20,label:"thighRight",x:-42.45, y:-142.55})
track.push({frame:20,label:"kneeRight",x:-81.85, y:-106.5})
track.push({frame:20,label:"legRight",x:-102.15, y:-49.7})
track.push({frame:20,label:"feetRight",x:-114.15, y:-4})
track.push({frame:20,label:"body",x:24.35, y:-247.45})
track.push({frame:20,label:"shoulderLeft",x:87.9, y:-270.95})
track.push({frame:20,label:"armLeft",x:132.95, y:-293.65})
track.push({frame:20,label:"handLeft",x:167.25, y:-337.45})
track.push({frame:20,label:"shoulderRight",x:-51.15, y:-240.75})
track.push({frame:20,label:"armRight",x:-101.15, y:-243.5})
track.push({frame:20,label:"handRight",x:-154.3, y:-263.45})
track.push({frame:20,label:"head",x:38.2, y:-335.9})
track.push({frame:21,label:"waist",x:3.35, y:-167.15})
track.push({frame:21,label:"thighLeft",x:64.95, y:-147.6})
track.push({frame:21,label:"kneeLeft",x:110.9, y:-108.45})
track.push({frame:21,label:"legLeft",x:105.7, y:-53.95})
track.push({frame:21,label:"feetLeft",x:111.95, y:0.85})
track.push({frame:21,label:"thighRight",x:-45.3, y:-143.3})
track.push({frame:21,label:"kneeRight",x:-85.3, y:-107.75})
track.push({frame:21,label:"legRight",x:-103.6, y:-50.05})
track.push({frame:21,label:"feetRight",x:-114.2, y:-3.95})
track.push({frame:21,label:"body",x:18.75, y:-248.95})
track.push({frame:21,label:"shoulderLeft",x:80.35, y:-276.8})
track.push({frame:21,label:"armLeft",x:123.45, y:-303.05})
track.push({frame:21,label:"handLeft",x:155.5, y:-348.65})
track.push({frame:21,label:"shoulderRight",x:-56, y:-235.8})
track.push({frame:21,label:"armRight",x:-106.05, y:-233.15})
track.push({frame:21,label:"handRight",x:-161.35, y:-245.2})
track.push({frame:21,label:"head",x:29.8, y:-337.85})
track.push({frame:22,label:"waist",x:1.25, y:-168.55})
track.push({frame:22,label:"thighLeft",x:62.3, y:-148.05})
track.push({frame:22,label:"kneeLeft",x:107.95, y:-108.7})
track.push({frame:22,label:"legLeft",x:105.4, y:-54.05})
track.push({frame:22,label:"feetLeft",x:111.9, y:0.9})
track.push({frame:22,label:"thighRight",x:-48.2, y:-144})
track.push({frame:22,label:"kneeRight",x:-88.7, y:-108.85})
track.push({frame:22,label:"legRight",x:-105.05, y:-50.4})
track.push({frame:22,label:"feetRight",x:-114.2, y:-3.95})
track.push({frame:22,label:"body",x:13.15, y:-250.3})
track.push({frame:22,label:"shoulderLeft",x:72.5, y:-282.35})
track.push({frame:22,label:"armLeft",x:113.3, y:-311.95})
track.push({frame:22,label:"handLeft",x:142.95, y:-359.2})
track.push({frame:22,label:"shoulderRight",x:-60.3, y:-230.85})
track.push({frame:22,label:"armRight",x:-109.95, y:-222.8})
track.push({frame:22,label:"handRight",x:-166.1, y:-226.6})
track.push({frame:22,label:"head",x:21.3, y:-339.6})
track.push({frame:23,label:"waist",x:-0.85, y:-169.9})
track.push({frame:23,label:"thighLeft",x:59.5, y:-148.45})
track.push({frame:23,label:"kneeLeft",x:105, y:-108.9})
track.push({frame:23,label:"legLeft",x:104.9, y:-54.15})
track.push({frame:23,label:"feetLeft",x:111.85, y:0.9})
track.push({frame:23,label:"thighRight",x:-51.1, y:-144.55})
track.push({frame:23,label:"kneeRight",x:-92.15, y:-109.85})
track.push({frame:23,label:"legRight",x:-106.5, y:-50.75})
track.push({frame:23,label:"feetRight",x:-114.15, y:-3.95})
track.push({frame:23,label:"body",x:7.5, y:-251.5})
track.push({frame:23,label:"shoulderLeft",x:64.3, y:-287.55})
track.push({frame:23,label:"armLeft",x:102.55, y:-320.35})
track.push({frame:23,label:"handLeft",x:129.9, y:-369.15})
track.push({frame:23,label:"shoulderRight",x:-64.2, y:-225.9})
track.push({frame:23,label:"armRight",x:-112.7, y:-212.5})
track.push({frame:23,label:"handRight",x:-168.6, y:-208.15})
track.push({frame:23,label:"head",x:12.75, y:-341.15})
track.push({frame:24,label:"waist",x:-3.05, y:-171.25})
track.push({frame:24,label:"thighLeft",x:56.75, y:-148.9})
track.push({frame:24,label:"kneeLeft",x:101.9, y:-109.2})
track.push({frame:24,label:"legLeft",x:104.4, y:-54.45})
track.push({frame:24,label:"feetLeft",x:111.7, y:0.75})
track.push({frame:24,label:"thighRight",x:-54, y:-145.05})
track.push({frame:24,label:"kneeRight",x:-95.55, y:-110.8})
track.push({frame:24,label:"legRight",x:-107.8, y:-51.05})
track.push({frame:24,label:"feetRight",x:-114.1, y:-4.1})
track.push({frame:24,label:"body",x:1.85, y:-252.5})
track.push({frame:24,label:"shoulderLeft",x:55.85, y:-292.5})
track.push({frame:24,label:"armLeft",x:91.3, y:-328.25})
track.push({frame:24,label:"handLeft",x:116.05, y:-378.45})
track.push({frame:24,label:"shoulderRight",x:-67.55, y:-220.95})
track.push({frame:24,label:"armRight",x:-114.45, y:-202.35})
track.push({frame:24,label:"handRight",x:-168.85, y:-190.15})
track.push({frame:24,label:"head",x:4.3, y:-342.3})
track.push({frame:25,label:"waist",x:-5.3, y:-172.5})
track.push({frame:25,label:"thighLeft",x:53.9, y:-149.25})
track.push({frame:25,label:"kneeLeft",x:98.8, y:-109.35})
track.push({frame:25,label:"legLeft",x:103.9, y:-54.85})
track.push({frame:25,label:"feetLeft",x:111.5, y:0.45})
track.push({frame:25,label:"thighRight",x:-56.85, y:-145.45})
track.push({frame:25,label:"kneeRight",x:-98.95, y:-111.6})
track.push({frame:25,label:"legRight",x:-109.15, y:-51.25})
track.push({frame:25,label:"feetRight",x:-114, y:-4.2})
track.push({frame:25,label:"body",x:-3.75, y:-253.3})
track.push({frame:25,label:"shoulderLeft",x:47.05, y:-296.95})
track.push({frame:25,label:"armLeft",x:79.5, y:-335.45})
track.push({frame:25,label:"handLeft",x:101.7, y:-386.95})
track.push({frame:25,label:"shoulderRight",x:-70.45, y:-216.15})
track.push({frame:25,label:"armRight",x:-115.15, y:-192.5})
track.push({frame:25,label:"handRight",x:-167, y:-172.6})
track.push({frame:25,label:"head",x:-4.2, y:-343.2})


this.addAnimation(track, 'static2', 10, 1, false)

    this.play('static2')

    setTimeout(function() {
        this.play('static1')
    }.bind(this), 2500);

    setTimeout(function() {
        this.play('static2')
    }.bind(this), 5000);

	}
	addAnimation(frames, label, totFrames, speed, loop = true){
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
			speed:speed,
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
	play(label){
        if(this.currentAnimation && this.currentAnimation.label == label){
            return
        }
        for (var i = this.animationsList.length - 1; i >= 0; i--) {
            if(this.animationsList[i].label == label){
                    this.currentAnimation = this.animationsList[i];
                    this.currentFrameID = 0
                    this.currentTimer = 0
                break
            }
        }

        this.stopped = false;
        console.log(this.currentAnimation);
	}

    stopAnimation(){
        this.stopped = true;
    }
    calcFrame(currentFrame, smooth = 1, frameID = 0){
        let nextFrameID = frameID + 1
        if(nextFrameID >= this.currentAnimation.frames.length-1){
            if(!this.currentAnimation.loop){
                this.stopAnimation();
                return currentFrame
            }
            nextFrameID = 0;
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

        if(!this.currentAnimation || this.stopped){
            return
        }
        // let currentFrame = [];
        // let nextFrame = [];
        // console.log('updateFrame');

        this.currentFrameID += delta * 3;
        if(this.currentFrameID >= this.currentAnimation.frames.length-1){
            this.currentFrameID = 0;
        }

        // let next = this.currentFrameID + 1;

        // console.log(this.currentFrameID);
        let cFrame = Math.floor(this.currentFrameID)
        let nTime = this.currentFrameID - Math.floor(this.currentFrameID)
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
