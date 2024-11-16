import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import { ScrollPanel } from "primereact/scrollpanel";
import { Noto_Serif_Georgian } from "@next/font/google";
import Individualgroup from "@/components/groups/individualgroup";
import Successfullycreategroup from "@/components/groups/successfullycreategrouppopup";
import ConfirmDeleteUser from "@/components/users/comfirmdeleteuser";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const Deleteuser = (props) => {
  console.log("props", props);

  const [value, setValue] = useState("");
  //const [Deleteuser, setDeleteuser] = useState(!props.visible);
  const [Individualgrouppopup, setIndividualgrouppopup] = useState(false);
  const [Successfullycreategrouppopup, setSuccessfullycreategrouppopup] =
    useState(false);
    const [ConfirmDeleteUserpopup, setConfirmDeleteUserpopup] = useState(false);

  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  console.log("Deleteuser", Deleteuser);

  return (
    <>
      <div>
        <Sidebar
          visible={props.visible}
          position="right"
          onHide={() => props.onHides(false)}
          className="custmSidebar width600"
        >
          <div className="xl:px-[1.667vw] px-7 xl:pt-[1.667vw] pt-7">
            <div className={myNotoSerifGeorgian.className}>
              <div className="text-[#262626] xl:text-[1.25vw] text-xl font-normal xl:leading-[1.563vw] leading-7 border-b border-[#EAE0E0] xl:pb-[1.25vw] pb-5 dark:text-[#fff] dark:border-[#4B5563]">
                Delete User
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between h-[85%] xl:px-[1.667vw] px-7">
            {/**Form Start**/}
            <ScrollPanel style={{ width: "100%", height: "100%" }}>
            <div className="h-full mt-3 ">
              <div className="card bg-white p-[20px] xl:p-[1.042vw] rounded-md border border-[#F2EEEE] dark:bg-[#13161B] dark:border-[#1F2A37]">
                <div className="border-b  pb-3 mb-10 dark:border-[#4B5563]">
                  <div className="flex gap-[20px] xl:gap-[1.354vw] items-center">
                    <div>
                      <Image
                        src="/assets/images/Avatar.png"
                        width={160}
                        height={160}
                        className="xl:w-[6.854vw] xl:h-[6.854vw]"
                        alt="profilePicture"
                      />
                    </div>
                    <div>
                      <div className="text-[#262626] text-[28px] xl:text-[1.563vw] font-medium xl:mt-[0.888vw] mt-[24px] dark:text-[#fff]">
                        Nathan Roberts
                      </div>
                      <div className="text-[#888888] text-[16px] xl:text-[0.938vw] font-normal dark:text-[#818181]">
                        Principal
                      </div>
                    </div>
                  </div>
                </div>
             
                <div className="flex-col divide-y divide-[#F2EEEE] dark:divide-[#1F2A37]">
                  <div className="flex items-center ">
                    <div className="xl:w-[8.375vw]  py-[16px] xl:py-[0.833vw]">
                      <p className="leading-[1.042vw] font-normal text-[0.833vw] text-[#424242] dark:text-[#AAAAAA]">
                        User ID
                      </p>
                    </div>
                    <div className=" py-[16px] xl:py-[0.833vw]">
                      <p className="text-[0.833vw] font-medium leading-[1.042vw] text-[#262626] dark:text-[#fff]">
                        487441
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center ">
                    <div className="xl:w-[8.375vw]  py-[16px] xl:py-[0.833vw]">
                      <p className="leading-[1.042vw] font-normal text-[0.833vw] text-[#424242] dark:text-[#AAAAAA]">
                      User Email
                      </p>
                    </div>
                    <div className=" py-[16px] xl:py-[0.833vw]">
                      <p className="text-[0.833vw] font-medium leading-[1.042vw] text-[#262626] dark:text-[#fff]">
                      nathan.roberts@example.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center ">
                    <div className="xl:w-[8.375vw]  py-[16px] xl:py-[0.833vw]">
                      <p className="leading-[1.042vw] font-normal text-[0.833vw] text-[#424242] dark:text-[#AAAAAA]">
                      Created Date
                      </p>
                    </div>
                    <div className=" py-[16px] xl:py-[0.833vw]">
                      <p className="text-[0.833vw] font-medium leading-[1.042vw] text-[#262626] dark:text-[#fff]">
                      29-02-2023
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center ">
                    <div className="xl:w-[8.375vw]  py-[16px] xl:py-[0.833vw]">
                      <p className="leading-[1.042vw] font-normal text-[0.833vw] text-[#424242] dark:text-[#AAAAAA]">
                      Created Date
                      </p>
                    </div>
                    <div className=" py-[16px] xl:py-[0.833vw]">
                      <p className="text-[0.833vw] font-medium leading-[1.042vw] text-[#262626] dark:text-[#fff]">
                      29-02-2023
                      </p>
                    </div>
                  </div>
                   <div className="flex items-center ">
                    <div className="xl:w-[8.375vw]  py-[16px] xl:py-[0.833vw]">
                      <p className="leading-[1.042vw] font-normal text-[0.833vw] text-[#424242] dark:text-[#AAAAAA]">
                    Group
                      </p>
                    </div>
                    <div className=" py-[16px] xl:py-[0.833vw]">
                      <p className="text-[0.833vw] font-medium leading-[1.042vw] text-[#262626] dark:text-[#fff]">
                      Principal, User
                      </p>
                    </div>
                  </div>
                    <div className="flex items-center ">
                    <div className="xl:w-[8.375vw]  py-[16px] xl:py-[0.833vw]">
                      <p className="leading-[1.042vw] font-normal text-[0.833vw] text-[#424242] dark:text-[#AAAAAA]">
                    DOB
                      </p>
                    </div>
                    <div className=" py-[16px] xl:py-[0.833vw]">
                      <p className="text-[0.833vw] font-medium leading-[1.042vw] text-[#262626]">
                           10/04/1990
                      </p>
                    </div>
                  </div>
                   <div className="flex items-center ">
                    <div className="xl:w-[8.375vw]  py-[16px] xl:py-[0.833vw]">
                      <p className="leading-[1.042vw] font-normal text-[0.833vw] text-[#424242] dark:text-[#AAAAAA]">
                    Gender
                      </p>
                    </div>
                    <div className=" py-[16px] xl:py-[0.833vw]">
                      <p className="text-[0.833vw] font-medium leading-[1.042vw] text-[#262626] dark:text-[#fff]">
                           Male
                      </p>
                    </div>
                  </div>
                   <div className="flex items-center ">
                    <div className="xl:w-[8.375vw]  py-[16px] xl:py-[0.833vw]">
                      <p className="leading-[1.042vw] font-normal text-[0.833vw] text-[#424242] dark:text-[#AAAAAA]">
                    Phone Number
                      </p>
                    </div>
                    <div className=" py-[16px] xl:py-[0.833vw]">
                      <p className="text-[0.833vw] font-medium leading-[1.042vw] text-[#262626] dark:text-[#fff]">
                           (505) 555-0125
                      </p>
                    </div>
                  </div>
                   <div className="flex items-center ">
                    <div className="xl:w-[8.375vw]  py-[16px] xl:py-[0.833vw]">
                      <p className="leading-[1.042vw] font-normal text-[0.833vw] text-[#424242] dark:text-[#AAAAAA]">
                         Zip Code
                      </p>
                    </div>
                    <div className=" py-[16px] xl:py-[0.833vw]">
                      <p className="text-[0.833vw] font-medium leading-[1.042vw] text-[#262626] dark:text-[#fff]">
                           2464
                      </p>
                    </div>
                  </div>
                   <div className="flex items-center ">
                    <div className="xl:w-[8.375vw]  py-[16px] xl:py-[0.833vw]">
                      <p className="leading-[1.042vw] font-normal text-[0.833vw] text-[#424242] dark:text-[#AAAAAA]">
                         Address 1
                      </p>
                    </div>
                    <div className=" py-[16px] xl:py-[0.833vw]">
                      <p className="text-[0.833vw] font-medium leading-[1.042vw] text-[#262626] dark:text-[#fff]">
                           2715 Ash Dr. San Jose, South Dakota 83475
                      </p>
                    </div>
                  </div>
                   <div className="flex items-center ">
                    <div className="xl:w-[8.375vw]  py-[16px] xl:py-[0.833vw]">
                      <p className="leading-[1.042vw] font-normal text-[0.833vw] text-[#424242] dark:text-[#AAAAAA]">
                         City
                      </p>
                    </div>
                    <div className=" py-[16px] xl:py-[0.833vw]">
                      <p className="text-[0.833vw] font-medium leading-[1.042vw] text-[#262626] dark:text-[#fff]">
                           Toledo
                      </p>
                    </div>
                  </div>
                   <div className="flex items-center ">
                    <div className="xl:w-[8.375vw]  py-[16px] xl:py-[0.833vw]">
                      <p className="leading-[1.042vw] font-normal text-[0.833vw] text-[#424242] dark:text-[#AAAAAA]">
                         Country
                      </p>
                    </div>
                    <div className=" py-[16px] xl:py-[0.833vw]">
                      <p className="text-[0.833vw] font-medium leading-[1.042vw] text-[#262626] dark:text-[#fff]">
                           UK
                      </p>
                    </div>
                  </div>

                 
                </div>
            

              </div>
            </div>
            </ScrollPanel>
            {/**Footer***/}
            <div className="flex items-center justify-between py-5">
                    <div className="col">
                        <Link
                            href={""}  onClick={() => props.onHides(false)}
                            className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[10px] xl:px-[0.625vw] py-[10px] xl:py-[0.421vw] transition ease-in-out delay-150 dark:border-[#F5747C] dark:bg-[#13161B] dark:text-[#F5747C]"
                        >
                            <i className="mr-[10px] xl:mr-[0.417vw] cgupod-close-circle text-[22px] xl:text-[1.146]"></i>
                            Cancel
                        </Link>
                    </div>
                    <div className="col">
                        <Link
                            href={""} 
                            className="flex items-center bg-[#AF1E27] hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#fff] hover:text-white text-[16px] xl:text-[0.833vw] px-[10px] xl:px-[0.625vw] py-[10px] xl:py-[0.421vw] transition ease-in-out delay-150"
                            onClick={()=>setConfirmDeleteUserpopup(true)}
                        >
                            <i className="mr-[10px] xl:mr-[0.417vw] text-[#fff] cgupod-add-circle text-[18px] xl:text-[1.146]"></i>
                            Delete User
                        </Link>
                    </div>
                </div>

                
            {/**Footer***/}
          </div>
        </Sidebar>
      </div>
      <Individualgroup
        visible={Individualgrouppopup}
        onHides={() => setIndividualgrouppopup(false)}
      />
      <Successfullycreategroup
        visible={Successfullycreategrouppopup}
        onHides={() => setSuccessfullycreategrouppopup(false)}
      />
      <ConfirmDeleteUser
                visible={ConfirmDeleteUserpopup}
                onHides={() => setConfirmDeleteUserpopup(false)}
            />
    </>
  );
};

export default Deleteuser;
