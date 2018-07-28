// pages/purchase/purchase.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        init_step: 1,
        step_condition: [1, 0, 0, 0, 0],
        prev_c: false,
        next_c: true,

        /**房屋配置图片 */
        conf_image:["bed","chest","bath","washing-machine","wifi"]
    },
    imgPath: '/images/static/..',
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
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
        
    }
})