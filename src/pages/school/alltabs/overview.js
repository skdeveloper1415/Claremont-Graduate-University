import React, { useState, useRef } from "react";
import { Noto_Serif_Georgian } from "@next/font/google";
import Link from "next/link";
import { ScrollPanel } from "primereact/scrollpanel";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from "primereact/inputtext";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const Overview = () => {
  const [grade,setGrade] = useState(null);
  const [value, setValue] = useState("");
  const [mentor,setMentor] =useState("");
  const [candidate,setCandidate] = useState("");
  const [time,setTime] = useState("");

  const GradeList = [
    { name: "4", code: "NY" },
    { name: "5", code: "RM" },
  ];
  return (
    <div>
      <div className={myNotoSerifGeorgian.className}>
        <div className="text-[#262626] dark:text-[#fff] text-[32px] xl:text-[1.667vw]">
         Overview
        </div>
        <div
          className="mt-[22px] xl:mt-[1.146vw] mb-[60px] xl:mb-[3.125vw] bg-[#fff] dark:bg-[#13161B] rounded-[8px]
         xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw] SidebarHeight"
        >
          <ScrollPanel style={{ width: "100%", height: "100%" }}>
            <div className="grid grid-cols-2 popupForm">
              <form>
                <div className="space-y-[20px] xl:space-y-[1.042vw]">
                  <div className="flex flex-col gap-[6px]">
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] dark:text-[#FFFFFF] font-medium">
                      {" "}
                      School Name
                    </div>
                    <div className="custInput">
                      <InputText
                        placeholder="Input text"
                        value={candidate}
                        onChange={(e) => setCandidate(e.target.value)}
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] dark:text-[#FFFFFF] font-medium">
                        School Type
                    </div>
                    <div className="custInput">
                      <Dropdown
                        value={grade}
                        onChange={(e) => setGrade(e.value)}
                        options={GradeList}
                        optionLabel="name"
                        placeholder="Elementary School"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] dark:text-[#FFFFFF] font-medium">
                        Grades Applicable
                    </div>
                    <div className="custInput">
                      <Dropdown
                        value={grade}
                        onChange={(e) => setGrade(e.value)}
                        options={GradeList}
                        optionLabel="name"
                        placeholder="Elementary School"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] dark:text-[#FFFFFF] font-medium">
                      {" "}
                      Teachers Strength
                    </div>
                    <div className="custInput">
                      <InputText
                        placeholder="245"
                        value={mentor}
                        onChange={(e) => setMentor(e.target.value)}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-[6px]">
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] dark:text-[#FFFFFF] font-medium">
                      {" "}
                      Candidate Strength
                    </div>
                    <div className="custInput">
                      <InputText
                        placeholder="7752"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="w-full"
                      />
                    </div>
                  </div>
                 
                  <div className="flex flex-col gap-[6px]">
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] dark:text-[#FFFFFF] font-medium">
                      {" "}
                     URL
                    </div>
                    <div className="custInput">
                      <InputText
                        placeholder="http:www.andenrsonschool.com"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                 
                </div>
              </form>
            </div>
          </ScrollPanel>
        </div>
      </div>
    </div>
  );
};

export default Overview;
