import React from "react";
import ReactEcharts from "echarts-for-react";
import { color } from "echarts";
import { useTheme } from "next-themes";

export const PieChartColorFull = ({legend,color,radius,center,data,data1,radius1,center1}) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const option = {
    color:color,
    legend: legend,
  

    series: [
      {
        name: "In Process",
        type: "pie",
        radius: radius,
        center: center,
        width: "100%",
        height: "100%",
        data:data,
     
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        label: {
          show: true,
          color: currentTheme == "light" ? "#424242" : "#fff",
          alignTo: "labelLine",
          Fontweight:500,
          bleedMargin: 8,
          fontSize: 12,
          // backgroundColor:currentTheme == "light" ? "#F2F4F7" : "#0B0B0E",
          padding: [10, 10, 10, 10],
          borderRadius: [4, 4, 4, 4],
          length: 30,
          // position: "outer",
        },
        labelLine: {
          length: 15,
          length2: 10,
          type: "solid",
          width: 1,
          lineStyle: {
            color: "#424242"
          },
     
          
           label: {
            alignTo: 'edge',
            minMargin: 5,
            edgeDistance: 15,
            lineHeight: 15,
        rich: {
          time: {
            fontSize: 10,
            color: '#999'
          }
        }
      },
        },
        // itemStyle: {
        //   borderColor: "rgba(255, 255, 255, 1)",
        //   borderWidth: 1.5,
        // },
      },
      // Sec charts
      {
        name: "Sujit",
        type: "pie",
        radius: radius1,
        center: center1,
        width: "100%",
        height: "100%",
        data:data1,
        emphasis: {
          show:false,
          disabled: true,
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        label: {
          show: false,
          color: currentTheme == "light" ? "#424242" : "#fff",
               },
              
  
        // itemStyle: {
        //   borderColor: "rgba(255, 255, 255, 1)",
        //   borderWidth: 1.5,
        // },
      },
    ],
  
  };

  return (
    <ReactEcharts
      option={option}
      style={{  height: "100%" }}
    />
  );
};
