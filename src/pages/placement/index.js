import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import DashboardPage from "./dashboard";
import PlacementTable from "./placement";
import SupportPanelTable from "./supportpanel";
import Layout from "@/components/layout/layout";
import FilterComponent from "@/components/filtercomponent";
import { InputText } from "primereact/inputtext";
import QnAdata from "./qna";

const PlacementPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <Layout topTab={true} pageTitle="Placement">
      <div className="">
        <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
          <div className="flex justify-between gap-[8px] bg-[#FCF5F6] dark:bg-[#1C2026] xl:pt-[0.833vw] xl:pb-[0.667vw] pr-[16px] xl:pr-[0.833vw] mr-[-16px] xl:mr-[-0.833vw]
           pl-[128px] ml-[-128px] detailedLeftTabs sticky top-[4.27vw] z-[4] ">
            <div>
              <TabList>
                <div className="flex gap-[8px] items-center">
                  <Tab>
                    <div
                      className={`flex items-center font-normal text-[14px] xl:text-[0.729vw] xl:py-[0.521vw] py-[12px] xl:px-[1.042vw] px-[18px] rounded-lg cursor-pointer ${
                        activeTab === 0
                          ? "bg-[#AF1E27] text-white active border border-[#961E25]"
                          : "bg-[#FFFFFFD9] dark:bg-[#374151] dark:text-[#AAA] dark:border-[#1C2026] hover:bg-[#F0E9EA]  text-[#424242]  border border-[#EAE0E]"
                      }`}
                    >
                      Dashboard
                    </div>
                  </Tab>
                  <Tab>
                    <div
                      className={`flex items-center font-normal text-[14px] xl:text-[0.729vw] xl:py-[0.521vw] py-[12px] xl:px-[1.042vw] px-[18px] rounded-lg cursor-pointer ${
                        activeTab === 1
                          ? "bg-[#AF1E27] text-white active border border-[#961E25]"
                          : "bg-[#FFFFFFD9] dark:bg-[#374151] dark:text-[#AAA] dark:border-[#1C2026] hover:bg-[#F0E9EA] text-[#424242]  border border-[#EAE0E]"
                      }`}
                    >
                      Placement
                    </div>
                  </Tab>
                  <Tab>
                    <div
                      className={`flex items-center font-normal text-[14px] xl:text-[0.729vw] xl:py-[0.521vw] py-[12px] xl:px-[1.042vw] px-[18px] rounded-lg cursor-pointer ${
                        activeTab === 2
                          ? "bg-[#AF1E27] text-white active border border-[#961E25]"
                          : "bg-[#FFFFFFD9] dark:bg-[#374151] dark:text-[#AAA] dark:border-[#1C2026] hover:bg-[#F0E9EA] text-[#424242]  border border-[#EAE0E]"
                      }`}
                    >
                      Support Panel
                    </div>
                  </Tab>
                  <Tab>
                    <div
                      className={`flex items-center font-normal text-[14px] xl:text-[0.729vw] xl:py-[0.521vw] py-[12px] xl:px-[1.042vw] px-[18px] rounded-lg cursor-pointer ${
                        activeTab === 3
                          ? "bg-[#AF1E27] text-white active border border-[#961E25]"
                          : "bg-[#FFFFFFD9] dark:bg-[#374151] dark:text-[#AAA] dark:border-[#1C2026] hover:bg-[#F0E9EA] text-[#424242]  border border-[#EAE0E]"
                      }`}
                    >
                      QnA
                    </div>
                  </Tab>
                </div>
              </TabList>
            </div>
            {/* <div>
              <div
                className="p-input-icon-left placementSearch"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <i
                  className="pi pi-search"
                  style={{ display: isHovered ? "inline-block" : "visible" }}
                />
                <InputText
                  placeholder="Quick Search"
                  style={{
                    paddingLeft: "30px",
                    opacity: isHovered ? "1" : "0",
                  }}
                />
              </div>
            </div> */}
          </div>
          <FilterComponent topTab={true}/>
          <div>
            <div>
              <TabPanel>
                <DashboardPage />
              </TabPanel>
              <TabPanel>
                <PlacementTable />
              </TabPanel>
              <TabPanel>
                <SupportPanelTable />
              </TabPanel>
              <TabPanel>
                <QnAdata />
              </TabPanel>
            </div>
          </div>
        </Tabs>
      </div>
    </Layout>
  );
};

export default PlacementPage;
