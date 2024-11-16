import Image from "next/image";
import Link from "next/link";
import { ScrollPanel } from "primereact/scrollpanel";
import React, { useEffect, useState } from "react";

export default function StaffGrid() {

    const StaffCards = [
        {
            image: 'groupinfo-profile.png',
            name: 'Wade Warren',
            post: 'Teacher',
            userid: '487441',
            email: 'wadewar@gmail.com'
        },
        {
            image: 'robertfox.png',
            name: 'Jenny Wilson',
            post: 'Teacher',
            userid: '487441',
            email: 'jenson@gmail.com'
        },
        {
            image: 'darlenerobertson.png',
            name: 'Guy Hawkins',
            post: 'Teacher',
            userid: '487441',
            email: 'guyhawk@gmail.com'
        },
        {
            image: 'bessicooper.png',
            name: 'Courtney Henry',
            post: 'Teacher',
            userid: '487441',
            email: 'hendry@gmail.com'
        },
    ]

    return (
        <>
            <div className="postobview">
                <ScrollPanel style={{ width: "100%", height: "100%" }}>
                    <div className="grid grid-cols-1 xl:grid-cols-3 xl:gap-[1.250vw] gap-6">
                        {StaffCards.map((elm) => {
                            return (
                                <div className="bg-white dark:bg-[#13161B] border border-[#F2EEEE] dark:border-[#1F2A37] xl:rounded-[0.521vw] rounded-lg xl:py-[0.833vw] py-4 xl:px-[1.042vw] px-5 xl:space-y-[1.042vw] space-y-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <Image src={`/assets/images/${elm.image}`} alt="groupinfo-profile" width={72} height={72} className="xl:w-[4.167vw] xl:h-[4.167vw]" />
                                        </div>
                                        <div>
                                            <Link href={''} className="text-[#424242] xl:text-[0.833vw] text-base font-normal xl:leading-[1.042vw] leading-[18px] xl:py-[0.625vw] py-2.5 xl:px-[0.938vw] px-4 border border-[#EAE0E0] xl:rounded-[0.521vw] rounded-lg flex items-center xl:gap-[0.521vw] gap-2 dark:border-[#374151] dark:text-[#AAAAAA]"><i className="cgupod-profile-remove"></i><span>Remove</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="xl:space-y-[0.521vw] space-y-2">
                                        <div className="text-[#262626] dark:text-[#FFFFFF] xl:text-[1.042vw] text-lg font-semibold xl:leading-[1.250vw] leading-[22px]">{elm.name}</div>
                                        <div className="text-[#888888] dark:text-[#818181] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px]">{elm.post}</div>
                                    </div>
                                    <div className="xl:space-y-[0.417vw] space-y-1.5">
                                        <div className="flex items-center xl:gap-[0.521vw]">
                                            <div className="text-[#262626] dark:text-[#AAAAAA] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">User ID</div>
                                            <div className="text-[#262626] dark:text-[#FFFFFF] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">{elm.userid}</div>
                                        </div>
                                        <div className="flex items-center xl:gap-[0.521vw]">
                                            <div className="text-[#262626] dark:text-[#AAAAAA] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">Email ID</div>
                                            <div className="text-[#262626] dark:text-[#FFFFFF] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">{elm.email}</div>
                                        </div>
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                </ScrollPanel>

            </div>
        </>
    )
}
