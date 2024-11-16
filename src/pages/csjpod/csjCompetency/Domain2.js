import React, { useState, useRef } from "react";
import { Noto_Serif_Georgian } from "@next/font/google";
import Link from "next/link";
import { ScrollPanel } from "primereact/scrollpanel";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const Domain2 = () => {
  return (
    <>
      {/* row */}
      <div className={myNotoSerifGeorgian.className}>
        <div className="text-[#262626] dark:text-[#fff] text-[32px] xl:text-[1.667vw]">
          Domain 2 : Pedagogy
        </div>
        <p className="text-sm text-[#888] dark:text-[#818181]">
          Relationships: Teacher, Students, Content
        </p>
      </div>
      <div className="SidebarHeight">
        <ScrollPanel style={{ width: "100%", height: "100%" }}>
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
                Strand 2.1 : Introduce New Content & Skills in Engaging, Clear,
                & Meaningful Ways
              </div>
              <ul className="list-disc pl-6 flex flex-col gap-5">
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Use appropriate body language and facial expressions to
                  demonstrate engagement with content and students
                </li>
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Introduce lesson by checking for and/or tapping students’
                  relevant funds of knowledge, including prior knowledge,
                  interests, and/or experiences
                </li>
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Make connections to past and/or future learning and
                  opportunities
                </li>
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Sequence content instruction to support and build students’
                  fluency
                </li>

                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Provide scaffolded direct instruction of new content, skills,
                  and vocabulary, including steps, lecture, modeling, thinking
                  aloud, examples/non-examples, stories, images, metaphors, etc.
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
                Strand 2.2 : Make Meaningful Learning Accessible
              </div>
              <ul className="list-disc pl-6 flex flex-col gap-5">
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Adapt subject matter curriculum, organization, and planning to
                  support the acquisition and use of academic language for all
                  learners
                </li>
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Provide scaffolded direct instruction of content, skills, and
                  vocabulary
                </li>

                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Provide students with multiple ways to access content,
                  including ways that tap their funds of knowledge
                </li>
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Differentiate content, process, and product for: English
                  learners, students with special needs, struggling and advanced
                  learners
                </li>
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Differentiate content, process, and product with
                  accommodation, adaptation, modification, choice, and/or
                  challenge
                </li>

                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Facilitate students’ use of technology to support learning
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
                Strand 2.3 : Use Instructional Practices to Grow Students’
                Knowledge, Skills, & Understanding
              </div>
              <ul className="list-disc pl-6 flex flex-col gap-5">
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Provide meaningful guided practice
                </li>
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Model and provide examples and non-examples, worked and
                  partially worked examples, exemplars and non-exemplars
                </li>

                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Provide meaningful independent practice
                </li>
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Implement structured pair shares
                </li>

                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Pose probing and generative questions
                </li>

                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Implement structured group work and grouping strategies
                </li>

                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Link abstract concepts with concrete representations
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
                Strand 2.4 : Help Students Level Up with Steadily Increasing
                Rigor
              </div>
              <ul className="list-disc pl-6 flex flex-col gap-5">
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Ask students to make their thinking and learning visible
                </li>
                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Plan for active learning experiences and critical reflection
                </li>

                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Provide opportunities for students to stretch their thinking
                  and understanding by creating, imagining, synthesizing,
                  analyzing, applying, critiquing, etc.
                </li>

                <li className="xl:text-[0.938vw] text-[18px] font-normal text-[#424242] dark:text-[#AAA]">
                  Demonstrate instructional intensity by maximizing each moment 
                  in the classroom as an opportunity to learn
                </li>
              </ul>
            </div>
          </div>
        </ScrollPanel>
      </div>
      {/* row */}
    </>
  );
};

export default Domain2;
