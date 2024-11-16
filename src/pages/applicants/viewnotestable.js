import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import Link from "next/link";

export default function PreliminaryProgram() {
  const [rowClick, setRowClick] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [filters, setFilters] = useState(null);
  // Data table
  const products = [
    {
      date: "06/12/2023",
      type: "General",
      notes: "Ready for Placement",
      created: "Alan",
    },
    {
      date: "06/12/2023",
      type: "General",
      notes: "Ready for Placement",
      created: "Alan",
    },
    {
      date: "06/12/2023",
      type: "General",
      notes: "Ready for Placement",
      created: "Alan",
    },
    {
      date: "06/12/2023",
      type: "General",
      notes: "Ready for Placement",
      created: "Alan",
    },
    {
      date: "06/12/2023",
      type: "General",
      notes: "Ready for Placement",
      created: "Alan",
    },
    {
      date: "06/12/2023",
      type: "General",
      notes: "Ready for Placement",
      created: "Alan",
    },
    {
      date: "06/12/2023",
      type: "General",
      notes: "Ready for Placement",
      created: "Alan",
    },
    {
      date: "06/12/2023",
      type: "General",
      notes: "Ready for Placement",
      created: "Alan",
    },
    {
      date: "06/12/2023",
      type: "General",
      notes: "Ready for Placement",
      created: "Alan",
    },
    {
      date: "06/12/2023",
      type: "General",
      notes: "Ready for Placement",
      created: "Alan",
    },
    {
      date: "06/12/2023",
      type: "General",
      notes: "Ready for Placement",
      created: "Alan",
    },
    {
      date: "06/12/2023",
      type: "General",
      notes: "Ready for Placement",
      created: "Alan",
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
        <div>
          <i className="cgupod-eye"></i>
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
          className="w-7 h-7 xl:w-[1.667vw] xl:h-[1.667vw]"
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
        <div className="flex items-center justify-between xl:px-[1.042vw] px-4 xl:pt-[1.042vw] pt-4 xl:pb-[0.990vw] pb-4 border-b border-b-[#F2EEEE]">
          <div className="text-[#262626] dark:text-white xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-5">
            Note Lists
          </div>
          <div className="flex flex-wrap items-center xl:gap-[1.250vw] gap-5">
            <div>
              <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText
                    placeholder="Search"
                    className="p-inputtext p-component xl:h-[2.083vw] h-[36px]  placeholder:text-[#888888] placeholder:font-normal placeholder:xl:text-[0.833vw]"
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
            field="date"
            header="Date"
            showFilterMatchModes={false}
            showFilterMenuOptions={false}
            showClearButton={false}
            showApplyButton={false}
            filter
            filterElement={SearchFilterTemplate}
            style={{ minWidth: "8rem" }}
          ></Column>
          <Column
            field="type"
            header="type"
            showFilterMatchModes={false}
            showFilterMenuOptions={false}
            showClearButton={false}
            showApplyButton={false}
            filter
            filterElement={SearchFilterTemplate}
            style={{ minWidth: "8rem" }}
          ></Column>
          <Column
            field="notes"
            header="Notes"
            showFilterMatchModes={false}
            showFilterMenuOptions={false}
            showClearButton={false}
            showApplyButton={false}
            filter
            filterElement={SearchFilterTemplate}
            style={{ minWidth: "12rem" }}
          ></Column>
          <Column
            field="created"
            header="Created by"
            showFilterMatchModes={false}
            showFilterMenuOptions={false}
            showClearButton={false}
            showApplyButton={false}
            filter
            filterElement={SearchFilterTemplate}
            style={{ minWidth: "8rem" }}
          ></Column>
        </DataTable>
      </div>
    </>
  );
}
