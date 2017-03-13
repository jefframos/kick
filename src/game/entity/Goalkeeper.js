import * as PIXI from 'pixi.js';
import config  from '../../config';
import utils  from '../../utils';
export default class Goalkeeper extends PIXI.Container {

    constructor(game, radius = 20) {
        super();
        this.game = game;
        this.radius = radius;

        this.container = new PIXI.Container();
        this.addChild(this.container);


    }
    build(radius = 20, bounds = {height:400}){
        radius = Math.floor(radius/4)*4;
        this.radius = radius;
        this.externalRadius = this.radius*1;
        bounds.height = Math.floor(bounds.height/4)*4;
        this.bounds = bounds


        this.drawCounter = 20

        // for (var i = this.container.children.length - 1; i >= 0; i--) {
        //     this.container.removeChild(this.container.getChildAt(i));
        // }

        // this.container = new PIXI.Container();
        // this.addChild(this.container);

        if(this.shadow && this.shadow.parent){
            this.shadow.parent.removeChild(this.shadow)
        }
        this.shadow = new PIXI.Graphics();
        this.shadow.beginFill(0x0000);
        this.shadow.drawCircle(0,this.radius,this.radius);
        this.container.addChild(this.shadow);
        this.shadow.alpha = 0.5;
        this.shadow.scale.y = 0.5


        this.spriteContainer = new PIXI.Container();
        this.container.addChild(this.spriteContainer);

        // if(this.radius > 20){

            this.bodyParts = [];

        this.testParts = [];
        let tempPart = {}
        tempPart = {
        label:"head",
        x:-4.9,
        y:-353.65,
        width:84.4,
        height:84.4,
        radius:42.2
        }
        this.testParts.push(tempPart);
        tempPart = {
        label:"body",
        x:-8.6,
        y:-273.15,
        width:105.1,
        height:105.1,
        radius:52.55
        }
        this.testParts.push(tempPart);
        tempPart = {
        label:"shoulderLeft",
        x:51.3,
        y:-303.8,
        width:52.7,
        height:52.7,
        radius:26.35
        }
        this.testParts.push(tempPart);
        tempPart = {
        label:"armLeft",
        x:97.35,
        y:-324.25,
        width:52.7,
        height:52.7,
        radius:26.35
        }
        this.testParts.push(tempPart);
        tempPart = {
        label:"handLeft",
        x:130.6,
        y:-364,
        width:52.8,
        height:52.8,
        radius:26.4
        }
        this.testParts.push(tempPart);
        tempPart = {
        label:"waist",
        x:-8.85,
        y:-195.1,
        width:103.1,
        height:103.1,
        radius:51.55
        }
        this.testParts.push(tempPart);
        tempPart = {
        label:"thighLeft",
        x:55.15,
        y:-155.75,
        width:81.9,
        height:81.9,
        radius:40.95
        }
        this.testParts.push(tempPart);
        tempPart = {
        label:"kneeLeft",
        x:97.5,
        y:-118.55,
        width:68.5,
        height:68.5,
        radius:34.25
        }
        this.testParts.push(tempPart);
        tempPart = {
        label:"feetLeft",
        x:139.65,
        y:-21.45,
        width:55.4,
        height:55.4,
        radius:27.7
        }
        this.testParts.push(tempPart);
        tempPart = {
        label:"legLeft",
        x:116.55,
        y:-66.15,
        width:39.5,
        height:39.5,
        radius:19.75
        }
        this.testParts.push(tempPart);
        tempPart = {
        label:"handRight",
        x:-154.5,
        y:-210.45,
        width:52.7,
        height:52.7,
        radius:26.35
        }
        this.testParts.push(tempPart);
        tempPart = {
        label:"armRight",
        x:-108.55,
        y:-230.9,
        width:52.7,
        height:52.7,
        radius:26.35
        }
        this.testParts.push(tempPart);
        tempPart = {
        label:"shoulderRight",
        x:-75.3,
        y:-270.6,
        width:52.8,
        height:52.8,
        radius:26.4
        }
        this.testParts.push(tempPart);
        tempPart = {
        label:"thighRight",
        x:-62.55,
        y:-157.05,
        width:81.9,
        height:81.9,
        radius:40.95
        }
        this.testParts.push(tempPart);
        tempPart = {
        label:"kneeRight",
        x:-98.45,
        y:-119.85,
        width:68.5,
        height:68.5,
        radius:34.25
        }
        this.testParts.push(tempPart);
        tempPart = {
        label:"feetRight",
        x:-126.5,
        y:-22.7,
        width:55.4,
        height:55.4,
        radius:27.7
        }
        this.testParts.push(tempPart);
        tempPart = {
        label:"legRight",
        x:-108.55,
        y:-67.45,
        width:39.5,
        height:39.5,
        radius:19.75
        }
        this.testParts.push(tempPart);


this.track = [];
this.track.push({frame:1,label:'waist',x:-6.8, y:-173})
this.track.push({frame:1,label:'thighLeft',x:54.4, y:-150.05})
this.track.push({frame:1,label:'kneeLeft',x:99, y:-109.85})
this.track.push({frame:1,label:'legLeft',x:104.35, y:-55.25})
this.track.push({frame:1,label:'feetLeft',x:111.55, y:0.5})
this.track.push({frame:1,label:'thighRight',x:-57.4, y:-145.5})
this.track.push({frame:1,label:'kneeRight',x:-99.4, y:-111.8})
this.track.push({frame:1,label:'legRight',x:-109.35, y:-51.2})
this.track.push({frame:1,label:'feetRight',x:-114.3, y:-4.2})
this.track.push({frame:1,label:'body',x:-5.05, y:-254.45})
this.track.push({frame:1,label:'shoulderLeft',x:47.25, y:-297.1})
this.track.push({frame:1,label:'armLeft',x:80.1, y:-335.95})
this.track.push({frame:1,label:'handLeft',x:102.05, y:-387})
this.track.push({frame:1,label:'shoulderRight',x:-70.4, y:-216.1})
this.track.push({frame:1,label:'armRight',x:-115.2, y:-192.4})
this.track.push({frame:1,label:'handRight',x:-167.2, y:-172.2})
this.track.push({frame:1,label:'head',x:-5.5, y:-344.4})
this.track.push({frame:2,label:'waist',x:-6.8, y:-170.5})
this.track.push({frame:2,label:'thighLeft',x:54.55, y:-149.7})
this.track.push({frame:2,label:'kneeLeft',x:99.05, y:-109.2})
this.track.push({frame:2,label:'legLeft',x:104.4, y:-55.1})
this.track.push({frame:2,label:'feetLeft',x:111.7, y:0.45})
this.track.push({frame:2,label:'thighRight',x:-57.75, y:-145.35})
this.track.push({frame:2,label:'kneeRight',x:-99.25, y:-111.35})
this.track.push({frame:2,label:'legRight',x:-109.45, y:-51.05})
this.track.push({frame:2,label:'feetRight',x:-114.4, y:-3.9})
this.track.push({frame:2,label:'body',x:-5.1, y:-253.8})
this.track.push({frame:2,label:'shoulderLeft',x:50.6, y:-291.45})
this.track.push({frame:2,label:'armLeft',x:88.2, y:-325.7})
this.track.push({frame:2,label:'handLeft',x:118.7, y:-371.9})
this.track.push({frame:2,label:'shoulderRight',x:-76.05, y:-225.6})
this.track.push({frame:2,label:'armRight',x:-124.4, y:-210.4})
this.track.push({frame:2,label:'handRight',x:-178.7, y:-200.15})
this.track.push({frame:2,label:'head',x:-6.1, y:-344.75})
this.track.push({frame:3,label:'waist',x:-6.8, y:-168.05})
this.track.push({frame:3,label:'thighLeft',x:54.55, y:-149.35})
this.track.push({frame:3,label:'kneeLeft',x:99.15, y:-108.6})
this.track.push({frame:3,label:'legLeft',x:104.4, y:-55})
this.track.push({frame:3,label:'feetLeft',x:111.75, y:0.45})
this.track.push({frame:3,label:'thighRight',x:-58.1, y:-145.25})
this.track.push({frame:3,label:'kneeRight',x:-99, y:-111})
this.track.push({frame:3,label:'legRight',x:-109.55, y:-51.05})
this.track.push({frame:3,label:'feetRight',x:-114.4, y:-3.7})
this.track.push({frame:3,label:'body',x:-5.1, y:-253.15})
this.track.push({frame:3,label:'shoulderLeft',x:53.55, y:-285.45})
this.track.push({frame:3,label:'armLeft',x:95.25, y:-314.6})
this.track.push({frame:3,label:'handLeft',x:133.4, y:-354.5})
this.track.push({frame:3,label:'shoulderRight',x:-80.2, y:-236.9})
this.track.push({frame:3,label:'armRight',x:-130.55, y:-230.7})
this.track.push({frame:3,label:'handRight',x:-185.4, y:-230.6})
this.track.push({frame:3,label:'head',x:-6.7, y:-345.1})
this.track.push({frame:4,label:'waist',x:-6.8, y:-165.6})
this.track.push({frame:4,label:'thighLeft',x:54.55, y:-149.05})
this.track.push({frame:4,label:'kneeLeft',x:99.15, y:-107.95})
this.track.push({frame:4,label:'legLeft',x:104.4, y:-54.9})
this.track.push({frame:4,label:'feetLeft',x:111.8, y:0.45})
this.track.push({frame:4,label:'thighRight',x:-58.4, y:-145.25})
this.track.push({frame:4,label:'kneeRight',x:-98.7, y:-110.7})
this.track.push({frame:4,label:'legRight',x:-109.5, y:-51.05})
this.track.push({frame:4,label:'feetRight',x:-114.35, y:-3.6})
this.track.push({frame:4,label:'body',x:-5.15, y:-252.5})
this.track.push({frame:4,label:'shoulderLeft',x:56.1, y:-279.2})
this.track.push({frame:4,label:'armLeft',x:101.15, y:-302.7})
this.track.push({frame:4,label:'handLeft',x:145.55, y:-335.15})
this.track.push({frame:4,label:'shoulderRight',x:-82.4, y:-249.2})
this.track.push({frame:4,label:'armRight',x:-132.9, y:-252.25})
this.track.push({frame:4,label:'handRight',x:-186.4, y:-261.9})
this.track.push({frame:4,label:'head',x:-7.25, y:-345.45})
this.track.push({frame:5,label:'waist',x:-6.8, y:-163.1})
this.track.push({frame:5,label:'thighLeft',x:54.45, y:-148.7})
this.track.push({frame:5,label:'kneeLeft',x:99.15, y:-107.4})
this.track.push({frame:5,label:'legLeft',x:104.3, y:-54.85})
this.track.push({frame:5,label:'feetLeft',x:111.8, y:0.4})
this.track.push({frame:5,label:'thighRight',x:-58.6, y:-145.25})
this.track.push({frame:5,label:'kneeRight',x:-98.25, y:-110.4})
this.track.push({frame:5,label:'legRight',x:-109.4, y:-51.1})
this.track.push({frame:5,label:'feetRight',x:-114.25, y:-3.5})
this.track.push({frame:5,label:'body',x:-5.15, y:-251.85})
this.track.push({frame:5,label:'shoulderLeft',x:58.05, y:-272.9})
this.track.push({frame:5,label:'armLeft',x:105.8, y:-290.35})
this.track.push({frame:5,label:'handLeft',x:155.1, y:-314.35})
this.track.push({frame:5,label:'shoulderRight',x:-82.15, y:-261.4})
this.track.push({frame:5,label:'armRight',x:-131.35, y:-273.55})
this.track.push({frame:5,label:'handRight',x:-181.75, y:-292.5})
this.track.push({frame:5,label:'head',x:-7.85, y:-345.75})
this.track.push({frame:6,label:'waist',x:-6.8, y:-160.65})
this.track.push({frame:6,label:'thighLeft',x:54.35, y:-148.45})
this.track.push({frame:6,label:'kneeLeft',x:99.05, y:-106.8})
this.track.push({frame:6,label:'legLeft',x:104.2, y:-54.75})
this.track.push({frame:6,label:'feetLeft',x:111.7, y:0.3})
this.track.push({frame:6,label:'thighRight',x:-58.7, y:-145.25})
this.track.push({frame:6,label:'kneeRight',x:-97.75, y:-110.15})
this.track.push({frame:6,label:'legRight',x:-109.25, y:-51.15})
this.track.push({frame:6,label:'feetRight',x:-114.05, y:-3.45})
this.track.push({frame:6,label:'body',x:-5.15, y:-251.2})
this.track.push({frame:6,label:'shoulderLeft',x:59.5, y:-266.55})
this.track.push({frame:6,label:'armLeft',x:109.1, y:-277.7})
this.track.push({frame:6,label:'handLeft',x:161.65, y:-292.6})
this.track.push({frame:6,label:'shoulderRight',x:-79.95, y:-272.35})
this.track.push({frame:6,label:'armRight',x:-126.15, y:-293.3})
this.track.push({frame:6,label:'handRight',x:-172.05, y:-320.55})
this.track.push({frame:6,label:'head',x:-8.5, y:-346.05})
this.track.push({frame:7,label:'waist',x:-6.8, y:-161.35})
this.track.push({frame:7,label:'thighLeft',x:54.4, y:-148.5})
this.track.push({frame:7,label:'kneeLeft',x:99.1, y:-106.95})
this.track.push({frame:7,label:'legLeft',x:104.25, y:-54.8})
this.track.push({frame:7,label:'feetLeft',x:111.75, y:0.35})
this.track.push({frame:7,label:'thighRight',x:-58.65, y:-145.25})
this.track.push({frame:7,label:'kneeRight',x:-97.9, y:-110.25})
this.track.push({frame:7,label:'legRight',x:-109.3, y:-51.1})
this.track.push({frame:7,label:'feetRight',x:-114.1, y:-3.45})
this.track.push({frame:7,label:'body',x:-5.15, y:-251.35})
this.track.push({frame:7,label:'shoulderLeft',x:60, y:-263.1})
this.track.push({frame:7,label:'armLeft',x:110.05, y:-272.5})
this.track.push({frame:7,label:'handLeft',x:160.7, y:-292.05})
this.track.push({frame:7,label:'shoulderRight',x:-80.55, y:-270.45})
this.track.push({frame:7,label:'armRight',x:-127.2, y:-290.4})
this.track.push({frame:7,label:'handRight',x:-170.1, y:-320.75})
this.track.push({frame:7,label:'head',x:-8.25, y:-345.95})
this.track.push({frame:8,label:'waist',x:-6.8, y:-162})
this.track.push({frame:8,label:'thighLeft',x:54.35, y:-148.6})
this.track.push({frame:8,label:'kneeLeft',x:99.1, y:-107.1})
this.track.push({frame:8,label:'legLeft',x:104.25, y:-54.8})
this.track.push({frame:8,label:'feetLeft',x:111.75, y:0.35})
this.track.push({frame:8,label:'thighRight',x:-58.65, y:-145.2})
this.track.push({frame:8,label:'kneeRight',x:-98, y:-110.3})
this.track.push({frame:8,label:'legRight',x:-109.3, y:-51.1})
this.track.push({frame:8,label:'feetRight',x:-114.2, y:-3.45})
this.track.push({frame:8,label:'body',x:-5.15, y:-251.55})
this.track.push({frame:8,label:'shoulderLeft',x:60.3, y:-259.55})
this.track.push({frame:8,label:'armLeft',x:110.75, y:-267.2})
this.track.push({frame:8,label:'handLeft',x:159.05, y:-291.15})
this.track.push({frame:8,label:'shoulderRight',x:-81.05, y:-268.5})
this.track.push({frame:8,label:'armRight',x:-128.2, y:-287.5})
this.track.push({frame:8,label:'handRight',x:-168.15, y:-320.45})
this.track.push({frame:8,label:'head',x:-8.15, y:-345.85})
this.track.push({frame:9,label:'waist',x:-6.8, y:-162.7})
this.track.push({frame:9,label:'thighLeft',x:54.4, y:-148.65})
this.track.push({frame:9,label:'kneeLeft',x:99.1, y:-107.25})
this.track.push({frame:9,label:'legLeft',x:104.3, y:-54.8})
this.track.push({frame:9,label:'feetLeft',x:111.75, y:0.35})
this.track.push({frame:9,label:'thighRight',x:-58.6, y:-145.2})
this.track.push({frame:9,label:'kneeRight',x:-98.15, y:-110.35})
this.track.push({frame:9,label:'legRight',x:-109.35, y:-51.1})
this.track.push({frame:9,label:'feetRight',x:-114.25, y:-3.45})
this.track.push({frame:9,label:'body',x:-5.15, y:-251.75})
this.track.push({frame:9,label:'shoulderLeft',x:60.45, y:-256.05})
this.track.push({frame:9,label:'armLeft',x:111.3, y:-261.8})
this.track.push({frame:9,label:'handLeft',x:156.9, y:-289.85})
this.track.push({frame:9,label:'shoulderRight',x:-81.5, y:-266.55})
this.track.push({frame:9,label:'armRight',x:-129.15, y:-284.6})
this.track.push({frame:9,label:'handRight',x:-166.1, y:-319.8})
this.track.push({frame:9,label:'head',x:-7.95, y:-345.75})
this.track.push({frame:10,label:'waist',x:-6.85, y:-163.35})
this.track.push({frame:10,label:'thighLeft',x:54.4, y:-148.75})
this.track.push({frame:10,label:'kneeLeft',x:99.1, y:-107.4})
this.track.push({frame:10,label:'legLeft',x:104.3, y:-54.8})
this.track.push({frame:10,label:'feetLeft',x:111.8, y:0.4})
this.track.push({frame:10,label:'thighRight',x:-58.6, y:-145.15})
this.track.push({frame:10,label:'kneeRight',x:-98.25, y:-110.4})
this.track.push({frame:10,label:'legRight',x:-109.4, y:-51.1})
this.track.push({frame:10,label:'feetRight',x:-114.25, y:-3.45})
this.track.push({frame:10,label:'body',x:-5.15, y:-251.95})
this.track.push({frame:10,label:'shoulderLeft',x:60.3, y:-252.45})
this.track.push({frame:10,label:'armLeft',x:111.55, y:-256.45})
this.track.push({frame:10,label:'handLeft',x:154.2, y:-288.2})
this.track.push({frame:10,label:'shoulderRight',x:-81.9, y:-264.6})
this.track.push({frame:10,label:'armRight',x:-129.95, y:-281.7})
this.track.push({frame:10,label:'handRight',x:-164.15, y:-318.9})
this.track.push({frame:10,label:'head',x:-7.85, y:-345.65})
this.track.push({frame:11,label:'waist',x:-6.85, y:-164.05})
this.track.push({frame:11,label:'thighLeft',x:54.45, y:-148.85})
this.track.push({frame:11,label:'kneeLeft',x:99.15, y:-107.55})
this.track.push({frame:11,label:'legLeft',x:104.3, y:-54.8})
this.track.push({frame:11,label:'feetLeft',x:111.8, y:0.4})
this.track.push({frame:11,label:'thighRight',x:-58.55, y:-145.15})
this.track.push({frame:11,label:'kneeRight',x:-98.4, y:-110.5})
this.track.push({frame:11,label:'legRight',x:-109.4, y:-51.05})
this.track.push({frame:11,label:'feetRight',x:-114.25, y:-3.5})
this.track.push({frame:11,label:'body',x:-5.15, y:-252.15})
this.track.push({frame:11,label:'shoulderLeft',x:60.1, y:-248.95})
this.track.push({frame:11,label:'armLeft',x:111.6, y:-251.25})
this.track.push({frame:11,label:'handLeft',x:150.95, y:-286.15})
this.track.push({frame:11,label:'shoulderRight',x:-82.15, y:-262.6})
this.track.push({frame:11,label:'armRight',x:-130.65, y:-278.8})
this.track.push({frame:11,label:'handRight',x:-162.2, y:-317.9})
this.track.push({frame:11,label:'head',x:-7.6, y:-345.55})
this.track.push({frame:12,label:'waist',x:-6.85, y:-164.75})
this.track.push({frame:12,label:'thighLeft',x:54.5, y:-148.9})
this.track.push({frame:12,label:'kneeLeft',x:99.15, y:-107.7})
this.track.push({frame:12,label:'legLeft',x:104.3, y:-54.8})
this.track.push({frame:12,label:'feetLeft',x:111.8, y:0.4})
this.track.push({frame:12,label:'thighRight',x:-58.5, y:-145.1})
this.track.push({frame:12,label:'kneeRight',x:-98.5, y:-110.55})
this.track.push({frame:12,label:'legRight',x:-109.45, y:-51.05})
this.track.push({frame:12,label:'feetRight',x:-114.3, y:-3.5})
this.track.push({frame:12,label:'body',x:-5.15, y:-252.35})
this.track.push({frame:12,label:'shoulderLeft',x:59.55, y:-245.5})
this.track.push({frame:12,label:'armLeft',x:111.45, y:-245.95})
this.track.push({frame:12,label:'handLeft',x:147.4, y:-283.8})
this.track.push({frame:12,label:'shoulderRight',x:-82.35, y:-260.65})
this.track.push({frame:12,label:'armRight',x:-131.35, y:-275.9})
this.track.push({frame:12,label:'handRight',x:-160.25, y:-316.8})
this.track.push({frame:12,label:'head',x:-7.5, y:-345.45})
this.track.push({frame:13,label:'waist',x:-6.85, y:-166.1})
this.track.push({frame:13,label:'thighLeft',x:54.5, y:-149.1})
this.track.push({frame:13,label:'kneeLeft',x:99.15, y:-108.05})
this.track.push({frame:13,label:'legLeft',x:104.35, y:-54.9})
this.track.push({frame:13,label:'feetLeft',x:111.8, y:0.45})
this.track.push({frame:13,label:'thighRight',x:-58.35, y:-145.15})
this.track.push({frame:13,label:'kneeRight',x:-98.7, y:-110.7})
this.track.push({frame:13,label:'legRight',x:-109.5, y:-51.05})
this.track.push({frame:13,label:'feetRight',x:-114.35, y:-3.55})
this.track.push({frame:13,label:'body',x:-5.15, y:-252.7})
this.track.push({frame:13,label:'shoulderLeft',x:60.15, y:-253.9})
this.track.push({frame:13,label:'armLeft',x:111.25, y:-261.85})
this.track.push({frame:13,label:'handLeft',x:145.05, y:-302.4})
this.track.push({frame:13,label:'shoulderRight',x:-82.65, y:-253.1})
this.track.push({frame:13,label:'armRight',x:-133.05, y:-261.75})
this.track.push({frame:13,label:'handRight',x:-169.85, y:-296.15})
this.track.push({frame:13,label:'head',x:-7.1, y:-345.3})
this.track.push({frame:14,label:'waist',x:-6.85, y:-167.5})
this.track.push({frame:14,label:'thighLeft',x:54.55, y:-149.3})
this.track.push({frame:14,label:'kneeLeft',x:99.1, y:-108.4})
this.track.push({frame:14,label:'legLeft',x:104.35, y:-54.95})
this.track.push({frame:14,label:'feetLeft',x:111.75, y:0.45})
this.track.push({frame:14,label:'thighRight',x:-58.2, y:-145.2})
this.track.push({frame:14,label:'kneeRight',x:-98.9, y:-110.9})
this.track.push({frame:14,label:'legRight',x:-109.5, y:-51.05})
this.track.push({frame:14,label:'feetRight',x:-114.4, y:-3.65})
this.track.push({frame:14,label:'body',x:-5.15, y:-253.05})
this.track.push({frame:14,label:'shoulderLeft',x:59.75, y:-263})
this.track.push({frame:14,label:'armLeft',x:109, y:-278.05})
this.track.push({frame:14,label:'handLeft',x:140.65, y:-321.15})
this.track.push({frame:14,label:'shoulderRight',x:-81.95, y:-245.15})
this.track.push({frame:14,label:'armRight',x:-133, y:-247.2})
this.track.push({frame:14,label:'handRight',x:-176.65, y:-273.6})
this.track.push({frame:14,label:'head',x:-6.8, y:-345.1})
this.track.push({frame:15,label:'waist',x:-6.85, y:-168.85})
this.track.push({frame:15,label:'thighLeft',x:54.55, y:-149.5})
this.track.push({frame:15,label:'kneeLeft',x:99.1, y:-108.75})
this.track.push({frame:15,label:'legLeft',x:104.4, y:-55.05})
this.track.push({frame:15,label:'feetLeft',x:111.75, y:0.45})
this.track.push({frame:15,label:'thighRight',x:-58, y:-145.25})
this.track.push({frame:15,label:'kneeRight',x:-99.05, y:-111.1})
this.track.push({frame:15,label:'legRight',x:-109.5, y:-51.05})
this.track.push({frame:15,label:'feetRight',x:-114.4, y:-3.75})
this.track.push({frame:15,label:'body',x:-5.15, y:-253.4})
this.track.push({frame:15,label:'shoulderLeft',x:58.15, y:-272.3})
this.track.push({frame:15,label:'armLeft',x:104.6, y:-294.15})
this.track.push({frame:15,label:'handLeft',x:133.9, y:-339.6})
this.track.push({frame:15,label:'shoulderRight',x:-80.35, y:-237.25})
this.track.push({frame:15,label:'armRight',x:-131.05, y:-232.6})
this.track.push({frame:15,label:'handRight',x:-180.4, y:-249.35})
this.track.push({frame:15,label:'head',x:-6.5, y:-344.95})
this.track.push({frame:16,label:'waist',x:-6.85, y:-170.25})
this.track.push({frame:16,label:'thighLeft',x:54.5, y:-149.65})
this.track.push({frame:16,label:'kneeLeft',x:99.05, y:-109.15})
this.track.push({frame:16,label:'legLeft',x:104.4, y:-55.1})
this.track.push({frame:16,label:'feetLeft',x:111.7, y:0.45})
this.track.push({frame:16,label:'thighRight',x:-57.8, y:-145.3})
this.track.push({frame:16,label:'kneeRight',x:-99.2, y:-111.3})
this.track.push({frame:16,label:'legRight',x:-109.45, y:-51.05})
this.track.push({frame:16,label:'feetRight',x:-114.35, y:-3.85})
this.track.push({frame:16,label:'body',x:-5.1, y:-253.75})
this.track.push({frame:16,label:'shoulderLeft',x:55.35, y:-281.4})
this.track.push({frame:16,label:'armLeft',x:98.15, y:-309.55})
this.track.push({frame:16,label:'handLeft',x:125, y:-357.15})
this.track.push({frame:16,label:'shoulderRight',x:-77.75, y:-229.55})
this.track.push({frame:16,label:'armRight',x:-127.4, y:-218.4})
this.track.push({frame:16,label:'handRight',x:-180.4, y:-223.9})
this.track.push({frame:16,label:'head',x:-6.15, y:-344.8})
this.track.push({frame:17,label:'waist',x:-6.85, y:-171.6})
this.track.push({frame:17,label:'thighLeft',x:54.55, y:-149.9})
this.track.push({frame:17,label:'kneeLeft',x:99, y:-109.5})
this.track.push({frame:17,label:'legLeft',x:104.35, y:-55.2})
this.track.push({frame:17,label:'feetLeft',x:111.6, y:0.45})
this.track.push({frame:17,label:'thighRight',x:-57.6, y:-145.4})
this.track.push({frame:17,label:'kneeRight',x:-99.35, y:-111.55})
this.track.push({frame:17,label:'legRight',x:-109.4, y:-51.05})
this.track.push({frame:17,label:'feetRight',x:-114.35, y:-4})
this.track.push({frame:17,label:'body',x:-5.1, y:-254.1})
this.track.push({frame:17,label:'shoulderLeft',x:51.65, y:-289.7})
this.track.push({frame:17,label:'armLeft',x:89.8, y:-323.65})
this.track.push({frame:17,label:'handLeft',x:114.15, y:-373.1})
this.track.push({frame:17,label:'shoulderRight',x:-74.35, y:-222.5})
this.track.push({frame:17,label:'armRight',x:-122.05, y:-205})
this.track.push({frame:17,label:'handRight',x:-176.2, y:-198})
this.track.push({frame:17,label:'head',x:-5.85, y:-344.6})



        this.frame = 1;
        this.maxFrame = 17;
        for (var i = this.testParts.length - 1; i >= 0; i--) {
            this.addBodyPart(this.testParts[i]);
        }

        this.shape = new PIXI.Graphics();
        this.shape.beginFill(Math.random() * 0xFFFFFF);
        this.shape.drawRect(0,0,this.radius*2, this.bounds.height);


        console.log('BUILD', bounds, radius);

        let ballsSize = this.bounds.height / 4;

        

        this.zero = new PIXI.Graphics();
        this.zero.beginFill(0xFFFFFF);
        this.zero.drawCircle(0,0,5);
        this.zero.tint = 0xFFFFFF;
        this.container.addChild(this.zero);

        this.updateable = true;
        this.velocity = {x:0, y:0}
        this.side = 1



        // this.rotation = -0.5

        return this
    }
    addBodyPart(partStructure){
        console.log(partStructure);
        let part = new PIXI.Graphics();
        part.beginFill(0xFFFFFF);
        part.drawCircle(0,0,partStructure.radius);
        part.tint = 0xFFaaFF;
        this.container.addChild(part);
        part.y = partStructure.y
        part.x = partStructure.x
        this.bodyParts.push({part:part, label:partStructure.label})
    }
    returnBodyParts(){
        // console.log(this.scale);
        let parts = [];
        let bodyPart = {};
        for (var i = this.bodyParts.length - 1; i >= 0; i--) {
            // this.bodyPart[i]
            console.log(this.bodyParts[i].label, this.bodyParts[i].part);
            let part = this.bodyParts[i].part
             bodyPart = {
                type: this.bodyParts[i].label,
                x: this.x + this.bodyParts[i].part.x*this.scale.x,
                y: this.y + this.bodyParts[i].part.y*this.scale.y,
                radius: this.bodyParts[i].part.height / 2 * this.scale.y,
                getRadius:function(){return part.height / 2 * this.scale.y}.bind(this)
            }
            parts.push(bodyPart);
        }
        
        for (var i = parts.length - 1; i >= 0; i--) {
            let rotated = this.rotatePoints(this.x,this.y,parts[i].x, parts[i].y, -this.rotation);
            parts[i].x =  rotated[0];
            parts[i].y =  rotated[1];
        }
        return parts
    }

