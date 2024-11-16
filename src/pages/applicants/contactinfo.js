import React, { useState, useRef } from "react";
import Link from "next/link";
import { ScrollPanel } from "primereact/scrollpanel";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { RadioButton } from "primereact/radiobutton";
import { Calendar } from "primereact/calendar";
import { Noto_Serif_Georgian } from "@next/font/google";
import { InputNumber } from "primereact/inputnumber";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const ContactInfo = () => {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div>
      <div>
        <div className={myNotoSerifGeorgian.className}>
          <div className="text-[#262626] dark:text-white text-[32px] xl:text-[1.667vw]">
            Contact Information
          </div>
        </div>
        <div
          className="bg-white dark:bg-[#13161B] rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px]
         xl:py-[1.042vw] mt-[32px] xl:mt-[1.667vw] PersonalDetails"
        >
          <ScrollPanel style={{ width: "100%", height: "100%" }}>
            <div className="popupForm inputlabel">
              <form>
                <div className="space-y-[20px] xl:space-y-[1.042vw] custInput">
                  <div className="flex flex-col gap-[6px]">
                    <label htmlFor="first">Name</label>
                    <InputText
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      id="first"
                      aria-describedby="first"
                      placeholder="Type Here"
                    />
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <label htmlFor="contactnumber">Contact Number</label>
                    <InputNumber
                      value={contactNumber}
                      onValueChange={(e) => setContactNumber(e.value)}
                      placeholder="Type Here"
                    />
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <label htmlFor="contactnumber">Address</label>
                    <div className="custTextArea custInput">
                      <InputTextarea
                        placeholder="Write text here ..."
                        autoResize
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        rows={6}
                        cols={30}
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
      </div>
    </div>
  );
};

export default ContactInfo;
