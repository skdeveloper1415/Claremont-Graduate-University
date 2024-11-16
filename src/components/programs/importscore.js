import React, { useState, useEffect, useRef } from "react";
import { Sidebar } from "primereact/sidebar";
import { Noto_Serif_Georgian } from "@next/font/google";
import { Toast } from "primereact/toast";
import { FileUpload } from 'primereact/fileupload';
import SuccessfullyImported from "./successfullyimported";
import UpdatedPopUp from "./UpdatedPopUp";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
});

const ImportScore = (props) => {
    const [SuccessfullyImportedpopup, setSuccessfullyImportedpopup] = useState(false);

    const [updatedImportedpopup, setUpdatedImportedpopup] = useState(false);
    
    const toast = useRef(null);
    const onUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
        setSuccessfullyImportedpopup(true);
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
                        <div className="flex items-center justify-between gap-1 xl:pb-[1.25vw] pb-[24px] border-b border-[#EAE0E0] dark:border-[#374151]">
                            <div className={myNotoSerifGeorgian.className}>
                                <div className="text-[#262626] dark:text-[#fff] xl:text-[1.25vw] text-xl font-normal xl:leading-[1.563vw] leading-7 ">Import Scores</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center xl:px-[1.667vw] px-[32px] py-[150px] xl:py-[7.813vw]">
                        <div className="">
                            <div className="bg-white border border-[#EAE0E0] xl:rounded-[0.521] rounded-lg xl:p-[0.938vw] p-4 flex flex-col items-center justify-center xl:gap-[1.042vw] gap-5 h-[600px] xl:h-[31.25vw] dark:bg-[#13161B] dark:border-[#9CA3AF] dark:border-dashed dark:border-[2px]">
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
                                    <div onClick={() => setSuccessfullyImportedpopup(true)}>Successfull popup</div>
                                    <div onClick={() => setUpdatedImportedpopup(true)}>Updated popup</div>
                                </div>


                                {/* <div><Link href={''} className="text-[#AF1E27] xl:text-[0.833vw] text-sm font-normal xl:leading-[1.25vw] leading-6 bg-white border border-[#AF1E27] xl:rounded-[0.313vw] rounded flex items-center xl:gap-[0.521vw] gap-2 xl:py-[0.521vw] py-2 xl:px-[0.938vw] px-4" onClick={() => setCombogroupdetails(true)}><span>Create group</span><i className="cgupod-arrow-right-line xl:text-[0.625vw] text-xs"></i></Link></div> */}

                            </div>
                        </div>
                    </div>
                </Sidebar>

            </div>
           
            <SuccessfullyImported
                visible={SuccessfullyImportedpopup}
                onHides={() => setSuccessfullyImportedpopup(false)}
            />

            <UpdatedPopUp
                visible={updatedImportedpopup}
                onHides={() => setUpdatedImportedpopup(false)}
            />


        </>
    );
}

export default ImportScore;