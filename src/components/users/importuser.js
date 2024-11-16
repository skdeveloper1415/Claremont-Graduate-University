import React, { useState, useEffect, useRef } from "react";
import { Sidebar } from "primereact/sidebar";
import { Noto_Serif_Georgian } from "@next/font/google";
import { Toast } from "primereact/toast";
import { FileUpload } from 'primereact/fileupload';
import Link from "next/link";
import SuccessfullyUserImported from "@/components/users/successfullyuserimport";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
});

const ImportUser = (props) => {
    const [SuccessfullyUserImportedpopup, setSuccessfullyUserImportedpopup] = useState(false);
    
    const toast = useRef(null);
    const onUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
        setSuccessfullyUserImportedpopup(true);
    };
        
    return (
        <>
            <div>
                <Sidebar 
                    visible={props.visible} 
                    position="right" 
                    className="custmSidebar custImportSidebar width600" 
                    onHide={() => props.onHides(false)} 
                    blockScroll={true}
                    >

                    <div className="xl:px-[1.667vw] px-7 xl:pt-[1.667vw] pt-7">
                        <div className="flex items-center justify-between gap-1 xl:pb-[1.25vw] pb-[24px] border-b border-[#EAE0E0] dark:border-[#1F2A37]">
                            <div className={myNotoSerifGeorgian.className}>
                                <div className="text-[#262626] xl:text-[1.25vw] text-xl font-normal xl:leading-[1.563vw] leading-7 dark:text-[#fff] ">Import User</div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="flex flex-col justify-center xl:px-[1.667vw] px-[32px] py-[150px] xl:py-[3.813vw]">
                        <div className="">
                        <div className="bg-white border border-[#EAE0E0] xl:rounded-[0.521] rounded-lg xl:p-[0.938vw] p-4 flex flex-col items-center justify-center xl:gap-[1.042vw] gap-5 h-[600px] xl:h-[31.25vw] dark:bg-[#13161B] dark:border-[#4B5563] dark:border-dashed dark:border-[2px]">
                                <div className="text-center">
                                    <div className="text-[#D1D1D1] dark:text-[#424242] text-[33px] xl:text-[1.719vw]"><i className="cgupod-file-upload"></i></div>
                                    <div className="text-[#888888] dark:text-[#818181] text-[15px] xl:text-[0.781vw] font-normal"><span className="font-semibold">Click to upload</span>  or drag and drop</div>
                                    <div className="text-[#888888] dark:text-[#818181] text-[13px] xl:text-[0.677vw] font-semibold">Max. File Size: 30MB</div>
                                </div>

                                <Toast ref={toast}></Toast>
                                <div className="fileuploadbtn text-center">
                                    <FileUpload 
                                        chooseLabel='Browse File'
                                        mode="basic" 
                                        name="demo[]" 
                                        url="/api/upload" 
                                        accept="image/*"
                                        maxFileSize={1000000} 
                                        onUpload={onUpload} 
                                    />
                                  
                                </div>


                                {/* <div><Link href={''} className="text-[#AF1E27] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.25vw] leading-6 bg-white border border-[#AF1E27] xl:rounded-[0.313vw] rounded flex items-center xl:gap-[0.521vw] gap-2 xl:py-[0.521vw] py-2 xl:px-[0.938vw] px-4" onClick={() => setCombogroupdetails(true)}><span>Create group</span><i className="cgupod-arrow-right-line xl:text-[0.625vw] text-xs"></i></Link></div> */}

                            </div>
                        </div>
                    </div>
                 

          <div className="flex items-center justify-between py-5 px-5">
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
                            href={""}  onClick={()=>setSuccessfullyUserImportedpopup(true)}
                            className="flex items-center bg-[#AF1E27] hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#fff] hover:text-white text-[16px] xl:text-[0.833vw] px-[10px] xl:px-[0.625vw] py-[10px] xl:py-[0.421vw] transition ease-in-out delay-150"
                        >
                            <i className="mr-[10px] xl:mr-[0.417vw] text-[#fff] cgupod-document-upload text-[18px] xl:text-[1.146]"></i>
                            Import User
                        </Link>
                    </div>
                </div>
                                
                </Sidebar>

            </div>
           
            <SuccessfullyUserImported
                visible={SuccessfullyUserImportedpopup}
                onHides={() => setSuccessfullyUserImportedpopup(false)}
            />
        </>
    );
}

export default ImportUser;