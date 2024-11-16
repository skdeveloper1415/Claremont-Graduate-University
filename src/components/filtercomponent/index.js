import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Work_Sans } from "@next/font/google";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Sidebar } from "primereact/sidebar";
import { MultiSelect } from "primereact/multiselect";

const myworksans = Work_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function FilterComponent(props) {
  const [value, setValue] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const [selectedDataSource, setSelectedDataSource] = useState(null);
  const [selectedGeography, setSelectedGeography] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedHalfYear, setSelectedHalfYear] = useState(null);
  const [selectedQuarter, setSelectedQuarter] = useState(null);
  const dataSource = [{ name: "All" }, { name: "Data 1" }, { name: "Data 2" }];
  const geography = [{ name: "All" }, { name: "Data 1" }, { name: "Data 2" }];
  const category = [{ name: "All" }, { name: "Data 1" }, { name: "Data 2" }];
  const type = [{ name: "Order" }, { name: "Data 1" }, { name: "Data 2" }];
  const year = [{ name: "All" }, { name: "Data 1" }, { name: "Data 2" }];
  const halfYear = [{ name: "All" }, { name: "Data 1" }, { name: "Data 2" }];
  const quarter = [{ name: "All" }, { name: "Data 1" }, { name: "Data 2" }];

  return (
    <div
      className={`${
        props.topTab
          ? "xl:top-[8vw] top-[153px] pr-[0.833vw] xl:pr-[0.833vw] mr-[-16px] xl:mr-[-0.833vw] pl-[128px] ml-[-128px]"
          : "xl:top-[4.27vw] top-[82px] xl:mt-[-1.67vw] mt-[-32px]"
      } xl:sticky z-[4] filter-sec bg-[#FCF5F6] dark:bg-[#1C2026] xl:pb-[0.525vw] pb-[10px]`}
    >
      <div className="flex gap-4 items-center">
        <div className="w-full min-h-[65px] xl:min-h-[3.65vw] bg-white flex flex-wrap justify-between rounded-[8px] xl:rounded-[0.417vw] dark:bg-[#191A1E] pl-2 xl:pl-[0.833vw] xl:pr-0 pr-2 shadow">
          <div className="flex flex-wrap justify-start items-center gap-1 pt-2 pb-1 xl:py-1">
            <div className=" lg:w-auto w-full">
              <div className="flex flex-wrap gap-[4px] items-center">
                <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[50px] hover:max-w-[75px] ease-in duration-300 overflow-hidden bg-[#FCF5F6] dark:bg-[#24262D]">
                  <span className="text-[#6C768B] dark:text-[#B3B9C6] text-[10px] font-normal">
                    Year
                  </span>
                  <div className="custDropdown">
                    <Dropdown
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.value)}
                      options={category}
                      optionLabel="name"
                      placeholder="All"
                      className="min-w-[70px]"
                    />
                  </div>
                </div>
                <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[50px] hover:max-w-[75px] ease-in duration-300 overflow-hidden bg-[#FCF5F6] dark:bg-[#24262D]">
                  <span className="text-[#6C768B] dark:text-[#B3B9C6] text-[10px] font-normal">
                    Type
                  </span>
                  <div className="custDropdown">
                    <Dropdown
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.value)}
                      options={category}
                      optionLabel="name"
                      placeholder="All"
                      className="min-w-[70px]"
                    />
                  </div>
                </div>
                <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[65px] hover:max-w-[90px] ease-in duration-300 overflow-hidden bg-[#FCF5F6] dark:bg-[#24262D]">
                  <span className="text-[#6C768B] dark:text-[#B3B9C6] text-[10px] font-normal">
                    Subject
                  </span>
                  <div className="custDropdown">
                    <Dropdown
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.value)}
                      options={type}
                      optionLabel="name"
                      placeholder="All"
                      className="min-w-[85px]"
                    />
                  </div>
                </div>

                <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[50px] hover:max-w-[75px] ease-in duration-300 overflow-hidden bg-[#FCF5F6] dark:bg-[#24262D]">
                  <span className="text-[#6C768B] dark:text-[#B3B9C6] text-[10px] font-normal">
                    Phase
                  </span>
                  <div className="custDropdown">
                    <Dropdown
                      value={selectedHalfYear}
                      onChange={(e) => setSelectedHalfYear(e.value)}
                      options={halfYear}
                      optionLabel="name"
                      placeholder="All"
                      className="min-w-[70px]"
                    />
                  </div>
                </div>
                <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[65px] hover:max-w-[90px] ease-in duration-300 overflow-hidden bg-[#FCF5F6] dark:bg-[#24262D]">
                  <span className="text-[#6C768B] dark:text-[#B3B9C6] text-[10px] font-normal">
                    Status
                  </span>
                  <div className="custDropdown">
                    <Dropdown
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.value)}
                      options={type}
                      optionLabel="name"
                      placeholder="All"
                      className="min-w-[85px]"
                    />
                  </div>
                </div>
                <div className="text-[#9CA1AB] text-[14px] font-normal px-[12px] dark:text-[#B3B9C6]">
                  <div className={myworksans.className}>
                    No filter applied yet
                  </div>
                </div>
                <Link
                  href="javascript:void(0)"
                  className="text-[#24262D] text-[12px] font-medium border border-[#ECEFF3] rounded-[8px] xl:rounded-[0.417vw] px-2 py-1.5
                  hover:text-[#8276B1] dark:text-white dark:border-[#363A44] hover:bg-[#F5F6F8] dark:hover:text-[black] dark:bg-[#24262D]
                   dark:hover:bg-[#c3c3c6] "
                  title="Add"
                >
                  Add{" "}
                  <i className="cgupod-plus ml-1 text-[12px] xl:text-[0.625vw] text-black"></i>
                </Link>
              </div>
            </div>

            {/* <div className="text-[#9CA1AB] text-[14px] font-normal px-[12px] dark:text-[#B3B9C6]">
              <div className={myworksans.className}>No filter applied yet</div>
            </div>
            <Link
              href=""
              className="text-[#24262D] text-[12px] font-medium border border-[#ECEFF3] rounded-[8px] xl:rounded-[0.417vw] px-2 py-1.5 dark:text-white dark:border-[#363A44] hover:bg-[#F5F6F8] dark:hover:text-[black] dark:bg-[#24262D] dark:hover:bg-[#c3c3c6] "
              title="Add"
            >
              Add <i className="redingtonHR-pluse ml-1"></i>
            </Link> */}
          </div>
          <div className="flex xl:justify-end gap-2 xl:py-0 pt-1 pb-2 xl:w-auto w-full">
            <Link
              href=""
              className="p-2 xl:text-end text-center self-center xl:w-auto w-1/2 group"
              title="Applied Filters"
            >
              <i className="cgupod-right-line-arrow text-[12px] text-[#888] dark:text-[#B3B9C6] group-hover:text-[#AF1E27]"></i>
              <div className="text-[#888] dark:text-[#B3B9C6] group-hover:text-[#AF1E27] text-[12px] font-normal leading-tight dark:text-[#B3B9C6]">
                <div
                  onClick={() => setKpiConfigrationPopup(true)}
                  className={myworksans.className}
                >
                  Applied <br /> Filters
                </div>
              </div>
            </Link>
            <div className="rounded-r-[8px] xl:rounded-r-[0.417vw] flex items-center justify-center gap-2 px-[12px] xl:px-[0.833vw] py-[8px] xl:py-[0.730vw] bg-[#AF1E27] hover:bg-[#AF1E27] xl:w-auto w-1/2 cursor-pointer border border-[#AF1E27] ease-linear duration-200">
              <i className="cgupod-filter text-white text-[16px] xl:text-[1.25vw]"></i>
              <span className="text-[#FFF] text-[12px] font-normal leading-tight">
                <div className={myworksans.className}>
                  All <br /> Filters
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
