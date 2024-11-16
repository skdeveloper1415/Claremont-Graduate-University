import ChartWrapper from "@/components/chartwrapper";
import VerticalBarChart from "@/components/allchart/verticalbarchart";
import React from "react";
import HorizontalBarChart from "@/components/allchart/horizontalbarchart";
import StackVerticalBarChart from "@/components/allchart/stackverticalbarchart";
import { DrillDownChart } from "@/components/allchart/drilldown";

const DashboardPage = () => {
  const PlacementTrendData = [
    {
      value: 350,
      itemStyle: {
        color: "#8276B1",
      },
    },
    {
      value: 300,
      itemStyle: {
        color: "#9E8D71",
      },
    },
    {
      value: 250,
      itemStyle: {
        color: "#8276B1",
      },
    },
    {
      value: 350,
      itemStyle: {
        color: "#9E8D71",
      },
    },
    {
      value: 300,
      itemStyle: {
        color: "#8276B1",
      },
    },
  ];
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
  const PositionSnapshotData = {
    label: [
      "Pre Teaching",
      "Pre Intern",
      "Pre Resident",
      "Interns",
      "Residents",
    ],
    value: [
      {
        value: 15,
        itemStyle: {
          color: "#8276B1",
        },
      },
      {
        value: 135,
        itemStyle: {
          color: "#8276B1",
        },
      },
      {
        value: 25,
        itemStyle: {
          color: "#8276B1",
        },
      },

      {
        value: 150,
        itemStyle: {
          color: "#8276B1",
        },
      },
      {
        value: 252,
        itemStyle: {
          color: "#8276B1",
        },
      },
    ],
  };
  return (
    <div>
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-[1.67vw] mb-[24px] xl:mb-[1.25vw] mt-[16px] xl:mt-[0.833vw]">
          <div className=" bg-white rounded-[16px] dark:bg-[#13161B] border border-[#CFCCC3] dark:border-[#13161B]">
            <div className="p-[16px] xl:p-[0.833vw] pt-[0px] xl:pt-[0vw] ">
              <div className="flex justify-between gap-1 pt-[20px] px-[8px] xl:pt-[1.042vw]">
                <div>
                  <div className="text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#fff] font-medium">
                    Placement Snapshot (CY)
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 mt-1">
                <div className="col-span-6 p-[12px] xl:p-[0.421vw] text-start">
                  <div className="xl:text-[1.875vw] text-[36px] font-semibold text-[#424242] dark:text-[#AAA]">
                    52
                  </div>
                  <div className="xl:text-[0.729vw] text-[14px] font-medium text-[#888] dark:text-[#818181]">
                    Candidates Placed
                  </div>
                </div>
                <div className="col-span-6  p-[8px] xl:p-[0.221vw] border-l-2 text-start dark:border-[#1F2A37]">
                  <div className="px-[14px] xl:px-[0.729vw]">
                    <div className="xl:text-[1.875vw] text-[36px] font-semibold text-[#424242] dark:text-[#AAA]">
                      24
                    </div>
                    <div className="xl:text-[0.729vw] text-[14px] font-medium text-[#888] dark:text-[#818181]">
                      Candidates Not Placed
                    </div>
                  </div>
                </div>
              </div>
              <div className="xl:h-[6.250vw] h-[120px] flex flex-col justify-center mt-1">
                <div className="flex justify-between items-center bg-[#F0E9EA] dark:bg-[#0C0E12] dark:text-[#AAA] p-[7px] xl:p-[0.365vw] xl:pt-[0.521vw] rounded-md">
                  <div className="xl:text-[0.729vw] text-[14px] font-normal">
                    Pre - Teaching
                  </div>
                  <div className="xl:text-[0.833vw] text-[16px] font-semibold">
                    22
                  </div>
                </div>
                <div className="flex justify-between items-center bg-[#F0E9EA] dark:bg-[#0C0E12] dark:text-[#AAA] p-[7px] xl:p-[0.365vw] mt-[4px] xl:pt-[0.208vw] rounded-md">
                  <div className="xl:text-[0.729vw] text-[14px] font-normal">
                    Teaching
                  </div>
                  <div className="xl:text-[0.833vw] text-[16px] font-semibold">
                    20
                  </div>
                </div>
                <div className="flex justify-between items-center bg-[#F0E9EA] dark:bg-[#0C0E12] dark:text-[#AAA] p-[7px] xl:p-[0.365vw] mt-[4px] xl:pt-[0.208vw] rounded-md">
                  <div className="xl:text-[0.729vw] text-[14px] font-normal">
                    Field Work
                  </div>
                  <div className="xl:text-[0.833vw] text-[16px] font-semibold">
                    5
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-white rounded-[16px] dark:bg-[#13161B] border border-[#CFCCC3] dark:border-[#13161B]">
            <div className="p-[16px] xl:p-[0.833vw] pt-[0px] xl:pt-[0vw] ">
              <div className="flex justify-between gap-1 pt-[20px] px-[20px] xl:pt-[1.042vw] xl:px-[1.042vw]">
                <div>
                  <div className="text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#fff] font-medium">
                    Placement Trend
                  </div>
                  <div className="text-[36px] xl:text-[1.875vw] text-[#262626] dark:text-[#fff] font-semibold">
                    1,874
                  </div>
                </div>
                <div>
                  <div className="flex justify-end items-center gap-2">
                    <div className="text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#fff] font-medium">
                      0%
                    </div>
                    <div className="text-center">
                      <span className="cgupod-circle-fill-minus text-[#F82A2A] dark:text-[#F5D8DA] opacity-25 text-[22px]"></span>
                    </div>
                  </div>
                  <div className="text-[12px] xl:text-[0.625vw] text-[#888888] dark:text-[#818181] font-normal mt-1">
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
                  xAxisLabeldata={[
                    "Spring’20",
                    "Summer’20",
                    "Spring’21",
                    "Summer’21",
                    "Spring’22",
                  ]}
                  name={["DFW Rate"]}
                  minvalue={0}
                  intervalvalue={100}
                  maxvalue={400}
                  data={PlacementTrendData}
                />
              </div>
            </div>
          </div>
          <div className=" bg-white rounded-[16px] dark:bg-[#13161B] border border-[#CFCCC3] dark:border-[#13161B]">
            <div className="p-[16px] xl:p-[0.833vw] pt-[0px] xl:pt-[0vw] ">
              <div className="flex justify-between gap-1 pt-[20px] px-[20px] xl:pt-[1.042vw] xl:px-[1.042vw]">
                <div>
                  <div className="text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#fff] font-medium">
                    Position Snapshot
                  </div>
                  <div className="text-[36px] xl:text-[1.875vw] text-[#262626] dark:text-[#fff] font-semibold">
                    577
                  </div>
                </div>
                <div>
                  <div className="flex justify-end items-center gap-2">
                    <div className="text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#fff] font-medium">
                    5.1%
                    </div>
                    <div className="text-center">
                      <span className="cgupod-circle-fill-r-down text-[#F82A2A]  text-[22px]"></span>
                    </div>
                  </div>
                  <div className="text-[12px] xl:text-[0.625vw] text-[#888888] dark:text-[#818181] font-normal mt-1">
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
                  maxv={300}
                  data={PositionSnapshotData}
                />
              </div>
            </div>
          </div>
          <div className=" bg-white rounded-[16px] dark:bg-[#13161B] border border-[#CFCCC3] dark:border-[#13161B]">
            <div className="p-[16px] xl:p-[0.833vw] pt-[0px] xl:pt-[0vw] ">
              <div className="flex justify-between gap-1 pt-[20px] px-[20px] xl:pt-[1.042vw] xl:px-[1.042vw]">
                <div>
                  <div className="text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#fff] font-medium">
                    Top Placement Sites
                  </div>
                  <div className="text-[36px] xl:text-[1.875vw] text-[#262626] dark:text-[#fff] font-semibold">
                    1,874
                  </div>
                </div>
                <div>
                  <div className="flex justify-end items-center gap-2">
                    <div className="text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#fff] font-medium">
                      0%
                    </div>
                    <div className="text-center">
                      <span className="cgupod-circle-fill-minus text-[#F82A2A] dark:text-[#F5D8DA] opacity-25 text-[22px]"></span>
                    </div>
                  </div>
                  <div className="text-[12px] xl:text-[0.625vw] text-[#888888] dark:text-[#818181] font-normal mt-1">
                    vs last month
                  </div>
                </div>
              </div>
              <div className="xl:h-[9.375vw] h-[180px]">
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
            <div className="flex gap-2">
              <div className="flex flex-col bg-[#FFFAFB] dark:bg-[#1F2631] px-4 py-2">
                <span className="xl:text-[0.521vw] text-[10px] text-[#888] dark:text-[#818181] font-normal">
                  Level 1
                </span>
                <span className="xl:text-[0.729vw] text-[14px] text-[#262626] dark:text-[#fff] font-normal">
                  Sample 1
                </span>
              </div>
              <div className="flex flex-col bg-[#FFFAFB] dark:bg-[#1F2631] px-4 py-2">
                <span className="xl:text-[0.521vw] text-[10px] text-[#888] dark:text-[#818181] font-normal">
                  Level 2
                </span>
                <span className="xl:text-[0.729vw] text-[14px] text-[#262626] dark:text-[#fff] font-normal">
                  Sample 2
                </span>
              </div>
              <div className="flex flex-col bg-[#FFFAFB] dark:bg-[#1F2631] px-4 py-2">
                <span className="xl:text-[0.521vw] text-[10px] text-[#888] dark:text-[#818181] font-normal">
                  Level 3
                </span>
                <span className="xl:text-[0.729vw] text-[14px] text-[#262626] dark:text-[#fff] font-normal">
                  Sample 3
                </span>
              </div>
              <div className="flex flex-col bg-[#FFFAFB] dark:bg-[#1F2631] px-4 py-2">
                <span className="xl:text-[0.521vw] text-[10px] text-[#888] dark:text-[#818181] font-normal">
                  Level 4
                </span>
                <span className="xl:text-[0.729vw] text-[14px] text-[#262626] dark:text-[#fff] font-normal">
                  Sample 4
                </span>
              </div>
            </div>
          </div>
          <div className="xl:h-[33.854vw] h-[650px]">
            <DrillDownChart />
          </div>
          <div className="w-full grid grid-cols-12 mb-4 ml-4">
            <div className="col-span-4">
              <div className="bg-[#F6F7F9] dark:bg-[#1F2631] px-4 py-2 flex flex-col  rounded-md gap-2">
                <div className="text-[14px] xl:text-[0.729vw] font-normal text-[#363A44] dark:text-[#AAA]">
                  Choose Dimensions
                </div>
                <div className="flex items-center gap-2">
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
