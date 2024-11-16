import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PersonalDetails from "./personaldetails";
import AdmissionInfo from "./admissioninfo";
import ProgramRequirements from "./programrequirements";
import Notes from "./notes";
import Competency from "./competency";
import { Noto_Serif_Georgian } from "@next/font/google";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function PreliminaryProgram() {
  const [rowClick, setRowClick] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [filters, setFilters] = useState(null);
  const [checked, setChecked] = useState(false);
  const [visibleRight, setVisibleRight] = useState(false);
  // Data table
  const products = [
    {
      id: "487441",
      image: "Avatar1",
      name: "Robert Fox",
      currentYear: "Spring 2017",
      applicationYear: "Spring 2018",
      deferTo: "Spring 2018",
      subject: "Math",
      undergraduates: "The College if New Jersey",
      gap: "3.344",
      teachgap: "Yes",
      aidapp: "Yes",
      intScore: "87%",
      status: "status",
      condAdmitReason: "One line reason to be place here",
    },
    {
      id: "487442",
      image: "Avatar2",
      name: "Robert Fox",
      currentYear: "Spring 2017",
      applicationYear: "Spring 2018",
      deferTo: "Spring 2018",
      subject: "Math",
      undergraduates: "The College if New Jersey",
      gap: "3.344",
      teachgap: "Yes",
      aidapp: "Yes",
      intScore: "87%",
      status: "status",
      condAdmitReason: "One line reason to be place here",
    },
    {
      id: "487443",
      image: "Avatar3",
      name: "Robert Fox",
      currentYear: "Spring 2017",
      applicationYear: "Spring 2018",
      deferTo: "Spring 2018",
      subject: "Math",
      undergraduates: "The College if New Jersey",
      gap: "3.344",
      teachgap: "Yes",
      aidapp: "Yes",
      intScore: "87%",
      status: "status",
      condAdmitReason: "One line reason to be place here",
    },
    {
      id: "487444",
      image: "Avatar4",
      name: "Robert Fox",
      currentYear: "Spring 2017",
      applicationYear: "Spring 2018",
      deferTo: "Spring 2018",
      subject: "Math",
      undergraduates: "The College if New Jersey",
      gap: "3.344",
      teachgap: "Yes",
      aidapp: "Yes",
      intScore: "87%",
      status: "status",
      condAdmitReason: "One line reason to be place here",
    },
    {
      id: "487445",
      image: "Avatar1",
      name: "Robert Fox",
      currentYear: "Spring 2017",
      applicationYear: "Spring 2018",
      deferTo: "Spring 2018",
      subject: "Math",
      undergraduates: "The College if New Jersey",
      gap: "3.344",
      teachgap: "Yes",
      aidapp: "Yes",
      intScore: "87%",
      status: "status",
      condAdmitReason: "One line reason to be place here",
    },
    {
      id: "487446",
      image: "Avatar2",
      name: "Robert Fox",
      currentYear: "Spring 2017",
      applicationYear: "Spring 2018",
      deferTo: "Spring 2018",
      subject: "Math",
      undergraduates: "The College if New Jersey",
      gap: "3.344",
      teachgap: "Yes",
      aidapp: "Yes",
      intScore: "87%",
      status: "status",
      condAdmitReason: "One line reason to be place here",
    },
    {
      id: "487447",
      image: "Avatar3",
      name: "Robert Fox",
      currentYear: "Spring 2017",
      applicationYear: "Spring 2018",
      deferTo: "Spring 2018",
      subject: "Math",
      undergraduates: "The College if New Jersey",
      gap: "3.344",
      teachgap: "Yes",
      aidapp: "Yes",
      intScore: "87%",
      status: "status",
      condAdmitReason: "One line reason to be place here",
    },
    {
      id: "487448",
      image: "Avatar4",
      name: "Robert Fox",
      currentYear: "Spring 2017",
      applicationYear: "Spring 2018",
      deferTo: "Spring 2018",
      subject: "Math",
      undergraduates: "The College if New Jersey",
      gap: "3.344",
      teachgap: "Yes",
      aidapp: "Yes",
      intScore: "87%",
      status: "status",
      condAdmitReason: "One line reason to be place here",
    },
    {
      id: "487449",
      image: "Avatar1",
      name: "Robert Fox",
      currentYear: "Spring 2017",
      applicationYear: "Spring 2018",
      deferTo: "Spring 2018",
      subject: "Math",
      undergraduates: "The College if New Jersey",
      gap: "3.344",
      teachgap: "Yes",
      aidapp: "Yes",
      intScore: "87%",
      status: "status",
      condAdmitReason: "One line reason to be place here",
    },
    {
      id: "487450",
      image: "Avatar2",
      name: "Robert Fox",
      currentYear: "Spring 2017",
      applicationYear: "Spring 2018",
      deferTo: "Spring 2018",
      subject: "Math",
      undergraduates: "The College if New Jersey",
      gap: "3.344",
      teachgap: "Yes",
      aidapp: "Yes",
      intScore: "87%",
      status: "status",
      condAdmitReason: "One line reason to be place here",
    },
    {
      id: "487451",
      image: "Avatar3",
      name: "Robert Fox",
      currentYear: "Spring 2017",
      applicationYear: "Spring 2018",
      deferTo: "Spring 2018",
      subject: "Math",
      undergraduates: "The College if New Jersey",
      gap: "3.344",
      teachgap: "Yes",
      aidapp: "Yes",
      intScore: "87%",
      status: "status",
      condAdmitReason: "One line reason to be place here",
    },
    {
      id: "487452",
      image: "Avatar4",
      name: "Robert Fox",
      currentYear: "Spring 2017",
      applicationYear: "Spring 2018",
      deferTo: "Spring 2018",
      subject: "Math",
      undergraduates: "The College if New Jersey",
      gap: "3.344",
      teachgap: "Yes",
      aidapp: "Yes",
      intScore: "87%",
      status: "status",
      condAdmitReason: "One line reason to be place here",
    },
  ];

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

  const needCheckBox = (rowData) => {
    return (
      <>
        <div>
          <Checkbox
            onChange={(e) => setChecked(e.checked)}
            checked={checked}
            className="cutsm_checkbox static"
          ></Checkbox>
        </div>
      </>
    );
  };
  const statusbg = (rowData) => {
    return (
      <>
        <div>
          <div className="inline-flex items-center rounded-full border border-[#18B557] bg-[#DEF7EC] dark:bg-[#18B557] text-[#18B557] dark:text-white text-[12px] font-medium py-[4px] xl:py-[0.208vw] px-[12px] xl:px-[0.625vw]">
            <i className="pi pi-circle-fill mr-1 text-[8px] xl:text-[0.417vw] text-[#18B557] dark:text-white"></i>
            Accepted
          </div>
        </div>
      </>
    );
  };
  const idlink = (rowData) => {
    return (
      <>
        <div>
          <Link href={""} onClick={() => setVisibleRight(true)}>
            487441
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

  const TableImage = (rowData) => {
    return (
      <div>
        <img
          src={`/assets/images/svg/${rowData.image}.svg`}
          className="min-w-7 min-h-7 xl:min-w-[1.667vw] xl:min-h-[1.667vw]"
          width={48}
          height={48}
          alt="avatar"
        />
      </div>
    );
  };

  return (
    <>
      <div className="">
        <div className="bg-white dark:bg-[#13161B] border border-[#F2EEEE] dark:border-[#1F2A37] rounded-lg xl:rounded-[0.521vw]">
          <div className="flex items-center justify-between xl:px-[1.042vw] px-4 xl:pt-[1.042vw] pt-4 xl:pb-[0.990vw] pb-4 border-b border-b-[#F2EEEE] dark:border-b-[#1F2A37]">
            <div className="flex flex-wrap items-center xl:gap-[0.521vw] gap-2">
              <div className="text-[#262626] dark:text-white xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-5">
                Overall Applicants
              </div>
              <div className="text-[#888888] dark:text-[#818181] xl:text-[0.625vw] text-xs font-medium xl:leading-[0.938vw] leading-5 bg-[#FCF5F6] dark:bg-[#1C2026] xl:rounded-[0.938vw] rounded-2xl xl:px-[0.729vw] px-3 xl:py-[0.313vw] py-1">
                Display 1 to 10 of 150
              </div>
            </div>
            <div className="flex flex-wrap items-center xl:gap-[1.250vw] gap-5">
              <div>
                <span className="p-input-icon-left custm-search">
                  <i className="cgupod-td-searchbar xl:text-[0.833vw] text-xs text-[#888888]" />
                  <InputText
                    placeholder="Search"
                    className="p-inputtext p-component xl:h-[2.083vw] h-[36px] xl:w-[16.927vw] placeholder:text-[#888888] placeholder:font-normal placeholder:xl:text-[0.833vw]"
                  />
                </span>
              </div>
              <div className="flex items-center xl:gap-[0.521vw] gap-2">
                <Link
                  href={""}
                  className="text-[#888888] dark:text-[#818181] font-normal xl:text-[0.729vw] text-xs dark:bg-[#13161B] bg-white border border-[#EAE0E0] dark:border-[#374151] xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg"
                >
                  <i className="cgupod-print mr-2"></i>
                  <span>Print</span>
                </Link>
                <Link
                  href={""}
                  className="text-[#888888] dark:text-[#818181] font-normal xl:text-[0.729vw] text-xs dark:bg-[#13161B] bg-white border border-[#EAE0E0] dark:border-[#374151] xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg"
                >
                  <i className="cgupod-download mr-2"></i>
                  <span>Download</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="px-[20px] xl:px-[1.042vw] py-[8px]">
            <div className="flex items-center gap-2">
              <div className="text-[12px] xl:text-[0.625vw] px-[20px] xl:px-[1.042vw] py-[6px] rounded-[6px] cursor-pointer text-[#fff] bg-[#EC4751] font-normal">
                Candidate Summary
              </div>
              {/* <div className='text-[12px] xl:text-[0.625vw] px-[20px] xl:px-[1.042vw] py-[6px] rounded-[6px] cursor-pointer text-[#424242] bg-[#fff] border border-[#EAE0E0] font-normal'>Induction Candidates</div> */}
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
              frozen
              style={{ maxWidth: "2rem" }}
            ></Column>
            <Column
              field="image"
              header=""
              body={TableImage}
              frozen
              style={{ maxWidth: "4rem" }}
            ></Column>
            <Column
              field="id"
              header="ID"
              sortable
              frozen
              style={{ maxWidth: "8rem" }}
              body={idlink}
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
              style={{ minWidth: "15rem" }}
              frozen
            ></Column>
            <Column
              field="currentYear"
              header="Current Term Year"
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="applicationYear"
              header="Application Year"
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="deferTo"
              header="Defer To"
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              style={{ minWidth: "10rem" }}
            ></Column>
            <Column
              field="subject"
              header="Subject"
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              style={{ minWidth: "10rem" }}
            ></Column>
            <Column
              field=""
              header="Need"
              sortable
              style={{ minWidth: "8rem" }}
              body={needCheckBox}
            ></Column>
            <Column
              field="undergraduates"
              header="Undergraduates"
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              style={{ minWidth: "15rem" }}
            ></Column>
            <Column
              field="gap"
              header="GAP"
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              style={{ minWidth: "8rem" }}
            ></Column>
            <Column
              field="teachgap"
              header="Teach GPA"
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              style={{ minWidth: "10rem" }}
            ></Column>
            <Column
              field="aidapp"
              header="Aid App"
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              style={{ minWidth: "10rem" }}
            ></Column>
            <Column
              field="intScore"
              header="Int.Score"
              sortable
              style={{ minWidth: "10rem" }}
            ></Column>
            <Column
              field="status"
              header="Status"
              sortable
              style={{ minWidth: "10rem" }}
              body={statusbg}
            ></Column>
            <Column
              field="condAdmitReason"
              header="Cond Admit Reason"
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              style={{ minWidth: "18rem" }}
            ></Column>
            <Column
              field=""
              header="Induction"
              sortable
              style={{ minWidth: "10rem" }}
              body={needCheckBox}
            ></Column>
          </DataTable>
        </div>
      </div>
      <Sidebar
        visible={visibleRight}
        position="right"
        onHide={() => setVisibleRight(false)}
        className="custmSidebar widthOne"
      >
        <Tabs>
          <div className="grid grid-cols-12 h-full">
            <div className="col-span-12 lg:col-span-5">
              <div className="bg-[#E0E0EF] dark:bg-[#0C0E12] h-full pt-[70px] xl:pt-[3.646vw] px-[20px] xl:px-[3.646vw]">
                <div className="border border-[#FFFFFF] dark:border-[#374151] p-[28px] xl:p-[1.458vw] rounded-[16px] xl:rounded-[0.833vw]">
                  {/* row */}
                  <div className="inline-block bg-[#F0F0F7] dark:bg-[#4E456D] rounded-[4px] xl:rounded-[0.208vw] px-[10px] xl:px-[0.521vw] py-[4px] xl:py-[0.208vw] text-[#5D5384] dark:text-[#E0E0EF] text-[14px] xl:text-[0.729vw] mb-[20px] xl:mb-[1.042vw]">
                    ID: 487441
                  </div>
                  {/* row */}
                  <div className={myNotoSerifGeorgian.className}>
                    <div className="text-[#312C49] dark:text-white text-[40px] xl:text-[2.500vw] leading-[1.1]">
                      Marvin McKinney
                    </div>
                  </div>
                  {/* row */}
                  <div className="mt-[32px] xl:mt-[1.667vw]">
                    <div className="grid grid-cols-2 gap-[24px] xl:gap-[1.250vw]">
                      <div className="col">
                        <div className="bg-[#F0F0F7] dark:bg-[#13161B] rounded-[8px] xl:rounded-[0.417vw] px-[16px] xl:px-[0.833vw] py-[10px] xl:py-[0.521vw]">
                          <div className="flex items-center gap-[8px] xl:gap-[0.417vw]">
                            <div className="bg-[#CECDE5] dark:bg-[#4E456D] text-white min-w-[42px] min-h-[42px] rounded-[4px] xl:rounded-[0.208vw] flex items-center justify-center">
                              <i className="cgupod-calender text-[24px] xl:text-[1.25]"></i>
                            </div>
                            <div className="col">
                              <div className="text-[#4E456D] dark:text-[#F0F0F7] text-[12px] xl:text-[0.625vw]">
                                Entry Date
                              </div>
                              <div className="text-[#312C49] dark:text-[#F7F7FB] text-[16px] xl:text-[0.833vw] font-medium">
                                2/13/2021
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="bg-[#F0F0F7] dark:bg-[#13161B] rounded-[8px] xl:rounded-[0.417vw] px-[16px] xl:px-[0.833vw] py-[10px] xl:py-[0.521vw]">
                          <div className="flex items-center gap-[8px] xl:gap-[0.417vw]">
                            <div className="bg-[#CECDE5] dark:bg-[#4E456D] text-white min-w-[42px] min-h-[42px] rounded-[4px] xl:rounded-[0.208vw] flex items-center justify-center">
                              <i className="cgupod-circle-info text-[24px] xl:text-[1.25]"></i>
                            </div>
                            <div className="col">
                              <div className="text-[#4E456D] dark:text-[#F0F0F7] text-[12px] xl:text-[0.625vw]">
                                Status
                              </div>
                              <div className="text-[#312C49] dark:text-[#F7F7FB] text-[16px] xl:text-[0.833vw] font-medium">
                                Accepted
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pl-[50px] popupTabs">
                  <TabList>
                    <Tab>Personal Details</Tab>
                    <Tab>Admission Info</Tab>
                    <Tab>Program Requirements</Tab>
                    <Tab>Notes</Tab>
                    <Tab>Competency</Tab>
                  </TabList>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <div className="bg-[#FCF5F6] dark:bg-[#1C2026] h-full pt-[70px] xl:pt-[3.646vw] px-[60px] xl:px-[3.125vw] pb-[36px] xl:pb-[1.875vw]">
                <div className="relative h-full">
                  <TabPanel>
                    <PersonalDetails />
                  </TabPanel>
                  <TabPanel>
                    <AdmissionInfo />
                  </TabPanel>
                  <TabPanel>
                    <ProgramRequirements />
                  </TabPanel>
                  <TabPanel>
                    <Notes />
                  </TabPanel>
                  <TabPanel>
                    <Competency />
                  </TabPanel>
                </div>
              </div>
            </div>
          </div>
        </Tabs>
      </Sidebar>
    </>
  );
}
