import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from 'primereact/dropdown';
import { Noto_Serif_Georgian } from "@next/font/google";
import Individualgroup from '@/components/groups/individualgroup';
import Successfullycreategroup from '@/components/groups/successfullycreategrouppopup';

const myNotoSerifGeorgian = Noto_Serif_Georgian({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
  });

const Combogroup = (props) => {    
    const [value, setValue] = useState('');
    const [Combogroupdetails, setCombogroupdetails] = useState(false);    
    const [Individualgrouppopup, setIndividualgrouppopup] = useState(false);
    const [Successfullycreategrouppopup, setSuccessfullycreategrouppopup] = useState(false);
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <>
            <div>
                <Sidebar visible={props.visible} position="right" className="custmSidebar width600" onHide={() => props.onHides(false)} >

                <div className="xl:px-[1.667vw] px-7 xl:pt-[1.667vw] pt-7">
                <div className={myNotoSerifGeorgian.className}>
                <div className="text-[#262626] xl:text-[1.25vw] text-xl font-normal xl:leading-[1.563vw] leading-7 border-b border-[#EAE0E0] xl:pb-[1.25vw] pb-5 dark:text-[#FFFFFF] dark:border-[#4B5563]">Choose Creation Mode</div>
                </div>
                </div>
                <div className="h-[90%] flex flex-col justify-center xl:px-[5.208vw] px-[50px]">
                <div className="xl:space-y-[1.25vw] space-y-6">
                <div className="bg-white border border-[#EAE0E0] xl:rounded-[0.521] rounded-lg xl:p-[0.938vw] p-4 flex flex-col items-center justify-center xl:gap-[1.042vw] gap-5 dark:border-[#4B5563] dark:bg-[#0C0E12]">
                <div className="text-[#CFC9B8] text-[80px] xl:text-[4.167vw] xl:leading-[4.688vw] leading-[90px]"><i className="cgupod-combo-group"></i></div>
                <div className="text-[#262626] xl:text-[1.25vw] font-medium xl:leading-[1.563vw] leading-7 dark:text-[#FFFFFF]">Combo Group</div>
                <div><Link href={''} className="text-[#AF1E27] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.25vw] leading-6 bg-white border border-[#AF1E27] xl:rounded-[0.313vw] rounded flex items-center xl:gap-[0.521vw] gap-2 xl:py-[0.417vw] py-2 xl:px-[0.833vw] px-4 dark:bg-[#AF1E27] dark:text-white"  onClick={() => setCombogroupdetails(true)}><span>Create group</span><i className="cgupod-arrow-right-line xl:text-[0.625vw] text-xs"></i></Link></div>

                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="bg-[#E4E7EC] w-[79px] h-[1px] dark:bg-[#4B5563]"></div>
                  <div className="text-[#000] xl:text-[0.938vw] text-[18px] xl:leading-[1.458vw] leading-[28px] font-medium dark:text-[#818181]">OR</div>
                  <div className="bg-[#E4E7EC] w-[79px] h-[1px] dark:bg-[#4B5563]"></div>
                  </div>
                <div className="bg-white border border-[#EAE0E0] xl:rounded-[0.521] rounded-lg xl:p-[0.938vw] p-4 flex flex-col items-center justify-center xl:gap-[1.042vw] gap-5 dark:border-[#4B5563] dark:bg-[#0C0E12]">
                <div className="text-[#CFC9B8] text-[80px] xl:text-[4.167vw] xl:leading-[4.688vw] leading-[90px]"><i className="cgupod-leader"></i></div>
                <div className="text-[#262626] xl:text-[1.25vw] font-medium xl:leading-[1.563vw] leading-7 dark:text-[#FFFFFF]">Individual Group</div>
                <div><Link href={''} className="text-[#AF1E27] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.25vw] leading-6 bg-white border border-[#AF1E27] xl:rounded-[0.313vw] rounded flex items-center xl:gap-[0.521vw] gap-2 xl:py-[0.417vw] py-2 xl:px-[0.833vw] px-4 dark:bg-[#AF1E27] dark:text-white" onClick={() => setIndividualgrouppopup(true)}><span>Create group</span><i className="cgupod-arrow-right-line xl:text-[0.625vw] text-xs"></i></Link></div>

                </div>
                </div>
                </div>
                </Sidebar>

                <Sidebar visible={Combogroupdetails} position="right" onHide={() => setCombogroupdetails(false)} className="custmSidebar width600">
                <div className="xl:px-[1.667vw] px-7 xl:pt-[1.667vw] pt-7">
                <div className={myNotoSerifGeorgian.className}>
                <div className="text-[#262626] xl:text-[1.25vw] text-xl font-normal xl:leading-[1.563vw] leading-7 border-b border-[#EAE0E0] xl:pb-[1.25vw] pb-5 dark:text-[#F7F7FB] dark:border-[#4B5563]">Combo Group Details</div>
                </div>
                </div>
                <div className="flex flex-col justify-between h-[85%] xl:px-[1.667vw] px-7">
                {/**Form Start**/}
                <div>
                <div className="xl:mt-[2.083vw] mt-9 xl:space-y-[1.042vw] space-y-5">
                <div className="flex flex-col xl:gap-[0.313vw] gap-1">
                <label htmlFor="username" className="text-[#262626] xl:text-[0.729vw] font-medium xl:leading-[1.042vw] leading-5">Group Name</label>
                <InputText value={value} onChange={(e) => setValue(e.target.value)} placeholder="Type here..." className="placeholder:text-[#888888] placeholder:xl:text-[0.833vw] placeholder:font-normal placeholder:xl:leading-[1.042vw] placeholder:leading-5 xl:h-[2.604] h-9" />
                </div>
                <div className="flex flex-col xl:gap-[0.313vw] gap-1">
                <label htmlFor="username" className="text-[#262626] xl:text-[0.729vw] font-medium xl:leading-[1.042vw] leading-5">Group Description</label>
                <InputTextarea value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} placeholder="Type Description..." className="placeholder:text-[#888888] placeholder:xl:text-[0.833vw] placeholder:font-normal placeholder:xl:leading-[1.042vw] placeholder:leading-5" />
                </div>
                <div className="flex flex-col xl:gap-[0.313vw] gap-1">
                <label htmlFor="username" className="text-[#262626] xl:text-[0.729vw] font-medium xl:leading-[1.042vw] leading-5">Group Description</label>
                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="All" className="w-full xl:h-[2.604] h-9 custm-dropdown" />
                </div>
                </div>
                {/**Form End**/}
                </div>
                {/**Footer***/}
                <div className="flex flex-wrap items-center justify-between">
                  <div><Link href={''} className="text-[#AF1E27] xl:text-[0.938vw] text-base font-normal xl:leading-[1.25vw] leading-5 bg-white border border-[#AF1E27] rounded-lg xl:rounded-[0.521vw] flex items-center xl:gap-[0.521vw] gap-2 xl:py-[0.625vw] py-3 xl:px-[1.042vw] px-5 dark:bg-[#13161B] dark:border-[#F5747C] dark:text-[#F5747C] btn_inactive"><i className="cgupod-close-circle"></i><span>Cancel</span></Link></div>
                  <div><Link href={''} className="text-[#AF1E27] xl:text-[0.938vw] text-base font-normal xl:leading-[1.25vw] leading-5 bg-white border border-[#AF1E27] rounded-lg xl:rounded-[0.521vw] flex items-center xl:gap-[0.521vw] gap-2 xl:py-[0.625vw] py-3 xl:px-[1.042vw] px-5 dark:bg-[#AF1E27] dark:text-white" onClick={() => setSuccessfullycreategrouppopup(true)}><i className="cgupod-add-circle"></i><span>Create Group</span></Link></div>
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
        </>
    );
}

export default Combogroup;