import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";

export default function StaffList() {
    const [rowClick, setRowClick] = useState(true);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [filters, setFilters] = useState(null);
    // Data table 
    const products = [
        {
            image:'Avatar1',
            id: "487441",
            name: "Marvin McKinney",
            email: "dolores.chambers@example.com",
            designation: "Asst.Principal",
        },
        {
            image:'Avatar2',
            id: "487441",
            name: "Marvin McKinney",
            email: "dolores.chambers@example.com",
            designation: "Asst.Principal",
        },
        {
            image:'Avatar3',
            id: "487441",
            name: "Marvin McKinney",
            email: "dolores.chambers@example.com",
            designation: "Asst.Principal",
        },
        {
            image:'Avatar4',
            id: "487441",
            name: "Marvin McKinney",
            email: "dolores.chambers@example.com",
            designation: "Asst.Principal",
        },
        {
            image:'Avatar1',
            id: "487441",
            name: "Marvin McKinney",
            email: "dolores.chambers@example.com",
            designation: "Asst.Principal",
        },
        {
            image:'Avatar2',
            id: "487441",
            name: "Marvin McKinney",
            email: "dolores.chambers@example.com",
            designation: "Asst.Principal",
        },
        {
            image:'Avatar3',
            id: "487441",
            name: "Marvin McKinney",
            email: "dolores.chambers@example.com",
            designation: "Asst.Principal",
        },
        {
            image:'Avatar4',
            id: "487441",
            name: "Marvin McKinney",
            email: "dolores.chambers@example.com",
            designation: "Asst.Principal",
        },
        {
            image:'Avatar1',
            id: "487441",
            name: "Marvin McKinney",
            email: "dolores.chambers@example.com",
            designation: "Asst.Principal",
        },
        {
            image:'Avatar2',
            id: "487441",
            name: "Marvin McKinney",
            email: "dolores.chambers@example.com",
            designation: "Asst.Principal",
        },
        {
            image:'Avatar3',
            id: "487441",
            name: "Marvin McKinney",
            email: "dolores.chambers@example.com",
            designation: "Asst.Principal",
        },
        {
            image:'Avatar4',
            id: "487441",
            name: "Marvin McKinney",
            email: "dolores.chambers@example.com",
            designation: "Asst.Principal",
        },
    ];

    const SearchFilterTemplate = (options) => {
    return <>
    <div className="SearchFilter xl:p-[0.729vw] p-3 xl:rounded-[0.521vw] rounded-lg bg-white boxshadow01 xl:space-y-[0.625vw] space-y-3">
        <span className="p-input-icon-left custm-filterserach">
                <i className="cgupod-td-filter-serach" style={{color:'#9CA1AB', fontSize:'0.8rem'}} />
                <InputText placeholder="Search" className="xl:h-[2.292vw] h-[36px] placeholder:font-normal placeholder:text-[#9CA1AB]" style={{background:'#F5F6F8', border:"1px solid #BECDE3", borderRadius:'8px'}} />
            </span>
            <div className="flex flex-col xl:gap-[0.625vw] gap-2">
                {categories.map((category) => {
                    return (
                        <div key={category.key} className="flex items-center">
                            <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)} className="cutsm_checkbox" />
                            <label htmlFor={category.key} className="ml-2 font-medium text-[#374151] xl:text-[0.833vw] text-sm">
                                {category.name}
                            </label>
                        </div>
                    );
                })}
            </div>
    </div>
    
    </>;
    };

    const actionBodyTemplate = (rowData) => {
        return <>
        <div className="flex items-center xl:gap-[0.833vw] gap-3 text-[#4B586E] xl:text-[0.938vw] text-sm">
            <Link href={''}><i className="cgupod-profile-remove"></i></Link>
        </div>
        </>;
    };
    /*---Table End--*/

    const categories = [
        { name: 'Option 1', key: 'A' },
        { name: 'Option 2', key: 'M' },
        { name: 'Option 3', key: 'P' },
        { name: 'Option 4', key: 'R' },
        { name: 'Option 5', key: 'R' }
    ];
    const [selectedCategories, setSelectedCategories] = useState([categories[1]]);

    const onCategoryChange = (e) => {
        let _selectedCategories = [...selectedCategories];

        if (e.checked)
            _selectedCategories.push(e.value);
        else
            _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);

        setSelectedCategories(_selectedCategories);
    };

    const TableImage = (rowData) => {
        return (
            <div>
                <img src={`/assets/images/svg/${rowData.image}.svg`} 
                        className='xl:w-[1.667vw] xl:h-[1.667vw] max-w-[30px] max-h-[30px]'
                         width={48} 
                         height={48} 
                         alt='avatar' 
                      />

            </div>
        );
    }

  return (
    <>
    <div className="bg-white dark:bg-[#13161B] border border-[#F2EEEE] dark:border-[#1F2A37] rounded-lg xl:rounded-[0.521vw]">
    <div className="flex items-center justify-between xl:px-[1.042vw] px-4 xl:pt-[1.042vw] pt-4 xl:pb-[0.990vw] pb-4">
          <div className="flex flex-wrap items-center xl:gap-[0.521vw] gap-2">
            <div className="text-[#262626] dark:text-[#FFFFFF] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-5">Staffs Details</div>
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
    <DataTable value={products}
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
        selectionMode={rowClick ? null : 'checkbox'}
        selection={selectedProducts}
        filters={filters}
        globalFilterFields={[
          "id",
          "name",
          "email.name",
          "designation",
        ]}
        dataKey="id"
    >
        <Column
        selectionMode="multiple"
        style={{ maxWidth: "2rem" }}
        ></Column>
        <Column
            field="id"
            header="ID"
            sortable
            style={{ minWidth: "6rem" }}
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
            style={{ minWidth: "10rem" }}
        ></Column>
        <Column
            field="email"
            header="Email"
            showFilterMatchModes={false}
            showFilterMenuOptions={false}
            showClearButton={false}
            showApplyButton={false}
            filter
            filterElement={SearchFilterTemplate}
            style={{ minWidth: "17rem" }}
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
            style={{ minWidth: "8rem" }}
        ></Column>
        <Column
            field="Action"
            header="Action"
            style={{ minWidth: "6rem" }}
            align="center"
            body={actionBodyTemplate}
            sortable
            frozen
            alignFrozen="right"
        ></Column>
    </DataTable>
    </div>
    </>
  )
}
