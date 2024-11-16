import React, { useState, useRef } from "react";
import { Noto_Serif_Georgian } from "@next/font/google";
import Link from "next/link";
import { ScrollPanel } from "primereact/scrollpanel";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import Viewnotestable from "./viewnotestable";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Index() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [date, setDate] = useState(null);
  const [value, setValue] = useState("");
  const [isModal, setIsModal] = useState(false);
  

  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  return (
    <>
    <div className={`${isModal && "true"}`}>
      <div className="notes">
        {/* row */}
        <div className={myNotoSerifGeorgian.className}>
          <div className="text-[#262626] dark:text-[#FFFFFF] text-[32px] xl:text-[1.667vw]">
            Notes
          </div>
        </div>
        {/* row */}
        <div className="bg-white dark:bg-[#13161B] rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw] mt-[32px] xl:mt-[1.667vw] PersonalDetails">
          <ScrollPanel style={{ width: "100%", height: "100%" }}>
            {/* row */}
            <div className="col">
              <div className="popupForm inputlabel">
                <form>
                  <div className="space-y-[20px] xl:space-y-[1.042vw]">
                    <div className="flex flex-col gap-[6px]">
                      <label htmlFor="candidate">Type of Note</label>
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
                      <label htmlFor="interviewscore">Text Entry Note</label>
                      <InputTextarea
                        placeholder="Write text here ..."
                        autoResize
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        rows={5}
                        cols={30}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </ScrollPanel>
        </div>
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
            <div className="col flex items-center space-x-[8px] xl:space-x-[0.417vw]">
              <Link
                href={""}
                className="flex items-center bg-white hover:bg-[#AF1E27] dark:bg-[#13161B] activeBg border border-[#AF1E27] dark:border-[#F5747C] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white dark:text-[#F5747C] text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] transition ease-in-out delay-150"
                onClick={() => setIsModal(!isModal)}
              >
                <i className="mr-[8px] xl:mr-[0.417vw] cgupod-document-text text-[22px] xl:text-[1.146]"></i>
                View Notes
              </Link>
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

       
     
      <div className="view-notes">
        {/* row */}
        <div className={myNotoSerifGeorgian.className}>
          <div className="text-[#262626] dark:text-white text-[32px] xl:text-[1.667vw]">
            View Notes
          </div>
        </div>
        {/* row */}
        <div className="bg-white dark:bg-[#13161B] rounded-[8px] xl:rounded-[0.417vw] mt-[32px] xl:mt-[1.667vw] PersonalDetails">
          <ScrollPanel style={{ width: "100%", height: "100%" }}>
            {/* row */}
            <Viewnotestable />
          </ScrollPanel>
        </div>
      </div>
      </div>
    </>
  );
}
