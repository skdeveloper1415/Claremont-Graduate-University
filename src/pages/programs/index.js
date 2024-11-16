import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Layout from "@/components/layout/layout";
import FilterComponent from "@/components/filtercomponent";
import AllPrograms from "./allprograms";
import PreliminaryProgram from "./preliminaryprogram";
import IntroductionProgram from "./introductionprogram";


export default function Index() {
  const [activeTab, setActiveTab] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <Layout topTab={true}  pageTitle="Programs Overview">
        <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
          <div className="flex justify-between gap-[8px] bg-[#FCF5F6] dark:bg-[#1C2026] xl:pt-[0.833vw] xl:pb-[0.667vw] pr-[16px] xl:pr-[0.833vw] mr-[-16px] xl:mr-[-0.833vw]
           pl-[128px] ml-[-128px] detailedLeftTabs sticky top-[4.27vw] z-[4] ">
            <div>
              <TabList >
                <div className="flex flex-wrap xl:gap-[0.417vw] gap-[8px] items-center">
                  <Tab>
                    <div
                      className={`flex items-center font-normal text-[14px] xl:text-[0.729vw] xl:py-[0.521vw] py-[12px] xl:px-[1.042vw] px-[18px] rounded-lg cursor-pointer ${
                        activeTab === 0
                          ? "bg-[#AF1E27] dark:bg-[#AF1E27] text-white active border border-[#961E25] dark:border-[#EC4751]"
                          : "bg-[#FFFFFFD9] dark:bg-[#13161B] hover:bg-[#F0E9EA] dark:hover:bg-[#000] text-[#424242] dark:text-[#AAAAAA] border border-[#EAE0E] dark:border-[#374151]"
                      }`}
                    >
                      All Programs
                    </div>
                  </Tab>
                  <Tab>
                    <div
                      className={`flex items-center font-normal text-[14px] xl:text-[0.729vw] xl:py-[0.521vw] py-[12px] xl:px-[1.042vw] px-[18px] rounded-lg cursor-pointer ${
                        activeTab === 1
                          ? "bg-[#AF1E27] dark:bg-[#AF1E27] text-white active border border-[#961E25] dark:border-[#EC4751]"
                          : "bg-[#FFFFFFD9] dark:bg-[#13161B] hover:bg-[#F0E9EA] dark:hover:bg-[#000] text-[#424242] dark:text-[#AAAAAA] border border-[#EAE0E] dark:border-[#374151] "
                      }`}
                    >
                      Preliminary Program
                    </div>
                  </Tab>
                  <Tab>
                    <div
                      className={`flex items-center font-normal text-[14px] xl:text-[0.729vw] xl:py-[0.521vw] py-[12px] xl:px-[1.042vw] px-[18px] rounded-lg cursor-pointer ${
                        activeTab === 2
                          ? "bg-[#AF1E27] dark:bg-[#AF1E27] text-white active border border-[#961E25] dark:border-[#EC4751]"
                          : "bg-[#FFFFFFD9] dark:bg-[#13161B] hover:bg-[#F0E9EA] dark:hover:bg-[#000] text-[#424242] dark:text-[#AAAAAA] border border-[#EAE0E] dark:border-[#374151]"
                      }`}
                    >
                      Induction Program
                    </div>
                  </Tab>
                </div>
              </TabList>
            </div>
           
          </div>
          <FilterComponent topTab={true} />
          <div>
            <div>
              <TabPanel>
                <AllPrograms />
              </TabPanel>
              <TabPanel>
                <PreliminaryProgram />
              </TabPanel>
              <TabPanel>
                <IntroductionProgram />
              </TabPanel>
            </div>
          </div>
        </Tabs>
    </Layout>
  );
};

