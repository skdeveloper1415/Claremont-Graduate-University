import React, { use, useState } from "react";
import { Noto_Serif_Georgian } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { Calendar } from "primereact/calendar";
import { Checkbox } from "primereact/checkbox";
import { InputTextarea } from "primereact/inputtextarea";
import { Sidebar } from "primereact/sidebar";
import { Dropdown } from "primereact/dropdown";
import { TabView, TabPanel } from "primereact/tabview";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ScrollPanel } from "primereact/scrollpanel";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const GroupsPage = () => {
  const [rowClick, setRowClick] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [filters, setFilters] = useState(null);
  const products = [
    {
      id: "001",
      Groupname: "2012 Summer TLP IV Candidates",
      Groupdescription: "Candidates",
      Users: "2",
      Groupcreateddate: "16/08/2013",
      Action: "5",
    },
    {
      id: "002",
      Groupname: "2012 Starts",
      Groupdescription: "Entering Cohort",
      Users: "2",
      Groupcreateddate: "18/09/2012",
      Action: "5",
    },
    {
      id: "003",
      Groupname: "2014 - 2018 Completer",
      Groupdescription: "Completion Cohort",
      Users: "2",
      Groupcreateddate: "16/08/2022",
      Action: "5",
    },
  ];
  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <div className="flex items-center xl:gap-[0.833vw] gap-3 text-[#888888] xl:text-[0.938vw] text-sm">
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
      <div className="bg-white text-[16px] xl:text-[0.833vw] text-[#262626] font-medium px-[19px] xl:px-[0.990vw] py-[19px] xl:py-[0.990vw] dark:bg-[#13161B] dark:text-white">
        Group Information
      </div>
    );
  };
  return (
    <div>
      <div className={myNotoSerifGeorgian.className}>
        <div className="text-[#262626] text-[32px] xl:text-[1.667vw] dark:text-white">
          Groups
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
                header="Groups"
                sortable
                style={{ minWidth: "15rem" }}
              ></Column>
              <Column
                field="Groupdescription"
                header="Type"
                sortable
                style={{ minWidth: "12rem" }}
              ></Column>
              <Column
                field="Groupcreateddate"
                header="Date"
                sortable
                style={{ minWidth: "8rem" }}
              ></Column>
              <Column
                header="Select Group"
                selectionMode="multiple"
                align="center"
                style={{ maxWidth: "10rem", minWidth: "10rem" }}
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

export default GroupsPage;
