import React, { useState, useRef } from "react";
import { Noto_Serif_Georgian } from "@next/font/google";
import Link from "next/link";
import { ScrollPanel } from "primereact/scrollpanel";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { RadioButton } from "primereact/radiobutton";
import { Calendar } from "primereact/calendar";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Index() {
  const [value, setValue] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [date, setDate] = useState(null);

  return (
    <>
      {/* row */}
      <div className={myNotoSerifGeorgian.className}>
        <div className="text-[#262626] dark:text-[#FFFFFF] text-[32px] xl:text-[1.667vw]">
          Admission Info
        </div>
      </div>
      {/* row */}
      <div className="bg-white dark:bg-[#13161B] rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw] mt-[32px] xl:mt-[1.667vw] PersonalDetails">
        <ScrollPanel style={{ width: "100%", height: "100%" }}>
          <div className="popupForm inputlabel">
            <form>
              <div className="space-y-[20px] xl:space-y-[1.042vw]">
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="semester">Semester Started</label>
                  <InputText
                    id="semester"
                    aria-describedby="semester"
                    placeholder="English (UK)"
                  />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="admitted">Year Admitted</label>
                  <InputText
                    id="admitted"
                    aria-describedby="admitted"
                    placeholder="2020"
                  />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="credential">Credential Subject</label>
                  <InputText
                    id="credential"
                    aria-describedby="credential"
                    placeholder="English"
                  />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="ug">UG University Name</label>
                  <InputText
                    id="ug"
                    aria-describedby="ug"
                    placeholder="CGU University"
                  />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="undergrad">Undergrad GPA</label>
                  <InputText
                    id="undergrad"
                    aria-describedby="undergrad"
                    placeholder="7.4"
                  />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="interviewscore">
                    Official Transcript on File
                  </label>
                  <div className="flex items-center gap-[24px] xl:gap-[1.25vw]">
                    <div className="flex items-center custRadioButton">
                      <RadioButton
                        inputId="ingredient1"
                        name="pizza"
                        value="yes"
                        onChange={(e) => setIngredient(e.value)}
                        checked={ingredient === "yes"}
                      />
                      <label
                        htmlFor="ingredient1"
                        className="ml-[8px] xl:ml-[0.417vw] text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center custRadioButton">
                      <RadioButton
                        inputId="ingredient2"
                        name="pizza"
                        value="no"
                        onChange={(e) => setIngredient(e.value)}
                        checked={ingredient === "no"}
                      />
                      <label
                        htmlFor="ingredient2"
                        className="ml-[8px] xl:ml-[0.417vw] text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="full">Type Full</label>
                  <InputText
                    id="full"
                    aria-describedby="full"
                    placeholder="-"
                  />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="degree">Degree Date</label>
                  <Calendar
                    value={date}
                    onChange={(e) => setDate(e.value)}
                    showIcon
                    placeholder="19/09/2020"
                  />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="major">Major</label>
                  <InputText
                    id="major"
                    aria-describedby="major"
                    placeholder="Yes"
                  />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="minor">Minor</label>
                  <InputText
                    id="minor"
                    aria-describedby="minor"
                    placeholder="Write text here ..."
                  />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="interviewscore">Interview Score</label>
                  <InputText
                    id="interviewscore"
                    aria-describedby="interviewscore"
                    placeholder="Write text here ..."
                  />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="interviewscore">Applied for Aid</label>
                  <div className="flex items-center gap-[24px] xl:gap-[1.25vw]">
                    <div className="flex items-center custRadioButton">
                      <RadioButton
                        inputId="ingredient3"
                        name="pizza"
                        value="yes"
                        onChange={(e) => setIngredient(e.value)}
                        checked={ingredient === "yes"}
                      />
                      <label
                        htmlFor="ingredient3"
                        className="ml-[8px] xl:ml-[0.417vw] text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center custRadioButton">
                      <RadioButton
                        inputId="ingredient4"
                        name="pizza"
                        value="no"
                        onChange={(e) => setIngredient(e.value)}
                        checked={ingredient === "no"}
                      />
                      <label
                        htmlFor="ingredient4"
                        className="ml-[8px] xl:ml-[0.417vw] text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="interviewscore">Notes</label>
                  <InputTextarea
                    autoResize
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    rows={3}
                    cols={30}
                  />
                </div>
              </div>
            </form>
          </div>
        </ScrollPanel>
      </div>
      {/* row */}
      <div className="mt-[32px] lg:mt-[0] lg:absolute bottom-0 left-0 right-0">
        <div className="flex items-center justify-between">
          <div className="col">
            <Link
              href={""}
              className="flex items-center bg-white hover:bg-[#AF1E27] dark:bg-[#13161B] border border-[#AF1E27] dark:border-[#F5747C] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white dark:text-[#F5747C] text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] opacity-30 transition ease-in-out delay-150"
            >
              <i className="mr-[8px] xl:mr-[0.417vw] cgupod-close-circle text-[22px] xl:text-[1.146]"></i>
              Cancel
            </Link>
          </div>
          <div className="col">
            <Link
              href={""}
              className="flex items-center bg-white hover:bg-[#AF1E27] dark:bg-[#13161B] border border-[#AF1E27] dark:border-[#F5747C] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white dark:text-[#F5747C] text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] transition ease-in-out delay-150"
            >
              <i className="mr-[8px] xl:mr-[0.417vw] cgupod-print text-[22px] xl:text-[1.146]"></i>
              Print Application
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
