import React, { useState, useRef } from "react";
import { Noto_Serif_Georgian } from "@next/font/google";
import Link from "next/link";
import Image from "next/image";
import { ScrollPanel } from "primereact/scrollpanel";
import { InputText } from "primereact/inputtext";
import GroupinfoList from "./groupinfolist";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Index() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [date, setDate] = useState(null);

  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  return (
    <>
      {/* row */}
      <div>
        <Tabs>
          <div className="flex flex-wrap items-center justify-between">
            {/**Title**/}
            <div className={myNotoSerifGeorgian.className}>
              <div className="text-[#262626] text-[32px] xl:text-[1.667vw] dark:text-white">
                Group Info
              </div>
            </div>
            {/**Title**/}
            <div className="flex flex-wrap items-center xl:gap-[0.938vw] gap-3">
              <div>
                <div className="p-input-icon-left custm-filterserach">
                  <i
                    className="cgupod-td-searchbar"
                    style={{ color: "#9CA1AB", fontSize: "0.8rem" }}
                  />
                  <InputText
                    placeholder="Search User"
                    className="xl:h-[2.292vw] h-[36px] xl:w-[10.417vw] placeholder:font-normal placeholder:text-[#888888] placeholder:text-[0.833vw] placeholder:text-sm font-normal"
                    style={{
                      borderRadius: "8px",
                      paddingTop: "0",
                      paddingBottom: "0",
                    }}
                  />
                </div>
              </div>
              <div>
                <Link
                  href={""}
                  className="bg-[#AF1E27] rounded text-white xl:text-[0.729vw] text-xs font-normal xl:leading-[0.938vw] leading-5 xl:py-[0.625vw] py-2 xl:px-[0.833vw] px-3 flex items-center xl:gap-[0.521vw] gap-2"
                >
                  <i className="cgupod-plus"></i>
                  <span>Add User</span>
                </Link>
              </div>
              {/**Tab Header**/}
              <div className="custmtabhead">
                <TabList>
                  <Tab>
                    <i className="cgupod-element-four"></i>
                  </Tab>
                  <Tab>
                    <i className="cgupod-grid-box"></i>
                  </Tab>
                </TabList>
              </div>
              {/**Tab Header**/}
            </div>
          </div>
          <div className="PersonalDetails">
            <ScrollPanel style={{ width: "100%", height: "100%" }}>
              {/**Tab Content**/}
              <div className="xl:mt-[0.938vw] mt-4">
                <TabPanel>
                  <div className="grid lg:grid-cols-3 xl:gap-[1.250vw] gap-6">
                    {/**col-1**/}
                    <div className="bg-white border border-[#F2EEEE] xl:rounded-[0.521vw] rounded-lg xl:py-[0.833vw] py-4 xl:px-[1.042vw] px-5 xl:space-y-[1.042vw] space-y-5 dark:border-[#1F2A37] dark:bg-[#13161B]">
                      <div className="flex items-center justify-between">
                        <div>
                          <Image
                            src={"/assets/images/groupinfo-profile.png"}
                            alt="groupinfo-profile"
                            width={72}
                            height={72}
                            className="xl:w-[4.167vw] xl:h-[4.167vw]"
                          />
                        </div>
                        <div>
                          <Link
                            href={""}
                            className="text-[#424242] xl:text-[0.833vw] text-base font-normal xl:leading-[1.042vw] leading-[18px] xl:py-[0.625vw] py-2.5 xl:px-[0.938vw] px-4 border border-[#EAE0E0] xl:rounded-[0.521vw] rounded-lg flex items-center xl:gap-[0.521vw] gap-2 dark:border-[#374151] dark:text-[#AAAAAA]"
                          >
                            <i className="cgupod-profile-remove"></i>
                            <span>Remove</span>
                          </Link>
                        </div>
                      </div>
                      <div className="xl:space-y-[0.521vw] space-y-2">
                        <div className="text-[#262626] xl:text-[1.042vw] text-lg font-semibold xl:leading-[1.250vw] leading-[22px] dark:text-white">
                          Marvin McKinney
                        </div>
                        <div className="text-[#888888] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px] dark:text-[#818181]">
                          Asst. Principal
                        </div>
                      </div>
                      <div className="xl:space-y-[0.417vw] space-y-1.5">
                        <div className="flex items-center xl:gap-[0.521vw]">
                          <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px] dark:text-[#AAAAAA]">
                            User ID
                          </div>
                          <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px] dark:text-white">
                            487441
                          </div>
                        </div>
                        <div className="flex items-center flex-wrap xl:gap-[0.521vw]">
                          <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px] dark:text-[#AAAAAA]">
                            Email ID - 
                          </div>
                          <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px] dark:text-white">
                          dolores@gmail.com
                          </div>
                        </div>
                      </div>
                    </div>
                    {/**col-2**/}
                    <div className="bg-white border border-[#F2EEEE] xl:rounded-[0.521vw] rounded-lg xl:py-[0.833vw] py-4 xl:px-[1.042vw] px-5 xl:space-y-[1.042vw] space-y-5 dark:border-[#1F2A37] dark:bg-[#13161B]">
                      <div className="flex items-center justify-between">
                        <div>
                          <Image
                            src={"/assets/images/robertfox.png"}
                            alt="groupinfo-profile"
                            width={72}
                            height={72}
                            className="xl:w-[4.167vw] xl:h-[4.167vw]"
                          />
                        </div>
                        <div>
                          <Link
                            href={""}
                            className="text-[#424242] xl:text-[0.833vw] text-base font-normal xl:leading-[1.042vw] leading-[18px] xl:py-[0.625vw] py-2.5 xl:px-[0.938vw] px-4 border border-[#EAE0E0] xl:rounded-[0.521vw] rounded-lg flex items-center xl:gap-[0.521vw] gap-2 dark:border-[#374151] dark:text-[#AAAAAA]"
                          >
                            <i className="cgupod-profile-remove"></i>
                            <span>Remove</span>
                          </Link>
                        </div>
                      </div>
                      <div className="xl:space-y-[0.521vw] space-y-2">
                        <div className="text-[#262626] xl:text-[1.042vw] text-lg font-semibold xl:leading-[1.250vw] leading-[22px] dark:text-white">
                          Robert Fox
                        </div>
                        <div className="text-[#888888] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px] dark:text-[#818181]">
                          Principal
                        </div>
                      </div>
                      <div className="xl:space-y-[0.417vw] space-y-1.5">
                        <div className="flex items-center xl:gap-[0.521vw]">
                          <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px] dark:text-[#AAAAAA]">
                            User ID
                          </div>
                          <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px] dark:text-white">
                            487441
                          </div>
                        </div>
                        <div className="flex items-center flex-wrap xl:gap-[0.521vw]">
                          <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px] dark:text-[#AAAAAA]">
                            Email ID
                          </div>
                          <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px] dark:text-white">
                            dolores.chambers@gmail.com
                          </div>
                        </div>
                      </div>
                    </div>
                    {/**col-3**/}
                    <div className="bg-white border border-[#F2EEEE] xl:rounded-[0.521vw] rounded-lg xl:py-[0.833vw] py-4 xl:px-[1.042vw] px-5 xl:space-y-[1.042vw] space-y-5 dark:border-[#1F2A37] dark:bg-[#13161B]">
                      <div className="flex items-center justify-between">
                        <div>
                          <Image
                            src={"/assets/images/jennywilson.png"}
                            alt="groupinfo-profile"
                            width={72}
                            height={72}
                            className="xl:w-[4.167vw] xl:h-[4.167vw]"
                          />
                        </div>
                        <div>
                          <Link
                            href={""}
                            className="text-[#424242] xl:text-[0.833vw] text-base font-normal xl:leading-[1.042vw] leading-[18px] xl:py-[0.625vw] py-2.5 xl:px-[0.938vw] px-4 border border-[#EAE0E0] xl:rounded-[0.521vw] rounded-lg flex items-center xl:gap-[0.521vw] gap-2 dark:border-[#374151] dark:text-[#AAAAAA]"
                          >
                            <i className="cgupod-profile-remove"></i>
                            <span>Remove</span>
                          </Link>
                        </div>
                      </div>
                      <div className="xl:space-y-[0.521vw] space-y-2">
                        <div className="text-[#262626] xl:text-[1.042vw] text-lg font-semibold xl:leading-[1.250vw] leading-[22px] dark:text-white">
                          Jenny Wilson
                        </div>
                        <div className="text-[#888888] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px] dark:text-[#818181]">
                          Candidate
                        </div>
                      </div>
                      <div className="xl:space-y-[0.417vw] space-y-1.5">
                        <div className="flex items-center xl:gap-[0.521vw]">
                          <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px] dark:text-[#AAAAAA]">
                            User ID
                          </div>
                          <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px] dark:text-white">
                            487441
                          </div>
                        </div>
                        <div className="flex items-center flex-wrap xl:gap-[0.521vw]">
                          <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px] dark:text-[#AAAAAA]">
                            Email ID
                          </div>
                          <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px] dark:text-white">
                            dolores.chambers@gmail.com
                          </div>
                        </div>
                      </div>
                    </div>
                    {/**col-4**/}
                    <div className="bg-white border border-[#F2EEEE] xl:rounded-[0.521vw] rounded-lg xl:py-[0.833vw] py-4 xl:px-[1.042vw] px-5 xl:space-y-[1.042vw] space-y-5 dark:border-[#1F2A37] dark:bg-[#13161B]">
                      <div className="flex items-center justify-between">
                        <div>
                          <Image
                            src={"/assets/images/DianneRussell.png"}
                            alt="groupinfo-profile"
                            width={72}
                            height={72}
                            className="xl:w-[4.167vw] xl:h-[4.167vw]"
                          />
                        </div>
                        <div>
                          <Link
                            href={""}
                            className="text-[#424242] xl:text-[0.833vw] text-base font-normal xl:leading-[1.042vw] leading-[18px] xl:py-[0.625vw] py-2.5 xl:px-[0.938vw] px-4 border border-[#EAE0E0] xl:rounded-[0.521vw] rounded-lg flex items-center xl:gap-[0.521vw] gap-2 dark:border-[#374151] dark:text-[#AAAAAA]"
                          >
                            <i className="cgupod-profile-remove"></i>
                            <span>Remove</span>
                          </Link>
                        </div>
                      </div>
                      <div className="xl:space-y-[0.521vw] space-y-2">
                        <div className="text-[#262626] xl:text-[1.042vw] text-lg font-semibold xl:leading-[1.250vw] leading-[22px] dark:text-white">
                          Dianne Russell
                        </div>
                        <div className="text-[#888888] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px] dark:text-[#818181]">
                          Candidate
                        </div>
                      </div>
                      <div className="xl:space-y-[0.417vw] space-y-1.5">
                        <div className="flex items-center xl:gap-[0.521vw]">
                          <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px] dark:text-[#AAAAAA]">
                            User ID
                          </div>
                          <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px] dark:text-white">
                            487441
                          </div>
                        </div>
                        <div className="flex items-center flex-wrap xl:gap-[0.521vw]">
                          <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px] dark:text-[#AAAAAA]">
                            Email ID
                          </div>
                          <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px] dark:text-white">
                            dolores.chambers@gmail.com
                          </div>
                        </div>
                      </div>
                    </div>
                    {/**col-5**/}
                    <div className="bg-white border border-[#F2EEEE] xl:rounded-[0.521vw] rounded-lg xl:py-[0.833vw] py-4 xl:px-[1.042vw] px-5 xl:space-y-[1.042vw] space-y-5 dark:border-[#1F2A37] dark:bg-[#13161B]">
                      <div className="flex items-center justify-between">
                        <div>
                          <Image
                            src={"/assets/images/LeslieAlexander.png"}
                            alt="groupinfo-profile"
                            width={72}
                            height={72}
                            className="xl:w-[4.167vw] xl:h-[4.167vw]"
                          />
                        </div>
                        <div>
                          <Link
                            href={""}
                            className="text-[#424242] xl:text-[0.833vw] text-base font-normal xl:leading-[1.042vw] leading-[18px] xl:py-[0.625vw] py-2.5 xl:px-[0.938vw] px-4 border border-[#EAE0E0] xl:rounded-[0.521vw] rounded-lg flex items-center xl:gap-[0.521vw] gap-2 dark:border-[#374151] dark:text-[#AAAAAA]"
                          >
                            <i className="cgupod-profile-remove"></i>
                            <span>Remove</span>
                          </Link>
                        </div>
                      </div>
                      <div className="xl:space-y-[0.521vw] space-y-2">
                        <div className="text-[#262626] xl:text-[1.042vw] text-lg font-semibold xl:leading-[1.250vw] leading-[22px] dark:text-white">
                          Leslie Alexander
                        </div>
                        <div className="text-[#888888] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px] dark:text-[#818181]">
                          Candidate
                        </div>
                      </div>
                      <div className="xl:space-y-[0.417vw] space-y-1.5">
                        <div className="flex items-center xl:gap-[0.521vw]">
                          <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px] dark:text-[#AAAAAA]">
                            User ID
                          </div>
                          <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px] dark:text-white">
                            487441
                          </div>
                        </div>
                        <div className="flex items-center flex-wrap xl:gap-[0.521vw]">
                          <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px] dark:text-[#AAAAAA]">
                            Email ID
                          </div>
                          <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px] dark:text-white">
                            dolores.chambers@gmail.com
                          </div>
                        </div>
                      </div>
                    </div>
                    {/**col-6**/}
                    <div className="bg-white border border-[#F2EEEE] xl:rounded-[0.521vw] rounded-lg xl:py-[0.833vw] py-4 xl:px-[1.042vw] px-5 xl:space-y-[1.042vw] space-y-5 dark:border-[#1F2A37] dark:bg-[#13161B]">
                      <div className="flex items-center justify-between">
                        <div>
                          <Image
                            src={"/assets/images/JacobJones.png"}
                            alt="groupinfo-profile"
                            width={72}
                            height={72}
                            className="xl:w-[4.167vw] xl:h-[4.167vw]"
                          />
                        </div>
                        <div>
                          <Link
                            href={""}
                            className="text-[#424242] xl:text-[0.833vw] text-base font-normal xl:leading-[1.042vw] leading-[18px] xl:py-[0.625vw] py-2.5 xl:px-[0.938vw] px-4 border border-[#EAE0E0] xl:rounded-[0.521vw] rounded-lg flex items-center xl:gap-[0.521vw] gap-2 dark:border-[#374151] dark:text-[#AAAAAA]"
                          >
                            <i className="cgupod-profile-remove"></i>
                            <span>Remove</span>
                          </Link>
                        </div>
                      </div>
                      <div className="xl:space-y-[0.521vw] space-y-2">
                        <div className="text-[#262626] xl:text-[1.042vw] text-lg font-semibold xl:leading-[1.250vw] leading-[22px] dark:text-white">
                          Jacob Jones
                        </div>
                        <div className="text-[#888888] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px] dark:text-[#818181]">
                          Candidate
                        </div>
                      </div>
                      <div className="xl:space-y-[0.417vw] space-y-1.5">
                        <div className="flex items-center xl:gap-[0.521vw]">
                          <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px] dark:text-[#AAAAAA]">
                            User ID
                          </div>
                          <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px] dark:text-[#818181]">
                            487441
                          </div>
                        </div>
                        <div className="flex items-center flex-wrap xl:gap-[0.521vw]">
                          <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px] dark:text-[#AAAAAA]">
                            Email ID
                          </div>
                          <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px] dark:text-[#818181]">
                            dolores.chambers@gmail.com
                          </div>
                        </div>
                      </div>
                    </div>
                    {/**col-7**/}
                    <div className="bg-white border border-[#F2EEEE] xl:rounded-[0.521vw] rounded-lg xl:py-[0.833vw] py-4 xl:px-[1.042vw] px-5 xl:space-y-[1.042vw] space-y-5 dark:border-[#1F2A37] dark:bg-[#13161B]">
                      <div className="flex items-center justify-between">
                        <div>
                          <Image
                            src={"/assets/images/darlenerobertson.png"}
                            alt="groupinfo-profile"
                            width={72}
                            height={72}
                            className="xl:w-[4.167vw] xl:h-[4.167vw]"
                          />
                        </div>
                        <div>
                          <Link
                            href={""}
                            className="text-[#424242] xl:text-[0.833vw] text-base font-normal xl:leading-[1.042vw] leading-[18px] xl:py-[0.625vw] py-2.5 xl:px-[0.938vw] px-4 border border-[#EAE0E0] xl:rounded-[0.521vw] rounded-lg flex items-center xl:gap-[0.521vw] gap-2 dark:border-[#374151] dark:text-[#AAAAAA]"
                          >
                            <i className="cgupod-profile-remove"></i>
                            <span>Remove</span>
                          </Link>
                        </div>
                      </div>
                      <div className="xl:space-y-[0.521vw] space-y-2">
                        <div className="text-[#262626] xl:text-[1.042vw] text-lg font-semibold xl:leading-[1.250vw] leading-[22px] dark:text-white">
                          Darlene Robertson
                        </div>
                        <div className="text-[#888888] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px] dark:text-[#818181]">
                          Principal
                        </div>
                      </div>
                      <div className="xl:space-y-[0.417vw] space-y-1.5">
                        <div className="flex items-center xl:gap-[0.521vw]">
                          <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px] dark:text-[#AAAAAA]">
                            User ID
                          </div>
                          <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px] dark:text-white">
                            487441
                          </div>
                        </div>
                        <div className="flex items-center flex-wrap xl:gap-[0.521vw]">
                          <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px] dark:text-[#AAAAAA]">
                            Email ID
                          </div>
                          <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px] dark:text-white">
                            dolores.chambers@gmail.com
                          </div>
                        </div>
                      </div>
                    </div>
                    {/**col-8**/}
                    <div className="bg-white border border-[#F2EEEE] xl:rounded-[0.521vw] rounded-lg xl:py-[0.833vw] py-4 xl:px-[1.042vw] px-5 xl:space-y-[1.042vw] space-y-5 dark:border-[#1F2A37] dark:bg-[#13161B]">
                      <div className="flex items-center justify-between">
                        <div>
                          <Image
                            src={"/assets/images/bessicooper.png"}
                            alt="groupinfo-profile"
                            width={72}
                            height={72}
                            className="xl:w-[4.167vw] xl:h-[4.167vw]"
                          />
                        </div>
                        <div>
                          <Link
                            href={""}
                            className="text-[#424242] xl:text-[0.833vw] text-base font-normal xl:leading-[1.042vw] leading-[18px] xl:py-[0.625vw] py-2.5 xl:px-[0.938vw] px-4 border border-[#EAE0E0] xl:rounded-[0.521vw] rounded-lg flex items-center xl:gap-[0.521vw] gap-2 dark:border-[#374151] dark:text-[#AAAAAA]"
                          >
                            <i className="cgupod-profile-remove"></i>
                            <span>Remove</span>
                          </Link>
                        </div>
                      </div>
                      <div className="xl:space-y-[0.521vw] space-y-2">
                        <div className="text-[#262626] xl:text-[1.042vw] text-lg font-semibold xl:leading-[1.250vw] leading-[22px] dark:text-white">
                          Bessi Cooper
                        </div>
                        <div className="text-[#888888] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px] dark:text-[#818181]">
                          Asst. Principal
                        </div>
                      </div>
                      <div className="xl:space-y-[0.417vw] space-y-1.5">
                        <div className="flex items-center xl:gap-[0.521vw]">
                          <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px] dark:text-[#AAAAAA]">
                            User ID
                          </div>
                          <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px] dark:text-white">
                            487441
                          </div>
                        </div>
                        <div className="flex items-center flex-wrap xl:gap-[0.521vw]">
                          <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px] dark:text-[#AAAAAA]">
                            Email ID
                          </div>
                          <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px] dark:text-white">
                            dolores@gmail.com
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <GroupinfoList />
                </TabPanel>
              </div>
            </ScrollPanel>
          </div>

          {/**Tab Content**/}
        </Tabs>
      </div>
      {/* row */}
    </>
  );
}
