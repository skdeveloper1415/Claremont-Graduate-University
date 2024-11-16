import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import DashboardPage from "./dashboard";
import Layout from "@/components/layout/layout";
import FilterComponent from "@/components/filtercomponent";
import { InputText } from "primereact/inputtext";
import ActivePersonnel from "./activepersonnel";
import AllPersonnel from "./allpersonnel";
import ManageForm from "./manageform";
import ClinicalContacts from "./clinicalcontacts";
import PTContacts from "./ptcontacts";
import ISP from "./isp";
import ClinicalLocation from "./clinicallocation";



const PlacementPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <Layout topTab={true} pageTitle="Personnel">
      <div className="">
        <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
          <div className="flex justify-between gap-[8px] bg-[#FCF5F6] xl:pt-[0.833vw] xl:pb-[0.667vw] pr-[16px] xl:pr-[0.833vw] mr-[-16px] xl:mr-[-0.833vw]
           pl-[128px] ml-[-128px] detailedLeftTabs sticky top-[4.27vw] z-[4]">
            <div>
              <TabList topTab={true}>
                <div className="flex flex-wrap xl:gap-[0.417vw] gap-[8px] items-center">
                  <Tab>
                    <div
                      className={`flex items-center font-normal text-[14px] xl:text-[0.729vw] xl:py-[0.521vw] py-[12px] xl:px-[1.042vw] px-[18px] rounded-lg cursor-pointer ${
                        activeTab === 0
                          ? "bg-[#AF1E27] text-white active border border-[#961E25]"
                          : "bg-[#FFFFFFD9] hover:bg-[#F0E9EA] text-[#424242]  border border-[#EAE0E] dark:bg-[#13161B] dark:text-[#AAAAAA] dark:border-[#374151]"
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
                          : "bg-[#FFFFFFD9] hover:bg-[#F0E9EA] text-[#424242] border border-[#EAE0E] dark:bg-[#13161B] dark:text-[#AAAAAA] dark:border-[#374151] "
                      }`}
                    >
                      Active Personnel
                    </div>
                  </Tab>
                  <Tab>
                    <div
                      className={`flex items-center font-normal text-[14px] xl:text-[0.729vw] xl:py-[0.521vw] py-[12px] xl:px-[1.042vw] px-[18px] rounded-lg cursor-pointer ${
                        activeTab === 2
                          ? "bg-[#AF1E27] text-white active border border-[#961E25]"
                          : "bg-[#FFFFFFD9] hover:bg-[#F0E9EA] text-[#424242]  border border-[#EAE0E] dark:bg-[#13161B] dark:text-[#AAAAAA] dark:border-[#374151] "
                      }`}
                    >
                    All Personnel
                    </div>
                  </Tab>
                  <Tab>
                    <div
                      className={`flex items-center font-normal text-[14px] xl:text-[0.729vw] xl:py-[0.521vw] py-[18px] xl:px-[1.042vw] px-[18px] rounded-lg cursor-pointer ${
                        activeTab === 3
                          ? "bg-[#AF1E27] text-white active border border-[#961E25]"
                          : "bg-[#FFFFFFD9] hover:bg-[#F0E9EA] text-[#424242] border border-[#EAE0E0] cursor-pointer dark:bg-[#13161B] dark:text-[#AAAAAA] dark:border-[#374151] "
                      }`}
                    >
                      Manage Form
                    </div>
                  </Tab>
                  <Tab>
                    <div
                      className={`flex items-center font-normal text-[14px] xl:text-[0.729vw] xl:py-[0.521vw] py-[18px] xl:px-[1.042vw] px-[18px] rounded-lg cursor-pointer ${
                        activeTab === 4
                          ? "bg-[#AF1E27] text-white active border border-[#961E25]"
                          : "bg-[#FFFFFFD9] hover:bg-[#F0E9EA] text-[#424242] border border-[#EAE0E0] cursor-pointer dark:bg-[#13161B] dark:text-[#AAAAAA] dark:border-[#374151] "
                      }`}
                    >
                     Clinical Contacts
                    </div>
                  </Tab>
                  <Tab>
                    <div
                      className={`flex items-center font-normal text-[14px] xl:text-[0.729vw] xl:py-[0.521vw] py-[18px] xl:px-[1.042vw] px-[18px] rounded-lg cursor-pointer ${
                        activeTab === 5
                          ? "bg-[#AF1E27] text-white active border border-[#961E25]"
                          : "bg-[#FFFFFFD9] hover:bg-[#F0E9EA] text-[#424242] border border-[#EAE0E0] cursor-pointer dark:bg-[#13161B] dark:text-[#AAAAAA] dark:border-[#374151] "
                      }`}
                    >
                     PT Contacts
                    </div>
                  </Tab>
                  <Tab>
                    <div
                      className={`flex items-center font-normal text-[14px] xl:text-[0.729vw] xl:py-[0.521vw] py-[18px] xl:px-[1.042vw] px-[18px] rounded-lg cursor-pointer ${
                        activeTab === 6
                          ? "bg-[#AF1E27] text-white active border border-[#961E25]"
                          : "bg-[#FFFFFFD9] hover:bg-[#F0E9EA] text-[#424242] border border-[#EAE0E0] cursor-pointer dark:bg-[#13161B] dark:text-[#AAAAAA] dark:border-[#374151] "
                      }`}
                    >
                     ISP
                    </div>
                  </Tab>
                  <Tab>
                    <div
                      className={`flex items-center font-normal text-[14px] xl:text-[0.729vw] xl:py-[0.521vw] py-[18px] xl:px-[1.042vw] px-[18px] rounded-lg cursor-pointer ${
                        activeTab === 7
                          ? "bg-[#AF1E27] text-white active border border-[#961E25]"
                          : "bg-[#FFFFFFD9] hover:bg-[#F0E9EA] text-[#424242] border border-[#EAE0E0] cursor-pointer dark:bg-[#13161B] dark:text-[#AAAAAA] dark:border-[#374151] "
                      }`}
                    >
                   Clinical Locations
                    </div>
                  </Tab>
                </div>
              </TabList>
            </div>
           
          </div>
          <FilterComponent topTab={true}/>
          <div>
            <div>
              <TabPanel >
                <DashboardPage />
              </TabPanel>
              <TabPanel>
                { <ActivePersonnel />}
              </TabPanel>
              <TabPanel>
                { <AllPersonnel />}
              </TabPanel>
              <TabPanel>
                { <ManageForm />}
              </TabPanel>
              <TabPanel>
                {<ClinicalContacts/>}
              </TabPanel>
              <TabPanel>
                {<PTContacts/>}
              </TabPanel>
              <TabPanel>
                {<ISP/>}
              </TabPanel>
              <TabPanel>
                {<ClinicalLocation/>}
              </TabPanel>
            </div>
          </div>
        </Tabs>
      </div>
    </Layout>
  );
};

export default PlacementPage;
