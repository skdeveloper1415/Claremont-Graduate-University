import FilterComponent from "@/components/filtercomponent";
import Layout from "@/components/layout/layout";
import { Noto_Serif_Georgian } from "@next/font/google";
import { Sidebar } from "primereact/sidebar";
import { useRef, useState, useEffect } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Domain1 from "./csjCompetency/Domain1";
import Domain2 from "./csjCompetency/Domain2";
import Domain3 from "./csjCompetency/Domain3";
import Domain4 from "./csjCompetency/Domain4";
import Domain5 from "./csjCompetency/Domain5";
import Domain6 from "./csjCompetency/Domain6";
import Domain7 from "./csjCompetency/Domain7";
import Domain8 from "./csjCompetency/Domain8";
import Domain9 from "./csjCompetency/Domain9";
import DashboardPage from "./dashboard";
import LessonPlanSummary from "./lessonplansummary";
import PodSummary from "./podsummary";
import PreObservationSummary from "./presummary";
import { ScrollPanel } from "primereact/scrollpanel";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const CsjPod = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const [visibleRight, setVisibleRight] = useState(false);

  const handleCSJCompentency = () => {
    setVisibleRight(true);
 
  };
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

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
        paddingTopValue = computedStyles.getPropertyValue('padding-top');
        numericValue = parseFloat(paddingTopValue);
        console.log('Padding-top value:', numericValue);

      }      

      const popupTitle = popupTitleRef.current; 
      let height;
      if(popupTitle){        

        height = popupTitle.offsetHeight;
        console.log(height + ' height of ref'); 
        setElementHeight(height + numericValue);

      }
    }, 200);

    return () => {
      clearTimeout(timeoutId);
    };
  }

  // Initial update
  updateTapScrollHeight();

  // Update elementHeight on window resize
  const handleResize = () => {
    updateTapScrollHeight();
  };

  window.addEventListener('resize', handleResize);

  // Cleanup: remove the event listener on component unmount
  return () => {
    window.removeEventListener('resize', handleResize);
  };

}, [visibleRight]);

