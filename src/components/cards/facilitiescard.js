import React, { useRef, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';

const FacilitiesCard = (props) => {
    return (
        <div className={props.className}>
            {props.data.map((elm) => {
                return (
                    <>
                        <div class="border border-[#F2EEEE] dark:border-[#1F2A37]  rounded-lg bg-[#FFFFFF] dark:bg-[#13161B] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw]">
                            <div class="flex flex-col gap-6 xl:gap-[1.25vw]">
                                <div>
                                    <Image src={`/assets/images/${elm.image}`} width={320} height={160} alt="" class="w-[100%] h-[160px] xl:h-[8.333vw]" />
                                </div>
                                <div class="flex flex-col gap-4 xl:gap-[0.833vw]">
                                    <div class="text-[18px] xl:text-[0.938vw] text-[#262626] dark:text-[#FFFFFF] font-semibold">{elm.title}</div>
                                    <div class="flex items-center gap-2 py-1.5 px-2.5 rounded bg-[#F0E9EA] dark:bg-[#0C0E12] w-fit">
                                        <div class="text-[14px] xl:text-[0.729vw] text-[#424242] dark:text-[#AAAAAA]  font-medium">Grade Level</div>
                                        <div class="text-[14px] xl:text-[0.729vw] text-[#424242] dark:text-[#AAAAAA]  font-medium">{elm.grade}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                );
            })}
        </div>
    );
};
export default FacilitiesCard;