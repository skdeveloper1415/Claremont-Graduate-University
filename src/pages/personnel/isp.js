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


export default function ISP() {

    const [rowClick, setRowClick] = useState(true);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [filters, setFilters] = useState(null);
    const [checked, setChecked] = useState(false);
    // Data table 
    const products = [
      {
          id: "487441",
          image:'Avatar1',
          Clinical: "Marvin McKinney",
          Email: 'jackson.graham@example.com',
          PTCount: '3',
          GeoNear: '3',
          GeoFar: '3',
          ActiveTerms:'3'
          
      },
      {
        id: "487441",
        image:'Avatar2',
        Clinical: "Marvin McKinney",
        Email: 'jackson.graham@example.com',
        PTCount: '1',
        GeoNear: '4',
        GeoFar: '1',
        ActiveTerms:'3'
    },
    {
        id: "487441",
        image:'Avatar3',
        Clinical: "Marvin McKinney",
        Email: 'jackson.graham@example.com',
        PTCount: '3',
        GeoNear: '6',
        GeoFar: '3',
        ActiveTerms:'3'
    },
    {
        id: "487441",
        image:'Avatar4',
        Clinical: "Marvin McKinney",
        Email: 'jackson.graham@example.com',
        PTCount: '2',
        GeoNear: '5',
        GeoFar: '2',
        ActiveTerms:'3'
    },
     
    {
        id: "487441",
        image:'Avatar1',
        Clinical: "Marvin McKinney",
        Email: 'jackson.graham@example.com',
        PTCount: '3',
        GeoNear: '7',
        GeoFar: '4',
        ActiveTerms:'3'
    },
    {
        id: "487441",
        image:'Avatar1',
        Clinical: "Marvin McKinney",
        Email: 'jackson.graham@example.com',
        PTCount: '4',
        GeoNear: '5',
        GeoFar: '3',
        ActiveTerms:'3'
    },
    {
        id: "487441",
        image:'Avatar1',
        Clinical: "Marvin McKinney",
        Email: 'jackson.graham@example.com',
        PTCount: '3',
        GeoNear: '5',
        GeoFar: '3',
        ActiveTerms:'3'
    },
    {
        id: "487441",
        image:'Avatar1',
        Clinical: "Marvin McKinney",
        Email: 'jackson.graham@example.com',
        PTCount: '4',
        GeoNear: '4',
        GeoFar: '3',
        ActiveTerms:'3'
    },
    {
        id: "487441",
        image:'Avatar1',
        Clinical: "Marvin McKinney",
        Email: 'jackson.graham@example.com',
        PTCount: '3',
        GeoNear: '6',
        GeoFar: '3',
        ActiveTerms:'3'
    },
    {
        id: "487441",
        image:'Avatar2',
        Clinical: "Brooklyn Simmons",
        Email: 'michael.mitc@example.com',
        PTCount: '3',
        GeoNear: '5',
        GeoFar: '6',
        ActiveTerms:'3'
    },
    {
        id: "487441",
        image:'Avatar4',
        Clinical: "Guy Hawkins",
        Email: 'felicia.reid@example.com',
        PTCount: '3',
        GeoNear: '3',
        GeoFar: '3',
        ActiveTerms:'3'
    },
  ]

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
      console.log("rowData.image",rowData.image);
        return (
            <div>
                <img src={`./assets/images/svg/${rowData.image}.svg`} 
                        className='w-7 h-7 xl:w-[1.667vw] xl:h-[1.667vw]'
                         width={48} 
                         height={48} 
                         alt='avatar' 
                      />

            </div>
        );
    }
    const  ActiveBody = (rowData) => {
        return <>
        <div className='flex justify-center w-full'> <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox> 
       </div>
        </>;
    };
    
   
    return (
        <>
            <div className='mt-[16px] xl:mt-[0.833vw]'>
            <div className="bg-white border border-[#F2EEEE] rounded-lg xl:rounded-[0.521vw] dark:bg-[#13161B] dark:border-[#1F2A37]">
                    <div className="flex items-center justify-between xl:px-[1.042vw] px-4 xl:pt-[1.042vw] pt-4 xl:pb-[0.990vw] pb-4 border-b border-b-[#F2EEEE] dark:border-b-[#1F2A37]">
                        <div className="flex flex-wrap items-center xl:gap-[0.521vw] gap-2">
                            <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-5 dark:text-[#fff]">ISP</div>
                            <div className="text-[#888888] xl:text-[0.625vw] text-xs font-medium xl:leading-[0.938vw] leading-5 bg-[#FCF5F6] xl:rounded-[0.938vw] rounded-2xl xl:px-[0.729vw] px-3 xl:py-[0.313vw] py-1 dark:bg-[#1C2026] dark:text-[#818181]">Display 1 to 10 of 150</div>
                        </div>
                        <div className="flex flex-wrap items-center xl:gap-[1.250vw] gap-5">
                        <div className='custom_search'>
                                <span className="p-input-icon-left">
                                    <i className="pi pi-search" />
                                    <InputText placeholder="Search" className="xl:h-[2.083vw] h-[36px] xl:w-[16.927vw]" style={{ background: '#FFFFFF', border: "1px solid #EAE0E0", borderRadius: '8px' }} />
                                </span>
                            </div>
                            <div className="flex items-center xl:gap-[0.521vw] gap-2">
                                <Link href={''} className="text-[#888888] font-normal xl:text-[0.729vw] text-xs bg-white border border-[#EAE0E0] xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg dark:bg-[#13161B] dark:border-[#374151] dark:text-[#AAAAAA]"><i className="cgupod-print mr-2"></i><span>Print</span></Link>
                                <Link href={''} className="text-[#888888] font-normal xl:text-[0.729vw] text-xs bg-white border border-[#EAE0E0] xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg dark:bg-[#13161B] dark:border-[#374151] dark:text-[#AAAAAA]"><i className="cgupod-download mr-2"></i><span>Download</span></Link>
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
                            field="image"
                            header=""
                            body={TableImage}
                            style={{ minWidth: "3rem" }}
                        ></Column>
                        <Column
                            field="id"
                            header="ID"
                            sortable
                            style={{ minWidth: "5rem" }}
                        ></Column>
                        <Column
                            field="Clinical"
                            header="Clinical Contact"
                            showFilterMatchModes={false}
                            showFilterMenuOptions={false}
                            showClearButton={false}
                            showApplyButton={false}
                            filter
                            filterElement={SearchFilterTemplate}
                            style={{ minWidth: "14rem" }}
                        ></Column>
                        
                      
                        <Column
                            field="Email"
                            header="Email"
                            showFilterMatchModes={false}
                            showFilterMenuOptions={false}
                            showClearButton={false}
                            showApplyButton={false}
                            filter
                            filterElement={SearchFilterTemplate}
                            style={{ minWidth: "14rem" }}
                        ></Column>
                        <Column
                            field="PTCount"
                            header="PT Count"
                            showFilterMatchModes={false}
                            showFilterMenuOptions={false}
                            showClearButton={false}
                            showApplyButton={false}
                            filter
                            filterElement={SearchFilterTemplate}
                            style={{ minWidth: "12rem" }}
                        ></Column>
                        <Column
                            field="GeoNear"
                            header="Geo Near"
                            showFilterMatchModes={false}
                            showFilterMenuOptions={false}
                            showClearButton={false}
                            showApplyButton={false}
                            filter
                            filterElement={SearchFilterTemplate}
                            style={{ minWidth: "12rem" }}
                        ></Column>
                       
                        <Column
                            field="GeoFar"
                            header="Geo Far"
                            showFilterMatchModes={false}
                            showFilterMenuOptions={false}
                            showClearButton={false}
                            showApplyButton={false}
                            filter
                            filterElement={SearchFilterTemplate}
                            style={{ minWidth: "12rem" }}
                        ></Column>
                      
                        <Column
                            field="ActiveTerms"
                            header="# Active Terms"
                            showFilterMatchModes={false}
                            showFilterMenuOptions={false}
                            showClearButton={false}
                            showApplyButton={false}
                            filter
                            filterElement={SearchFilterTemplate}
                           
                            style={{ minWidth: "12rem" }}
                        ></Column>
                        <Column
                            field="Active"
                            header="Active"
                            showFilterMatchModes={false}
                            showFilterMenuOptions={false}
                            showClearButton={false}
                            showApplyButton={false}
                            filter
                            body={ActiveBody}
                            filterElement={SearchFilterTemplate}
                            style={{ minWidth: "8rem" }}
                        ></Column>
                         <Column
                            field="action"
                            header="Actions"
                            className='action-shadow-table'
                            frozen
                            alignFrozen="right"
                            align='center'
                            style={{ minWidth: "5rem" }}
                            body={actionBodyTemplate}
                        ></Column>
                       
                    </DataTable>

                </div>

            </div>
        </>
    );
}