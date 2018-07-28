// pages/purchase/purchase.js
const util = require('../../utils/util.js');
var app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
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
          "userid": 1,
          "certificate": "2018-07-29 16:34:29",
          "state": "a",
          "sdate": "2018-07-01",
          "edate": "2018-08-01"
        },
    },
    imgPath: '/images/static/..',
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
      //TODO::日志打印
      console.log(this.data);
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
        wx.navigateTo({
            url: '../rentered/complete'
        })
    }
})