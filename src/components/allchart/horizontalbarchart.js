import React from 'react'
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts'
import { useTheme } from 'next-themes';

export default function HorizontalBarChart({ data, label, legend, minv, maxv, xAxisData, yAxisData, yAxisStatus, yAxisLable, grid, barcolor, gradiantColor }) {

    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const option = {
        legend: legend,
        tooltip: {
            trigger: 'item'
          },
        grid: grid,
        xAxis: {
         
            type: 'value',
            data: data.label,
            min: minv,
            max: maxv,
            axisLine: {
                show: false,
                lineStyle: {
                    color: currentTheme === 'dark' ? '#2A2C32' : "#EAEDF3"
                }
            },
            axisLabel: {
                show: true,
                color: currentTheme === 'dark' ? '#AAAAAA' : "#424242",
                formatter: '{value}',
                fontSize: 8,
                fontWeight: "normal",
                interval: 0
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            }
            // {
            //     type: 'category',
            //     // data: ['75','75','75','75','75',],
            //     axisLabel: {
            //       color: "#53565A",
            //       formatter: '{value} %',
            //       show: true,
            //     },
            //     axisLine: {
            //       show: false
            //     },
            //     axisTick: {
            //       show: false
            //     },
            //     splitLine: {
            //       show: true
            //     }
            //     }
        },
        yAxis: [
            {
            type: 'category',
            interval: 8,
            axisLine: {
                show: false,
                lineStyle: {
                    color: "#EAEDF3",
                }
            },
            data: data.label,
            axisTick: {
                show:false
            },
            axisLabel: {
                // color: "#424242",
                color: currentTheme == "dark" ? "#AAA" : "#424242",
                show: true,
                fontSize:10,
                lineHeight: 16,
             
            },
            splitLine: {
                show: false,
                lineStyle: {
                    type: "dashed",
                    color: "rgba(219, 212, 212, 1)"
                }
            }
        },
        // {
        //     type: 'category',
        //     // data: ['75','75','75','75','75',],
        //     axisLabel: {
        //       color: "#53565A",
        //       formatter: '{value} %',
        //       show: true,
        //     },
        //     axisLine: {
        //       show: false
        //     },
        //     axisTick: {
        //       show: false
        //     },
        //     splitLine: {
        //       show: true
        //     }
        //     }
        ],
        series: [
            {
                name: 'Clean',
                type: 'bar',
                stack: 'total',
                color: '#FF8C38',
                barWidth: "80%",
                showBackground: true,
                backgroundStyle: {
                color: currentTheme == "dark" ? "#13161B" : '#fff',
                borderRadius: [0, 2, 2, 0]
                },
                label: label,
                emphasis: {
                    focus: 'series'
                },
                data: data.value,
                itemStyle: {
                    borderRadius: [0, 2, 2, 0],
                },
            },

        ]
    };
    return (
        <ReactEcharts
            option={option}
            style={{ height: "100%", width: "100%" }}
            opts={{ renderer: 'svg' }}
        />
    )
}