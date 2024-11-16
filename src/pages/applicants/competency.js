import React, { useState, useRef } from "react";
import { Noto_Serif_Georgian } from "@next/font/google";
import Link from "next/link";
import { ScrollPanel } from "primereact/scrollpanel";
import ChartWrapper from "@/components/chartwrapper/competency";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useTheme } from "next-themes";
import ReactEcharts from "echarts-for-react";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Index() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const averageCompetency = {
    tooltip: { trigger: "axis" },
    legend: {
      show: false,
    },
    grid: {
      left: "6%",
      right: "6%",
      bottom: "3%",
      top: "10%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        name: "Competency", // Add the common title for the x-axis here
        nameLocation: "center", // Set the position of the x-axis name to the center
        nameGap: 65, // Adjust the gap between the x-axis name and the axis
        nameTextStyle: {
          color: currentTheme == "dark" ? "#818181" : "#888888", // Set title text color
          fontSize: 12, // Set title font size
        },
        splitLine: { show: false },
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: {
          color: currentTheme == "dark" ? "#818181" : "#6C768B",
          fontSize: 10,
          rotate: 75,
          overflow: "truncate",
          width: 50,
          lineHeight: 14,
        },
        data: [
          "Philosophy \n of Education Relationships",
          "Pedagogy \n Relationships",
          "Science of \n Learning Relationships",
          "Socio-\n Emotional Learning Relationships",
          "Funds of \n Knowledge Relationships",
          "School \n Climate & Culture Relationships",
          "Community \n & Cultural Wealth ",
          "Socio-\n Political Identity Relationships",
          "Global \n Perspective Relationships",
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "Score",
        nameLocation: "center", // Set the position of the y-axis name to the center
        nameGap: 40, // Adjust the gap between the y-axis name and the axis
        nameTextStyle: {
          color: currentTheme == "dark" ? "#818181" : "#888888", // Set title text color
          fontSize: 12, // Set title font size
        },
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {
          color: currentTheme == "dark" ? "#818181" : "#6C768B",
          fontSize: 10,
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
            color: currentTheme == "dark" ? "#2A2C32" : "#F2EEEE",
          },
        },
      },
    ],
    series: [
      {
        name: "Male",
        type: "bar",
        stack: "Ad",
        barWidth: 40,
        label: {
          show: true,
          position: "top",
          color: currentTheme == "dark" ? "#AAAAAA" : "#424242",
          formatter: "{c}",
        },
        itemStyle: {
          color: currentTheme == "dark" ? "#397581" : "#5DAAB3",
        },
        emphasis: { focus: "series" },
        data: [240, 222, 210, 180, 195, 168, 175, 182, 198],
      },
    ],
  };

  const podSnapshot = {
    tooltip: { trigger: "axis" },
    legend: {
      show: false,
    },
    grid: {
      left: "6%",
      right: "6%",
      bottom: "3%",
      top: "10%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        name: "POD’s", // Add the common title for the x-axis here
        nameLocation: "center", // Set the position of the x-axis name to the center
        nameGap: 65, // Adjust the gap between the x-axis name and the axis
        nameTextStyle: {
          color: currentTheme == "dark" ? "#818181" : "#888888", // Set title text color
          fontSize: 12, // Set title font size
        },
        splitLine: { show: false },
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: {
          color: currentTheme == "dark" ? "#818181" : "#6C768B",
          fontSize: 10,
          rotate: 75,
          overflow: "truncate",
          width: 50,
          lineHeight: 14,
        },
        data: [
          "Philosophy \n of Education Relationships",
          "Pedagogy \n Relationships",
          "Science of \n Learning Relationships",
          "Socio-\n Emotional Learning Relationships",
          "Funds of \n Knowledge Relationships",
          "School \n Climate & Culture Relationships",
          "Community \n & Cultural Wealth ",
          "Socio-\n Political Identity Relationships",
          "Global \n Perspective Relationships",
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "Value",
        nameLocation: "center", // Set the position of the y-axis name to the center
        nameGap: 40, // Adjust the gap between the y-axis name and the axis
        nameTextStyle: {
          color: currentTheme == "dark" ? "#818181" : "#888888", // Set title text color
          fontSize: 12, // Set title font size
        },
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {
          color: currentTheme == "dark" ? "#818181" : "#6C768B",
          fontSize: 10,
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
            color: currentTheme == "dark" ? "#2A2C32" : "#F2EEEE",
          },
        },
      },
    ],
    series: [
      {
        name: "Male",
        type: "bar",
        stack: "Ad",
        barWidth: 40,
        label: {
          show: true,
          position: "top",
          color: currentTheme == "dark" ? "#AAAAAA" : "#424242",
          formatter: "{c}",
        },
        itemStyle: {
          color: currentTheme == "dark" ? "#968FC3" : "#968FC3",
        },
        emphasis: { focus: "series" },
        data: [132, 183, 142, 115, 144, 100, 108, 142, 198],
      },
    ],
  };

  const midTermEvaluatio = {
    tooltip: { trigger: "axis" },
    legend: {
      show: false,
    },
    grid: {
      left: "6%",
      right: "6%",
      bottom: "3%",
      top: "10%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        name: "X- Axis", // Add the common title for the x-axis here
        nameLocation: "center", // Set the position of the x-axis name to the center
        nameGap: 65, // Adjust the gap between the x-axis name and the axis
        nameTextStyle: {
          color: currentTheme == "dark" ? "#818181" : "#888888", // Set title text color
          fontSize: 12, // Set title font size
        },
        splitLine: { show: false },
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: {
          color: currentTheme == "dark" ? "#818181" : "#6C768B",
          fontSize: 10,
          rotate: 75,
          overflow: "truncate",
          width: 50,
          lineHeight: 14,
        },
        data: [
          "Philosophy \n of Education Relationships",
          "Pedagogy \n Relationships",
          "Science of \n Learning Relationships",
          "Socio-\n Emotional Learning Relationships",
          "Funds of \n Knowledge Relationships",
          "School \n Climate & Culture Relationships",
          "Community \n & Cultural Wealth ",
          "Socio-\n Political Identity Relationships",
          "Global \n Perspective Relationships",
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "Value",
        nameLocation: "center", // Set the position of the y-axis name to the center
        nameGap: 40, // Adjust the gap between the y-axis name and the axis
        nameTextStyle: {
          color: currentTheme == "dark" ? "#818181" : "#888888", // Set title text color
          fontSize: 12, // Set title font size
        },
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {
          color: currentTheme == "dark" ? "#818181" : "#6C768B",
          fontSize: 10,
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
            color: currentTheme == "dark" ? "#2A2C32" : "#F2EEEE",
          },
        },
      },
    ],
    series: [
      {
        name: "Male",
        type: "bar",
        stack: "Ad",
        barWidth: 40,
        label: {
          show: true,
          position: "top",
          color: currentTheme == "dark" ? "#AAAAAA" : "#424242",
          formatter: "{c}",
        },
        itemStyle: {
          color: currentTheme == "dark" ? "#9E8D71" : "#9E8D71",
        },
        emphasis: { focus: "series" },
        data: [132, 183, 142, 115, 144, 100, 108, 142, 198],
      },
    ],
  };

  const anchorAssignments = {
    tooltip: { trigger: "axis" },
    legend: {
      show: false,
    },
    grid: {
      left: "8%",
      right: "3%",
      bottom: "3%",
      top: "10%",
      containLabel: true,
    },
    yAxis: [
      {
        type: "category",
        name: "Assignments", // Add the common title for the x-axis here
        nameLocation: "center", // Set the position of the y-axis name to the center
        nameGap: 140, // Adjust the gap between the y-axis name and the axis
        nameTextStyle: {
          color: currentTheme == "dark" ? "#818181" : "#888888", // Set title text color
          fontSize: 12, // Set title font size
        },
        splitLine: { show: false },
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: {
          color: currentTheme == "dark" ? "#818181" : "#6C768B",
          fontSize: 10,
          overflow: "truncate",
          width: 120,
        },
        data: [
          "Global Perspective Relationships",
          "Socio-Political Identity Relationships",
          "Community & Cultural Wealth",
          "School Climate & Culture Relationships",
          "Funds of Knowledge Relationships",
          "Socio-Emotional Learning Relationships",
          "Science of Learning Relationships",
          "Pedagogy Relationships",
          "Philosophy of Education Relationships",
        ],
      },
    ],
    xAxis: [
      {
        type: "value",
        name: "Headcount", // Add the common title for the x-axis here
        nameLocation: "center", // Set the position of the x-axis name to the center
        nameGap: 30, // Adjust the gap between the x-axis name and the axis
        nameTextStyle: {
          color: "#6C768B", // Set title text color
          fontSize: 12, // Set title font size
        },
        min: 0,
        max: 60,
        interval: 20,
        axisLabel: {
          color: currentTheme == "dark" ? "#818181" : "#6C768B",
          fontSize: 10,
          formatter: "{value}",
        },
        axisLine: {
          show: true,
          lineStyle: { color: currentTheme == "dark" ? "#2A2C32" : "#EAEDF3" },
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
            color: currentTheme == "dark" ? "#2A2C32" : "#EAEDF3",
          },
        },
      },
    ],

    series: [
      {
        name: "Male",
        type: "bar",
        stack: "Ad",
        barWidth: 20,
        label: {
          show: true,
          position: "right",
          color: currentTheme == "dark" ? "#AAAAAA" : "#424242",
          formatter: "{c}",
        },
        itemStyle: {
          color: currentTheme == "dark" ? "#FACA15" : "#E3A008",
        },
        emphasis: { focus: "series" },
        data: [43, 30, 23, 50, 43, 55, 45, 34, 25],
      },
    ],
  };

  const finalTermEvaluation = {
    tooltip: { trigger: "axis" },
    legend: {
      show: false,
    },
    grid: {
      left: "8%",
      right: "8%",
      bottom: "3%",
      top: "10%",
      containLabel: true,
    },
    yAxis: [
      {
        type: "category",
        name: "Domains", // Add the common title for the x-axis here
        nameLocation: "center", // Set the position of the y-axis name to the center
        nameGap: 140, // Adjust the gap between the y-axis name and the axis
        nameTextStyle: {
          color: currentTheme == "dark" ? "#818181" : "#888888", // Set title text color
          fontSize: 12, // Set title font size
        },
        splitLine: { show: false },
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: {
          color: currentTheme == "dark" ? "#818181" : "#6C768B",
          fontSize: 10,
          overflow: "truncate",
          width: 120,
        },
        data: [
          "Global Perspective Relationships",
          "Socio-Political Identity Relationships",
          "Community & Cultural Wealth",
          "School Climate & Culture Relationships",
          "Funds of Knowledge Relationships",
          "Socio-Emotional Learning Relationships",
          "Science of Learning Relationships",
          "Pedagogy Relationships",
          "Philosophy of Education Relationships",
        ],
      },
    ],
    xAxis: [
      {
        type: "value",
        name: "Headcount", // Add the common title for the x-axis here
        nameLocation: "center", // Set the position of the x-axis name to the center
        nameGap: 30, // Adjust the gap between the x-axis name and the axis
        nameTextStyle: {
          color: "#6C768B", // Set title text color
          fontSize: 12, // Set title font size
        },
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {
          color: currentTheme == "dark" ? "#818181" : "#6C768B",
          fontSize: 10,
          formatter: "{value}",
        },
        axisLine: {
          show: true,
          lineStyle: { color: currentTheme == "dark" ? "#2A2C32" : "#EAEDF3" },
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
            color: currentTheme == "dark" ? "#2A2C32" : "#EAEDF3",
          },
        },
      },
    ],

    series: [
      {
        name: "Male",
        type: "bar",
        stack: "Ad",
        barWidth: 20,
        label: {
          show: true,
          position: "right",
          color: currentTheme == "dark" ? "#AAAAAA" : "#424242",
          formatter: "{c}",
        },
        itemStyle: {
          color: currentTheme == "dark" ? "#FF9475" : "#FF9475",
        },
        emphasis: { focus: "series" },
        data: [211, 160, 174, 186, 211, 206, 239, 250, 174],
      },
    ],
  };
  return (
    <>
      {/* row */}
      <Tabs>
        <div className="flex items-center justify-between">
          <div className={myNotoSerifGeorgian.className}>
            <div className="text-[#262626] dark:text-[#FFFFFF] text-[32px] xl:text-[1.667vw]">
              Competency
            </div>
          </div>
          <div className="col customTabs">
            <TabList>
              <Tab>Prelims</Tab>
              <Tab>Induction</Tab>
            </TabList>
          </div>
        </div>
        {/* row */}
        <div className="PersonalDetails competency-wrap mt-[32px] xl:mt-[1.667vw]">
          <ScrollPanel style={{ width: "100%", height: "100%" }}>
            <TabPanel>
              <div className="space-y-[20px] xl:space-y-[1.042vw]">
                {/* row */}
                <div className="bg-white dark:bg-[#13161B] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08)] rounded-[8px] xl:rounded-[0.417vw] p-[20px] xl:p-[1.042vw]">
                  <ChartWrapper
                    title={"Average Competency Snapshot"}
                    ExportIcon={true}
                    tabSection={true}
                    infoIcon={true}
                    bulbIcon={true}
                    downloadIcon={true}
                    graphIcon={true}
                    data={
                      <div className="wapper">
                        <div className="grid grid-cols-2">
                          <div className="col">
                            <div className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium mb-[8px] xl:mb-[0.417vw]">
                              Total Avg. Score
                            </div>
                            <div className="flex items-end gap-[8px] gap-[0.417vw]">
                              <div className="text-[#262626] dark:text-white text-[36px] xl:text-[1.875vw] font-semibold leading-none">
                                197
                              </div>
                              <div className="flex gap-[8px] gap-[0.417vw]">
                                <span className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium">
                                  -4.2%
                                </span>
                                <span className="text-[#F82A2A] text-[16px] xl:text-[0.833vw] leading-none">
                                  <i className="cgupod-circle-fill-r-down"></i>
                                </span>
                                <span className="text-[#888888] dark:text-[#818181] text-[12px] xl:text-[0.625vw]">
                                  vs last month
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium mb-[8px] xl:mb-[0.417vw]">
                              Count of Domains Above 200
                            </div>
                            <div className="flex items-end gap-[8px] gap-[0.417vw]">
                              <div className="text-[#262626] dark:text-white text-[36px] xl:text-[1.875vw] font-semibold leading-none">
                                3
                              </div>
                              <div className="flex gap-[8px] gap-[0.417vw]">
                                <span className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium">
                                  -10%
                                </span>
                                <span className="text-[#F82A2A] text-[16px] xl:text-[0.833vw] leading-none">
                                  <i className="cgupod-circle-fill-r-down"></i>
                                </span>
                                <span className="text-[#888888] dark:text-[#818181] text-[12px] xl:text-[0.625vw]">
                                  vs last month
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full h-[382px] xl:h-[19.90vw]">
                          <ReactEcharts
                            option={averageCompetency}
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      </div>
                    }
                  />
                </div>
                {/* row */}
                <div className="bg-white dark:bg-[#13161B] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08)] rounded-[8px] xl:rounded-[0.417vw] p-[20px] xl:p-[1.042vw]">
                  <ChartWrapper
                    title={"Anchor Assignments"}
                    ExportIcon={true}
                    tabSection={true}
                    infoIcon={true}
                    bulbIcon={true}
                    downloadIcon={true}
                    graphIcon={true}
                    data={
                      <div className="wapper">
                        <div className="grid grid-cols-2">
                          <div className="col">
                            <div className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium mb-[8px] xl:mb-[0.417vw]">
                              Total Anc. Assignments
                            </div>
                            <div className="flex items-end gap-[8px] gap-[0.417vw]">
                              <div className="text-[#262626] dark:text-white text-[36px] xl:text-[1.875vw] font-semibold leading-none">
                                38
                              </div>
                              <div className="flex gap-[8px] gap-[0.417vw]">
                                <span className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium">
                                  -4.2%
                                </span>
                                <span className="text-[#F82A2A] text-[16px] xl:text-[0.833vw] leading-none">
                                  <i className="cgupod-circle-fill-r-down"></i>
                                </span>
                                <span className="text-[#888888] dark:text-[#818181] text-[12px] xl:text-[0.625vw]">
                                  vs last month
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium mb-[8px] xl:mb-[0.417vw]">
                              Count of Assignments Above 38
                            </div>
                            <div className="flex items-end gap-[8px] gap-[0.417vw]">
                              <div className="text-[#262626] dark:text-white text-[36px] xl:text-[1.875vw] font-semibold leading-none">
                                5
                              </div>
                              <div className="flex gap-[8px] gap-[0.417vw]">
                                <span className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium">
                                  -10%
                                </span>
                                <span className="text-[#F82A2A] text-[16px] xl:text-[0.833vw] leading-none">
                                  <i className="cgupod-circle-fill-r-down"></i>
                                </span>
                                <span className="text-[#888888] dark:text-[#818181] text-[12px] xl:text-[0.625vw]">
                                  vs last month
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full h-[300px] xl:h-[15.625vw]">
                          <ReactEcharts
                            option={anchorAssignments}
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      </div>
                    }
                  />
                </div>
                {/* row */}
                <div className="bg-white dark:bg-[#13161B] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08)] rounded-[8px] xl:rounded-[0.417vw] p-[20px] xl:p-[1.042vw]">
                  <ChartWrapper
                    title={"POD’s Snapshot"}
                    ExportIcon={true}
                    tabSection={true}
                    infoIcon={true}
                    bulbIcon={true}
                    downloadIcon={true}
                    graphIcon={true}
                    data={
                      <div className="wapper">
                        <div className="grid grid-cols-2">
                          <div className="col">
                            <div className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium mb-[8px] xl:mb-[0.417vw]">
                              Avg POD’S
                            </div>
                            <div className="flex items-end gap-[8px] gap-[0.417vw]">
                              <div className="text-[#262626] dark:text-white text-[36px] xl:text-[1.875vw] font-semibold leading-none">
                                38
                              </div>
                              <div className="flex gap-[8px] gap-[0.417vw]">
                                <span className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium">
                                  -4.2%
                                </span>
                                <span className="text-[#F82A2A] text-[16px] xl:text-[0.833vw] leading-none">
                                  <i className="cgupod-circle-fill-r-down"></i>
                                </span>
                                <span className="text-[#888888] dark:text-[#818181] text-[12px] xl:text-[0.625vw]">
                                  vs last month
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium mb-[8px] xl:mb-[0.417vw]">
                              Top POD Domain
                            </div>
                            <div className="flex items-center gap-[8px] gap-[0.417vw]">
                              <div className="text-[#262626] dark:text-white text-[36px] xl:text-[1.875vw] font-semibold leading-none">
                                55
                              </div>
                              <div className="flex gap-[8px] gap-[0.417vw]">
                                <span className="text-[#888888] text-[14px] xl:text-[0.729vw] leading-[1.2]">
                                  Socio-Emotional Learning <br /> Relationships
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full h-[382px] xl:h-[19.90vw]">
                          <ReactEcharts
                            option={podSnapshot}
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      </div>
                    }
                  />
                </div>
                {/* row */}
                <div className="bg-white dark:bg-[#13161B] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08)] rounded-[8px] xl:rounded-[0.417vw] p-[20px] xl:p-[1.042vw]">
                  <ChartWrapper
                    title={"Mid- Term Evaluatio n Score Snapshot"}
                    ExportIcon={true}
                    tabSection={true}
                    infoIcon={true}
                    bulbIcon={true}
                    downloadIcon={true}
                    graphIcon={true}
                    data={
                      <div className="wapper">
                        <div className="grid grid-cols-2">
                          <div className="col">
                            <div className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium mb-[8px] xl:mb-[0.417vw]">
                              Total Avg. Score
                            </div>
                            <div className="flex items-end gap-[8px] gap-[0.417vw]">
                              <div className="text-[#262626] dark:text-white text-[36px] xl:text-[1.875vw] font-semibold leading-none">
                                146
                              </div>
                              <div className="flex gap-[8px] gap-[0.417vw]">
                                <span className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium">
                                  -4.2%
                                </span>
                                <span className="text-[#F82A2A] text-[16px] xl:text-[0.833vw] leading-none">
                                  <i className="cgupod-circle-fill-r-down"></i>
                                </span>
                                <span className="text-[#888888] dark:text-[#818181] text-[12px] xl:text-[0.625vw]">
                                  vs last month
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium mb-[8px] xl:mb-[0.417vw]">
                              Count of Domains Above 150
                            </div>
                            <div className="flex items-end gap-[8px] gap-[0.417vw]">
                              <div className="text-[#262626] dark:text-white text-[36px] xl:text-[1.875vw] font-semibold leading-none">
                                3
                              </div>
                              <div className="flex gap-[8px] gap-[0.417vw]">
                                <span className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium">
                                  -10%
                                </span>
                                <span className="text-[#F82A2A] text-[16px] xl:text-[0.833vw] leading-none">
                                  <i className="cgupod-circle-fill-r-down"></i>
                                </span>
                                <span className="text-[#888888] dark:text-[#818181] text-[12px] xl:text-[0.625vw]">
                                  vs last month
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full h-[382px] xl:h-[19.90vw]">
                          <ReactEcharts
                            option={midTermEvaluatio}
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      </div>
                    }
                  />
                </div>
                {/* row */}
                <div className="bg-white dark:bg-[#13161B] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08)] rounded-[8px] xl:rounded-[0.417vw] p-[20px] xl:p-[1.042vw]">
                  <ChartWrapper
                    title={"Final - Term Evaluation Scores Snapshot"}
                    ExportIcon={true}
                    tabSection={true}
                    infoIcon={true}
                    bulbIcon={true}
                    downloadIcon={true}
                    graphIcon={true}
                    data={
                      <div className="wapper">
                        <div className="grid grid-cols-2">
                          <div className="col">
                            <div className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium mb-[8px] xl:mb-[0.417vw]">
                              Total Avg. Score
                            </div>
                            <div className="flex items-end gap-[8px] gap-[0.417vw]">
                              <div className="text-[#262626] dark:text-white text-[36px] xl:text-[1.875vw] font-semibold leading-none">
                                236
                              </div>
                              <div className="flex gap-[8px] gap-[0.417vw]">
                                <span className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium">
                                  -4.2%
                                </span>
                                <span className="text-[#F82A2A] text-[16px] xl:text-[0.833vw] leading-none">
                                  <i className="cgupod-circle-fill-r-down"></i>
                                </span>
                                <span className="text-[#888888] dark:text-[#818181] text-[12px] xl:text-[0.625vw]">
                                  vs last month
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium mb-[8px] xl:mb-[0.417vw]">
                              Count of Domains Above 200
                            </div>
                            <div className="flex items-end gap-[8px] gap-[0.417vw]">
                              <div className="text-[#262626] dark:text-white text-[36px] xl:text-[1.875vw] font-semibold leading-none">
                                5
                              </div>
                              <div className="flex gap-[8px] gap-[0.417vw]">
                                <span className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium">
                                  -10%
                                </span>
                                <span className="text-[#F82A2A] text-[16px] xl:text-[0.833vw] leading-none">
                                  <i className="cgupod-circle-fill-r-down"></i>
                                </span>
                                <span className="text-[#888888] dark:text-[#818181] text-[12px] xl:text-[0.625vw]">
                                  vs last month
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full h-[300px] xl:h-[15.625vw]">
                          <ReactEcharts
                            option={finalTermEvaluation}
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      </div>
                    }
                  />
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="space-y-[20px] xl:space-y-[1.042vw]">
                {/* row */}
                <div className="bg-white dark:bg-[#13161B] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08)] rounded-[8px] xl:rounded-[0.417vw] p-[20px] xl:p-[1.042vw]">
                  <ChartWrapper
                    title={"Average Competency Snapshot"}
                    ExportIcon={true}
                    tabSection={true}
                    infoIcon={true}
                    bulbIcon={true}
                    downloadIcon={true}
                    graphIcon={true}
                    data={
                      <div className="wapper">
                        <div className="grid grid-cols-2">
                          <div className="col">
                            <div className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium mb-[8px] xl:mb-[0.417vw]">
                              Total Avg. Score
                            </div>
                            <div className="flex items-end gap-[8px] gap-[0.417vw]">
                              <div className="text-[#262626] dark:text-white text-[36px] xl:text-[1.875vw] font-semibold leading-none">
                                197
                              </div>
                              <div className="flex gap-[8px] gap-[0.417vw]">
                                <span className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium">
                                  -4.2%
                                </span>
                                <span className="text-[#F82A2A] text-[16px] xl:text-[0.833vw] leading-none">
                                  <i className="cgupod-circle-fill-r-down"></i>
                                </span>
                                <span className="text-[#888888] dark:text-[#818181] text-[12px] xl:text-[0.625vw]">
                                  vs last month
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium mb-[8px] xl:mb-[0.417vw]">
                              Count of Domains Above 200
                            </div>
                            <div className="flex items-end gap-[8px] gap-[0.417vw]">
                              <div className="text-[#262626] dark:text-white text-[36px] xl:text-[1.875vw] font-semibold leading-none">
                                3
                              </div>
                              <div className="flex gap-[8px] gap-[0.417vw]">
                                <span className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium">
                                  -10%
                                </span>
                                <span className="text-[#F82A2A] text-[16px] xl:text-[0.833vw] leading-none">
                                  <i className="cgupod-circle-fill-r-down"></i>
                                </span>
                                <span className="text-[#888888] dark:text-[#818181] text-[12px] xl:text-[0.625vw]">
                                  vs last month
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full h-[382px] xl:h-[19.90vw]">
                          <ReactEcharts
                            option={averageCompetency}
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      </div>
                    }
                  />
                </div>
                {/* row */}
                <div className="bg-white dark:bg-[#13161B] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08)] rounded-[8px] xl:rounded-[0.417vw] p-[20px] xl:p-[1.042vw]">
                  <ChartWrapper
                    title={"Anchor Assignments"}
                    ExportIcon={true}
                    tabSection={true}
                    infoIcon={true}
                    bulbIcon={true}
                    downloadIcon={true}
                    graphIcon={true}
                    data={
                      <div className="wapper">
                        <div className="grid grid-cols-2">
                          <div className="col">
                            <div className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium mb-[8px] xl:mb-[0.417vw]">
                              Total Anc. Assignments
                            </div>
                            <div className="flex items-end gap-[8px] gap-[0.417vw]">
                              <div className="text-[#262626] dark:text-white text-[36px] xl:text-[1.875vw] font-semibold leading-none">
                                38
                              </div>
                              <div className="flex gap-[8px] gap-[0.417vw]">
                                <span className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium">
                                  -4.2%
                                </span>
                                <span className="text-[#F82A2A] text-[16px] xl:text-[0.833vw] leading-none">
                                  <i className="cgupod-circle-fill-r-down"></i>
                                </span>
                                <span className="text-[#888888] dark:text-[#818181] text-[12px] xl:text-[0.625vw]">
                                  vs last month
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium mb-[8px] xl:mb-[0.417vw]">
                              Count of Assignments Above 38
                            </div>
                            <div className="flex items-end gap-[8px] gap-[0.417vw]">
                              <div className="text-[#262626] dark:text-white text-[36px] xl:text-[1.875vw] font-semibold leading-none">
                                5
                              </div>
                              <div className="flex gap-[8px] gap-[0.417vw]">
                                <span className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium">
                                  -10%
                                </span>
                                <span className="text-[#F82A2A] text-[16px] xl:text-[0.833vw] leading-none">
                                  <i className="cgupod-circle-fill-r-down"></i>
                                </span>
                                <span className="text-[#888888] dark:text-[#818181] text-[12px] xl:text-[0.625vw]">
                                  vs last month
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full h-[300px] xl:h-[15.625vw]">
                          <ReactEcharts
                            option={anchorAssignments}
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      </div>
                    }
                  />
                </div>
                {/* row */}
                <div className="bg-white dark:bg-[#13161B] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08)] rounded-[8px] xl:rounded-[0.417vw] p-[20px] xl:p-[1.042vw]">
                  <ChartWrapper
                    title={"POD’s Snapshot"}
                    ExportIcon={true}
                    tabSection={true}
                    infoIcon={true}
                    bulbIcon={true}
                    downloadIcon={true}
                    graphIcon={true}
                    data={
                      <div className="wapper">
                        <div className="grid grid-cols-2">
                          <div className="col">
                            <div className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium mb-[8px] xl:mb-[0.417vw]">
                              Avg POD’S
                            </div>
                            <div className="flex items-end gap-[8px] gap-[0.417vw]">
                              <div className="text-[#262626] dark:text-white text-[36px] xl:text-[1.875vw] font-semibold leading-none">
                                38
                              </div>
                              <div className="flex gap-[8px] gap-[0.417vw]">
                                <span className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium">
                                  -4.2%
                                </span>
                                <span className="text-[#F82A2A] text-[16px] xl:text-[0.833vw] leading-none">
                                  <i className="cgupod-circle-fill-r-down"></i>
                                </span>
                                <span className="text-[#888888] dark:text-[#818181] text-[12px] xl:text-[0.625vw]">
                                  vs last month
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium mb-[8px] xl:mb-[0.417vw]">
                              Top POD Domain
                            </div>
                            <div className="flex items-center gap-[8px] gap-[0.417vw]">
                              <div className="text-[#262626] dark:text-white text-[36px] xl:text-[1.875vw] font-semibold leading-none">
                                55
                              </div>
                              <div className="flex gap-[8px] gap-[0.417vw]">
                                <span className="text-[#888888] text-[14px] xl:text-[0.729vw] leading-[1.2]">
                                  Socio-Emotional Learning <br /> Relationships
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full h-[382px] xl:h-[19.90vw]">
                          <ReactEcharts
                            option={podSnapshot}
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      </div>
                    }
                  />
                </div>
                {/* row */}
                <div className="bg-white dark:bg-[#13161B] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08)] rounded-[8px] xl:rounded-[0.417vw] p-[20px] xl:p-[1.042vw]">
                  <ChartWrapper
                    title={"Mid- Term Evaluatio n Score Snapshot"}
                    ExportIcon={true}
                    tabSection={true}
                    infoIcon={true}
                    bulbIcon={true}
                    downloadIcon={true}
                    graphIcon={true}
                    data={
                      <div className="wapper">
                        <div className="grid grid-cols-2">
                          <div className="col">
                            <div className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium mb-[8px] xl:mb-[0.417vw]">
                              Total Avg. Score
                            </div>
                            <div className="flex items-end gap-[8px] gap-[0.417vw]">
                              <div className="text-[#262626] dark:text-white text-[36px] xl:text-[1.875vw] font-semibold leading-none">
                                146
                              </div>
                              <div className="flex gap-[8px] gap-[0.417vw]">
                                <span className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium">
                                  -4.2%
                                </span>
                                <span className="text-[#F82A2A] text-[16px] xl:text-[0.833vw] leading-none">
                                  <i className="cgupod-circle-fill-r-down"></i>
                                </span>
                                <span className="text-[#888888] dark:text-[#818181] text-[12px] xl:text-[0.625vw]">
                                  vs last month
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium mb-[8px] xl:mb-[0.417vw]">
                              Count of Domains Above 150
                            </div>
                            <div className="flex items-end gap-[8px] gap-[0.417vw]">
                              <div className="text-[#262626] dark:text-white text-[36px] xl:text-[1.875vw] font-semibold leading-none">
                                3
                              </div>
                              <div className="flex gap-[8px] gap-[0.417vw]">
                                <span className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium">
                                  -10%
                                </span>
                                <span className="text-[#F82A2A] text-[16px] xl:text-[0.833vw] leading-none">
                                  <i className="cgupod-circle-fill-r-down"></i>
                                </span>
                                <span className="text-[#888888] dark:text-[#818181] text-[12px] xl:text-[0.625vw]">
                                  vs last month
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full h-[382px] xl:h-[19.90vw]">
                          <ReactEcharts
                            option={midTermEvaluatio}
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      </div>
                    }
                  />
                </div>
                {/* row */}
                <div className="bg-white dark:bg-[#13161B] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08)] rounded-[8px] xl:rounded-[0.417vw] p-[20px] xl:p-[1.042vw]">
                  <ChartWrapper
                    title={"Final - Term Evaluation Scores Snapshot"}
                    ExportIcon={true}
                    tabSection={true}
                    infoIcon={true}
                    bulbIcon={true}
                    downloadIcon={true}
                    graphIcon={true}
                    data={
                      <div className="wapper">
                        <div className="grid grid-cols-2">
                          <div className="col">
                            <div className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium mb-[8px] xl:mb-[0.417vw]">
                              Total Avg. Score
                            </div>
                            <div className="flex items-end gap-[8px] gap-[0.417vw]">
                              <div className="text-[#262626] dark:text-white text-[36px] xl:text-[1.875vw] font-semibold leading-none">
                                236
                              </div>
                              <div className="flex gap-[8px] gap-[0.417vw]">
                                <span className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium">
                                  -4.2%
                                </span>
                                <span className="text-[#F82A2A] text-[16px] xl:text-[0.833vw] leading-none">
                                  <i className="cgupod-circle-fill-r-down"></i>
                                </span>
                                <span className="text-[#888888] dark:text-[#818181] text-[12px] xl:text-[0.625vw]">
                                  vs last month
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium mb-[8px] xl:mb-[0.417vw]">
                              Count of Domains Above 200
                            </div>
                            <div className="flex items-end gap-[8px] gap-[0.417vw]">
                              <div className="text-[#262626] dark:text-white text-[36px] xl:text-[1.875vw] font-semibold leading-none">
                                5
                              </div>
                              <div className="flex gap-[8px] gap-[0.417vw]">
                                <span className="text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.729vw] font-medium">
                                  -10%
                                </span>
                                <span className="text-[#F82A2A] text-[16px] xl:text-[0.833vw] leading-none">
                                  <i className="cgupod-circle-fill-r-down"></i>
                                </span>
                                <span className="text-[#888888] dark:text-[#818181] text-[12px] xl:text-[0.625vw]">
                                  vs last month
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full h-[300px] xl:h-[15.625vw]">
                          <ReactEcharts
                            option={finalTermEvaluation}
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      </div>
                    }
                  />
                </div>
              </div>
            </TabPanel>
          </ScrollPanel>
        </div>
      </Tabs>
      {/* row */}
      <div className="mt-[32px] lg:mt-[0] lg:absolute bottom-0 left-0 right-0">
        <div className="flex items-center justify-between">
          <div className="col">
            <Link
              href={""}
              className="flex items-center bg-white hover:bg-[#AF1E27] dark:bg-[#13161B] border border-[#AF1E27] dark:border-[#F5747C] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white dark:text-[#F5747C] text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] opacity-30 transition ease-in-out delay-150"
            >
              <i className="mr-[8px] xl:mr-[0.417vw] cgupod-close-circle text-[22px] xl:text-[1.146]"></i>
              Cancel
            </Link>
          </div>
          <div className="col">
            <Link
              href={""}
              className="flex items-center bg-white hover:bg-[#AF1E27] dark:bg-[#13161B] border border-[#AF1E27] dark:border-[#F5747C] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white dark:text-[#F5747C] text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] transition ease-in-out delay-150"
            >
              <i className="mr-[8px] xl:mr-[0.417vw] cgupod-print text-[22px] xl:text-[1.146]"></i>
              Print Application
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
