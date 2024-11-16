import React from 'react'
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts'
import { useTheme } from 'next-themes';

export default function BarchartWithImage({  data, grid,legend, xAxisLabeldata,name,maxvalue,minvalue,intervalvalue, barcolor, barwidth='50%',labelposition,rotate }) {

    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const options = {
        legend: legend,
        grid: grid,
        xAxis: {
            type: 'category',
            data: xAxisLabeldata,
            axisLine: {
                show: false,
              },
              axisLabel: {
                show: false,
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
                show: false,
               },
              splitLine: {
                show: false
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
                  color: "#fff"
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