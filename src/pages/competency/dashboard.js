import DoughnutChart from "@/components/allchart/doughnutchart";
import HorizontalBarChart from "@/components/allchart/horizontalbarchart";
import VerticalBarChart from "@/components/allchart/verticalbarchart";
import { Noto_Serif_Georgian } from "@next/font/google";
import { Sidebar } from "primereact/sidebar";
import { useEffect, useRef, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Evaluationsummary from "./Evaluationsummary";
import FinalRubrics from "./viewRubics/FinalRubrics";
import MidTermRubrics from "./viewRubics/MidTermRubrics";
import { ScrollPanel } from "primereact/scrollpanel";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const DashboardPage = () => {
  const [visibleRight, setVisibleRight] = useState(false);

  /* Popup scroll height start */
  const popupPaddingTopRef = useRef(null);
  const popupTitleRef = useRef(null);
  const [elementHeight, setElementHeight] = useState(0);
  useEffect(() => {
    const updateTapScrollHeight = () => {
      let timeoutId = setTimeout(() => {
        const popupPaddingTop = popupPaddingTopRef.current;
        let computedStyles, paddingTopValue, numericValue;
        if (popupPaddingTop) {
          computedStyles = window.getComputedStyle(popupPaddingTop);
          paddingTopValue = computedStyles.getPropertyValue("padding-top");
          numericValue = parseFloat(paddingTopValue);
          console.log("Padding-top value:", numericValue);
        }

        const popupTitle = popupTitleRef.current;
        let height;
        if (popupTitle) {
          height = popupTitle.offsetHeight;
          console.log(height + " height of ref");
          setElementHeight(height + numericValue);
        }
      }, 200);

      return () => {
        clearTimeout(timeoutId);
      };
    };

    // Initial update
    updateTapScrollHeight();

    // Update elementHeight on window resize
    const handleResize = () => {
      updateTapScrollHeight();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup: remove the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [visibleRight]);

  const elementStyle = {
    height: `calc(100vh - ${elementHeight}px)`,
  };
  /* Popup scroll height end */
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
    { value: 208, name: "280 \n Teaching\n\n over 55%" },
    { value: 65, name: "290 \n Teaching\n\n over 55%" },
    { value: 50, name: "270\n Teaching \n\n over 55%" },
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
  const LessonPlanData = {
    label: [
      "1-Below Expectations",
      "2 - Emerging",
      "3 - Developing",
      "4 - Meeting",
      "5 - Refining",
      "N/A - Not enough Evi..",
    ],
    value: [
      {
        value: 32,
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
        value: 54,
        itemStyle: {
          color: "#8276B1",
        },
      },

      {
        value: 62,
        itemStyle: {
          color: "#8276B1",
        },
      },

      {
        value: 50,
        itemStyle: {
          color: "#8276B1",
        },
      },

      {
        value: 5,
        itemStyle: {
          color: "#8276B1",
        },
      },
    ],
  };
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleCSJCompentency = () => {
    setVisibleRight(true);
  };
  return (
    <div>
      <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
        <div className="flex justify-between gap-[8px] xl:pt-[0.833vw] xl:pb-[0.667vw] pr-[16px] xl:pr-[0.833vw] mr-[-16px] xl:mr-[-0.833vw] pl-[128px] ml-[-128px] detailedLeftTabs sticky top-[13vw] z-[4] bg-[#FCF5F6] dark:bg-[#0f1013] ">
          <div>
            <TabList>
              <div className="flex gap-[8px] items-center">
                <Tab>
                  <div
                    className={`font-normal text-[12px] px-[12px] xl:px-4 py-[8px] rounded-[6px] cursor-pointer ${
                      activeTab === 0
                        ? "bg-[#EC4751] dark:bg-[#AF1E27] text-white active border border-[#EC4751]"
                        : "bg-[#fff] dark:bg-[#13161B] hover:bg-[#EAE0E0] text-[#424242] dark:text-[#AAAAAA] border border-[#EAE0E] dark:border-[#13161B]"
                    }`}
                  >
                    Evaluation Summary
                  </div>
                </Tab>
                <Tab>
                  <div
                    className={`font-normal text-[12px] px-[12px] xl:px-4 py-[8px] rounded-[6px] cursor-pointer ${
                      activeTab === 1
                        ? "bg-[#EC4751] dark:bg-[#AF1E27] text-white active border border-[#EC4751]"
                        : "bg-[#fff] dark:bg-[#13161B]  hover:bg-[#EAE0E0] text-[#424242] dark:text-[#AAAAAA] border border-[#EAE0E] dark:border-[#13161B]"
                    }`}
                  >
                    Midterm Competency
                  </div>
                </Tab>
                <Tab>
                  <div
                    className={`font-normal text-[12px] px-[12px] xl:px-4 py-[8px] rounded-[6px] cursor-pointer ${
                      activeTab === 2
                        ? "bg-[#EC4751] dark:bg-[#AF1E27] text-white active border border-[#EC4751]"
                        : "bg-[#fff] dark:bg-[#13161B] hover:bg-[#EAE0E0] text-[#424242] dark:text-[#AAAAAA] border border-[#EAE0E] dark:border-[#13161B]"
                    }`}
                  >
                    Final Competency
                  </div>
                </Tab>
                {/* 
                <Tab> */}
                <div
                  onClick={handleCSJCompentency}
                  className={`font-normal text-[12px] px-[12px] xl:px-4 py-[8px] rounded-[6px] cursor-pointer ${
                    activeTab === 3
                      ? "bg-[#EC4751] dark:bg-[#AF1E27] text-white active border border-[#EC4751]"
                      : "bg-[#fff] dark:bg-[#13161B] hover:bg-[#EAE0E0] text-[#424242] dark:text-[#AAAAAA] border border-[#EAE0E] dark:border-[#13161B]"
                  }`}
                >
                  View Rubric
                </div>
                {/* </Tab> */}
              </div>
            </TabList>
          </div>
        </div>

        <div>
          <div>
            <TabPanel>
              <div className="">
                <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 mb-6 mt-3">
                  <div className=" bg-white rounded-[16px] dark:bg-[#191A1E] border border-[#CFCCC3] dark:border-[#191A1E]">
                    <div className="p-[16px] xl:p-[0.833vw] pt-[0px] xl:pt-[0vw] ">
                      <div className="flex justify-between gap-1 pt-[20px] px-[8px] xl:pt-[1.042vw]">
                        <div>
                          <div className="text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#FFFFFF]  font-medium">
                            Midterm Snapshot (CY)
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <div className="p-[12px] xl:p-[0.421vw] text-start">
                          <div className="text-[36px] font-semibold text-[#424242] dark:text-[#FFFFFF]">
                            52
                          </div>
                          <div className="text-sm font-medium text-[#888]">
                            Candidates Attended
                          </div>
                        </div>
                        <div className="border-r border-solid border-[#F2EEEE] h-12"></div>
                        <div className="p-[8px] xl:p-[0.221vw] text-start">
                          <div className="px-[14px] xl:px-[0.729vw]">
                            <div className="xl:text-[1.875vw] text-[36px] font-semibold text-[#424242] dark:text-[#ffffff]">
                              74%
                            </div>
                            <div className="xl:text-[0.729vw] text-[14px] font-medium text-[#888] dark:text-[#818181]">
                              Average Score
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="xl:h-[6.250vw] h-[120px] flex flex-col justify-center mt-1">
                        <div className="flex justify-between items-center bg-[#F0E9EA] dark:bg-[#0f1013] p-[7px] xl:p-[0.365vw] xl:pt-[0.521vw] rounded-md">
                          <div className="xl:text-[0.729vw] text-[14px] font-normal">
                            Pre-Teachinf
                          </div>
                          <div className="xl:text-[0.833vw] text-[16px] font-semibold">
                            22
                          </div>
                        </div>
                        <div className="flex justify-between items-center bg-[#F0E9EA] dark:bg-[#0f1013] p-[7px] xl:p-[0.365vw] mt-[4px] xl:pt-[0.208vw] rounded-md">
                          <div className="xl:text-[0.729vw] text-[14px] font-normal">
                            Teaching
                          </div>
                          <div className="xl:text-[0.833vw] text-[16px] font-semibold">
                            20
                          </div>
                        </div>
                        <div className="flex justify-between items-center bg-[#F0E9EA] dark:bg-[#0f1013] p-[7px] xl:p-[0.365vw] mt-[4px] xl:pt-[0.208vw] rounded-md">
                          <div className="xl:text-[0.729vw] text-[14px] font-normal">
                            Field Work
                          </div>
                          <div className="xl:text-[0.833vw] text-[16px] font-semibold">
                            10
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" bg-white rounded-[16px] dark:bg-[#191A1E] border border-[#CFCCC3] dark:border-[#191A1E]">
                    <div className="p-[16px]">
                      <div className="flex justify-between gap-1 pl-1">
                        <div>
                          <div className="text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#FFFFFF] font-medium">
                            Mid Term Performance Summary
                          </div>
                          <div className="text-[36px] xl:text-[1.875vw] mt-2 text-[#262626] dark:text-[#FFFFFF] font-semibold">
                            495
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-end items-center gap-2">
                            <div className="text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#FFFFFF] font-medium">
                              2.1%
                            </div>
                            <div className="text-center">
                              <span className="cgupod-circle-fill-r-up text-[#18B557] text-[22px]"></span>
                            </div>
                          </div>
                          <div className="text-[12px] xl:text-[0.625vw] text-[#888888] font-normal mt-1">
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
                  <div className=" bg-white rounded-[16px] dark:bg-[#191A1E] border border-[#CFCCC3] dark:border-[#191A1E]">
                    <div className="p-[16px] xl:p-[0.833vw] pt-[0px] xl:pt-[0vw] ">
                      <div className="flex flex-col gap-1 pt-[20px] px-[20px] xl:pt-[1.042vw] xl:px-[1.042vw]">
                        <div>
                          <div className="text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#FFFFFF] font-medium">
                            Final Snapshot (CY)
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-center gap-2">
                            <div className="text-[36px] xl:text-[1.875vw] text-[#262626] dark:text-[#FFFFFF] font-semibold">
                              47
                            </div>
                            <div className="flex flex-col">
                              <div className="text-[12px] xl:text-[0.625vw] text-[#888] font-normal mt-1">
                                Average Score
                              </div>
                              <div className="text-xl xl:text-[1.333vw] text-[#262626] dark:text-[#FFFFFF] font-semibold">
                                74%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="xl:h-[9.375vw] h-[180px]">
                        <DoughnutChart
                          data={DoughnutchartData}
                          color={["#f6ca6e", "#c47cb5", "#FFAF23"]}
                          radius={["7%", "50%"]}
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" bg-white rounded-[16px] dark:bg-[#191A1E] border border-[#CFCCC3] dark:border-[#191A1E]">
                    <div className="p-[16px] xl:p-[0.833vw] pt-[0px] xl:pt-[0vw] ">
                      <div className="flex justify-between gap-1 pt-[20px] px-[20px] xl:pt-[1.042vw] xl:px-[1.042vw]">
                        <div>
                          <div className="text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#FFFFFF] font-medium">
                          Final Performance Summary
                          </div>
                          <div className="text-[36px] xl:text-[1.875vw] text-[#262626] dark:text-[#FFFFFF] font-semibold">
                            495
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-end items-center gap-2">
                            <div className="text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#FFFFFF] font-medium">
                              -5.1%
                            </div>
                            <div className="text-center">
                              <span className="cgupod-circle-fill-r-down text-[#F82A2A] text-[22px]"></span>
                            </div>
                          </div>
                          <div className="text-[12px] xl:text-[0.625vw] text-[#888] font-normal mt-1">
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
                            "1-Below...e",
                            "2-Emerging",
                            "3-Developing",
                            "4-Meeting",
                           
                          ]}
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
                <div className="w-full border dark:border-[#1F2A37] rounded-md bg-[#fff] dark:bg-[#13161B]">
                  <Evaluationsummary />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="">
                <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 mb-6 mt-3">
                  <div className=" bg-white rounded-[16px] dark:bg-[#191A1E] border border-[#CFCCC3] dark:border-[#191A1E]">
                    <div className="p-[16px] xl:p-[0.833vw] pt-[0px] xl:pt-[0vw] ">
                      <div className="flex justify-between gap-1 pt-[20px] px-[8px] xl:pt-[1.042vw]">
                        <div>
                          <div className="text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#FFFFFF]  font-medium">
                            Midterm Snapshot (CY)
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <div className="p-[12px] xl:p-[0.421vw] text-start">
                          <div className="text-[36px] font-semibold text-[#424242] dark:text-[#FFFFFF]">
                            52
                          </div>
                          <div className="text-sm font-medium text-[#888]">
                            Candidates Attended
                          </div>
                        </div>
                        <div className="border-r border-solid border-[#F2EEEE] h-12"></div>
                        <div className="p-[8px] xl:p-[0.221vw] text-start">
                          <div className="px-[14px] xl:px-[0.729vw]">
                            <div className="xl:text-[1.875vw] text-[36px] font-semibold text-[#424242] dark:text-[#ffffff]">
                              74%
                            </div>
                            <div className="xl:text-[0.729vw] text-[14px] font-medium text-[#888] dark:text-[#818181]">
                              Average Score
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="xl:h-[6.250vw] h-[120px] flex flex-col justify-center mt-1">
                        <div className="flex justify-between items-center bg-[#F0E9EA] dark:bg-[#0f1013] p-[7px] xl:p-[0.365vw] xl:pt-[0.521vw] rounded-md">
                          <div className="xl:text-[0.729vw] text-[14px] font-normal">
                            Pre-Teachinf
                          </div>
                          <div className="xl:text-[0.833vw] text-[16px] font-semibold">
                            22
                          </div>
                        </div>
                        <div className="flex justify-between items-center bg-[#F0E9EA] dark:bg-[#0f1013] p-[7px] xl:p-[0.365vw] mt-[4px] xl:pt-[0.208vw] rounded-md">
                          <div className="xl:text-[0.729vw] text-[14px] font-normal">
                            Teaching
                          </div>
                          <div className="xl:text-[0.833vw] text-[16px] font-semibold">
                            20
                          </div>
                        </div>
                        <div className="flex justify-between items-center bg-[#F0E9EA] dark:bg-[#0f1013] p-[7px] xl:p-[0.365vw] mt-[4px] xl:pt-[0.208vw] rounded-md">
                          <div className="xl:text-[0.729vw] text-[14px] font-normal">
                            Field Work
                          </div>
                          <div className="xl:text-[0.833vw] text-[16px] font-semibold">
                            10
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" bg-white rounded-[16px] dark:bg-[#191A1E] border border-[#CFCCC3] dark:border-[#191A1E]">
                    <div className="p-[16px]">
                      <div className="flex justify-between gap-1 pl-1">
                        <div>
                          <div className="text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#FFFFFF] font-medium">
                            Mid Term Performance Summary
                          </div>
                          <div className="text-[36px] xl:text-[1.875vw] mt-2 text-[#262626] dark:text-[#FFFFFF] font-semibold">
                            495
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-end items-center gap-2">
                            <div className="text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#FFFFFF] font-medium">
                              2.1%
                            </div>
                            <div className="text-center">
                              <span className="cgupod-circle-fill-r-up text-[#18B557] text-[22px]"></span>
                            </div>
                          </div>
                          <div className="text-[12px] xl:text-[0.625vw] text-[#888888] font-normal mt-1">
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
                  <div className=" bg-white rounded-[16px] dark:bg-[#191A1E] border border-[#CFCCC3] dark:border-[#191A1E]">
                    <div className="p-[16px] xl:p-[0.833vw] pt-[0px] xl:pt-[0vw] ">
                      <div className="flex flex-col gap-1 pt-[20px] px-[20px] xl:pt-[1.042vw] xl:px-[1.042vw]">
                        <div>
                          <div className="text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#FFFFFF] font-medium">
                            Final Snapshot (CY)
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-center gap-2">
                            <div className="text-[36px] xl:text-[1.875vw] text-[#262626] dark:text-[#FFFFFF] font-semibold">
                              47
                            </div>
                            <div className="flex flex-col">
                              <div className="text-[12px] xl:text-[0.625vw] text-[#888] font-normal mt-1">
                                Average Score
                              </div>
                              <div className="text-xl xl:text-[1.333vw] text-[#262626] dark:text-[#FFFFFF] font-semibold">
                                74%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="xl:h-[9.375vw] h-[180px]">
                        <DoughnutChart
                          data={DoughnutchartData}
                          color={["#f6ca6e", "#c47cb5", "#FFAF23"]}
                          radius={["7%", "50%"]}
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" bg-white rounded-[16px] dark:bg-[#191A1E] border border-[#CFCCC3] dark:border-[#191A1E]">
                    <div className="p-[16px] xl:p-[0.833vw] pt-[0px] xl:pt-[0vw] ">
                      <div className="flex justify-between gap-1 pt-[20px] px-[20px] xl:pt-[1.042vw] xl:px-[1.042vw]">
                        <div>
                          <div className="text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#FFFFFF] font-medium">
                          Final Performance Summary
                          </div>
                          <div className="text-[36px] xl:text-[1.875vw] text-[#262626] dark:text-[#FFFFFF] font-semibold">
                            495
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-end items-center gap-2">
                            <div className="text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#FFFFFF] font-medium">
                              -5.1%
                            </div>
                            <div className="text-center">
                              <span className="cgupod-circle-fill-r-down text-[#F82A2A] text-[22px]"></span>
                            </div>
                          </div>
                          <div className="text-[12px] xl:text-[0.625vw] text-[#888] font-normal mt-1">
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
                            "1-Below...e",
                            "2-Emerging",
                            "3-Developing",
                            "4-Meeting",
                           
                          ]}
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
                <div className="w-full border dark:border-[#1F2A37] rounded-md bg-[#fff] dark:bg-[#13161B]">
                  <Evaluationsummary />
                </div>
              </div>
            </TabPanel>

            <TabPanel></TabPanel>
          </div>
        </div>
      </Tabs>

      <Sidebar
        visible={visibleRight}
        position="right"
        blockScroll={true}
        onHide={() => setVisibleRight(false)}
        className="custmSidebar widthOne"
      >
        <Tabs>
          <div className="grid grid-cols-12 h-full">
            <div className="col-span-12 lg:col-span-5">
              <div
                ref={popupPaddingTopRef}
                className="bg-[#E0E0EF] h-full pt-[30px] xl:pt-[3.646vw] "
              >
                <div className="px-[20px] xl:px-[3.646vw]">
                  <div
                    ref={popupTitleRef}
                    className="border border-[#FFFFFF] p-[28px] xl:p-[1.458vw] rounded-[16px] xl:rounded-[0.833vw]"
                  >
                    {/* row */}
                    <div className={myNotoSerifGeorgian.className}>
                      <div className="text-[#312C49] text-[40px] xl:text-[2.500vw] leading-[1.1]">
                        View Rubics
                      </div>
                    </div>
                    {/* row */}
                    <div className="mt-[32px] xl:mt-[1.667vw]">
                      <div className="grid grid-cols-2 gap-[24px] xl:gap-[1.250vw]">
                        <div className="col h-[100%]">
                          <div className="bg-[#CECDE5] rounded-[8px] xl:rounded-[0.417vw] px-[16px] xl:px-[0.833vw] py-[10px] xl:py-[0.521vw]">
                            <div className="flex items-center gap-[8px] xl:gap-[0.417vw]">
                              <div className="bg-[#fff] text-white min-w-[42px] min-h-[42px] rounded-[4px] xl:rounded-[0.208vw] flex items-center justify-center">
                                <i className="cgupod-user text-[24px] xl:text-[1.25] text-[#888888]"></i>
                              </div>
                              <div className="col">
                                <div className="text-[#4E456D] text-[12px] xl:text-[0.625vw] w-full">
                                  Total Candidates
                                </div>
                                <div className="text-[#312C49] text-[16px] xl:text-[0.833vw] font-medium">
                                  3,656
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col h-[100%]">
                          <div className="bg-[#CECDE5] rounded-[8px] xl:rounded-[0.417vw] px-[16px] xl:px-[0.833vw] py-[10px] xl:py-[0.521vw]">
                            <div className="flex items-center gap-[8px] xl:gap-[0.417vw]">
                              <div className="bg-[#fff] text-white min-w-[42px] min-h-[42px] rounded-[4px] xl:rounded-[0.208vw] flex items-center justify-center">
                                <i className="cgupod-tick-circle text-[24px] xl:text-[1.25vw] text-[#888888]"></i>
                              </div>
                              <div className="col">
                                <div className="text-[#4E456D] text-[12px] xl:text-[0.625vw]">
                                  Average Score
                                </div>
                                <div className="text-[#312C49] text-[16px] xl:text-[0.833vw] font-medium">
                                  74%
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ScrollPanel className="popupTabs" style={elementStyle}>
                  <div className="pr-[20px] xl:pr-[3.646vw] pl-[40px] xl:pl-[5.74vw]">
                    <TabList>
                      <Tab>Mid Term Rubrics</Tab>
                      <Tab>Final Rubrics</Tab>
                    </TabList>
                  </div>
                </ScrollPanel>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <ScrollPanel className="popup-right-scroll h-[100vh]">
                <div className="bg-[#FCF5F6] pt-[70px] xl:pt-[3.646vw] px-[60px] xl:px-[3.125vw] pb-[36px] xl:pb-[1.875vw h-full">
                  <div className="relative">
                    <TabPanel>
                      <MidTermRubrics />
                    </TabPanel>
                    <TabPanel>
                      <FinalRubrics />
                    </TabPanel>
                  </div>
                </div>
              </ScrollPanel>
            </div>
          </div>
        </Tabs>
      </Sidebar>
    </div>
  );
};

export default DashboardPage;
