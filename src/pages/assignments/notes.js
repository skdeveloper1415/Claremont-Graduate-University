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

const NotesPage = () => {
  const [rowClick, setRowClick] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [visibleRight, setVisibleRight] = useState(false);
  const [schoolData, setSchoolData] = useState(null);
  const [endDate, setEndDate] = useState("");
  const [date, setDate] = useState("");
  const [others, setOthers] = useState(false);

  const schoolInfo = [
    { name: "Sparks Elementary", code: "01" },
    { name: "Sparks ", code: "02" },
  ];
  const [filters, setFilters] = useState(null);
  const products = [
    {
      id: "001",
      Groupname: "Teacher",
      Groupdescription: "Candidates",
      Years: "9.5",
      Groupcreateddate: "16/08/2013",
      Type: "Charter",
      Status: "Completed",
      Note: "Lorem ipsum dolor",
      Auther: "Leslie Alexander",
      Upload: "-",
      District: "The School of Arts and Enterprise",
    },
    {
      id: "002",
      Groupname: "Teacher",
      Groupdescription: "Entering Cohort",
      Years: "3",
      Groupcreateddate: "18/09/2012",
      Type: "Public",
      Status: "Completed",
      Note: "Lorem ipsum dolor",
      Auther: "Guy Hawkins",
      Upload: "-",
      District: "Potrero School",
    },
    {
      id: "003",
      Groupname: "Asst.Professor",
      Groupdescription: "Entering Cohort",
      Years: "3",
      Groupcreateddate: "18/09/2012",
      Type: "Public",
      Status: "Completed",
      Note: "Lorem ipsum dolor",
      Auther: "Robert Fox",
      Upload: "-",
      District: "Middle School",
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
        </div>
      </>
    );
  };
  const headerData = () => {
    return (
      <div className="grid ">
        <div className="flex justify-between items-center py-[16px] xl:py-[0.833vw] px-[19px] xl:px-[0.990vw]">
          <div className="dark:text-[#fff] text-[16px] xl:text-[0.833vw] text-[#262626] font-medium">
            Notes
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className={myNotoSerifGeorgian.className}>
        <div className="text-[#262626] text-[32px] xl:text-[1.667vw]">
          Notes
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
                field="Type"
                header="Type"
                sortable
                style={{ minWidth: "8rem" }}
              ></Column>
              <Column
                field="Note"
                header="Note"
                sortable
                style={{ minWidth: "15rem" }}
              ></Column>
              <Column
                field="Groupcreateddate"
                header="Date"
                sortable
                style={{ minWidth: "8rem" }}
              ></Column>
              <Column
                field="Auther"
                header="Auther"
                sortable
                style={{ minWidth: "12rem" }}
              ></Column>
              <Column
                field="Upload"
                header="Upload"
                sortable
                style={{ minWidth: "7rem" }}
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

      <div className="mt-[60px] xl:mt-[3.125vw] lg:mt-[0]  bottom-[-70px] left-0 right-0">
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

export default NotesPage;
