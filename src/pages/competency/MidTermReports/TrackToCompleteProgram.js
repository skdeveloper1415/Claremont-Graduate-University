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

const TrackToCompleteProgram = () => {
  return (
    <>
      {/* row */}
      <div className={myNotoSerifGeorgian.className}>
        <div className="text-[#262626] text-[32px] xl:text-[1.667vw] dark:text-[#fff]">
        On Track to Complete Program?
        </div>
      </div>

      <div
        className="bg-white rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw]
        mt-[20px] xl:mt-[1.667vw] border relative SidebarHeight dark:bg-[#13161B] dark:border-none"
      >
        <ScrollPanel style={{ width: "100%", height: "100%" }}>
          <div className="gap-[8px] xl:gap-[0.833vw] flex flex-col">
            <div className="text-[20px] xl:text-[1.042vw] font-medium text-[#262626] dark:text-[#fff]">
            Is the candidate making adequate progress toward meeting the clinical expectations required to complete the program?
            </div>
            <div className="flex loginInput popupcheckboxes mb-[20px] xl:mb-[1.042vw]">
              <Checkbox
                onChange={(e) => setChecked(e.checked)}
                className="mt-1"
                // checked={checked}
              ></Checkbox>
              <div>
                <label
                  htmlFor="ingredient1"
                  className="ml-[6px] text-[#4B586E] text-[14px] xl:text-[0.729vw] font-bold dark:text-[#AAA]"
                >
                  No
                </label>
                <p className="ml-[6px] text-[#6C768B] text-[14px] xl:text-[0.729vw] dark:text-[#AAA]">
                Based on current progress in the clinical course, the candidate is not on track to meet clinical program expectations by the end of this semester. A midterm support plan is required for remediation.
                </p>
              </div>
            </div>
            <div className="flex loginInput popupcheckboxes mb-[20px] xl:mb-[1.042vw]">
              <Checkbox
                onChange={(e) => setChecked(e.checked)}
                className="mt-1"
                // checked={checked}
              ></Checkbox>
              <div>
                <label
                  htmlFor="ingredient1"
                  className="ml-[6px] text-[#4B586E] text-[14px] xl:text-[0.729vw] font-bold dark:text-[#AAA]"
                >
                Yes
                </label>
                <ul className="list-disc pl-6 ml-[6px] text-[#888888] text-base xl:text-[0.729vw]">
                
                <p className="ml-[6px] text-[#6C768B] text-[14px] xl:text-[0.729vw] dark:text-[#AAA]">
                Based on current progress in the clinical course, the candidate is not on track to meet clinical program expectations by the end of this semester. A midterm support plan is required for remediation.
                </p>
                </ul>
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
              className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] transition ease-in-out delay-150 dark:bg-[#13161B] dark:text-[#AAA] dark:border-[#AAA]"
            >
              <i className="mr-[8px] xl:mr-[0.417vw] cgupod-print text-[22px] xl:text-[1.146]"></i>
              Print PDF
            </Link>
            <Link
              href={""}
              className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] transition ease-in-out delay-150  dark:bg-[#13161B]"
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

export default TrackToCompleteProgram;
