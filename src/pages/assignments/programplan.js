import React, { use, useState } from "react";
import { Noto_Serif_Georgian } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { Calendar } from "primereact/calendar";
import { Checkbox } from "primereact/checkbox";
import { InputTextarea } from "primereact/inputtextarea";
import { Sidebar } from "primereact/sidebar";
import { Dropdown } from "primereact/dropdown";
import { ScrollPanel } from "primereact/scrollpanel";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const ProgramPlan = () => {
  const [residency, setResidency] = useState(false);
  const [internship, setInternship] = useState(false);
  const [studentTeaching, setStudentTeaching] = useState(false);
  const [english, setEnglish] = useState(false);
  const [multipleSubject, setMultipleSubject] = useState(false);
  const [sciencePhysics, setSciencePhysics] = useState(false);
  const [worldLanguageSpanish, setWorldLanguageSpanish] = useState(false);
  const [math, setMath] = useState(false);
  const [scienceBiology, setScienceBiology] = useState(false);
  const [socialScience, setSocialScience] = useState(false);
  const [other, setOther] = useState(false);
  const [mathFoundational, setMathFoundational] = useState(false);
  const [scienceChemistry, setScienceChemistry] = useState(false);
  const [worldLanguageCantonese, setWorldLanguageCantonese] = useState(false);
  const [sPEDMild, setSPEDMild] = useState(false);
  const [scienceFoundational, setScienceFoundational] = useState(false);
  const [worldLanguageFrench, setWorldLanguageFrench] = useState(false);
  const [sPEDModerateSevere, setSPEDModerateSevere] = useState(false);
  const [scienceGeoscience, setScienceGeoscience] = useState(false);
  const [worldLanguageMandarin, setWorldLanguageMandarin] = useState(false);
  const [geoFar, setGeoFar] = useState(false);
  const [geoNear, setGeoNear] = useState("");
  const [fixStudent, setFixStudent] = useState("");
  const [fixSsn, setFixSsn] = useState("");
  const [schoolAdmission, setSchoolAdmission] = useState("");
  const [programType, setProgramType] = useState("");
  const [preliminarySubject, setPreliminarySubject] = useState("");
  const [program, setProgram] = useState("");

  const PreliminarySubjectList = [
    { name: "Science", code: "01" },
    { name: "Math", code: "02" },
  ];

  return (
    <div>
      <div className={myNotoSerifGeorgian.className}>
        <div className="text-[#262626] text-[32px] xl:text-[1.667vw] mb-[20px] xl:mb[1.67vw] dark:text-white">
          Program Plan
        </div>
      </div>
      <div className="SidebarHeight">
        <ScrollPanel style={{ width: "100%", height: "100%" }}>
          <div
            className="bg-white rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw] grid gap-[24px] xl:gap-[1.250vw]
     border dark:bg-[#13161B] dark:border-[#13161B]"
          >
            <div>
              <div className="text-[18px] xl:text-[0.938vw] text-[#262626] font-medium dark:text-white">
                Preliminary
              </div>
              <div className=" bg-[#FCF5F6] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw] grid gap-[20px] xl:gap-[1.042vw] rounded-lg dark:bg-[#1C2026]">
                <div className=" px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw] grid bg-[#fff] rounded-lg gap-[12px] xl:gap-[0.625vw] programBtn dark:bg-[#13161B]">
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput">
                  <RadioButton
                    inputId="ingredient1"
                    name="admission"
                    value="Residency"
                    onChange={(e) => setProgram(e.value)}
                    checked={program === "Residency"}
                  />
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      Residency
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput">
                  <RadioButton
                    inputId="ingredient2"
                    name="admission"
                    value="Internship"
                    onChange={(e) => setProgram(e.value)}
                    checked={program === "Internship"}
                  />
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      Internship
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput">
                  <RadioButton
                    inputId="ingredient2"
                    name="admission"
                    value="Student"
                    onChange={(e) => setProgram(e.value)}
                    checked={program === "Student"}
                  />
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      Student Teaching
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-[24px] xl:gap-[1.250vw]">
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setEnglish(e.checked)}
                      checked={english}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      English
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setMultipleSubject(e.checked)}
                      checked={multipleSubject}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      Multiple Subject
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setSciencePhysics(e.checked)}
                      checked={sciencePhysics}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      Science Physics
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setWorldLanguageSpanish(e.checked)}
                      checked={worldLanguageSpanish}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      World Language-Spanish
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setMath(e.checked)}
                      checked={math}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      Math
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setScienceBiology(e.checked)}
                      checked={scienceBiology}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      Science Biology
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setSocialScience(e.checked)}
                      checked={socialScience}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      Science Science
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setOther(e.checked)}
                      checked={other}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      Other
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setMathFoundational(e.checked)}
                      checked={mathFoundational}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      Math-Foundational
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setScienceChemistry(e.checked)}
                      checked={scienceChemistry}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      Science-Chemistry
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setWorldLanguageCantonese(e.checked)}
                      checked={worldLanguageCantonese}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      World Language - Cantonese
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setSPEDMild(e.checked)}
                      checked={sPEDMild}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      SPED Mild/Moderate
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setScienceFoundational(e.checked)}
                      checked={scienceFoundational}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      Science Foundational
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setWorldLanguageFrench(e.checked)}
                      checked={worldLanguageFrench}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      World Language French
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setSPEDModerateSevere(e.checked)}
                      checked={sPEDModerateSevere}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      SPED Moderate Severe
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setScienceGeoscience(e.checked)}
                      checked={scienceGeoscience}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      Science-Geoscience
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setWorldLanguageMandarin(e.checked)}
                      checked={worldLanguageMandarin}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      World Language-Mandarin
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-[18px] xl:text-[0.938vw] text-[#262626] font-medium dark:text-white">
                Induction
              </div>
              <div className=" bg-[#FCF5F6] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw] grid gap-[20px] xl:gap-[1.042vw] rounded-lg dark:bg-[#1C2026]">
                <div className=" px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw] grid bg-[#fff] rounded-lg gap-[12px] xl:gap-[0.625vw] programBtn dark:bg-[#13161B]">
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput">
                  <RadioButton
                    inputId="ingredient3"
                    name="Induction"
                    value="Near"
                    onChange={(e) => setGeoNear(e.value)}
                    checked={geoNear === "Near"}
                  />
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      Geo - Near
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput">
                  <RadioButton
                    inputId="ingredient3"
                    name="Induction"
                    value="Far"
                    onChange={(e) => setGeoNear(e.value)}
                    checked={geoNear === "Far"}
                  />
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      Geo - Far
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-[24px] xl:gap-[1.250vw]">
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setEnglish(e.checked)}
                      checked={english}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      English
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setMultipleSubject(e.checked)}
                      checked={multipleSubject}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      Multiple Subject
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setSciencePhysics(e.checked)}
                      checked={sciencePhysics}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      Science Physics
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setWorldLanguageSpanish(e.checked)}
                      checked={worldLanguageSpanish}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      World Language-Spanish
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setMath(e.checked)}
                      checked={math}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      Math
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setScienceBiology(e.checked)}
                      checked={scienceBiology}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      Science Biology
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setSocialScience(e.checked)}
                      checked={socialScience}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      Science Science
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setOther(e.checked)}
                      checked={other}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      Other
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setMathFoundational(e.checked)}
                      checked={mathFoundational}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      Math-Foundational
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setScienceChemistry(e.checked)}
                      checked={scienceChemistry}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      Science-Chemistry
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setWorldLanguageCantonese(e.checked)}
                      checked={worldLanguageCantonese}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      World Language - Cantonese
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setSPEDMild(e.checked)}
                      checked={sPEDMild}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      SPED Mild/Moderate
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setScienceFoundational(e.checked)}
                      checked={scienceFoundational}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      Science Foundational
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setWorldLanguageFrench(e.checked)}
                      checked={worldLanguageFrench}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      World Language French
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setSPEDModerateSevere(e.checked)}
                      checked={sPEDModerateSevere}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      SPED Moderate Severe
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setScienceGeoscience(e.checked)}
                      checked={scienceGeoscience}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      Science-Geoscience
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setWorldLanguageMandarin(e.checked)}
                      checked={worldLanguageMandarin}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal dark:text-[#AAAAAA]">
                      World Language-Mandarin
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-[18px] xl:text-[0.938vw] text-[#262626] font-medium dark:text-white">
                Review
              </div>
              <div className=" bg-[#FCF5F6] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw] grid gap-[20px] xl:gap-[1.042vw] rounded-lg dark:bg-[#1C2026]">
                <div className="grid grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-[16px] xl:gap-[0.833vw]">
                  <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                    <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                      Fix Student ID
                    </span>
                    <div className="custInput">
                      <InputText
                        placeholder="Application Term"
                        value={fixStudent}
                        onChange={(e) => setFixStudent(e.target.value)}
                        className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                        style={{
                          borderRadius: "8px",
                          fontSize: "0.729vw",
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                    <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                      Fix SSN
                    </span>
                    <div className="custInput">
                      <InputText
                        placeholder="Application Year"
                        value={fixSsn}
                        onChange={(e) => setFixSsn(e.target.value)}
                        className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                        style={{
                          borderRadius: "8px",
                          fontSize: "0.729vw",
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                    <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                      Set School Admission
                    </span>
                    <div className="custInput">
                      <InputText
                        placeholder="Application Term"
                        value={schoolAdmission}
                        onChange={(e) => setSchoolAdmission(e.target.value)}
                        className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                        style={{
                          borderRadius: "8px",
                          fontSize: "0.729vw",
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                    <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                      Select Program Type
                    </span>
                    <div className="custInput">
                      <InputText
                        placeholder="Application Year"
                        value={programType}
                        onChange={(e) => setProgramType(e.target.value)}
                        className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                        style={{
                          borderRadius: "8px",
                          fontSize: "0.729vw",
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                    <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                      Select Preliminary Subject
                    </span>
                    <div className="custInput custDropdown">
                      <Dropdown
                        value={preliminarySubject}
                        onChange={(e) => setPreliminarySubject(e.value)}
                        options={PreliminarySubjectList}
                        optionLabel="name"
                        placeholder="Select"
                        style={{
                          borderRadius: "8px",
                          fontSize: "0.729vw",
                        }}
                        className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollPanel>
      </div>

      <div className="mt-[40px] xl:mt-[2.083vw] lg:mt-[0] lg:absolute bottom-[-70px] left-0 right-0">
        <div className="flex items-center justify-between">
          <div className="col">
            <Link
              href="javascript:void(0)"
              className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] opacity-30 transition ease-in-out delay-150 dark:text-[#AF1E27] dark:border-[#AF1E27] dark:bg-[#13161B]"
            >
              <i className="mr-[8px] xl:mr-[0.417vw] cgupod-close-circle text-[22px] xl:text-[1.146]"></i>
              Cancel
            </Link>
          </div>
          <div className="col">
            <div className="flex gap-[8px] xl:gap-[0.417vw]">
              <Link
                href="javascript:void(0)"
                className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] gap-[8px] xl:gap-[0.417vw]
               xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px]
               xl:py-[0.625vw] transition ease-in-out delay-150 dark:bg-[#13161B] dark:border-[#EC4751] dark:text-[#EC4751]"
              >
                <i className="mr-[8px] xl:mr-[0.417vw] cgupod-print text-[18px] xl:text-[0.938vw]"></i>
                Print Report{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramPlan;
