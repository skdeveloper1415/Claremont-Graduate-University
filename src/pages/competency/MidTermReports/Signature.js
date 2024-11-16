import React, { useState, useRef } from "react";
import { Noto_Serif_Georgian } from "@next/font/google";
import Link from "next/link";
import { ScrollPanel } from "primereact/scrollpanel";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const Signature = () => {
  return (
    <>
      {/* row */}
      <div className={myNotoSerifGeorgian.className}>
        <div className="text-[#262626] text-[32px] xl:text-[1.667vw] dark:text-[#fff]">
          Signatures
        </div>
      </div>
      {/* row */}
      <div className="bg-white rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw]
        mt-[20px] xl:mt-[1.667vw] border relative SidebarHeight dark:bg-[#13161B] dark:border-none">
          <ScrollPanel style={{ width: "100%", height: "100%" }}>
            <div className="gap-5 flex flex-col">
              <div className="text-xl font-medium text-[#262626] dark:text-[#fff]">Signatures</div>
              <p className="text-sm font-medium text-[#262626] dark:text-[#fff]">
                Mentor Teacher Signature (if applicable)
              </p>
            </div>
            <div className="border border-dashed mt-2 border-[#EAE0E0] bg-[#FFFAFB] rounded-lg flex flex-col gap-4 py-4 items-center dark:bg-[#1F2631] dark:border-[#374151]">
              <div className="w-[30%] flex gap-4 flex-col items-center">
                <div className="flex flex-col gap-2 items-center">
                  <img src="/assets/images/sign-demo.png" className="max-w-full" />
                  <span className="text-xs font-semibold">
                    Last Updated Date : 25/06/2023
                  </span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <button
                    type="upload"
                    href={""}
                    className="flex items-center bg-[#AF1E27] hover:bg-white border border-[#AF1E27] rounded-lg hover:text-[#AF1E27] text-white text-xs px-3 py-2 transition ease-in-out delay-150 gap-2 w-fit"
                  >
                    <i className="cgupod-file-upload text-sm dark:text-[#fff]"></i>
                    Insert Signature
                  </button>
                  <span className="text-xs font-semibold">
                    (Digital Signature accepted)
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-[6px] px-4 w-full">
                <p className="text-xs text-[#424242] dark:text-[#AAA]">Attached Signature</p>
                <div className="border border-solid border-[#F2EEEE] bg-white p-3 flex gap-1  justify-between rounded-lg dark:bg-[#13161B] dark:border-none">
                  <div className="flex flex-1 gap-4">
                    <div className="bg-[#FAA7AC] border-solid border-4 border-[#FDE3E5] w-8 h-8 rounded-full text-[#AF1E27] flex items-center justify-center">
                      <i className="cgupod-file text-sm"></i>
                    </div>
                    <div>
                      <h5 className="text-xs font-medium text-[#363A44] dark:text-[#fff]">
                        Signature_0001.pdf
                      </h5>
                      <p className="text-xs text-[#888]">102.1 KB</p>
                    </div>
                  </div>
                  <i className="cgupod-trash text-sm text-[#AF1E27]"></i>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <p className="text-sm font-medium text-[#262626] dark:text-[#fff]">
                Clinical Faculty Advisor Signature (Final)
              </p>
            </div>
            <div className="border border-dashed mt-2 border-[#EAE0E0] bg-[#FFFAFB] rounded-lg flex flex-col gap-4 py-4 items-center dark:bg-[#1F2631] dark:border-[#374151]">
              <div className="w-[30%] flex gap-4 flex-col items-center">
                <div className="flex flex-col gap-2 items-center">
                  <img src="/assets/images/sign-demo.png" className="max-w-full" />
                  <span className="text-xs font-semibold">
                    Last Updated Date : 25/06/2023
                  </span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <button
                    type="upload"
                    href={""}
                    className="flex items-center bg-[#AF1E27] hover:bg-white border border-[#AF1E27] rounded-lg hover:text-[#AF1E27] text-white text-xs px-3 py-2 transition ease-in-out delay-150 gap-2 w-fit"
                  >
                    <i className="cgupod-file-upload text-sm dark:text-[#fff]"></i>
                    Insert Signature
                  </button>
                  <span className="text-xs font-semibold">
                    (Digital Signature accepted)
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-[6px] px-4 w-full">
                <p className="text-xs text-[#424242] dark:text-[#AAA]">Attached Signature</p>
                <div className="border border-solid border-[#F2EEEE] bg-white p-3 flex gap-1  justify-between rounded-lg dark:bg-[#13161B] dark:border-none">
                  <div className="flex flex-1 gap-4">
                    <div className="bg-[#FAA7AC] border-solid border-4 border-[#FDE3E5] w-8 h-8 rounded-full text-[#AF1E27] flex items-center justify-center">
                      <i className="cgupod-file text-sm"></i>
                    </div>
                    <div>
                      <h5 className="text-xs font-medium text-[#363A44] dark:text-[#fff]">
                        Signature_0001.pdf
                      </h5>
                      <p className="text-xs text-[#888]">102.1 KB</p>
                    </div>
                  </div>
                  <i className="cgupod-trash text-sm text-[#AF1E27]"></i>
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

export default Signature;
