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

const Contact = () => {
  const [grade,setGrade] = useState(null);
  const [value, setValue] = useState("");
  const [mentor,setMentor] =useState("");
  const [candidate,setCandidate] = useState("");
  const [time,setTime] = useState("");


  const PhaseList = [
    { name: "Teaching", code: "NY" },
    { name: "Pre-Teaching", code: "RM" },
  ];

  const SemesterList = [
    { name: "Spring 2017", code: "NY" },
    { name: "Summer 2016", code: "RM" },
  ];
  const SubjectList = [
    { name: "Social Science", code: "NY" },
    { name: "Science", code: "RM" },
  ];
  const GradeList = [
    { name: "4", code: "NY" },
    { name: "5", code: "RM" },
  ];
  return (
    <div>
      <div className={myNotoSerifGeorgian.className}>
        <div className="text-[#262626] dark:text-[#fff] text-[32px] xl:text-[1.667vw]">
         Contact
        </div>
        <div
          className=" mt-[22px] xl:mt-[1.146vw] mb-[60px] xl:mb-[3.125vw] bg-[#fff] dark:bg-[#13161B] rounded-[8px]
         xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw] SidebarHeight"
        >
          <ScrollPanel style={{ width: "100%", height: "100%" }}>
            <div className="grid grid-cols-2 popupForm">
              <form>
                <div className="space-y-[20px] xl:space-y-[1.042vw]">
                  <div className="flex flex-col gap-[6px]">
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] dark:text-[#FFFFFF] font-medium">
                      {" "}
                      Address 1
                    </div>
                    <div className="custInput">
                      <InputText
                        placeholder="Little Havana, MiamiUS, ZIP"
                        value={candidate}
                        onChange={(e) => setCandidate(e.target.value)}
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] dark:text-[#FFFFFF] font-medium">
                      {" "}
                      Address 2
                    </div>
                    <div className="custInput">
                      <InputText
                        placeholder="Little Havana, MiamiUS, ZIP"
                        value={candidate}
                        onChange={(e) => setCandidate(e.target.value)}
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] dark:text-[#FFFFFF] font-medium">
                    City
                    </div>
                    <div className="custInput">
                      <InputText
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        optionLabel="name"
                        placeholder="245"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] dark:text-[#FFFFFF] font-medium">
                      {" "}
                      State
                    </div>
                    <div className="custInput">
                      <InputText
                        placeholder="7752"
                        value={mentor}
                        onChange={(e) => setMentor(e.target.value)}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-[6px]">
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] dark:text-[#FFFFFF] font-medium">
                      {" "}
                      Zip
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
                      Main Office Phone
                    </div>
                    <div className="custInput">
                      <InputText
                        placeholder="Input text"
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

export default Contact;
