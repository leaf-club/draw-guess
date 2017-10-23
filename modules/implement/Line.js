import Canvas from '../interface/Canvas';

export default class Line extends Canvas {
  constructor({canvas, width, height}) {
    super(...arguments);
  }
  init({strokeColor, lineWidth, lineCap, lineJoin}) {
    this.ctx.setLineWidth(lineWidth);
    this.ctx.setLineCap(lineCap);
    this.ctx.setLineJoin(lineJoin);
    this.ctx.setStrokeStyle(strokeColor);
  }
  drawLine(sx, sy, ex, ey) {
    this.ctx.beginPath();
    this.ctx.moveTo(sx, sy);
    this.ctx.lineTo(ex, ey);
    this.ctx.stroke();
    this.ctx.draw(true);
  }
}