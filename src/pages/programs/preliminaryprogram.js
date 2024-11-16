import React, { useState } from 'react';
import StackedProgressChart from '@/components/allchart/stackedprogresschart';
import PieChartWithImage from '@/components/allchart/piechartwithimage';
import HorizontalBarChart from '@/components/allchart/horizontalbarchart';
import VerticalBarChart from '@/components/allchart/verticalbarchart';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import Link from 'next/link';
import ImportScore from '@/components/programs/importscore';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

export default function PreliminaryProgram() {
    const [importScorepopup, setImportScorepopup] = useState(false)
    const [rowClick, setRowClick] = useState(true);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [filters, setFilters] = useState(null);
    const [activeTab, setActiveTab] = useState(0);
    // Data table 
    const products = [
        {
            id: "487441",
            image: 'Avatar1',
            name: "Marvin McKinney",
            prelimSubject: "Math",
            basicSkills: "No",
            subjectMatter: 'No',
            tb: 'Yes',
            TBLivescan: 'No',
            obs: 'Yes',
            const: 'No',
            cpr: 'Yes',
            mandatedReporter: 'No',
            completedIntern: 'Yes',
            tpa: 'No',
            rica: 'Yes',
            completion: 'No',
            Action: '5',
        },
        {
            id: "487442",
            image: 'Avatar2',
            name: "Marvin McKinney",
            prelimSubject: "English",
            basicSkills: "Yes",
            subjectMatter: 'No',
            tb: 'Yes',
            TBLivescan: 'No',
            obs: 'Yes',
            const: 'No',
            cpr: 'Yes',
            mandatedReporter: 'No',
            completedIntern: 'Yes',
            tpa: 'No',
            rica: 'Yes',
            completion: 'No',
            Action: '5',
        },
        {
            id: "487443",
            image: 'Avatar3',
            name: "Marvin McKinney",
            prelimSubject: "Multiple Subject",
            basicSkills: "No",
            subjectMatter: 'No',
            tb: 'Yes',
            TBLivescan: 'No',
            obs: 'Yes',
            const: 'No',
            cpr: 'Yes',
            mandatedReporter: 'No',
            completedIntern: 'Yes',
            tpa: 'No',
            rica: 'Yes',
            completion: 'No',
            Action: '5',
        },
        {
            id: "487444",
            image: 'Avatar4',
            name: "Marvin McKinney",
            prelimSubject: "Math",
            basicSkills: "Yes",
            subjectMatter: 'No',
            tb: 'Yes',
            TBLivescan: 'No',
            obs: 'Yes',
            const: 'No',
            cpr: 'Yes',
            mandatedReporter: 'No',
            completedIntern: 'Yes',
            tpa: 'No',
            rica: 'Yes',
            completion: 'No',
            Action: '5',
        },
        {
            id: "487445",
            image: 'Avatar1',
            name: "Marvin McKinney",
            prelimSubject: "English",
            basicSkills: "No",
            subjectMatter: 'No',
            tb: 'Yes',
            TBLivescan: 'No',
            obs: 'Yes',
            const: 'No',
            cpr: 'Yes',
            mandatedReporter: 'No',
            completedIntern: 'Yes',
            tpa: 'No',
            rica: 'Yes',
            completion: 'No',
            Action: '5',
        },
        {
            id: "487446",
            image: 'Avatar2',
            name: "Marvin McKinney",
            prelimSubject: "Math",
            basicSkills: "Yes",
            subjectMatter: 'No',
            tb: 'Yes',
            TBLivescan: 'No',
            obs: 'Yes',
            const: 'No',
            cpr: 'Yes',
            mandatedReporter: 'No',
            completedIntern: 'Yes',
            tpa: 'No',
            rica: 'Yes',
            completion: 'No',
            Action: '5',
        },
        {
            id: "487447",
            image: 'Avatar3',
            name: "Marvin McKinney",
            prelimSubject: "Multiple Subject",
            basicSkills: "No",
            subjectMatter: 'No',
            tb: 'Yes',
            TBLivescan: 'No',
            obs: 'Yes',
            const: 'No',
            cpr: 'Yes',
            mandatedReporter: 'No',
            completedIntern: 'Yes',
            tpa: 'No',
            rica: 'Yes',
            completion: 'No',
            Action: '5',
        },
        {
            id: "487448",
            image: 'Avatar4',
            name: "Marvin McKinney",
            prelimSubject: "Multiple Subject",
            basicSkills: "Yes",
            subjectMatter: 'No',
            tb: 'Yes',
            TBLivescan: 'No',
            obs: 'Yes',
            const: 'No',
            cpr: 'Yes',
            mandatedReporter: 'No',
            completedIntern: 'Yes',
            tpa: 'No',
            rica: 'Yes',
            completion: 'No',
            Action: '5',
        },
        {
            id: "487449",
            image: 'Avatar1',
            name: "Marvin McKinney",
            prelimSubject: "Multiple Subject",
            basicSkills: "Yes",
            subjectMatter: 'No',
            tb: 'Yes',
            TBLivescan: 'No',
            obs: 'Yes',
            const: 'No',
            cpr: 'Yes',
            mandatedReporter: 'No',
            completedIntern: 'Yes',
            tpa: 'No',
            rica: 'Yes',
            completion: 'No',
            Action: '5',
        },
        {
            id: "487450",
            image: 'Avatar2',
            name: "Marvin McKinney",
            prelimSubject: "Multiple Subject",
            basicSkills: "Yes",
            subjectMatter: 'No',
            tb: 'Yes',
            TBLivescan: 'No',
            obs: 'Yes',
            const: 'No',
            cpr: 'Yes',
            mandatedReporter: 'No',
            completedIntern: 'Yes',
            tpa: 'No',
            rica: 'Yes',
            completion: 'No',
            Action: '5',
        },
        {
            id: "487451",
            image: 'Avatar3',
            name: "Marvin McKinney",
            prelimSubject: "Multiple Subject",
            basicSkills: "Yes",
            subjectMatter: 'No',
            tb: 'Yes',
            TBLivescan: 'No',
            obs: 'Yes',
            const: 'No',
            cpr: 'Yes',
            mandatedReporter: 'No',
            completedIntern: 'Yes',
            tpa: 'No',
            rica: 'Yes',
            completion: 'No',
            Action: '5',
        },
        {
            id: "487452",
            image: 'Avatar4',
            name: "Marvin McKinney",
            prelimSubject: "Multiple Subject",
            basicSkills: "Yes",
            subjectMatter: 'No',
            tb: 'Yes',
            TBLivescan: 'No',
            obs: 'Yes',
            const: 'No',
            cpr: 'Yes',
            mandatedReporter: 'No',
            completedIntern: 'Yes',
            tpa: 'No',
            rica: 'Yes',
            completion: 'No',
            Action: '5',
        },
    ];

    const handleTabClick = (index) => {
        setActiveTab(index);
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

    const actionBodyTemplate = (rowData) => {
        return <><div><i className='cgupod-eye'></i></div></>;
    };

    const statusIcons = (rawData) => {
        if (rawData.basicSkills === 'Yes') {
            return (
                <>
                    <div><i className='cgupod-td-right-tick text-[#18B557] text-[32px] xl:text-[1.667vw]'></i></div>
                </>
            )
        } else if (rawData.basicSkills === 'No') {
            return (
                <>
                    <div><i className='cgupod-td-close-status text-[#F82A2A] text-[32px] xl:text-[1.667vw]'></i></div>
                </>
            )
        } else {
            return (
                <>

                </>
            )
        }

    }
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
                    className='w-7 h-7 xl:w-[1.667vw] xl:h-[1.667vw]'
                    width={48}
                    height={48}
                    alt='avatar'
                />

            </div>
        );
    }

    return (
        <>
            <div className='mt-[16px] xl:mt-[0.833vw]'>
                <div className="bg-white dark:bg-[#13161B] border border-[#F2EEEE] dark:border-[#1F2A37] rounded-lg xl:rounded-[0.521vw]">
                    <div className="flex items-center justify-between xl:px-[1.042vw] px-4 xl:pt-[1.042vw] pt-4 xl:pb-[0.990vw] pb-4 border-b dark:border-b-[#1F2A37] border-b-[#F2EEEE]">
                        <div className="flex flex-wrap items-center xl:gap-[0.521vw] gap-2">
                            <div className="text-[#262626] dark:text-[#FFFFFF] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-5">Overall Candidate Progress</div>
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
                            <Link href={''} onClick={() => setImportScorepopup(true)} className="bg-[#AF1E27] dark:bg-[#36833A] rounded text-white xl:text-[0.729vw] text-xs font-normal xl:leading-[0.938vw] leading-5 xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3"><i className="cgupod-document-upload mr-2"></i><span>Import Score</span></Link>
                        </div>
                    </div>
                    <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
                        <div className='px-[20px] xl:px-[1.042vw] py-[8px]'>
                            <TabList>
                                <div className='flex items-center gap-2'>
                                    <Tab>
                                        <div className={`text-[12px] xl:text-[0.625vw] px-[20px] xl:px-[1.042vw] py-[6px] rounded-[6px] cursor-pointer  ${activeTab === 0
                                            ? "text-[#fff] bg-[#EC4751] dark:bg-[#AF1E27] font-normal"
                                            : "text-[#424242] bg-[#fff]  hover:bg-[#F0E9EA] border border-[#EAE0E0] dark:border-[#374151] dark:text-[#AAAAAA] dark:bg-[#13161B] font-normal"
                                            }`}>Candidate Summary</div>
                                    </Tab>
                                    <Tab>
                                        <div className={`text-[12px] xl:text-[0.625vw] px-[20px] xl:px-[1.042vw] py-[6px] rounded-[6px] cursor-pointer ${activeTab === 1
                                            ? "text-[#fff] bg-[#EC4751] dark:bg-[#AF1E27]  font-normal"
                                            : "text-[#424242] bg-[#fff] hover:bg-[#F0E9EA] border border-[#EAE0E0] dark:border-[#374151] dark:text-[#AAAAAA] dark:bg-[#13161B] font-normal"
                                            }`}>
                                            Qualified Candidates
                                        </div>
                                    </Tab>
                                    <Tab>
                                        <div className={`text-[12px] xl:text-[0.625vw] px-[20px] xl:px-[1.042vw] py-[6px] rounded-[6px] cursor-pointer ${activeTab === 2
                                            ? "text-[#fff] bg-[#EC4751] dark:bg-[#AF1E27] font-normal"
                                            : "text-[#424242] bg-[#fff] hover:bg-[#F0E9EA] border border-[#EAE0E0] dark:border-[#374151] dark:text-[#AAAAAA] dark:bg-[#13161B] font-normal"
                                            }`}>
                                            Candidates 50% Completion
                                        </div>
                                    </Tab>
                                </div>
                            </TabList>
                        </div>
                    </Tabs>
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
                            field="image"
                            header=""
                            body={TableImage}
                            style={{ minWidth: "4rem" }}
                        ></Column>
                        <Column
                            field="id"
                            header="ID"
                            sortable
                            style={{ minWidth: "5rem" }}
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
                            field="prelimSubject"
                            header="Prelim Subject (s)"
                            showFilterMatchModes={false}
                            showFilterMenuOptions={false}
                            showClearButton={false}
                            showApplyButton={false}
                            filter
                            filterElement={SearchFilterTemplate}
                            style={{ minWidth: "12rem" }}
                        ></Column>
                        <Column
                            field="basicSkills"
                            header="Basic Skills"
                            sortable
                            body={statusIcons}
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="subjectMatter"
                            header="Subject Matter"
                            sortable
                            body={statusIcons}
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="tb"
                            header="TB"
                            sortable
                            body={statusIcons}
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="TBLivescan"
                            header="TBLivescan"
                            sortable
                            body={statusIcons}
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="const"
                            header="Const"
                            sortable
                            body={statusIcons}
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="obs"
                            header="Obs"
                            sortable
                            body={statusIcons}
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="cpr"
                            header="CPR"
                            sortable
                            body={statusIcons}
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="mandatedReporter"
                            header="Mandated Reporter"
                            sortable
                            body={statusIcons}
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="completedIntern"
                            header="Completed Intern"
                            sortable
                            body={statusIcons}
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="tpa"
                            header="TPA"
                            sortable
                            body={statusIcons}
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="rica"
                            header="RICA"
                            sortable
                            body={statusIcons}
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="completion"
                            header="Completion %"
                            sortable
                            body={statusIcons}
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="action"
                            header="Overall Status"
                            className='action-shadow-table'
                            frozen
                            alignFrozen="right"
                            align='center'
                            style={{ minWidth: "5rem" }}
                            body={actionBodyTemplate}
                        ></Column>
                    </DataTable>

                </div>
                <ImportScore
                    visible={importScorepopup}
                    onHides={() => setImportScorepopup(false)}
                />

            </div>

        </>
    );
}