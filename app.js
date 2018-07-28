//app.js
App({
    onLaunch: function() {
        // 展示本地存储能力
        wx.getSystemInfo({
            success: function(res) {
                console.log(res.windowWidth)
                console.log(res.windowHeight)
                // 进行保存屏幕的高度和宽度
                wx.setStorageSync('phoneattr', res)

            }
        })

        // 登录
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            }
        })
        // 获取用户信息
        wx.getSetting({
            success: res => {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
                        success: res => {
                            // 可以将 res 发送给后台解码出 unionId
                            this.globalData.userInfo = res.userInfo

                            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                            // 所以此处加入 callback 以防止这种情况
                            if (this.userInfoReadyCallback) {
                                this.userInfoReadyCallback(res)
                            }
                        }
                    })
                }
            }
        })
    },
    globalData: {
        userInfo: null,
        //房客信息
        tenantInfo: {
          id: 1,
          phone: "12345678910",
          password: "123",
          host: "0",
          tenant: "1",
          sex: "男",
          name: "小明",
          idnumber: "123456789",
          bankcard: "123456789",
        },
        //房东信息
        landlordInfo: {
          id: 2,
          phone: "12345678911",
          password: "123",
          host: "1",
          tenant: "0",
          sex: "女",
          name: "小红",
          idnumber: "123456788",
          bankcard: "123456788",
        },
        ipAddress: "http://172.20.10.2:8080/weidea"
    }
})