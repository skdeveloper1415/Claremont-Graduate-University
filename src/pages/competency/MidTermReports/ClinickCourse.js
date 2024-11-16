import React, { useState, useRef } from "react";
import { Noto_Serif_Georgian } from "@next/font/google";
import Link from "next/link";
import { ScrollPanel } from "primereact/scrollpanel";
import { Checkbox } from "primereact/checkbox";
import { InputTextarea } from "primereact/inputtextarea";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const ClinickCourse = () => {
  return (
    <>
      {/* row */}
      <div className={myNotoSerifGeorgian.className}>
        <div className="text-[#262626] text-[32px] xl:text-[1.667vw] mb-[20px] xl:mb[1.67vw] dark:text-[#fff]">
          Clinical Course Assignments
        </div>
      </div>
      <div className="SidebarHeight">
        <ScrollPanel style={{ width: "100%", height: "100%" }}>
          {/* row */}
          <div
            className="bg-white rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw]
          border relative dark:bg-[#13161B] dark:border-none"
          >
            <div
              className="absolute top-[0px] left-[0px] p-[10px] xl:p-[0.521vw] bg-[#FDF6B2] rounded-md dark:bg-[#8E4B10]"
            >
              <i className="cgupod-lamp-on text-[20px] xl:text-[1.042vw] text-[#8E4B10] dark:text-[#FDF6B2]"></i>
            </div>


            <div className="gap-[16px] xl:gap-[0.833vw] flex flex-col ">
              <div className="text-[20px] xl:text-[1.042vw] font-medium text-[#262626] dark:text-[#fff] ">
                Observation Cycles 1
              </div>
              <p className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                POD cycle (or more) has been completed including lesson planning, pre-observation meeting, and debrief
              </p>
            </div>
          </div>
          {/* row */}

          <div
            className="bg-white rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw]
          mt-[32px] xl:mt-[1.667vw] border relative dark:bg-[#13161B] dark:border-none"
          >
            <div
              className="absolute top-[0px] left-[0px] p-[10px] xl:p-[0.521vw] bg-[#FDF6B2] rounded-md dark:bg-[#8E4B10]"
            >
              <i className="cgupod-lamp-on text-[20px] xl:text-[1.042vw] text-[#8E4B10] dark:text-[#FDF6B2]"></i>
            </div>
            <div className="gap-[16px] xl:gap-[0.833vw] flex flex-col">
              <div className="text-[20px] xl:text-[1.042vw] font-medium text-[#262626] dark:text-[#fff]">

                Observation Cycles 2
              </div>
              <p className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                Informal have been completed with Clinical Faculty Advisor (or more), including CSJ Competency Updates form and debrief.
              </p>
            </div>
          </div>

          <div
            className="bg-white rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw]
          mt-[32px] xl:mt-[1.667vw] border relative dark:bg-[#13161B] dark:border-none"
          >
            <div className="gap-[8px] xl:gap-[0.833vw] flex flex-col">
              <div className="text-[20px] xl:text-[1.042vw] font-medium text-[#262626] dark:text-[#fff]">
                Observation Cycles
              </div>
              <div className="flex loginInput popupcheckboxes mb-[20px] xl:mb-[1.042vw]">
                <Checkbox onChange={e => setChecked(e.checked)}
                // checked={checked}
                ></Checkbox>
                <label htmlFor="ingredient1" className="ml-[6px] text-[#4B586E] text-[14px] xl:text-[0.729vw] font-medium dark:text-[#AAA]">Does not meet expectations</label>
              </div>
              <div className="flex loginInput popupcheckboxes mb-[20px] xl:mb-[1.042vw]">
                <Checkbox onChange={e => setChecked(e.checked)}
                // checked={checked}
                ></Checkbox>
                <label htmlFor="ingredient1" className="ml-[6px] text-[#4B586E] text-[14px] xl:text-[0.729vw] font-medium dark:text-[#AAA]">Does not meet expectations</label>
              </div>
              <div className="flex loginInput popupcheckboxes mb-[20px] xl:mb-[1.042vw]">
                <Checkbox onChange={e => setChecked(e.checked)}
                // checked={checked}
                ></Checkbox>
                <label htmlFor="ingredient1" className="ml-[6px] text-[#4B586E] text-[14px] xl:text-[0.729vw] font-medium dark:text-[#AAA]">Does not meet expectations</label>
              </div>
              <div className="flex flex-col gap-[6px]">
                <div className="text-[14px] xl:text-[0.729vw] text-[#262626] font-medium dark:text-[#fff]">
                  Comments
                </div>
                <div className="custInput">
                  <InputTextarea
                    placeholder="Write text here ..."
                    autoResize
                    // value={value}
                    // onChange={(e) => setValue(e.target.value)}
                    className="w-full"
                    rows={6}
                    cols={30}
                  />
                </div>
              </div>
              <p className="p-2.5 text-xs bg-[#FFFAFB] text-[#888888] dark:text-[#818181] dark:bg-[#1F2631] rounded">
                CLINICAL FACULTY ADVISOR : Provide a desciption of the candidate’s progress or engagement with each of the below clinical course assignments.
              </p>






              <div className="text-[20px] xl:text-[1.042vw] font-medium text-[#262626] dark:text-[#fff]">
                Evidence of Ongoing Lesson Planing
              </div>
              <div className="flex loginInput popupcheckboxes mb-[20px] xl:mb-[1.042vw]">
                <Checkbox onChange={e => setChecked(e.checked)}
                // checked={checked}
                ></Checkbox>
                <label htmlFor="ingredient1" className="ml-[6px] text-[#4B586E] text-[14px] xl:text-[0.729vw] font-medium dark:text-[#AAA]">Does not meet expectations</label>
              </div>
              <div className="flex loginInput popupcheckboxes mb-[20px] xl:mb-[1.042vw]">
                <Checkbox onChange={e => setChecked(e.checked)}
                // checked={checked}
                ></Checkbox>
                <label htmlFor="ingredient1" className="ml-[6px] text-[#4B586E] text-[14px] xl:text-[0.729vw] font-medium dark:text-[#AAA]">Does not meet expectations</label>
              </div>
              <div className="flex loginInput popupcheckboxes mb-[20px] xl:mb-[1.042vw]">
                <Checkbox onChange={e => setChecked(e.checked)}
                // checked={checked}
                ></Checkbox>
                <label htmlFor="ingredient1" className="ml-[6px] text-[#4B586E] text-[14px] xl:text-[0.729vw] font-medium dark:text-[#AAA]">Does not meet expectations</label>
              </div>
              <div className="flex flex-col gap-[6px]">
                <div className="text-[14px] xl:text-[0.729vw] text-[#262626] font-medium  dark:text-[#fff]">
                  Comments
                </div>
                <div className="custInput">
                  <InputTextarea
                    placeholder="Write text here ..."
                    autoResize
                    // value={value}
                    // onChange={(e) => setValue(e.target.value)}
                    className="w-full"
                    rows={6}
                    cols={30}
                  />
                </div>
              </div>
            </div>



          </div>
        </ScrollPanel>
      </div>



      <div className="mt-[40px] xl:mt-[2.083vw] lg:mt-[0] lg:absolute bottom-[-70px] left-0 right-0">
        <div className="flex items-center justify-between">
          <div className="col">
            <Link
              href={""}
              className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] opacity-30 transition ease-in-out delay-150"
            >
              <i className="mr-[8px] xl:mr-[0.417vw] cgupod-close-circle text-[22px] xl:text-[1.146]"></i>
              Cancel
            </Link>
          </div>
          <div className="flex gap-1">
            <Link
              href={""}
              className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] transition ease-in-out delay-150 dark:text-[#AAA] dark:border-[#AAA] dark:bg-[#13161B]"
            >
              <i className="mr-[8px] xl:mr-[0.417vw] cgupod-print text-[22px] xl:text-[1.146]"></i>
              Print PDF
            </Link>
            <Link
              href={""}
              className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] transition ease-in-out delay-150 dark:bg-[#13161B]"
            >
              <i className="mr-[8px] xl:mr-[0.417vw] cgupod-tick-circle text-[22px] xl:text-[1.146]"></i>
              Submit
            </Link>
          </div>
        </div>
      </div>


    </>
  );
};

export default ClinickCourse;
