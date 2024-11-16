import VerticalBarChart from "@/components/allchart/verticalbarchart";
import React from "react";
import HorizontalBarChart from "@/components/allchart/horizontalbarchart";
import { DrillDownChart } from "@/components/allchart/drilldown";
import DoughnutChart from "@/components/allchart/doughnutchart";

const DashboardPage = () => {
  const SubjectSnapshotData = [
    {
      value: 100,
      itemStyle: {
        color: "#9E8D71",
      },
    },
    {
      value: 140,
      itemStyle: {
        color: "#18B557",
      },
    },
    {
      value: 120,
      itemStyle: {
        color: "#8276B1",
      },
    },
    {
      value: 125,
      itemStyle: {
        color: "#CFC9B8",
      },
    },
  ];
  const PODSnapshotData = [
    {
      value: 320,
      itemStyle: {
        color: "#8276B1",
      },
    },
    {
      value: 380,
      itemStyle: {
        color: "#8276B1",
      },
    },
    {
      value: 300,
      itemStyle: {
        color: "#8276B1",
      },
    },
    {
      value: 200,
      itemStyle: {
        color: "#8276B1",
      },
    },
    {
      value: 320,
      itemStyle: {
        color: "#8276B1",
      },
    },
  ];
  const DoughnutchartData = [
      { value: 208, name: '280 \n Teaching\n\n over 55%'},
      { value: 65, name: '290 \n Teaching\n\n over 55%' },
      { value: 50, name: '270\n Teaching \n\n over 55%' },

  ]
  const PlacementSiteData = [
    {
      value: 220,
      itemStyle: {
        color: "#8276B1",
      },
    },
    {
      value: 180,
      itemStyle: {
        color: "#9E8D71",
      },
    },
    {
      value: 50,
      itemStyle: {
        color: "#8276B1",
      },
    },
    {
      value: 150,
      itemStyle: {
        color: "#9E8D71",
      },
    },
    {
      value: 40,
      itemStyle: {
        color: "#8276B1",
      },
    },
  ];
  const LessonPlanData = {
    label: ["GR7", "GR6", "GR5", "GR4"],
    value: [
      {
        value: 50,
        itemStyle: {
          color: "#8276B1",
        },
      },
      {
        value: 20,
        itemStyle: {
          color: "#8276B1",
        },
      },
      {
        value: 45,
        itemStyle: {
          color: "#8276B1",
        },
      },

      {
        value: 55,
        itemStyle: {
          color: "#8276B1",
        },
      },
    ],
  };
  return (
    <div>
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-4 xl:gap-[1.25vw] mb-[24px] xl:mb-[1.25vw] mt-[16px] xl:my-[0.833vw]">
          <div className=" bg-white dark:bg-[#13161B] rounded-[16px] border border-[#CFCCC3] dark:border-[#1F2A37]">
            <div className="p-[16px] xl:p-[0.833vw] pt-[0px] xl:pt-[0vw] ">
              <div className="flex justify-between gap-1 pt-[20px] px-[8px] xl:pt-[1.042vw]">
                <div>
                  <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-medium dark:text-[#fff]">
                    CSJ Snapshot
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 mt-1">
                <div className="col-span-6 p-[12px] xl:p-[0.421vw] text-start">
                  <div className="xl:text-[1.875vw] text-[36px] font-semibold text-[#424242] dark:text-[#fff]">
                    127
                  </div>
                  <div className="xl:text-[0.729vw] text-[14px] font-medium text-[#888] dark:text-[#818181]">
                    Overall Candidates
                  </div>
                </div>
                <div className="col-span-6  p-[8px] xl:p-[0.221vw] border-l-2 dark:border-[#1F2A37] text-start">
                  <div className="px-[14px] xl:px-[0.729vw]">
                    <div className="xl:text-[1.875vw] text-[36px] font-semibold text-[#424242] dark:text-[#fff]">
                      15
                    </div>
                    <div className="xl:text-[0.729vw] text-[14px] font-medium text-[#888] dark:text-[#818181]">
                      Overall Mentors
                    </div>
                  </div>
                </div>
              </div>
              <div className="xl:h-[6.250vw] h-[120px] flex flex-col justify-center mt-1">
                <div className="flex justify-between items-center bg-[#F0E9EA] dark:bg-[#0C0E12] p-[7px] xl:p-[0.365vw] xl:pt-[0.521vw] rounded-md">
                  <div className="xl:text-[0.729vw] text-[14px] font-normal dark:text-[#AAA]">
                    Lesson Plan Completed
                  </div>
                  <div className="xl:text-[0.833vw] text-[16px] font-semibold dark:text-[#AAA]">
                    102
                  </div>
                </div>
                <div className="flex justify-between items-center bg-[#F0E9EA] dark:bg-[#0C0E12] p-[7px] xl:p-[0.365vw] mt-[4px] xl:pt-[0.208vw] rounded-md">
                  <div className="xl:text-[0.729vw] text-[14px] font-normal dark:text-[#AAA]">
                    Pre Observation Completed
                  </div>
                  <div className="xl:text-[0.833vw] text-[16px] font-semibold dark:text-[#AAA]">
                    75
                  </div>
                </div>
                <div className="flex justify-between items-center bg-[#F0E9EA] dark:bg-[#0C0E12] p-[7px] xl:p-[0.365vw] mt-[4px] xl:pt-[0.208vw] rounded-md">
                  <div className="xl:text-[0.729vw] text-[14px] font-normal dark:text-[#AAA]">
                    Post Observation Completed
                  </div>
                  <div className="xl:text-[0.833vw] text-[16px] font-semibold dark:text-[#AAA]">
                    64
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-white dark:bg-[#13161B] rounded-[16px] border border-[#CFCCC3] dark:border-[#1F2A37]">
            <div className="p-[16px] xl:p-[0.833vw] pt-[0px] xl:pt-[0vw] ">
              <div className="flex justify-between gap-1 pt-[20px] px-[5px] xl:pt-[1.042vw] xl:px-[0.265vw]">
                <div>
                  <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-medium dark:text-[#fff]">
                    Lesson Plan Insights
                  </div>
                  <div className="text-[36px] xl:text-[1.875vw] text-[#262626] font-semibold dark:text-[#fff]">
                    495
                  </div>
                </div>
                <div>
                  <div className="flex justify-end items-center gap-2">
                    <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-medium dark:text-[#fff]">
                      2.1%
                    </div>
                    <div className="text-center">
                      <span className="cgupod-circle-fill-r-up text-[#18B557] text-[22px]"></span>
                    </div>
                  </div>
                  <div className="text-[12px] xl:text-[0.625vw] text-[#888888] font-normal mt-1 dark:text-[#818181]">
                    vs last month
                  </div>
                </div>
              </div>
              <div className="xl:h-[9.375vw] h-[180px]">
                <HorizontalBarChart
                  legend={{
                    show: false,
                    icon: "roundRect",
                    bottom: "0%",
                    left: "0%",
                    itemWidth: 10,
                    itemHeight: 10,
                  }}
                  grid={{
                    top: "5%",
                    right: "2%",
                    bottom: "0%",
                    left: "2%",
                    containLabel: true,
                  }}
                  label={{
                    show: true,
                    color: "#424242",
                    fontWeight: "bold",
                    position: "right",
                  }}
                  minv={0}
                  maxv={60}
                  data={LessonPlanData}
                />
              </div>
            </div>
          </div>
          <div className=" bg-white rounded-[16px] dark:bg-[#191A1E] border border-[#CFCCC3] dark:border-[#1F2A37]">
            <div className="p-[16px] xl:p-[0.833vw] pt-[0px] xl:pt-[0vw] ">
              <div className="flex justify-between gap-1 pt-[20px] px-[5px] xl:pt-[1.042vw] xl:px-[0.265vw]">
                <div>
                  <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-medium dark:text-[#fff]">
                    Subject Snapshot
                  </div>
                  <div className="text-[36px] xl:text-[1.875vw] text-[#262626] font-semibold dark:text-[#fff]">
                    510
                  </div>
                </div>
                <div>
                  <div className="flex justify-end items-center gap-2">
                    <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-medium dark:text-[#fff]">
                      0%
                    </div>
                    <div className="text-center">
                      <span className="cgupod-circle-fill-minus text-[#F82A2A] opacity-25 text-[22px]"></span>
                    </div>
                  </div>
                  <div className="text-[12px] xl:text-[0.625vw] text-[#888888] font-normal mt-1 dark:text-[#818181]">
                    vs last month
                  </div>
                </div>
              </div>
              <div className="xl:h-[9.375vw] h-[180px] ">
                <VerticalBarChart
                  legend={{
                    show: false,
                  }}
                  grid={{
                    top: "12%",
                    right: "0%",
                    bottom: "5%",
                    left: "0%",
                    containLabel: true,
                  }}
                  barcolor={["#5287DF"]}
                  labelposition={["insideTop"]}
                  xAxisLabeldata={["Cantonese", "Hindi", "Chinese", "German"]}
                  name={["DFW Rate"]}
                  minvalue={0}
                  intervalvalue={50}
                  maxvalue={150}
                  data={SubjectSnapshotData}
                />
              </div>
            </div>
          </div>

          <div className=" bg-white rounded-[16px] dark:bg-[#191A1E] border border-[#CFCCC3] dark:border-[#1F2A37]">
            <div className="p-[16px] xl:p-[0.833vw] pt-[0px] xl:pt-[0vw] ">
              <div className="flex justify-between gap-1 pt-[20px] px-[5px] xl:pt-[1.042vw] xl:px-[0.265vw]">
                <div>
                  <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-medium dark:text-[#fff]">
                  Phase Snapshot
                  </div>
                  <div className="text-[36px] xl:text-[1.875vw] text-[#262626] font-semibold dark:text-[#fff]">
                  1,421
                  </div>
                </div>
                <div>
                  <div className="flex justify-end items-center gap-2">
                    <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-medium dark:text-[#fff]">
                    1.5%
                    </div>
                    <div className="text-center">
                      <span className="cgupod-circle-fill-r-up text-[#18B557] text-[22px]"></span>
                    </div>
                  </div>
                  <div className="text-[12px] xl:text-[0.625vw] text-[#888888] font-normal mt-1 dark:text-[#818181]">
                    vs last month
                  </div>
                </div>
              </div>
              <div className="xl:h-[9.375vw] h-[180px]">
                <DoughnutChart
                data={DoughnutchartData}
                color={['#f6ca6e','#c47cb5','#FFAF23']}
                radius={['7%', '50%']}
                />
                {/* <VerticalBarChart
                  legend={{
                    show: false,
                  }}
                  grid={{
                    top: "12%",
                    right: "0%",
                    bottom: "5%",
                    left: "0%",
                    containLabel: true,
                  }}
                  barcolor={["#5287DF"]}
                  labelposition={["insideTop"]}
                  xAxisLabeldata={[
                    "Anderson\n Mill ES",
                    "Blackland\n Prairie ES",
                    "Bluebonnet\n ES",
                    "Brushy\n Creek ES",
                    "Cactus\n Ranch ES",
                  ]}
                  name={["DFW Rate"]}
                  minvalue={0}
                  intervalvalue={100}
                  maxvalue={300}
                  data={PlacementSiteData}
                /> */}
              </div>
            </div>
          </div>
          <div className=" bg-white rounded-[16px] dark:bg-[#191A1E] border border-[#CFCCC3] dark:border-[#1F2A37]">
            <div className="p-[16px] xl:p-[0.833vw] pt-[0px] xl:pt-[0vw] ">
              <div className="flex justify-between gap-1 pt-[20px] px-[5px] xl:pt-[1.042vw] xl:px-[0.265vw]">
                <div>
                  <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-medium dark:text-[#fff]">
                    POD Snapshot
                  </div>
                  <div className="text-[36px] xl:text-[1.875vw] text-[#262626] font-semibold dark:text-[#fff]">
                    12
                  </div>
                </div>
                <div>
                  <div className="flex justify-end items-center gap-2">
                    <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-medium dark:text-[#fff]">
                      -5.1%
                    </div>
                    <div className="text-center">
                      <span className="cgupod-circle-fill-r-down text-[#F82A2A] text-[22px]"></span>
                    </div>
                  </div>
                  <div className="text-[12px] xl:text-[0.625vw] text-[#888] font-normal mt-1 dark:text-[#818181]">
                    vs last month
                  </div>
                </div>
              </div>
              <div className="xl:h-[9.375vw] h-[180px] ">
                <VerticalBarChart
                  legend={{
                    show: false,
                  }}
                  grid={{
                    top: "12%",
                    right: "0%",
                    bottom: "5%",
                    left: "0%",
                    containLabel: true,
                  }}
                  barcolor={["#5287DF"]}
                  labelposition={["insideTop"]}
                  xAxisLabeldata={["Lesson..", "Lesson..", "Pre-Obs..", "Evidence..","Evidence.."]}
                  name={["DFW Rate"]}
                  minvalue={0}
                  intervalvalue={100}
                  maxvalue={400}
                  data={PODSnapshotData}
                />
              </div>
            </div>
          </div>
        </div> 
        <div className="w-full border rounded-md bg-[#fff] dark:bg-[#13161B]">
          <div className="p-[30px] xl:p-[1.563vw] flex justify-between">
            <div className="xl:text-[0.833vw] text-[16px] font-medium text-[#262626] dark:text-[#FFF]">
              Personnel - Drill down Analysis
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col bg-[#FFFAFB] dark:bg-[#1F2631]  px-4 py-2 border border-[#F2EEEE] dark:border-[#13161B]  rounded">
                <span className="xl:text-[0.521vw] text-[10px] text-[#888] dark:text-[#818181] font-normal">
                  Level 1
                </span>
                <span className="xl:text-[0.729vw] text-[14px] text-[#262626] font-normal dark:text-[#FFF]">
                  Sample 1
                </span>
              </div>
              <div className="flex flex-col bg-[#FFFAFB] dark:bg-[#1F2631] dark:border-[#13161B]  px-4 py-2 border border-[#F2EEEE] rounded ">
                <span className="xl:text-[0.521vw] text-[10px] text-[#888] dark:text-[#818181] font-normal">
                  Level 2
                </span>
                <span className="xl:text-[0.729vw] text-[14px] text-[#262626] font-normal dark:text-[#FFF]">
                  Sample 2
                </span>
              </div>
              <div className="flex flex-col bg-[#FFFAFB] dark:bg-[#1F2631] dark:border-[#13161B] px-4 py-2 border border-[#F2EEEE] rounded">
                <span className="xl:text-[0.521vw] text-[10px] text-[#888] dark:text-[#818181] font-normal">
                  Level 3
                </span>
                <span className="xl:text-[0.729vw] text-[14px] text-[#262626] font-normal dark:text-[#FFF]">
                  Sample 3
                </span>
              </div>
              <div className="flex flex-col bg-[#FFFAFB] dark:bg-[#1F2631] dark:text-[#818181] dark:border-[#13161B] px-4 py-2 border border-[#F2EEEE] rounded">
                <span className="xl:text-[0.521vw] text-[10px] text-[#888] font-normal">
                  Level 4
                </span>
                <span className="xl:text-[0.729vw] text-[14px] text-[#262626] font-normal dark:text-[#FFF]">
                  Sample 4
                </span>
              </div>
            </div>
          </div>
          <div className="px-[20px] xl:p-[1.04vw] xl:h-[33.854vw] h-[650px]">
            <DrillDownChart />
          </div>
          <div className="w-full grid grid-cols-12 mb-4 ml-4">
            <div className="col-span-4">
              <div className="bg-[#F6F7F9] dark:bg-[#1F2631] px-4 py-2 flex flex-col  rounded-md gap-2">
                <div className="text-[14px] xl:text-[0.729vw] font-normal text-[#363A44] dark:text-[#AAA]">
                  Choose Dimensions
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col text-[14px] xl:text-[0.729vw] gap-1">
                    <span className="font-normal dark:text-[#AAA]">Metrics</span>
                    <span className="font-medium dark:text-[#AAA]">Actual</span>
                  </div>
                  <div>
                    <i
                      className="cgupod-right-arrow dark:text-[#6C768B]"
                      style={{ fontSize: "0.7rem" }}
                    ></i>
                  </div>
                  <div className="flex flex-col text-[14px] xl:text-[0.729vw] gap-1">
                    <span className="font-normal dark:text-[#AAA]">Level 1</span>
                    <span className="font-medium dark:text-[#AAA]">Sample 1</span>
                  </div>
                  <div>
                    <i
                      className="cgupod-right-arrow dark:text-[#6C768B]"
                      style={{ fontSize: "0.7rem" }}
                    ></i>
                  </div>
                  <div className="flex flex-col text-[14px] xl:text-[0.729vw] gap-1">
                    <span className="font-normal dark:text-[#AAA]">Level 2</span>
                    <span className="font-medium dark:text-[#AAA]">Sample 2</span>
                  </div>
                  <div>
                    <i
                      className="cgupod-right-arrow dark:text-[#6C768B]"
                      style={{ fontSize: "0.7rem" }}
                    ></i>
                  </div>
                  <div className="flex flex-col text-[14px] xl:text-[0.729vw] gap-1">
                    <span className="font-normal dark:text-[#AAA]">Level 3</span>
                    <span className="font-medium dark:text-[#AAA]">Sample 3</span>
                  </div>
                  <div>
                    <i
                      className="cgupod-right-arrow dark:text-[#6C768B]"
                      style={{ fontSize: "0.7rem" }}
                    ></i>
                  </div>
                  <div className="flex flex-col text-[14px] xl:text-[0.729vw] gap-1">
                    <span className="font-normal dark:text-[#AAA]">Level 4</span>
                    <span className="font-medium dark:text-[#AAA]">Sample 4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
