import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import { Noto_Serif_Georgian } from "@next/font/google";
import Individualgroup from "@/components/groups/individualgroup";
import Successfullycreategroup from "@/components/groups/successfullycreategrouppopup";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { ScrollPanel } from "primereact/scrollpanel";
import OverviewPage from "@/pages/assignments/overview";
import ProfilePage from "@/pages/assignments/profile";
import ContactPage from "@/pages/assignments/contact";
import AdmissionPage from "@/pages/assignments/admission";
import ProgramPlan from "@/pages/assignments/programplan";
import QualificationsPage from "@/pages/assignments/qualifications";
import GroupsPage from "@/pages/assignments/groups";
import EnrollmentPage from "@/pages/assignments/enrollment";
import PlacementData from "@/pages/assignments/placement";
import EmploymentPage from "@/pages/assignments/employment";
import NotesPage from "@/pages/assignments/notes";
import InductionPage from "@/pages/assignments/induction";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const StudentDetailsSidebar = (props) => {
  const [postObservation, setPostObservation] = useState(false);
  const [visibleRight, setVisibleRight] = useState(false);
  const [visiblePre, setVisiblePre] = useState(false);
  const [observationScrip, setObservationScrip] = useState(false);
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
  }, [visibleRight, visiblePre, postObservation, observationScrip]);

  const elementStyle = {
    height: `calc(100vh - ${elementHeight}px)`,
  };
  /* Popup scroll height end */

  return (
    <div>
      <Sidebar
        visible={props.visible}
        position="right"
        blockScroll={true}
        style={{ background: "#FCF5F6" }}
        className="custmSidebar studentDetails"
        onHide={() => props.onHides(false)}
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
                    <div className="inline-block bg-[#F0F0F7] rounded-[4px] xl:rounded-[0.208vw] px-[10px] xl:px-[0.521vw] py-[4px] xl:py-[0.208vw] text-[#5D5384] text-[14px] xl:text-[0.729vw] mb-[20px] xl:mb-[1.042vw]">
                      Candidate ID: CGU001
                    </div>
                    {/* row */}
                    <div>
                      <Image
                        src={"/assets/images/svg/Student-Ava-Brown.svg"}
                        alt="Student Detail"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className={myNotoSerifGeorgian.className}>
                      <div className="text-[#312C49] text-[40px] xl:text-[2.500vw] leading-[1.1]">
                        Ava Brown
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
                                Position
                                </div>
                                <div className="text-[#312C49] text-[16px] xl:text-[0.833vw] font-medium">
                                Pre Teaching
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
                                Grades
                                </div>
                                <div className="text-[#312C49] text-[16px] xl:text-[0.833vw] font-medium">
                                  9,10,11
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
                      <Tab>Overview</Tab>
                      <Tab>Profile</Tab>
                      <Tab>Contact</Tab>
                      <Tab>Admission</Tab>
                      <Tab>Program Plan</Tab>
                      <Tab>Qualification</Tab>
                      <Tab>Groups</Tab>
                      <Tab>Enrollment</Tab>
                      <Tab>Placement</Tab>
                      <Tab>Employment</Tab>
                      <Tab>Induction</Tab>
                      <Tab>Notes</Tab>
                    </TabList>
                  </div>
                </ScrollPanel>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <ScrollPanel className="popup-right-scroll h-[100vh] bg-[#FCF5F6] ">
                <div className="px-[60px] xl:px-[3.125vw] pt-[70px] xl:pt-[3.646vw] pb-[36px] xl:pb-[1.875vw]">
                  <div className="relative">
                    <TabPanel>
                      <OverviewPage />
                    </TabPanel>
                    <TabPanel>
                      <ProfilePage />
                    </TabPanel>
                    <TabPanel>
                      <ContactPage />
                    </TabPanel>
                    <TabPanel>
                      <AdmissionPage />
                    </TabPanel>
                    <TabPanel>
                      <ProgramPlan />
                    </TabPanel>
                    <TabPanel>
                      <QualificationsPage />
                    </TabPanel>
                    <TabPanel>
                      <GroupsPage />
                    </TabPanel>
                    <TabPanel>
                      <EnrollmentPage />
                    </TabPanel>
                    <TabPanel>
                      <PlacementData />
                    </TabPanel>
                    <TabPanel>
                      <EmploymentPage />
                    </TabPanel>
                    <TabPanel>
                      <InductionPage />
                    </TabPanel>
                    <TabPanel>
                      <NotesPage />
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
export default StudentDetailsSidebar;
