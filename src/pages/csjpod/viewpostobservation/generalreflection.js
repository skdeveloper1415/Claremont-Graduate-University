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

const GeneralReflection = () => {
    const [checked, setChecked] = useState(false);
    const [value, setValue] = useState('');
  return (
    <>
      <div className={myNotoSerifGeorgian.className}>
        <div className="text-[#262626] text-[32px] xl:text-[1.667vw]">
            General Reflection
        </div>
      </div>

      <div
        className="bg-white rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw] mt-[32px] xl:mt-[1.667vw] postobview"
      >
        <ScrollPanel style={{ width: "100%", height: "100%" }}>
            <div className="xl:mb-[0.833vw] mb-[16px]">
                <div className="text-[16px] xl:text-[0.833vw] text-[#888888] font-normal mb-[20px] xl:mb-[1.042vw]">
                What in the lesson went well, overall? What evidence supports this?
                </div>
                <div className="bg-[#FCF5F6] py-[16px] xl:py-[0.833vw] px-[20px] xl:px-[1.042vw]">
                    <div className="mb-[20px] xl:mb-[1.042vw]">
                        <div className="text-[14px] xl:text-[0.729vw] text-[#262626] font-medium mb-[4px]">
                        Candidate Input
                        </div>
                        <div className="custTextArea">
                        <InputTextarea 
                            value={value} 
                            onChange={(e) => setValue(e.target.value)} 
                            rows={4} 
                            autoResize={true}
                            placeholder="Write text here ..."
                            className="w-full"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="text-[14px] xl:text-[0.729vw] text-[#262626] font-medium mb-[4px]">
                        Clinical Faculty Advisor Input
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
                        <div className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB] font-medium">(as summarized by candidate to make  candidate's understanding visible)</div>
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

export default GeneralReflection;
