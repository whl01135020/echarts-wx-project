import * as echarts from '../../assets/ec-canvas/echarts';

let chart = null;

function initChart(canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  let  option = {
    title: {
      text: '某站点用户访问来源',
      subtext: '纯属虚构',
      x: 'center'
    },
    color: ['#5ea9fc', '#896af7', '#2cb865', '#36c4c2', '#f6a90a', '#f6716f', '#ffb624'],
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告'],
      bottom: 0,
      itemGap: 20,
      left: 'bottom',
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
          { value: 335, name: '直接访问' },
          { value: 310, name: '邮件营销' },
          { value: 234, name: '联盟广告' },
          { value: 135, name: '视频广告' }
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  chart.setOption(option);
  return chart;
}

Page({
  data: {
    headItem: 'nav1',
    headArray: [{
      name: 'nav1'
    }, {
      name: 'nav2'
    }],
    activeYate: 7.89,
    activeChain: -3.21,
    activeDtaArray: [{
      date: '2019-02-17',
      yRate: 34.56,
      chainRate: 45.67
    }, {
      date: '2019-02-16',
      yRate: -1.23,
      chainRate: -7.65
    }, {
      date: '2019-02-15',
      yRate: 10.98,
      chainRate: 1.23
    }, {
      date: '2019-02-14',
      yRate: -5.43,
      chainRate: 12.34
    }],
    ec: {
      onInit: initChart
    }
  },
  headNavClick: function (event) {
    let classify = event.currentTarget.dataset.classify;
    this.setData({
      headItem: classify,  
    })
  },

})