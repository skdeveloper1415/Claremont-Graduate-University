import React, { useState } from "react";
import { Noto_Serif_Georgian } from "@next/font/google";
import Link from "next/link";
import Image from "next/image";
import VerticalBarChart from "@/components/allchart/verticalbarchart";
import ChartWrapper from "@/components/chartwrapper/competency";
import PieChartWithImage from "@/components/allchart/piechartwithimage";
import { ScrollPanel } from "primereact/scrollpanel";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { useTheme } from 'next-themes';

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Demographics() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [rowClick, setRowClick] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [filters, setFilters] = useState(null);
  // Data table
  const products = [
    {
      sno: "1",
      designation: "Training Teacher",
      noofopenings: "5",
    },
    {
      sno: "1",
      designation: "Training Teacher",
      noofopenings: "5",
    },
    {
      sno: "1",
      designation: "Training Teacher",
      noofopenings: "5",
    },
    {
      sno: "1",
      designation: "Training Teacher",
      noofopenings: "5",
    },
    {
      sno: "1",
      designation: "Training Teacher",
      noofopenings: "5",
    },
    {
      sno: "1",
      designation: "Training Teacher",
      noofopenings: "5",
    },
    {
      sno: "1",
      designation: "Training Teacher",
      noofopenings: "5",
    },
    {
      sno: "1",
      designation: "Training Teacher",
      noofopenings: "5",
    },
    {
      sno: "1",
      designation: "Training Teacher",
      noofopenings: "5",
    },
    {
      sno: "1",
      designation: "Training Teacher",
      noofopenings: "5",
    },
    {
      sno: "1",
      designation: "Training Teacher",
      noofopenings: "5",
    },
    {
      sno: "1",
      designation: "Training Teacher",
      noofopenings: "5",
    },
  ];
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
  const SearchFilterTemplate = (options) => {
    return (
      <>
        <div className="SearchFilter xl:p-[0.729vw] p-3 xl:rounded-[0.521vw] rounded-lg bg-white boxshadow01 xl:space-y-[0.625vw] space-y-3">
          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText
              placeholder="Search"
              className="xl:h-[2.083vw] h-[36px]"
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
                  <label htmlFor={category.key} className="ml-2">
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

  const EthinicitySnapshotData = [
    {
      value: 245,
    },
    {
      value: 260,
    },
    {
      value: 235,
    },
    {
      value: 175,
    },
    {
      value: 205,
    },
    {
      value: 90,
    },
    {
      value: 185,
    },
    {
      value: 135,
    },
  ];

  const AgeSnapshot = [
    {
      value: 220,
    },
    {
      value: 185,
      itemStyle: {
        color: "#9E8D71",
      },
    },
  ];

  const graphic = [
    {
      type: "image",
      style: {
        image: "/assets/images/svg/male_student.svg",
        width: 50,
        height: 50,
        shape: {
          // x: 0,
          // y: 0,
          // width: 20,
          // height: 20,
          // r: 2, // Border radius
          // stroke: "#ffff", // Border color
          // lineWidth: 1, // Border width
          // fill: "gba(1, 24, 73, 0.2)"
        },
      },
      center: "center",
      left: "center",
      right: "center",
      top: "center",
    },
  ];

  const graphic1 = [
    {
      type: "image",
      style: {
        image: "/assets/images/svg/female_student.svg",
        width: 50,
        height: 50,
        shape: {
          // x: 0,
          // y: 0,
          // width: 20,
          // height: 20,
          // r: 2, // Border radius
          // stroke: "#ffff", // Border color
          // lineWidth: 1, // Border width
          // fill: "gba(1, 24, 73, 0.2)"
        },
      },
      center: "center",
      left: "center",
      right: "center",
      top: "center",
    },
  ];

  return (
    <>
      {/**Title**/}
      <div className={myNotoSerifGeorgian.className}>
        <div className="text-[#262626] text-[32px] xl:text-[1.667vw]">
          Demographics
        </div>
      </div>
      {/**Title**/}
      <div className="SidebarHeight">
        <ScrollPanel style={{ width: "100%", height: "100%" }}>
          <div className="grid grid-cols-12 xl:mt-[1.250vw] mt-6 xl:gap-[1.250vw] gap-5">
            {/**col-12**/}
            <div className="col-span-12">
              <div className="bg-white dark:bg-[#13161B] shadow-[0px 1px 2px 0px] shadow-[rgba(0,0,0,0.08)] rounded-lg xl:rounded-[0.521vw] xl:p-[1.042vw] p-5 relative">
                <ChartWrapper
                  title={"Ethnicity Snapshot"}
                  ExportIcon={true}
                  tabSection={true}
                  infoIcon={true}
                  bulbIcon={true}
                  downloadIcon={true}
                  graphIcon={true}
                  data={
                    <div className="w-full h-[290px] xl:h-[15.156vw]">
                      <VerticalBarChart
                        legend={{
                          show: false,
                        }}
                        grid={{
                          top: "12",
                          right: "15",
                          bottom: "0",
                          left: "20",
                          containLabel: true,
                        }}
                        barcolor={["#FF9475"]}
                        labelposition={"outside"}
                        labelcolor={"#424242"}
                        xAxisLabeldata={[
                          "White",
                          "Hispanic",
                          "Black",
                          "Asian",
                          "American",
                          "Japanese",
                          "Chinese",
                          "African American",
                        ]}
                        name={["DFW Rate"]}
                        minvalue={0}
                        intervalvalue={50}
                        maxvalue={300}
                        data={EthinicitySnapshotData}
                      />
                    </div>
                  }
                />
                <div className="text-xs font-normal text-[#888888] text-center pt-2 absolute -left-5 top-1/2 -rotate-90">
                  No. of Users
                </div>
                <div className="text-xs font-normal text-[#888888] text-center pt-2">
                  Age Groups
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <div className="bg-white dark:bg-[#13161B] shadow-[0px 1px 2px 0px] shadow-[rgba(0,0,0,0.08)] rounded-lg xl:rounded-[0.521vw] xl:p-[1.042vw] p-5 relative">
                <ChartWrapper
                  title={"Age Snapshot"}
                  ExportIcon={true}
                  tabSection={true}
                  i
                  nfoIcon={true}
                  bulbIcon={true}
                  downloadIcon={true}
                  graphIcon={true}
                  data={
                    <div className="w-full h-[290px] xl:h-[16.146vw]">
                      <div className="bg-[#FCF5F6] dark:bg-[#1C2026] xl:py-[0.417vw] py-1 xl:px-[0.833vw] px-3 inline-flex rounded xl:rounded-[0.417vw] text-[#424242] dark:text-[#FFFFFF] font-normal xl:text-[0.729vw] text-xs space-x-1">
                        <span className="text-[#262626] dark:text-[#AAAAAA] font-semibold">
                          35%{" "}
                        </span>{" "}
                        <span>of users are more in the</span>{" "}
                        <span className="text-[#262626] dark:text-[#AAAAAA] font-semibold">
                          age group 30-34
                        </span>
                      </div>
                      <VerticalBarChart
                        legend={{
                          show: false,
                        }}
                        grid={{
                          top: "12%",
                          right: "15",
                          bottom: "15%",
                          left: "20",
                          containLabel: true,
                        }}
                        barcolor={["#968FC3"]}
                        labelposition={"outside"}
                        labelcolor={currentTheme === 'dark' ? '#AAAAAA' : '#424242'}
                        xAxisLabeldata={["Yes", "No"]}
                        name={["DFW Rate"]}
                        minvalue={0}
                        intervalvalue={50}
                        maxvalue={300}
                        data={AgeSnapshot}
                      />
                    </div>
                  }
                />
                <div className="text-xs font-normal text-[#888888] text-center pt-2 absolute -left-5 top-1/2 -rotate-90">
                  No. of Users
                </div>
                <div className="text-xs font-normal text-[#888888] text-center pt-2">
                  Age Groups
                </div>
              </div>
            </div>
            {/**col-6**/}
            <div className="col-span-12 lg:col-span-5">
              <div
                className="bg-white dark:bg-[#13161B] shadow-[0px 1px 2px 0px] shadow-[rgba(0,0,0,0.08)] rounded-lg xl:rounded-[0.521vw] xl:p-[1.042vw] p-5 
        "
              >
                <ChartWrapper
                  title={"Gender Snapshot"}
                  ExportIcon={true}
                  tabSection={true}
                  infoIcon={true}
                  bulbIcon={true}
                  downloadIcon={true}
                  graphIcon={true}
                  data={
                    <div className="grid grid-cols-2 xl:gap-[2.083vw] gap-[30px]">
                      <div>
                        <div className="w-full xl:h-[9.375vw]">
                          <PieChartWithImage
                            chartname={"Services"}
                            data={[
                              { value: 65, name: "Class Support (26)" },
                              { value: 35, name: "Other (34)" },
                            ]}
                            radius={["70%", "100%"]}
                            center={["50%", "50%"]}
                            graphic={graphic}
                            color={currentTheme === 'dark' ?  ['#9E8D71', '#1F2631'] : ['#9E8D71', '#F0E9EA']}
                            legend={{
                              show: false,
                            }}
                          />
                          
                        </div>
                        <div className="text-[#424242] dark:text-[#AAAAAA] xl:text-[0.729vw] text-base font-normal text-center xl:mt-[0.833vw] mt-3">
                          Male
                        </div>
                        <div className="text-[#262626] dark:text-[#FFFFFF] xl:text-[0.938vw] font-semibold text-center space-x-1">
                          <span>1044</span>
                          <span className="text-[#888888] dark:text-[#818181] text-xs xl:text-[0.729vw] font-normal">
                            65%
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="w-full xl:h-[9.375vw]">
                          <PieChartWithImage
                            chartname={"Services"}
                            data={[
                              { value: 35, name: "Class Support (26)" },
                              { value: 65, name: "Other (34)" },
                            ]}
                            radius={["70%", "100%"]}
                            center={["50%", "50%"]}
                            graphic={graphic1}
                            color={currentTheme === 'dark' ?  ['#968FC3', '#1F2631'] : ['#968FC3', '#F0E9EA']}
                            legend={{
                              show: false,
                            }}
                          />
                        </div>
                        <div className="text-[#424242] dark:text-[#AAAAAA] xl:text-[0.729vw] text-base font-normal text-center xl:mt-[0.833vw] mt-3">
                          Female
                        </div>
                        <div className="text-[#262626] dark:text-[#FFFFFF] xl:text-[0.938vw] font-semibold text-center space-x-1">
                          <span>1044</span>
                          <span className="text-[#888888] dark:text-[#818181] text-xs xl:text-[0.729vw] font-normal">
                            65%
                          </span>
                        </div>
                      </div>
                      <div className="col-span-2 text-[#5D5384] dark:text-[#E0E0EF] xl:text-[1.042vw] text-xl font-light xl:leading-[1.250vw] leading-6 text-center">
                        of which <span className="font-bold">30%</span> of the
                        male candidate are more than the female candidate
                      </div>
                    </div>
                  }
                />
              </div>
            </div>

            {/**col-6**/}
            <div className="col-span-12">
              <div className=" mt-[22px] xl:mt-[1.146vw] mb-[60px] xl:mb-[3.125vw]  dark:bg-[#13161B] border border-[#F2EEEE] dark:border-[#1F2A37] rounded-[8px] xl:rounded-[0.417vw] SidebarHeight">
                <div className="flex items-center justify-between xl:px-[1.042vw] px-4 xl:pt-[1.042vw] pt-4 xl:pb-[0.990vw] pb-4">
                  <div className="flex flex-wrap items-center xl:gap-[0.521vw] gap-2">
                    <div className="text-[#262626] dark:text-[#FFFFFF] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-5">Additional Insights</div>
                    <div className="dark:text-[#818181] text-[#888888] xl:text-[0.625vw] text-xs font-medium xl:leading-[0.938vw] leading-5 bg-[#FCF5F6] dark:bg-[#1C2026] xl:rounded-[0.938vw] rounded-2xl xl:px-[0.729vw] px-3 xl:py-[0.313vw] py-1">Display 1 to 10 of 150</div>
                  </div>
                  <div className="flex flex-wrap items-center xl:gap-[1.250vw] gap-5">
                    <div>
                      <span className="p-input-icon-left custm-search">
                        <i className="cgupod-td-searchbar xl:text-[0.833vw] text-xs text-[#888888]" />
                        <InputText placeholder="Search" className="p-inputtext p-component xl:h-[2.083vw] h-[36px] xl:w-[16.927vw] placeholder:text-[#888888] placeholder:font-normal placeholder:xl:text-[0.833vw]" />
                      </span>
                    </div>
                    <div className="flex items-center xl:gap-[0.521vw] gap-2">
                      <Link href={''} className="text-[#888888] dark:text-[#818181] font-normal xl:text-[0.729vw] text-xs dark:bg-[#13161B] bg-white border border-[#EAE0E0] dark:border-[#374151] xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg"><i className="cgupod-print mr-2"></i><span>Print</span></Link>
                      <Link href={''} className="text-[#888888] dark:text-[#818181] font-normal xl:text-[0.729vw] text-xs dark:bg-[#13161B] bg-white border border-[#EAE0E0] dark:border-[#374151] xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg"><i className="cgupod-download mr-2"></i><span>Download</span></Link>
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
                    "Groupname",
                    "Groupdescription",
                    "representative.name",
                    "Groupcreateddate",
                    "Lastmodifieddate",
                  ]}
                  dataKey="id"
                >
                  <Column
                    selectionMode="multiple"
                    style={{ minWidth: "1rem", maxWidth: "1rem" }}
                  ></Column>
                  <Column
                    field="sno"
                    header="S.No"
                    sortable
                    style={{ minWidth: "20%" }}
                  ></Column>
                  <Column
                    field="designation"
                    header="Designation"
                    showFilterMatchModes={false}
                    showFilterMenuOptions={false}
                    showClearButton={false}
                    showApplyButton={false}
                    filter
                    filterElement={SearchFilterTemplate}
                    style={{ minWidth: "45%" }}
                  ></Column>
                  <Column
                    field="noofopenings"
                    header="No of Openings"
                    sortable
                    style={{ minWidth: "30%" }}
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
