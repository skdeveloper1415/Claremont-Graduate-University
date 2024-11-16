import { Noto_Serif_Georgian } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { useEffect, useRef, useState } from "react";
import { Toast } from "primereact/toast";
import { ProgressSpinner } from "primereact/progressspinner";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useTheme } from "next-themes";
const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const UpdatedPopUp = (props) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const toast = useRef(null);
  const [loading, setLoading] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(100);
    }, 30000); // Set the duration in milliseconds

    return () => {
      clearTimeout(timer);
    };
  }, []);

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
                <div className="text-[#262626] dark:text-[#fff] xl:text-[1.25vw] text-xl font-normal xl:leading-[1.563vw] leading-7 ">
                  Import Scores
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center xl:px-[1.667vw] px-[32px] py-[150px] xl:py-[7.813vw]">
            <div className="relative h-full">
              <div className="bg-white border border-[#EAE0E0] xl:rounded-[0.521] rounded-lg xl:p-[0.938vw] p-4 flex flex-col items-center justify-center xl:gap-[1.042vw] gap-5 h-[600px] xl:h-[31.25vw] dark:bg-[#13161B] dark:border-[#9CA3AF] dark:border-dashed dark:border-[2px]">
                <Toast ref={toast}></Toast>
                <div className="fileuploadbtn text-center">

                  <div>
                    {loading ? (
                      <div style={{ width: '200px', height: '200px' }}>
                        <CircularProgressbar
                          value={loading}
                          text={`${loading}%`}
                          styles={buildStyles({
                            textColor: currentTheme === 'dark' ?  '#fff' : '#101828',
                            pathColor: '#EC4751',
                            trailColor: currentTheme === 'dark' ?  '#262626' : '#F6F6F6',  // Set trail color to grey
                          })}
                        />
                      </div>
                    ) : (
                      <div style={{ width: '200px', height: '200px' }}>
                        <CircularProgressbar
                          value={loading}
                          text={`${loading}%`}
                          styles={buildStyles({
                            textColor: currentTheme === 'dark' ?  '#fff' : '#101828',
                            pathColor: '#EC4751',
                            trailColor: currentTheme === 'dark' ?  '#262626' : '#F6F6F6',  // Set trail color to grey
                          })}
                        />
                      </div>
                    )}
                  </div>
                  <h5 className="text-lg font-semibold text-[#262626] dark:text-[#fff] mt-8">Drag CSV here</h5>
                  <p className="text-sm 2xl:text-base text-[#888888] dark:text-[#818181]">
                    or, click to browse (4 MB max)
                  </p>
                </div>
              </div>

              <div className="absolute left-2 right-2 py-8">
                <div className="flex items-center justify-between">
                  <div className="col">
                    <Link
                      href={""}
                      className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] transition ease-in-out delay-150 dark:bg-[#13161B] dark:border-[#F5747C] dark:text-[#F5747C]"
                    >
                      <i className="mr-[8px] xl:mr-[0.417vw] cgupod-close-circle text-[22px] xl:text-[1.146]"></i>
                      Cancel
                    </Link>
                  </div>
                  <div className="flex gap-1">
                    <Link
                      href={""}
                      className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] transition ease-in-out delay-150 dark:bg-[#AF1E27] dark:hover:bg-[white] dark:hover:text-[#AF1E27] dark:text-[#fff]"
                    >
                      <i className="mr-[8px] xl:mr-[0.417vw] cgupod-print text-[22px] xl:text-[1.146]"></i>
                      Import User
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
      </div>
    </>
  );
};

export default UpdatedPopUp;
