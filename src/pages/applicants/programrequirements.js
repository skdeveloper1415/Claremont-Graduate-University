import React, { useState, useRef } from "react";
import { Noto_Serif_Georgian } from "@next/font/google";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ScrollPanel } from "primereact/scrollpanel";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { RadioButton } from "primereact/radiobutton";
import { Calendar } from "primereact/calendar";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Index() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [value, setValue] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [date, setDate] = useState(null);

  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  return (
    <>
      {/* row */}
      <div className={myNotoSerifGeorgian.className}>
        <div className="text-[#262626] dark:text-[#FFFFFF] text-[32px] xl:text-[1.667vw]">
          Program Requirements
        </div>
      </div>
      {/* row */}
      <div className="bg-white dark:bg-[#13161B] rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw] mt-[32px] xl:mt-[1.667vw] PersonalDetails">
        <ScrollPanel style={{ width: "100%", height: "100%" }}>
          <div className="space-y-[22px] xl:space-y-[1.146vw]">
            {/* row */}
            <div className="col">
              <div className="flex items-center gap-[24px] xl:gap-[1.25vw]">
                <div className="text-[#262626] dark:text-white text-[14px] xl:text-[0.729vw] font-medium">
                  Basic Skill Set
                </div>
                <div className="flex items-center custRadioButton">
                  <RadioButton
                    inputId="ingredient5"
                    name="pizza"
                    value="yes"
                    onChange={(e) => setIngredient(e.value)}
                    checked={ingredient === "yes"}
                  />
                  <label
                    htmlFor="ingredient5"
                    className="ml-[8px] xl:ml-[0.417vw] text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center custRadioButton">
                  <RadioButton
                    inputId="ingredient6"
                    name="pizza"
                    value="no"
                    onChange={(e) => setIngredient(e.value)}
                    checked={ingredient === "no"}
                  />
                  <label
                    htmlFor="ingredient6"
                    className="ml-[8px] xl:ml-[0.417vw] text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium"
                  >
                    No
                  </label>
                </div>
              </div>
              <div className="mt-[22px] xl:mt-[1.146vw] bg-[#FCF5F6] dark:bg-[#1C2026] rounded-[8px] xl:rounded-[0.417vw] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw]">
                <div className="popupForm inputlabel">
                  <form>
                    <div className="space-y-[20px] xl:space-y-[1.042vw]">
                      <div className="flex flex-col gap-[6px]">
                        <label htmlFor="candidate">Language</label>
                        <Dropdown
                          value={selectedCity}
                          onChange={(e) => setSelectedCity(e.value)}
                          options={cities}
                          optionLabel="name"
                          placeholder="--Select here --"
                          className="w-full"
                        />
                      </div>
                      <div className="flex flex-col gap-[6px]">
                        <label htmlFor="interviewscore">
                          Basic Skills Details Notes
                        </label>
                        <InputTextarea
                          placeholder="Write text here ..."
                          autoResize
                          value={value}
                          onChange={(e) => setValue(e.target.value)}
                          rows={3}
                          cols={30}
                        />
                      </div>
                      <div className="flex flex-col gap-[6px]">
                        <label htmlFor="degree">
                          Basic Skills Completion Date
                        </label>
                        <Calendar
                          value={date}
                          onChange={(e) => setDate(e.value)}
                          showIcon
                          placeholder="19/09/2020"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* row */}
            <div className="col">
              <div className="flex items-center gap-[24px] xl:gap-[1.25vw]">
                <div className="text-[#262626] dark:text-white text-[14px] xl:text-[0.729vw] font-medium">
                  Subject Mater Met
                </div>
                <div className="flex items-center custRadioButton">
                  <RadioButton
                    inputId="ingredient8"
                    name="pizza"
                    value="yes"
                    onChange={(e) => setIngredient(e.value)}
                    checked={ingredient === "yes"}
                  />
                  <label
                    htmlFor="ingredient8"
                    className="ml-[8px] xl:ml-[0.417vw] text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center custRadioButton">
                  <RadioButton
                    inputId="ingredient7"
                    name="pizza"
                    value="no"
                    onChange={(e) => setIngredient(e.value)}
                    checked={ingredient === "no"}
                  />
                  <label
                    htmlFor="ingredient7"
                    className="ml-[8px] xl:ml-[0.417vw] text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium"
                  >
                    No
                  </label>
                </div>
              </div>
              <div className="mt-[22px] xl:mt-[1.146vw] bg-[#FCF5F6] dark:bg-[#1C2026] rounded-[8px] xl:rounded-[0.417vw] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw]">
                <div className="popupForm inputlabel">
                  <form>
                    <div className="space-y-[20px] xl:space-y-[1.042vw]">
                      <div className="flex flex-col gap-[6px]">
                        <label htmlFor="candidate">How Subject Mater Met</label>
                        <Dropdown
                          value={selectedCity}
                          onChange={(e) => setSelectedCity(e.value)}
                          options={cities}
                          optionLabel="name"
                          placeholder="--Select here --"
                          className="w-full"
                        />
                      </div>
                      <div className="flex flex-col gap-[6px]">
                        <label htmlFor="interviewscore">
                          Subject Mater Details
                        </label>
                        <InputTextarea
                          placeholder="Write text here ..."
                          autoResize
                          value={value}
                          onChange={(e) => setValue(e.target.value)}
                          rows={3}
                          cols={30}
                        />
                      </div>
                      <div className="flex flex-col gap-[6px]">
                        <label htmlFor="degree">
                          Subject Matter Requirement Date
                        </label>
                        <Calendar
                          value={date}
                          onChange={(e) => setDate(e.value)}
                          showIcon
                          placeholder="19/09/2020"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* row */}
            <div className="col">
              <div className="flex items-center gap-[24px] xl:gap-[1.25vw]">
                <div className="text-[#262626] dark:text-white text-[14px] xl:text-[0.729vw] font-medium">
                  RICA Met
                </div>
                <div className="flex items-center custRadioButton">
                  <RadioButton
                    inputId="ingredient8"
                    name="pizza"
                    value="yes"
                    onChange={(e) => setIngredient(e.value)}
                    checked={ingredient === "yes"}
                  />
                  <label
                    htmlFor="ingredient8"
                    className="ml-[8px] xl:ml-[0.417vw] text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center custRadioButton">
                  <RadioButton
                    inputId="ingredient7"
                    name="pizza"
                    value="no"
                    onChange={(e) => setIngredient(e.value)}
                    checked={ingredient === "no"}
                  />
                  <label
                    htmlFor="ingredient7"
                    className="ml-[8px] xl:ml-[0.417vw] text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium"
                  >
                    No
                  </label>
                </div>
                <div className="flex items-center custRadioButton">
                  <RadioButton
                    inputId="na"
                    name="pizza"
                    value="na"
                    onChange={(e) => setIngredient(e.value)}
                    checked={ingredient === "na"}
                  />
                  <label
                    htmlFor="na"
                    className="ml-[8px] xl:ml-[0.417vw] text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium"
                  >
                    N/A
                  </label>
                </div>
              </div>
              <div className="mt-[22px] xl:mt-[1.146vw] bg-[#FCF5F6] dark:bg-[#1C2026] rounded-[8px] xl:rounded-[0.417vw] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw]">
                <div className="popupForm inputlabel">
                  <form>
                    <div className="space-y-[20px] xl:space-y-[1.042vw]">
                      <div className="flex flex-col gap-[6px]">
                        <label htmlFor="candidate">RICA Met</label>
                        <Dropdown
                          value={selectedCity}
                          onChange={(e) => setSelectedCity(e.value)}
                          options={cities}
                          optionLabel="name"
                          placeholder="--Select here --"
                          className="w-full"
                        />
                      </div>
                      <div className="flex flex-col gap-[6px]">
                        <label htmlFor="degree">RICA Completion Date</label>
                        <Calendar
                          value={date}
                          onChange={(e) => setDate(e.value)}
                          showIcon
                          placeholder="19/09/2020"
                        />
                      </div>
                      <div className="flex flex-col gap-[6px]">
                        <label htmlFor="interviewscore">RICA Notes</label>
                        <InputTextarea
                          placeholder="Write text here ..."
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
              </div>
            </div>
            {/* row */}
            <div className="col">
              <div className="flex items-center gap-[24px] xl:gap-[1.25vw]">
                <div className="text-[#262626] dark:text-white text-[14px] xl:text-[0.729vw] font-medium">
                  US Constitution Met
                </div>
                <div className="flex items-center custRadioButton">
                  <RadioButton
                    inputId="ingredient8"
                    name="pizza"
                    value="yes"
                    onChange={(e) => setIngredient(e.value)}
                    checked={ingredient === "yes"}
                  />
                  <label
                    htmlFor="ingredient8"
                    className="ml-[8px] xl:ml-[0.417vw] text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center custRadioButton">
                  <RadioButton
                    inputId="ingredient7"
                    name="pizza"
                    value="no"
                    onChange={(e) => setIngredient(e.value)}
                    checked={ingredient === "no"}
                  />
                  <label
                    htmlFor="ingredient7"
                    className="ml-[8px] xl:ml-[0.417vw] text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium"
                  >
                    No
                  </label>
                </div>
              </div>
              <div className="mt-[22px] xl:mt-[1.146vw] bg-[#FCF5F6] dark:bg-[#1C2026] rounded-[8px] xl:rounded-[0.417vw] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw]">
                <div className="popupForm inputlabel">
                  <form>
                    <div className="space-y-[20px] xl:space-y-[1.042vw]">
                      <div className="flex flex-col gap-[6px]">
                        <label htmlFor="candidate">Constitution</label>
                        <Dropdown
                          value={selectedCity}
                          onChange={(e) => setSelectedCity(e.value)}
                          options={cities}
                          optionLabel="name"
                          placeholder="--Select here --"
                          className="w-full"
                        />
                      </div>
                      <div className="flex flex-col gap-[6px]">
                        <label htmlFor="degree">Date Constitution Met</label>
                        <Calendar
                          value={date}
                          onChange={(e) => setDate(e.value)}
                          showIcon
                          placeholder="19/09/2020"
                        />
                      </div>
                      <div className="flex flex-col gap-[6px]">
                        <label htmlFor="interviewscore">
                          Constitution Notes
                        </label>
                        <InputTextarea
                          placeholder="Write text here ..."
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
              </div>
            </div>
            {/* row */}
            <div className="col">
              <div className="popupForm inputlabel">
                <form>
                  <div className="space-y-[20px] xl:space-y-[1.042vw]">
                    <div className="flex flex-col gap-[6px]">
                      <label htmlFor="candidate">
                        Certificate of Clearance
                      </label>
                      <Dropdown
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.value)}
                        options={cities}
                        optionLabel="name"
                        placeholder="--Select here --"
                        className="w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-[6px]">
                      <label htmlFor="degree">
                        Certificate of Clearance Date
                      </label>
                      <Calendar
                        value={date}
                        onChange={(e) => setDate(e.value)}
                        showIcon
                        placeholder="19/09/2020"
                      />
                    </div>
                    <div className="flex flex-col gap-[6px]">
                      <label htmlFor="interviewscore">
                        Certificate of Clearance Notes
                      </label>
                      <InputTextarea
                        placeholder="Write text here ..."
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
            </div>
            {/* row */}
            <div className="col">
              <div className="flex items-center gap-[24px] xl:gap-[1.25vw]">
                <div className="text-[#262626] dark:text-white text-[14px] xl:text-[0.729vw] font-medium">
                  TB Clearance
                </div>
                <div className="flex items-center custRadioButton">
                  <RadioButton
                    inputId="ingredient8"
                    name="pizza"
                    value="yes"
                    onChange={(e) => setIngredient(e.value)}
                    checked={ingredient === "yes"}
                  />
                  <label
                    htmlFor="ingredient8"
                    className="ml-[8px] xl:ml-[0.417vw] text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center custRadioButton">
                  <RadioButton
                    inputId="ingredient7"
                    name="pizza"
                    value="no"
                    onChange={(e) => setIngredient(e.value)}
                    checked={ingredient === "no"}
                  />
                  <label
                    htmlFor="ingredient7"
                    className="ml-[8px] xl:ml-[0.417vw] text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium"
                  >
                    No
                  </label>
                </div>
              </div>
              <div className="mt-[22px] xl:mt-[1.146vw] bg-[#FCF5F6] dark:bg-[#1C2026] rounded-[8px] xl:rounded-[0.417vw] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw]">
                <div className="popupForm inputlabel">
                  <form>
                    <div className="space-y-[20px] xl:space-y-[1.042vw]">
                      <div className="flex flex-col gap-[6px]">
                        <label htmlFor="degree">TB Clearance Date</label>
                        <Calendar
                          value={date}
                          onChange={(e) => setDate(e.value)}
                          showIcon
                          placeholder="19/09/2020"
                        />
                      </div>
                      <div className="flex flex-col gap-[6px]">
                        <label htmlFor="interviewscore">
                          TB Clearance Notes
                        </label>
                        <InputTextarea
                          placeholder="Write text here ..."
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
              </div>
            </div>
            {/* row */}
            <div className="col">
              <div className="flex items-center gap-[24px] xl:gap-[1.25vw]">
                <div className="text-[#262626] dark:text-white text-[14px] xl:text-[0.729vw] font-medium">
                  CPR Completed
                </div>
                <div className="flex items-center custRadioButton">
                  <RadioButton
                    inputId="ingredient8"
                    name="pizza"
                    value="yes"
                    onChange={(e) => setIngredient(e.value)}
                    checked={ingredient === "yes"}
                  />
                  <label
                    htmlFor="ingredient8"
                    className="ml-[8px] xl:ml-[0.417vw] text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center custRadioButton">
                  <RadioButton
                    inputId="ingredient7"
                    name="pizza"
                    value="no"
                    onChange={(e) => setIngredient(e.value)}
                    checked={ingredient === "no"}
                  />
                  <label
                    htmlFor="ingredient7"
                    className="ml-[8px] xl:ml-[0.417vw] text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium"
                  >
                    No
                  </label>
                </div>
              </div>
              <div className="mt-[22px] xl:mt-[1.146vw] bg-[#FCF5F6] dark:bg-[#1C2026] rounded-[8px] xl:rounded-[0.417vw] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw]">
                <div className="popupForm inputlabel">
                  <form>
                    <div className="space-y-[20px] xl:space-y-[1.042vw]">
                      <div className="flex flex-col gap-[6px]">
                        <label htmlFor="degree">CPR Completed Date</label>
                        <Calendar
                          value={date}
                          onChange={(e) => setDate(e.value)}
                          showIcon
                          placeholder="19/09/2020"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* row */}
            <div className="col">
              <div className="flex items-center gap-[24px] xl:gap-[1.25vw]">
                <div className="text-[#262626] dark:text-white text-[14px] xl:text-[0.729vw] font-medium">
                  Observation Hours Completed
                </div>
                <div className="flex items-center custRadioButton">
                  <RadioButton
                    inputId="ingredient8"
                    name="pizza"
                    value="yes"
                    onChange={(e) => setIngredient(e.value)}
                    checked={ingredient === "yes"}
                  />
                  <label
                    htmlFor="ingredient8"
                    className="ml-[8px] xl:ml-[0.417vw] text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center custRadioButton">
                  <RadioButton
                    inputId="ingredient7"
                    name="pizza"
                    value="no"
                    onChange={(e) => setIngredient(e.value)}
                    checked={ingredient === "no"}
                  />
                  <label
                    htmlFor="ingredient7"
                    className="ml-[8px] xl:ml-[0.417vw] text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium"
                  >
                    No
                  </label>
                </div>
              </div>
              <div className="mt-[22px] xl:mt-[1.146vw] bg-[#FCF5F6] dark:bg-[#1C2026] rounded-[8px] xl:rounded-[0.417vw] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw]">
                <div className="popupForm inputlabel">
                  <form>
                    <div className="space-y-[20px] xl:space-y-[1.042vw]">
                      <div className="flex flex-col gap-[6px]">
                        <label htmlFor="degree">
                          Observation Hours Completed Date
                        </label>
                        <Calendar
                          value={date}
                          onChange={(e) => setDate(e.value)}
                          showIcon
                          placeholder="19/09/2020"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* row */}
            <div className="col">
              <div className="flex items-center gap-[24px] xl:gap-[1.25vw]">
                <div className="text-[#262626] dark:text-white text-[14px] xl:text-[0.729vw] font-medium">
                  Mandated Reporter Training Completed
                </div>
                <div className="flex items-center custRadioButton">
                  <RadioButton
                    inputId="ingredient8"
                    name="pizza"
                    value="yes"
                    onChange={(e) => setIngredient(e.value)}
                    checked={ingredient === "yes"}
                  />
                  <label
                    htmlFor="ingredient8"
                    className="ml-[8px] xl:ml-[0.417vw] text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center custRadioButton">
                  <RadioButton
                    inputId="ingredient7"
                    name="pizza"
                    value="no"
                    onChange={(e) => setIngredient(e.value)}
                    checked={ingredient === "no"}
                  />
                  <label
                    htmlFor="ingredient7"
                    className="ml-[8px] xl:ml-[0.417vw] text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium"
                  >
                    No
                  </label>
                </div>
              </div>
              <div className="mt-[22px] xl:mt-[1.146vw] bg-[#FCF5F6] dark:bg-[#1C2026] rounded-[8px] xl:rounded-[0.417vw] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw]">
                <div className="popupForm inputlabel">
                  <form>
                    <div className="space-y-[20px] xl:space-y-[1.042vw]">
                      <div className="flex flex-col gap-[6px]">
                        <label htmlFor="degree">
                          Mandated Reporter Completion Date
                        </label>
                        <Calendar
                          value={date}
                          onChange={(e) => setDate(e.value)}
                          showIcon
                          placeholder="19/09/2020"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
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
