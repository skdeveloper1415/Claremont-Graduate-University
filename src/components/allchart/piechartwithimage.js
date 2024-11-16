import React from 'react'
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts'

export default function PieChartWithImage({data, radius ,chartname ,graphic, legend, center, color,labelline}) {

    const ByAgency = {
        tooltip: { show:false, },

        legend: legend,
        graphic: graphic,
    
        series: [
          {
            name: chartname,
            type: "pie",
            radius: radius,
            center: center,
            avoidLabelOverlap: true,
            label: {
              show: false,
            },
           
            data: data,
            color: color,
          },
        ],
      };

    return (
        <ReactEcharts
        option={ByAgency}
        style={{ height: "100%", width: "100%" }}
      />
    )
}