import * as echarts from '../../assets/ec-canvas/echarts';

let chart = null;

function initChart(canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    color: ['#5ea9fc', '#896af7', '#2cb865', '#36c4c2', '#f6a90a', '#f6716f', '#ffb624'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      },
      confine: true
    },
    legend: {
      data: ['热度', '正面', '负面']
    },
    grid: {
      left: 20,
      right: 20,
      bottom: 15,
      top: 40,
      containLabel: true
    },
    xAxis: [
      {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
        axisLabel: {
          color: '#666'
        }
      }
    ],
    yAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        data: ['汽车之家', '今日头条', '百度贴吧', '一点资讯', '微信', '微博', '知乎'],
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
        axisLabel: {
          color: '#666'
        }
      }
    ],
    series: [
      {
        name: '正面',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true
          }
        },
        data: [120, 102, 141, 174, 190, 250, 220],
        itemStyle: {
          // emphasis: {
          //   color: '#32c5e9'
          // }
        }
      },
      {
        name: '负面',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'left'
          }
        },
        data: [-20, -32, -21, -34, -90, -130, -110],
        itemStyle: {
          // emphasis: {
          //   color: '#67e0e3'
          // }
        }
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
    headItem: 'nav1',
    headArray: [{
      name: 'nav1'
    }, {
        name: 'nav2'
    }],
    select: false,
    tihuoWay: '门店自提',
    ec: {
      onInit: initChart
    },
    recentDayClick:'rencent7',
    array: ['美国', '中国', '巴西', '日本'],
    dateQuickArr:[{
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
        id:5
      }],
    qucikDateItem:'本周',
    tagArr: [{
      name: '标签1'
    }, {
      name: '标签2'
    }, {
      name: '标签3'
    }, {
      name: '标签4'
    }, {
      name: '标签5'
    }, {
      name: '标签6'
    }]
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  bindShowMsg() {
    this.setData({
      select: !this.data.select
    })
  },
  mySelect(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      tihuoWay: name,
      select: false
    })
  },
  rencentClick:function(item){
    this.setData({
      recentDayClick: item.currentTarget.id
    })
  },
  headNavClick: function (event) {
    let classify = event.currentTarget.dataset.classify;
    // console.log(classify)  //输出的结果就是你点击的
    this.setData({
      headItem: classify,  //更新
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  qucikRangeClick(e){
    let name = e.currentTarget.dataset.classify
    this.setData({
      qucikDateItem: name
    })
  }

})