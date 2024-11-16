import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Checkbox } from "primereact/checkbox";
import { Toast } from "primereact/toast";

const PlacementTable = () => {
  const [rowClick, setRowClick] = useState(true);
  const toastBottomRight = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const showMessage = (event, ref, severity) => {
    ref.current.show({
      summary: (
        <div className="flex items-center gap-[4px]">
          <i className="cgupod-sms-tracking"></i>Email Send Successfully
        </div>
      ),
      life: 3000,
      closable: true, // Add this if you want to make the toast closable
      style: {
        backgroundColor: "#7D1F25", // Set the background color
        color: "#FFF", // Set the text color
      },
    });
  };
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [filters, setFilters] = useState(null);
  // Data table
  const products = [
    {
      CandidateId: "CGU001",
      NameInPerson: "AVa Crawford ",
      Email: "ava@mail.com",
      PlacementType: "Pre Teaching",
      Position: "Pre Teaching",
      StartDate: "20-10-2022",
      EndDate: "21-10-2023",
      Grade: "9",
      Subject: "Math",
      Hours: "9",
      Bilingual: "English",
      SchoolName: "Anderson Mill ES",
      Type: "Private",
      StaffName: "Scholes",
      StaffEmail: "scholes@gmail.com",
      AdvisorName: "Alex Scholes",
      AdvisorEmail: "Alex@mail.com",
      EmailStatus: "Send",
      EmailTimestamp: "10-10-2022",
    },
    {
      CandidateId: "CGU002",
      NameInPerson: "AVa Lopez ",
      Email: "lop@mail.com",
      PlacementType: "Teaching",
      Position: "Intern",
      StartDate: "20-10-2022",
      EndDate: "21-10-2023",
      Grade: "10",
      Subject: "English",
      Hours: "9",
      Bilingual: "Math",
      SchoolName: "Blankland Prairie ES",
      Type: "Public",
      StaffName: "Smith",
      StaffEmail: "smith@gmail.com",
      AdvisorName: "Alan Smith",
      AdvisorEmail: "Alan@mail.com",
      EmailStatus: "Sent",
      EmailTimestamp: "10-10-2022",
    },
    {
      CandidateId: "CGU003",
      NameInPerson: "Alan Shearer ",
      Email: "alan@mail.com",
      PlacementType: "Field Work",
      Position: "Residents",
      StartDate: "20-10-2022",
      EndDate: "21-10-2023",
      Grade: "11",
      Subject: "Multiple Subject",
      Hours: "10",
      Bilingual: "Multiple Subject",
      SchoolName: "Anderson Mill ES",
      Type: "Charter",
      StaffName: "Carey",
      StaffEmail: "carey@gmail.com",
      AdvisorName: "Sachin",
      AdvisorEmail: "sachin@mail.com",
      EmailStatus: "Sent",
      EmailTimestamp: "10-10-2022",
    },
    {
      CandidateId: "CGU004",
      NameInPerson: "Darrell ",
      Email: "darell2@mail.com",
      PlacementType: "Pre Teaching",
      Position: "Pre Teaching",
      StartDate: "20-10-2022",
      EndDate: "21-10-2023",
      Grade: "9",
      Subject: "Math",
      Hours: "12",
      Bilingual: "English",
      SchoolName: "Brushy Creek ES",
      Type: "Private",
      StaffName: "Judith",
      StaffEmail: "jud@mail.com",
      AdvisorName: "Aubrey",
      AdvisorEmail: "Aubrey@mail.com",
      EmailStatus: "Sent",
      EmailTimestamp: "10-10-2022",
    },
    {
      CandidateId: "CGU005",
      NameInPerson: "Eduardo",
      Email: "edu02@mail.com",
      PlacementType: "Teaching",
      Position: "Intern",
      StartDate: "20-10-2022",
      EndDate: "21-10-2023",
      Grade: "10",
      Subject: "English",
      Hours: "2",
      Bilingual: "English",
      SchoolName: "Cactus Ranch ES",
      Type: "Public",
      StaffName: "Priscilla",
      StaffEmail: "priscilla@gmail.com",
      AdvisorName: "Jorge",
      AdvisorEmail: "jorge@mail.com",
      EmailStatus: "Send",
      EmailTimestamp: "10-10-2022",
    },
    {
      CandidateId: "CGU006",
      NameInPerson: "Philip ",
      Email: "phil034@mail.com",
      PlacementType: "Pre Teaching",
      Position: "Pre Teaching",
      StartDate: "20-10-2022",
      EndDate: "21-10-2023",
      Grade: "9",
      Subject: "Math",
      Hours: "1",
      Bilingual: "Math",
      SchoolName: "Caldwell Heights ES",
      Type: "Private",
      StaffName: "Calvin",
      StaffEmail: "calvin@mail.com",
      AdvisorName: "Pat",
      AdvisorEmail: "pat@mail.com",
      EmailStatus: "Sent",
      EmailTimestamp: "10-10-2022",
    },
    {
      CandidateId: "CGU007",
      NameInPerson: "Cody",
      Email: "cody@mail.com",
      PlacementType: "Field Work",
      Position: "Residents",
      StartDate: "20-10-2022",
      EndDate: "21-10-2023",
      Grade: "11",
      Subject: "Multiple Subject",
      Hours: "3",
      Bilingual: "Mutilple Subject",
      SchoolName: "Anderson Mill ES",
      Type: "Charter",
      StaffName: "Cameron",
      StaffEmail: "cameron@gmail.com",
      AdvisorName: "Robert",
      AdvisorEmail: "robert@mail.com",
      EmailStatus: "Sent",
      EmailTimestamp: "10-10-2022",
    },
    {
      CandidateId: "CGU008",
      NameInPerson: "Floyd",
      Email: "fyd@mail.com",
      PlacementType: "Teaching",
      Position: "Intern",
      StartDate: "20-10-2022",
      EndDate: "21-10-2023",
      Grade: "10",
      Subject: "English",
      Hours: "9",
      Bilingual: "English",
      SchoolName: "Blackland Prairie ES",
      Type: "Public",
      StaffName: "Courtney",
      StaffEmail: "courtney@gmail.com",
      AdvisorName: "Dianne",
      AdvisorEmail: "dianne@mail.com",
      EmailStatus: "Sent",
      EmailTimestamp: "10-10-2022",
    },
    {
      CandidateId: "CGU009",
      NameInPerson: "AVa Crawford ",
      Email: "ava@mail.com",
      PlacementType: "Pre Teaching",
      Position: "Pre Teaching",
      StartDate: "20-10-2022",
      EndDate: "21-10-2023",
      Grade: "9",
      Subject: "Math",
      Hours: "9",
      Bilingual: "Math",
      SchoolName: "Anderson Mill ES",
      Type: "Private",
      StaffName: "Scholes",
      StaffEmail: "scholes@gmail.com",
      AdvisorName: "Alex Scholes",
      AdvisorEmail: "Alex@mail.com",
      EmailStatus: "Send",
      EmailTimestamp: "10-10-2022",
    },
    {
      CandidateId: "CGU010",
      NameInPerson: "AVa Lopez ",
      Email: "lop@mail.com",
      PlacementType: "Teaching",
      Position: "Intern",
      StartDate: "20-10-2022",
      EndDate: "21-10-2023",
      Grade: "10",
      Subject: "English",
      Hours: "9",
      Bilingual: "Science",
      SchoolName: "Blankland Prairie ES",
      Type: "Public",
      StaffName: "Smith",
      StaffEmail: "smith@gmail.com",
      AdvisorName: "Alan Smith",
      AdvisorEmail: "Alan@mail.com",
      EmailStatus: "Sent",
      EmailTimestamp: "10-10-2022",
    },
  ];
  const EmailStatusData = (rowData) => {
    console.log(rowData, "rowData");
    return (
      <div>
        {rowData.EmailStatus === "Sent" ? (
          <div
            className="bg-[#fff] px-[16px] xl:px-[0.833vw] py-[8px] xl:py-[0.416vw] 
          text-[12px] xl:text-[0.625vw] font-medium text-[#046C4E] flex items-center gap-2 rounded-lg"
          >
            <i
              className="cgupod-tick-circle"
              style={{ color: "green", fontSize: "0.729vw" }}
            ></i>{" "}
            Sent!
          </div>
        ) : (
          <div
            className="bg-[#046C4E] px-[16px] xl:px-[0.833vw] py-[8px] xl:py-[0.416vw]
           text-[12px] xl:text-[0.625vw] font-medium text-[#fff] flex items-center gap-2 rounded-lg"
            onClick={(e) => showMessage(e, toastBottomRight, "warn")}
          >
            <i
              className="cgupod-mail"
              style={{ color: "white", fontSize: "0.729vw" }}
            ></i>
            Send
          </div>
        )}
      </div>
    );
  };

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
          <i className="cgupod-eye" style={{ fontSize: "1.042vw" }}></i>
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
      <div className="bg-white dark:bg-[#13161B] border border-[#F2EEEE] dark:border-[#1F2A37] rounded-lg xl:rounded-[0.521vw] mt-[16px] xl:mt-[0.833vw]">
        <div className="flex items-center justify-between xl:px-[1.042vw] px-4 xl:pt-[1.042vw] pt-4 xl:pb-[0.990vw] pb-4">
          <div className="flex flex-wrap items-center xl:gap-[0.521vw] gap-2">
            <div className="text-[#262626] dark:text-[#fff] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-5">
              Placement Details
            </div>
            <div className="text-[#888888] dark:text-[#818181] xl:text-[0.625vw] text-xs font-medium xl:leading-[0.938vw] leading-5
             bg-[#FCF5F6] dark:bg-[#1C2026] xl:rounded-[0.938vw] rounded-2xl xl:px-[0.729vw] px-3 xl:py-[0.313vw] py-1">
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
              Current Placement
            </div>
            <div className="text-[12px] xl:text-[0.625vw] px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.417vw] rounded-[6px] cursor-pointer text-[#424242] bg-[#fff] border border-[#EAE0E0] font-normal leading-tight
            dark:bg-[#13161B] dark:border-[#374151] dark:text-[#AAAAAA]">
              Job Offers
            </div>
            <div className="text-[12px] xl:text-[0.625vw] px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.417vw] rounded-[6px] cursor-pointer text-[#424242] bg-[#fff] border border-[#EAE0E0] font-normal leading-tight
            dark:bg-[#13161B] dark:border-[#374151] dark:text-[#AAAAAA]">
              Historical Placement
            </div>
            <div className="text-[12px] xl:text-[0.625vw] px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.417vw] rounded-[6px] cursor-pointer text-[#424242] bg-[#fff] border border-[#EAE0E0] font-normal leading-tight
            dark:bg-[#13161B] dark:border-[#374151] dark:text-[#AAAAAA]">
              Candidate in need
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
            "CandidateId",
            "NameInPerson",
            "Email",
            "PlacementType",
            "Position",
            "Subject",
            "Bilingual",
            "SchoolName",
            "Type",
            "StaffName",
            "StaffEmail",
            "AdvisorName",
            "AdvisorEmail",
          ]}
          dataKey="CandidateId"
        >
          <Column
            selectionMode="multiple"
            style={{ minWidth: '1rem', maxWidth: '1rem' }}
          ></Column>
          <Column
            field="CandidateId"
            header="Candidate ID"
            showFilterMatchModes={false}
            showFilterMenuOptions={false}
            showClearButton={false}
            showApplyButton={false}
            filter
            filterElement={SearchFilterTemplate}
            style={{ minWidth: "12rem" }}
          ></Column>
          <Column
            field="NameInPerson"
            header="Name in Pearson"
            showFilterMatchModes={false}
            showFilterMenuOptions={false}
            showClearButton={false}
            showApplyButton={false}
            filter
            filterElement={SearchFilterTemplate}
            style={{ minWidth: "13rem" }}
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
            field="PlacementType"
            header="Placement Type"
            showFilterMatchModes={false}
            showFilterMenuOptions={false}
            showClearButton={false}
            showApplyButton={false}
            filter
            filterElement={SearchFilterTemplate}
            style={{ minWidth: "13rem" }}
          ></Column>
          <Column
            field="Position"
            header="Position"
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
            field="Grade"
            header="Grade"
            sortable
            style={{ minWidth: "8rem" }}
          ></Column>
          <Column
            field="Subject"
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
            field="Hours"
            header="Hours"
            sortable
            style={{ minWidth: "8rem" }}
          ></Column>
          <Column
            field="Bilingual"
            header="Bilingual"
            showFilterMatchModes={false}
            showFilterMenuOptions={false}
            showClearButton={false}
            showApplyButton={false}
            filter
            filterElement={SearchFilterTemplate}
            style={{ minWidth: "13rem" }}
          ></Column>
          <Column
            field="SchoolName"
            header="School Name"
            showFilterMatchModes={false}
            showFilterMenuOptions={false}
            showClearButton={false}
            showApplyButton={false}
            filter
            filterElement={SearchFilterTemplate}
            style={{ minWidth: "13rem" }}
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
            style={{ minWidth: "7rem" }}
          ></Column>
          <Column
            field="StaffName"
            header="Staff Name"
            showFilterMatchModes={false}
            showFilterMenuOptions={false}
            showClearButton={false}
            showApplyButton={false}
            filter
            filterElement={SearchFilterTemplate}
            style={{ minWidth: "10rem" }}
          ></Column>
          <Column
            field="StaffEmail"
            header="Staff Email"
            showFilterMatchModes={false}
            showFilterMenuOptions={false}
            showClearButton={false}
            showApplyButton={false}
            filter
            filterElement={SearchFilterTemplate}
            style={{ minWidth: "13rem" }}
          ></Column>
          <Column
            field="AdvisorName"
            header="Advisor Name"
            showFilterMatchModes={false}
            showFilterMenuOptions={false}
            showClearButton={false}
            showApplyButton={false}
            filter
            filterElement={SearchFilterTemplate}
            style={{ minWidth: "13rem" }}
          ></Column>
          <Column
            field="AdvisorEmail"
            header="Advisor Email"
            showFilterMatchModes={false}
            showFilterMenuOptions={false}
            showClearButton={false}
            showApplyButton={false}
            filter
            filterElement={SearchFilterTemplate}
            style={{ minWidth: "13rem" }}
          ></Column>
          <Column
            field="EmailStatus"
            header="Email Status"
            body={EmailStatusData}
            style={{ minWidth: "10rem" }}
          ></Column>
          <Column
            field="EmailTimestamp"
            header="Email Timestamp"
            style={{ minWidth: "13rem" }}
            sortable
          ></Column>
          <Column
            field="Action"
            header="Action"
            align="center"
            style={{ minWidth: "6rem" }}
            className="action-shadow-table"
            frozen
            alignFrozen="right"
            body={actionBodyTemplate}
          ></Column>
        </DataTable>
      </div>
      <Toast ref={toastBottomRight} position="bottom-right" />
    </div>
  );
};
export default PlacementTable;
