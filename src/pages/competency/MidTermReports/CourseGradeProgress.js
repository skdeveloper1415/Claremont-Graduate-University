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

const CourseGradeProgress = () => {
  return (
    <>
      {/* row */}
      <div className={myNotoSerifGeorgian.className}>
        <div className="text-[#262626] text-[32px] xl:text-[1.667vw] dark:text-[#fff]">
          Course Grade Progress
        </div>
      </div>

      <div
        className="bg-white rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw]
       mt-[20px] xl:mt-[1.667vw] border relative SidebarHeight dark:bg-[#13161B] dark:border-none"
      >
        <ScrollPanel style={{ width: "100%", height: "100%" }}>
          <div className="gap-[8px] xl:gap-[0.833vw] flex flex-col">
            <div className="text-[20px] xl:text-[1.042vw] font-medium text-[#262626] dark:text-[#fff]">
              Progress
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
                  Not on Track to earn a Passing G
                </label>
                <p className="ml-[6px] text-[#6C768B] text-[14px] xl:text-[0.729vw] dark:text-[#6C768B]">
                  Condidate is not meeting course expectations in one or more area
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
                  Not on Track to earn a Passing G
                </label>
                <ul className="list-disc pl-6 ml-[6px] text-[#888888] text-base xl:text-[0.729vw] dark:text-[#6C768B]">
                  <li>
                    The Candidate is meeting ALL course expectations, clinical
                    assignments, AND has met expectations for CSJ competency
                    development.
                  </li>
                  <li>
                    The candidate has demonstrated or is on track to meet at least
                    “meeting competency” with no 1s and no more than 5 notable
                    concerns by end of Spring semester.
                  </li>
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
              <i className="mr-[8px] xl:mr-[0.417vw] cgupod-print text-[22px] xl:text-[1.146] "></i>
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

export default CourseGradeProgress;
