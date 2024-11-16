import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Calendar } from "primereact/calendar";
import { Password } from "primereact/password";
import { Noto_Serif_Georgian } from "@next/font/google";
import { ScrollPanel } from "primereact/scrollpanel";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const ProfilePage = () => {
  const [checked, setChecked] = useState(false);
  const [american, setAmerican] = useState(false);
  const [african, setAfrican] = useState(false);
  const [latino, setLatino] = useState(false);
  const [hawaiian, setHawaiian] = useState(false);
  const [asian, setAsian] = useState(false);
  const [others, setOthers] = useState(false);
  const [date, setDate] = useState(null);
  const [value, setValue] = useState("");
  const [arabicLag, setArabicLag] = useState(false);
  const [hindi, setHindi] = useState(false);
  const [portuguese, setPortuguese] = useState(false);
  const [cantonese, setCantonese] = useState(false);
  const [bengali, setBengali] = useState(false);
  const [chinese, setChinese] = useState(false);
  const [italian, setItalian] = useState(false);
  const [russian, setRussian] = useState(false);
  const [japanese, setJapanese] = useState(false);
  const [spanish, setSpanish] = useState(false);
  const [khmer, setKhmer] = useState(false);
  const [tagalog, setTagalog] = useState(false);
  const [french, setFrench] = useState(false);
  const [korean, setKorean] = useState(false);
  const [thai, setThai] = useState(false);
  const [german, setGerman] = useState(false);
  const [mandarin, setMandarin] = useState(false);
  const [turkish, setTurkish] = useState(false);
  const [othersLang, setOthersLang] = useState(false);

  return (
    <div>
      {/* row */}
      <div className={myNotoSerifGeorgian.className}>
        <div className="text-[#262626] text-[32px] xl:text-[1.667vw] mb-[20px] xl:mb[1.67vw]">
          Profile
        </div>
      </div>
      {/* row */}
      <div className="SidebarHeight">
      <ScrollPanel style={{ width: "100%", height: "100%" }}>
        <div
          className="bg-white rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw] grid gap-[24px] xl:gap-[1.250vw]
     border"
        >
          <div className="gap-[16px] xl:gap-[0.833vw] py-[12px] xl:py-[0.625vw] flex items-center ">
            <div className="">
              <Image
                src={"/assets/images/svg/avabrownprofile.svg"}
                alt="Student Detail"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-col gap-[8px] xl:gap-[0.417vw]">
              <span className="text-[30px] xl:text-[1.563vw] text-[#262626]">
                Ava Brown
              </span>
              <span className="text-[18px] xl:text-[0.938vw] text-[#888]">
                Pre Teacher
              </span>
            </div>
          </div>
          <div className="grid">
            <div className="flex justify-between">
              <span className="text-[18px] xl:text-[0.938vw] text-[#262626] font-medium">
                {" "}
                Demographic Information
              </span>
              <span className="text-[#AF1E27] text-[14px] xl:text-[0.729vw] font-normal">
                View Gender & Sexual Orientation
              </span>
            </div>
            <div
              className="bg-[#FCF5F6] border border-[#F2EEEE] rounded px-[20px] xl:px-[1.042vw] py-[16px]
           xl:py-[0.833vw] grid gap-[20px] xl:gap-[1.042vw]"
            >
              <div className="grid grid-cols-2 xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-[24px] xl:gap-[1.250vw] custTextArea">
                <div className="gap-[4px] xl:gap-[0.208vw] grid">
                  <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                    Ethnically ( If 2 Or More & Hispanic/Latino,mark H/L)
                  </span>
                  <div className="custInput">
                    {" "}
                    <InputText
                      placeholder="Two or More"
                      className="xl:h-[2.083vw] h-[36px] xl:w-[100%] placeholder:text-[#888] placeholder:font-normal"
                      style={{
                        background: "#FFFFFF",
                        border: "1px solid #EAE0E0",
                        borderRadius: "8px",
                        fontSize: "0.729vw",
                      }}
                    />
                  </div>
                </div>
                <div className="gap-[4px] xl:gap-[0.208vw] grid">
                  <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                    US Miltary
                  </span>
                  <div className="custInput">
                    {" "}
                    <InputText
                      placeholder="Amaya"
                      className="xl:h-[2.083vw] h-[36px] xl:w-[100%] placeholder:text-[14px] placeholder:text-[#888] placeholder:font-normal"
                      style={{
                        background: "#FFFFFF",
                        border: "1px solid #EAE0E0",
                        borderRadius: "8px",
                        fontSize: "0.729vw",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="grid gap-[16px] xl:gap-[0.833vw]">
                <div className="text-[14px] xl:text-[0.729vw] font-normal text-[#424242]">
                  Multiple Ethnicities ( If selected two or More )
                </div>
                <div className="grid grid-cols-4 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-[8px] xl:gap-[0.417vw] ">
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setAmerican(e.checked)}
                      checked={american}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal">
                      American Indian/Alaskan Native
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput">
                    <Checkbox
                      onChange={(e) => setAfrican(e.checked)}
                      checked={african}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal">
                      Black/ African American
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput">
                    <Checkbox
                      onChange={(e) => setLatino(e.checked)}
                      checked={latino}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal">
                      Hispanic/Latino
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput">
                    <Checkbox
                      onChange={(e) => setHawaiian(e.checked)}
                      checked={hawaiian}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal">
                      Native Hawaiian
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput">
                    <Checkbox
                      onChange={(e) => setChecked(e.checked)}
                      checked={checked}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal">
                      White
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput">
                    <Checkbox
                      onChange={(e) => setAsian(e.checked)}
                      checked={asian}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal">
                      Asian
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput">
                    <Checkbox
                      onChange={(e) => setOthers(e.checked)}
                      checked={others}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal">
                      Others
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid mt-[24px] xl:mt-[1.250vw]">
              <div className="text-[18px] xl:text-[0.938vw] text-[#262626] font-medium">
                Identification
              </div>
              <div
                className="bg-[#FCF5F6] border border-[#F2EEEE] px-[20px] xl:px-[1.042vw] py-[16px]
                  xl:py-[0.833vw] grid gap-[20px] xl:gap-[1.042vw] rounded-lg custTextArea"
              >
                <div className="grid grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-[24px] xl:gap-[1.250vw]">
                  <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                    <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                      Candidate ID
                    </span>
                    <div className="custm-filterserach">
                      <InputText
                        placeholder="CGU001"
                        className="xl:h-[2.083vw] h-[36px] xl:w-[100%] placeholder:text-[14px] placeholder:text-[#888] placeholder:font-normal"
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #EAE0E0",
                          borderRadius: "8px",
                          fontSize: "0.729vw",
                        }}
                      />
                    </div>
                  </div>
                  <div className="gap-[4px] xl:gap-[0.208vw]">
                    <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                      DOB
                    </span>
                    <div className="popupForm inputlabel">
                      <Calendar
                        value={date}
                        onChange={(e) => setDate(e.value)}
                        placeholder=""
                        className="xl:h-[2.083vw] h-[36px] xl:w-[100%] placeholder:text-[0.729vw] placeholder:text-[#888] placeholder:font-normal"
                      />
                    </div>
                  </div>
                  <div className="gap-[4px] xl:gap-[0.208vw]">
                    <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                      SSN
                    </span>
                    {/* <span className="p-input-icon-right">
                    <i className="" />
                    <InputText
                      placeholder="Search"
                      className="xl:h-[2.083vw] h-[36px]"
                      style={{
                        background: "#F5F6F8",
                        border: "1px solid #BECDE3",
                        borderRadius: "8px",
                      }}
                    />
                  </span> */}
                    <div className="w-[100%]">
                      <Password
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        toggleMask
                        className="xl:h-[2.083vw] h-[36px] xl:w-[full] placeholder:text-[0.729vw] placeholder:text-[#888] placeholder:font-normal"
                      />
                      {/* <InputText
                      placeholder="View SSN"
                      showIcon
                      className="xl:h-[2.083vw] h-[36px] xl:w-[12vw] placeholder:text-[0.729vw] placeholder:text-[#888] placeholder:font-normal"
                      style={{
                        background: "#FFFFFF",
                        border: "1px solid #EAE0E0",
                        borderRadius: "8px",
                        fontSize: "0.729vw",
                      }}
                    /> */}
                    </div>
                  </div>
                  <div className="gap-[4px] xl:gap-[0.208vw]">
                    <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                      First Name
                    </span>
                    <div className="custm-filterserach">
                      <InputText
                        placeholder="Awa"
                        className="xl:h-[2.083vw] h-[36px] xl:w-[100%] placeholder:text-[14px] placeholder:text-[#888] placeholder:font-normal"
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #EAE0E0",
                          borderRadius: "8px",
                          fontSize: "0.729vw",
                        }}
                      />
                    </div>
                  </div>
                  <div className="gap-[4px] xl:gap-[0.208vw]">
                    <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                      Middle
                    </span>
                    <div className="custm-filterserach ">
                      <InputText
                        placeholder="Alan"
                        className="xl:h-[2.083vw] h-[36px] xl:w-[100%] placeholder:text-[14px] placeholder:text-[#888] placeholder:font-normal"
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #EAE0E0",
                          borderRadius: "8px",
                          fontSize: "0.729vw",
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                    <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                      Last
                    </span>
                    <div className="custm-filterserach">
                      <InputText
                        placeholder="Amaya"
                        className="xl:h-[2.083vw] h-[36px] xl:w-[100%] placeholder:text-[14px] placeholder:text-[#888] placeholder:font-normal"
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #EAE0E0",
                          borderRadius: "8px",
                          fontSize: "0.729vw",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-[24px] xl:gap-[1.250vw]">
                  <div className="flex col-span-8 xl:w-[100%]">
                    <div className="flex flex-col gap-[4px] xl:gap-[0.208vw] xl:w-[100%]" >
                      <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                        Preferred First/ aka
                      </span>
                      <div className="custm-filterserach xl:w-[100%]">
                        <InputText
                          placeholder="Awa"
                          className="xl:h-[2.083vw] h-[36px] xl:w-[100%] placeholder:text-[14px] placeholder:text-[#888] placeholder:font-normal"
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid #EAE0E0",
                            borderRadius: "8px",
                            fontSize: "0.729vw",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid col-span-4">
                    <div className="flex flex-col justify-center gap-[4px] xl:gap-[0.208vw]">
                      <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                        Former Last
                      </span>
                      <div className="custm-filterserach">
                        <InputText
                          placeholder="Amaya"
                          className="xl:h-[2.083vw] h-[36px] xl:w-[100%] placeholder:text-[14px] placeholder:text-[#888] placeholder:font-normal"
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid #EAE0E0",
                            borderRadius: "8px",
                            fontSize: "0.729vw",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-[24px] xl:gap-[1.250vw]">
                  <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                    <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                      Prefix
                    </span>
                    <div className="custm-filterserach">
                      <InputText
                        placeholder="Mr."
                        className="xl:h-[2.083vw] h-[36px] xl:w-[100%] placeholder:text-[14px] placeholder:text-[#888] placeholder:font-normal"
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #EAE0E0",
                          borderRadius: "8px",
                          fontSize: "0.729vw",
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                    <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                      Suffix
                    </span>
                    <div className="custm-filterserach">
                      <InputText
                        placeholder="Sr."
                        className="xl:h-[2.083vw] h-[36px] xl:w-[100%] placeholder:text-[14px] placeholder:text-[#888] placeholder:font-normal"
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #EAE0E0",
                          borderRadius: "8px",
                          fontSize: "0.729vw",
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                    <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626]">
                      Name Change Edit
                    </span>
                    <div className="custm-filterserach">
                      <InputText
                        placeholder=""
                        className="xl:h-[2.083vw] h-[36px] xl:w-[100%] placeholder:text-[14px] placeholder:text-[#888] placeholder:font-normal"
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #EAE0E0",
                          borderRadius: "8px",
                          fontSize: "0.729vw",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid mt-[24px] xl:mt-[1.250vw]">
              <div className="text-[18px] xl:text-[0.938vw] text-[#262626] font-medium">
                Identification
              </div>
              <div
                className="bg-[#FCF5F6] border border-[#F2EEEE] rounded px-[20px] xl:px-[1.042vw] py-[16px]
           xl:py-[0.833vw] grid gap-[20px] xl:gap-[1.042vw]"
              >
                <div className="grid grid-cols-4 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-[20px] xl:gap-[1.042vw]">
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setArabicLag(e.checked)}
                      checked={arabicLag}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal">
                      Arabic
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setHindi(e.checked)}
                      checked={hindi}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal">
                      Hindi
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setPortuguese(e.checked)}
                      checked={portuguese}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal">
                      Portuguese
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setCantonese(e.checked)}
                      checked={cantonese}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal">
                      Cantonese
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setBengali(e.checked)}
                      checked={bengali}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal">
                      Bengali
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setChinese(e.checked)}
                      checked={chinese}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal">
                      Chinese
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setItalian(e.checked)}
                      checked={italian}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal">
                      Italian
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setRussian(e.checked)}
                      checked={russian}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal">
                      Russian
                    </div>
                  </div>{" "}
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setJapanese(e.checked)}
                      checked={japanese}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal">
                      Japanese
                    </div>
                  </div>{" "}
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setSpanish(e.checked)}
                      checked={spanish}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal">
                      Spanish
                    </div>
                  </div>{" "}
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setKhmer(e.checked)}
                      checked={khmer}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal">
                      Khmer
                    </div>
                  </div>{" "}
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setTagalog(e.checked)}
                      checked={tagalog}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal">
                      Tagalog
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setFrench(e.checked)}
                      checked={french}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal">
                      French
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setKorean(e.checked)}
                      checked={korean}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal">
                      Korean
                    </div>
                  </div>{" "}
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setThai(e.checked)}
                      checked={thai}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal">
                      Thai
                    </div>
                  </div>{" "}
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setGerman(e.checked)}
                      checked={german}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal">
                      German
                    </div>
                  </div>{" "}
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setMandarin(e.checked)}
                      checked={mandarin}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal">
                      Mandarin
                    </div>
                  </div>{" "}
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setTurkish(e.checked)}
                      checked={turkish}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal">
                      Turkish
                    </div>
                  </div>
                  <div className="gap-[8px] xl:gap-[0.417vw] flex loginInput items-center">
                    <Checkbox
                      onChange={(e) => setOthersLang(e.checked)}
                      checked={othersLang}
                    ></Checkbox>
                    <div className="text-[#424242] text-[14px] xl:text-[0.729vw] font-normal">
                      Others
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </ScrollPanel>
      </div>

      <div className="mt-[40px] xl:mt-[2.083vw] lg:mt-[0] lg:absolute bottom-[-70px] left-0 right-0">
        <div className="flex items-center justify-between">
          <div className="col">
            <Link
              href="javascript:void(0)"
              className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] opacity-30 transition ease-in-out delay-150"
            >
              <i className="mr-[8px] xl:mr-[0.417vw] cgupod-close-circle text-[22px] xl:text-[1.146]"></i>
              Cancel
            </Link>
          </div>
          <div className="col">
            <div className="flex gap-[8px] xl:gap-[0.417vw]">
              <Link
                href="javascript:void(0)"
                className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] gap-[8px] xl:gap-[0.417vw]
               xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px]
               xl:py-[0.625vw] transition ease-in-out delay-150"
              >
                <i className="mr-[8px] xl:mr-[0.417vw] cgupod-print text-[18px] xl:text-[0.938vw]"></i>
                Print Report{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
