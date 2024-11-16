import React, { useState } from "react";
import Link from "next/link";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Noto_Serif_Georgian } from "@next/font/google";
import { Sidebar } from "primereact/sidebar";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Checkbox } from "primereact/checkbox";
import { ScrollPanel } from "primereact/scrollpanel";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const PlacementData = (props) => {
  const [rowClick, setRowClick] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [visibleRight, setVisibleRight] = useState(false);
  const [schoolData, setSchoolData] = useState(null);
  const [endDate, setEndDate] = useState("");
  const [date, setDate] = useState("");
  const [others, setOthers] = useState(false);
  const [time, setTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const schoolInfo = [
    { name: "Sparks Elementary", code: "01" },
    { name: "Sparks ", code: "02" },
  ];
  const [filters, setFilters] = useState(null);
  const products = [
    {
      id: "001",
      Groupname: "Residents",
      Groupdescription: "Candidates",
      Years: "9.5",
      Groupcreateddate: "16/08/2013",
      Grade: "5",
      Status: "Completed",
      School: "Sparks Elementary (Hacienda La)",
      Subject: "-",
    },
    {
      id: "002",
      Groupname: "Residents",
      Groupdescription: "Entering Cohort",
      Years: "3",
      Groupcreateddate: "18/09/2012",
      Grade: "8",
      Status: "Completed",
      School: "Sparks Elementary (Hacienda La)",
      Subject: "-",
    },
    {
      id: "003",
      Groupname: "Residents",
      Groupdescription: "Entering Cohort",
      Years: "3",
      Groupcreateddate: "18/09/2012",
      Grade: "4",
      Status: "Completed",
      School: "Sparks Elementary (Hacienda La)",
      Subject: "-",
    },
  ];
  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <div className="flex items-center xl:gap-[0.833vw] gap-3 text-[#888] xl:text-[0.938vw] text-[20px] xl:text-[1.042vw]">
          <Link
            href="javascript:void(0)"
            onClick={() => setDetailSidebar(true)}
          >
            <i className="cgupod-eye"></i>
          </Link>
          <Link
            href="javascript:void(0)"
            onClick={() => setDetailSidebar(true)}
          >
            <i className="cgupod-edit-pen"></i>
          </Link>
          <Link
            href="javascript:void(0)"
            onClick={() => setDetailSidebar(true)}
          >
            <i className="cgupod-trash"></i>
          </Link>
        </div>
      </>
    );
  };
  const headerData = () => {
    return (
      <div className="grid ">
        <div className="flex justify-between items-center border-b dark:border-b-[#1F2A37] py-[16px] xl:py-[0.833vw] px-[19px] xl:px-[0.990vw]">
          <div className=" text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#FFFFFF] font-medium">
            Teaching Phase
          </div>
          <div className="flex gap-[16px] xl:gap-[0.833vw]">
            <div className="flex justify-end">
              <Link
                href={"javascript:void(0)"}
                // onClick={() => setVisibleRight(true)}
                onClick={() => {
                  props.handleTeachingPhase(true);
                }}
                className="flex items-center bg-white dark:bg-[#13161B] dark:border-[#374151] border rounded-[8px] xl:rounded-[0.417vw] text-[#888] text-[12px] xl:text-[0.625vw] px-[16px] xl:px-[0.833vw] py-[10px] xl:py-[0.521vw] transition ease-in-out delay-150"
              >
                <i className="mr-[8px] xl:mr-[0.417vw] cgupod-td-filter text-[14px] xl:text-[0.729vw]"></i>
                Filter
              </Link>
            </div>
            <div className="flex justify-end">
              <Link
                href={""}
                className="flex items-center bg-white border dark:bg-[#13161B] dark:border-[#374151]  rounded-[8px] xl:rounded-[0.417vw] text-[#888] text-[12px] xl:text-[0.625vw] px-[16px] xl:px-[0.833vw] py-[10px] xl:py-[0.521vw] transition ease-in-out delay-150"
              >
                <i className="mr-[8px] xl:mr-[0.417vw] cgupod-plus text-[12px] xl:text-[0.625vw]"></i>
                Add New
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-[12px] px-[19px] xl:px-[0.990vw] ">
          <div className="flex items-center gap-2">
            <div className="text-[12px] xl:text-[0.625vw] px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.417vw] rounded-[6px] cursor-pointer text-[#fff] bg-[#EC4751] font-normal leading-tight">
              Teaching Phase
            </div>
            <div className="text-[12px] xl:text-[0.625vw] px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.417vw] rounded-[6px] cursor-pointer text-[#424242] dark:text-[#fff] bg-[#fff] dark:bg-[#13161B] dark:border-[#4B5563] border border-[#EAE0E0] font-normal leading-tight hover:bg-[#F0E9EA]">
              Pre-Teaching Phase
            </div>
          </div>
        </div>
      </div>
    );
  };
  const StatusBody = (rowData) => {
    return (
      <>
        <div className="flex items-center text-[12px] xl:text-[0.625vw] font-medium text-[#3F8892] dark:text-[#3F8892] dark:bg-[#192C33] bg-[#def7ec] border border-[#3F8892] dark:border-[#3F8892]  py-[4px] xl:py-[0.208vw] px-[12px] xl:px-[0.625vw] rounded-2xl xl:rounded-[0.833vw] gap-2">
          <div className="bg-[#3F8892] h-[6px] w-[6px] rounded-full mb-[1px]"></div>
          <div>{rowData.Status}</div>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className={myNotoSerifGeorgian.className}>
        <div className="text-[#262626] dark:text-[#fff] text-[32px] xl:text-[1.667vw]">
          Placement
        </div>
      </div>
      <div className="SidebarHeight">
        <ScrollPanel style={{ width: "100%", height: "100%" }}>
          <div className="mt-[12px] xl:mt-[0.625vw]">
            <DataTable
              value={products}
              className="custTable tableCust custCheckBox checkboxName"
              header={headerData}
              scrollable
              responsiveLayout="scroll"
              style={{ width: "100%" }}
              onSelectionChange={(e) => setSelectedProducts(e.value)}
              selectionMode={rowClick ? null : "checkbox"}
              selection={selectedProducts}
              filters={filters}
              dataKey="id"
            >
              <Column
                selectionMode="multiple"
                style={{ minWidth: '1rem', maxWidth: '1rem' }}
              ></Column>
              <Column
                field="Groupname"
                header="Assignment"
                sortable
                style={{ minWidth: "12rem" }}
              ></Column>
              <Column
                field="School"
                header="School"
                sortable
                style={{ minWidth: "15rem" }}
              ></Column>
              <Column
                field="Groupcreateddate"
                header="Start Date"
                sortable
                style={{ minWidth: "8rem" }}
              ></Column>

              <Column
                field="Subject"
                header="Subject"
                sortable
                style={{ minWidth: "8rem" }}
              ></Column>
              <Column
                field="Grade"
                header="Grades"
                sortable
                style={{ minWidth: "8rem" }}
              ></Column>
              <Column
                field="Status"
                header="Status"
                sortable
                body={StatusBody}
                style={{ minWidth: "12rem" }}
              ></Column>
              <Column
                field="Groupcreateddate"
                header="End Date"
                sortable
                style={{ minWidth: "8rem" }}
              ></Column>
              <Column
                field="Years"
                header="Duration (Months)"
                sortable
                style={{ minWidth: "8rem" }}
              ></Column>
              <Column
                field="Action"
                header="Action"
                style={{ minWidth: "10rem" }}
                align="center"
                body={actionBodyTemplate}
                frozen
                alignFrozen="right"
              ></Column>
            </DataTable>
          </div>
        </ScrollPanel>
      </div>
      <div className="mt-[60px] xl:mt-[3.125vw] lg:mt-[0] bottom-[-70px] left-0 right-0">
        <div className="flex items-center justify-between">
          <div className="col">
            <Link
              href={""}
              className="flex items-center bg-white dark:bg-[#13161B] hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] opacity-30 transition ease-in-out delay-150"
            >
              <i className="mr-[8px] xl:mr-[0.417vw] cgupod-close-circle text-[22px] xl:text-[1.146vw]"></i>
              Cancel
            </Link>
          </div>
          <div className="flex gap-1">
            <Link
              href={""}
              className="flex items-center bg-white dark:bg-[#13161B] hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] transition ease-in-out delay-150"
            >
              <i className="mr-[8px] xl:mr-[0.417vw] cgupod-print text-[22px] xl:text-[1.146vw]"></i>
              Print Report
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementData;
