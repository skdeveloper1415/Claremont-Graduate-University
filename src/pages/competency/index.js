import FilterComponent from "@/components/filtercomponent";
import Layout from "@/components/layout/layout";
import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Evaluationsummary from "./Evaluationsummary";
import DashboardPage from "./dashboard";

const Competency = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <Layout topTab={true} pageTitle="Competency">
      <div className="">
        <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
          <div className="flex justify-between gap-[8px] bg-[#FCF5F6] dark:bg-[#0f1013] xl:pt-[0.833vw] xl:pb-[0.667vw] pr-[16px] xl:pr-[0.833vw] mr-[-16px] xl:mr-[-0.833vw] pl-[128px] ml-[-128px] detailedLeftTabs sticky top-[4.27vw] z-[4] ">
            <div>
              <TabList>
                <div className="flex gap-[8px] items-center">
                  <Tab>
                    <div
                      className={`flex items-center font-normal text-[14px] xl:text-[0.729vw] xl:py-[0.521vw] py-[12px] xl:px-[1.042vw] px-[18px] rounded-lg cursor-pointer ${
                        activeTab === 0
                          ? "bg-[#AF1E27] text-white active border border-[#961E25]"
                          : "bg-[#FFFFFFD9] dark:bg-[#13161B] hover:bg-[#F0E9EA] text-[#424242] dark:text-[#AAAAAA] border border-[#EAE0E] dark:border-[#13161B]"
                      }`}
                    >
                      Competency Eveluation
                    </div>
                  </Tab>
                  <Tab>
                    <div
                      className={`flex items-center font-normal text-[14px] xl:text-[0.729vw] xl:py-[0.521vw] py-[12px] xl:px-[1.042vw] px-[18px] rounded-lg cursor-pointer ${
                        activeTab === 1
                          ? "bg-[#AF1E27] text-white active border border-[#961E25]"
                          : "bg-[#FFFFFFD9] dark:bg-[#13161B] hover:bg-[#F0E9EA] text-[#424242] dark:text-[#AAAAAA] border border-[#EAE0E] dark:border-[#13161B]"
                      }`}
                    >
                      Competency Reports
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
                <DashboardPage />
              </TabPanel>
              <TabPanel>
                <Evaluationsummary />
              </TabPanel>
            </div>
          </div>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Competency;
