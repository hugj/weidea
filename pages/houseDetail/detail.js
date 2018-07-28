// pages/houseDetail/detail.js
const util = require('../../utils/util.js');
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options);
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
    })
    //console.log(this.data.houseInfo);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  sign:function(){
      wx.navigateTo({
          url: '../sign/sign?houseid='+this.data.houseInfo.id,
      })
  }
})