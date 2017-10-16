import Canvas from '../interface/Canvas';

export default class Line extends Canvas {
  constructor({canvas, width, height}) {
    super(...arguments);
  }
  init({color, lineWidth, lineCap, lineJoin}) {
    this.ctx.setLineWidth(lineWidth || 10);
    this.ctx.setLineCap(lineCap || 'round');
    this.ctx.setLineJoin(lineJoin || 'round');
    this.ctx.setStrokeStyle(color || '#000000');
  }
  draw(sx, sy, ex, ey) {
    this.ctx.beginPath();
    this.ctx.moveTo(sx, sy);
    this.ctx.lineTo(ex, ey);
    this.ctx.stroke();
    this.ctx.draw(true);
  }
}