import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import FilterComponent from "@/components/filtercomponent";
import Layout from "@/components/layout/layout";
import ColumnChart from "./columnchart";
import ApplicantsTable from "./applicantstable";
import Prelimstable from "./prelimstable";
import { ScrollPanel } from 'primereact/scrollpanel';



export default function Index() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <Layout topTab={true} pageTitle="Candidates overview">
        <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
          <div className="flex justify-between gap-[8px]  xl:pt-[0.833vw] xl:pb-[0.667vw]
           pr-[16px] xl:pr-[0.833vw] mr-[-16px] xl:mr-[-0.833vw] pl-[128px] ml-[-128px] detailedLeftTabs sticky top-[4.27vw] z-[4] ">
            <div>
              <TabList>
                <div className="flex gap-[8px] items-center">
                  <Tab>
                    <div
                      className={`flex items-center font-normal text-[14px] xl:text-[0.729vw] xl:py-[0.521vw] py-[12px] xl:px-[1.042vw] px-[18px] rounded-lg cursor-pointer ${
                        activeTab === 0
                          ? "bg-[#AF1E27] dark:bg-[#EC4751] text-white active border border-[#961E25] dark:border-[#EC4751]"
                          : "bg-[#FFFFFFD9] hover:bg-[#F0E9EA] dark:bg-[#13161B] text-[#424242] dark:text-[#AAAAAA] border border-[#EAE0E] dark:border-[#374151]"
                      }`}
                    >
                      Candidates
                    </div>
                  </Tab>
                  <Tab>
                    <div
                      className={`flex items-center font-normal text-[14px] xl:text-[0.729vw] xl:py-[0.521vw] py-[12px] xl:px-[1.042vw] px-[18px] rounded-lg cursor-pointer ${
                        activeTab === 1
                          ? "bg-[#AF1E27] dark:bg-[#EC4751] text-white active border border-[#961E25]"
                          : "bg-[#FFFFFFD9] hover:bg-[#F0E9EA] dark:bg-[#13161B] text-[#424242] dark:text-[#AAAAAA] border border-[#EAE0E] dark:border-[#374151]"
                      }`}
                    >
                      Prelims
                    </div>
                  </Tab>
                  <Tab>
                    <div
                      className={`flex items-center font-normal text-[14px] xl:text-[0.729vw] xl:py-[0.521vw] py-[12px] xl:px-[1.042vw] px-[18px] rounded-lg cursor-pointer ${
                        activeTab === 2
                          ? "bg-[#AF1E27] dark:bg-[#EC4751] text-white active border border-[#961E25]"
                          : "bg-[#FFFFFFD9] hover:bg-[#F0E9EA] dark:bg-[#13161B] text-[#424242] dark:text-[#AAAAAA] border border-[#EAE0E] dark:border-[#374151]"
                      }`}
                    >
                      Induction
                    </div>
                  </Tab>
                </div>
              </TabList>
            </div>
          </div>

          <FilterComponent topTab={true} bgcolor="#4FB155" />
          <ScrollPanel className="custmHeight">
          <TabPanel>
            <div className="mt-[24px] xl:mt-[1.250vw]">
              <ColumnChart />
              <div className="mt-[24px] xl:mt-[1.250vw]">
                <ApplicantsTable />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-[24px] xl:mt-[1.250vw]">
              <ColumnChart />
              <div className="mt-[24px] xl:mt-[1.250vw]">
                <Prelimstable />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-[24px] xl:mt-[1.250vw]">
              <ColumnChart />
              <div className="mt-[24px] xl:mt-[1.250vw]">
                <ApplicantsTable />
              </div>
            </div>
          </TabPanel>
          </ScrollPanel>
        </Tabs>
      </Layout>
    </>
  );
}
