import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { Noto_Serif_Georgian } from "@next/font/google";
import { ScrollPanel } from "primereact/scrollpanel";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const ContactPage = () => {
  const [value4, setValue4] = useState([]);
  const [alternate, setAlternate] = useState([]);
  const [insurance, setInsurance] = useState([]);
  const [member, setMember] = useState([]);
  const [hospital, setHospital] = useState([]);
  const [physician, setPhysician] = useState([]);
  const [allergies, setAllergies] = useState([]);
  const [relationship, setRelationship] = useState("");
  const [contactName, setContactName] = useState("");

  return (
    <div>
      <div className={myNotoSerifGeorgian.className}>
        <div className="text-[#262626] text-[32px] xl:text-[1.667vw] mb-[20px] xl:mb[1.67vw]">
          Contact
        </div>
      </div>
      {/* row */}
      <div className="SidebarHeight">
        <ScrollPanel style={{ width: "100%", height: "100%" }}>
          <div
            className="bg-white rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw]
       border"
          >
            <div className="grid gap-[24px] xl:gap-[1.250vw]">
              <div className="flex justify-between">
                <span className="text-[18px] xl:text-[0.938vw] text-[#262626] font-medium">
                  {" "}
                  Contact information
                </span>
                <span className="text-[#AF1E27] text-[14px] xl:text-[0.729vw] font-normal">
                  Add Address
                </span>
              </div>
              <div className="flex flex-col gap-[20px] xl:gap-[1.042vw]">
                <div className="w-[50%] bg-[#FCF5F6] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw] grid gap-[20px] xl:gap-[1.042vw]">
                  <div className="flex justify-between items-center">
                    <span className="text-[18px] xl:text-[0.938vw] text-[#262626] font-medium">
                      Address 01
                    </span>
                    <div className="px-[16px] xl:px-[0.833vw] py-[10px] xl:py-[0.521vw] bg-white flex gap-[8px] xl:gap-[0.417vw] rounded-lg">
                      <i className="cgupod-profile-remove"></i>
                      <div className="text-[14px] xl:text-[0.729vw]">
                        Remove
                      </div>
                    </div>
                  </div>
                  <div>
                    <Image
                      src={"/assets/images/svg/map.svg"}
                      alt="Student Detail"
                      width={473}
                      height={162}
                    />
                  </div>
                  <div className="text-[18px] xl:text-[0.938vw] text-[#262626] font-medium">
                    3891 Ranchview Dr. Richardson, California 62639
                  </div>
                  <div className="flex justify-between gap-[16px] xl:gap-[0.833vw]">
                    <div className="flex flex-col gap-[8px] xl:gap-[0.417vw]">
                      <span className="xl:text-[0.833vw] text-[16px] font-normal text-[#888]">
                        Mobile
                      </span>
                      <span className="text-[18px] xl:text-[0.938vw] text-[#262626] font-medium">
                        (702) 555-3221
                      </span>
                    </div>
                    <div className="flex flex-col gap-[8px] xl:gap-[0.417vw]">
                      <span className="xl:text-[0.833vw] text-[16px] font-normal text-[#888]">
                        Email
                      </span>
                      <span className="text-[18px] xl:text-[0.938vw] text-[#262626] font-medium">
                        student@cgu.edu
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid">
                <span className="text-[18px] xl:text-[0.938vw] text-[#262626] font-medium">
                  {" "}
                  Emergency Contact information
                </span>
                <div className="bg-[#FCF5F6] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw] grid gap-[20px] xl:gap-[1.042vw] rounded">
                  <div className="grid grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-[16px] xl:gap-[0.833vw]">
                    <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                      <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                        Name
                      </span>
                      <div className="custInput ">
                        <InputText
                          placeholder="Name"
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid #EAE0E0",
                            borderRadius: "8px",
                            fontSize: "0.729vw",
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                      <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                        Relationship
                      </span>
                      <div className=" custInput">
                        <InputText
                          placeholder="Relationship"
                          value={relationship}
                          onChange={(e) => setRelationship(e.target.value)}
                          className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid #EAE0E0",
                            borderRadius: "8px",
                            fontSize: "0.729vw",
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                      <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                        Phone
                      </span>
                      <div className="custInput">
                        <InputNumber
                          placeholder="Phone"
                          value={value4}
                          onValueChange={(e) => setValue4(e.value)}
                          className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid #EAE0E0",
                            borderRadius: "8px",
                            fontSize: "0.729vw",
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                      <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                        Alternate Phone
                      </span>
                      <div className="custInput">
                        <InputNumber
                          placeholder="Alternate Phone"
                          value={alternate}
                          onValueChange={(e) => setAlternate(e.value)}
                          className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid #EAE0E0",
                            borderRadius: "8px",
                            fontSize: "0.729vw",
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                      <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                        Insurance Provider
                      </span>
                      <div className="custm-filterserach">
                        <InputText
                          placeholder="Insurance Provider"
                          value={insurance}
                          onChange={(e) => setInsurance(e.target.value)}
                          className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid #EAE0E0",
                            borderRadius: "8px",
                            fontSize: "0.729vw",
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                      <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                        Member ID
                      </span>
                      <div className="custm-filterserach">
                        <InputText
                          placeholder="Member ID"
                          value={member}
                          onChange={(e) => setMember(e.target.value)}
                          className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid #EAE0E0",
                            borderRadius: "8px",
                            fontSize: "0.729vw",
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                      <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                        Hospital/Clinic
                      </span>
                      <div className="custm-filterserach">
                        <InputText
                          placeholder="Hospital/Clinic"
                          value={hospital}
                          onChange={(e) => setHospital(e.target.value)}
                          className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid #EAE0E0",
                            borderRadius: "8px",
                            fontSize: "0.729vw",
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                      <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                        Physician
                      </span>
                      <div className="custm-filterserach">
                        <InputText
                          placeholder="Physician"
                          value={physician}
                          onChange={(e) => setPhysician(e.target.value)}
                          className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid #EAE0E0",
                            borderRadius: "8px",
                            fontSize: "0.729vw",
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                      <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                        Allergies
                      </span>
                      <div className="custm-filterserach">
                        <InputText
                          placeholder="Allergies"
                          value={allergies}
                          onChange={(e) => setAllergies(e.target.value)}
                          className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid #EAE0E0",
                            borderRadius: "8px",
                            fontSize: "0.729vw",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollPanel>
      </div>

      <div className="mt-[40px] xl:mt-[2.083vw] lg:mt-[0] lg:absolute bottom-[-70px] left-0 right-0">
        <div className="flex items-center justify-between">
          <div className="col">
            <Link
              href="javascript:void(0)"
              className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] opacity-30 transition ease-in-out delay-150"
            >
              <i className="mr-[8px] xl:mr-[0.417vw] cgupod-close-circle text-[22px] xl:text-[1.146]"></i>
              Cancel
            </Link>
          </div>
          <div className="col">
            <div className="flex gap-[8px] xl:gap-[0.417vw]">
              <Link
                href="javascript:void(0)"
                className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] gap-[8px] xl:gap-[0.417vw]
               xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px]
               xl:py-[0.625vw] transition ease-in-out delay-150"
              >
                <i className="mr-[8px] xl:mr-[0.417vw] cgupod-print text-[18px] xl:text-[0.938vw]"></i>
                Print Report{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
