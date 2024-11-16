import ChartWrapper from "@/components/chartwrapper";
import VerticalBarChart from "@/components/allchart/verticalbarchart";
import React from "react";
import HorizontalBarChart from "@/components/allchart/horizontalbarchart";
import StackVerticalBarChart from "@/components/allchart/stackverticalbarchart";
import { DrillDownChart } from "@/components/allchart/drilldown";
import { PieChartColorFull } from "@/components/allchart/piechartcolorfull";


export default function Dashboard() {

  const PlacementTrendData = [
    {
      value: 200,
      itemStyle: {
        color: "#9E8D71",
      },
    },
    {
      value: 150,
      itemStyle: {
        color: "#B0B0B0",
      },
    },
    {
      value: 280,
      itemStyle: {
        color: "#3F8892",
      },
    },
    {
      value: 100,
      itemStyle: {
        color: "#968FC3",
      },
    },
    {
      value: 230,
      itemStyle: {
        color: "#C38FB5",
      },
    },
      {
        value: 120,
        itemStyle: {
          color: "#A5B176",
        }
    },
  ];
  const Expertise = [
    {
      value: 200,
      itemStyle: {
        color: "#C57CB5",
      },
    },
    {
      value: 150,
      itemStyle: {
        color: "#8181EB",
      },
    },
    {
      value: 280,
      itemStyle: {
        color: "#C4EB81",
      },
    },
    {
      value: 100,
      itemStyle: {
        color: "#81A9EB",
      },
    },
    {
      value: 230,
      itemStyle: {
        color: "#81A9EB",
      },
    },
      {
        value: 120,
        itemStyle: {
          color: "#FF9475",
        }
    },
    {
      value: 20,
      itemStyle: {
        color: "#EBEA81",
      }
  },
  {
    value: 20,
    itemStyle: {
        color: "#9E8D71",
      }
  },
  {
    value: 20,
    itemStyle: {
        color: "#968FC3",
      }
  },
  {
    value: 20,
    itemStyle: {
        color: "##3F8892",
      }
  },
  ];
  const StatusSnapshotData = {
    label: [
      "A.C-Prelim English",
      "A.C-Level 2- Severe",
      "A.C-Level 2- Mild",
      "A.C-Level 1- Severe",
      "A.C-Level 1- Mild",
      "A.C Clear",
      "A.A",
    ],
    value: [
      {
        value: 15,
        itemStyle: {
          color: "#968FC3",
        },
      },
      {
        value: 135,
        itemStyle: {
          color: "#968FC3",
        },
      },
      {
        value: 25,
        itemStyle: {
          color: "#968FC3",
        },
      },

      {
        value: 150,
        itemStyle: {
          color: "#968FC3",
        },
      },
      {
        value: 252,
        itemStyle: {
          color: "#968FC3",
        },
      },
      {
        value: 60,
        itemStyle: {
          color: "#968FC3",
        },
      },
      {
        value: 25,
        itemStyle: {
          color: "#968FC3",
        },
      },
    ],
  };


  const PersonnelbyLanguages=[
    { value: 15, name: "Others \n 17.4%",
    itemStyle:
    {
      color:'#ebea81'
    }
  },
    { value: 40, name:  "Arabic \n 29.2%",
    itemStyle:
    {
      color:'#f5c866'
    }
   },
    { value: 30, name:"Bengali \n 17.4%",
    itemStyle:
    {
      color:'#C57CB5'
    } },
    { value: 10, name: "Cantonese \n 2.9%",
    itemStyle:
    {
      color:'#8181eb'
    } 
  },
    { value: 20, name: "Hindi \n  15.7%",
    itemStyle:
    {
      color:'#9ceb81'
    } },
    { value: 25, name: "Chinese \n 3.5%" ,
    itemStyle:
    {
      color:'#81a9eb'
    } },
    { value: 15, name: "German \n 13.9%",
    itemStyle:
    {
      color:'#f29475'
    } },
 ]
  const PersonnelbyLanguages1=[
    { value: 15, name: "Others",
    itemStyle:
    {
      color:'#f2f1ba'
    }
  },
    { value: 40, name: "Arabic \n 29.2%",
      itemStyle:
      {
        color:'#fbeccb'
      } 
    },
    { value: 30, name: "Bengali \n 17.4%",
      itemStyle:
      {
        color:'#d8b5d1'
      } 
     },
    { value: 10, name: "Cantonese \n 2.9%",
    itemStyle:
    {
      color:'#c1c1e8'
    }  },
    { value: 20, name: "Hindi \n  15.7%"
    ,
    itemStyle:
    {
      color:'#d9f7cf'
    }  
  
    },
    { value: 25, name: "Chinese \n 3.5%" ,
    itemStyle:
    {
      color:'#b6cdf1'
    } 
   },
    { value: 15, name: "German \n 13.9%",
    itemStyle:
    {
      color:'#f5b9a5'
    }  },
 ]

  return (
    <div>
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] xl:gap-[1.25vw] mb-[24px] xl:mb-[1.25vw] mt-[16px] xl:mt-[0.833vw]">
         
          <div className=" bg-white rounded-[16px] dark:bg-[#13161B] tilesShadow" >
            <div className="p-[16px] xl:p-[1.042vw]">
              <div className="flex justify-between gap-1 ">
                <div>
                  <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-medium dark:text-[#fff]">
                  Personnel Snapshot
                  </div>
                  <div className="text-[36px] xl:text-[1.875vw] text-[#262626] font-semibold dark:text-[#fff]">
                  127
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
              <div className="xl:h-[8.375vw] h-[180px] ">
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
                    "Advisor",
                    "Faculty \n Advisor",
                    "Mentor \n Teacher",
                    "Mentor \n  Leads",
                    "Site Support \n  Providers",
                    "Intern \n  Principals",
                  ]}
                  name={["DFW Rate"]}
                  minvalue={0}
                  intervalvalue={100}
                  maxvalue={300}
                  data={PlacementTrendData}
                />
              </div>
            </div>
          </div>
          <div className=" bg-white rounded-[16px] dark:bg-[#13161B] tilesShadow">
            <div className="p-[16px] xl:p-[1.042vw]">
              <div className="flex justify-between gap-1 ">
                <div>
                <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-medium dark:text-[#fff]">
                  Personnel by Degree 
                  </div>
                  <div className="text-[36px] xl:text-[1.875vw] text-[#262626] font-semibold dark:text-[#fff]">
                  495
                  </div>
                </div>
                <div>
                  <div className="flex justify-end items-center gap-2">
                    <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-medium dark:text-[#fff]">
                    5.1%
                    </div>
                    <div className="text-center">
                      <span className="cgupod-circle-fill-r-down text-[#F82A2A] text-[22px]"></span>
                    </div>
                  </div>
                  <div className="text-[12px] xl:text-[0.625vw] text-[#888888] font-normal mt-1 dark:text-[#818181]">
                    vs last month
                  </div>
                </div>
              </div>
              <div className="xl:h-[8.375vw] h-[180px] ">
              <HorizontalBarChart
                      legend={{
                        show: false,
                      }}
                      grid={{
                        top: "5%",
                        right: "0",
                        bottom: "0",
                        left: "20",
                        containLabel: true,
                      }}
                      label={{
                        show: true,
                        color: "#262626",
                        fontSize: 12,
                        fontWeight: 500,
                        position: "right",
                      }}
                      minv={0}
                      maxv={300}
                      data={StatusSnapshotData}
                    />
              </div>
            </div>
          </div>
          <div className=" bg-white rounded-[16px] dark:bg-[#13161B] tilesShadow">
            <div className="p-[16px] xl:p-[1.042vw]">
              <div className="flex justify-between gap-1 ">
                <div>
                  <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-medium dark:text-[#fff]">
                  Personnel by Languages
                  </div>
                
                </div>
               
              </div>
              <div className="xl:h-[11.375vw] h-[180px] ">
              <PieChartColorFull 
              legend={{
                show: false,
                orient: "horizontal",
                width: "100%",
                itemGap: 50,
                bottom: "10%",
                itemWidth: 20,
                itemHeight: 20,
                textStyle: {
                  fontSize: 16,
          
                  color:"#363A44" ,
                },
              }}
              
              radius={["28%", "60%"]}
              center={["50%", "50%"]}
              
              radius1={["53%", "60%"]}
              center1={["50%", "50%"]}
              data={PersonnelbyLanguages}
              data1={ PersonnelbyLanguages1 }

              />
              </div>
            </div>
          </div>
          <div className=" bg-white rounded-[16px] dark:bg-[#13161B] tilesShadow">
            <div className="p-[16px] xl:p-[1.042vw]">
              <div className="flex justify-between gap-1 ">
                <div>
                  <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-medium dark:text-[#fff]">
                  Top 10 Areas Of Expertise - Personnel
                  </div>
                  <div className="text-[36px] xl:text-[1.875vw] text-[#262626] font-semibold dark:text-[#fff]">
                  127
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
                    top: "10%",
                    right: "0%",
                    bottom: "0%",
                    left: "0%",
                    containLabel: true,
                  }}
                  rotate={50}
                  barcolor={["#5287DF"]}
                  labelposition={["insideTop"]}
                  xAxisLabeldata={[
                    "Literacy",
                    "Autism",
                    "Health",
                    "ELL",
                    "Classroom Mgmt",
                    "VAPA",
                    "LGBT",
                    "STEM",
                    "CCSI",
                    "PLC"
                  ]}

                  name={["Top 10 Areas Of Expertise - Personnel"]}
                  minvalue={0}
                  intervalvalue={100}
                  maxvalue={300}
                  data={Expertise}
                />
              </div>
            </div>
          </div>
         
          
        </div>
        <div className="w-full border rounded-md bg-[#fff] dark:bg-[#13161B] dark:border-[#13161B]">
          <div className="p-[30px] xl:p-[1.563vw] flex justify-between">
            <div className="xl:text-[0.833vw] text-[16px] font-medium text-[#262626] dark:text-[#fff]">
              Personnel - Drill down Analysis
            </div>
            <div className="flex gap-2">
              <div className="flex flex-col bg-[#FFFAFB] px-4 py-2">
                <span className="xl:text-[0.521vw] text-[10px] text-[#888] font-normal">
                  Level 1
                </span>
                <span className="xl:text-[0.729vw] text-[14px] text-[#262626] font-normal">
                  Sample 1
                </span>
              </div>
              <div className="flex flex-col bg-[#FFFAFB] px-4 py-2">
                <span className="xl:text-[0.521vw] text-[10px] text-[#888] font-normal">
                  Level 2
                </span>
                <span className="xl:text-[0.729vw] text-[14px] text-[#262626] font-normal">
                  Sample 2
                </span>
              </div>
              <div className="flex flex-col bg-[#FFFAFB] px-4 py-2">
                <span className="xl:text-[0.521vw] text-[10px] text-[#888] font-normal">
                  Level 3
                </span>
                <span className="xl:text-[0.729vw] text-[14px] text-[#262626] font-normal">
                  Sample 3
                </span>
              </div>
              <div className="flex flex-col bg-[#FFFAFB] px-4 py-2">
                <span className="xl:text-[0.521vw] text-[10px] text-[#888] font-normal">
                  Level 4
                </span>
                <span className="xl:text-[0.729vw] text-[14px] text-[#262626] font-normal">
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
              <div className="bg-[#F6F7F9] px-4 py-2 flex flex-col  rounded-md gap-2">
                <div className="text-[14px] xl:text-[0.729vw] font-normal text-[#363A44]">
                  Choose Dimensions
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex flex-col text-[14px] xl:text-[0.729vw] gap-1">
                    <span className="font-normal">Metrics</span>
                    <span className="font-medium">Actual</span>
                  </div>
                  <div>
                    <i
                      className="pi pi-angle-right"
                      style={{ fontSize: "1rem" }}
                    ></i>
                  </div>
                  <div className="flex flex-col text-[14px] xl:text-[0.729vw] gap-1">
                    <span className="font-normal">Level 1</span>
                    <span className="font-medium">Sample 1</span>
                  </div>
                  <div>
                    <i
                      className="pi pi-angle-right"
                      style={{ fontSize: "1rem" }}
                    ></i>
                  </div>
                  <div className="flex flex-col text-[14px] xl:text-[0.729vw] gap-1">
                    <span className="font-normal">Level 2</span>
                    <span className="font-medium">Sample 2</span>
                  </div>
                  <div>
                    <i
                      className="pi pi-angle-right"
                      style={{ fontSize: "1rem" }}
                    ></i>
                  </div>
                  <div className="flex flex-col text-[14px] xl:text-[0.729vw] gap-1">
                    <span className="font-normal">Level 3</span>
                    <span className="font-medium">Sample 3</span>
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


