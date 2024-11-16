import React, { useState, useRef } from "react";
import { Noto_Serif_Georgian } from "@next/font/google";
import Link from "next/link";
import Image from "next/image";
import { ScrollPanel } from "primereact/scrollpanel";
import { InputText } from "primereact/inputtext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import StaffList from "./stafflist";
import StaffGrid from "./staffgrid";

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
                            <div className="text-[#262626] dark:text-[#fff] text-[32px] xl:text-[1.667vw]">
                                Staff
                            </div>
                        </div>
                        {/**Title**/}
                        <div className="flex flex-wrap items-center xl:gap-[0.938vw] gap-3">
                            <div>
                                <div className="p-input-icon-left custm-search">
                                    <i className="cgupod-td-searchbar text-[#9CA1AB] text-[16px] xl:text-[0.833vw]" />
                                    <InputText placeholder="Search User" className="xl:h-[2.292vw] h-[36px] xl:w-[10.417vw] placeholder:font-normal placeholder:text-[#888888] placeholder:text-[0.833vw] placeholder:text-sm font-normal" />
                                </div>
                            </div>
                            <div>
                                <Link href={''} className="bg-[#AF1E27] rounded text-white xl:text-[0.729vw] text-xs font-normal xl:leading-[0.938vw] leading-5 xl:py-[0.625vw] py-2 xl:px-[0.833vw] px-3 flex items-center xl:gap-[0.521vw] gap-2"><i className="cgupod-plus"></i><span>Add User</span></Link>
                            </div>
                            {/**Tab Header**/}
                            <div className="custmtabhead">
                                <TabList>
                                    <Tab><i className="cgupod-element-four"></i></Tab>
                                    <Tab><i className="cgupod-grid-box"></i></Tab>
                                </TabList>
                            </div>
                            {/**Tab Header**/}

                        </div>
                    </div>
                    {/**Tab Content**/}
                    <div className="xl:mt-[0.938vw] mt-4">
                        <TabPanel>
                           <StaffGrid />
                        </TabPanel>
                        <TabPanel>
                            <StaffList />
                        </TabPanel>
                    </div>
                    {/**Tab Content**/}
                </Tabs>
            </div>
            {/* row */}
        </>
    );
}
