//list.js
const util = require('../../utils/util.js');
var app = getApp();

Page({
    data: {
      address: '',
      houseList: [{
        id: 1,
        name: "丽湖花园一期",
        type: "1室1厅",
        rent: 2300,
      }]
    },

    onLoad: function() {
      // console.log("list::onLoad()");
      var that = this;
      wx.request({
        url: app.globalData.ipAddress+'/house/all',
        data: {
          address: this.data.address,
        },
        method: "GET",
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          that.setData({
            address: that.data.address,
            houseList: res.data,
          })
        },
        fail: function (res) {
          console.log(res)
        },
      })
    },
    onReady: function() {
      // console.log("list::onReady()");
    },
    onShow: function() {
      // console.log("list::onShow()");
    },

    showDetail:function(e){
        // console.log(e);
        wx.navigateTo({
            url: '../houseDetail/detail?id='+e.currentTarget.dataset.id,
        })
    },

    //监听地址输入
    bindAddressInput: function(e) {
      // console.log(e.detail.value);
      var that = this;
      wx.request({
        url: 'http://' + app.globalData.ipAddress + '/house/all',
        data: {
          address: e.detail.value,
        },
        method: "GET",
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          that.setData({
            address: e.detail.value,
            houseList: res.data,
          })
        },
        fail: function (res) {
          console.log(res)
        },
      })
    }
})
