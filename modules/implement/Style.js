import Canvas from '../interface/Canvas';

export default class Style{
  constructor(ctx) {
    this.ctx = ctx;
  }
  change({ strokeColor, lineWidth }) {
    this.ctx.setLineWidth(lineWidth);
    this.ctx.setStrokeStyle(strokeColor);
  }
  
}