// src/WaterTexture.js
export class WaterTexture {
    constructor(options) {
      this.size = 64;
      this.radius = this.size * 0.1;
      this.points = [];
      this.maxAge = 64;
  
      this.width = this.height = this.size;
      if (options.debug) {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.radius = this.width * 0.05;
      }
  
      this.initTexture();
      if (options.debug) document.body.append(this.canvas);
    }
  
    initTexture() {
      this.canvas = document.createElement("canvas");
      this.canvas.id = "WaterTexture";
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.ctx = this.canvas.getContext("2d");
      this.clear();
    }
  
    clear() {
      this.ctx.fillStyle = "black";
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
  
    update() {
      this.clear();
      this.points = this.points.filter(point => {
        point.age += 1;
        return point.age <= this.maxAge;
      });
  
      this.points.forEach(point => {
        this.drawPoint(point);
      });
    }
  
    addPoint(point) {
      this.points.push({ x: point.x, y: point.y, age: 0 });
    }
  
    drawPoint(point) {
      const pos = {
        x: point.x * this.width,
        y: point.y * this.height
      };
      const radius = this.radius;
      const ctx = this.ctx;
  
      let intensity = 1 - point.age / this.maxAge;
      let color = "255,255,255";
      let offset = this.width * 5;
  
      ctx.shadowOffsetX = offset;
      ctx.shadowOffsetY = offset;
      ctx.shadowBlur = radius;
      ctx.shadowColor = `rgba(${color},${0.2 * intensity})`;
  
      ctx.beginPath();
      ctx.fillStyle = "rgba(255,0,0,1)";
      ctx.arc(pos.x - offset, pos.y - offset, radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  