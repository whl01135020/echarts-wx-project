import * as echarts from '../../assets/ec-canvas/echarts';

let chart = null;

function initChart(canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  let option = {
    title: {
      text: '用户趋势',
      left:'center'
    },
    color: ['#5ea9fc', '#896af7', '#2cb865', '#36c4c2', '#f6a90a', '#f6716f', '#ffb624'],
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: [],
      bottom: 0
    },
    grid: {
      left: 10,
      right: '4%',
      bottom: '0',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '邮件营销',
        type: 'line',
        stack: '总量',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '联盟广告',
        type: 'line',
        stack: '总量',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '视频广告',
        type: 'line',
        stack: '总量',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: '直接访问',
        type: 'line',
        stack: '总量',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: '搜索引擎',
        type: 'line',
        stack: '总量',
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };


  chart.setOption(option);
  return chart;
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      onInit: initChart
    },
    watchContent: [],
    padContent: [],
    watchList: ['收益', '成本'],
    px: ['收益', '成本'],
    nzopen: false, //价格筛选弹窗
    pxopen: false, //排序筛选弹窗
    nzshow: true,
    pxshow: true,
    isfull: false,
    shownavindex: 2,
    // 价格筛选框设置
    watchIndex: 0,
    pdIndex: 0, 
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
    recentDayClick: 'rencent7',
    array: ['美国', '中国', '巴西', '日本'],
    dateQuickArr: [{
      name: '本周',
      id: 1
    }, {
      name: '上周',
      id: 2
    }, {
      name: '本月',
      id: 3
    }, {
      name: '上月',
      id: 4
    }, {
      name: '近3月',
      id: 5
    }],
    qucikDateItem: '本周',
    
  },
  bindDateChange:function(){

  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  rencentClick: function (item) {
    console.log("123"+item);
    this.setData({
      recentDayClick: item.currentTarget.id
    })
  },
  qucikRangeClick(e) {
    let name = e.currentTarget.dataset.classify
    this.setData({
      qucikDateItem: name
    })
  },
  // 价格下拉框是否隐藏
  list: function (e) {
    console.log("this.data.nzopen");
    console.log(this.data.nzopen);
    if (this.data.nzopen) {
      this.setData({
        nzopen: false,
        pxopen: false,
        nzshow: false,
        pxshow: true,
        isfull: false,
        shownavindex: 2
      });
      this.hidebg();
    } else {
      this.setData({
        watchContent: this.data.watchList,
        nzopen: true,
        pxopen: false,
        nzshow: false,
        pxshow: true,
        isfull: true,
        shownavindex: e.currentTarget.dataset.nav
      })
    }
    
  },
  // 排序下拉框是否隐藏
  listpx: function (e) {
    if (this.data.pxopen) {
      this.setData({
        nzopen: false,
        pxopen: false,
        nzshow: true,
        pxshow: false,
        isfull: false,
        shownavindex: 3
      });
      this.hidebg();
    } else {
      this.setData({
        padContent: this.data.px,
        nzopen: false,
        pxopen: true,
        nzshow: true,
        pxshow: false,
        isfull: true,
        shownavindex: e.currentTarget.dataset.nav
      })
    }
    
  },
  // 点击灰色背景隐藏所有的筛选内容
  hidebg: function (e) {
    this.setData({
      qyopen: false,
      nzopen: false,
      pxopen: false,
      nzshow: true,
      pxshow: true,
      qyshow: true,
      isfull: false,
      // shownavindex: 0,
    })
  },
  selectWatch: function (e) {
    this.setData({
      watchIndex: e.currentTarget.dataset.index,
      nzopen: false,
      pxopen: false,
      nzshow: true,
      pxshow: false,
      isfull: false,
      shownavindex: 2
    });
    this.hidebg();
  },
  selectPad: function (e) {
    this.setData({
      pdIndex: e.currentTarget.dataset.index,
      nzopen: false,
      pxopen: false,
      nzshow: true,
      pxshow: false,
      isfull: false,
      shownavindex:3
    });
    this.hidebg();
  }

})