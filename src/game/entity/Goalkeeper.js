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
        this.track.push({frame:1,label:'waist',x:-8.8, y:-189.15})
this.track.push({frame:1,label:'thighLeft',x:54.95, y:-155.2})
this.track.push({frame:1,label:'kneeLeft',x:96.15, y:-117.45})
this.track.push({frame:1,label:'legLeft',x:116.05, y:-65.7})
this.track.push({frame:1,label:'feetLeft',x:138.85, y:-21.4})
this.track.push({frame:1,label:'thighRight',x:-62.55, y:-156.05})
this.track.push({frame:1,label:'kneeRight',x:-101.1, y:-118.8})
this.track.push({frame:1,label:'legRight',x:-121.85, y:-67.25})
this.track.push({frame:1,label:'feetRight',x:-138.1, y:-22.15})
this.track.push({frame:1,label:'body',x:-4.5, y:-272.35})
this.track.push({frame:1,label:'shoulderLeft',x:56.35, y:-291.65})
this.track.push({frame:1,label:'armLeft',x:106.35, y:-279.05})
this.track.push({frame:1,label:'handLeft',x:155.5, y:-260.8})
this.track.push({frame:1,label:'shoulderRight',x:-78.3, y:-285.2})
this.track.push({frame:1,label:'armRight',x:-127.5, y:-267.75})
this.track.push({frame:1,label:'handRight',x:-173.1, y:-240.45})
this.track.push({frame:1,label:'head',x:-3.65, y:-353.65})
this.track.push({frame:2,label:'waist',x:-8.65, y:-184.1})
this.track.push({frame:2,label:'thighLeft',x:55.3, y:-153.7})
this.track.push({frame:2,label:'kneeLeft',x:97.35, y:-114.95})
this.track.push({frame:2,label:'legLeft',x:112.6, y:-61.85})
this.track.push({frame:2,label:'feetLeft',x:130.9, y:-13.3})
this.track.push({frame:2,label:'thighRight',x:-61.2, y:-153.05})
this.track.push({frame:2,label:'kneeRight',x:-100.7, y:-116.55})
this.track.push({frame:2,label:'legRight',x:-118.2, y:-61.7})
this.track.push({frame:2,label:'feetRight',x:-130.75, y:-15.8})
this.track.push({frame:2,label:'body',x:-5.3, y:-266.6})
this.track.push({frame:2,label:'shoulderLeft',x:57.05, y:-285.35})
this.track.push({frame:2,label:'armLeft',x:108.3, y:-283.35})
this.track.push({frame:2,label:'handLeft',x:157.55, y:-259.2})
this.track.push({frame:2,label:'shoulderRight',x:-78.3, y:-285.15})
this.track.push({frame:2,label:'armRight',x:-128.45, y:-272.25})
this.track.push({frame:2,label:'handRight',x:-172.2, y:-239.35})
this.track.push({frame:2,label:'head',x:-4.3, y:-350.85})
this.track.push({frame:3,label:'waist',x:-8.45, y:-179.1})
this.track.push({frame:3,label:'thighLeft',x:55.5, y:-152.25})
this.track.push({frame:3,label:'kneeLeft',x:98.4, y:-112.55})
this.track.push({frame:3,label:'legLeft',x:108.95, y:-58.45})
this.track.push({frame:3,label:'feetLeft',x:122.15, y:-5.85})
this.track.push({frame:3,label:'thighRight',x:-59.8, y:-149.9})
this.track.push({frame:3,label:'kneeRight',x:-100.25, y:-114.3})
this.track.push({frame:3,label:'legRight',x:-114.25, y:-56.35})
this.track.push({frame:3,label:'feetRight',x:-122.9, y:-9.95})
this.track.push({frame:3,label:'body',x:-6.2, y:-260.8})
this.track.push({frame:3,label:'shoulderLeft',x:57.8, y:-279})
this.track.push({frame:3,label:'armLeft',x:108.15, y:-287.7})
this.track.push({frame:3,label:'handLeft',x:154.65, y:-256.95})
this.track.push({frame:3,label:'shoulderRight',x:-77.85, y:-284.9})
this.track.push({frame:3,label:'armRight',x:-128.55, y:-276.75})
this.track.push({frame:3,label:'handRight',x:-169.2, y:-238.05})
this.track.push({frame:3,label:'head',x:-4.95, y:-347.95})
this.track.push({frame:4,label:'waist',x:-8.3, y:-174.05})
this.track.push({frame:4,label:'thighLeft',x:55.6, y:-150.85})
this.track.push({frame:4,label:'kneeLeft',x:99.35, y:-110.15})
this.track.push({frame:4,label:'legLeft',x:105.1, y:-55.5})
this.track.push({frame:4,label:'feetLeft',x:112.6, y:0.85})
this.track.push({frame:4,label:'thighRight',x:-58.4, y:-146.8})
this.track.push({frame:4,label:'kneeRight',x:-99.85, y:-112.1})
this.track.push({frame:4,label:'legRight',x:-110, y:-51.3})
this.track.push({frame:4,label:'feetRight',x:-114.75, y:-4.65})
this.track.push({frame:4,label:'body',x:-7.1, y:-254.95})
this.track.push({frame:4,label:'shoulderLeft',x:58.55, y:-272.6})
this.track.push({frame:4,label:'armLeft',x:106, y:-291.6})
this.track.push({frame:4,label:'handLeft',x:147.3, y:-256.05})
this.track.push({frame:4,label:'shoulderRight',x:-76.95, y:-284.5})
this.track.push({frame:4,label:'armRight',x:-127.9, y:-280.95})
this.track.push({frame:4,label:'handRight',x:-164.05, y:-236.95})
this.track.push({frame:4,label:'head',x:-5.65, y:-345.1})
this.track.push({frame:5,label:'waist',x:-8.4, y:-177.85})
this.track.push({frame:5,label:'thighLeft',x:55.55, y:-151.9})
this.track.push({frame:5,label:'kneeLeft',x:98.65, y:-111.95})
this.track.push({frame:5,label:'legLeft',x:108, y:-57.7})
this.track.push({frame:5,label:'feetLeft',x:119.8, y:-4.05})
this.track.push({frame:5,label:'thighRight',x:-59.45, y:-149.15})
this.track.push({frame:5,label:'kneeRight',x:-100.2, y:-113.75})
this.track.push({frame:5,label:'legRight',x:-113.2, y:-55.1})
this.track.push({frame:5,label:'feetRight',x:-120.8, y:-8.55})
this.track.push({frame:5,label:'body',x:-6.4, y:-259.35})
this.track.push({frame:5,label:'shoulderLeft',x:57.95, y:-277.4})
this.track.push({frame:5,label:'armLeft',x:107.8, y:-288.75})
this.track.push({frame:5,label:'handLeft',x:153.15, y:-256.5})
this.track.push({frame:5,label:'shoulderRight',x:-77.65, y:-284.85})
this.track.push({frame:5,label:'armRight',x:-128.5, y:-277.85})
this.track.push({frame:5,label:'handRight',x:-168.1, y:-237.75})
this.track.push({frame:5,label:'head',x:-5.15, y:-347.25})
this.track.push({frame:6,label:'waist',x:-8.55, y:-181.6})
this.track.push({frame:6,label:'thighLeft',x:55.4, y:-152.95})
this.track.push({frame:6,label:'kneeLeft',x:97.9, y:-113.75})
this.track.push({frame:6,label:'legLeft',x:110.8, y:-60.05})
this.track.push({frame:6,label:'feetLeft',x:126.6, y:-9.5})
this.track.push({frame:6,label:'thighRight',x:-60.5, y:-151.5})
this.track.push({frame:6,label:'kneeRight',x:-100.45, y:-115.4})
this.track.push({frame:6,label:'legRight',x:-116.25, y:-58.95})
this.track.push({frame:6,label:'feetRight',x:-126.75, y:-12.75})
this.track.push({frame:6,label:'body',x:-5.75, y:-263.7})
this.track.push({frame:6,label:'shoulderLeft',x:57.45, y:-282.15})
this.track.push({frame:6,label:'armLeft',x:108.45, y:-285.55})
this.track.push({frame:6,label:'handLeft',x:156.8, y:-258})
this.track.push({frame:6,label:'shoulderRight',x:-78.1, y:-285.05})
this.track.push({frame:6,label:'armRight',x:-128.65, y:-274.5})
this.track.push({frame:6,label:'handRight',x:-170.95, y:-238.7})
this.track.push({frame:6,label:'head',x:-4.65, y:-349.4})
this.track.push({frame:7,label:'waist',x:-8.7, y:-185.4})
this.track.push({frame:7,label:'thighLeft',x:55.25, y:-154.05})
this.track.push({frame:7,label:'kneeLeft',x:97.1, y:-115.55})
this.track.push({frame:7,label:'legLeft',x:113.45, y:-62.75})
this.track.push({frame:7,label:'feetLeft',x:132.95, y:-15.25})
this.track.push({frame:7,label:'thighRight',x:-61.55, y:-153.8})
this.track.push({frame:7,label:'kneeRight',x:-100.85, y:-117.1})
this.track.push({frame:7,label:'legRight',x:-119.05, y:-62.95})
this.track.push({frame:7,label:'feetRight',x:-132.45, y:-17.25})
this.track.push({frame:7,label:'body',x:-5.1, y:-268.05})
this.track.push({frame:7,label:'shoulderLeft',x:56.9, y:-286.95})
this.track.push({frame:7,label:'armLeft',x:108, y:-282.25})
this.track.push({frame:7,label:'handLeft',x:157.45, y:-259.75})
this.track.push({frame:7,label:'shoulderRight',x:-78.35, y:-285.15})
this.track.push({frame:7,label:'armRight',x:-128.35, y:-271.15})
this.track.push({frame:7,label:'handRight',x:-172.6, y:-239.65})
this.track.push({frame:7,label:'head',x:-4.15, y:-351.55})



        this.frame = 1;
        this.maxFrame = 7;
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

    updateFrame(frame){
        for (var i = this.track.length - 1; i >= 0; i--) {
            if(this.track[i].frame == frame){
                for (var j = this.bodyParts.length - 1; j >= 0; j--) {
                    if(this.bodyParts[j].label == this.track[i].label){
                        this.bodyParts[j].part.x = this.track[i].x
                        this.bodyParts[j].part.y = this.track[i].y
                    }
                }
            }
        }
    }
    update(delta){
        if(!this.updateable){
            return
        }

        this.frame += delta * 3;
        if(this.frame > this.maxFrame){
            this.frame = 1;            
        }
        this.updateFrame(Math.floor(this.frame));
        // this.drawCounter --
        // if(this.drawCounter > 0){
        //     this.rotation -= 0.01
        //     this.game.debugGoalkeeper(this)
        // }
        // if(
        //     (this.side > 0 && this.x > this.moveBounds.x2) ||
        //     (this.side < 0 && this.x < this.moveBounds.x1)
        //     )
        // {
        //     this.side *= -1
        // }
        this.x += this.velocity.x * delta * this.side;
        this.y += this.velocity.y * delta * this.side;
    }
}