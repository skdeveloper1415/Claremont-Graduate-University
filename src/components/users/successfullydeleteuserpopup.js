import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from 'primereact/dropdown';
import { Noto_Serif_Georgian } from "@next/font/google";
import { useTheme } from "next-themes";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
  });

const SuccessfullyDeleteUser = (props) => {    
    const [value, setValue] = useState('');
    const [Combogroupdetails, setCombogroupdetails] = useState(false);
    const [selectedCity, setSelectedCity] = useState(null);
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
                    <div className="text-center text-[#262626] xl:text-[1.354vw] text-2xl font-normal xl:leading-[1.667vw] leading-8 dark:text-[#fff]">User Account Has Been Deleted Successfully !!!</div>
                    </div>
                    <div className="flex items-center justify-center"><Link href={''} className="text-[#FFFFFF] xl:text-[0.729vw] font-normal xl:leading-[0.938vw] leading-4 bg-[#AF1E27] xl:rounded-[0.417vw] rounded xl:px-[0.729vw] px-3 xl:py-[0.521vw] py-2" onClick={() => { props.onHides(false); }}>Close</Link></div>
                </div>
                
                </Sidebar>

                
            </div>
        </>
    );
}

export default SuccessfullyDeleteUser;