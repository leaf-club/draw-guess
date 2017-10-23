//index.js
import Line from '../../modules/implement/Line';
import { throttle } from '../../utils/util';
import Style from '../../modules/implement/Style';



Page({
  data: {
    canvasId: 'main-canvas',
    ctx: null,
    cWidth: '94vw',
    cHeight: '80vw',
    ctxBGColor: '#ffffff',
    strokeColor: '#000000',
    lineCap: 'round',
    lineJoin: 'round',
    lineWidth:0,
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
    lineCan: null,
    colors: [
      {
        id: 1,
        colorVal: '#000000'
      },
      {
        id: 2,
        colorVal: '#339900'
      },
      {
        id: 3,
        colorVal: '#3366cc'
      },
      {
        id: 4,
        colorVal: '#9966cc'
      },
      {
        id: 5,
        colorVal: '#ee66cc'
      },
      {
        id: 6,
        colorVal: '#66eecc'
      },
      {
        id: 7,
        colorVal: '#eeee66'
      },
      {
        id: 8,
        colorVal: '#ff3333'
      }
    ],
    thicknesses: [
      {
        id: 1,
        thicknessVal: 2.1
      },
      {
        id: 2,
        thicknessVal: 1.8
      },
      {
        id: 3,
        thicknessVal: 1.4
      },
      {
        id: 4,
        thicknessVal: 0.9
      },
      {
        id: 5,
        thicknessVal: 0.5
      }
    ],
    sysInfo: wx.getSystemInfoSync(),
    images: {
      eraser: '../images/eraser.png',
      dustbin: '../images/dustbin.png'
    }
  },
  onLoad: function () {
    this.setData({
      lineCan: new Line({
        id: this.data.canvasId,
        width: this.data.cWidth,
        height: this.data.cHeight
      }),
      lineWidth: (5 - 2 * this.data.thicknesses[1].thicknessVal) * this.data.sysInfo.screenWidth / 100
    })
    this.setData({
      ctx: this.data.lineCan.ctx
    });
    this.data.lineCan.init({
      strokeColor: this.data.strokeColor,
      lineWidth: this.data.lineWidth,
      lineCap: this.data.lineCap,
      lineJoin: this.data.lineJoin
    });
  },
  startDraw: function (e) {
    this.setData({
      startX: e.touches[0].x,
      startY: e.touches[0].y
    });
  },
  movePen: function (e) {
    this.data.lineCan.drawLine(this.data.startX, this.data.startY, e.touches[0].x, e.touches[0].y);
    this.setData({
      startX: e.touches[0].x,
      startY: e.touches[0].y
    });
  },
  changeColor: function (e) {
    let style = new Style(this.data.ctx);
    let selectedColor;
    if (e.target.dataset.colorval!=undefined){
      selectedColor = e.target.dataset.colorval;
      this.setData({
        strokeColor: selectedColor
      });
      style.change({
        strokeColor: selectedColor,
        lineWidth: this.data.lineWidth
      });
    }
    
  },
  changeThickness: function (e) {
    let style = new Style(this.data.ctx);
    let selectedThickness;
    if (e.target.dataset.thicknessval != undefined) {
      selectedThickness = (5 - 2 * e.target.dataset.thicknessval) * this.data.sysInfo.screenWidth/100;
      this.setData({
        lineWidth: selectedThickness
      });
      style.change({
        strokeColor: this.data.strokeColor,
        lineWidth: selectedThickness
      });
    }
  },
  clean: function (e) {
    let style = new Style(this.data.ctx);
    this.setData({
      strokeColor: this.data.ctxBGColor
    });
    style.change({
      strokeColor: this.data.ctxBGColor,
      lineWidth: this.data.lineWidth
    });
  },
  clear: function (e) {
    this.data.ctx.clearRect(0, 0, this.data.cWidth, this.data.cHeight);
    this.data.ctx.draw();
    if (this.data.strokeColor == this.data.ctxBGColor){
      this.setData({
        strokeColor: this.data.colors[0].colorVal
      })
    }
    this.data.lineCan.init({
      strokeColor: this.data.strokeColor,
      lineWidth: this.data.lineWidth,
      lineCap: this.data.lineCap,
      lineJoin: this.data.lineJoin
    });
  }
})
