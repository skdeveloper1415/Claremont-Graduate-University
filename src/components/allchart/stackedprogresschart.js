import React from 'react'
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts'

export default function StackedProgressChart({data,lableshow1=true,lableshow2=true,lableshow3=true,lableshow4=true, color1,borderRadius3,borderRadius2, borderRadius1, borderRadius4, color2, color3, color4, name1, name2,name3,name4, legend, grid}) {

  const barChart = {
    legend: legend,
    grid: grid,
    xAxis: {
      type: 'value',
      show: false
    },
    yAxis: {
      type: 'category',
      show: false
    },
    series: [
      {
        name: name1,
        color: color1,
        type: 'bar',
        stack: 'total',
        itemStyle: {
          borderRadius: borderRadius1
        },

        label: {
          show: lableshow1,
          color: '#FFFFFF',
          position: 'inside',
          formatter: function (params) {
            return params.value + '% '
          },
          textStyle: {
            fontSize: 10,
            lineHeight: 11
          }
        },

        data: data.value1
      },
      {
        name: name2,
        color: color2,
        type: 'bar',
        itemStyle: {
          borderRadius: borderRadius2
        },
        stack: 'total',
        label: {

          show: lableshow2,
          color: '#FFFFFF',
          position: 'inside',
          formatter: function (params) {
            return params.value + '%    '
          },
          textStyle: {
            fontSize: 10,
            lineHeight: 11,
          }
        },

        data:  data.value2
      },
      {
        name: name3,
        color: color3,
        type: 'bar',
        itemStyle: {
          borderRadius: borderRadius3
        },
        stack: 'total',
        label: {
          show: lableshow3,
          color:'#FFFFFF',
          position: 'inside',
          formatter: function (params) {
            return params.value + '%'
          },
          textStyle: {
            fontSize: 10,
            lineHeight: 11,
          }
        },
       
        data: data.value3
      },
      {
        name: name4,
        color: color4,
        type: 'bar',
        itemStyle: {
          borderRadius: borderRadius4
        },
        stack: 'total',
        label: {
          show: lableshow4,
          color:'#FFFFFF',
          position: 'inside',
          formatter: function (params) {
            return params.value + '%'
          },
          textStyle: {
            fontSize: 10,
            lineHeight: 11,
          }
        },
        data: data.value4
      }

    ]
  };


  return (

    <ReactEcharts
      echarts={echarts}
      option={barChart} style={{ width: '100%', height: '100%', }}
      opts={{ renderer: 'svg' }}
    />

  )
}