const elementStyle = {
  height: `calc(100vh - ${elementHeight}px)`,
};
/* Popup scroll height end */  

  return (
    <Layout 
      topTab={true} 
      pageTitle="CSJ POD Overview" 
      pageName="Manage CSJ POD"
    >
      <div className="">
        <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
          <div className="flex justify-between gap-[8px] bg-[#FCF5F6] dark:bg-[#1C2026] xl:pt-[0.833vw] xl:pb-[0.667vw] pr-[16px] xl:pr-[0.833vw] mr-[-16px] xl:mr-[-0.833vw] pl-[128px] ml-[-128px] detailedLeftTabs sticky top-[4.27vw] z-[4] ">
            <div>
              <TabList>
                <div className="flex gap-[8px] items-center">
                  <Tab>
                    <div
                      className={`flex items-center font-normal text-[14px] xl:text-[0.729vw] xl:py-[0.521vw] py-[12px] xl:px-[1.042vw] px-[18px] rounded-lg cursor-pointer ${
                        activeTab === 0
                          ? "bg-[#AF1E27] text-white active border border-[#961E25]"
                          : "bg-[#FFFFFFD9] hover:bg-[#F0E9EA] dark:bg-[#374151] dark:text-[#AAA] dark:border-[#1C2026] text-[#424242]  border border-[#EAE0E]"
                      }`}
                    >
                      CSJ Dashboard
                    </div>
                  </Tab>
                  <Tab>
                    <div
                      className={`flex items-center font-normal text-[14px] xl:text-[0.729vw] xl:py-[0.521vw] py-[12px] xl:px-[1.042vw] px-[18px] rounded-lg cursor-pointer ${
                        activeTab === 1
                          ? "bg-[#AF1E27] text-white active border border-[#961E25]"
                          : "bg-[#FFFFFFD9] hover:bg-[#F0E9EA] dark:bg-[#374151] dark:text-[#AAA] dark:border-[#1C2026] text-[#424242]  border border-[#EAE0E]"
                      }`}
                    >
                      CSJ Lesson Plan Summary
                    </div>
                  </Tab>
                  <Tab>
                    <div
                      className={`flex items-center font-normal text-[14px] xl:text-[0.729vw] xl:py-[0.521vw] py-[12px] xl:px-[1.042vw] px-[18px] rounded-lg cursor-pointer ${
                        activeTab === 2
                          ? "bg-[#AF1E27] text-white active border border-[#961E25]"
                          : "bg-[#FFFFFFD9] hover:bg-[#F0E9EA] dark:bg-[#374151] dark:text-[#AAA] dark:border-[#1C2026] text-[#424242]  border border-[#EAE0E]"
                      }`}
                    >
                      Pre Observation Summary
                    </div>
                  </Tab>
                  <Tab>
                    <div
                      className={`flex items-center font-normal text-[14px] xl:text-[0.729vw] xl:py-[0.521vw] py-[12px] xl:px-[1.042vw] px-[18px] rounded-lg cursor-pointer ${
                        activeTab === 3
                          ? "bg-[#AF1E27] text-white active border border-[#961E25]"
                          : "bg-[#FFFFFFD9] hover:bg-[#F0E9EA] dark:bg-[#374151] dark:text-[#AAA] dark:border-[#1C2026] text-[#424242]  border border-[#EAE0E]"
                      }`}
                    >
                      POD Summary
                    </div>
                  </Tab>
                  {/* <Tab> */}
                  <div
                    onClick={handleCSJCompentency}
                    className={`flex items-center font-normal text-[14px] xl:text-[0.729vw] xl:py-[0.521vw] py-[12px] xl:px-[1.042vw] px-[18px] rounded-lg cursor-pointer ${
                      activeTab === 4
                        ? "bg-[#AF1E27] text-white active border border-[#961E25]"
                        : "bg-[#FFFFFFD9] hover:bg-[#F0E9EA] dark:bg-[#374151] dark:text-[#AAA] dark:border-[#1C2026] text-[#424242]  border border-[#EAE0E]"
                    }`}
                  >
                    CSJ Competency
                  </div>
                  {/* </Tab> */}
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
          <FilterComponent topTab={true} />
          <div>
            <div>
              <TabPanel>
                <DashboardPage />
              </TabPanel>
              <TabPanel>
                <LessonPlanSummary />
              </TabPanel>
              <TabPanel>
                <PreObservationSummary />
              </TabPanel>
              <TabPanel>
                <PodSummary />
              </TabPanel>
            </div>
          </div>
        </Tabs>
        
        <Sidebar
          visible={visibleRight}
          position="right"
          onHide={() => setVisibleRight(false)}
          blockScroll={true}
          className="custmSidebar widthOne"
        >
          <Tabs>
            <div className="grid grid-cols-12 h-full">
              <div className="col-span-12 lg:col-span-5">
                <div ref={popupPaddingTopRef} className="bg-[#E0E0EF] dark:bg-[#0C0E12] h-full pt-[30px] xl:pt-[3.646vw]">
                  <div className="px-[20px] xl:px-[3.646vw]">
                    <div ref={popupTitleRef} className="border border-[#FFFFFF] dark:border-[#374151] p-[28px] xl:p-[1.458vw] rounded-[16px] xl:rounded-[0.833vw]">
                      <div className={myNotoSerifGeorgian.className}>
                        <div className="text-[#312C49] dark:text-[#F8F7F4] text-[40px] xl:text-[2.500vw] leading-[1.1]">
                          CSJ Competency
                        </div>
                      </div>
                    </div>
                  </div>
                  <ScrollPanel className="popupTabs"
                    style={elementStyle}
                  >
                    <div className="pr-[20px] xl:pr-[3.646vw] pl-[40px] xl:pl-[5.74vw]">
                      <TabList>
                        <Tab>Domain 1</Tab>
                        <Tab>Domain 2</Tab>
                        <Tab>Domain 3</Tab>
                        <Tab>Domain 4</Tab>
                        <Tab>Domain 5</Tab>
                        <Tab>Domain 6</Tab>
                        <Tab>Domain 7</Tab><Tab>Domain 8</Tab>
                        <Tab>Domain 9</Tab>
                      </TabList>
                    </div>
                  </ScrollPanel>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-7">
                <ScrollPanel className="popup-right-scroll h-[100vh] bg-[#FCF5F6] dark:bg-[#1C2026]">
                  <div className="px-[60px] xl:px-[3.125vw] pt-[70px] xl:pt-[3.646vw] pb-[36px] xl:pb-[1.875vw]">
                    <div className="relative ">
                      <TabPanel>
                        <Domain1 />
                      </TabPanel>
                      <TabPanel>
                        <Domain2 />
                      </TabPanel>
                      <TabPanel>
                        <Domain3 />
                      </TabPanel>
                      <TabPanel>
                        <Domain4 />
                      </TabPanel>
                      <TabPanel>
                        <Domain5 />
                      </TabPanel>
                      <TabPanel>
                        <Domain6 />
                      </TabPanel>
                      <TabPanel>
                        <Domain7 />
                      </TabPanel>
                      <TabPanel>
                        <Domain8 />
                      </TabPanel>
                      <TabPanel>
                        <Domain9 />
                      </TabPanel>
                    </div>
                  </div>
                </ScrollPanel>
              </div>
            </div>
          </Tabs>
        </Sidebar>
      </div>
    </Layout>
  );
};

export default CsjPod;
