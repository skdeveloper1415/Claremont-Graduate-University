import React from 'react'
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts'
import { useTheme } from 'next-themes';

export default function VerticalBarChart({ data, grid,legend, xAxisLabeldata,name,maxvalue,minvalue,intervalvalue, barcolor, labelcolor="#fff", barwidth='50%',labelposition,rotate }) {

    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const options = {
        legend: legend,
        grid: grid,
        tooltip: {
          trigger: 'item'
        },
        xAxis: {
            type: 'category',
            data: xAxisLabeldata,
            axisLine: {
                show: true,
                lineStyle: {
                  color: currentTheme == "dark" ? "#374151" : "#CFCCC3",
                }
              },
              axisLabel: {                
                    color: currentTheme == "dark" ? "#AAA" : "#242526",
                interval: 0,
                fontSize: 9,
                rotate: rotate,
               },
              axisTick: {
                show: false
              }
        },
        yAxis: {
            type: "value",
            show: true,
            data: data.label,
            min:minvalue,
            interval:intervalvalue,
            max:maxvalue,
            axisLabel: {
              
                color: currentTheme == "dark" ? "#AAA" : "#242526",
                formatter: '{value}',
              },
              splitLine: {
                show: true,
                lineStyle: {
                  type: "dashed",
              
                  color: currentTheme == "dark" ? "#1F2A37" : "#E6E3D9",
                  width: 1
                }
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: "#CFCCC3"
                }
              },
        },
        series: [
            {
                name: name[0],
                type: 'bar',
                stack: 'total',
                color: barcolor,
                barWidth: barwidth,
                label: {
                  show: true,
                  formatter: '{c}',
                  position:labelposition,
                  color: labelcolor
                },
                emphasis: {
                    focus: 'series'
                },
                data: data,
                itemStyle: {
                    borderRadius: [2, 2, 0, 0],
                },
            },
        ]
    };
    return (
        <ReactEcharts
            option={options}
            style={{ height: "100%", width: "100%" }}
            opts={{ renderer: 'svg' }}
        />
    )
}