import React, { useState, useRef } from "react";
import { Noto_Serif_Georgian } from "@next/font/google";
import Link from "next/link";
import { ScrollPanel } from "primereact/scrollpanel";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const Domain9 = () => {
  return (
    <>
      {/* row */}
      <div className={myNotoSerifGeorgian.className}>
        <div className="text-[#262626] dark:text-[#fff] text-[32px] xl:text-[1.667vw]">
          Domain 9 : Global Perspective
        </div>
        <p className="text-sm text-[#888] dark:text-[#818181]">
          Relationships: Others, Communities, The World
        </p>
      </div>

      <div className="SidebarHeight">
        <ScrollPanel style={{ width: "100%", height: "100%" }}>
          {/* row */}
          <div
            className="bg-white dark:bg-[#13161B] dark:border-[#13161B] rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw]
       mt-[32px] xl:mt-[1.667vw] border relative ml-[20px] xl:ml-[1.042vw]"
          >
            <div
              className="absolute xl:top-[20px] xl:left-[-8px] 2xl:top-[20px] 2xl:left-[-18px] lg:top[100px] lg:left-[-20px]
         md:top-[20px] md:left-[-20px] sm:left-[-20px]  p-[10px] xl:p-[0.521vw] bg-[#FDF6B2] rounded-md dark:bg-[#8E4B10]"
            >
              <i className="cgupod-lamp-on text-[20px] xl:text-[1.042vw] text-[#8E4B10] dark:text-[#fff]"></i>
            </div>
            <div className="gap-[16px] xl:gap-[0.833vw] flex flex-col">
              <div className="text-[20px] xl:text-[1.042vw] font-medium text-[#262626] dark:text-[#fff]">
                Strand 9.1 : Recognize and Acknowledge Bias in Curriculum &
                Media
              </div>
              <ul className="list-disc pl-6 flex flex-col gap-5">
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Problematize hegemonic, racialized and/or stereotypical
                  images, language, messages, implications, etc.- include and
                  excluded- within textbooks, curricular materials, standarized
                  testing, and other deep structures of schooling
                </li>
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Problematize hegemonic, racialized and/or stereotypical
                  images, language, messages, headlines, stories, memes,
                  implications, etc. regarding what is included and excluded in
                  media
                </li>
              </ul>
            </div>
          </div>
          {/* row */}
          <div
            className="bg-white dark:bg-[#13161B] dark:border-[#13161B] rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw]
       mt-[32px] xl:mt-[1.667vw] border relative ml-[20px] xl:ml-[1.042vw]"
          >
            <div
              className="absolute xl:top-[20px] xl:left-[-8px] 2xl:top-[20px] 2xl:left-[-18px] lg:top[100px] lg:left-[-20px]
          md:top-[20px] md:left-[-20px] sm:left-[-20px]  p-[10px] xl:p-[0.521vw] bg-[#FDF6B2] rounded-md dark:bg-[#8E4B10]"
            >
              <i className="cgupod-lamp-on text-[20px] xl:text-[1.042vw] text-[#8E4B10] dark:text-[#fff]"></i>
            </div>
            <div className="gap-[16px] xl:gap-[0.833vw] flex flex-col">
              <div className="text-[20px] xl:text-[1.042vw] font-medium text-[#262626] dark:text-[#fff]">
                Strand 9.2 : Promote Comparative, Critical, and Global
                Perspectives
              </div>
              <ul className="list-disc pl-6 flex flex-col gap-5">
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Select intentional and meaningful examples, data sets,
                  hypotheticals, word problems, experiments, picture books, and
                  video clips to promote critical social justice and antiracist
                  viewpoints
                </li>
              </ul>
            </div>
          </div>
        </ScrollPanel>
      </div>
    </>
  );
};

export default Domain9;
