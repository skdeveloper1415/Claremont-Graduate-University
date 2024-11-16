import React, { useState, useRef } from "react";
import { Noto_Serif_Georgian } from "@next/font/google";
import Link from "next/link";
import { ScrollPanel } from "primereact/scrollpanel";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Index() {
  const [selectedCity, setSelectedCity] = useState(null);
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
          Personal Details
        </div>
      </div>
      {/* row */}
      <div className="bg-white dark:bg-[#13161B] rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw] mt-[32px] xl:mt-[1.667vw] PersonalDetails">
        <ScrollPanel style={{ width: "100%", height: "100%" }}>
          <div className="popupForm inputlabel">
            <form>
              <div className="space-y-[20px] xl:space-y-[1.042vw]">
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="first">First Name</label>
                  <InputText
                    id="first"
                    aria-describedby="first"
                    placeholder="Marvin"
                  />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="middle">Middle Name</label>
                  <InputText
                    id="middle"
                    aria-describedby="middle"
                    placeholder="-"
                  />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="last">Last Name</label>
                  <InputText
                    id="last"
                    aria-describedby="last"
                    placeholder="McKinney"
                  />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="ssn">SSN</label>
                  <InputText id="ssn" aria-describedby="ssn" placeholder="-" />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="dob">DOB</label>
                  <Calendar
                    value={date}
                    onChange={(e) => setDate(e.value)}
                    showIcon
                    placeholder="19/09/2020"
                  />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="gender">Gender</label>
                  <InputText
                    id="gender"
                    aria-describedby="gender"
                    placeholder="Male"
                  />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="orient">Sex Orient</label>
                  <InputText
                    id="orient"
                    aria-describedby="orient"
                    placeholder="-"
                  />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="candidate">Candidate ID</label>
                  <InputText
                    id="candidate"
                    aria-describedby="candidate"
                    placeholder="487441"
                  />
                </div>
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
