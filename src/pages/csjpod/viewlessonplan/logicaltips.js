import React, { useState, useRef } from "react";
import { Noto_Serif_Georgian } from "@next/font/google";
import { ScrollPanel } from "primereact/scrollpanel";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const LogicalTips = () => {
  return (
    <>
      {/* row */}
      <div className={myNotoSerifGeorgian.className}>
        <div className="text-[#262626] dark:text-[#FFF] text-[32px] xl:text-[1.667vw]">
          Logistical Tips
        </div>
      </div>
      <div className="SidebarHeight">
        <ScrollPanel style={{ width: "100%", height: "100%" }}>
          {/* row */}
          <div
            className="bg-white dark:bg-[#13161B] rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw]
       mt-[32px] xl:mt-[1.667vw] border dark:border-[#13161B] relative ml-[20px] xl:ml-[1.042vw]"
          >
            <div
              className="absolute xl:top-[20px] xl:left-[-8px] 2xl:top-[20px] 2xl:left-[-18px] lg:top[100px] lg:left-[-20px]
         md:top-[20px] md:left-[-20px] sm:left-[-20px]  p-[10px] xl:p-[0.521vw] bg-[#FDF6B2] dark:bg-[#8E4B10] rounded-md"
            >
              <i className="cgupod-lamp-on text-[20px] xl:text-[1.042vw] text-[#8E4B10] dark:text-[#FDF6B2]"></i>
            </div>
            <div className="gap-[16px] xl:gap-[0.833vw] flex flex-col">
              <div className="text-[16px] xl:text-[1.042vw] font-medium text-[#262626] dark:text-[#FFF]">
                Move to a New Line in the Same Box
              </div>
              <div className="xl:text-[0.938vw] text-[14px] font-normal text-[#424242] dark:text-[#AAAA]">
                Press Ctrl or Command and Enter/Return at the same time
                (sometimes more than once)
              </div>
            </div>
          </div>
          {/* row */}
          <div
            className="bg-white dark:bg-[#13161B] rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw]
       mt-[32px] xl:mt-[1.667vw] border dark:border-[#13161B] relative ml-[20px] xl:ml-[1.042vw]"
          >
            <div
              className="absolute xl:top-[20px] xl:left-[-8px] 2xl:top-[20px] 2xl:left-[-18px] lg:top[100px] lg:left-[-20px]
          md:top-[20px] md:left-[-20px] sm:left-[-20px]  p-[10px] xl:p-[0.521vw] bg-[#FDF6B2] dark:bg-[#8E4B10] rounded-md"
            >
              <i className="cgupod-lamp-on text-[20px] xl:text-[1.042vw] text-[#8E4B10] dark:text-[#FDF6B2]"></i>
            </div>
            <div className="gap-[16px] xl:gap-[0.833vw] flex flex-col">
              <div className="text-[16px] xl:text-[1.042vw] font-medium text-[#262626] dark:text-[#FFF]">
                When a Row Is Broken into Pieces
              </div>
              <div className="xl:text-[0.938vw] text-[14px] font-normal text-[#424242] dark:text-[#AAAA]">
                Merge them! Use the "Merge Cells" option from the Format Menu
                and select "merge all" or "merge horizontally" or find the
                "Merge" icon in the menu bar
              </div>
            </div>
          </div>
          <div
            className="bg-white dark:bg-[#13161B] rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw]
       mt-[32px] xl:mt-[1.667vw] border dark:border-[#13161B] relative ml-[20px] xl:ml-[1.042vw]"
          >
            <div
              className="absolute xl:top-[20px] xl:left-[-8px] 2xl:top-[20px] 2xl:left-[-18px] lg:top[100px] lg:left-[-20px]
          md:top-[20px] md:left-[-20px] sm:left-[-20px]  p-[10px] xl:p-[0.521vw] bg-[#FDF6B2] dark:bg-[#8E4B10] rounded-md"
            >
              <i className="cgupod-lamp-on text-[20px] xl:text-[1.042vw] text-[#8E4B10] dark:text-[#FDF6B2]"></i>
            </div>
            <div className="gap-[16px] xl:gap-[0.833vw] flex flex-col">
              <div className="text-[16px] xl:text-[1.042vw] font-medium text-[#262626] dark:text-[#FFF]">
                When the text is spilling over the end of the Column
              </div>
              <div className="xl:text-[0.938vw] text-[14px] font-normal text-[#424242] dark:text-[#AAAA]">
                Use the "Wrapping" option from the Format Menu and select "Wrap"
                or find the "Text Wrapping" icon in the menu bar
              </div>
            </div>
          </div>
          <div
            className="bg-white dark:bg-[#13161B] rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw]
       mt-[32px] xl:mt-[1.667vw] border dark:border-[#13161B] relative ml-[20px] xl:ml-[1.042vw]"
          >
            <div
              className="absolute xl:top-[20px] xl:left-[-8px] 2xl:top-[20px] 2xl:left-[-18px] lg:top[100px] lg:left-[-20px]
          md:top-[20px] md:left-[-20px] sm:left-[-20px]  p-[10px] xl:p-[0.521vw] bg-[#FDF6B2] dark:bg-[#8E4B10] rounded-md"
            >
              <i className="cgupod-lamp-on text-[20px] xl:text-[1.042vw] text-[#8E4B10] dark:text-[#FDF6B2]"></i>
            </div>
            <div className="gap-[16px] xl:gap-[0.833vw] flex flex-col">
              <div className="text-[16px] xl:text-[1.042vw] font-medium text-[#262626] dark:text-[#FFF]">
                When the text overflows the box
              </div>
              <div className="xl:text-[0.938vw] text-[14px] font-normal text-[#424242] dark:text-[#AAAA]">
                Put your cursor at the bottom line of the row and drag it down
                until you can see all of the text
              </div>
            </div>
          </div>
          <div
            className="bg-white dark:bg-[#13161B] rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw]
       mt-[32px] xl:mt-[1.667vw] border dark:border-[#13161B] relative ml-[20px] xl:ml-[1.042vw]"
          >
            <div
              className="absolute xl:top-[20px] xl:left-[-8px] 2xl:top-[20px] 2xl:left-[-18px] lg:top[100px] lg:left-[-20px]
          md:top-[20px] md:left-[-20px] sm:left-[-20px]  p-[10px] xl:p-[0.521vw] bg-[#FDF6B2] dark:bg-[#8E4B10] rounded-md"
            >
              <i className="cgupod-lamp-on text-[20px] xl:text-[1.042vw] text-[#8E4B10] dark:text-[#FDF6B2]"></i>
            </div>
            <div className="gap-[16px] xl:gap-[0.833vw] flex flex-col">
              <div className="text-[16px] xl:text-[1.042vw] font-medium text-[#262626] dark:text-[#FFF]">
                Collapse/Expand Sections
              </div>
              <div className="xl:text-[0.938vw] text-[14px] font-normal text-[#424242] dark:text-[#AAAA]">
                Use the - or + sign to the left of the numbers at the first row
                of each section
              </div>
            </div>
          </div>
          <div
            className="bg-white dark:bg-[#13161B] rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw]
       mt-[32px] xl:mt-[1.667vw] border dark:border-[#13161B] relative ml-[20px] xl:ml-[1.042vw]"
          >
            <div
              className="absolute xl:top-[20px] xl:left-[-8px] 2xl:top-[20px] 2xl:left-[-18px] lg:top[100px] lg:left-[-20px]
          md:top-[20px] md:left-[-20px] sm:left-[-20px]  p-[10px] xl:p-[0.521vw] bg-[#FDF6B2] dark:bg-[#8E4B10] rounded-md"
            >
              <i className="cgupod-lamp-on text-[20px] xl:text-[1.042vw] text-[#8E4B10] dark:text-[#FDF6B2]"></i>
            </div>
            <div className="gap-[16px] xl:gap-[0.833vw] flex flex-col">
              <div className="text-[16px] xl:text-[1.042vw] font-medium text-[#262626] dark:text-[#FFF]">
                To view More
              </div>
              <div className="xl:text-[0.938vw] text-[14px] font-normal text-[#424242] dark:text-[#AAAA]">
                Reduce the zoom on your browser rather than adjusting the rows
                to smaller widths.
              </div>
            </div>
          </div>
        </ScrollPanel>
      </div>
    </>
  );
};

export default LogicalTips;
