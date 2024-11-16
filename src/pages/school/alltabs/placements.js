import React, { useState, useRef } from "react";
import { Noto_Serif_Georgian } from "@next/font/google";
import Link from "next/link";
import Image from "next/image";
import { ScrollPanel } from "primereact/scrollpanel";
import { InputText } from "primereact/inputtext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PlacementsList from "./placementslist";
import PlacementsGrid from "./placementsgrid";

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
                                Placements
                            </div>
                        </div>
                        {/**Title**/}
                        <div className="flex flex-wrap items-center xl:gap-[0.938vw] gap-3">

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
                           <PlacementsGrid/>
                        </TabPanel>
                        <TabPanel>
                            <PlacementsList />
                        </TabPanel>
                    </div>
                    {/**Tab Content**/}
                </Tabs>
            </div>
            {/* row */}
        </>
    );
}
