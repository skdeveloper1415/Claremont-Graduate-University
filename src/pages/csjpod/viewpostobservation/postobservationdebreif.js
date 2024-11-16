import React, { useState, useRef } from "react";
import { Noto_Serif_Georgian } from "@next/font/google";
import Link from "next/link";
import { ScrollPanel } from "primereact/scrollpanel";
import { Checkbox } from "primereact/checkbox";
import { InputTextarea } from "primereact/inputtextarea";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const PostObservationDebreif = () => {
    const [checked, setChecked] = useState(false);
    const [value, setValue] = useState('');
  return (
    <>
      <div className={myNotoSerifGeorgian.className}>
        <div className="text-[#262626] text-[32px] xl:text-[1.667vw]">
            Post-observation Debrief
        </div>
      </div>

      <div
        className="bg-white rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw] mt-[32px] xl:mt-[1.667vw] postobview"
      >
        <ScrollPanel style={{ width: "100%", height: "100%" }}>
            <div className="xl:mb-[0.833vw] mb-[16px]">
                <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-semibold">
                Criteria 1
                </div>
                <div className="bg-[#FCF5F6] py-[16px] xl:py-[0.833vw] px-[20px] xl:px-[1.042vw]">
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] font-medium mb-[20px] xl:mb-[1.042vw]">
                        Preparation for Observation & Review of Core Responsibilites
                    </div>
                    <div className="flex 2xl:items-center loginInput popupcheckboxes mb-[20px] xl:mb-[1.042vw]">
                        <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox> 
                        <label htmlFor="ingredient1" className="ml-[6px] text-[#4B586E] text-[14px] xl:text-[0.729vw] font-medium">Preparation for Observation & Review of Core Responsibilites</label>
                    </div>
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] font-medium mb-[4px]">
                        Mentor Comments
                    </div>
                    <div className="custTextArea">
                    <InputTextarea 
                        value={value} 
                        onChange={(e) => setValue(e.target.value)} 
                        rows={5} 
                        autoResize={true}
                        placeholder="Write text here ..."
                        className="w-full"
                        />
                    </div>
                </div>
            </div>

            <div className="xl:mb-[0.833vw] mb-[16px]">
                <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-semibold">
                Criteria 2
                </div>
                <div className="bg-[#FCF5F6] py-[16px] xl:py-[0.833vw] px-[20px] xl:px-[1.042vw]">
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] font-medium mb-[20px] xl:mb-[1.042vw]">
                    Preparation for Observation & Review of Core Responsibilites
                    </div>
                    <div className="flex loginInput popupcheckboxes mb-[20px] xl:mb-[1.042vw]">
                        <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox> 
                        <label htmlFor="ingredient1" className="ml-[6px] text-[#4B586E] text-[14px] xl:text-[0.729vw] font-medium">Lesson materials and logistics were prepped in advance and ready at the beginning of the lesson</label>
                    </div>
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] font-medium mb-[4px]">
                        Mentor Comments
                    </div>
                    <div className="custTextArea">
                    <InputTextarea 
                        value={value} 
                        onChange={(e) => setValue(e.target.value)} 
                        rows={5} 
                        autoResize={true}
                        placeholder="Write text here ..."
                        className="w-full"
                        />
                    </div>
                </div>
            </div>

            <div className="xl:mb-[0.833vw] mb-[16px]">
                <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-semibold">
                Criteria 3
                </div>
                <div className="bg-[#FCF5F6] py-[16px] xl:py-[0.833vw] px-[20px] xl:px-[1.042vw]">
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] font-medium mb-[20px] xl:mb-[1.042vw]">
                    Preparation for Observation & Review of Core Responsibilites
                    </div>
                    <div className="flex  loginInput popupcheckboxes mb-[20px] xl:mb-[1.042vw]">
                        <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox> 
                        <label htmlFor="ingredient1" className="ml-[6px] text-[#4B586E] text-[14px] xl:text-[0.729vw] font-medium">Pre-observation document was completed as a collaborative conversation with Clinical Faculty Advisor prior to lesson execution</label>
                    </div>
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] font-medium mb-[4px]">
                        Mentor Comments
                    </div>
                    <div className="custTextArea">
                    <InputTextarea 
                        value={value} 
                        onChange={(e) => setValue(e.target.value)} 
                        rows={5} 
                        autoResize={true}
                        placeholder="Write text here ..."
                        className="w-full"
                        />
                    </div>
                </div>
            </div>

            <div className="xl:mb-[0.833vw] mb-[16px]">
                <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-semibold">
                Criteria 4
                </div>
                <div className="bg-[#FCF5F6] py-[16px] xl:py-[0.833vw] px-[20px] xl:px-[1.042vw]">
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] font-medium mb-[20px] xl:mb-[1.042vw]">
                        Preparation for Observation & Review of Core Responsibilites
                    </div>
                    <div className="flex 2xl:items-center loginInput popupcheckboxes mb-[20px] xl:mb-[1.042vw]">
                        <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox> 
                        <label htmlFor="ingredient1" className="ml-[6px] text-[#4B586E] text-[14px] xl:text-[0.729vw] font-medium">Evidence of ongoing reflection</label>
                    </div>
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] font-medium mb-[4px]">
                        Mentor Comments
                    </div>
                    <div className="custTextArea">
                    <InputTextarea 
                        value={value} 
                        onChange={(e) => setValue(e.target.value)} 
                        rows={5} 
                        autoResize={true}
                        placeholder="Write text here ..."
                        className="w-full"
                        />
                    </div>
                </div>
            </div>

            <div className="xl:mb-[0.833vw] mb-[16px]">
                <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-semibold">
                Criteria 5
                </div>
                <div className="bg-[#FCF5F6] py-[16px] xl:py-[0.833vw] px-[20px] xl:px-[1.042vw]">
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] font-medium mb-[20px] xl:mb-[1.042vw]">
                        Preparation for Observation & Review of Core Responsibilites
                    </div>
                    <div className="flex 2xl:items-center loginInput popupcheckboxes mb-[20px] xl:mb-[1.042vw]">
                        <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox> 
                        <label htmlFor="ingredient1" className="ml-[6px] text-[#4B586E] text-[14px] xl:text-[0.729vw] font-medium">Evidence of ongoing reflection</label>
                    </div>
                    <div className="text-[14px] xl:text-[0.729vw] text-[#262626] font-medium mb-[4px]">
                        Mentor Comments
                    </div>
                    <div className="custTextArea">
                    <InputTextarea 
                        value={value} 
                        onChange={(e) => setValue(e.target.value)} 
                        rows={5} 
                        autoResize={true}
                        placeholder="Write text here ..."
                        className="w-full"
                        />
                    </div>
                </div>
            </div>

        </ScrollPanel>
        </div>
        <div className="mt-[32px] lg:mt-[0] lg:absolute bottom-[-70px] left-0 right-0">
        <div className="flex items-center justify-between">
          <div className="col">
            <Link
              href={""}
              className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] opacity-30 transition ease-in-out delay-150"
            >
              <i className="mr-[8px] xl:mr-[0.417vw] cgupod-close-circle text-[22px] xl:text-[1.146vw]"></i>
              Cancel
            </Link>
          </div>
          <div className="flex gap-1">
            <Link
              href={""}
              className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] transition ease-in-out delay-150"
            >
              <i className="mr-[8px] xl:mr-[0.417vw] cgupod-save-file text-[22px] xl:text-[1.146vw]"></i>
              Save
            </Link>
            <Link
              href={""}
              className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] transition ease-in-out delay-150"
            >
              <i className="mr-[8px] xl:mr-[0.417vw] cgupod-tick-circle text-[22px] xl:text-[1.146vw]"></i>
              Submit
            </Link>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default PostObservationDebreif;
