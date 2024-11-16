import Image from "next/image";
import Link from "next/link";
import { ScrollPanel } from "primereact/scrollpanel";
import React, { useEffect, useState } from "react";

export default function PlacementsGrid() {

    const PlacementsCards = [
        {
            image: 'groupinfo-profile.png',
            name: 'Wade Warren',
            post: 'Teacher',
            date: '29/08/2022',
            enddate: '29/08/2022'
        },
        {
            image: 'robertfox.png',
            name: 'Jenny Wilson',
            post: 'Teacher',
            date: '29/08/2022',
            enddate: '29/08/2022'
        },
        {
            image: 'darlenerobertson.png',
            name: 'Guy Hawkins',
            post: 'Teacher',
            date: '29/08/2022',
            enddate: '29/08/2022'
        },
        {
            image: 'bessicooper.png',
            name: 'Courtney Henry',
            post: 'Teacher',
            date: '29/08/2022',
            enddate: '29/08/2022'
        },
        {
            image: 'robertfox.png',
            name: 'Jenny Wilson',
            post: 'Teacher',
            date: '29/08/2022',
            enddate: '29/08/2022'
        },
        {
            image: 'darlenerobertson.png',
            name: 'Guy Hawkins',
            post: 'Teacher',
            date: '29/08/2022',
            enddate: '29/08/2022'
        },
        {
            image: 'darlenerobertson.png',
            name: 'Guy Hawkins',
            post: 'Teacher',
            date: '29/08/2022',
            enddate: '29/08/2022'
        },
        {
            image: 'bessicooper.png',
            name: 'Courtney Henry',
            post: 'Teacher',
            date: '29/08/2022',
            enddate: '29/08/2022'
        },
        {
            image: 'robertfox.png',
            name: 'Jenny Wilson',
            post: 'Teacher',
            date: '29/08/2022',
            enddate: '29/08/2022'
        },
    ]


    return (
        <>
            <div className="postobview">
                <ScrollPanel style={{ width: "100%", height: "100%" }}>
                    <div className="grid grid-cols-1 xl:grid-cols-3 xl:gap-[1.250vw] gap-6">
                        {PlacementsCards.map((elm) => {
                            return (
                                <div className="bg-white dark:bg-[#13161B] border border-[#F2EEEE] dark:border-[#1F2A37] xl:rounded-[0.521vw] rounded-lg xl:py-[0.833vw] py-4 xl:px-[1.042vw] px-5 xl:space-y-[1.042vw] space-y-5">
                                    <div className="flex items-center justify-between">
                                        <div><Image src={`/assets/images/${elm.image}`} alt="groupinfo-profile" width={72} height={72} className="xl:w-[4.167vw] xl:h-[4.167vw]" /></div>
                                        <div class="flex gap-1 justify-center items-center border border-[#3F8892] rounded-2xl bg-[#F2F9F9] dark:bg-[#3F8892] py-[4px] px-[12px] xl:py-[0.208vw] xl:px-[0.625vw]">
                                            <div class="w-1 h-1 bg-[#3F8892] dark:bg-[#fff] rounded"></div>
                                            <div class="text-[#3F8892] dark:text-[#fff] text-[12px] xl:text-[0.625vw] font-medium capitalize">Completed</div>
                                        </div>
                                    </div>
                                    <div className="xl:space-y-[0.521vw] space-y-2">
                                        <div className="text-[#262626] dark:text-[#FFFFFF] xl:text-[1.042vw] text-lg font-semibold xl:leading-[1.250vw] leading-[22px]">{elm.name}</div>
                                        <div className="text-[#888888] dark:text-[#818181] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px]">{elm.post}</div>
                                    </div>
                                    <div className="xl:space-y-[0.417vw] space-y-1.5">
                                        <div className="flex items-center xl:gap-[0.521vw]">
                                            <div className="text-[#262626] dark:text-[#AAAAAA] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">Date</div>
                                            <div className="text-[#262626] dark:text-[#FFFFFF] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px] pl-[1.754vw] ">{elm.date}</div>
                                        </div>
                                        <div className="flex items-center xl:gap-[0.521vw]">
                                            <div className="text-[#262626] dark:text-[#AAAAAA] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">End Date</div>
                                            <div className="text-[#262626] dark:text-[#FFFFFF] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px]">{elm.enddate}</div>
                                        </div>
                                    </div>

                                </div>
                            )
                        })}


                        {/* <div className="bg-white border border-[#F2EEEE] xl:rounded-[0.521vw] rounded-lg xl:py-[0.833vw] py-4 xl:px-[1.042vw] px-5 xl:space-y-[1.042vw] space-y-5">
                            <div className="flex items-center justify-between">
                                <div><Image src={'/assets/images/robertfox.png'} alt="groupinfo-profile" width={72} height={72} className="xl:w-[4.167vw] xl:h-[4.167vw]" /></div>
                                <div class="flex gap-1 justify-center items-center border border-[#3F8892] rounded-2xl bg-[#F2F9F9] py-[4px] px-[12px] xl:py-[0.208vw] xl:px-[0.625vw]">
                                    <div class="w-1 h-1 bg-[#3F8892] rounded"></div>
                                    <div class="text-[#3F8892] text-[12px] xl:text-[0.625vw] font-medium capitalize">Completed</div>
                                </div>
                            </div>
                            <div className="xl:space-y-[0.521vw] space-y-2">
                                <div className="text-[#262626] xl:text-[1.042vw] text-lg font-semibold xl:leading-[1.250vw] leading-[22px]">Robert Fox</div>
                                <div className="text-[#888888] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">Principal</div>
                            </div>
                            <div className="xl:space-y-[0.417vw] space-y-1.5">
                                <div className="flex items-center xl:gap-[0.521vw]">
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">Date</div>
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px] pl-[1.754vw]">29/08/2022</div>
                                </div>
                                <div className="flex items-center xl:gap-[0.521vw]">
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">End Date</div>
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px]">29/08/2022</div>
                                </div>
                            </div>

                        </div>
                     
                        <div className="bg-white border border-[#F2EEEE] xl:rounded-[0.521vw] rounded-lg xl:py-[0.833vw] py-4 xl:px-[1.042vw] px-5 xl:space-y-[1.042vw] space-y-5">
                            <div className="flex items-center justify-between">
                                <div><Image src={'/assets/images/jennywilson.png'} alt="groupinfo-profile" width={72} height={72} className="xl:w-[4.167vw] xl:h-[4.167vw]" /></div>
                                <div class="flex gap-1 justify-center items-center border border-[#3F8892] rounded-2xl bg-[#F2F9F9] py-[4px] px-[12px] xl:py-[0.208vw] xl:px-[0.625vw]">
                                    <div class="w-1 h-1 bg-[#3F8892] rounded"></div>
                                    <div class="text-[#3F8892] text-[12px] xl:text-[0.625vw] font-medium capitalize">Completed</div>
                                </div>
                            </div>
                            <div className="xl:space-y-[0.521vw] space-y-2">
                                <div className="text-[#262626] xl:text-[1.042vw] text-lg font-semibold xl:leading-[1.250vw] leading-[22px]">Jenny Wilson</div>
                                <div className="text-[#888888] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">Candidate</div>
                            </div>
                            <div className="xl:space-y-[0.417vw] space-y-1.5">
                                <div className="flex items-center xl:gap-[0.521vw]">
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">Date</div>
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px]pl-[1.754vw]">29/08/2022</div>
                                </div>
                                <div className="flex items-center xl:gap-[0.521vw]">
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">End Date</div>
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px]">29/08/2022</div>
                                </div>
                            </div>
                        </div>
                  
                        <div className="bg-white border border-[#F2EEEE] xl:rounded-[0.521vw] rounded-lg xl:py-[0.833vw] py-4 xl:px-[1.042vw] px-5 xl:space-y-[1.042vw] space-y-5">
                            <div className="flex items-center justify-between">
                                <div><Image src={'/assets/images/DianneRussell.png'} alt="groupinfo-profile" width={72} height={72} className="xl:w-[4.167vw] xl:h-[4.167vw]" /></div>
                                <div class="flex gap-1 justify-center items-center border border-[#3F8892] rounded-2xl bg-[#F2F9F9] py-[4px] px-[12px] xl:py-[0.208vw] xl:px-[0.625vw]">
                                    <div class="w-1 h-1 bg-[#3F8892] rounded"></div>
                                    <div class="text-[#3F8892] text-[12px] xl:text-[0.625vw] font-medium capitalize">Completed</div>
                                </div>
                            </div>
                            <div className="xl:space-y-[0.521vw] space-y-2">
                                <div className="text-[#262626] xl:text-[1.042vw] text-lg font-semibold xl:leading-[1.250vw] leading-[22px]">Dianne Russell</div>
                                <div className="text-[#888888] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">Candidate</div>
                            </div>
                            <div className="xl:space-y-[0.417vw] space-y-1.5">
                                <div className="flex items-center xl:gap-[0.521vw]">
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">Date</div>
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px] pl-[1.754vw]">29/08/2022</div>
                                </div>
                                <div className="flex items-center xl:gap-[0.521vw]">
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">End Date</div>
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px]">29/08/2022</div>
                                </div>
                            </div>
                        </div>
              
                        <div className="bg-white border border-[#F2EEEE] xl:rounded-[0.521vw] rounded-lg xl:py-[0.833vw] py-4 xl:px-[1.042vw] px-5 xl:space-y-[1.042vw] space-y-5">
                            <div className="flex items-center justify-between">
                                <div><Image src={'/assets/images/LeslieAlexander.png'} alt="groupinfo-profile" width={72} height={72} className="xl:w-[4.167vw] xl:h-[4.167vw]" /></div>
                                <div class="flex gap-1 justify-center items-center border border-[#3F8892] rounded-2xl bg-[#F2F9F9] py-[4px] px-[12px] xl:py-[0.208vw] xl:px-[0.625vw]">
                                    <div class="w-1 h-1 bg-[#3F8892] rounded"></div>
                                    <div class="text-[#3F8892] text-[12px] xl:text-[0.625vw] font-medium capitalize">Completed</div>
                                </div>
                            </div>
                            <div className="xl:space-y-[0.521vw] space-y-2">
                                <div className="text-[#262626] xl:text-[1.042vw] text-lg font-semibold xl:leading-[1.250vw] leading-[22px]">Leslie Alexander</div>
                                <div className="text-[#888888] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">Candidate</div>
                            </div>
                            <div className="xl:space-y-[0.417vw] space-y-1.5">
                                <div className="flex items-center xl:gap-[0.521vw]">
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">Date</div>
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px] pl-[1.754vw]">29/08/2022</div>
                                </div>
                                <div className="flex items-center xl:gap-[0.521vw]">
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">End Date</div>
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px]">29/08/2022</div>
                                </div>
                            </div>
                        </div>
                  
                        <div className="bg-white border border-[#F2EEEE] xl:rounded-[0.521vw] rounded-lg xl:py-[0.833vw] py-4 xl:px-[1.042vw] px-5 xl:space-y-[1.042vw] space-y-5">
                            <div className="flex items-center justify-between">
                                <div><Image src={'/assets/images/JacobJones.png'} alt="groupinfo-profile" width={72} height={72} className="xl:w-[4.167vw] xl:h-[4.167vw]" /></div>
                                <div class="flex gap-1 justify-center items-center border border-[#3F8892] rounded-2xl bg-[#F2F9F9] py-[4px] px-[12px] xl:py-[0.208vw] xl:px-[0.625vw]">
                                    <div class="w-1 h-1 bg-[#3F8892] rounded"></div>
                                    <div class="text-[#3F8892] text-[12px] xl:text-[0.625vw] font-medium capitalize">Completed</div>
                                </div>
                            </div>
                            <div className="xl:space-y-[0.521vw] space-y-2">
                                <div className="text-[#262626] xl:text-[1.042vw] text-lg font-semibold xl:leading-[1.250vw] leading-[22px]">Jacob Jones</div>
                                <div className="text-[#888888] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">Candidate</div>
                            </div>
                            <div className="xl:space-y-[0.417vw] space-y-1.5">
                                <div className="flex items-center xl:gap-[0.521vw]">
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">Date</div>
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px] pl-[1.754vw]">29/08/2022</div>
                                </div>
                                <div className="flex items-center xl:gap-[0.521vw]">
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">End Date</div>
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px]">29/08/2022</div>
                                </div>
                            </div>
                        </div>
              
                        <div className="bg-white border border-[#F2EEEE] xl:rounded-[0.521vw] rounded-lg xl:py-[0.833vw] py-4 xl:px-[1.042vw] px-5 xl:space-y-[1.042vw] space-y-5">
                            <div className="flex items-center justify-between">
                                <div><Image src={'/assets/images/darlenerobertson.png'} alt="groupinfo-profile" width={72} height={72} className="xl:w-[4.167vw] xl:h-[4.167vw]" /></div>
                                <div class="flex gap-1 justify-center items-center border border-[#3F8892] rounded-2xl bg-[#F2F9F9] py-[4px] px-[12px] xl:py-[0.208vw] xl:px-[0.625vw]">
                                    <div class="w-1 h-1 bg-[#3F8892] rounded"></div>
                                    <div class="text-[#3F8892] text-[12px] xl:text-[0.625vw] font-medium capitalize">Completed</div>
                                </div>
                            </div>
                            <div className="xl:space-y-[0.521vw] space-y-2">
                                <div className="text-[#262626] xl:text-[1.042vw] text-lg font-semibold xl:leading-[1.250vw] leading-[22px]">Darlene Robertson</div>
                                <div className="text-[#888888] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">Principal</div>
                            </div>
                            <div className="xl:space-y-[0.417vw] space-y-1.5">
                                <div className="flex items-center xl:gap-[0.521vw]">
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">Date</div>
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px] pl-[1.754vw]">29/08/2022</div>
                                </div>
                                <div className="flex items-center xl:gap-[0.521vw]">
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">End Date</div>
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px]">29/08/2022</div>
                                </div>
                            </div>
                        </div>
                  
                        <div className="bg-white border border-[#F2EEEE] xl:rounded-[0.521vw] rounded-lg xl:py-[0.833vw] py-4 xl:px-[1.042vw] px-5 xl:space-y-[1.042vw] space-y-5">
                            <div className="flex items-center justify-between">
                                <div><Image src={'/assets/images/bessicooper.png'} alt="groupinfo-profile" width={72} height={72} className="xl:w-[4.167vw] xl:h-[4.167vw]" /></div>
                                <div class="flex gap-1 justify-center items-center border border-[#3F8892] rounded-2xl bg-[#F2F9F9] py-[4px] px-[12px] xl:py-[0.208vw] xl:px-[0.625vw]">
                                    <div class="w-1 h-1 bg-[#3F8892] rounded"></div>
                                    <div class="text-[#3F8892] text-[12px] xl:text-[0.625vw] font-medium capitalize">Completed</div>
                                </div>
                            </div>
                            <div className="xl:space-y-[0.521vw] space-y-2">
                                <div className="text-[#262626] xl:text-[1.042vw] text-lg font-semibold xl:leading-[1.250vw] leading-[22px]">Bessi Cooper</div>
                                <div className="text-[#888888] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">Asst. Principal</div>
                            </div>
                            <div className="xl:space-y-[0.417vw] space-y-1.5">
                                <div className="flex items-center xl:gap-[0.521vw]">
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">Date</div>
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px] pl-[1.754vw]">29/08/2022</div>
                                </div>
                                <div className="flex items-center xl:gap-[0.521vw]">
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">End Date</div>
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px]">29/08/2022</div>
                                </div>
                            </div>
                        </div>
                     
                        <div className="bg-white border border-[#F2EEEE] xl:rounded-[0.521vw] rounded-lg xl:py-[0.833vw] py-4 xl:px-[1.042vw] px-5 xl:space-y-[1.042vw] space-y-5">
                            <div className="flex items-center justify-between">
                                <div><Image src={'/assets/images/bessicooper.png'} alt="groupinfo-profile" width={72} height={72} className="xl:w-[4.167vw] xl:h-[4.167vw]" /></div>
                                <div class="flex gap-1 justify-center items-center border border-[#3F8892] rounded-2xl bg-[#F2F9F9] py-[4px] px-[12px] xl:py-[0.208vw] xl:px-[0.625vw]">
                                    <div class="w-1 h-1 bg-[#3F8892] rounded"></div>
                                    <div class="text-[#3F8892] text-[12px] xl:text-[0.625vw] font-medium capitalize">Completed</div>
                                </div>
                            </div>
                            <div className="xl:space-y-[0.521vw] space-y-2">
                                <div className="text-[#262626] xl:text-[1.042vw] text-lg font-semibold xl:leading-[1.250vw] leading-[22px]">Bessi Cooper</div>
                                <div className="text-[#888888] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">Asst. Principal</div>
                            </div>
                            <div className="xl:space-y-[0.417vw] space-y-1.5">
                                <div className="flex items-center xl:gap-[0.521vw]">
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">Date</div>
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px] pl-[1.754vw]">29/08/2022</div>
                                </div>
                                <div className="flex items-center xl:gap-[0.521vw]">
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">End Date</div>
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px]">29/08/2022</div>
                                </div>
                            </div>
                        </div>
                     
                        <div className="bg-white border border-[#F2EEEE] xl:rounded-[0.521vw] rounded-lg xl:py-[0.833vw] py-4 xl:px-[1.042vw] px-5 xl:space-y-[1.042vw] space-y-5">
                            <div className="flex items-center justify-between">
                                <div><Image src={'/assets/images/JacobJones.png'} alt="groupinfo-profile" width={72} height={72} className="xl:w-[4.167vw] xl:h-[4.167vw]" /></div>
                                <div class="flex gap-1 justify-center items-center border border-[#3F8892] rounded-2xl bg-[#F2F9F9] py-[4px] px-[12px] xl:py-[0.208vw] xl:px-[0.625vw]">
                                    <div class="w-1 h-1 bg-[#3F8892] rounded"></div>
                                    <div class="text-[#3F8892] text-[12px] xl:text-[0.625vw] font-medium capitalize">Completed</div>
                                </div>
                            </div>
                            <div className="xl:space-y-[0.521vw] space-y-2">
                                <div className="text-[#262626] xl:text-[1.042vw] text-lg font-semibold xl:leading-[1.250vw] leading-[22px]">Jacob Jones</div>
                                <div className="text-[#888888] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">Candidate</div>
                            </div>
                            <div className="xl:space-y-[0.417vw] space-y-1.5">
                                <div className="flex items-center xl:gap-[0.521vw]">
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">Date</div>
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px] pl-[1.754vw]">29/08/2022</div>
                                </div>
                                <div className="flex items-center xl:gap-[0.521vw]">
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">End Date</div>
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px]">29/08/2022</div>
                                </div>
                            </div>
                        </div>
                     
                        <div className="bg-white border border-[#F2EEEE] xl:rounded-[0.521vw] rounded-lg xl:py-[0.833vw] py-4 xl:px-[1.042vw] px-5 xl:space-y-[1.042vw] space-y-5">
                            <div className="flex items-center justify-between">
                                <div><Image src={'/assets/images/DianneRussell.png'} alt="groupinfo-profile" width={72} height={72} className="xl:w-[4.167vw] xl:h-[4.167vw]" /></div>
                                <div class="flex gap-1 justify-center items-center border border-[#3F8892] rounded-2xl bg-[#F2F9F9] py-[4px] px-[12px] xl:py-[0.208vw] xl:px-[0.625vw]">
                                    <div class="w-1 h-1 bg-[#3F8892] rounded"></div>
                                    <div class="text-[#3F8892] text-[12px] xl:text-[0.625vw] font-medium capitalize">Completed</div>
                                </div>
                            </div>
                            <div className="xl:space-y-[0.521vw] space-y-2">
                                <div className="text-[#262626] xl:text-[1.042vw] text-lg font-semibold xl:leading-[1.250vw] leading-[22px]">Dianne Russell</div>
                                <div className="text-[#888888] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">Candidate</div>
                            </div>
                            <div className="xl:space-y-[0.417vw] space-y-1.5">
                                <div className="flex items-center xl:gap-[0.521vw]">
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">Date</div>
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px] pl-[1.754vw]">29/08/2022</div>
                                </div>
                                <div className="flex items-center xl:gap-[0.521vw]">
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">End Date</div>
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px]">29/08/2022</div>
                                </div>
                            </div>
                        </div>
                     
                        <div className="bg-white border border-[#F2EEEE] xl:rounded-[0.521vw] rounded-lg xl:py-[0.833vw] py-4 xl:px-[1.042vw] px-5 xl:space-y-[1.042vw] space-y-5">
                            <div className="flex items-center justify-between">
                                <div><Image src={'/assets/images/robertfox.png'} alt="groupinfo-profile" width={72} height={72} className="xl:w-[4.167vw] xl:h-[4.167vw]" /></div>
                                <div class="flex gap-1 justify-center items-center border border-[#3F8892] rounded-2xl bg-[#F2F9F9] py-[4px] px-[12px] xl:py-[0.208vw] xl:px-[0.625vw]">
                                    <div class="w-1 h-1 bg-[#3F8892] rounded"></div>
                                    <div class="text-[#3F8892] text-[12px] xl:text-[0.625vw] font-medium capitalize">Completed</div>
                                </div>
                            </div>
                            <div className="xl:space-y-[0.521vw] space-y-2">
                                <div className="text-[#262626] xl:text-[1.042vw] text-lg font-semibold xl:leading-[1.250vw] leading-[22px]">Robert Fox</div>
                                <div className="text-[#888888] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">Principal</div>
                            </div>
                            <div className="xl:space-y-[0.417vw] space-y-1.5">
                                <div className="flex items-center xl:gap-[0.521vw]">
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">Date</div>
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px] pl-[1.754vw]">29/08/2022</div>
                                </div>
                                <div className="flex items-center xl:gap-[0.521vw]">
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.042vw] leading-[18px]">End Date</div>
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-[18px]">29/08/2022</div>
                                </div>
                            </div>

                        </div> */}
                    </div>
                </ScrollPanel>

            </div>
        </>
    )
}
