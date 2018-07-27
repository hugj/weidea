// pages/signing/signing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    housesNameLabel: "房屋名称:",
    priceLabel: "价格:",
    areaLabel: "面积:",
    rentTimeLabel: "租期时间:",
    startRentTimeLabel: "起租日期:",
    endRentTimeLabel: "到租日期:",
    confirmButtonLabel: "确认信息",

    housesName: "龙海家园A栋601",
    price: 10000,
    area: 90,
    startRentTime: "2018-07-27",
    endRentTime: "2018-07-27",
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

  /**
   * 监控到租日期选择响应
   */
  bindEndRentTimeChange: function(e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      endRentTime: e.detail.value
    })
  },
})