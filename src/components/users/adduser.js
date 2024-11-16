import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import { Noto_Serif_Georgian } from "@next/font/google";
import Individualgroup from "@/components/groups/individualgroup";
import Successfullycreategroup from "@/components/groups/successfullycreategrouppopup";
import SuccessfullyAddUserPopup from "@/components/users/successfullyadduserpopup";
import { useTheme } from "next-themes";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const AddUser = (props) => {
  const [value, setValue] = useState("");
  const [Combogroupdetails, setCombogroupdetails] = useState(false);
  const [Individualgrouppopup, setIndividualgrouppopup] = useState(false);
  const [Successfullycreategrouppopup, setSuccessfullycreategrouppopup] =
    useState(false);

  const [SuccessfullyadduserPopup, setSuccessfullyadduserpopup] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;  

  return (
    <>
      <div>
        <Sidebar
          visible={props.visible}
          position="right" 
          className="custmSidebar custImportSidebar width600" 
          onHide={() => props.onHides(false)}
        >
          <div className="xl:px-[1.667vw] px-7 xl:pt-[1.667vw] pt-7">
            <div className={myNotoSerifGeorgian.className}>
              <div className="text-[#262626] xl:text-[1.25vw] text-xl font-normal xl:leading-[1.563vw] leading-7 border-b border-[#EAE0E0] dark:border-[#374151] xl:pb-[1.25vw] pb-5 dark:text-[#fff]">
                Add User
              </div>
            </div>
          </div>
          <div className="h-[60%] flex flex-col justify-center xl:mb-[3.125vw] mb-[40px]">
            <div className="xl:px-[5.208vw] px-[50px]">
              <div className="flex justify-center">
              {currentTheme === 'dark' ? 
                    <div><Image src={'/assets/images/add_users_img_dark.png'} alt="" width={275} height={220} className="xl:w-[14.323vw] xl:h-[11.458vw]"/></div>
                    :
                    <div>  <Image src={'/assets/images/add_users_img.png'} alt="AddUser" width={275} height={220} className="xl:w-[14.323vw] xl:h-[11.458vw]" /></div>
                    }
                
                
              
                
                
                </div>
              </div>
              <div className="flex flex-col xl:gap-[0.313vw] gap-1 mt-5 xl:px-[2.208vw] px-[32px custInput">
                  <label
                    htmlFor="username"
                    className="text-[#262626] xl:text-[0.729vw] font-medium xl:leading-[1.042vw] leading-5 dark:text-[#fff]"
                  >
                   E-mail
                  </label>
                  <InputText
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Type here..."
                    className="placeholder:text-[#888888] placeholder:xl:text-[0.833vw] placeholder:font-normal placeholder:xl:leading-[1.042vw] placeholder:leading-5"
                  
                  />
                </div>
           
          </div>
          <div className="my-[32px] lg:my-[20px] lg:absolute bottom-0 left-0 right-0 px-[15px] xl:px-[1.667vw]">
                <div className="flex items-center justify-between">
                    <div className="col">
                        <Link
                            href={""} onClick={() => props.onHides(false)}
                            className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[10px] xl:px-[0.625vw] py-[10px] xl:py-[0.421vw] transition ease-in-out delay-150 dark:border-[#F5747C] dark:bg-[#13161B] dark:text-[#F5747C]"
                        >
                            <i className="mr-[10px] xl:mr-[0.417vw] cgupod-close-circle text-[22px] xl:text-[1.146]"></i>
                            Cancel
                        </Link>
                    </div>
                    <div className="col">
                        <Link
                            href={""} onClick={() => setSuccessfullyadduserpopup(true)}
                            className="flex items-center bg-[#AF1E27] hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#fff] hover:text-white text-[16px] xl:text-[0.833vw] px-[10px] xl:px-[0.625vw] py-[10px] xl:py-[0.421vw] transition ease-in-out delay-150"
                        >
                            <i className="mr-[10px] xl:mr-[0.417vw] text-[#fff] cgupod-add-square text-[18px] xl:text-[1.146]"></i>
                            Add User
                        </Link>
                    </div>
                </div>
            </div>
        </Sidebar>

        <Sidebar
          visible={Combogroupdetails}
          position="right"
          onHide={() => setCombogroupdetails(false)}
          style={{ background: "#FCF5F6" }}
          className="custmSidebar width600"
        >
          <div className="xl:px-[1.667vw] px-7 xl:pt-[1.667vw] pt-7">
            <div className={myNotoSerifGeorgian.className}>
              <div className="text-[#262626] xl:text-[1.25vw] text-xl font-normal xl:leading-[1.563vw] leading-7 border-b border-[#EAE0E0] xl:pb-[1.25vw] pb-5">
                Combo Group Details
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between h-[85%] xl:px-[1.667vw] px-7">
            {/**Form Start**/}
            <div>
              <div className="xl:mt-[2.083vw] mt-9 xl:space-y-[1.042vw] space-y-5">
                <div className="flex flex-col xl:gap-[0.313vw] gap-1">
                  <label
                    htmlFor="username"
                    className="text-[#262626] xl:text-[0.729vw] font-medium xl:leading-[1.042vw] leading-5"
                  >
                    Group Name
                  </label>
                  <InputText
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Type here..."
                    className="placeholder:text-[#888888] placeholder:xl:text-[0.833vw] placeholder:font-normal placeholder:xl:leading-[1.042vw] placeholder:leading-5 xl:h-[2.604] h-9"
                    style={{ background: "#fff", border: "1px solid #EAE0E0" }}
                  />
                </div>
                <div className="flex flex-col xl:gap-[0.313vw] gap-1">
                  <label
                    htmlFor="username"
                    className="text-[#262626] xl:text-[0.729vw] font-medium xl:leading-[1.042vw] leading-5"
                  >
                    Group Description
                  </label>
                  <InputTextarea
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    rows={5}
                    cols={30}
                    placeholder="Type Description..."
                    className="placeholder:text-[#888888] placeholder:xl:text-[0.833vw] placeholder:font-normal placeholder:xl:leading-[1.042vw] placeholder:leading-5"
                    style={{ background: "#fff", border: "1px solid #EAE0E0" }}
                  />
                </div>
                <div className="flex flex-col xl:gap-[0.313vw] gap-1">
                  <label
                    htmlFor="username"
                    className="text-[#262626] xl:text-[0.729vw] font-medium xl:leading-[1.042vw] leading-5"
                  >
                    Group Description
                  </label>
                  <Dropdown
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.value)}
                    options={cities}
                    optionLabel="name"
                    placeholder="All"
                    className="w-full xl:h-[2.604] h-9 custm-dropdown"
                    style={{ background: "#fff", border: "1px solid #EAE0E0" }}
                  />
                </div>
              </div>
              {/**Form End**/}
            </div>
            {/**Footer***/}
            <div className="flex items-center justify-between">
              <div>
                <Link
                  href={""}
                  className="text-[#AF1E27] xl:text-[0.938vw] text-base font-normal xl:leading-[1.25vw] leading-5 bg-white border border-[#AF1E27] rounded-lg xl:rounded-[0.521vw] flex items-center xl:gap-[0.521vw] gap-2 xl:py-[0.729vw] py-3 xl:px-[1.146vw] px-5 btn_inactive"
                >
                  <i className="cgupod-close-circle"></i>
                  <span>Cancel</span>
                </Link>
              </div>
              <div>
                <Link
                  href={""}
                  className="text-[#AF1E27] xl:text-[0.938vw] text-base font-normal xl:leading-[1.25vw] leading-5 bg-white border border-[#AF1E27] rounded-lg xl:rounded-[0.521vw] flex items-center xl:gap-[0.521vw] gap-2 xl:py-[0.729vw] py-3 xl:px-[1.146vw] px-5"
                  onClick={() => setSuccessfullycreategrouppopup(true)}
                >
                  <i className="cgupod-add-circle"></i>
                  <span>Create Group</span>
                </Link>
              </div>
            </div>
            {/**Footer***/}
          </div>
        </Sidebar>
      </div>
    
       <SuccessfullyAddUserPopup
            visible={SuccessfullyadduserPopup}
            onHides={() => setSuccessfullyadduserpopup(false)}
      />
    </>
  );
};

export default AddUser;
