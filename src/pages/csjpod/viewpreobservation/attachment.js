import React, { useState, useRef } from "react";
import { Noto_Serif_Georgian } from "@next/font/google";
import { useTheme } from "next-themes";
import Link from "next/link";
import { InputTextarea } from "primereact/inputtextarea";
import { ScrollPanel } from "primereact/scrollpanel";
import Image from "next/image";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const AttachmentPage = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between">
          <div className={myNotoSerifGeorgian.className}>
            <div className="text-[#262626] text-[32px] xl:text-[1.667vw]">
              Attachments
            </div>
          </div>
          <Link
            href="javascript:void(0)"
            className="flex items-center bg-[#AF1E27] hover:bg-[#79141a] border border-[#AF1E27] rounded-[4px] text-white text-[14px] xl:text-[0.729vw] px-[16px] xl:px-[0.833vw] py-[8px] xl:py-[0.417vw] transition ease-in-out delay-150"
          >
            <i className="mr-[8px] xl:mr-[0.417vw] cgupod-plus text-[16px] xl:text-[0.833vw]"></i>
            Upload New Files
          </Link>
        </div>

        <div className="rounded-[8px] xl:rounded-[0.417vw] mt-[32px] xl:mt-[1.667vw] SidebarHeight">
          <ScrollPanel style={{ width: "100%", height: "100%" }}>
            <div className="grid grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-[20px] xl:gap-[1.042vw]">
              <div className="p-[20px] xl:p-[1.042vw] rounded-lg bg-[#FFF] grid gap-[40px] xl:gap-[2.083vw]">
                <div className="flex justify-between items-center">
                  <div className="flex gap-[8px] xl:gap-[0.417vw] items-center">
                    <div>
                      <i
                        className="cgupod-gallery text-[#424242]"
                        style={{ fontSize: "1.042vw" }}
                      ></i>
                    </div>
                    <div className="text-[16px] xl:text-[0.833vw] text-[#424242] font-medium">
                      Image001.jpeg
                    </div>
                  </div>
                  <div>
                    <i
                      className="cgupod-three-dots"
                      style={{ fontSize: "0.365vw" }}
                    ></i>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col text-[12px] xl:text-[0.625vw] font-normal text-[#888]">
                    <span>File Size : 1.8MB</span>
                    <span>Last change : 03/04/2019</span>
                  </div>
                  <div>
                    <i
                      className="cgupod-export text-[#AF1E27]"
                      style={{ fontSize: "1.042vw" }}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="p-[20px] xl:p-[1.042vw] rounded-lg bg-[#FFF] grid gap-[40px] xl:gap-[2.083vw]">
                <div className="flex justify-between items-center">
                  <div className="flex gap-[8px] xl:gap-[0.417vw] items-center">
                    <div>
                      <i
                        className="cgupod-gallery text-[#424242]"
                        style={{ fontSize: "1.042vw" }}
                      ></i>
                    </div>
                    <div className="text-[16px] xl:text-[0.833vw] text-[#424242] font-medium">
                      Image001.jpeg
                    </div>
                  </div>
                  <div>
                    <i
                      className="cgupod-three-dots"
                      style={{ fontSize: "0.365vw" }}
                    ></i>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col text-[12px] xl:text-[0.625vw] font-normal text-[#888]">
                    <span>File Size : 1.8MB</span>
                    <span>Last change : 03/04/2019</span>
                  </div>
                  <div>
                    <i
                      className="cgupod-export text-[#AF1E27]"
                      style={{ fontSize: "1.042vw" }}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="p-[20px] xl:p-[1.042vw] rounded-lg bg-[#FFF] grid gap-[40px] xl:gap-[2.083vw]">
                <div className="flex justify-between items-center">
                  <div className="flex gap-[8px] xl:gap-[0.417vw] items-center">
                    <div>
                      <Image
                        src={"/assets/images/svg/video-play.svg"}
                        alt="divider"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className="text-[16px] xl:text-[0.833vw] text-[#424242] font-medium">
                      Video001.mp4
                    </div>
                  </div>
                  <div>
                    <i
                      className="cgupod-three-dots"
                      style={{ fontSize: "0.365vw" }}
                    ></i>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col text-[12px] xl:text-[0.625vw] font-normal text-[#888]">
                    <span>File Size : 1.8MB</span>
                    <span>Last change : 03/04/2019</span>
                  </div>
                  <div>
                    <i
                      className="cgupod-export text-[#AF1E27]"
                      style={{ fontSize: "1.042vw" }}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="p-[20px] xl:p-[1.042vw] rounded-lg bg-[#FFF] grid gap-[40px] xl:gap-[2.083vw]">
                <div className="flex justify-between items-center">
                  <div className="flex gap-[8px] xl:gap-[0.417vw] items-center">
                    <div>
                      <Image
                        src={"/assets/images/svg/video-play.svg"}
                        alt="divider"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className="text-[16px] xl:text-[0.833vw] text-[#424242] font-medium">
                      Video001.mp4
                    </div>
                  </div>
                  <div>
                    <i
                      className="cgupod-three-dots"
                      style={{ fontSize: "0.365vw" }}
                    ></i>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col text-[12px] xl:text-[0.625vw] font-normal text-[#888]">
                    <span>File Size : 1.8MB</span>
                    <span>Last change : 03/04/2019</span>
                  </div>
                  <div>
                    <i
                      className="cgupod-export text-[#AF1E27]"
                      style={{ fontSize: "1.042vw" }}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="p-[20px] xl:p-[1.042vw] rounded-lg bg-[#FFF] grid gap-[40px] xl:gap-[2.083vw]">
                <div className="flex justify-between items-center">
                  <div className="flex gap-[8px] xl:gap-[0.417vw] items-center">
                    <div>
                      <i
                        className="cgupod-document-text text-[#424242]"
                        style={{ fontSize: "1.042vw" }}
                      ></i>
                    </div>
                    <div className="text-[16px] xl:text-[0.833vw] text-[#424242] font-medium">
                      Documents001.pdf
                    </div>
                  </div>
                  <div>
                    <i
                      className="cgupod-three-dots"
                      style={{ fontSize: "0.365vw" }}
                    ></i>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col text-[12px] xl:text-[0.625vw] font-normal text-[#888]">
                    <span>File Size : 1.8MB</span>
                    <span>Last change : 03/04/2019</span>
                  </div>
                  <div>
                    <i
                      className="cgupod-export text-[#AF1E27]"
                      style={{ fontSize: "1.042vw" }}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="p-[20px] xl:p-[1.042vw] rounded-lg bg-[#FFF] grid gap-[40px] xl:gap-[2.083vw]">
                <div className="flex justify-between items-center">
                  <div className="flex gap-[8px] xl:gap-[0.417vw] items-center">
                    <div>
                      <i
                        className="cgupod-gallery text-[#424242]"
                        style={{ fontSize: "1.042vw" }}
                      ></i>
                    </div>
                    <div className="text-[16px] xl:text-[0.833vw] text-[#424242] font-medium">
                      Image001.jpeg
                    </div>
                  </div>
                  <div>
                    <i
                      className="cgupod-three-dots"
                      style={{ fontSize: "0.365vw" }}
                    ></i>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col text-[12px] xl:text-[0.625vw] font-normal text-[#888]">
                    <span>File Size : 1.8MB</span>
                    <span>Last change : 03/04/2019</span>
                  </div>
                  <div>
                    <i
                      className="cgupod-export text-[#AF1E27]"
                      style={{ fontSize: "1.042vw" }}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="p-[20px] xl:p-[1.042vw] rounded-lg bg-[#FFF] grid gap-[40px] xl:gap-[2.083vw]">
                <div className="flex justify-between items-center">
                  <div className="flex gap-[8px] xl:gap-[0.417vw] items-center">
                    <div>
                      <i
                        className="cgupod-gallery text-[#424242]"
                        style={{ fontSize: "1.042vw" }}
                      ></i>
                    </div>
                    <div className="text-[16px] xl:text-[0.833vw] text-[#424242] font-medium">
                      Image001.jpeg
                    </div>
                  </div>
                  <div>
                    <i
                      className="cgupod-three-dots"
                      style={{ fontSize: "0.365vw" }}
                    ></i>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col text-[12px] xl:text-[0.625vw] font-normal text-[#888]">
                    <span>File Size : 1.8MB</span>
                    <span>Last change : 03/04/2019</span>
                  </div>
                  <div>
                    <i
                      className="cgupod-export text-[#AF1E27]"
                      style={{ fontSize: "1.042vw" }}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="p-[20px] xl:p-[1.042vw] rounded-lg bg-[#FFF] grid gap-[40px] xl:gap-[2.083vw]">
                <div className="flex justify-between items-center">
                  <div className="flex gap-[8px] xl:gap-[0.417vw] items-center">
                    <div>
                      <Image
                        src={"/assets/images/svg/video-play.svg"}
                        alt="divider"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className="text-[16px] xl:text-[0.833vw] text-[#424242] font-medium">
                      Video001.mp4
                    </div>
                  </div>
                  <div>
                    <i
                      className="cgupod-three-dots"
                      style={{ fontSize: "0.365vw" }}
                    ></i>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col text-[12px] xl:text-[0.625vw] font-normal text-[#888]">
                    <span>File Size : 1.8MB</span>
                    <span>Last change : 03/04/2019</span>
                  </div>
                  <div>
                    <i
                      className="cgupod-export text-[#AF1E27]"
                      style={{ fontSize: "1.042vw" }}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="p-[20px] xl:p-[1.042vw] rounded-lg bg-[#FFF] grid gap-[40px] xl:gap-[2.083vw]">
                <div className="flex justify-between items-center">
                  <div className="flex gap-[8px] xl:gap-[0.417vw] items-center">
                    <div>
                      <i
                        className="cgupod-gallery text-[#424242]"
                        style={{ fontSize: "1.042vw" }}
                      ></i>
                    </div>
                    <div className="text-[16px] xl:text-[0.833vw] text-[#424242] font-medium">
                      Image001.jpeg
                    </div>
                  </div>
                  <div>
                    <i
                      className="cgupod-three-dots"
                      style={{ fontSize: "0.365vw" }}
                    ></i>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col text-[12px] xl:text-[0.625vw] font-normal text-[#888]">
                    <span>File Size : 1.8MB</span>
                    <span>Last change : 03/04/2019</span>
                  </div>
                  <div>
                    <i
                      className="cgupod-export text-[#AF1E27]"
                      style={{ fontSize: "1.042vw" }}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="p-[20px] xl:p-[1.042vw] rounded-lg bg-[#FFF] grid gap-[40px] xl:gap-[2.083vw]">
                <div className="flex justify-between items-center">
                  <div className="flex gap-[8px] xl:gap-[0.417vw] items-center">
                    <div>
                      <i
                        className="cgupod-document-text text-[#424242]"
                        style={{ fontSize: "1.042vw" }}
                      ></i>
                    </div>
                    <div className="text-[16px] xl:text-[0.833vw] text-[#424242] font-medium">
                      Documents001.pdf
                    </div>
                  </div>
                  <div>
                    <i
                      className="cgupod-three-dots"
                      style={{ fontSize: "0.365vw" }}
                    ></i>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col text-[12px] xl:text-[0.625vw] font-normal text-[#888]">
                    <span>File Size : 1.8MB</span>
                    <span>Last change : 03/04/2019</span>
                  </div>
                  <div>
                    <i
                      className="cgupod-export text-[#AF1E27]"
                      style={{ fontSize: "1.042vw" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </ScrollPanel>
        </div>
        <div className="mt-[32px] lg:mt-[0] lg:absolute bottom-[-70px] left-0 right-0">
          <div className="flex items-center justify-between">
            <div className="col">
              <Link
                href={""}
                className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] opacity-30 transition ease-in-out delay-150"
              >
                <i className="mr-[8px] xl:mr-[0.417vw] cgupod-close-circle text-[22px] xl:text-[1.146]"></i>
                Cancel
              </Link>
            </div>
            <div className="flex gap-1">
              <Link
                href={""}
                className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] transition ease-in-out delay-150"
              >
                <i className="mr-[8px] xl:mr-[0.417vw] cgupod-print text-[22px] xl:text-[1.146vw]"></i>
                Print
              </Link>
              <Link
                href="javascript:void(0)"
                className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] gap-[8px] xl:gap-[0.417vw]
                 xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px]
                  xl:py-[0.625vw] transition ease-in-out delay-150"
              >
                <i className="mr-[8px] xl:mr-[0.417vw] cgupod-save-file text-[22px] xl:text-[1.146vw]"></i>
                Save
              </Link>
              <Link
                href={""}
                className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] transition ease-in-out delay-150"
              >
                <i className="mr-[8px] xl:mr-[0.417vw] cgupod-tick-circle text-[22px] xl:text-[1.146]"></i>
                Submit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttachmentPage;
