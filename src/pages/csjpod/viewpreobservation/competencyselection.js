import React, { useState, useRef } from "react";
import { Noto_Serif_Georgian } from "@next/font/google";
import Link from "next/link";
import { ScrollPanel } from "primereact/scrollpanel";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const CompetencySelection = () => {
  return (
    <>
      {/* row */}
      <div className={myNotoSerifGeorgian.className}>
        <div className="text-[#262626] dark:text-[#FFFF] text-[32px] xl:text-[1.667vw]">
          Competency Selection
        </div>
      </div>
      <div className="flex text-[16px] xl:text-[0.833vw] text-[#888] dark:text-[#818181] font-normal mt-[22px] xl:mt-[1.146vw]">
        Deliberate focus on competencies makes PODs more meaningful and
        productive. .Before selecting focus areas, consider the following
        guiding questions:
      </div>

      <div className="SidebarHeight">
        <ScrollPanel style={{ width: "100%", height: "100%" }}>
          <div
            className="bg-white dark:bg-[#13161B] dark:border-[#13161B] rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw]
       mt-[20px] xl:mt-[1.042vw] border relative ml-[20px] xl:ml-[1.042vw]"
          >
            <div
              className="absolute xl:top-[20px] xl:left-[-8px] 2xl:top-[20px] 2xl:left-[-18px] lg:top[100px] lg:left-[-20px]
         md:top-[20px] md:left-[-20px] sm:left-[-20px]  p-[10px] xl:p-[0.521vw] bg-[#FDF6B2] dark:bg-[#8E4B10] rounded-md"
            >
              <i className="cgupod-lamp-on text-[20px] xl:text-[1.042vw] text-[#8E4B10] dark:text-[#FDF6B2]"></i>
            </div>
            <div className="gap-[16px] xl:gap-[0.833vw] flex flex-col">
              <div className="text-[20px] xl:text-[1.042vw] font-medium text-[#262626] dark:text-[#FFF]">
                Look back
              </div>
              <div className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                What have you learned that you want to try? How will the prior
                commitments you've made (i.e., next steps) inform your
                competency focus on this POD?
              </div>
            </div>
          </div>
          {/* row */}
          <div
            className="bg-white dark:bg-[#13161B] dark:border-[#13161B] rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw]
       mt-[32px] xl:mt-[1.667vw] border relative ml-[20px] xl:ml-[1.042vw]"
          >
            <div
              className="absolute xl:top-[20px] xl:left-[-8px] 2xl:top-[20px] 2xl:left-[-18px] lg:top[100px] lg:left-[-20px]
          md:top-[20px] md:left-[-20px] sm:left-[-20px]  p-[10px] xl:p-[0.521vw] bg-[#FDF6B2] dark:bg-[#8E4B10] rounded-md"
            >
              <i className="cgupod-lamp-on text-[20px] xl:text-[1.042vw] text-[#8E4B10] dark:text-[#FDF6B2]"></i>
            </div>
            <div className="gap-[16px] xl:gap-[0.833vw] flex flex-col">
              <div className="text-[20px] xl:text-[1.042vw] font-medium text-[#262626] dark:text-[#FFF]">
                Evaluate current demands
              </div>
              <div className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                Considering the tasks and context of your lesson plan, what
                competency focus areas will support further growth?
              </div>
            </div>
          </div>
          <div
            className="bg-white dark:bg-[#13161B] dark:border-[#13161B] rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw]
       mt-[32px] xl:mt-[1.667vw] border relative ml-[20px] xl:ml-[1.042vw]"
          >
            <div
              className="absolute xl:top-[20px] xl:left-[-8px] 2xl:top-[20px] 2xl:left-[-18px] lg:top[100px] lg:left-[-20px]
          md:top-[20px] md:left-[-20px] sm:left-[-20px]  p-[10px] xl:p-[0.521vw] bg-[#FDF6B2] dark:bg-[#8E4B10] rounded-md"
            >
              <i className="cgupod-lamp-on text-[20px] xl:text-[1.042vw] text-[#8E4B10] dark:text-[#FDF6B2]"></i>
            </div>
            <div className="gap-[16px] xl:gap-[0.833vw] flex flex-col">
              <div className="text-[20px] xl:text-[1.042vw] font-medium text-[#262626] dark:text-[#FFF]">
                Identify high-impact practices
              </div>
              <div className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                What teacher moves are needed in this lesson? Select up to 3
                high impact practices for each competency focus area below.
              </div>
            </div>
          </div>
        </ScrollPanel>
      </div>

      <div className="mt-[40px] xl:mt-[2.083vw] lg:mt-[0] lg:absolute bottom-[-70px] left-0 right-0">
        <div className="flex items-center justify-between">
          <div className="col">
            <Link
              href="javascript:void(0)"
              className="flex items-center bg-white dark:bg-[#13161B] dark:text-[#AF1E27] dark:border-[#AF1E27] hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] opacity-30 transition ease-in-out delay-150"
            >
              <i className="mr-[8px] xl:mr-[0.417vw] cgupod-close-circle text-[22px] xl:text-[1.146]"></i>
              Cancel
            </Link>
          </div>
          <div className="col">
            <div className="flex gap-[8px] xl:gap-[0.417vw]">
              <Link
                href="javascript:void(0)"
                className="flex items-center bg-white dark:bg-[#13161B] dark:border-[#F5747C] dark:text-[#F5747C] hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] gap-[8px] xl:gap-[0.417vw]
                 xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px]
                  xl:py-[0.625vw] transition ease-in-out delay-150"
              >
                <i className="mr-[8px] xl:mr-[0.417vw] cgupod-tick-circle text-[22px] xl:text-[1.146]"></i>
                Submit
              </Link>{" "}
              <Link
                href="javascript:void(0)"
                className="flex items-center bg-white dark:bg-[#13161B] dark:border-[#F5747C] dark:text-[#F5747C] hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] gap-[8px] xl:gap-[0.417vw]
                 xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px]
                  xl:py-[0.625vw] transition ease-in-out delay-150"
              >
                <i className="mr-[8px] xl:mr-[0.417vw] cgupod-save-file text-[22px] xl:text-[1.146]"></i>
                Save
              </Link>
              <Link
                href="javascript:void(0)"
                className="flex items-center bg-white dark:bg-[#13161B] dark:border-[#F5747C] dark:text-[#F5747C] hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] gap-[8px] xl:gap-[0.417vw]
                 xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px]
                 xl:py-[0.625vw] transition ease-in-out delay-150"
              >
                Next{" "}
                <i className="mr-[8px] xl:mr-[0.417vw] cgupod-arrow-right-line text-[18px] xl:text-[0.938vw]"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompetencySelection;
