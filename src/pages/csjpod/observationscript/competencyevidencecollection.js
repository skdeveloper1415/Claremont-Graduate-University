import React, { useState, useRef } from "react";
import { Noto_Serif_Georgian } from "@next/font/google";
import Link from "next/link";
import { ScrollPanel } from "primereact/scrollpanel";
import { Checkbox } from "primereact/checkbox";
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
});

const CompetencyEvidenceCollection = () => {
    const [checked, setChecked] = useState(false);
    const [value, setValue] = useState('');
    const [filters, setFilters] = useState(null);
    const [viewNote, setViewNote] = useState(false);

    const products = [
        {
            date: "06/12/2023",
            type: "General",
            notes: "Candidate is showing good progress",
            createdby: "Alan",
        },
        {
            date: "06/12/2023",
            type: "General",
            notes: "Needs improvement on CSJ",
            createdby: "Alan",
        },
        {
            date: "06/12/2023",
            type: "General",
            notes: "Ready for Placement",
            createdby: "Alan",
        },
        {
            date: "06/12/2023",
            type: "General",
            notes: "Assessment information is available",
            createdby: "Alan",
        },
        {
            date: "06/12/2023",
            type: "General",
            notes: "Ready for Placement",
            createdby: "Alan",
        },
        {
            date: "06/12/2023",
            type: "General",
            notes: "Assessment information is available",
            createdby: "Alan",
        },
        {
            date: "06/12/2023",
            type: "General",
            notes: "Candidate is showing good progress",
            createdby: "Alan",
        },
        {
            date: "06/12/2023",
            type: "General",
            notes: "Candidate is showing good progress",
            createdby: "Alan",
        },
        {
            date: "06/12/2023",
            type: "General",
            notes: "Candidate is showing good progress",
            createdby: "Alan",
        },
        {
            date: "06/12/2023",
            type: "General",
            notes: "Candidate is showing good progress",
            createdby: "Alan",
        },
        {
            date: "06/12/2023",
            type: "General",
            notes: "Candidate is showing good progress",
            createdby: "Alan",
        },
        {
            date: "06/12/2023",
            type: "General",
            notes: "Candidate is showing good progress",
            createdby: "Alan",
        },
    ];


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
    return (
        <>
            <div className={myNotoSerifGeorgian.className}>
                <div className="text-[#262626] text-[32px] xl:text-[1.667vw]">
                    Scripting/Competency Evidence Collection
                </div>
            </div>


            {viewNote === false ?
                <div
                    className="bg-white rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw] mt-[32px] xl:mt-[1.667vw] postobview"
                >
                    <ScrollPanel style={{ width: "100%", height: "100%" }}>
                        <div className="xl:mb-[0.833vw] mb-[16px]">
                            <div className="bg-[#FCF5F6] py-[16px] xl:py-[0.833vw] px-[20px] xl:px-[1.042vw] mb-[20px] xl:mb-[1.042vw]">
                                <div className="text-[14px] xl:text-[0.729vw] text-[#262626] font-medium mb-[4px]">Date</div>
                                <div className="custInput">
                                    <InputText
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                        placeholder="22-10-2023"
                                        className="w-full"
                                    />
                                </div>

                                <div className="text-[14px] xl:text-[0.729vw] text-[#262626] font-medium mb-[4px]">Note Summary</div>
                                <div className="custTextArea">
                                    <InputTextarea
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                        rows={5}
                                        autoResize={true}
                                        placeholder="Write text here ..."
                                        className="w-full"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <Link
                                    href={""}
                                    className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[14px] xl:text-[0.729vw] px-[16px] xl:px-[0.833vw] py-[8px] xl:py-[0.417vw] transition ease-in-out delay-150"
                                >
                                    <i className="mr-[8px] xl:mr-[0.417vw] cgupod-plus text-[16px] xl:text-[0.833vw]"></i>
                                    Add Note
                                </Link>
                            </div>
                        </div>
                    </ScrollPanel>
                </div>
                :
                <div className="mt-[32px] xl:mt-[1.667vw] postobview">
                    <ScrollPanel style={{ width: "100%", height: "100%" }}>
                        <div className=" bg-white border border-[#F2EEEE] rounded-lg xl:rounded-[0.521vw] ">

                            <div className="flex items-center justify-between xl:px-[1.042vw] px-4 xl:pt-[1.042vw] pt-4 xl:pb-[0.990vw] pb-4">
                                <div className="flex flex-wrap items-center xl:gap-[0.521vw] gap-2">
                                    <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-5">Note Lists</div>
                                </div>
                                <div className="flex flex-wrap items-center xl:gap-[1.250vw] gap-5">
                                    <div>
                                        <span className="p-input-icon-left">
                                            <i className="pi pi-search" />
                                            <InputText placeholder="Search" className="xl:h-[2.083vw] h-[36px] xl:w-[9.531vw]" style={{ background: '#FFFFFF', border: "1px solid #EAE0E0", borderRadius: '8px' }} />
                                        </span>
                                    </div>
                                    <div className="flex items-center xl:gap-[0.521vw] gap-2">
                                        <Link href={''} className="text-[#888888] font-normal xl:text-[0.729vw] text-xs bg-white border border-[#EAE0E0] xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg"><i className="cgupod-print mr-2"></i><span>Print</span></Link>
                                        <Link href={''} className="text-[#888888] font-normal xl:text-[0.729vw] text-xs bg-white border border-[#EAE0E0] xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg"><i className="cgupod-download mr-2"></i><span>Download</span></Link>
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
                                rows={5}
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
                                    style={{ minWidth: "5rem" }}
                                ></Column>
                                <Column
                                    field="type"
                                    header="Type"
                                    showFilterMatchModes={false}
                                    showFilterMenuOptions={false}
                                    showClearButton={false}
                                    showApplyButton={false}
                                    filter
                                    filterElement={SearchFilterTemplate}
                                    style={{ minWidth: "5rem" }}
                                ></Column>
                                <Column
                                    field="notes"
                                    header="Notes"
                                    sortable
                                    style={{ minWidth: "12rem" }}
                                ></Column>
                                <Column
                                    field="createdby"
                                    header="Created by"
                                    showFilterMatchModes={false}
                                    showFilterMenuOptions={false}
                                    showClearButton={false}
                                    showApplyButton={false}
                                    filter
                                    filterElement={SearchFilterTemplate}
                                    style={{ minWidth: "5rem" }}
                                ></Column>
                            </DataTable>

                        </div>
                    </ScrollPanel>
                </div>

            }

            <div className="mt-[32px] lg:mt-[0] lg:absolute bottom-[-70px] left-0 right-0">
                <div className="flex items-center justify-between">
                    <div className="col">
                        <Link
                            href={""}
                            className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] opacity-30 transition ease-in-out delay-150"
                        >
                            <i className="mr-[8px] xl:mr-[0.417vw] cgupod-close-circle text-[22px] xl:text-[1.146vw]"></i>
                            Cancel
                        </Link>
                    </div>
                    <div className="flex gap-1">
                        {viewNote === false ?
                            <Link
                                href={""}
                                onClick={() => { setViewNote(true) }}
                                className="flex items-center bg-white hover:bg-[#f2f2f2] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw]"
                            >
                                <i className="mr-[8px] xl:mr-[0.417vw] cgupod-document-text text-[22px] xl:text-[1.146vw]"></i>
                                View Notes
                            </Link>
                            :
                            <Link
                                href={""}
                                onClick={() => { setViewNote(false) }}
                                className="flex items-center bg-[#AF1E27] hover:bg-[#79141a] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw]"
                            >
                                <i className="mr-[8px] xl:mr-[0.417vw] cgupod-document-text text-[22px] xl:text-[1.146vw]"></i>
                                View Notes
                            </Link>
                        }



                        <Link
                            href={""}
                            className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] transition ease-in-out delay-150"
                        >
                            <i className="mr-[8px] xl:mr-[0.417vw] cgupod-edit text-[22px] xl:text-[1.146vw]"></i>
                            Edit
                        </Link>
                    </div>
                </div>
            </div>

        </>
    );
};

export default CompetencyEvidenceCollection;