    rotatePoints(cx, cy, x, y, angle) {
        var radians = angle,
            cos = Math.cos(radians),
            sin = Math.sin(radians),
            nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
            ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
        return [nx, ny];
    }

    getRadius() {
        // this.standardScale
        return this.scale.x * this.radius;
    }
    getExternalRadius() {
        return this.scale.x * this.externalRadius;
    }

    updateFrame(frame, smooth = 1){
        // console.log(frame);
        let currentFrame = [];
        let nextFrame = [];
        let next = frame + 1;

        for (var i = this.track.length - 1; i >= 0; i--) {
            if(this.track[i].frame == frame){
                currentFrame.push(this.track[i]);
            }

            if(this.track[i].frame == next){
                nextFrame.push(this.track[i]);
            }
        }

        if(!nextFrame.length){
            next = 1;
            for (var i = this.track.length - 1; i >= 0; i--) {
                if(this.track[i].frame == next){
                    nextFrame.push(this.track[i]);
                }
            }
        }
        for (var i = currentFrame.length - 1; i >= 0; i--) {
            for (var j = this.bodyParts.length - 1; j >= 0; j--) {
                if(this.bodyParts[j].label == currentFrame[i].label){
                    this.bodyParts[j].part.x = currentFrame[i].x + (nextFrame[i].x - currentFrame[i].x)* smooth
                    this.bodyParts[j].part.y = currentFrame[i].y + (nextFrame[i].y - currentFrame[i].y)* smooth
                }
            }
        }
    
    }
    update(delta){
        if(!this.updateable){
            return
        }

        this.frame += delta * 3;
        if(this.frame > this.maxFrame+1){
            this.frame = 1;
        }
        this.updateFrame(Math.floor(this.frame), this.frame - Math.floor(this.frame));
        this.x += this.velocity.x * delta * this.side;
        this.y += this.velocity.y * delta * this.side;
    }
}