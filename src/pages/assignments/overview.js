import React from "react";
import { Noto_Serif_Georgian } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ScrollPanel } from "primereact/scrollpanel";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const OverviewPage = () => {
  return (
    <div>
      {/* row */}
      <div className={myNotoSerifGeorgian.className}>
        <div className="text-[#262626] text-[32px] xl:text-[1.667vw] mb-[20px] xl:mb[1.67vw]">
          Overview
        </div>
      </div>
      {/* row */}
      <div className="SidebarHeight">
      <ScrollPanel style={{ width: "100%", height: "100%" }}>
        <div
          className="bg-white rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw]
       border"
        >
          <div className="gap-[20px] xl:gap-[1.042vw] py-[16px] xl:py-[0.833vw] flex flex-col">
            <div className="">
              <Image
                src={"/assets/images/svg/Student-Ava-Brown.svg"}
                alt="Student Detail"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-col gap-[8px] xl:gap-[0.417vw]">
              <span className="text-[30px] xl:text-[1.563vw] text-[#262626]">
                Ava Brown
              </span>
              <span className="text-[18px] xl:text-[0.938vw] text-[#888]">
                Pre Teacher
              </span>
            </div>
            <div className="grid grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-[20px] xl:gap-[1.042vw]">
              <div
                className="xl:py-[0.833vw py-[16px] px-[20px] xl:px-[1.042vw] bg-[#FCF5F6] border rounded-lg
             border-[#F2EEEE] gap-[8px] xl:gap-[0.417vw] flex flex-col"
              >
                <span className="text-[#888] text-[16px] xl:text-[0.833vw] font-normal">
                  Job Title
                </span>
                <span className="text-[#424242] text-[18px] xl:text-[0.938vw] font-medium">
                  Pre Teacher
                </span>
              </div>
              <div
                className="xl:py-[0.833vw py-[16px] px-[20px] xl:px-[1.042vw] bg-[#FCF5F6] border rounded-lg
             border-[#F2EEEE] gap-[8px] xl:gap-[0.417vw] flex flex-col"
              >
                <span className="text-[#888] text-[16px] xl:text-[0.833vw] font-normal">
                  Job Role
                </span>
                <span className="text-[#424242] text-[18px] xl:text-[0.938vw] font-medium">
                  Mentor Teacher
                </span>
              </div>
              <div
                className="xl:py-[0.833vw py-[16px] px-[20px] xl:px-[1.042vw] bg-[#FCF5F6] border rounded-lg
             border-[#F2EEEE] gap-[8px] xl:gap-[0.417vw] flex flex-col"
              >
                <span className="text-[#888] text-[16px] xl:text-[0.833vw] font-normal">
                  Status
                </span>
                <span className="text-[#424242] text-[18px] xl:text-[0.938vw] font-medium">
                  Current Faculty
                </span>
              </div>
              <div
                className="xl:py-[0.833vw py-[16px] px-[20px] xl:px-[1.042vw] bg-[#FCF5F6] border rounded-lg
             border-[#F2EEEE] gap-[8px] xl:gap-[0.417vw] flex flex-col"
              >
                <span className="text-[#888] text-[16px] xl:text-[0.833vw] font-normal">
                  Time in DB
                </span>
                <span className="text-[#424242] text-[18px] xl:text-[0.938vw] font-medium">
                  11 Years
                </span>
              </div>
            </div>
            <div className="text-[18px] xl:text-[0.938vw] text-[#262626] font-medium">
              Groups
            </div>
            <div
              className="py-[16px] xl:py-[0.833vw] px-[20px] xl:px-[1.042vw]  gap-x-[20px] xl:gap-x-[1.042vw]
            bg-[#FCF5F6] border rounded-lg border-[#F2EEEE] grid "
            >
              <div
                className=" grid grid-cols-3 xl:grid-cols-3 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 
            gap-[20px] xl:gap-[1.042vw] py-[12px] xl:py-[0.625vw]"
              >
                <div className=" bg-white p-[12px] xl:p-[0.625vw] gap-[16px] xl:gap-[0.833vw] flex">
                  <Image
                    src={"/assets/images/svg/completerone.svg"}
                    alt="Student Detail"
                    width={46}
                    height={46}
                  />
                  <div className="flex flex-col gap-[8px] xl:gap-[0.417vw]">
                    <span className="text-[#424242] text-[16px] xl:text-[0.833vw] font-medium">
                      2014-2018 Completers
                    </span>
                    <span className="xl:text-[0.729vw] text-[14px] text-[#888] font-normal">
                      School Admin
                    </span>
                  </div>
                </div>
                <div className=" bg-white p-[12px] xl:p-[0.625vw] gap-[16px] xl:gap-[0.833vw] flex">
                  <Image
                    src={"/assets/images/svg/summerimg.svg"}
                    alt="Student Detail"
                    width={46}
                    height={46}
                  />
                  <div className="flex flex-col gap-[8px] xl:gap-[0.417vw]">
                    <span className="text-[#424242] text-[16px] xl:text-[0.833vw] font-medium">
                      2012 Summer IV Candidates
                    </span>
                    <span className="xl:text-[0.729vw] text-[14px] text-[#888] font-normal">
                      School Admin
                    </span>
                  </div>
                </div>
                <div className=" bg-white p-[12px] xl:p-[0.625vw] gap-[16px] xl:gap-[0.833vw] flex">
                  <Image
                    src={"/assets/images/svg/mentorimg.svg"}
                    alt="Student Detail"
                    width={46}
                    height={46}
                  />
                  <div className="flex flex-col gap-[8px] xl:gap-[0.417vw]">
                    <span className="text-[#424242] text-[16px] xl:text-[0.833vw] font-medium">
                      Mentor Group
                    </span>
                    <span className="xl:text-[0.729vw] text-[14px] text-[#888] font-normal">
                      School Admin
                    </span>
                  </div>
                </div>
              </div>
              <div
                className=" grid grid-cols-3 xl:grid-cols-3 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1
             gap-[20px] xl:gap-[1.042vw]"
              >
                <div className=" bg-white p-[12px] xl:p-[0.625vw] gap-[16px] xl:gap-[0.833vw] flex">
                  <Image
                    src={"/assets/images/svg/completertwo.svg"}
                    alt="Student Detail"
                    width={46}
                    height={46}
                  />
                  <div className="flex flex-col gap-[8px] xl:gap-[0.417vw]">
                    <span className="text-[#424242] text-[16px] xl:text-[0.833vw] font-medium">
                      2013-2016 Completers
                    </span>
                    <span className="xl:text-[0.729vw] text-[14px] text-[#888] font-normal">
                      School Admin
                    </span>
                  </div>
                </div>{" "}
                <div className=" bg-white p-[12px] xl:p-[0.625vw] gap-[16px] xl:gap-[0.833vw] flex">
                  <Image
                    src={"/assets/images/svg/startsimg.svg"}
                    alt="Student Detail"
                    width={46}
                    height={46}
                  />
                  <div className="flex flex-col gap-[8px] xl:gap-[0.417vw]">
                    <span className="text-[#424242] text-[16px] xl:text-[0.833vw] font-medium">
                      2012 Starts
                    </span>
                    <span className="xl:text-[0.729vw] text-[14px] text-[#888] font-normal">
                      School Admin
                    </span>
                  </div>
                </div>{" "}
                <div></div>
              </div>
              <div className=""></div>
            </div>
            <div className="text-[18px] xl:text-[0.938vw] text-[#262626] font-medium">
              CGU Enrollment
            </div>
            <table className="mb-4 w-full">
              <thead className="">
                <tr className="text-[14px] xl:text-[0.729vw] text-[#262626] font-normal bg-[#F0E9EA]">
                  <th className="p-[12px] xl:p-[0.625vw] justify-start text-start rounded-tl">
                    Title
                  </th>
                  <th className="p-[12px] xl:p-[0.625vw] ">Status</th>
                  <th className="p-[12px] xl:p-[0.625vw] rounded-tr">Year</th>
                </tr>
              </thead>
              <tbody className="text-[#424242] border rounded-b-lg">
                <tr className="text-center text-[14px] xl:text-[0.729vw]">
                  <td className="p-[16px] xl:p-[0.833vw] text-start justify-start">
                    M.A. In Education
                  </td>
                  <td>Completed</td>
                  <td>2013</td>
                </tr>
                <tr className="text-center border rounded-b text-[14px] xl:text-[0.729vw]">
                  <td className="p-[16px] xl:p-[0.833vw] text-start rounded">
                    CRED/M.A. - Preliminary
                  </td>
                  <td className="">Completed</td>
                  <td className=" rounded">2012 - 13</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </ScrollPanel>
      </div>

      <div className="mt-[40px] xl:mt-[2.083vw] lg:mt-[0] lg:absolute bottom-[-70px] left-0 right-0">
        <div className="flex items-center justify-between">
          <div className="col">
            <Link
              href="javascript:void(0)"
              className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] opacity-30 transition ease-in-out delay-150"
            >
              <i className="mr-[8px] xl:mr-[0.417vw] cgupod-close-circle text-[22px] xl:text-[1.146]"></i>
              Cancel
            </Link>
          </div>
          <div className="col">
            <div className="flex gap-[8px] xl:gap-[0.417vw]">
              <Link
                href="javascript:void(0)"
                className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] gap-[8px] xl:gap-[0.417vw]
                 xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px]
                 xl:py-[0.625vw] transition ease-in-out delay-150"
              >
                <i className="mr-[8px] xl:mr-[0.417vw] cgupod-print text-[18px] xl:text-[0.938vw]"></i>
                Print Report{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
