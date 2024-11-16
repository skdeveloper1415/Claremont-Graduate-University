import React, { useState, useRef } from "react";
import { Noto_Serif_Georgian } from "@next/font/google";
import Link from "next/link";
import { ScrollPanel } from "primereact/scrollpanel";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const NextSteps = () => {
  return (
    <>
      {/* row */}
      <div className={myNotoSerifGeorgian.className}>
        <div className="text-[#262626] text-[32px] xl:text-[1.667vw] dark:text-[#fff]">
          Next Steps for Successful Completion of the Semester
        </div>
      </div>
      {/* row */}
      <div className="bg-white rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw]
        mt-[20px] xl:mt-[1.667vw] border relative SidebarHeight dark:bg-[#13161B] dark:border-none">
          <ScrollPanel style={{ width: "100%", height: "100%" }}>
            <div className="gap-[16px] xl:gap-[0.833vw] flex flex-col">
              <div className="text-[18px] font-normal text-[#888]">
                Please provide link to support plan here, if applicable:
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium text-[#262626]  dark:text-[#fff]">Attach Link</p>
                <div className="grid grid-cols-12 gap-3">
                  <div className="col-span-9">
                    <div className="flex w-full rounded-lg overflow-hidden">
                      <div className="bg-[#F5F6F8] border border-solid border-[#F2EEEE] py-[10px] px-5 gap-[2px] text-sm font-medium text-[#424242] flex items-center dark:bg-[#1F2631] dark:border-[#1F2A37]">
                        http + https
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M9.0129 12C8.73445 11.9999 8.46742 11.8948 8.27055 11.7076L4.07055 7.71577C3.97027 7.62372 3.89028 7.5136 3.83525 7.39184C3.78022 7.27009 3.75125 7.13914 3.75004 7.00663C3.74883 6.87412 3.77539 6.74271 3.82819 6.62006C3.88098 6.49742 3.95895 6.386 4.05754 6.2923C4.15612 6.19859 4.27336 6.12449 4.4024 6.07432C4.53144 6.02414 4.66971 5.99889 4.80912 6.00004C4.94854 6.00119 5.08632 6.02872 5.21443 6.08102C5.34253 6.13332 5.45839 6.20935 5.55525 6.30466L9.0129 9.59093L12.4706 6.30466C12.6686 6.12288 12.9338 6.02229 13.2091 6.02456C13.4844 6.02684 13.7478 6.13179 13.9425 6.31682C14.1371 6.50185 14.2476 6.75215 14.25 7.01381C14.2524 7.27547 14.1465 7.52756 13.9553 7.71577L9.75525 11.7076C9.55838 11.8948 9.29136 11.9999 9.0129 12Z"
                            fill="#424242"
                          />
                        </svg>
                      </div>
                      <input
                        className="py-[10px] px-5 border border-solid border-[#F2EEEE] text-[#888] text-sm flex-1 dark:border-[#1F2A37] dark:bg-[#13161B]"
                        placeholder="Paste URL Here"
                      />
                    </div>
                  </div>
                  <div className="col-span-3">
                    <Link
                      href={""}
                      className="flex items-center justify-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] text-[#AF1E27] hover:text-white text-sm px-3 py-[10px] transition ease-in-out delay-150 gap-2 dark:bg-[#13161B]"
                    >
                      <i className="cgupod-add-circle text-xl"></i>
                      Add Web Link
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[10px] mt-9">
                <p className="text-sm font-medium text-[#262626] dark:text-[#fff]">Attached Link</p>
                <Link
                  href={""}
                  className="bg-[#FFFAFB] items-center rounded-lg flex gap-2 py-[10px] px-3 text-[#AF1E27] text-sm dark:bg-[#1F2631]"
                >
                  <i className="cgupod-weblink text-lg"></i>
                  <span className="underline"> Web Link1</span>
                </Link>
                <Link
                  href={""}
                  className="bg-[#FFFAFB] items-center rounded-lg flex gap-2 py-[10px] px-3 text-[#AF1E27] text-sm dark:bg-[#1F2631]"
                >
                  <i className="cgupod-weblink text-lg"></i>
                  <span className="underline"> Web Link2</span>
                </Link>
                <Link
                  href={""}
                  className="bg-[#FFFAFB] items-center rounded-lg flex gap-2 py-[10px] px-3 text-[#AF1E27] text-sm dark:bg-[#1F2631]"
                >
                  <i className="cgupod-weblink text-lg"></i>
                  <span className="underline"> Web Link3</span>
                </Link>
                <Link
                  href={""}
                  className="bg-[#FFFAFB] items-center rounded-lg flex gap-2 py-[10px] px-3 text-[#AF1E27] text-sm dark:bg-[#1F2631]"
                >
                  <i className="cgupod-weblink text-lg"></i>
                  <span className="underline"> Web Link4</span>
                </Link>
              </div>
            </div>
          </ScrollPanel>
      </div>
      {/* row */}

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

export default NextSteps;
