import React, { useState, useRef } from "react";
import { Noto_Serif_Georgian } from "@next/font/google";
import { useTheme } from "next-themes";
import Link from "next/link";
import { InputTextarea } from "primereact/inputtextarea";
import { ScrollPanel } from "primereact/scrollpanel";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const ChecksUnderstanding = () => {
  const [value, setValue] = useState("");
  const [framing, setFraming] = useState("");
  const [framingTwo, setFramingTwo] = useState("");
  const [framingThree, setFramingThree] = useState("");

  return (
    <div>
      <div className={myNotoSerifGeorgian.className}>
        <div className="text-[#262626] dark:text-[#FFF] text-[32px] xl:text-[1.667vw]">
          Checks for Understanding & Efficacy of your Plan
        </div>
        <div
          className="mt-[22px] xl:mt-[1.146vw] mb-[60px] xl:mb-[3.125vw] bg-[#fff] dark:bg-[#13161B] rounded-[8px]
         xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw] SidebarHeight"
        >
          <ScrollPanel style={{ width: "100%", height: "100%" }}>
            <div className="popupForm">
              <form>
                <div className="space-y-[20px] xl:space-y-[1.042vw] gap-[8px] xl:gap-[0.417vw]">
                  <div className="flex text-[16px] xl:text-[0.833vw]">
                    <div className="text-[#262626] dark:text-[#FFF] font-semibold">
                      Beginning of the Lesson :
                      <span className="text-[14px] xl:text-[0.729vw] text-[#888] dark:text-[#818181] font-normal">
                        What evidence will you collect at the start of the
                        lesson, before moving on, to get a sense of where
                        Candidate’s are? What will this evidence tell you? What
                        won't it tell you?
                      </span>
                    </div>
                  </div>
                  <div className="flex text-[12px] leading-5 xl:text-[0.625vw] text-[#888] dark:text-[#818181] font-normal">
                    *Consider checking for/tapping prior knowledge, as well as
                    effectiveness of framing, common understanding, and
                    scaffolding.
                  </div>
                  <div className="mt-[22px] xl:mt-[1.146vw] bg-[#FCF5F6] dark:bg-[#1C2026] rounded-[8px] xl:rounded-[0.417vw] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw]">
                    <div className="popupForm inputlabel">
                      <form>
                        <div className="space-y-[20px] xl:space-y-[1.042vw]">
                          <div className="flex flex-col gap-[6px]">
                            <div className="text-[14px] xl:text-[0.729vw] text-[#262626] dark:text-[#FFF] font-medium">
                              Notes
                            </div>
                            <div className="custTextArea">
                              <InputTextarea
                                placeholder="Write text here ..."
                                autoResize
                                value={framing}
                                onChange={(e) => setFraming(e.target.value)}
                                rows={6}
                                cols={30}
                                className="w-full"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="flex text-[16px] xl:text-[0.833vw]">
                    <div className="text-[#262626] dark:text-[#FFF] font-semibold">
                      Middle of the Lesson :
                      <span className="text-[14px] xl:text-[0.729vw] text-[#888] dark:text-[#818181] font-normal">
                        What evidence will you collect in the middle of the
                        lesson to see how Candidate’s are doing? What will this
                        evidence tell you? What won't it tell you? How will you
                        know if/what you need to reteach something?
                      </span>
                    </div>
                  </div>
                  <div className="flex text-[12px] xl:text-[0.625vw] text-[#888] dark:text-[#818181] font-normal">
                    *Consider when Candidate’s will have an opportunity to
                    practice and make visible their understanding as well as how
                    you'll see/hear that understanding
                  </div>
                  <div className="mt-[22px] xl:mt-[1.146vw] bg-[#FCF5F6] dark:bg-[#1C2026] rounded-[8px] xl:rounded-[0.417vw] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw]">
                    <div className="popupForm inputlabel">
                      <form>
                        <div className="space-y-[20px] xl:space-y-[1.042vw]">
                          <div className="flex flex-col gap-[6px]">
                            <div className="text-[14px] xl:text-[0.729vw] text-[#262626] dark:text-[#FFF] font-medium">
                              Notes
                            </div>
                            <div className="custTextArea">
                              <InputTextarea
                                placeholder="Write text here ..."
                                autoResize
                                value={framingTwo}
                                onChange={(e) => setFramingTwo(e.target.value)}
                                rows={6}
                                cols={30}
                                className="w-full"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="flex text-[16px] xl:text-[0.833vw]">
                    <div className="text-[#262626] dark:text-[#FFF] font-semibold">
                      End of the Lesson :
                      <span className="text-[14px] xl:text-[0.729vw] text-[#888] dark:text-[#818181] font-normal">
                        End of the Lesson : What evidence will you collect at
                        the end of the lesson to see how EACH Candidate’s has
                        progressed toward the objectives and purpose of the
                        lesson? What will this evidence tell you? What won't it
                        tell you? How will you know if/what you need to reteach
                        something?
                      </span>
                    </div>
                  </div>
                  <div className="flex text-[12px] xl:text-[0.625vw] text-[#888] dark:text-[#818181] font-normal">
                    *Consider what you can collect to inform your future plans
                    and teaching
                  </div>
                  <div className="mt-[22px] xl:mt-[1.146vw] bg-[#FCF5F6] dark:bg-[#1C2026] rounded-[8px] xl:rounded-[0.417vw] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw]">
                    <div className="popupForm inputlabel">
                      <form>
                        <div className="space-y-[20px] xl:space-y-[1.042vw]">
                          <div className="flex flex-col gap-[6px]">
                            <div className="text-[14px] xl:text-[0.729vw] text-[#262626] dark:text-[#FFF] font-medium">
                              Notes
                            </div>
                            <div className="custTextArea">
                              <InputTextarea
                                placeholder="Write text here ..."
                                autoResize
                                value={framingThree}
                                onChange={(e) =>
                                  setFramingThree(e.target.value)
                                }
                                rows={6}
                                cols={30}
                                className="w-full"
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
        <div className="mt-[40px] xl:mt-[2.083vw] lg:mt-[0] lg:absolute bottom-[-70px] left-0 right-0">
          <div className="flex items-center justify-between">
            <div className="col">
              <Link
                href="javascript:void(0)"
                className="flex items-center bg-white dark:bg-[#13161B] dark:text-[#AF1E27] dark:border-[#AF1E27] hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] opacity-30 transition ease-in-out delay-150"
              >
                <i className="mr-[8px] xl:mr-[0.417vw] cgupod-close-circle text-[20px] xl:text-[1.042vw]"></i>
                Cancel
              </Link>
            </div>
            <div className="col">
              <div className="flex gap-[8px] xl:gap-[0.417vw]">
                {" "}
                <Link
                href="javascript:void(0)"
                className="flex items-center bg-white dark:bg-[#13161B] dark:border-[#F5747C] dark:text-[#F5747C] hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] gap-[8px] xl:gap-[0.417vw]
                 xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px]
                 xl:py-[0.625vw] transition ease-in-out delay-150"
              >
                <i className="mr-[8px] xl:mr-[0.417vw] cgupod-print text-[18px] xl:text-[0.938vw]"></i>
                Print
              </Link>
                <Link
                  href="javascript:void(0)"
                  className="flex items-center bg-white dark:bg-[#13161B] dark:border-[#F5747C] dark:text-[#F5747C] hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] gap-[8px] xl:gap-[0.417vw]
                 xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px]
                  xl:py-[0.625vw] transition ease-in-out delay-150"
                >
                  <i className="mr-[8px] xl:mr-[0.417vw] cgupod-tick-circle text-[22px] xl:text-[1.146]"></i>
                  Submit
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
    </div>
  );
};

export default ChecksUnderstanding;
