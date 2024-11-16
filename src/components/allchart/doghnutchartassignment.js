import React from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
import { useTheme } from "next-themes";

export default function DoughnutChartAssignment({data,color,radius}) {

  const option = {
    color:color,
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: 'Assignment',
        type: 'pie',
        radius:radius,
        itemStyle: {
          borderRadius: 1,
          borderColor: '#fff',
          borderWidth: 2
        },
        data: data,
  
      }
    ]
  };

  return (
    <ReactEcharts
      option={option}
      style={{ height: "100%", width: "100%" }}
      opts={{ renderer: "svg" }}
    />
  );
}
