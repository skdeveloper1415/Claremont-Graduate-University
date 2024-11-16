import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout/layout";
import FilterComponent from "@/components/filtercomponent";
import { InputText } from "primereact/inputtext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Checkbox } from "primereact/checkbox";
import AddUser from "@/components/users/adduser";
import Deleteuser from "@/components/users/deleteuser";
import Resetpassowrd from "@/components/users/resetpassword";
import UserAccess from "@/components/users/userAccess";
import { Sidebar } from "primereact/sidebar";
import { Noto_Serif_Georgian } from "@next/font/google";

import { useRef } from "react";
import PersonalDetails from "../applicants/personaldetails";
import AdmissionInfo from "../applicants/admissioninfo";
import ProgramRequirements from "../applicants/programrequirements";
import Notes from "../applicants/notes";
import Competency from "../applicants/competency";
import ViewUser from "@/components/users/viewUsers";
import Users from "@/components/users/userAccess";
// import Users from "@/components/users/addUsers";
import ImportUser from "@/components/users/importuser";

// import ColumnChart from "./columnchart";
// import ApplicantsTable from "./applicantstable";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const PlacementPage = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [visibleRight, setVisibleRight] = useState(false);

  const [rowClick, setRowClick] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [filters, setFilters] = useState(null);
  const [checked, setChecked] = useState(false);
  const [CreateUserpopup, setCreateUserpopup] = useState(false);
  const [Deleteuserpopup, setDeleteuserpopup] = useState(false);
  const [Resetpassowrdpopup, setResetpassowrdpopup] = useState(false);
  const [ImportUser1, setImportUser1] = useState(false);

  // Data table
  const products = [
    {
      UserID: "487441",
      image: "Avatar1",
      UserEmail: "nathan.roberts@example.com",
      Designation: "Principal",
      CreatedDate: "29-02-2023",
      Group: "Principal, User",
      Activate: "",
    },
    {
      UserID: "487442",
      image: "Avatar2",
      UserEmail: "michelle.rivera@example.com",
      Designation: "Principal",
      CreatedDate: "29-02-2023",
      Group: "Principal, User",
      Activate: "",
    },
    {
      UserID: "487441",
      image: "Avatar3",
      UserEmail: "debbie.baker@example.com",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      Group: "Principal, User",
      Activate: "",
    },
    {
      UserID: "487441",
      image: "Avatar3",
      UserEmail: "debbie.baker@example.com",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      Group: "Principal, User",
      Activate: "",
    },

    {
      UserID: "487441",
      image: "Avatar3",
      UserEmail: "debbie.baker@example.com",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      Group: "Principal, User",
      Activate: "",
    },
    {
      UserID: "487441",
      image: "Avatar3",
      UserEmail: "debbie.baker@example.com",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      Group: "Principal, User",
      Activate: "",
    },
    {
      UserID: "487441",
      image: "Avatar3",
      UserEmail: "debbie.baker@example.com",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      Group: "Principal, User",
      Activate: "",
    },
    {
      UserID: "487441",
      image: "Avatar3",
      UserEmail: "debbie.baker@example.com",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      Group: "Principal, User",
      Activate: "",
    },
    {
      UserID: "487441",
      image: "Avatar3",
      UserEmail: "debbie.baker@example.com",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      Group: "Principal, User",
      Activate: "",
    },
    {
      UserID: "487441",
      image: "Avatar3",
      UserEmail: "debbie.baker@example.com",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      Group: "Principal, User",
      Activate: "",
    },
    {
      UserID: "487441",
      image: "Avatar3",
      UserEmail: "debbie.baker@example.com",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      Group: "Principal, User",
      Activate: "",
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

  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <div className="flex justify-center text-[16px] gap-[10px] xl:gap-[1.042vw] w-full">
          <Link
            href=""
            onClick={() => {
              setVisibleRight(true), setShow(true);
            }}
          >
            {" "}
            <i className="cgupod-eye"></i>
          </Link>
          <Link href="" onClick={() => setVisibleRight(true)}>
            {" "}
            <i className="cgupod-user-tick"></i>
          </Link>
          <Link href="" onClick={() => setDeleteuserpopup(true)}>
            {" "}
            <i className="cgupod-trash"></i>
          </Link>
          <Link href="" onClick={() => setResetpassowrdpopup(true)}>
            {" "}
            <i className="cgupod-security-safe"></i>
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
    console.log("rowData.image", rowData.image);
    return (
      <div>
        <img
          src={`./assets/images/svg/${rowData.image}.svg`}
          className="w-7 h-7 xl:w-[1.667vw] xl:h-[1.667vw]"
          width={48}
          height={48}
          alt="avatar"
        />
      </div>
    );
  };
  const ActivateBody = (rowData) => {
    return (
      <>
        <div className="flex w-full">
          {" "}
          <Checkbox
            onChange={(e) => setChecked(e.checked)}
            checked={checked}
          ></Checkbox>
        </div>
      </>
    );
  };
  return (
    <Layout pageTitle="Users">
      <div className="">
        <FilterComponent />
        <div className="mt-[16px] xl:mt-[0.833vw]">
          <div className="bg-white border border-[#F2EEEE] rounded-lg xl:rounded-[0.521vw] dark:bg-[#13161B] dark:border-[#1F2A37]">
            <div className="flex items-center justify-between xl:px-[1.042vw] px-4 xl:pt-[1.042vw] pt-4 xl:pb-[0.990vw] pb-4 border-b border-b-[#F2EEEE] dark:border-b-[#1F2A37]">
              <div className="flex flex-wrap items-center xl:gap-[0.521vw] gap-2">
                <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-5 dark:text-[#fff]">
                  User Details
                </div>
                <div className="text-[#888888] xl:text-[0.625vw] text-xs font-medium xl:leading-[0.938vw] leading-5 bg-[#FCF5F6] xl:rounded-[0.938vw] rounded-2xl xl:px-[0.729vw] px-3 xl:py-[0.313vw] py-1 dark:bg-[#1C2026] dark:text-[#818181]">
                  Display 1 to 10 of 150
                </div>
              </div>
              <div className="flex flex-wrap items-center xl:gap-[1.250vw] gap-5">
                <div className="custom_search">
                  <span className="p-input-icon-left">
                    <i className="pi pi-search" />
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
                    className="text-[#888888] font-normal xl:text-[0.729vw] text-xs bg-white border border-[#EAE0E0] xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg dark:bg-[#13161B]  dark:border-[#374151] dark:text-[#AAAAAA]"
                  >
                    <i className="cgupod-print mr-2"></i>
                    <span>Print</span>
                  </Link>
                  <Link
                    href={""}
                    className="text-[#888888] font-normal xl:text-[0.729vw] text-xs bg-white border border-[#EAE0E0] xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg dark:bg-[#13161B] dark:border-[#374151] dark:text-[#AAAAAA]"
                  >
                    <i className="cgupod-download mr-2"></i>
                    <span>Download</span>
                  </Link>
                  <Link
                    href={""}
                    className="border border-[#AF1E27] rounded-[6px] text-[#AF1E27] xl:text-[0.729vw] text-xs font-normal xl:leading-[0.938vw] leading-5 xl:py-[0.417vw] py-2 xl:px-[0.625vw] px-3 flex items-center xl:gap-[0.521vw] gap-2"
                    onClick={() => setImportUser1(true)}
                  >
                    <i className="cgupod-document-upload"></i>
                    <span>Import User</span>
                  </Link>
                  <Link
                    href={""}
                    onClick={() => setCreateUserpopup(true)}
                    className="bg-[#AF1E27] border border-[#AF1E27] rounded-[6px] text-white xl:text-[0.729vw] text-xs font-light xl:leading-[0.938vw] leading-5 xl:py-[0.417vw] py-2 xl:px-[0.625vw] px-3 flex items-center xl:gap-[0.521vw] gap-2"
                  >
                    <i className="cgupod-plus font-light"></i>
                    <span>Add User</span>
                  </Link>
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
                style={{ minWidth: '1rem', maxWidth: '1rem' }}
              ></Column>
              <Column
                field="image"
                header=""
                body={TableImage}
                style={{ minWidth: "3rem" }}
              ></Column>
              <Column
                field="UserID"
                header="User ID"
                sortable
                style={{ minWidth: "8rem" }}
              ></Column>
              <Column
                field="UserEmail"
                header="User Email"
                showFilterMatchModes={false}
                showFilterMenuOptions={false}
                showClearButton={false}
                showApplyButton={false}
                filter
                filterElement={SearchFilterTemplate}
                style={{ minWidth: "26rem" }}
              ></Column>

              <Column
                field="Designation"
                header="Designation"
                showFilterMatchModes={false}
                showFilterMenuOptions={false}
                showClearButton={false}
                showApplyButton={false}
                filter
                filterElement={SearchFilterTemplate}
                style={{ minWidth: "14rem" }}
              ></Column>
              <Column
                field="CreatedDate"
                header="Created Date"
                showFilterMatchModes={false}
                showFilterMenuOptions={false}
                showClearButton={false}
                showApplyButton={false}
                filter
                filterElement={SearchFilterTemplate}
                style={{ minWidth: "12rem" }}
              ></Column>
              <Column
                field="Group"
                header="Group"
                showFilterMatchModes={false}
                showFilterMenuOptions={false}
                showClearButton={false}
                showApplyButton={false}
                filter
                filterElement={SearchFilterTemplate}
                style={{ minWidth: "12rem" }}
              ></Column>

              <Column
                field="Activate"
                header="Activate"
                showFilterMatchModes={false}
                showFilterMenuOptions={false}
                showClearButton={false}
                showApplyButton={false}
                filter
                filterElement={SearchFilterTemplate}
                body={ActivateBody}
                style={{ minWidth: "8rem" }}
              ></Column>

              <Column
                field="action"
                header="Actions"
                className="action-shadow-table"
                frozen
                alignFrozen="right"
                align="center"
                style={{ minWidth: "10rem" }}
                body={actionBodyTemplate}
              ></Column>
            </DataTable>
          </div>
        </div>
      </div>
      <AddUser
        visible={CreateUserpopup}
        onHides={() => setCreateUserpopup(false)}
      />
      <Deleteuser
        visible={Deleteuserpopup}
        onHides={() => setDeleteuserpopup(false)}
      />
      <Resetpassowrd
        visible={Resetpassowrdpopup}
        onHides={() => setResetpassowrdpopup(false)}
      />
      <ImportUser visible={ImportUser1} onHides={() => setImportUser1(false)} />

      <Sidebar
        visible={visibleRight}
        position="right"
        blockScroll={true}
        onHide={() => {
          setVisibleRight(false), setShow(false);
        }}
        className="custmSidebar  sidebarwidth"
        
      >
        <Tabs>
          <div className="grid grid-cols-12 h-full">
            <div className="col-span-12 lg:col-span-4">
              <div className="bg-[#E0E0EF] h-full pt-[70px] xl:pt-[3.646vw] px-[20px] xl:px-[2.646vw] dark:bg-[#0C0E12] ">
                <div className="border border-[#FFFFFF] p-[28px] xl:p-[1.458vw] rounded-[16px] xl:rounded-[0.833vw]">
                  {/* row */}
                  <div className="inline-block bg-[#F0F0F7] rounded-[4px] xl:rounded-[0.208vw] px-[10px] xl:px-[0.521vw] py-[4px] xl:py-[0.208vw] text-[#5D5384] text-[14px] xl:text-[0.729vw] mb-[20px] xl:mb-[1.042vw] dark:bg-[#4E456D] dark:text-[#fff]">
                    ID: 487441
                  </div>
                  {/* row */}
                  <div className={myNotoSerifGeorgian.className}>
                    <div className="text-[#312C49] text-[40px] xl:text-[2.500vw] leading-[1.1] dark:text-[#fff]">
                      Nathan Roberts
                    </div>
                  </div>
                  {/* row */}
                  <div className="mt-[32px] xl:mt-[1.667vw]">
                    <div className="grid grid-cols-1 gap-[24px] xl:gap-[1.250vw]">
                      <div className="col">
                        <div className="bg-[#F0F0F7] rounded-[8px] xl:rounded-[0.417vw] px-[16px] xl:px-[0.833vw] py-[10px] xl:py-[0.521vw] dark:bg-[#13161B] ">
                          <div className="flex items-center gap-[8px] xl:gap-[0.417vw]">
                            <div className="bg-[#968FC3] text-white min-w-[42px] min-h-[42px] rounded-[4px] xl:rounded-[0.208vw] flex items-center justify-center">
                              <i className="cgupod-mail text-[24px] xl:text-[1.25]"></i>
                            </div>
                            <div className="col">
                              <div className="text-[#312C49] text-[16px] xl:text-[0.833vw] font-medium dark:text-[#fff]">
                                nathan.roberts@example.com
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <div className="bg-[#FCF5F6] h-full pt-[70px] xl:pt-[3.646vw] px-[60px] xl:px-[3.125vw] pb-[36px] xl:pb-[1.875vw] dark:bg-[#1C2026]">
                <div className="relative h-full">
                  <TabPanel>
                    {show === true ? <ViewUser /> : <Users />}
                  </TabPanel>
                </div>
              </div>
            </div>
          </div>
        </Tabs>
      </Sidebar>
    </Layout>
  );
};

export default PlacementPage;
