import React, { useState, useRef } from "react";
import { Noto_Serif_Georgian } from "@next/font/google";
import { useTheme } from "next-themes";
import Link from "next/link";
import { InputTextarea } from "primereact/inputtextarea";
import { ScrollPanel } from "primereact/scrollpanel";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const ReflectionData = () => {
  const [value, setValue] = useState("");
  const [code,setCode] = useState("");
  const [timing,setTiming] = useState("");
  const [content,setContent] = useState("");
  const [text,setText] = useState("");

  return (
    <div>
      <div className={myNotoSerifGeorgian.className}>
        <div className="text-[#262626] dark:text-[#FFF] text-[32px] xl:text-[1.667vw]">
          Reflection to Support Planning
        </div>
        <div className="mt-[22px] xl:mt-[1.146vw] mb-[60px] xl:mb-[3.125vw] bg-[#fff] dark:bg-[#13161B] rounded-[8px]
         xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw] SidebarHeight">
          <ScrollPanel style={{ width: "100%", height: "100%" }}>
            <div className="popupForm">
              <form>
                <div className="space-y-[20px] xl:space-y-[1.042vw]">
                  <div className="flex leading-5 text-[16px] xl:text-[0.833vw]">
                    <div className="text-[#262626] dark:text-[#FFF] font-semibold">
                      Reflection :
                      <span className="text-[#888] dark:text-[#818181] font-normal">
                        How have you approached this lesson plan differently
                        based on past feedback from class, mentors, candidates,
                        readings, etc.?
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
                            <div className="custTextArea">
                              <InputTextarea
                                placeholder="Write text here ..."
                                autoResize
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
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
                  <div className="flex leading-5 text-[16px] xl:text-[0.833vw]">
                    <div className="text-[#262626] dark:text-[#FFF] font-semibold">
                      Prior Knowledge :
                      <span className="text-[#888] dark:text-[#818181] font-normal">
                        What do your candidates already know that you can build
                        from in this lesson? And/or what do you need to learn if
                        your candidates know?
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
                            <div className="custTextArea">
                              <InputTextarea
                                placeholder="Write text here ..."
                                autoResize
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
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
                  <div className="flex leading-5 text-[16px] xl:text-[0.833vw]">
                    <div className="text-[#262626] dark:text-[#FFF] font-semibold">
                      Rigor & Purpose :
                      <span className="text-[#888] dark:text-[#818181] font-normal">
                        What are the most challenging and rewarding parts of the
                        content or skills that candidates are working on in this
                        lesson? Why?
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
                            <div className="custTextArea">
                              <InputTextarea
                                placeholder="Write text here ..."
                                autoResize
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
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
                  <div className="flex leading-5 text-[16px] xl:text-[0.833vw]">
                    <div className="text-[#262626] dark:text-[#FFF] font-semibold">
                      Anticipating Challenges :
                      <span className="text-[#888] dark:-=text[#818181] font-normal">
                        What might be barriers to specific or all candidates
                        fulfilling the purpose of the lesson? How can you
                        differentiate and/or what tools/strategies can you
                        include in your lesson to help mitigate this barriers?
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
                            <div className="custTextArea">
                              <InputTextarea
                                placeholder="Write text here ..."
                                autoResize
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
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
                  <div className="flex leading-5 text-[16px] xl:text-[0.833vw]">
                    <div className="text-[#262626] dark:text-[#FFF] font-semibold">
                      Leveling Up :
                      <span className="text-[#888] dark:text-[#818181] font-normal">
                        What do you want candidates to know, do, or understand
                        by the end of the lesson that they didn't know or
                        couldn't do before it?
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
                            <div className="custTextArea">
                              <InputTextarea
                                placeholder="Write text here ..."
                                autoResize
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
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
                  <div className="flex leading-5 text-[16px] xl:text-[0.833vw]">
                    <div className="text-[#262626] dark:text-[#FFF] font-semibold">
                      Language Rich :
                      <span className="text-[#888] dark:text-[#818181] font-normal">
                        What Language do you want to hear candidates using
                        during this lesson ?
                      </span>
                    </div>
                  </div>
                  <div className="flex leading-5 text-[12px] xl:text-[0.625vw] text-[#888] dark:text-[#818181] font-normal">
                    Optional Template : Template : candidates will (active verb)
                    using (langauge target).
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
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
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
                  <div className="flex flex-col gap-[6px]">
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] dark:text-[#FFF] font-medium">
                    ELD Standards
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
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626]  dark:text-[#FFF] font-medium">
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
                <i className="mr-[8px] xl:mr-[0.417vw] cgupod-close-circle text-[22px] xl:text-[1.146]"></i>
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
    </div>
  );
};

export default ReflectionData;
