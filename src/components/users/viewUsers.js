import React, { useState, useRef } from "react";
import { Noto_Serif_Georgian } from "@next/font/google";
import Link from "next/link";
import { ScrollPanel } from "primereact/scrollpanel";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import Image from "next/image";
const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function ViewUser() {
  const [date, setDate] = useState(null);

  return (
    <>
      <div className="">
        {/* row */}
        <div className={myNotoSerifGeorgian.className}>
          <div className="text-[#262626] text-[32px] xl:text-[1.667vw] dark:text-[#fff]">
            View User
          </div>
        </div>
        {/* row */}
        <div className="bg-white rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw] mt-[32px] xl:mt-[1.667vw] PersonalDetails dark:bg-[#13161B] ">
          <ScrollPanel style={{ width: "100%", height: "100%" }}>
            <div className="popupForm inputlabel">
              <form>
                <div>
                  <div className="relative">
                    <Image
                      src="/assets/images/Avatar.png"
                      width={150}
                      height={160}
                      className="xl:w-[5.854vw] xl:h-[5.854vw]"
                      alt="profilePicture"
                    />
                  </div>
                  <div className="text-[#262626] text-[28px] xl:text-[1.563vw] font-medium xl:mt-[0.888vw] mt-[24px] dark:text-[#fff]">
                    Nathan Roberts
                  </div>
                  <div className="text-[#888888] text-[16px] xl:text-[0.938vw] font-normal dark:text-[#818181]">
                    Principal
                  </div>
                </div>
                <div className="space-y-[20px] xl:space-y-[1.042vw] xl:mt-[1.042vw] mt-[20px]">
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 xl:gap-[1.67vw] gap-y-4 xl:gap-y-[0.689vw]">
                    <div className="custInput">
                      <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 dark:text-[#fff]">
                        DOB
                      </label>
                      <Calendar
                        value={date}
                        onChange={(e) => setDate(e.value)}
                        showIcon
                        placeholder="19/09/2020"
                        className="w-full dark:placeholder:text-[#818181] dark:bg-[#374151]"
                      />
                    </div>
                    <div className="custInput">
                      <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 dark:text-[#fff]">
                        Gender
                      </label>
                      <InputText
                        id="gender"
                        aria-describedby="gender"
                        placeholder="Male"
                        className="w-full"
                      />
                    </div>
                    <div className="custInput">
                      <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 dark:text-[#fff]">
                        Created Date
                      </label>
                      <Calendar
                        value={date}
                        onChange={(e) => setDate(e.value)}
                        showIcon
                        placeholder="24/04/2023"
                        className="w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-[6px] w-full">
                      <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 dark:text-[#fff]">
                        Group
                      </label>
                      <InputText
                        id="ssn"
                        aria-describedby="ssn"
                        placeholder="Principal ,User"
                        className="w-full"
                      />
                    </div>
                    <div className="custInput">
                      <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 dark:text-[#fff]">
                        Phone Number
                      </label>
                      <InputText
                        id="phone"
                        aria-describedby="phone"
                        placeholder="(505) 555-0123"
                        className="w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-[6px] w-full">
                      <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 dark:text-[#fff]">
                        Zip Code
                      </label>
                      <InputText
                        id="zipcode"
                        aria-describedby="zipcode"
                        placeholder="2464"
                        className="w-full"
                      />
                    </div>
                    <div className="custInput">
                      <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 dark:text-[#fff]">
                        Address 1
                      </label>
                      <InputText
                        id="address1"
                        aria-describedby="address1"
                        placeholder="2464 Ash Dr.San Jose,Sounth Dakota 83475"
                        className="w-full"
                      />
                    </div>
                    <div className="custInput">
                      <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 dark:text-[#fff]">
                        Address 2
                      </label>
                      <InputText
                        id="address2"
                        aria-describedby="address2"
                        placeholder="2464 Ash Dr.San Jose,Sounth Dakota 83475"
                        className="w-full"
                      />
                    </div>
                    <div className="custInput">
                      <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 dark:text-[#fff]">
                        City
                      </label>
                      <InputText
                        id="city"
                        aria-describedby="city"
                        placeholder="2464 Ash Dr.San Jose,Sounth Dakota 83475"
                        className="w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-[6px] w-full">
                      <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 dark:text-[#fff]">
                        Country
                      </label>
                      <InputText
                        id="country"
                        aria-describedby="country"
                        placeholder="2464 Ash Dr.San Jose,Sounth Dakota 83475"
                        className="w-full"
                      />
                    </div>
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
                href={"javascript:void(0)"}
                className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white 
                text-[16px] xl:text-[0.833vw] px-[10px] xl:px-[0.625vw] py-[10px] xl:py-[0.421vw] transition ease-in-out delay-150 dark:border-[#F5747C] dark:bg-[#13161B] dark:text-[#F5747C]"
               >
                <i className="mr-[8px] xl:mr-[0.417vw] cgupod-close-circle text-[22px] xl:text-[1.146] dark:text-[#F5747C]"></i>
                Cancel
              </Link>
            </div>
            <div className="col">
              <Link
                  href={"javascript:void(0)"} 
                  // onClick={() => setSuccessfullyUserImportedpopup(true)}
                className="flex items-center bg-[#AF1E27] hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#fff] hover:text-white text-[16px] xl:text-[0.833vw] px-[10px] xl:px-[0.625vw] py-[10px] xl:py-[0.421vw] transition ease-in-out delay-150"
              >
                <i className="mr-[8px] xl:mr-[0.417vw] cgupod-edit text-[18px] xl:text-[1.146] dark:text-[#fff]"></i>
                Edit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
