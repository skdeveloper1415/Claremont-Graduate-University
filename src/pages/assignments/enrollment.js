import React, { useState } from "react";
import Link from "next/link";
import { Noto_Serif_Georgian } from "@next/font/google";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ScrollPanel } from "primereact/scrollpanel";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const EnrollmentPage = () => {
  const [rowClick, setRowClick] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [filters, setFilters] = useState(null);
  const products = [
    {
      id: "001",
      Groupname: "CRED/M.A - Preliminary - Multiple Subject",
      Groupdescription: "Candidates",
      Years: "1.3",
      Groupcreateddate: "16/08/2013",
      Action: "5",
      Status: "Completed",
      gpa: "3.354",
    },
    {
      id: "002",
      Groupname: "M.A. in Education",
      Groupdescription: "Entering Cohort",
      Years: "3",
      Groupcreateddate: "18/09/2012",
      Action: "5",
      Status: "Completed",
      gpa: "3.940",
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
            <i className="cgupod-edit-pen"></i>
          </Link>
        </div>
      </>
    );
  };
  const headerData = () => {
    return (
      <div className="grid ">
        <div className="flex justify-between items-center border-b py-[16px] xl:py-[0.833vw] px-[19px] xl:px-[0.990vw] dark:border-[#1F2A37]">
          <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-medium dark:text-white">
            CGU Program Enrollment
          </div>
          <div className="flex gap-[16px] xl:gap-[0.833vw]">
            <div className="flex justify-end">
              <Link
                href={""}
                className="flex items-center bg-white border rounded-[8px] xl:rounded-[0.417vw] text-[#888] text-[12px] xl:text-[0.625vw] px-[16px] xl:px-[0.833vw] py-[10px] xl:py-[0.521vw] transition ease-in-out delay-150 dark:bg-[#13161B] dark:border-[#374151] dark:text-[#818181]"
              >
                <i className="mr-[8px] xl:mr-[0.417vw] cgupod-plus text-[12px] xl:text-[0.625vw]"></i>
                Add New
              </Link>
            </div>
            <div className="flex justify-end">
              <Link
                href={""}
                className="flex items-center bg-white border rounded-[8px] xl:rounded-[0.417vw] text-[#888] text-[12px] xl:text-[0.625vw] px-[16px] xl:px-[0.833vw] py-[10px] xl:py-[0.521vw] transition ease-in-out delay-150 dark:bg-[#13161B] dark:border-[#374151] dark:text-[#818181]"
              >
                <i className="mr-[8px] xl:mr-[0.417vw] cgupod-eye text-[14px] xl:text-[0.729vw]"></i>
                View Credential Checklist
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-[12px] px-[19px] xl:px-[0.990vw] ">
          <div className="flex items-center gap-2">
            <div className="text-[12px] xl:text-[0.625vw] px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.417vw] rounded-[6px] cursor-pointer text-[#fff] bg-[#EC4751] font-normal leading-tight">
              CGU Program Enrollment
            </div>
            <div className="text-[12px] xl:text-[0.625vw] px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.417vw] rounded-[6px] cursor-pointer text-[#424242] bg-[#fff] border border-[#EAE0E0] font-normal leading-tight hover:bg-[#F0E9EA] dark:bg-[#13161B] dark:border-[#374151] dark:text-[#818181]">
              CGU Program: 2
            </div>
          </div>
        </div>
      </div>
    );
  };
  const StatusBody = (rowData) => {
    return (
      <>
        <div className="flex items-center text-[12px] xl:text-[0.625vw] font-medium text-[#3F8892]  bg-[#def7ec] border border-[#3F8892] py-[4px] xl:py-[0.208vw] px-[12px] xl:px-[0.625vw] rounded-2xl xl:rounded-[0.833vw] gap-2 dark:bg-[#192C33] dark:border-[#3F8892]">
          <div className="bg-[#3F8892] h-[6px] w-[6px] rounded-full mb-[1px]"></div>
          <div>{rowData.Status}</div>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className={myNotoSerifGeorgian.className}>
        <div className="text-[#262626] text-[32px] xl:text-[1.667vw] dark:text-white">
          Enrollment
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
                field="Groupname"
                header="Program"
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
                field="Status"
                header="Status"
                sortable
                body={StatusBody}
                style={{ minWidth: "12rem" }}
              ></Column>

              <Column
                field="Groupcreateddate"
                header="Status Eff. Date"
                sortable
                style={{ minWidth: "8rem" }}
              ></Column>
              <Column
                field="gpa"
                header="GPA"
                sortable
                style={{ minWidth: "8rem" }}
              ></Column>
              <Column
                field="Years"
                header="Years"
                sortable
                style={{ minWidth: "8rem" }}
              ></Column>
              <Column
                field="Groupcreateddate"
                header="Complete Survey"
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

      <div className="mt-[40px] xl:mt-[2.083vw] lg:mt-[0] lg:absolute bottom-[-70px] left-0 right-0">
        <div className="flex items-center justify-between">
          <div className="col">
            <Link
              href="javascript:void(0)"
              className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] opacity-30 transition ease-in-out delay-150 dark:text-[#AF1E27] dark:border-[#AF1E27] dark:bg-[#13161B]"
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
               xl:py-[0.625vw] transition ease-in-out delay-150 dark:bg-[#13161B] dark:border-[#EC4751] dark:text-[#EC4751]"
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

export default EnrollmentPage;
