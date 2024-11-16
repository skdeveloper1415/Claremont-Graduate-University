import StackVerticalBarChart from "@/components/allchart/stackverticalbarchart";
import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Layout from "@/components/layout/layout";
import { useState } from "react";
import PlacementByPosition from "./qnatabpanel/placementbyposition";

const QnAdata = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="">
        <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
          <div className="grid gap-[24px] xl:gap-[1.250vw] mt-[16px] xl:mt-[0.833vw]">
            <div className="grid grid-cols-12 gap-4">
              <div className="flex flex-col col-span-3 bg-[#fff] dark:bg-[#13161B] dark:border-[#1F2A37] h-[500px] xl:h-[26.042vw] rounded-[12px]">
                <div className="text-[16px] xl:text-[0.833vw] font-semibold text-[#262626] dark:text-[#fff] p-4 xl:p-[0.833vw]
                 border-b dark:border-[#1F2A37] border-[#F2EEEE]">
                  Choose Metric
                </div>
                <div className="detailedLeftTabs p-[16px] xl:p-[0.833vw] cursor-pointer">
                  <TabList>
                    <Tab>
                      <div
                        className={`flex items-center justify-center rounded-lg font-medium py-[12px] xl:py-[0.625vw] px-[16px]
                         xl:px-[0.833vw] text-[14px] xl:text-[0.729vw] mb-[12px] xl:mb-[0.625vw] ${
                           activeTab === 0
                             ? "bg-[#AF1E27] text-white active"
                             : "bg-[#F4F4F4] hover:bg-[#ebf6ff] border text-black dark:bg-[#13161B] dark:border-[#374151] dark:text-[#AAAAAA]"
                         }`}
                      >
                        Placement by Position
                      </div>
                    </Tab>
                    <Tab>
                      <div
                        className={`flex items-center justify-center rounded-lg font-medium py-[12px] xl:py-[0.625vw] px-[16px]
                        xl:px-[0.833vw] text-[14px] xl:text-[0.729vw] mb-[12px] xl:mb-[0.625vw]  ${
                          activeTab === 1
                            ? "bg-[#AF1E27] text-white active"
                            : "bg-[#F4F4F4] hover:bg-[#ebf6ff] border text-black dark:bg-[#13161B] dark:border-[#374151] dark:text-[#AAAAAA]"
                        }`}
                      >
                        Placement by School
                      </div>
                    </Tab>
                    <Tab>
                      <div
                        className={`flex items-center justify-center rounded-lg font-medium py-[12px] xl:py-[0.625vw] px-[16px]
                        xl:px-[0.833vw] text-[14px] xl:text-[0.729vw] mb-[12px] xl:mb-[0.625vw] ${
                          activeTab === 2
                            ? "bg-[#AF1E27] text-white active"
                            : "bg-[#F4F4F4] hover:bg-[#ebf6ff] border text-black dark:bg-[#13161B] dark:border-[#374151] dark:text-[#AAAAAA]"
                        }`}
                      >
                        Mentors with High Placements
                      </div>
                    </Tab>
                    <Tab>
                      <div
                        className={`flex items-center justify-center rounded-lg font-medium py-[12px] xl:py-[0.625vw] px-[16px]
                        xl:px-[0.833vw] text-[14px] xl:text-[0.729vw] ${ 
                          activeTab === 3
                            ? "bg-[#AF1E27] text-white active"
                            : "bg-[#F4F4F4] hover:bg-[#ebf6ff] border text-black dark:bg-[#13161B] dark:border-[#374151] dark:text-[#AAAAAA]"
                        }`}
                      >
                        Mentor to Candidate Ratio
                      </div>
                    </Tab>
                  </TabList>
                </div>
              </div>
              <div className="grid col-span-9">
                <div className="">
                  <TabPanel>
                    <PlacementByPosition />
                  </TabPanel>
                  <TabPanel>
                    <PlacementByPosition />
                  </TabPanel>
                  <TabPanel>
                    <PlacementByPosition />
                  </TabPanel>
                  <TabPanel>
                    <PlacementByPosition />
                  </TabPanel>
                </div>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default QnAdata;
