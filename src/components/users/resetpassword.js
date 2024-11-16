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
import { Password } from 'primereact/password';
import { useTheme } from "next-themes";
const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const Resetpassowrd = (props) => {
  const [valuee, setValuee] = useState('');
  console.log("props", props);

  const [value, setValue] = useState("");
  const [Combogroupdetails, setCombogroupdetails] = useState(false);
  const [Individualgrouppopup, setIndividualgrouppopup] = useState(false);
  const [Successfullycreategrouppopup, setSuccessfullycreategrouppopup] =
    useState(false);
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
          className="custmSidebar width600"
          onHide={() => props.onHides(false)}
        >
          <div className="xl:px-[1.667vw] px-7 xl:pt-[1.667vw] pt-7">
            <div className={myNotoSerifGeorgian.className}>
              <div className="text-[#262626] xl:text-[1.25vw] text-xl font-normal xl:leading-[1.563vw] leading-7 border-b border-[#EAE0E0] xl:pb-[1.25vw] pb-5 dark:text-[#fff] border-[#374151]">
                Reset Password
              </div>
            </div>
          </div>
          <div className="h-[90%] flex flex-col justify-center xl:px-[1.667vw] px-[32px]">
            <div className="xl:mb-[3.125vw] mb-[40px]">
              <div className="flex justify-center">
               

                {currentTheme === 'dark' ? 
                    <div>   <Image src={'/assets/images/Resetpass_dark.png'} alt="AddUser" width={318} height={225} className="xl:w-[16.563vw] xl:h-[11.979vw]" /></div>
                    :
                    <div>     <Image src={'/assets/images/Resetpass.png'} alt="AddUser" width={318} height={225} className="xl:w-[16.563vw] xl:h-[11.979vw]" /></div>
                    }
               
                </div>

            
             <div className="flex flex-col xl:gap-[0.313vw] gap-1 mt-5 custInput">
                <label
                  htmlFor="username"
                  className="text-[#262626] text-[14px] xl:text-[0.729vw] font-medium xl:leading-[1.042vw] leading-5"
                >
                  E-mail
                </label>
                <InputText
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Type here..."
                  className="placeholder:text-[#888888] placeholder:xl:text-[0.833vw] placeholder:font-normal placeholder:xl:leading-[1.042vw] placeholder:leading-5 xl:h-[2.604] h-9"
                 
                />
              </div>

              
              <div className="flex flex-col xl:gap-[0.313vw] gap-1 mt-5 ">
              <label
                    htmlFor="username"
                    className="text-[#262626] xl:text-[0.729vw] font-medium xl:leading-[1.042vw] leading-5"
                  >
                   New Password
                  </label>
                  <div className="border-1 border-[#EAE0E0]">
                <Password value={valuee} onChange={(e) => setValuee(e.target.value)} toggleMask  placeholder="Type here..."
                  className="placeholder:text-[#888888]  placeholder:leading-5 xl:h-[2.604] h-9 bdr w-full"
              />
                </div>
              </div>

              
              <div className="flex flex-col xl:gap-[0.313vw] gap-1 mt-5 ">
              <label
                    htmlFor="username"
                    className="text-[#262626] xl:text-[0.729vw] font-medium xl:leading-[1.042vw] leading-5"
                  >
                   Confirm Password
                  </label>
                <div className="border-1 border-[#EAE0E0]">
                <Password value={valuee} onChange={(e) => setValuee(e.target.value)} toggleMask  placeholder="Type here..."
                  className="placeholder:text-[#888888]  placeholder:font-normal  placeholder:leading-5 xl:h-[2.604] h-9 bdr w-full"
               />
                </div>
              </div>
             </div>
            
          </div>
          <div className="my-[32px] lg:my-[20px] lg:absolute bottom-0 left-0 right-0 px-[15px] xl:px-[1.667vw]">
                <div className="flex items-center justify-between">
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
                            href={""} onClick={() => setSuccessfullyadduserpopup(true)}
                            className="flex items-center bg-[#AF1E27] hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#fff] hover:text-white text-[16px] xl:text-[0.833vw] px-[10px] xl:px-[0.625vw] py-[10px] xl:py-[0.421vw] transition ease-in-out delay-150"
                        >
                            <i className="mr-[10px] xl:mr-[0.417vw] text-[#fff] cgupod-save-file text-[18px] xl:text-[1.146]"></i>
                            Save
                        </Link>
                    </div>
                </div>
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
    </>
  );
};

export default Resetpassowrd;
