import React, { useState } from "react";
import { Noto_Serif_Georgian } from "@next/font/google";
import Link from "next/link";
import Image from "next/image";
import ReactEcharts from "echarts-for-react";
import { Tag } from "primereact/tag";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import ChartWrapper from "@/components/chartwrapper/competency";
import { ScrollPanel } from "primereact/scrollpanel";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Placements() {
  const [rowClick, setRowClick] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [filters, setFilters] = useState(null);
  // Data table
  const products = [
    {
      image: "Avatar1",
      name: "Marvin McKinney",
      placement: "Pre Teaching",
      schoolname: "Phillips Academy Andover boarding school",
      startdate: "1/10/2020",
      enddate: "1/10/2020",
    },
    {
      image: "Avatar2",
      name: "Marvin McKinney",
      placement: "Pre Teaching",
      schoolname: "Phillips Academy Andover boarding school",
      startdate: "1/10/2020",
      enddate: "1/10/2020",
    },
    {
      image: "Avatar3",
      name: "Marvin McKinney",
      placement: "Pre Teaching",
      schoolname: "Phillips Academy Andover boarding school",
      startdate: "1/10/2020",
      enddate: "1/10/2020",
    },
    {
      image: "Avatar4",
      name: "Marvin McKinney",
      placement: "Pre Teaching",
      schoolname: "Phillips Academy Andover boarding school",
      startdate: "1/10/2020",
      enddate: "1/10/2020",
    },
    {
      image: "Avatar1",
      name: "Marvin McKinney",
      placement: "Pre Teaching",
      schoolname: "Phillips Academy Andover boarding school",
      startdate: "1/10/2020",
      enddate: "1/10/2020",
    },
    {
      image: "Avatar2",
      name: "Marvin McKinney",
      placement: "Pre Teaching",
      schoolname: "Phillips Academy Andover boarding school",
      startdate: "1/10/2020",
      enddate: "1/10/2020",
    },
    {
      image: "Avatar3",
      name: "Marvin McKinney",
      placement: "Pre Teaching",
      schoolname: "Phillips Academy Andover boarding school",
      startdate: "1/10/2020",
      enddate: "1/10/2020",
    },
    {
      image: "Avatar4",
      name: "Marvin McKinney",
      placement: "Pre Teaching",
      schoolname: "Phillips Academy Andover boarding school",
      startdate: "1/10/2020",
      enddate: "1/10/2020",
    },
    {
      image: "Avatar1",
      name: "Marvin McKinney",
      placement: "Pre Teaching",
      schoolname: "Phillips Academy Andover boarding school",
      startdate: "1/10/2020",
      enddate: "1/10/2020",
    },
    {
      image: "Avatar2",
      name: "Marvin McKinney",
      placement: "Pre Teaching",
      schoolname: "Phillips Academy Andover boarding school",
      startdate: "1/10/2020",
      enddate: "1/10/2020",
    },
    {
      image: "Avatar3",
      name: "Marvin McKinney",
      placement: "Pre Teaching",
      schoolname: "Phillips Academy Andover boarding school",
      startdate: "1/10/2020",
      enddate: "1/10/2020",
    },
    {
      image: "Avatar4",
      name: "Marvin McKinney",
      placement: "Pre Teaching",
      schoolname: "Phillips Academy Andover boarding school",
      startdate: "1/10/2020",
      enddate: "1/10/2020",
    },
  ];

  const statusBodyTemplate = (product) => {
    return (
      <Tag value={product.csetstatus} severity={getSeverity(product)}></Tag>
    );
  };

  const getSeverity = (product) => {
    switch (product.csetstatus) {
      case "Completed":
        return "success";

      case "In Progress":
        return "warning";

      default:
        return null;
    }
  };

  const SearchFilterTemplate = (options) => {
    return (
      <>
        <div className="SearchFilter xl:p-[0.729vw] p-3 xl:rounded-[0.521vw] rounded-lg bg-white boxshadow01 xl:space-y-[0.625vw] space-y-3">
          <span className="p-input-icon-left custm-filterserach">
            <i
              className="cgupod-td-filter-serach"
              style={{ color: "#9CA1AB", fontSize: "0.8rem" }}
            />
            <InputText
              placeholder="Search"
              className="xl:h-[2.292vw] h-[36px] placeholder:font-normal placeholder:text-[#9CA1AB]"
              style={{
                background: "#F5F6F8",
                border: "1px solid #BECDE3",
                borderRadius: "8px",
              }}
            />
          </span>
          <div className="flex flex-col xl:gap-[0.625vw] gap-2">
            {categories.map((category) => {
              return (
                <div key={category.key} className="flex items-center">
                  <Checkbox
                    inputId={category.key}
                    name="category"
                    value={category}
                    onChange={onCategoryChange}
                    checked={selectedCategories.some(
                      (item) => item.key === category.key
                    )}
                    className="cutsm_checkbox"
                  />
                  <label
                    htmlFor={category.key}
                    className="ml-2 font-medium text-[#374151] xl:text-[0.833vw] text-sm"
                  >
                    {category.name}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <div className="flex items-center xl:gap-[0.833vw] gap-3 text-[#4B586E] xl:text-[0.938vw] text-sm dark:text-[#818181]">
          <Link href={""}>
            <i className="cgupod-trash"></i>
          </Link>
        </div>
      </>
    );
  };
  /*---Table End--*/

  const categories = [
    { name: "Option 1", key: "A" },
    { name: "Option 2", key: "M" },
    { name: "Option 3", key: "P" },
    { name: "Option 4", key: "R" },
    { name: "Option 5", key: "R" },
  ];
  const [selectedCategories, setSelectedCategories] = useState([categories[1]]);

  const onCategoryChange = (e) => {
    let _selectedCategories = [...selectedCategories];

    if (e.checked) _selectedCategories.push(e.value);
    else
      _selectedCategories = _selectedCategories.filter(
        (category) => category.key !== e.value.key
      );

    setSelectedCategories(_selectedCategories);
  };

  const statusSnapshot = {
    legend: {
      show: false,
    },

    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["10%", "90%"],
        center: ["50%", "50%"],
        selectedMode: "single",
        selectedOffset: 5,
        roseType: "radius",
        color: ["#C57CB5", "#FFCA6D"],
        data: [
          { value: 250, name: "In Progress", selected: true },
          { value: 150, name: "Completed" },
        ],
        label: {
          lineHeight: 15,
          formatter: "{c}\n {b} \n Over 55% ",
        },
        labelLine: {
          show: true,
          lineStyle: {
            color: "rgba(0, 0, 0, 1)",
          },
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  const credsubjectsnapshot = {
    legend: {
      show: false,
    },

    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["10%", "90%"],
        center: ["50%", "50%"],
        selectedMode: "single",
        selectedOffset: 5,
        roseType: "radius",
        color: ["#FF9475", "#EBEA81"],
        data: [
          { value: 220, name: "Multiple Subject" },
          { value: 320, name: "English", selected: true },
        ],
        label: {
          lineHeight: 15,
          formatter: "{c}\n {b} \n Over 55% ",
        },
        labelLine: {
          show: true,
          lineStyle: {
            color: "rgba(0, 0, 0, 1)",
          },
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  return (
    <>
      {/**Title**/}
      <div className={myNotoSerifGeorgian.className}>
        <div className="text-[#262626] text-[32px] xl:text-[1.667vw] dark:text-white">
          Placements
        </div>
      </div>
      {/**Title**/}
      <div className="PersonalDetails">
        <ScrollPanel style={{ width: "100%", height: "100%" }}>
          <div className="grid grid-cols-12 xl:mt-[1.250vw] mt-6 xl:gap-[1.250vw] gap-5">
            {/**col-12**/}
            <div className="col-span-12">
              <div className="bg-white border border-[#F2EEEE] rounded-lg xl:rounded-[0.521vw] dark:border-[#1F2A37] dark:bg-[#13161B]">
                <div className="flex flex-wrap items-center justify-between xl:px-[1.042vw] px-4 xl:pt-[1.042vw] pt-4 xl:pb-[0.990vw] pb-4">
                  <div className="flex flex-wrap items-center xl:gap-[0.521vw] gap-2">
                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-5 dark:text-white">
                      Placement Details
                    </div>
                    <div className="text-[#888888] xl:text-[0.625vw] text-xs font-medium xl:leading-[0.938vw] leading-5 bg-[#FCF5F6] xl:rounded-[0.938vw] rounded-2xl xl:px-[0.729vw] px-3 xl:py-[0.313vw] py-1 dark:bg-[#1C2026] dark:text-[#818181]">
                      Display 1 to 10 of 150
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center xl:gap-[1.250vw] gap-5">
                    <div>
                      <span className="p-input-icon-left custm-search">
                        <i className="cgupod-td-searchbar xl:text-[0.833vw] text-xs text-[#888888]" />
                        <InputText
                          placeholder="Search"
                          className="xl:h-[2.083vw] h-[36px] w-full xl:w-[16.927vw] placeholder:text-[#888888] placeholder:font-normal placeholder:xl:text-[0.833vw]"
                          style={{borderRadius:'8px'}}
                        />
                      </span>
                    </div>
                    <div className="flex items-center xl:gap-[0.521vw] gap-2">
                      <Link
                        href={""}
                        className="text-[#888888] font-normal xl:text-[0.729vw] text-xs bg-white border border-[#EAE0E0] xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg flex items-center xl:gap-[0.521vw] gap-2 dark:bg-[#13161B] dark:border-[#374151] dark:text-[#818181]"
                      >
                        <i className="cgupod-print"></i>
                        <span>Print</span>
                      </Link>
                      <Link
                        href={""}
                        className="text-[#888888] font-normal xl:text-[0.729vw] text-xs bg-white border border-[#EAE0E0] xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg flex items-center xl:gap-[0.521vw] gap-2 dark:bg-[#13161B] dark:border-[#374151] dark:text-[#818181]"
                      >
                        <i className="cgupod-download"></i>
                        <span>Download</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="px-[20px] xl:px-[1.042vw] py-[8px] border-t border-[#F2EEEE]">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="text-[12px] xl:text-[0.625vw] px-[20px] xl:px-[1.042vw] py-[6px] rounded-[6px] cursor-pointer text-[#fff] bg-[#EC4751] font-normal">
                      All
                    </div>
                    <div className="text-[12px] xl:text-[0.625vw] px-[20px] xl:px-[1.042vw] py-[6px] rounded-[6px] cursor-pointer text-[#424242] bg-[#fff] border border-[#EAE0E0] font-normal dark:bg-[#13161B] dark:border-[#374151] dark:text-[#AAAAAA]">
                      Pre Teaching
                    </div>
                    <div className="text-[12px] xl:text-[0.625vw] px-[20px] xl:px-[1.042vw] py-[6px] rounded-[6px] cursor-pointer text-[#424242] bg-[#fff] border border-[#EAE0E0] font-normal dark:bg-[#13161B] dark:border-[#374151] dark:text-[#AAAAAA]">
                      Teaching
                    </div>
                    <div className="text-[12px] xl:text-[0.625vw] px-[20px] xl:px-[1.042vw] py-[6px] rounded-[6px] cursor-pointer text-[#424242] bg-[#fff] border border-[#EAE0E0] font-normal dark:bg-[#13161B] dark:border-[#374151] dark:text-[#AAAAAA]">
                      In Progress
                    </div>
                    <div className="text-[12px] xl:text-[0.625vw] px-[20px] xl:px-[1.042vw] py-[6px] rounded-[6px] cursor-pointer text-[#424242] bg-[#fff] border border-[#EAE0E0] font-normal dark:bg-[#13161B] dark:border-[#374151] dark:text-[#AAAAAA]">
                      No Placement
                    </div>
                    <div className="text-[12px] xl:text-[0.625vw] px-[20px] xl:px-[1.042vw] py-[6px] rounded-[6px] cursor-pointer text-[#424242] bg-[#fff] border border-[#EAE0E0] font-normal dark:bg-[#13161B] dark:border-[#374151] dark:text-[#AAAAAA]">
                      Principals
                    </div>
                    <div className="text-[12px] xl:text-[0.625vw] px-[20px] xl:px-[1.042vw] py-[6px] rounded-[6px] cursor-pointer text-[#424242] bg-[#fff] border border-[#EAE0E0] font-normal dark:bg-[#13161B] dark:border-[#374151] dark:text-[#AAAAAA]">
                      Advisors
                    </div>
                  </div>
                </div>
                <DataTable
                  value={products}
                  className="custTable tableCust custCheckBox"
                  scrollable
                  responsiveLayout="scroll"
                  style={{ width: "100%" }}
                  paginator
                  paginatorTemplate="CurrentPageReport RowsPerPageDropdown PrevPageLink PageLinks NextPageLink custmpaginator"
                  currentPageReportTemplate="Rows per page  {first}-{last} of {totalRecords}"
                  rowsPerPageOptions={[5, 10, 25, 50]}
                  rows={10}
                  onSelectionChange={(e) => setSelectedProducts(e.value)}
                  selectionMode={rowClick ? null : "checkbox"}
                  selection={selectedProducts}
                  filters={filters}
                  globalFilterFields={[
                    "id",
                    "name",
                    "email.name",
                    "designation",
                  ]}
                  dataKey="id"
                >
                  <Column
                    selectionMode="multiple"
                    style={{ maxWidth: "2rem" }}
                  ></Column>
                  <Column
                    field="name"
                    header="Name"
                    showFilterMatchModes={false}
                    showFilterMenuOptions={false}
                    showClearButton={false}
                    showApplyButton={false}
                    filter
                    filterElement={SearchFilterTemplate}
                    style={{ minWidth: "10rem" }}
                  ></Column>
                  <Column
                    field="placement"
                    header="Placement"
                    showFilterMatchModes={false}
                    showFilterMenuOptions={false}
                    showClearButton={false}
                    showApplyButton={false}
                    filter
                    filterElement={SearchFilterTemplate}
                    style={{ minWidth: "10rem" }}
                  ></Column>
                  <Column
                    field="schoolname"
                    header="School Name"
                    showFilterMatchModes={false}
                    showFilterMenuOptions={false}
                    showClearButton={false}
                    showApplyButton={false}
                    filter
                    filterElement={SearchFilterTemplate}
                    style={{ minWidth: "15rem" }}
                  ></Column>
                  <Column
                    field="startdate"
                    header="Start Date"
                    showFilterMatchModes={false}
                    showFilterMenuOptions={false}
                    showClearButton={false}
                    showApplyButton={false}
                    filter
                    filterElement={SearchFilterTemplate}
                    style={{ minWidth: "8rem" }}
                  ></Column>
                  <Column
                    field="enddate"
                    header="End Date"
                    showFilterMatchModes={false}
                    showFilterMenuOptions={false}
                    showClearButton={false}
                    showApplyButton={false}
                    filter
                    filterElement={SearchFilterTemplate}
                    style={{ minWidth: "8rem" }}
                  ></Column>
                  <Column
                    header="Action"
                    style={{ minWidth: "5rem" }}
                    body={actionBodyTemplate}
                    align="center"
                    frozen
                    alignFrozen="right"
                    className="action-shadow-table"
                  ></Column>
                </DataTable>
              </div>
            </div>
          </div>
        </ScrollPanel>
      </div>
    </>
  );
}
