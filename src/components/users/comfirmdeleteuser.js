import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from 'primereact/dropdown';
import { Noto_Serif_Georgian } from "@next/font/google";
import SuccessfullyDeleteUser from "@/components/users/successfullydeleteuserpopup";
import { useTheme } from "next-themes";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
  });

const ConfirmDeleteUser = (props) => {    
    const [value, setValue] = useState('');
    const [Combogroupdetails, setCombogroupdetails] = useState(false);
    const [selectedCity, setSelectedCity] = useState(null);
    const [SuccessfullyDeleteUserpopup, setSuccessfullyDeleteUserpopup] = useState(false);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme; 

    return (
        <>
            <div>
                <Sidebar visible={props.visible} position="right" 
                className="custmSidebar width600 SuccessfullycreatePopup" onHide={() => props.onHides(false)} >
                <div className="xl:px-[2.604vw] px-10 xl:space-y-[1.875vw] space-y-8">
                    <div>
                       
                       

                        {currentTheme === 'dark' ? 
                            <div>   <Image src={'/assets/images/successfully_popup_dark.svg'} alt="successfully popup" width={499} height={485} className="xl:w-[25.99vw] xl:h-[25.26vw]" /></div>
                            :
                            <div>    <Image src={'/assets/images/successfully_popup.svg'} alt="successfully popup" width={499} height={485} className="xl:w-[25.99vw] xl:h-[25.26vw]" />  </div>
                            }

                        
                        </div>
                    <div className={myNotoSerifGeorgian.className}>
                    <div className="text-center text-[#262626] xl:text-[1.354vw] text-2xl font-normal xl:leading-[1.667vw] leading-8 dark:text-[#fff]">Are You Sure Went to Delete this User ?</div>
                    </div>
                    


            <div className="mt-[32px] lg:mt-[0] lg:absolute bottom-0 left-0 right-0 p-5">
        <div className="flex items-center justify-between">
                    <div className="col">
                        <Link
                            href={""}   onClick={() => setSuccessfullyDeleteUserpopup(false)}
                            className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[10px] xl:px-[0.625vw] py-[10px] xl:py-[0.421vw] transition ease-in-out delay-150 dark:border-[#F5747C] dark:bg-[#13161B] dark:text-[#F5747C]"
                        >
                            <i className="mr-[8px] xl:mr-[0.417vw] cgupod-close-circle text-[22px] xl:text-[1.146]"></i>
                              Cancel
                        </Link>
                    </div>
                    <div className="col">
                        <Link
                            href={""}   onClick={()=>setSuccessfullyDeleteUserpopup(true)}
                            className="flex items-center bg-[#AF1E27] hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#fff] hover:text-white text-[16px] xl:text-[0.833vw] px-[10px] xl:px-[0.625vw] py-[10px] xl:py-[0.421vw] transition ease-in-out delay-150"
                        >
                             <i className="mr-[10px] xl:mr-[0.417vw] text-[#fff] cgupod-add-circle text-[18px] xl:text-[1.146]"></i>
                            Delete User
                        </Link>
                    </div>
                </div>
                </div>
                </div>
                </Sidebar>
                <SuccessfullyDeleteUser
                visible={SuccessfullyDeleteUserpopup}
                onHides={() => setSuccessfullyDeleteUserpopup(false)}
            />
                
            </div>
        </>
    );
}

export default ConfirmDeleteUser;