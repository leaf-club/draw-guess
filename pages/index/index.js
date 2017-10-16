//index.js
import Line from '../../modules/implement/Line';
import { throttle } from '../../utils/util';

Page({
  data: {
    canvasId: 'main-canvas',
    sysInfo: wx.getSystemInfoSync(),
    lineCan: null,
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
    colors: ['red', 'blue', 'green']
  },
  onLoad: function () {
    console.log(this.data.sysInfo)
    this.setData({
      lineCan: new Line({
        id: this.data.canvasId,
        // width: this.data.sysInfo.windowWidth,
        // height: this.data.sysInfo.windowHeight
      })
    })
    this.data.lineCan.init({});
  },
  startDraw: function (e) {
    this.setData({
      startX: e.touches[0].x,
      startY: e.touches[0].y
    });
  },
  movePen: function (e) {
    this.data.lineCan.draw(this.data.startX, this.data.startY, e.touches[0].x, e.touches[0].y);
    this.setData({
      startX: e.touches[0].x,
      startY: e.touches[0].y
    });
  }
})
