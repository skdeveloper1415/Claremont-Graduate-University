import React, { useState, useRef } from "react";
import { Noto_Serif_Georgian } from "@next/font/google";
import { ScrollPanel } from "primereact/scrollpanel";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import FacilitiesCard from "@/components/cards/facilitiescard";
import FacilitiesList from "./facilitieslist";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
});

export default function Index() {
    
    const FacilitiesCardData = [
        {
            image:'r&dimage.png',
            title:'R&D',
            grade:'7 - 11'
        },
        {
            image:'humanresource.png',
            title:'Human Resource',
            grade:'7 - 11'
        },
        {
            image:'schooladministrators.png',
            title:'School Administrators',
            grade:'7 - 11'
        },
        {
            image:'healthservice.png',
            title:'Health Service',
            grade:'7 - 11'
        },
    ]

    return (
        <>
            {/* row */}
            <div>
                <Tabs>
                    <div className="flex flex-wrap items-center justify-between">
                        {/**Title**/}
                        <div className={myNotoSerifGeorgian.className}>
                            <div className="text-[#262626] text-[32px] xl:text-[1.667vw]">
                                Facilities
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
                            <div className="postobview">
                            <ScrollPanel style={{ width: "100%", height: "100%" }}>
                                <FacilitiesCard 
                                        data={FacilitiesCardData}
                                        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-[1.25vw]"
                                    />
                                </ScrollPanel>
                            </div>

                        </TabPanel>
                        <TabPanel>
                            <FacilitiesList />
                        </TabPanel>
                    </div>
                    {/**Tab Content**/}
                </Tabs>
            </div>
            {/* row */}
        </>
    );
}
