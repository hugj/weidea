// pages/rentered/complete.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    countdownTime: 10,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    var interval = setInterval(this._go(interval), 1000);
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

  try:function(){
      wx.navigateTo({
          url: '../index/index'
      })
  },

  _go: function (interval) {
    var that = this;
    return function() {
      var countdownTime = that.data.countdownTime;
      if (--countdownTime > 0) {
        that.setData({
          countdownTime: countdownTime,
        })
      } else {
        clearInterval(interval);
        wx.navigateTo({
          url: '../index/index'
        })
      }
    }
    
  },
})