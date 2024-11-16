import React, { useState } from "react";
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
import { Noto_Serif_Georgian } from "@next/font/google";
import { ScrollPanel } from "primereact/scrollpanel";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const AdmissionPage = (props) => {
  const [program, setProgram] = useState("");
  const [university, setUniversity] = useState("");
  const [studentStatus, setStudentStatus] = useState("");
  const [application, setApplication] = useState("");
  const [deferredtoTerm, setDeferredtoTerm] = useState("");
  const [underGraduateUni, setUnderGraduateUni] = useState("");
  const [degree, setDegree] = useState("");
  const [field, setField] = useState("");
  const [degreeDate, setDegreeDate] = useState("");
  const [minor, setMinor] = useState("");
  const [underGraduateGPA, setUnderGraduateGPA] = useState("");
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState(null);
  const [others, setOthers] = useState(false);
  const [defferedDate, setDefferedDate] = useState("");
  const [interviewScore, setInterviewScore] = useState("");
  const [location, setLocation] = useState("");
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);
  const [emergencyYes, setEmergencyYes] = useState(false);
  const [emergencyNo, setEmergencyNo] = useState(false);
  const [conditionalAdmit, setConditionalAdmit] = useState(false);
  const [credLocation, setCredLocation] = useState("");
  const [visibleRight, setVisibleRight] = useState(false);
  const [value, setValue] = useState("");
  const [subjectData, setSubjectData] = useState(null);

  const SubjectList = [
    { name: "Science", code: "01" },
    { name: "Math", code: "02" },
  ];

  return (
    <div>
      <div className={myNotoSerifGeorgian.className}>
        <div className="flex justify-between mb-[20px] xl:mb[1.67vw]">
          <div className="text-[#262626] text-[32px] xl:text-[1.667vw]">
            Admission
          </div>
          <div
            className="py-[8px] xl:py-[0.417vw] px-[16px] xl:px-[0.833vw] bg-white flex items-center gap-[8px] xl:gap-[0.417vw] cursor-pointer"
            // onClick={() => setVisibleRight(true)}
            onClick={()=>{
              props.handleSubjectmatter(true);
            }}
          >
            <div>
              <i className="cgupod-eye"></i>
            </div>
            <div className="text-[14px] xl:text-[0.729vw] font-normal text-[#888] " >
              CSET/Subject Matter Rubric
            </div>
          </div>
        </div>
      </div>
      {/* row */}
      <div className="SidebarHeight">
        <ScrollPanel style={{ width: "100%", height: "100%" }}>
          <div
            className="bg-white rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw]
       border"
          >
            <div>
              <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-medium">
                Admission Details
              </div>
            </div>
            <div className=" bg-[#FCF5F6] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw] grid gap-[20px] xl:gap-[1.042vw] rounded-lg">
              <div className="text-[18px] xl:text-[0.938vw] text-[#262626] font-medium">
                Program
              </div>
              <div className="gap-[12px] xl:gap-[1.042vw] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw] grid bg-[#fff] programBtn">
                <div className="flex items-start">
                  <RadioButton
                    inputId="ingredient1"
                    name="admission"
                    value="Preliminary"
                    onChange={(e) => setProgram(e.value)}
                    checked={program === "Preliminary"}
                  />
                  <label
                    htmlFor="ingredient2"
                    className="ml-2 text-[14px] xl:text-[0.729vw] text-[#424242]"
                  >
                    Preliminary
                  </label>
                </div>
                <div className="flex items-start">
                  <RadioButton
                    inputId="ingredient2"
                    name="admission"
                    value="Induction"
                    onChange={(e) => setProgram(e.value)}
                    checked={program === "Induction"}
                  />
                  <label
                    htmlFor="ingredient3"
                    className="ml-2 text-[14px] xl:text-[0.729vw] text-[#424242]"
                  >
                    Induction
                  </label>
                </div>
                <div className="flex items-start">
                  <RadioButton
                    inputId="ingredient3"
                    name="admission"
                    value="Direct to Clear"
                    onChange={(e) => setProgram(e.value)}
                    checked={program === "Direct to Clear"}
                  />
                  <label
                    htmlFor="ingredient4"
                    className="ml-2 text-[14px] xl:text-[0.729vw] text-[#424242]"
                  >
                    Direct to Clear
                  </label>
                </div>
              </div>
              <div className="text-[18px] xl:text-[0.938vw] text-[#262626] font-medium">
                Application Term
              </div>
              <div className=" px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw] grid bg-[#fff] rounded-lg">
                <div className="grid grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 gap-[20px] xl:gap-[1.042vw]">
                  <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                    <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                      Application Term
                    </span>
                    <div className=" custInput">
                      <InputText
                        placeholder="Application Term"
                        value={application}
                        onChange={(e) => setApplication(e.target.value)}
                        className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #EAE0E0",
                          borderRadius: "8px",
                          fontSize: "0.729vw",
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[4px] xl:gap-[0.208vw] popupForm inputlabel custInput">
                    <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626] ">
                      Application Year
                    </span>
                    <Calendar
                      value={date}
                      onChange={(e) => setDate(e.value)}
                      showIcon
                      placeholder="Application Year"
                      className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                      style={{
                        background: "#FFFFFF",
                        border: "1px solid #EAE0E0",
                        borderRadius: "8px",
                        fontSize: "0.729vw",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="text-[18px] xl:text-[0.938vw] text-[#262626] font-medium">
                Subject (s)
              </div>
              <div className=" px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw] grid bg-[#fff] rounded-lg">
                <div className="grid grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 gap-[20px] xl:gap-[1.042vw]">
                  <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                    <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                      Subject
                    </span>
                    <div className="custInput custDropdown">
                      <Dropdown
                        value={subjectData}
                        onChange={(e) => setSubjectData(e.value)}
                        options={SubjectList}
                        optionLabel="name"
                        placeholder="Select"
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #EAE0E0",
                          borderRadius: "8px",
                          fontSize: "0.729vw",
                        }}
                        className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[18px] xl:text-[0.938vw] text-[#262626] font-medium">
                Admission Date
              </div>
              <div className=" px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw] grid bg-[#fff] rounded-lg">
                <div className="grid grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 gap-[20px] xl:gap-[1.042vw]">
                  <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                    <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                      Admission Date
                    </span>
                    <div className=" custInput popupForm inputlabel">
                      <Calendar
                        value={date}
                        onChange={(e) => setDate(e.value)}
                        showIcon
                        placeholder="Application Year"
                        className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #EAE0E0",
                          borderRadius: "8px",
                          fontSize: "0.729vw",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[18px] xl:text-[0.938vw] text-[#262626] font-medium">
                University Admission
              </div>
              <div className="gap-[12px] xl:gap-[1.042vw] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw] grid bg-[#fff] programBtn rounded-lg">
                <div className="flex items-start">
                  <RadioButton
                    inputId="ingredient1"
                    name="university"
                    value="Application Withdrawn"
                    onChange={(e) => setUniversity(e.value)}
                    checked={university === "Application Withdrawn"}
                  />
                  <label
                    htmlFor="ingredient1"
                    className="ml-2 text-[14px] xl:text-[0.729vw] text-[#424242]"
                  >
                    Application Withdrawn
                  </label>
                </div>
                <div className="flex items-start">
                  <RadioButton
                    inputId="ingredient2"
                    name="university"
                    value="Admission Denied"
                    onChange={(e) => setUniversity(e.value)}
                    checked={university === "Admission Denied"}
                  />
                  <label
                    htmlFor="ingredient2"
                    className="ml-2 text-[14px] xl:text-[0.729vw] text-[#424242]"
                  >
                    Admission Denied
                  </label>
                </div>
                <div className="flex items-start">
                  <RadioButton
                    inputId="ingredient3"
                    name="university"
                    value="Admission Pending"
                    onChange={(e) => setUniversity(e.value)}
                    checked={university === "Admission Pending"}
                  />
                  <label
                    htmlFor="ingredient3"
                    className="ml-2 text-[14px] xl:text-[0.729vw] text-[#424242]"
                  >
                    Admission Pending
                  </label>
                </div>
                <div className="flex items-start">
                  <RadioButton
                    inputId="ingredient4"
                    name="university"
                    value="Admission Granted"
                    onChange={(e) => setUniversity(e.value)}
                    checked={university === "Admission Granted"}
                  />
                  <label
                    htmlFor="ingredient4"
                    className="ml-2 text-[14px] xl:text-[0.729vw] text-[#424242]"
                  >
                    Admission Granted
                  </label>
                </div>
              </div>
              <div className="text-[18px] xl:text-[0.938vw] text-[#262626] font-medium">
                Student Status
              </div>
              <div className="gap-[12px] xl:gap-[1.042vw] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw] grid bg-[#fff] programBtn rounded-lg">
                <div className="flex items-start">
                  <RadioButton
                    inputId="ingredient1"
                    name="studentStatus"
                    value="No Response (Admitted)"
                    onChange={(e) => setStudentStatus(e.value)}
                    checked={studentStatus === "No Response (Admitted)"}
                  />
                  <label
                    htmlFor="ingredient1"
                    className="ml-2 text-[14px] xl:text-[0.729vw] text-[#B0B0B0]"
                  >
                    No Response (Admitted)
                  </label>
                </div>
                <div className="flex items-start">
                  <RadioButton
                    inputId="ingredient2"
                    name="studentStatus"
                    value="Candidate Accepted (Admitted)"
                    onChange={(e) => setStudentStatus(e.value)}
                    checked={studentStatus === "Candidate Accepted (Admitted)"}
                  />
                  <label
                    htmlFor="ingredient2"
                    className="ml-2 text-[14px] xl:text-[0.729vw] text-[#B0B0B0]"
                  >
                    Candidate Accepted (Admitted)
                  </label>
                </div>
                <div className="flex items-start">
                  <RadioButton
                    inputId="ingredient3"
                    name="studentStatus"
                    value="Candidate No Show (Admitted)"
                    onChange={(e) => setStudentStatus(e.value)}
                    checked={studentStatus === "Candidate No Show (Admitted)"}
                  />
                  <label
                    htmlFor="ingredient3"
                    className="ml-2 text-[14px] xl:text-[0.729vw] text-[#B0B0B0]"
                  >
                    Candidate No Show (Admitted)
                  </label>
                </div>
                <div className="flex items-start">
                  <RadioButton
                    inputId="ingredient4"
                    name="studentStatus"
                    value="Candidate Declined (Admitted)"
                    onChange={(e) => setStudentStatus(e.value)}
                    checked={studentStatus === "Candidate Declined (Admitted)"}
                  />
                  <label
                    htmlFor="ingredient4"
                    className="ml-2 text-[14px] xl:text-[0.729vw] text-[#B0B0B0]"
                  >
                    Candidate Declined (Admitted)
                  </label>
                </div>
                <div className="flex items-start">
                  <RadioButton
                    inputId="ingredient5"
                    name="studentStatus"
                    value="Candidate Registered (Admitted)"
                    onChange={(e) => setStudentStatus(e.value)}
                    checked={
                      studentStatus === "Candidate Registered (Admitted)"
                    }
                  />
                  <label
                    htmlFor="ingredient5"
                    className="ml-2 text-[14px] xl:text-[0.729vw] text-[#B0B0B0]"
                  >
                    Candidate Registered (Admitted)
                  </label>
                </div>
                <div className="flex items-start">
                  <RadioButton
                    inputId="ingredient6"
                    name="studentStatus"
                    value="Candidate Deferred (Admitted)"
                    onChange={(e) => setStudentStatus(e.value)}
                    checked={studentStatus === "Candidate Deferred (Admitted)"}
                  />
                  <label
                    htmlFor="ingredient6"
                    className="ml-2 text-[14px] xl:text-[0.729vw] text-[#B0B0B0]"
                  >
                    Candidate Deferred (Admitted)
                  </label>
                </div>
              </div>
              <div className="text-[18px] xl:text-[0.938vw] text-[#262626] font-medium">
                Deferred to Term
              </div>
              <div className=" px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw] grid bg-[#fff] rounded-lg">
                <div className="grid grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 gap-[20px] xl:gap-[1.042vw]">
                  <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                    <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                      Deferred to Term
                    </span>
                    <div className="custInput">
                      <InputText
                        placeholder="Deferred to Term"
                        value={deferredtoTerm}
                        onChange={(e) => setDeferredtoTerm(e.target.value)}
                        className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #EAE0E0",
                          borderRadius: "8px",
                          fontSize: "0.729vw",
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[4px] xl:gap-[0.208vw] popupForm inputlabel custInput">
                    <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626] ">
                      Deferred Year
                    </span>
                    <Calendar
                      value={defferedDate}
                      onChange={(e) => setDefferedDate(e.value)}
                      showIcon
                      placeholder="Deferred Year"
                      className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                      style={{
                        background: "#FFFFFF",
                        border: "1px solid #EAE0E0",
                        borderRadius: "8px",
                        fontSize: "0.729vw",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="text-[18px] xl:text-[0.938vw] text-[#262626] font-medium">
                Undergraduate Degree
              </div>
              <div className="px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw] grid bg-[#fff] rounded-lg gap-[20px] xl:gap-[1.042vw]">
                <div className="grid grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 gap-[20px] xl:gap-[1.042vw]">
                  <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                    <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                      University
                    </span>
                    <div className="custInput">
                      <InputText
                        placeholder="Type"
                        value={underGraduateUni}
                        onChange={(e) => setUnderGraduateUni(e.target.value)}
                        className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #EAE0E0",
                          borderRadius: "8px",
                          fontSize: "0.729vw",
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                    <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                      GPA
                    </span>
                    <div className="custInput">
                      <InputText
                        placeholder="Type"
                        value={underGraduateGPA}
                        onChange={(e) => setUnderGraduateGPA(e.target.value)}
                        className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #EAE0E0",
                          borderRadius: "8px",
                          fontSize: "0.729vw",
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                    <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                      Degree
                    </span>
                    <div className="custInput">
                      <InputText
                        placeholder="Type"
                        value={degree}
                        onChange={(e) => setDegree(e.target.value)}
                        className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #EAE0E0",
                          borderRadius: "8px",
                          fontSize: "0.729vw",
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                    <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                      Major/Field
                    </span>
                    <div className="custInput">
                      <InputText
                        placeholder="Type"
                        value={field}
                        onChange={(e) => setField(e.target.value)}
                        className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #EAE0E0",
                          borderRadius: "8px",
                          fontSize: "0.729vw",
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[4px] xl:gap-[0.208vw] popupForm inputlabel custInput">
                    <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626] ">
                      Degree Date
                    </span>
                    <Calendar
                      value={degreeDate}
                      onChange={(e) => setDegreeDate(e.value)}
                      showIcon
                      placeholder="01-05-1892"
                      className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                      style={{
                        background: "#FFFFFF",
                        border: "1px solid #EAE0E0",
                        borderRadius: "8px",
                        fontSize: "0.729vw",
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                    <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                      Minor / Concentration
                    </span>
                    <div className="custInput">
                      <InputText
                        placeholder="Type"
                        value={minor}
                        onChange={(e) => setMinor(e.target.value)}
                        className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #EAE0E0",
                          borderRadius: "8px",
                          fontSize: "0.729vw",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="grid gap-[20px] xl:gap-[1.042vw]">
                  <Link
                    href="javascript:void(0)"
                    className="bg-[#fff] rounded text-[#AF1E27] w-[30%]
          xl:text-[0.729vw] text-[14px] font-normal xl:leading-[0.938vw] leading-5 xl:py-[0.417vw] py-2 xl:px-[0.833vw] 
          px-4 flex items-center xl:gap-[0.521vw] gap-2 border border-t-2 border-[#AF1E27]"
                  >
                    <i className="cgupod-plus text-[12px] xl:text-[0.625vw]"></i>
                    <span>Add Qualification</span>
                  </Link>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput">
                    <Checkbox
                      onChange={(e) => setOthers(e.checked)}
                      checked={others}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal">
                      Check if Still need a copy of degree
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[18px] xl:text-[0.938vw] text-[#262626] font-medium">
                Application Information
              </div>
              <div className="px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw] grid bg-[#fff] rounded-lg gap-[20px] xl:gap-[1.042vw]">
                <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                  <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                    Interview Score
                  </span>
                  <div className="custInput">
                    <InputText
                      placeholder="Enter Score"
                      value={interviewScore}
                      onChange={(e) => setInterviewScore(e.target.value)}
                      className="xl:h-[2.083vw] h-[36px] xl:w-[50%] placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                      style={{
                        background: "#FFFFFF",
                        border: "1px solid #EAE0E0",
                        borderRadius: "8px",
                        fontSize: "0.729vw",
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                  <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                    Location
                  </span>
                  <div className="custInput">
                    <div className="custTextArea">
                      <InputTextarea
                        placeholder="Enter Cred Location"
                        autoResize
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        rows={6}
                        cols={30}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                  <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                    Aid Application
                  </span>
                  <div className="flex gap-[20px] xl:gap-[1.042vw]">
                    <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                      <Checkbox
                        onChange={(e) => setYes(e.checked)}
                        checked={yes}
                      ></Checkbox>
                      <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal">
                        Yes
                      </div>
                    </div>
                    <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                      <Checkbox
                        onChange={(e) => setNo(e.checked)}
                        checked={no}
                      ></Checkbox>
                      <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal">
                        No
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                  <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                    Emergency Credential
                  </span>
                  <div className="flex gap-[20px] xl:gap-[1.042vw]">
                    <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                      <Checkbox
                        onChange={(e) => setEmergencyYes(e.checked)}
                        checked={emergencyYes}
                      ></Checkbox>
                      <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal">
                        Yes
                      </div>
                    </div>
                    <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                      <Checkbox
                        onChange={(e) => setEmergencyNo(e.checked)}
                        checked={emergencyNo}
                      ></Checkbox>
                      <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal">
                        No
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[8px] xl:gap-[0.417vw]">
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setConditionalAdmit(e.checked)}
                      checked={conditionalAdmit}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal">
                      Conditional Admit
                    </div>
                  </div>

                  <div className="custTextArea custInput">
                    <InputTextarea
                      placeholder="Enter Cred Location"
                      autoResize
                      value={credLocation}
                      onChange={(e) => setCredLocation(e.target.value)}
                      rows={6}
                      cols={30}
                      className="w-full"
                    />
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
              className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] opacity-30 transition ease-in-out delay-150"
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
               xl:py-[0.625vw] transition ease-in-out delay-150"
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

export default AdmissionPage;
