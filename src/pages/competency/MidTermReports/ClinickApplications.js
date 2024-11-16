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

const ClinickApplications = () => {
  return (
    <>
      {/* row */}
      <div className={myNotoSerifGeorgian.className}>
        <div className="text-[#262626] text-[32px] xl:text-[1.667vw] dark:text-[#fff]">
          Clinical Application of CSJ Competencies
        </div>
      </div>

      {/* row */}
      <div
       className="mt-[22px] xl:mt-[1.146vw] mb-[60px] xl:mb-[3.125vw] bg-[#fff] rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw] SidebarHeight dark:bg-[#13161B]"
      >
        <ScrollPanel style={{ width: "100%", height: "100%" }}>
        <div className="text-lg text-[#262626] font-medium dark:text-[#fff]">
        Pass Crtieria
        </div>
        <div className="border border-solid border-[#F2EEEE] rounded-lg bg-white shadow mb-3  dark:bg-[#13161B] dark:border-[#374151]">
          <div className="p-5 font-medium text-base text-[#262626] dark:text-[#fff] dark:border-b dark:border-[#374151] ">
          2022 - 2023 Competency Goals
          </div>
          <div className="grid grid-cols-4 bg-[#F0E9EA] py-3 px-5 dark:bg-[#0C0E12] dark:border-b dark:border-[#374151] ">
            <div className="text-sm text-[#262626] font-medium dark:text-[#FFF]">Emerging</div>
            <div className="text-sm text-[#262626] font-medium dark:text-[#FFF]">Developing</div>
            <div className="text-sm text-[#262626] font-medium dark:text-[#FFF]">Meeting</div>
            <div className="text-sm text-[#262626] font-medium dark:text-[#FFF]">Exceeding</div>
          </div>
          <div className="grid grid-cols-4 bg-[#fff] py-3 px-5 dark:bg-[#13161B] dark:border-[#374151] dark:border-b dark:border-l rounded">
            <div className="text-sm text-[#262626] font-normal dark:text-[#AAAAAA]">2.00 - 2.49</div>
            <div className="text-sm text-[#262626] font-normal dark:text-[#AAAAAA]">Developing</div>
            <div className="text-sm text-[#262626] font-normal dark:text-[#AAAAAA]">Meeting</div>
            <div className="text-sm text-[#262626] font-normal dark:text-[#AAAAAA]">Exceeding</div>
          </div>
        </div>
        <div className="gap-[8px] xl:gap-[0.833vw] flex flex-col">
          <ul className="list-disc p-2.5 pl-8 text-xs bg-[#FFFAFB] text-[#888888] dark:bg-[#1F2631] dark:rounded-[0.417vw]">
            <li>
              To pass this clinical course, candidates must meet the criteria
              for “meeting competency” with no 1s and no more then 5 notable
              concerns by end spring semester.
            </li>
            <li>
              Candidates who meet all other course criteria but score within the
              “developing competency” range may earn a “Pass” grade in the
              course if they have demonstrated adequate progress as outlined in
              their support plan.
            </li>
          </ul>
          <div className="text-[20px] xl:text-[1.042vw] font-medium text-[#262626] dark:text-[#fff]">
            School Site Application
          </div>
          <div className="flex loginInput popupcheckboxes mb-[20px] xl:mb-[1.042vw]">
            <Checkbox
              onChange={(e) => setChecked(e.checked)}
              // checked={checked}
              className="dark:bg-[#13161B]"
            ></Checkbox>
            <label
              htmlFor="ingredient1"
              className="ml-[6px] text-[#4B586E] text-[14px] xl:text-[0.729vw] font-medium dark:text-[#AAA]"
            >
              Does not meet expectations
            </label>
          </div>
          <div className="flex loginInput popupcheckboxes mb-[20px] xl:mb-[1.042vw]">
            <Checkbox
              onChange={(e) => setChecked(e.checked)}
              // checked={checked}
            ></Checkbox>
            <label
              htmlFor="ingredient1"
              className="ml-[6px] text-[#4B586E] text-[14px] xl:text-[0.729vw] font-medium dark:text-[#AAA]"
            >
              Meets Expectations
            </label>
          </div>
          <div className="flex loginInput popupcheckboxes mb-[20px] xl:mb-[1.042vw]">
            <Checkbox
              onChange={(e) => setChecked(e.checked)}
              // checked={checked}
            ></Checkbox>
            <label
              htmlFor="ingredient1"
              className="ml-[6px] text-[#4B586E] text-[14px] xl:text-[0.729vw] font-medium dark:text-[#AAA]"
            >
              Exceeds Expectations
            </label>
          </div>
          <ul className="list-disc p-2.5 pl-8 text-xs bg-[#FFFAFB] text-[#888888]  dark:bg-[#1F2631] dark:rounded-[0.417vw]">
            <li>
              Follows attendance philosophy as outlined in clinical syllabus.
            </li>
            <li>
              Follows school district/organization contracted hours, including
              special events.
            </li>

            <li>Utilizes time management skills and strategies.</li>

            <li>
              Prepares for lessons ahead of time. Fully engages in the clinical
              setting.
            </li>

            <li>
              Strives to develop and maintain sustainable relationships across
              classroom & school site.
            </li>
          </ul>

          <div className="mt-4 text-[20px] xl:text-[1.042vw] font-medium text-[#262626] dark:text-[#fff]">
            Reciprocally Enhancing Mentoring & Coaching
          </div>
          <div className="flex loginInput popupcheckboxes mb-[20px] xl:mb-[1.042vw]">
            <Checkbox
              onChange={(e) => setChecked(e.checked)}
              // checked={checked}
            ></Checkbox>
            <label
              htmlFor="ingredient1"
              className="ml-[6px] text-[#4B586E] text-[14px] xl:text-[0.729vw] font-medium dark:text-[#AAA]"
            >
              Does not meet expectations
            </label>
          </div>
          <div className="flex loginInput popupcheckboxes mb-[20px] xl:mb-[1.042vw]">
            <Checkbox
              onChange={(e) => setChecked(e.checked)}
              // checked={checked}
            ></Checkbox>
            <label
              htmlFor="ingredient1"
              className="ml-[6px] text-[#4B586E] text-[14px] xl:text-[0.729vw] font-medium dark:text-[#AAA]"
            >
              Does not meet expectations
            </label>
          </div>
          <div className="flex loginInput popupcheckboxes mb-[20px] xl:mb-[1.042vw]">
            <Checkbox
              onChange={(e) => setChecked(e.checked)}
              // checked={checked}
            ></Checkbox>
            <label
              htmlFor="ingredient1"
              className="ml-[6px] text-[#4B586E] text-[14px] xl:text-[0.729vw] font-medium dark:text-[#AAA]"
            >
              Does not meet expectations
            </label>
          </div>
        </div>
        <ul className="list-disc p-2.5 pl-8 text-xs bg-[#FFFAFB] text-[#888888] dark:bg-[#1F2631] dark:rounded-[0.417vw]">
          <li>
            Strives to develop and maintain sustainable relationships across
            classroom & school site.
          </li>
        </ul>
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

export default ClinickApplications;
