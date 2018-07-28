// pages/purchase/purchase.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        init_step: 1,
        step_condition: [1, 0, 0, 0, 0, 0],
        prev_c: false,
        next_c: true
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
        console.log(step)
        state[step - 1] = 1;
        console.log(state)
        this.setData({
            step_condition: state
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

            console.log(this.data)
        }
    },
    next: function (event) {
        var step = event.currentTarget.dataset.stepid;
        var state = [0, 0, 0, 0, 0, 0];
        state[step] = 1;
        this.setData({
            step_condition: state
        })
        this.setData({
            init_step: step
        })
        if (step + 1 > 1) {
            console.log("hei");
            this.setData({ prev_c: true });
        }
        if (step + 1 == 6) {
            this.setData({
                next_c: false
            })
        } else {
            this.setData({
                init_step: step + 1
            })
        }
    }
})