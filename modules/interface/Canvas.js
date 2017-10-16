export default class Canvas {
  constructor ({id, width, height}) {
    this.ctx = wx.createCanvasContext(id);
    // this.canWidth = width;
    // this.canHight = height;
  }
  draw () {
    throw new TypeError('"draw" called on an object that does not implement interface Canvas.')
  }
}
