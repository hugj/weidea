// pages/purchase/purchase.js
const util = require('../../utils/util.js');
var app = getApp();
const contract = require('./contract.js')

// canvas 全局配置
var context = null;// 使用 wx.createContext 获取绘图上下文 context
var isButtonDown = false;
var arrx = [];
var arry = [];
var arrz = [];
var canvasw = 0;
var canvash = 0;
//获取系统信息
wx.getSystemInfo({
  success: function (res) {
    canvasw = res.windowWidth;//设备宽度
    canvash = res.windowHeight;
  }
});

Page({

    /**
     * 页面的初始数据
     */
    data: {
        contract: contract,
        init_step: 1,
        step_condition: [1, 0, 0, 0, 0, 0],
        prev_c:false,
        next_c:true,
        houseInfo: {
          "id": 1,
          "name": "丽湖花园一期 ",
          "rent": 2300,
          "wuye": 22,
          "type": "1室1厅",
          "area": "42.23",
          "docration": "精装",
          "direct": "北",
          "louceng": 23,
          "address": "距地铁5号线(环中线)上水径1078米",
          "idnumber": "123456788",
          "certificate": "2018-07-29 16:34:29",
          "state": "a",
          "sdate": "2018-07-01",
          "edate": "2018-08-01"
        },
        able:false,
        image:false,
      src: ""
    },
    imgPath: '/images/static/..',

    // 手写板
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  canvasStart: function (event) {
    isButtonDown = true;
    arrz.push(0);
    arrx.push(event.changedTouches[0].x);
    arry.push(event.changedTouches[0].y);
    //context.moveTo(event.changedTouches[0].x, event.changedTouches[0].y);
  },
  canvasMove: function (event) {
    if (isButtonDown) {
      arrz.push(1);
      arrx.push(event.changedTouches[0].x);
      arry.push(event.changedTouches[0].y);
      // context.lineTo(event.changedTouches[0].x, event.changedTouches[0].y);
      // context.stroke();
      // context.draw()
    };
    for (var i = 0; i < arrx.length; i++) {
      if (arrz[i] == 0) {
        context.moveTo(arrx[i], arry[i])
      } else {
        context.lineTo(arrx[i], arry[i])
      };
    };
    context.clearRect(0, 0, canvasw, canvash);
    context.stroke();
    context.draw(true);
  },
  canvasEnd: function (event) {
    isButtonDown = false;
  },
  cleardraw: function () {
    //清除画布
    arrx = [];
    arry = [];
    arrz = [];
    context.clearRect(0, 0, canvasw, canvash);
    context.draw(true);
  },
  getimg: function () {
    if (arrx.length == 0) {
      wx.showModal({
        title: '提示',
        content: '签名内容不能为空！',
        showCancel: false
      });
      return false;
    };
    //生成图片
    var self =this;
    wx.canvasToTempFilePath({
      canvasId: 'canvas',
      success: function (res) {
        console.log(res.tempFilePath);
        self.setData({
            canvas:res.tempFilePath,
            able:false,
            image:true
        })
        //存入服务器
        // wx.uploadFile({
        //   url: 'a.php', //接口地址
        //   filePath: res.tempFilePath,
        //   name: 'file',
        //   formData: { //HTTP 请求中其他额外的 form data 
        //     'user': 'test'
        //   },
        //   success: function (res) {
        //     console.log(res);
        //   },
        //   fail: function (res) {
        //     console.log(res);
        //   },
        //   complete: function (res) {
        //   }
        // });
      }
    })
  },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
      //console.log(options);
      //调用房屋详情接口
      var that = this;
      wx.request({
        url: app.globalData.ipAddress + '/house/detail',
        data: {
          houseid: options.houseid,
        },
        method: "GET",
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          //console.log(res);
          that.setData({
            houseInfo: res.data,
          })
        },
        fail: function (res) {
          console.log(res)
        },
      });
      this.setData({
        tenantInfo: app.globalData.tenantInfo,
      });

      //手写板
      // 使用 wx.createContext 获取绘图上下文 context
      context = wx.createCanvasContext('canvas');
      context.beginPath()
      context.setStrokeStyle('#000000');
      context.setLineWidth(10);
      context.setLineCap('round');
      context.setLineJoin('round');
    },
    prev: function(event) {
        var step = event.currentTarget.dataset.stepid;
        var state = [0, 0, 0, 0, 0, 0];
        // console.log(step)
        state[step - 1] = 1;
        // console.log(state)
        this.setData({
            step_condition: state,
        })
        if (step-1 <= 1) {
            this.setData({
                prev_c: false
            })
        } else {
            this.setData({
                init_step: step - 1
            })
        }
        if (step-1 < 6) {
           
            this.setData({ next_c: true })

           
        }
        console.log(this.data.step_condition)
    },
    next: function(event) {
        var step = event.currentTarget.dataset.stepid;
        var state = [0, 0, 0, 0, 0, 0];
        state[step] = 1;
        this.setData({
            step_condition: state,
        
        })
        if(step+1>1){
            // console.log("hei");
            this.setData({prev_c:true});
        }
        if (step+1== 6) {
            this.setData({
                next_c: false,
                prev_c:false
            })
        } else {
            this.setData({
                init_step: step+1
            })
        }
        console.log(this.data.step_condition)
    },

    toSuccess:function(){
        wx.redirectTo({
            url: '../rentered/complete'
        })
    },
    // 生成画布
    showcanvas:function(){
        this.setData({
            "able":true
        })
        console.log(this.data.able)
    }
})