import React, { useState, useRef } from "react";
import { Noto_Serif_Georgian } from "@next/font/google";
import { ScrollPanel } from "primereact/scrollpanel";
import { InputText } from "primereact/inputtext";
import Link from "next/link";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Checkbox } from "primereact/checkbox";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
});

const Jobs = () => {

    const [rowClick, setRowClick] = useState(true);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [filters, setFilters] = useState(null);
    // Data table 
    const products = [
        {
            sno: '1',
            designation: 'Training Teacher',
            noofopenings: '5'
        },
        {
            sno: '1',
            designation: 'Training Teacher',
            noofopenings: '5'
        },
        {
            sno: '1',
            designation: 'Training Teacher',
            noofopenings: '5'
        },
        {
            sno: '1',
            designation: 'Training Teacher',
            noofopenings: '5'
        },
        {
            sno: '1',
            designation: 'Training Teacher',
            noofopenings: '5'
        },
        {
            sno: '1',
            designation: 'Training Teacher',
            noofopenings: '5'
        },
        {
            sno: '1',
            designation: 'Training Teacher',
            noofopenings: '5'
        },
        {
            sno: '1',
            designation: 'Training Teacher',
            noofopenings: '5'
        },
        {
            sno: '1',
            designation: 'Training Teacher',
            noofopenings: '5'
        },
        {
            sno: '1',
            designation: 'Training Teacher',
            noofopenings: '5'
        },
        {
            sno: '1',
            designation: 'Training Teacher',
            noofopenings: '5'
        },
        {
            sno: '1',
            designation: 'Training Teacher',
            noofopenings: '5'
        },

    ];


    const SearchFilterTemplate = (options) => {
        return <>
            <div className="SearchFilter xl:p-[0.729vw] p-3 xl:rounded-[0.521vw] rounded-lg bg-white boxshadow01 xl:space-y-[0.625vw] space-y-3">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText placeholder="Search" className="xl:h-[2.083vw] h-[36px]" style={{ background: '#F5F6F8', border: "1px solid #BECDE3", borderRadius: '8px' }} />
                </span>
                <div className="flex flex-col xl:gap-[0.625vw] gap-2">
                    {categories.map((category) => {
                        return (
                            <div key={category.key} className="flex items-center">
                                <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)} className="cutsm_checkbox" />
                                <label htmlFor={category.key} className="ml-2">
                                    {category.name}
                                </label>
                            </div>
                        );
                    })}
                </div>
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

    return (
        <div>
            <div className={myNotoSerifGeorgian.className}>
                <div className="text-[#262626] dark:text-[#fff] text-[32px] xl:text-[1.667vw]">
                    Jobs
                </div>
            </div>
            <div
                className=" mt-[22px] xl:mt-[1.146vw] mb-[60px] xl:mb-[3.125vw] bg-[#fff] dark:bg-[#13161B] border border-[#F2EEEE] dark:border-[#1F2A37]  rounded-[8px] xl:rounded-[0.417vw] SidebarHeight"
            >
                <ScrollPanel style={{ width: "100%", height: "100%" }}>
  
                <div className="flex flex-wrap gap-1 items-center justify-between xl:px-[1.042vw] px-4 xl:pt-[1.042vw] pt-4 xl:pb-[0.990vw] pb-4 border-b dark:border-b-[#1F2A37] border-b-[#F2EEEE]">
                    <div className="flex items-center xl:gap-[0.521vw] gap-2">
                        <div className="text-[#262626] dark:text-[#FFFFFF] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-5">Jobs</div>
                        <div className="dark:text-[#818181] text-[#888888] xl:text-[0.625vw] text-xs font-medium xl:leading-[0.938vw] leading-5 bg-[#FCF5F6] dark:bg-[#1C2026] xl:rounded-[0.938vw] rounded-2xl xl:px-[0.729vw] px-3 xl:py-[0.313vw] py-1">Display 1 to 10 of 150</div>
                    </div>
                    <div className="flex flex-wrap items-center xl:gap-[1.250vw] gap-5">
                        <div>
                            <span className="p-input-icon-left custm-search">
                                <i className="cgupod-td-searchbar xl:text-[0.833vw] text-xs text-[#888888]" />
                                <InputText placeholder="Search" className="p-inputtext p-component xl:h-[2.083vw] h-[36px] xl:w-[15.927vw] placeholder:text-[#888888] placeholder:font-normal placeholder:xl:text-[0.833vw]" />
                            </span>
                        </div>
                        <div className="flex items-center xl:gap-[0.521vw] gap-2">
                            <Link href={''} className="text-[#888888] dark:text-[#818181] font-normal xl:text-[0.729vw] text-xs dark:bg-[#13161B] bg-white border border-[#EAE0E0] dark:border-[#374151] xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg"><i className="cgupod-print mr-2"></i><span>Print</span></Link>
                            <Link href={''} className="text-[#888888] dark:text-[#818181] font-normal xl:text-[0.729vw] text-xs dark:bg-[#13161B] bg-white border border-[#EAE0E0] dark:border-[#374151] xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg"><i className="cgupod-download mr-2"></i><span>Download</span></Link>
                        </div>
                    </div>
                </div>
                    <div className='px-[20px] xl:px-[1.042vw] py-[8px]'>
                        <div className='flex items-center gap-2'>
                            <div className={`text-[12px] xl:text-[0.625vw] px-[20px] xl:px-[1.042vw] py-[6px] rounded-[6px] cursor-pointer text-[#fff] bg-[#AF1E27] font-normal`}>All Schools</div>

                            <div className={`text-[12px] xl:text-[0.625vw] px-[20px] xl:px-[1.042vw] py-[6px] rounded-[6px] cursor-pointer text-[#424242] bg-[#fff] hover:bg-[#F0E9EA] border border-[#EAE0E0] dark:border-[#374151] dark:bg-[#13161B] dark:text-[#AAAAAA] font-normal
                                `}>
                                Training Teacher
                            </div>
                            <div className={`text-[12px] xl:text-[0.625vw] px-[20px] xl:px-[1.042vw] py-[6px] rounded-[6px] cursor-pointer text-[#424242] bg-[#fff] hover:bg-[#F0E9EA] border border-[#EAE0E0] dark:border-[#374151] dark:bg-[#13161B] dark:text-[#AAAAAA] font-normal
                                    `}>
                                Intern
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
                            field="sno"
                            header="S.No"
                            sortable
                            style={{ minWidth: "20%" }}
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
                            style={{ minWidth: "45%" }}
                        ></Column>
                        <Column
                            field="noofopenings"
                            header="No of Openings"
                            sortable
                            style={{ minWidth: "30%" }}
                        ></Column>

                    </DataTable>


                </ScrollPanel>
            </div>

        </div>
    );
};

export default Jobs;
