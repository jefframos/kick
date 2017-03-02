  import * as PIXI from 'pixi.js';


  class Trail extends PIXI.mesh.Rope
  {

    constructor(texture, points)
    {
      super(texture, points);
    }

    updateTransform = function()
    {
        const points = this.points;

        if (points.length < 1)
        {
            return;
        }

        let lastPoint = points[0];
        let nextPoint;
        let perpX = 0;
        let perpY = 0;

        this.count += 0.05;

        const vertices = this.vertices;
        const total = points.length;

        for (let i = 0; i < total; i++)
        {
            const point = points[i];
            const index = i * 4;

            if (i < points.length - 1)
            {
                nextPoint = points[i + 1];
            }
            else
            {
                nextPoint = point;
            }

            perpY = -(nextPoint.x - lastPoint.x);
            perpX = nextPoint.y - lastPoint.y;

            let ratio = (1 - (i / (total - 1))) * 10;

            if (ratio > 1)
            {
                ratio = 1;
            }

            const perpLength = Math.sqrt((perpX * perpX) + (perpY * perpY));
            let num = Math.sin((this.count) + (i) * 0.2 ) * 3;//this._texture.height / 2; // (20 + Math.abs(Math.sin((i + this.count) * 0.3) * 50) )* ratio;

            num *= Math.max(1, (i/total) * 2);
//            if(num < 0.5)num = 0.5;

            perpX /= perpLength;
            perpY /= perpLength;

            perpX *= num;
            perpY *= num;

            vertices[index] = point.x + perpX;
            vertices[index + 1] = point.y + perpY;
            vertices[index + 2] = point.x - perpX;
            vertices[index + 3] = point.y - perpY;

            lastPoint = point;
        }

        this.containerUpdateTransform();
      }
  }


  class Rope extends PIXI.Container{
      constructor(options){
          super();

          this.startX = options.startX || 0;
          this.startY = options.startY || 0;

          if (!options.texture) {
              console.log('ERROR :: Rope requires texture.');
              return;
          }

          this.texture = options.texture;
          this.type = options.type || 'default';

          this.fallBackLineColor = options.fallBackLineColor || 0xFF0000;
          this.fallBackLineWidth = options.fallBackLineWidth || 3;

          this.forces = [];

          this.fixed = false;

          this.usesTexture = PIXI.isWebGL;

          switch (this.type) {
          case 'fixed' :
              this.fixed = true;
              break;
          default:
              break;
          }

          this.gravity = options.gravity || 3.4;

          this.linkLength = 0;

          this.endX = options.endX || 0;
          this.endY = options.endY || 0;

          this.joints = options.joints || 8;
          this.iterations = options.iterations || 1;
          this.hasAttachment = options.hasAttachment || false;

      // Project specific
          this.radius = options.radius || 150;
          this.friction = options.friction || 0.02;

      // Current positions
          this.pX = [];
          this.pY = [];

      // Old positions
          this.oX = [];
          this.oY = [];

          this.links = [];
          this.size = 0;

          this.clickOffsetX = 0;
          this.clickOffsetY = 0;
      }

      build(size) {
          this.size = size;
          this.linkLength = this.size / this.joints;

          var offsetX = 0;
          var offsetY = -this.linkLength;

          for (var i = 0; i <= this.joints; i++) {
              this.pX[i] = this.startX + (offsetX * i) + i;
              this.pY[i] = this.startY + (offsetY * i);

              this.oX[i] = this.startX + (offsetX * i);
              this.oY[i] = this.startY + (offsetY * i);

              this.links[i] = new PIXI.Point(i * 20, i * 20);
          }

      //console.log(this.links);
         
            //alert(Trail)
              this.strip = new Trail(this.texture, this.links);//PIXI.mesh.Rope(this.texture, this.links);
           //   this.strip = PIXI.mesh.Rope(this.texture, this.links);

              this.strip.count = 0;


      

          this.addChild(this.strip);

      }

      update(ball, x, y) {
          this.pX[0] = this.startX;
          this.pY[0] = this.startY;

          if (this.fixed) {
              this.pX[this.joints] = this.endX;
              this.pY[this.joints] = this.endY;
          } else if (this.dragging) {
              this.endX = x - this.clickOffsetX;
              this.endY = y - this.clickOffsetY;

              this.pX[this.joints] = this.endX;
              this.pY[this.joints] = this.endY;

              this.pX[0] = this.startX;
              this.pY[0] = this.startY;
          }

          this.verlet();
          this.satisfyConstraints();

       //   if (ball) this.detect(ball);

          this.satisfyJoints();

          this.links[0].x = this.startX;
          this.links[0].y = this.startY;

          if (this.fixed) {
              this.links[this.links.length - 1].x = this.endX;
              this.links[this.links.length - 1].y = this.endY;
          }

         /* if (!this.usesTexture) {
              this.strip.clear();
              this.strip.moveTo(this.links[0].x, this.links[0].y);
              this.strip.lineStyle(this.fallBackLineWidth, this.fallBackLineColor);

              var len = this.links.length;

              if (this.hasAttachment === true) {
                  len -= 1;
              }

              for (var j = 1; j < len; j++) {
                  this.strip.lineTo(this.links[j].x, this.links[j].y);
              }
          }*/
      }

      satisfyJoints() {
          for (var i = 0; i <= this.joints; i++) {
              this.links[i].x = this.pX[i];
              this.links[i].y = this.pY[i];
          }
      }

      detect(ball) {
          var radius = 150;

          var joints = [];
          for (var i = 2; i < joints - 1; i++) {

              var dx = ball.x - this.pX[i];
              var dy = ball.y - this.pY[i];

              var dist = Math.sqrt(dx * dx + dy * dy);

              if (dist < radius) {
                  var normalX = -dx / dist;
                  var normalY = -dy / dist;

                  this.pX[i] = this.oX[i] = ball.x + (normalX * radius);
                  this.pY[i] = this.oY[i] = ball.y + (normalY * radius);
              }
          }
      }

      getAngle(x1, y1, x2, y2) {
          var dx = x1 - x2;
          var dy = y1 - y2;

          return Math.atan2(dy, dx);
      }

      verlet() {
          for (var i = 1; i <= this.joints; i++) {
              var tempX = this.pX[i];
              var tempY = this.pY[i];

              var offsetX = this.pX[i] - this.oX[i];
              var offsetY = this.pY[i] - this.oY[i] + this.gravity;

              for (var j = 0; j < this.forces.length; j++) {
                  var force = this.forces[j];
                  offsetX += force.x;
                  offsetY += force.y;
              }

              this.pX[i] += (1 - this.friction) * offsetX;
              this.pY[i] += (1 - this.friction) * offsetY;

              this.oX[i] = tempX;
              this.oY[i] = tempY;
          }
      }

      satisfyConstraints() {
          var diff = 0;

          for (var j = 1; j <= this.iterations; j++) {
              for (var i = 1; i <= this.joints; i++) {
                  if (i === this.joints && this.dragging) {
                      this.pX[i] = this.endX;
                      this.pY[i] = this.endY;
                  }

                  var dx = (this.pX[i] - this.pX[i - 1]);
                  var dy = (this.pY[i] - this.pY[i - 1]);
                  var dist = Math.sqrt((dx * dx) + (dy * dy));

                  if (i === this.joints && this.hasAttachment === true) {
                      diff = dist - this.radius;
                  } else {
                      diff = dist - this.linkLength;
                  }


                  var offsetX = (diff * dx / dist) / 2;
                  var offsetY = (diff * dy / dist) / 2;

                  this.pX[i] -= offsetX;
                  this.pY[i] -= offsetY;
                  this.pX[i - 1] += offsetX;
                  this.pY[i - 1] += offsetY;

                  if(i < this.joints )
{

                      dx = (this.pX[i + 1] - this.pX[i - 1]);
                      dy = (this.pY[i + 1] - this.pY[i - 1]);
                      dist = Math.sqrt((dx * dx) + (dy * dy));

                      var constraint = this.size / this.joints;

                      if(dist < constraint)
	{
                          diff = dist - (constraint);
                          offsetX = (diff * dx / dist) / 2;
                          offsetY = (diff * dy / dist) / 2;

                          this.pX[i + 1] -= offsetX;
                          this.pY[i + 1] -= offsetY;
                          this.pX[i - 1] += offsetX;
                          this.pY[i - 1] += offsetY;
                      }
                  }
              }
          }
      }

      updateStartX(newX) {
          this.startX = newX;
      }

      updateStartY(newY) {
          this.startY = newY;
      }

      updateRadius(newRadius) {
          this.radius = newRadius;
      }

      updateEndX(newX) {
          this.endX = newX;
      }

      updateEndY(newY) {
          this.endY = newY;
      }

      addStartX(diff) {
          this.startX += diff;
      }

      reset(left) {
          this.linkLength = this.size / this.joints;

          var offsetX = left ? 20 : -20;
          var offsetY = -this.linkLength;

          for (var i = 0; i <= this.joints; i++) {
              this.pX[i] = this.startX + (offsetX * i) + i;
              this.pY[i] = this.startY + (offsetY * i);

              this.oX[i] = this.startX + (offsetX * i);
              this.oY[i] = this.startY + (offsetY * i);
          }
      }


      destroy() {
          this.container.removeChild(this.strip);
          this.pX = null;
          this.pY = null;

          this.oX = null;
          this.oY = null;

          this.links = null;
      }

      setLength(length, reset) {
          length *= 0.8;
          var distX = this.endX - this.startX;
          var distY = this.endY - this.startY;
          distX /= this.joints;
          distY /= this.joints;

          this.linkLength = length / this.joints;

          if (reset) {
              for (var i = 0; i < this.joints; i++) {
                  this.pX[i] = this.oX[i] = this.startX + distX * i;
                  this.pY[i] = this.oY[i] = this.startY + distY * i;
              }
          }
      }



  }

  export default Rope;
