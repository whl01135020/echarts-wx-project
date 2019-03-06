//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    headArray: [{
      name: 'nav1'
    }, {
      name: 'nav2'
    }],
    dataArray: [{
      date: '2019-02-18',
      time: "08:04",
      value: 128
    }, {
      date: '2019-02-17',
      time: "08:03",
      value: 127
    }, {
      date: '2019-02-16',
      time: "08:02",
      value: 126
    }, {
      date: '2019-02-15',
      time: "08:01",
      value: 125
    }],
    headItem: 'nav1',
    activeYate: 7.15,
    activeChain: -3.64,
    activeDtaArray: [{
      date: '2019-02-17',
      yRate: 34.43,
      chainRate: 47.74
    }, {
      date: '2019-02-16',
      yRate: -1.23,
      chainRate: -7.89
    }, {
      date: '2019-02-15',
      yRate: 11.22,
      chainRate: 1.23
    }, {
      date: '2019-02-14',
      yRate: -5.67,
      chainRate: 16.61
    }]
  },
  headNavClick: function (event) {
    let classify = event.currentTarget.dataset.classify;
    // console.log(classify)  //输出的结果就是你点击的
    this.setData({
      headItem: classify,  //更新
    })

  },
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  // onLoad: function () {
  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse){
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   }
  // },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})
