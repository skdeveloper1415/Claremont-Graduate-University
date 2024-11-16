import React, { useState, useRef } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ScrollPanel } from "primereact/scrollpanel";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { InputNumber } from 'primereact/inputnumber';
import { Noto_Serif_Georgian } from "@next/font/google";
import { InputText } from "primereact/inputtext";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const PreObservationPopup = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [phase,setPhase] = useState(null);
  const [semester,setSemester] = useState(null);
  const [subject,setSubject] = useState(null);
  const [grade,setGrade] = useState(null);
  const [value, setValue] = useState("");
  const [mentor,setMentor] =useState("");
  const [candidate,setCandidate] = useState("");
  const [school,setSchool] = useState("");
  const [time,setTime] = useState("");
  const [observation,setObservation] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [date, setDate] = useState(null);


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
        <div className="text-[#262626] dark:text-[#FFF] text-[32px] xl:text-[1.667vw]">
          CGU CSJ Lesson Plan
        </div>
        <div
          className="mt-[22px] xl:mt-[1.146vw] mb-[60px] xl:mb-[3.125vw] bg-[#fff] dark:bg-[#13161B] rounded-[8px]
         xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw] SidebarHeight"
        >
          <ScrollPanel style={{ width: "100%", height: "100%" }}>
            <div className="popupForm">
              <form>
                <div className="space-y-[20px] xl:space-y-[1.042vw]">
                  <div className="flex flex-col gap-[6px]">
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] dark:text-[#FFF] font-medium">
                      {" "}
                      Candidate
                    </div>
                    <div className="custInput">
                      <InputText 
                        placeholder="Write text here ..."
                        value={candidate}
                        onChange={(e) => setCandidate(e.target.value)}
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] dark:text-[#FFF] font-medium">
                      {" "}
                      School
                    </div>
                    <div className="custInput">
                      <InputText 
                        placeholder="Write text here ..."
                        value={school}
                        onChange={(e) => setSchool(e.target.value)}
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] dark:text-[#FFF] font-medium">
                      {" "}
                      Mentor
                    </div>
                    <div className="custInput">
                      <InputText 
                        placeholder="Write text here ..."
                        value={mentor}
                        onChange={(e) => setMentor(e.target.value)}
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] dark:text-[#FFF] font-medium">
                      {" "}
                      Observation
                    </div>
                    <div className="custInput">
                      <InputNumber 
                        placeholder="Write Number here ..."
                        autoResize
                        value={observation}
                        onChange={(e) => setObservation(e.value)}
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] dark:text-[#FFF] font-medium">
                      Grade
                    </div>
                    <div className="custInput">
                      <Dropdown
                        value={grade}
                        onChange={(e) => setGrade(e.value)}
                        options={GradeList}
                        optionLabel="name"
                        placeholder="--Select here --"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] dark:text-[#FFF] font-medium">
                      Subject
                    </div>
                    <div className="custInput">
                      <Dropdown
                        value={subject}
                        onChange={(e) => setSubject(e.value)}
                        options={SubjectList}
                        optionLabel="name"
                        placeholder="--Select here --"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] dark:text-[#FFF] font-medium">
                      Semester
                    </div>
                    <div className="custInput">
                      <Dropdown
                        value={semester}
                        onChange={(e) => setSemester(e.value)}
                        options={SemesterList}
                        optionLabel="name"
                        placeholder="--Select here --"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] dark:text-[#FFF] font-medium">
                      Date
                    </div>
                    <div className="custInput">
                      <Calendar
                        value={date}
                        onChange={(e) => setDate(e.value)}
                        showIcon
                        placeholder="27-02-2022"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] dark:text-[#FFF] font-medium">
                      {" "}
                     Time
                    </div>
                    <div className="custInput">
                      <InputText 
                        placeholder="Write text here ..."
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] dark:text-[#FFF] font-medium">
                      Phase
                    </div>
                    <div className="custInput">
                      <Dropdown
                        value={phase}
                        onChange={(e) => setPhase(e.value)}
                        options={PhaseList}
                        optionLabel="name"
                        placeholder="--Select here --"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] dark:text-[#FFF] font-medium">
                      {" "}
                     Mood
                    </div>
                    <div className="custInput">
                      <InputText 
                        placeholder="Write text here ..."
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
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
      <div className="mt-[40px] xl:mt-[2.083vw] lg:mt-[0] lg:absolute bottom-[-70px] left-0 right-0">
        <div className="flex items-center justify-between">
          <div className="col mt-4">
            <Link
              href="javascript:void(0)"
              className="flex items-center bg-white dark:bg-[#13161B] dark:text-[#AF1E27] dark:border-[#AF1E27] hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] opacity-30 transition ease-in-out delay-150"
            >
              <i className="mr-[8px] xl:mr-[0.417vw] cgupod-close-circle text-[22px] xl:text-[1.146]"></i>
              Cancel
            </Link>
          </div>
          <div className="col mt-4">
            <div className="flex items-center gap-[8px] xl:gap-[0.417vw]">
              <Link
                href="javascript:void(0)"
                className="flex items-center bg-white dark:bg-[#13161B] dark:border-[#F5747C] dark:text-[#F5747C] hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] gap-[8px] xl:gap-[0.417vw]
                 xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px]
                  xl:py-[0.625vw] transition ease-in-out delay-150"
              >
                <i className="mr-[8px] xl:mr-[0.417vw] cgupod-tick-circle text-[22px] xl:text-[1.146]"></i>
                Submit
              </Link>{" "}
              <Link
                href="javascript:void(0)"
                className="flex items-center bg-white dark:bg-[#13161B] dark:border-[#F5747C] dark:text-[#F5747C] hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] gap-[8px] xl:gap-[0.417vw]
                 xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px]
                  xl:py-[0.625vw] transition ease-in-out delay-150"
              >
                <i className="mr-[8px] xl:mr-[0.417vw] cgupod-save-file text-[22px] xl:text-[1.146]"></i>
                Save
              </Link>
              <Link
                href="javascript:void(0)"
                className="flex items-center bg-white dark:bg-[#13161B] dark:border-[#F5747C] dark:text-[#F5747C] hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] gap-[8px] xl:gap-[0.417vw]
                 xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px]
                 xl:py-[0.625vw] transition ease-in-out delay-150"
              >
                Next{" "}
                <i className="mr-[8px] xl:mr-[0.417vw] cgupod-arrow-right-line text-[18px] xl:text-[0.938vw]"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreObservationPopup;
