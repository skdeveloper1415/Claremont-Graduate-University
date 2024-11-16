import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Checkbox } from "primereact/checkbox";

const SupportPanelTable = () => {
  const [rowClick, setRowClick] = useState(true);
  const toastBottomRight = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [filters, setFilters] = useState(null);
  const products = [
    {
      PersID: "CGU001",
      FirstName: "AVa",
      LastName: "Crawford",
      Type: "Private",
      Email: "ava@mail.com",
      CandidatesMapped: "Crooks Elem",
      Advises: "English",
      StartDate: "20-10-2022",
      EndDate: "21-10-2023",
      SchoolSite: "3",
    },
    {
      PersID: "CGU002",
      FirstName: "AVa",
      LastName: "Lopez",
      Type: "Advisor",
      Email: "lop@mail.com",
      CandidatesMapped: "Bean Elem",
      Advises: "Science",
      StartDate: "20-10-2022",
      EndDate: "21-10-2023",
      SchoolSite: "3",
    },
    {
      PersID: "CGU003",
      FirstName: "Alan",
      LastName: "Shearer",
      Type: "Advisor",
      Email: "alan@gmail.com",
      CandidatesMapped: "Bean Elem",
      Advises: "Bean Elem",
      StartDate: "20-10-2022",
      EndDate: "21-10-2023",
      SchoolSite: "4",
    },
    {
      PersID: "CGU004",
      FirstName: "AVa",
      LastName: "Crawford",
      Type: "Private",
      Email: "ava@mail.com",
      CandidatesMapped: "Crooks Elem",
      Advises: "English",
      StartDate: "20-10-2022",
      EndDate: "21-10-2023",
      SchoolSite: "6",
    },
    {
      PersID: "CGU005",
      FirstName: "AVa",
      LastName: "Lopez",
      Type: "Advisor",
      Email: "lop@mail.com",
      CandidatesMapped: "Bean Elem",
      Advises: "Science",
      StartDate: "20-10-2022",
      EndDate: "21-10-2023",
      SchoolSite: "3",
    },
    {
      PersID: "CGU006",
      FirstName: "Alan",
      LastName: "Shearer",
      Type: "Advisor",
      Email: "alan@gmail.com",
      CandidatesMapped: "Bean Elem",
      Advises: "Bean Elem",
      StartDate: "20-10-2022",
      EndDate: "21-10-2023",
      SchoolSite: "4",
    },
    {
      PersID: "CGU007",
      FirstName: "AVa",
      LastName: "Crawford",
      Type: "Private",
      Email: "ava@mail.com",
      CandidatesMapped: "Crooks Elem",
      Advises: "English",
      StartDate: "20-10-2022",
      EndDate: "21-10-2023",
      SchoolSite: "3",
    },
    {
      PersID: "CGU008",
      FirstName: "AVa",
      LastName: "Lopez",
      Type: "Advisor",
      Email: "lop@mail.com",
      CandidatesMapped: "Bean Elem",
      Advises: "Science",
      StartDate: "20-10-2022",
      EndDate: "21-10-2023",
      SchoolSite: "3",
    },
    {
      PersID: "CGU009",
      FirstName: "Alan",
      LastName: "Shearer",
      Type: "Advisor",
      Email: "alan@gmail.com",
      CandidatesMapped: "Bean Elem",
      Advises: "Bean Elem",
      StartDate: "20-10-2022",
      EndDate: "21-10-2023",
      SchoolSite: "4",
    },
    {
      PersID: "CGU010",
      FirstName: "AVa",
      LastName: "Crawford",
      Type: "Private",
      Email: "ava@mail.com",
      CandidatesMapped: "Crooks Elem",
      Advises: "English",
      StartDate: "20-10-2022",
      EndDate: "21-10-2023",
      SchoolSite: "3",
    },
  ];
  const SearchFilterTemplate = (options) => {
    return (
      <>
        <div className="SearchFilter xl:p-[0.729vw] p-3 xl:rounded-[0.521vw] rounded-lg bg-white boxshadow01 xl:space-y-[0.625vw] space-y-3">
          <span className="p-input-icon-left">
            <i
              className="cgupod-td-searchbar"
              style={{ fontSize: "0.781vw" }}
            />
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

  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <div className="flex justify-between items-center">
          <i className="cgupod-eye" style={{ fontSize: "1rem" }}></i>
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
  return (
    <div className="">
      <div className="bg-white dark:bg-[#13161B] border border-[#F2EEEE] dark:border-[#1F2A37] rounded-lg xl:rounded-[0.521vw] mt-[16px] xl:my-[0.833vw]">
        <div className="flex items-center justify-between xl:px-[1.042vw] px-4 xl:pt-[1.042vw] pt-4 xl:pb-[0.990vw] pb-4">
          <div className="flex flex-wrap items-center xl:gap-[0.521vw] gap-2">
            <div className="text-[#262626] dark:text-[#fff] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-5">
              Placement Details
            </div>
            <div className="text-[#888888] dark:bg-[#1C2026] xl:text-[0.625vw] text-xs font-medium xl:leading-[0.938vw] leading-5 bg-[#FCF5F6] xl:rounded-[0.938vw] rounded-2xl xl:px-[0.729vw] px-3 xl:py-[0.313vw] py-1">
              Display 1 to 10 of 150
            </div>
          </div>
          <div className="flex flex-wrap items-center xl:gap-[1.250vw] gap-5">
            <div className="custom_search">
              <span className="p-input-icon-left">
                <i className="cgupod-td-searchbar" />
                <InputText
                  placeholder="Search"
                  className="xl:h-[2.083vw] h-[36px] xl:w-[16.927vw]"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #EAE0E0",
                    borderRadius: "8px",
                  }}
                />
              </span>
            </div>
            <div className="flex items-center xl:gap-[0.521vw] gap-2">
              <Link
                href={""}
                className="text-[#888888] dark:text-[#AAAAAA] dark:bg-[#13161B] dark:border-[#374151] font-normal xl:text-[0.729vw] text-xs bg-white border border-[#EAE0E0] xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg"
              >
                <i className="cgupod-print mr-2"></i>
                <span>Print</span>
              </Link>
              <Link
                href={""}
                className="text-[#888888] dark:text-[#AAAAAA] dark:bg-[#13161B] dark:border-[#374151] font-normal xl:text-[0.729vw] text-xs bg-white border border-[#EAE0E0] xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg"
              >
                <i className="cgupod-download mr-2"></i>
                <span>Download</span>
              </Link>
            </div>
            {/* <Link
                href={""}
                className="bg-[#AF1E27] rounded text-white xl:text-[0.729vw] text-xs font-normal xl:leading-[0.938vw] leading-5 xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3"
              >
                <i className=""></i>
                <span>Create Group</span>
              </Link> */}
          </div>
        </div>
        <div className="px-[20px] xl:px-[1.042vw] py-[8px]">
          <div className="flex items-center gap-2">
            <div className="text-[12px] xl:text-[0.625vw] px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.417vw] rounded-[6px] cursor-pointer text-[#fff] bg-[#EC4751] font-normal leading-tight">
              Faculty Advisors
            </div>
            <div className="text-[12px] xl:text-[0.625vw] px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.417vw] rounded-[6px] cursor-pointer text-[#424242] bg-[#fff] border border-[#EAE0E0] 
            font-normal leading-tight dark:bg-[#13161B] dark:border-[#374151] dark:text-[#AAAAAA]">
              Mentor Teachers
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
            "FirstName",
            "LastName",
            "Type",
            "Email",
            "CandidatesMapped",
          ]}
          dataKey="PersID"
        >
          <Column
            selectionMode="multiple"
            style={{ minWidth: "1rem", maxWidth: "1rem" }}
          ></Column>
          <Column
            field="PersID"
            header="Pers ID"
            sortable
            style={{ minWidth: "9rem" }}
          ></Column>
          <Column
            field="FirstName"
            header="First Name"
            showFilterMatchModes={false}
            showFilterMenuOptions={false}
            showClearButton={false}
            showApplyButton={false}
            filter
            filterElement={SearchFilterTemplate}
            style={{ minWidth: "9rem" }}
          ></Column>
          <Column
            field="LastName"
            header="Last Name"
            showFilterMatchModes={false}
            showFilterMenuOptions={false}
            showClearButton={false}
            showApplyButton={false}
            filter
            filterElement={SearchFilterTemplate}
            style={{ minWidth: "9rem" }}
          ></Column>
          <Column
            field="Type"
            header="Type"
            showFilterMatchModes={false}
            showFilterMenuOptions={false}
            showClearButton={false}
            showApplyButton={false}
            filter
            filterElement={SearchFilterTemplate}
            style={{ minWidth: "8rem" }}
          ></Column>
          <Column
            field="Email"
            header="Email"
            showFilterMatchModes={false}
            showFilterMenuOptions={false}
            showClearButton={false}
            showApplyButton={false}
            filter
            filterElement={SearchFilterTemplate}
            style={{ minWidth: "10rem" }}
          ></Column>
          <Column
            field="CandidatesMapped"
            header="Candidates Mapped"
            showFilterMatchModes={false}
            showFilterMenuOptions={false}
            showClearButton={false}
            showApplyButton={false}
            filter
            filterElement={SearchFilterTemplate}
            style={{ minWidth: "14rem" }}
          ></Column>
          <Column
            field="Advises"
            header="Advises"
            showFilterMatchModes={false}
            showFilterMenuOptions={false}
            showClearButton={false}
            showApplyButton={false}
            filter
            filterElement={SearchFilterTemplate}
            style={{ minWidth: "10rem" }}
          ></Column>
          <Column
            field="StartDate"
            header="Start Date"
            sortable
            style={{ minWidth: "9rem" }}
          ></Column>
          <Column
            field="EndDate"
            header="End Date"
            sortable
            style={{ minWidth: "9rem" }}
          ></Column>
          <Column
            field="SchoolSite"
            header="School Site"
            sortable
            style={{ minWidth: "9rem" }}
          ></Column>
          {/* <Column
            field="Action"
            header="Action"
            style={{ minWidth: "10rem" }}
            body={actionBodyTemplate}
          ></Column> */}
        </DataTable>
      </div>
    </div>
  );
};
export default SupportPanelTable;
