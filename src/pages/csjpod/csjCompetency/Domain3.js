import React, { useState, useRef } from "react";
import { Noto_Serif_Georgian } from "@next/font/google";
import Link from "next/link";
import { ScrollPanel } from "primereact/scrollpanel";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const Domain3 = () => {
  return (
    <>
      {/* row */}
      <div className={myNotoSerifGeorgian.className}>
        <div className="text-[#262626] dark:text-[#fff] text-[32px] xl:text-[1.667vw]">
          Domain 3 : Science of Learning
        </div>
        <p className="text-sm text-[#888] dark:text-[#818181]">
          Relationships: Students, Content, Self{" "}
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
                Strand 3.1 : Use Data to Inform Instruction
              </div>
              <ul className="list-disc pl-6 flex flex-col gap-5">
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Check for prior knowledge, understanding, and misconceptions
                </li>
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Use knowledge of students to anticipate and plan for potential
                  challenges, misconceptions, or bottle-necks
                </li>
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Employ diverse and frequent checks for understanding of new
                  content/skills
                </li>
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Use assessment data to inform reteaching, future instruction,
                  etc.
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
                Strand 3.2 : Harness Instructional Cohesion
              </div>
              <ul className="list-disc pl-6 flex flex-col gap-5">
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Develop meaningful and measurable content objectives
                </li>
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Develop meaningful and measurable language objectives
                </li>

                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Align state standards, curriculum, instruction, objectives,
                  assessment, and feedback - make each lesson a chapter in the
                  book of your year
                </li>
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Use assessment for learning and to boost retention
                </li>
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Plan cohesive units
                </li>
              </ul>
            </div>
          </div>

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
                Strand 3.3 : Use Assessments to Promote Learning & Understanding
              </div>
              <ul className="list-disc pl-6 flex flex-col gap-5">
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Alternate solved and unsolved problems
                </li>
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Distribute practice strategically over time
                </li>

                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Provide timely and constructive global and individual feedback
                </li>
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Implement varied assessments deliberately: diagnostic,
                  informal/formative, formal/summative, progress-monitoring,
                  formative, summative, performance
                </li>

                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Use “Exit Tickets” and/or assessment to provide closure and/or
                  review, and to make students’ thinking and understanding
                  visible to you
                </li>

                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Help students develop meaningful and productive
                  self-assessment strategies
                </li>
              </ul>
            </div>
          </div>
        </ScrollPanel>
      </div>
    </>
  );
};

export default Domain3;
