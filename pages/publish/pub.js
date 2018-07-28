// pages/purchase/purchase.js
const util = require('../../utils/util.js');
var app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        init_step: 1,
        step_condition: [1, 0, 0, 0, 0],
        prev_c: false,
        next_c: true,
        landlordInfo: null,
        houseInfo: {
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
        houseName: "",
        houseCertificate: "",
        houseType: "",
        houseRentTime: "",
        housePrice: 0,

        /**房屋配置图片 */
        conf_image:["bed","chest","bath","washing-machine","wifi"]
    },
    imgPath: '/images/static/..',
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      this.setData({
        landlordInfo: app.globalData.landlordInfo,
      });
    },
    prev: function (event) {
        var step = event.currentTarget.dataset.stepid;
        var state = [0, 0, 0, 0, 0, 0];
        // console.log(step)
        state[step - 1] = 1;
        // console.log(state)
        this.setData({
            step_condition: state,
        })
        if (step - 1 <= 1) {
            this.setData({
                prev_c: false
            })
        } else {
            this.setData({
                init_step: step - 1
            })
        }
        if (step - 1 < 6) {

            this.setData({ next_c: true })


        }
        console.log(this.data.step_condition)
    },
    next: function (event) {
        var step = event.currentTarget.dataset.stepid;
        var state = [0, 0, 0, 0, 0, 0];
        state[step] = 1;
        this.setData({
            step_condition: state,

        })
        if (step + 1 > 1) {
            // console.log("hei");
            this.setData({ prev_c: true });
        }
        if (step + 1 == 5) {
            this.setData({
                next_c: false,
                prev_c: false
            })
        } else {
            this.setData({
                init_step: step + 1
            })
        }
        console.log(this.data.step_condition)
    },

    toSuccess: function () {
        var that = this;
        this.setData({houseInfo: {
          name: that.data.houseName,
          certificate: that.data.houseCertificate,
          type: that.data.houseType,
          rent: that.data.housePrice,
          idnumber: that.data.landlordInfo.idnumber,
        }});
        // console.log(this.data)
        wx.request({
          url: app.globalData.ipAddress + '/house/add',
          data: that.data.houseInfo,
          method: "POST",
          header: {
            'content-type': 'application/json'
          },
          success: function (res) {
            console.log(res)
          },
          fail: function (res) {
            console.log(res)
          },
        })
        wx.navigateTo({
            url: '../landlord/landlord'
        })
    },
   
    conf:function(event){
        var id = event.currentTarget.dataset.id;
        console.log(id);
        var conf_img = this.data.conf_image;
        var name = this.data.conf_image[id];
        var new_name = name.indexOf('1') > 0 ? name.split('1')[0] :name + '1' ;
        console.log('ori '+name);
        console.log('new '+new_name);
        // var change = this.data.conf_image[id] + "1";
        conf_img[id] = new_name;
       
        this.setData({
            conf_image:conf_img
        })
        console.log(this.data.conf_image)
        
    },

    //监听房屋名称输入
    bindHouseNameInput: function (e) {
      // console.log(e.detail.value);
      this.setData({
        houseName: e.detail.value
      })
    },

    //监听房产证编号输入
    bindHouseCertificateInput: function(e) {
      this.setData({
        houseCertificate: e.detail.value
      })
    },

    //监听户型类型输入
    bindHouseTypeInput: function(e) {
      this.setData({
        houseType: e.detail.value
      })
    },

    //监听租期要求输入
    bindHouseRentTimeInput: function (e) {
      this.setData({
        houseRentTime: e.detail.value
      })
    },

    //监听价格输入
    bindHosePriceInput: function (e) {
      this.setData({
        housePrice: e.detail.value
      })
    },
})