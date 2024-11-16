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
import { TabView, TabPanel } from "primereact/tabview";
import { ScrollPanel } from "primereact/scrollpanel";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const QualificationsPage = () => {
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState("");
  const [subjectDate, setSubjectDate] = useState("");
  const [subjectMatter, setSubjectMatter] = useState("");
  const [subjectStatus, setSubjectStatus] = useState("");
  const [subjectType, setSubjectType] = useState("");
  const [subjectNotes, setSubjectNotes] = useState("");
  const [ricaStatus, setRicaStatus] = useState("");
  const [ricaDate, setRicaDate] = useState("");
  const [ricaNotes, setRicaNotes] = useState("");
  const [ricaScores, setRicaScores] = useState("");
  const [fingerprintsStatus, setFingerprintsStatus] = useState("");
  const [fingerprintsDate, setFingerprintsDate] = useState("");
  const [examDate, setExamDate] = useState("");
  const [constitutionStatus, setConstitutionStatus] = useState("");
  const [completedDate, setCompletedDate] = useState("");
  const [requirementDate, setRequirementDate] = useState("");
  const [tbDate, setTbDate] = useState("");
  const [reporterDate, setReporterDate] = useState("");
  const [survey, setSurvey] = useState("");
  const [program, setProgram] = useState("");
  const [subjectData, setSubjectData] = useState(null);

  const SubjectList = [
    { name: "Science", code: "01" },
    { name: "Math", code: "02" },
  ];

  return (
    <div>
      <div className={myNotoSerifGeorgian.className}>
        <div className="text-[#262626] text-[32px] xl:text-[1.667vw] dark:text-white">
          Qualifications
        </div>
      </div>
      <div className="SidebarHeight">
        <ScrollPanel style={{ width: "100%", height: "100%" }}>
          <div className="qualificationTabpanel">
            <TabView>
              <TabPanel header="Checklist (View)">
                <div
                  className="bg-white rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw] grid gap-[24px] xl:gap-[1.250vw]
            mt-[32px] xl:mt-[1.667vw] border dark:bg-[#13161B] dark:border-[#13161B]"
                >
                  <div>
                    <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-semibold dark:text-white">
                      Basic Skills
                    </div>
                    <div
                      className="grid grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-[24px] xl:gap-[1.250vw]
                bg-[#FCF5F6] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw] rounded-lg dark:bg-[#1C2026]"
                    >
                      <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                        <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626] dark:text-white">
                          Status
                        </span>
                        <div className=" custInput">
                          <InputText
                            placeholder="Status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                            style={{
                              borderRadius: "8px",
                              fontSize: "0.729vw",
                            }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                        <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626] dark:text-white">
                          Type
                        </span>
                        <div className=" custInput">
                          <InputText
                            placeholder="Type"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                            style={{
                              borderRadius: "8px",
                              fontSize: "0.729vw",
                            }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-[4px] xl:gap-[0.208vw] popupForm inputlabel custInput">
                        <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626] dark:text-white">
                          Date
                        </span>
                        <Calendar
                          value={date}
                          onChange={(e) => setDate(e.value)}
                          showIcon
                          placeholder="01-05-2022"
                          className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                          style={{
                            borderRadius: "8px",
                            fontSize: "0.729vw",
                          }}
                        />
                      </div>
                      <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                        <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626] dark:text-white">
                          Notes/Scores
                        </span>
                        <div className=" custInput">
                          <InputText
                            placeholder="Notes/Scores"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                            style={{
                              borderRadius: "8px",
                              fontSize: "0.729vw",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-semibold dark:text-white">
                      Subject Matter
                    </div>
                    <div
                      className="grid grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-[24px] xl:gap-[1.250vw]
                bg-[#FCF5F6] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw] rounded-lg dark:bg-[#1C2026]"
                    >
                      <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                        <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626] dark:text-white">
                          Status
                        </span>
                        <div className=" custInput">
                          <InputText
                            placeholder="Status"
                            value={subjectStatus}
                            onChange={(e) => setSubjectStatus(e.target.value)}
                            className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                            style={{
                              borderRadius: "8px",
                              fontSize: "0.729vw",
                            }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                        <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626] dark:text-white">
                          Type
                        </span>
                        <div className=" custInput">
                          <InputText
                            placeholder="Type"
                            value={subjectType}
                            onChange={(e) => setSubjectType(e.target.value)}
                            className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                            style={{
                              borderRadius: "8px",
                              fontSize: "0.729vw",
                            }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-[4px] xl:gap-[0.208vw] popupForm inputlabel custInput">
                        <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626] dark:text-white">
                          Date
                        </span>
                        <Calendar
                          value={subjectDate}
                          onChange={(e) => setSubjectDate(e.value)}
                          showIcon
                          placeholder="01-05-2022"
                          className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                          style={{
                            borderRadius: "8px",
                            fontSize: "0.729vw",
                          }}
                        />
                      </div>
                      <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                        <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626] dark:text-white">
                          Subject
                        </span>
                        <div className="custInput">
                          <InputText
                            placeholder="Subject"
                            value={subjectMatter}
                            onChange={(e) => setSubjectMatter(e.target.value)}
                            className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                            style={{
                              borderRadius: "8px",
                              fontSize: "0.729vw",
                            }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                        <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626] dark:text-white">
                          Notes
                        </span>
                        <div className=" custInput">
                          <InputText
                            placeholder="Notes"
                            value={subjectNotes}
                            onChange={(e) => setSubjectNotes(e.target.value)}
                            className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                            style={{
                              borderRadius: "8px",
                              fontSize: "0.729vw",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-semibold dark:text-white">
                      Rica
                    </div>
                    <div
                      className="grid grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-[24px] xl:gap-[1.250vw]
                bg-[#FCF5F6] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw] rounded-lg dark:bg-[#1C2026]"
                    >
                      <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                        <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626] dark:text-white">
                          RICA Status
                        </span>
                        <div className=" custInput">
                          <InputText
                            placeholder="Status"
                            value={ricaStatus}
                            onChange={(e) => setRicaStatus(e.target.value)}
                            className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                            style={{
                              borderRadius: "8px",
                              fontSize: "0.729vw",
                            }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-[4px] xl:gap-[0.208vw] popupForm inputlabel custInput">
                        <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626] dark:text-white">
                          Date
                        </span>
                        <Calendar
                          value={ricaDate}
                          onChange={(e) => setRicaDate(e.value)}
                          showIcon
                          placeholder="01-05-2022"
                          className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                          style={{
                            borderRadius: "8px",
                            fontSize: "0.729vw",
                          }}
                        />
                      </div>
                      <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                        <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626] dark:text-white">
                          Notes
                        </span>
                        <div className=" custInput">
                          <InputText
                            placeholder="Notes"
                            value={ricaNotes}
                            onChange={(e) => setRicaNotes(e.target.value)}
                            className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                            style={{
                              borderRadius: "8px",
                              fontSize: "0.729vw",
                            }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                        <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626] dark:text-white">
                          Scores
                        </span>
                        <div className=" custInput">
                          <InputText
                            placeholder="Subject"
                            value={ricaScores}
                            onChange={(e) => setRicaScores(e.target.value)}
                            className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                            style={{
                              borderRadius: "8px",
                              fontSize: "0.729vw",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-semibold dark:text-white">
                      Fingerprints/Livescan
                    </div>
                    <div
                      className="grid grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-[24px] xl:gap-[1.250vw]
                bg-[#FCF5F6] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw] rounded-lg dark:bg-[#1C2026]"
                    >
                      <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                        <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626] dark:text-white">
                          Status
                        </span>
                        <div className=" custInput">
                          <InputText
                            placeholder="Status"
                            value={fingerprintsStatus}
                            onChange={(e) =>
                              setFingerprintsStatus(e.target.value)
                            }
                            className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                            style={{
                              borderRadius: "8px",
                              fontSize: "0.729vw",
                            }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-[4px] xl:gap-[0.208vw] popupForm inputlabel custInput">
                        <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626] dark:text-white">
                          Date and C0C#
                        </span>
                        <Calendar
                          value={fingerprintsDate}
                          onChange={(e) => setFingerprintsDate(e.value)}
                          showIcon
                          placeholder="01-05-2022"
                          className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                          style={{
                            borderRadius: "8px",
                            fontSize: "0.729vw",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-semibold dark:text-white">
                      U.S Constitution
                    </div>
                    <div
                      className="grid grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-[24px] xl:gap-[1.250vw]
                bg-[#FCF5F6] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw] rounded-lg dark:bg-[#1C2026]"
                    >
                      <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                        <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626] dark:text-white">
                          Status
                        </span>
                        <div className=" custInput">
                          <InputText
                            placeholder="Status"
                            value={constitutionStatus}
                            onChange={(e) =>
                              setConstitutionStatus(e.target.value)
                            }
                            className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                            style={{
                              borderRadius: "8px",
                              fontSize: "0.729vw",
                            }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-[4px] xl:gap-[0.208vw] popupForm inputlabel custInput">
                        <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626] dark:text-white">
                          Exam or Degree Information
                        </span>
                        <Calendar
                          value={examDate}
                          onChange={(e) => setExamDate(e.value)}
                          showIcon
                          placeholder="01-05-2022"
                          className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                          style={{
                            borderRadius: "8px",
                            fontSize: "0.729vw",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-semibold dark:text-white">
                      Observation Hours
                    </div>
                    <div
                      className="grid grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-[24px] xl:gap-[1.250vw]
                bg-[#FCF5F6] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw] rounded-lg dark:bg-[#1C2026]"
                    >
                      <div className="flex flex-col gap-[4px] xl:gap-[0.208vw] popupForm inputlabel custInput">
                        <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626] dark:text-white">
                          Date Completed
                        </span>
                        <Calendar
                          value={completedDate}
                          onChange={(e) => setCompletedDate(e.value)}
                          showIcon
                          placeholder="01-05-2022"
                          className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                          style={{
                            borderRadius: "8px",
                            fontSize: "0.729vw",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-semibold dark:text-white">
                      CPR Requirement
                    </div>
                    <div
                      className="grid grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-[24px] xl:gap-[1.250vw]
                bg-[#FCF5F6] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw] rounded-lg dark:bg-[#1C2026]"
                    >
                      <div className="flex flex-col gap-[4px] xl:gap-[0.208vw] popupForm inputlabel custInput">
                        <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626] dark:text-white">
                          Date Completed
                        </span>
                        <Calendar
                          value={requirementDate}
                          onChange={(e) => setRequirementDate(e.value)}
                          showIcon
                          placeholder="01-05-2022"
                          className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                          style={{
                            borderRadius: "8px",
                            fontSize: "0.729vw",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-semibold dark:text-white">
                      TB Test
                    </div>
                    <div
                      className="grid grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-[24px] xl:gap-[1.250vw]
                bg-[#FCF5F6] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw] rounded-lg dark:bg-[#1C2026]"
                    >
                      <div className="flex flex-col gap-[4px] xl:gap-[0.208vw] popupForm inputlabel custInput">
                        <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626] dark:text-white">
                          TB Date
                        </span>
                        <Calendar
                          value={tbDate}
                          onChange={(e) => setTbDate(e.value)}
                          showIcon
                          placeholder="01-05-2022"
                          className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                          style={{
                            borderRadius: "8px",
                            fontSize: "0.729vw",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-semibold dark:text-white">
                      School Personnel Train Date
                    </div>
                    <div
                      className="grid grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-[24px] xl:gap-[1.250vw]
                bg-[#FCF5F6] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw] rounded-lg dark:bg-[#1C2026]"
                    >
                      <div className="flex flex-col gap-[4px] xl:gap-[0.208vw] popupForm inputlabel custInput">
                        <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626] dark:text-white">
                          Mandated Reporter Date
                        </span>
                        <Calendar
                          value={reporterDate}
                          onChange={(e) => setReporterDate(e.value)}
                          showIcon
                          placeholder="01-05-2022"
                          className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                          style={{
                            borderRadius: "8px",
                            fontSize: "0.729vw",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-semibold dark:text-white">
                      Credential Completion Survey
                    </div>
                    <div
                      className="grid gap-[24px] xl:gap-[1.250vw]
                bg-[#FCF5F6] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw] rounded-lg dark:bg-[#1C2026]"
                    >
                      <div className="flex flex-col gap-[4px] xl:gap-[0.208vw] popupForm inputlabel custInput">
                        <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626] dark:text-white">
                          Survey
                        </span>
                        <div className="custTextArea">
                          <InputTextarea
                            placeholder="Type Here"
                            autoResize
                            value={survey}
                            onChange={(e) => setSurvey(e.target.value)}
                            rows={6}
                            cols={30}
                            className="w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-semibold dark:text-white">
                      Others
                    </div>
                    <div className="bg-[#FCF5F6] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw] grid gap-[20px] xl:gap-[1.042vw] rounded-lg dark:bg-[#1C2026]">
                      <div className="text-[18px] xl:text-[0.938vw] text-[#262626] font-medium dark:text-white ">
                        Phase 2 Recommend
                      </div>
                      <div className="gap-[12px] xl:gap-[1.042vw] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw] grid bg-[#fff] programBtn dark:bg-[#1C2026]">
                        <div className="flex items-start">
                          <RadioButton
                            inputId="ingredient1"
                            name="admission"
                            value="Internship"
                            onChange={(e) => setProgram(e.value)}
                            checked={program === "Internship"}
                          />
                          <label
                            htmlFor="ingredient1"
                            className="ml-2 text-[14px] xl:text-[0.729vw] text-[#424242]"
                          >
                            Internship
                          </label>
                        </div>
                        <div className="flex items-start">
                          <RadioButton
                            inputId="ingredient2"
                            name="admission"
                            value="Residency"
                            onChange={(e) => setProgram(e.value)}
                            checked={program === "Residency"}
                          />
                          <label
                            htmlFor="ingredient2"
                            className="ml-2 text-[14px] xl:text-[0.729vw] text-[#424242]"
                          >
                            Residency
                          </label>
                        </div>
                        <div className="flex items-start">
                          <RadioButton
                            inputId="ingredient3"
                            name="admission"
                            value="Phase 2 Ineligible"
                            onChange={(e) => setProgram(e.value)}
                            checked={program === "Phase 2 Ineligible"}
                          />
                          <label
                            htmlFor="ingredient3"
                            className="ml-2 text-[14px] xl:text-[0.729vw] text-[#424242]"
                          >
                            Phase 2 Ineligible
                          </label>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                        <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626] dark:text-white">
                          Prelim Credential Subject(s)
                        </span>
                        <div className="custInput custDropdown grid grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 ">
                          <Dropdown
                            value={subjectData}
                            onChange={(e) => setSubjectData(e.value)}
                            options={SubjectList}
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
              </TabPanel>
              <TabPanel header="Checklist (Edit)">
                <div>Checklist (Edit)</div>
              </TabPanel>
              <TabPanel header="TPA">
                <div>TPA</div>
              </TabPanel>
              <TabPanel header="Degrees">
                <div>Degrees</div>
              </TabPanel>
              <TabPanel header="Tests">
                <div>Tests</div>
              </TabPanel>
              <TabPanel header="Expertise">
                <div>Expertise</div>
              </TabPanel>
              <TabPanel header="Training/PD">
                <div>Training/PD</div>
              </TabPanel>
            </TabView>
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

export default QualificationsPage;
