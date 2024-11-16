import React from 'react'
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts'

export default function StackVerticalBarChart({data,color,xAxisData,xAxisLabel,grid,legend,minv,maxv,barname1,barname2,barname3,barWidth}) {
const ServiceType = {
    legend:legend,
    grid: grid,
    xAxis: [
      {
        type: "category",
        data: xAxisData,
        axisLabel: xAxisLabel,
        axisLine: { show: false },
        axisTick: { show: false },
      },
    ],
    yAxis: [
      {
        type: "value",
        min: minv,
        max: maxv,
        axisLabel: {
          color: "#344054",
          fontSize: 11,
        },
        splitLine: {
          lineStyle: {
            type: "dashed",
            color: '#E4E7EC'
          }
        },
      },
    ],
    series: [
      {
        name:barname1,
        type: "bar",
        stack: "Ad",
        barWidth: barWidth,
        emphasis: {
          focus: "series",
        },
        data:data[0] ,
        color:color[0],
        label: {
          show: true,
          position: "inside",
          fontSize: 16,
          color: "#F0F4F5",
        },
      },
      {
        name:barname2,
        type: "bar",
        stack: "Ad",
        emphasis: {
          focus: "series",
        },
        data:data[1] ,
        color:color[1],
        label: {
          show: true,
          position: "inside",
          fontSize: 16,
          color: "#F0F4F5",
        },
      },
      {
        name:barname3,
        type: "bar",
        stack: "Ad",
        emphasis: {
          focus: "series",
        },
        data:data[2],
        color: color[2],
        label: {
          show: true,
          position: "inside",
          fontSize: 16,
          color: "#F0F4F5",
        },
        itemStyle: {
            borderRadius: [5, 5, 0, 0],
        },
      },
    ],
  };
  return (
    <ReactEcharts
        option={ServiceType}
        style={{ height: "100%", width: "100%" }}
        opts={{ renderer: 'svg' }}
     />
  )


}