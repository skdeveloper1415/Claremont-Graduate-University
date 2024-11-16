import React, { useState } from "react";
import Link from "next/link";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Noto_Serif_Georgian } from "@next/font/google";
import { Sidebar } from "primereact/sidebar";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Checkbox } from "primereact/checkbox";
import Image from "next/image";
import { InputTextarea } from "primereact/inputtextarea";
import { ScrollPanel } from "primereact/scrollpanel";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const InductionPage = () => {
  const [prelimData, setPrelimData] = useState(null);
  const [framing, setFraming] = useState("");

  const PrelimList = [
    { name: "CRED/M.A Preliminary", code: "01" },
    { name: "CRED/M.A ", code: "02" },
  ];
  return (
    <div>
      <div className={myNotoSerifGeorgian.className}>
        <div className="text-[#262626] text-[32px] xl:text-[1.667vw] mb-[20px] xl:mb[1.67vw]">
          Induction
        </div>
      </div>
      <div className="SidebarHeight">
        <ScrollPanel style={{ width: "100%", height: "100%" }}>
          <div
            className="bg-white dark:bg-[#13161B] dark:border-[#13161B] rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw] grid gap-[24px] xl:gap-[1.250vw]
     border"
          >
            <div className="grid gap-[4px] xl:gap-[0.208vw]">
              <div className="text-[14px] xl:text-[0.729vw] text-[#262626] dark:text-[#FFF] font-medium">
                CGU Prelim
              </div>
              <div className="custInput custDropdown">
                <Dropdown
                  value={prelimData}
                  onChange={(e) => setPrelimData(e.value)}
                  options={PrelimList}
                  optionLabel="name"
                  placeholder="Select"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #EAE0E0",
                    borderRadius: "8px",
                    fontSize: "0.729vw",
                  }}
                  className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                />
              </div>
            </div>
            <div className="">
              <div className="px-[20px] xl:px-[1.042vw] py-[19px] xl:py-[0.990vw] flex justify-between items-center border dark:border-[#1F2A37] rounded-t-lg">
                <div className="text-[16px] xl:text-[0.833vw] font-medium dark:text-[#FFF]">
                  Induction Records
                </div>
                <div className="flex gap-[16px] xl:gap-[0.833vw]">
                  <div className="flex justify-end">
                    <Link
                      href={""}
                      className="flex items-center bg-white dark:bg-[#13161B] border dark:border-[#374151] rounded-[8px] xl:rounded-[0.417vw] text-[#888] dark:text-[#818181] text-[12px] xl:text-[0.625vw] px-[16px] xl:px-[0.833vw] py-[10px] xl:py-[0.521vw] transition ease-in-out delay-150"
                    >
                      <i className="mr-[8px] xl:mr-[0.417vw] cgupod-plus text-[12px] xl:text-[0.625vw]"></i>
                      Add Candidate to Induction
                    </Link>
                  </div>
                  <div className="flex justify-end">
                    <Link
                      href={""}
                      className="flex items-center bg-white dark:bg-[#13161B] border rounded-[8px] dark:border-[#374151] xl:rounded-[0.417vw] text-[#888] dark:text-[#818181] text-[12px] xl:text-[0.625vw] px-[16px] xl:px-[0.833vw] py-[10px] xl:py-[0.521vw] transition ease-in-out delay-150"
                    >
                      <i className="mr-[8px] xl:mr-[0.417vw] cgupod-print text-[14px] xl:text-[0.729vw]"></i>
                      Print Summative report
                    </Link>
                  </div>
                </div>
              </div>
              <div className="px-[32px] xl:px-[1.667vw] py-[20px] xl:py-[1.042vw] border-x border-b dark:border-[#1F2A37] gap-[20px] xl:gap-[1.042vw] grid">
                <Image
                  src={`/assets/images/svg/inductionimg.svg`}
                  width={245.53}
                  height={220}
                  alt=""
                  class="w-[100%] h-[160px] xl:h-[8.333vw]"
                />
                <div className="text-[20px] xl:text-[1.042vw] flex justify-center items-center dark:text-[#AAA]">
                  No Induction Records.
                </div>
              </div>
              <div className="py-[12px] xl:py-[0.625vw] px-[20px] xl:px-[1.042vw] flex items-center gap-[12px] xl:gap-[0.625vw] dark:border-[#1F2A37]  border-x rounded-b-lg mb-2 border-b">
                <div className="text-[16px] xl:text-[0.833vw] font-normal dark:text-[#AAA]">
                  Rubric Level:
                </div>
                <div className="flex items-center gap-[12px] xl:gap-[0.625vw] xl:text-[0.625vw] dark:text-[#AAA]">
                  <span className="rounded-full px-[5px] xl:px-[0.260vw] border">
                    1
                  </span>
                  <span className="text-[14px] xl:text-[0.729vw] font-medium">
                    Emerging
                  </span>
                  <div className="text-[12px] xl:text-[0.625vw] flex items-center">
                    <i className="cgupod-right-arrow"></i>
                    <i className="cgupod-right-arrow"></i>
                  </div>
                </div>
                <div className="flex items-center gap-[12px] xl:gap-[0.625vw] xl:text-[0.625vw] dark:text-[#AAA]">
                  <span className="rounded-full px-[5px] xl:px-[0.260vw] border">
                    2
                  </span>
                  <span className="text-[14px] xl:text-[0.729vw] font-medium">
                    Exploring
                  </span>
                  <div className="text-[12px] xl:text-[0.625vw] flex items-center">
                    <i className="cgupod-right-arrow"></i>
                    <i className="cgupod-right-arrow"></i>
                  </div>
                </div>
                <div className="flex items-center gap-[12px] xl:gap-[0.625vw] xl:text-[0.625vw] dark:text-[#AAA]">
                  <span className="rounded-full px-[5px] xl:px-[0.260vw] border">
                    3
                  </span>
                  <span className="text-[14px] xl:text-[0.729vw] font-medium">
                    Applying
                  </span>
                  <div className="text-[12px] xl:text-[0.625vw] flex items-center">
                    <i className="cgupod-right-arrow"></i>
                    <i className="cgupod-right-arrow"></i>
                  </div>
                </div>
                <div className="flex items-center gap-[12px] xl:gap-[0.625vw] xl:text-[0.625vw] dark:text-[#AAA]">
                  <span className="rounded-full px-[5px] xl:px-[0.260vw] border">
                    4
                  </span>
                  <span className="text-[14px] xl:text-[0.729vw] font-medium">
                    Integrating
                  </span>
                  <div className="text-[12px] xl:text-[0.625vw] flex items-center">
                    <i className="cgupod-right-arrow"></i>
                    <i className="cgupod-right-arrow"></i>
                  </div>
                </div>
                <div className="flex items-center gap-[12px] xl:gap-[0.625vw] xl:text-[0.625vw] dark:text-[#AAA]">
                  <span className="rounded-full px-[5px] xl:px-[0.260vw] border">
                    5
                  </span>
                  <span className="text-[14px] xl:text-[0.729vw] font-medium">
                    Innovating
                  </span>
                  <div className="text-[12px] xl:text-[0.625vw] flex items-center">
                    <i className="cgupod-right-arrow"></i>
                    <i className="cgupod-right-arrow"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[6px]">
              <div className="text-[14px] xl:text-[0.729vw] text-[#262626] font-medium dark:text-[#FFF]">
                Notes
              </div>
              <div className="custTextArea custInput">
                <InputTextarea
                  placeholder="Write text here ..."
                  autoResize
                  value={framing}
                  onChange={(e) => setFraming(e.target.value)}
                  rows={6}
                  cols={30}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </ScrollPanel>
      </div>

      <div className="mt-[40px] xl:mt-[2.083vw] lg:mt-[0] lg:absolute bottom-[-70px] left-0 right-0">
        <div className="flex items-center justify-between">
          <div className="col">
            <Link
              href={"javascript:void(0)"}
              className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] opacity-30 transition ease-in-out delay-150"
            >
              <i className="mr-[8px] xl:mr-[0.417vw] cgupod-close-circle text-[22px] xl:text-[1.146vw]"></i>
              Cancel
            </Link>
          </div>
          <div className="flex gap-1">
            <Link
              href={"javascript:void(0)"}
              className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] transition ease-in-out delay-150"
            >
              <i className="mr-[8px] xl:mr-[0.417vw] cgupod-print text-[22px] xl:text-[1.146vw]"></i>
              Print Report
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InductionPage;
