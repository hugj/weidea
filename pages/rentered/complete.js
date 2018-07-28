// pages/rentered/complete.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    countdownTime: 5,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //   setTimeout(function () {
    //       wx.redirectTo({
    //           url: '../myContract/my',
    //       })
    //   }, 3000)
    var self = this;
        setInterval(function(){
            
            var newt =self.data.countdownTime -1
            self.setData({
                "countdownTime": newt
            })
            if (self.data.countdownTime==0){
                wx.redirectTo({
                    url: '../myContract/my',
                })
            }
        },1000)
    
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

  try:function(){
      wx.navigateTo({
          url: '../index/index'
      })
  },
})