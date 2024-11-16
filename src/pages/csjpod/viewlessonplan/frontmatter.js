import React, { useState, useRef } from "react";
import { Noto_Serif_Georgian } from "@next/font/google";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ScrollPanel } from "primereact/scrollpanel";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { RadioButton } from "primereact/radiobutton";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const FrontMatter = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [value, setValue] = useState("");
  const [code,setCode] = useState("");
  const [timing,setTiming] = useState("");
  const [content,setContent] = useState("");
  const [text,setText] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [date, setDate] = useState(null);

  const cities = [
    { name: "Ava Abad", code: "NY" },
    { name: "Alan", code: "RM" },
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
        <div className="mt-[22px] xl:mt-[1.146vw] mb-[60px] xl:mb-[3.125vw] bg-[#fff] dark:bg-[#13161B] rounded-[8px]
         xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw] SidebarHeight">
          <ScrollPanel style={{ width: "100%", height: "100%" }}>
            <div className="popupForm">
              <form>
                <div className="space-y-[20px] xl:space-y-[1.042vw]">
                  <div className="flex flex-col gap-[6px]">
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] dark:text-[#FFF] font-medium">
                      Candidate
                    </div>
                    <div className="custInput">
                      <Dropdown
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.value)}
                        options={cities}
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
                      Subject
                    </div>
                    <div className="custInput">
                      <Dropdown
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.value)}
                        options={SubjectList}
                        optionLabel="name"
                        placeholder="--Select here --"
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
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.value)}
                        options={GradeList}
                        optionLabel="name"
                        placeholder="--Select here --"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] dark:text-[#FFF] font-medium">
                      {" "}
                      Timing: length (~30-90) & # in unit
                    </div>
                    <div className="custInput">
                      <InputText 
                        placeholder="Write text here ..."
                        value={timing}
                        onChange={(e) => setTiming(e.target.value)}
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="flex leading-5">
                    <span className="text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#FFF] font-semibold">
                      Unit Topic :{" "}
                    </span>
                    <span className="text-[16px] xl:text-[0.833vw] text-[#888] dark:text-[#818181] font-normal">
                      A unit is made up of ~5-10 lessons. What is your unit
                      about?
                    </span>
                  </div>
                  <div className="mt-[22px] xl:mt-[1.146vw] bg-[#FCF5F6] dark:bg-[#1C2026] rounded-[8px] xl:rounded-[0.417vw] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw]">
                    <div className="popupForm inputlabel">
                      <form>
                        <div className="space-y-[20px] xl:space-y-[1.042vw]">
                          <div className="flex flex-col gap-[6px]">
                            <div className="text-[14px] xl:text-[0.729vw] text-[#262626] dark:text-[#FFF] font-medium">
                              Notes
                            </div>
                            <div className="custInput">
                              <InputTextarea
                                placeholder="Write text here ..."
                                autoResize
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                className="w-full"
                                rows={6}
                                cols={30}
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="flex leading-5 text-[16px] xl:text-[0.833vw]">
                    <div className="text-[#262626] dark:text-[#FFF] font-semibold">
                      Unit Purpose :
                      <span className="text-[#888] dark:text-[#818181] font-normal">
                        What are the big ideas, essential question(s), and/or
                        goals of your unit?
                      </span>
                    </div>
                  </div>
                  <div className="mt-[22px] xl:mt-[1.146vw] bg-[#FCF5F6] dark:bg-[#1C2026] rounded-[8px] xl:rounded-[0.417vw] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw]">
                    <div className="popupForm inputlabel">
                      <form>
                        <div className="space-y-[20px] xl:space-y-[1.042vw]">
                          <div className="flex flex-col gap-[6px]">
                            <div className="text-[14px] xl:text-[0.729vw] text-[#262626] dark:text-[#FFF] font-medium">
                              Notes
                            </div>
                            <div className="custInput">
                              <InputTextarea
                                placeholder="Write text here ..."
                                autoResize
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                className="w-full"
                                rows={6}
                                cols={30}
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="flex leading-5 text-[16px] xl:text-[0.833vw]">
                    <div className="text-[#262626] dark:text-[#FFF] font-semibold">
                      Lesson Purpose :
                      <span className="text-[#888] dark:text-[#818181] font-normal">
                        How will this lesson help Candidate move forward
                        successfully and meaningfully in the unit, year and
                        life?
                      </span>
                    </div>
                  </div>
                  <div className="mt-[22px] xl:mt-[1.146vw] bg-[#FCF5F6] dark:bg-[#1C2026] rounded-[8px] xl:rounded-[0.417vw] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw]">
                    <div className="popupForm inputlabel">
                      <form>
                        <div className="space-y-[20px] xl:space-y-[1.042vw]">
                          <div className="flex flex-col gap-[6px]">
                            <div className="text-[14px] xl:text-[0.729vw] text-[#262626] dark:text-[#FFF] font-medium">
                              Notes
                            </div>
                            <div className="custInput ">
                              <InputTextarea
                                placeholder="Write text here ..."
                                autoResize
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                className="w-full"
                                rows={6}
                                cols={30}
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] dark:text-[#FFF] font-medium">
                      Content Standard(s)
                    </div>
                    <div className="custInput">
                      <InputText 
                        placeholder="Type here ..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] dark:text-[#FFF] font-medium">
                      Code
                    </div>
                    <div className="custInput">
                      <InputNumber 
                        placeholder="Type here ..."
                        value={code}
                        className="w-full"
                        onChange={(e) => setCode(e.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] dark:text-[#FFF] font-medium">
                      Text
                    </div>
                    <div className="custInput">
                      <InputText 
                        placeholder="Type here ..."
                        value={text}
                        className="w-full"
                        onChange={(e) => setText(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex leading-5">
                    <div className="text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#FFF] font-semibold">
                      Content Objective(s){" "}
                      <span className="text-[16px] xl:text-[0.833vw] text-[#888] dark:text-[#818181] font-normal">
                        : [knowledge and/or skills Candidates will show by the
                        end of the lesson] Optimal Template : Candidates will be
                        able to (accomplish outcome X ) by (using method Y ) so
                        that (they will meet Z Social justice objective).
                      </span>
                    </div>
                  </div>
                  <div className="mt-[22px] xl:mt-[1.146vw] bg-[#FCF5F6] dark:bg-[#1C2026] rounded-[8px] xl:rounded-[0.417vw] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw]">
                    <div className="popupForm inputlabel">
                      <form>
                        <div className="space-y-[20px] xl:space-y-[1.042vw]">
                          <div className="flex flex-col gap-[6px]">
                            <div className="text-[14px] xl:text-[0.729vw] text-[#262626] dark:text-[#FFF] font-medium">
                              Notes
                            </div>
                            <div className="custInput">
                              <InputTextarea
                                placeholder="Write text here ..."
                                autoResize
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                className="w-full"
                                rows={6}
                                cols={30}
                              />
                            </div>
                          </div>
                        </div>
                      </form>
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
          <div className="col">
            <Link
              href="javascript:void(0)"
              className="flex items-center bg-white dark:bg-[#13161B] hover:bg-[#AF1E27] border border-[#AF1E27] dark:border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] dark:text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] opacity-30 transition ease-in-out delay-150"
            >
              <i className="mr-[8px] xl:mr-[0.417vw] cgupod-close-circle text-[22px] xl:text-[1.146]"></i>
              Cancel
            </Link>
          </div>
          <div className="col">
            <div className="flex gap-[8px] xl:gap-[0.417vw]">
              {" "}
              <Link
                href="javascript:void(0)"
                className="flex items-center bg-white dark:bg-[#13161B] hover:bg-[#AF1E27] border border-[#AF1E27] dark:border-[#F5747C] rounded-[8px] gap-[8px] xl:gap-[0.417vw]
                 xl:rounded-[0.417vw] text-[#AF1E27] dark:text-[#F5747C] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px]
                  xl:py-[0.625vw] transition ease-in-out delay-150"
              >
                <i className="mr-[8px] xl:mr-[0.417vw] cgupod-save-file text-[22px] xl:text-[1.146]"></i>
                Save
              </Link>
              <Link
                href="javascript:void(0)"
                className="flex items-center bg-white dark:bg-[#13161B] hover:bg-[#AF1E27] border border-[#AF1E27] dark:border-[#F5747C] rounded-[8px] gap-[8px] xl:gap-[0.417vw]
                 xl:rounded-[0.417vw] text-[#AF1E27] dark:text-[#F5747C] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px]
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

export default FrontMatter;
