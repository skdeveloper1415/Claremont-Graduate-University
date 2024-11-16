import React, { useState, useRef } from "react";
import { Noto_Serif_Georgian } from "@next/font/google";
import Link from "next/link";
import { ScrollPanel } from "primereact/scrollpanel";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const Domain1 = () => {
  return (
    <>
      {/* row */}
      <div className={myNotoSerifGeorgian.className}>
        <div className="text-[#262626] dark:text-[#fff] text-[32px] xl:text-[1.667vw]">
          Domain 1 : Philosophy of Education
        </div>
        <p className="text-sm text-[#888] dark:text-[#818181]">
          Relationships: Purpose, Self, Content
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
                Strand 1.1 : Grow Self-Awareness
              </div>
              <ul className="list-disc pl-6 flex flex-col gap-5">
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Identify your positionality, strengths, areas of need, pet
                  peeves, quirks, etc. and how they impact your teaching
                </li>
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Seek feedback and/or support from colleagues, mentors,
                  caregivers, and community members
                </li>
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Develop a deliberate critical social justice and antiracist
                  teacher presence
                </li>
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Maintain awareness of your socio-emotional development in
                  stages of teaching
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
                Strand 1.2 : Establish Baseline of Respect for Students & Their
                Learning
              </div>
              <ul className="list-disc pl-6 flex flex-col gap-5">
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Speak clearly and audibly
                </li>
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Know and use students’ pronouns and names - pronounce them
                  correctly
                </li>
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Communicate in developmentally-appropriate ways
                </li>
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Show up on time and prepared every day
                </li>
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Keep a deliberately-organized and physically-safe classroom
                  ecology
                </li>
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Take students, their ideas, and their learning seriously
                </li>
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Demonstrate "whithitness," or awareness of what’s happening in
                  the classroom
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
                Strand 1.3 : Develop Familiarity & Facility with The Curriculum
              </div>
              <ul className="list-disc pl-6 flex flex-col gap-5">
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Use reliable resources to grow content-area expertise
                </li>
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Select curriculum (when relevant) and instructional approaches
                  based on knowledge of and relationships with students
                </li>
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Adjust and modify existing curriculum (when relevant) and
                  instructional approaches based on knowledge of and
                  relationships with students
                </li>
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Design and implement disciplinary and cross-disciplinary
                  learning sequences
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
                Strand 1.4 : Take Responsibility for Students' Learning &
                Engagement
              </div>
              <ul className="list-disc pl-6 flex flex-col gap-5">
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Provide clear, explicit, accessible instructions and rationale
                  for them.
                </li>
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Establish and/or co-create rituals and routines that
                  facilitate students’ success.
                </li>
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Use personal tone to deliberately set classroom tone.
                </li>
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Manage and designate time to maximize engagement in learning.
                </li>
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Design lessons that require students to work, think,
                  investigate, create, contribute, critique, problem-solve, etc.
                </li>
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  more than sit, copy, listen, etc.
                </li>
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Acknowledge when instruction has been ineffective and adjust
                  it.
                </li>
              </ul>
            </div>
          </div>
        </ScrollPanel>
      </div>
    </>
  );
};

export default Domain1;
