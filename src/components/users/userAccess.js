import React, { useState, useRef ,useEffect} from "react";
import { Noto_Serif_Georgian } from "@next/font/google";
import Link from "next/link";
import { ScrollPanel } from "primereact/scrollpanel";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Checkbox } from "primereact/checkbox";
import { TreeTable } from 'primereact/treetable';
import {NodeService} from '../service/NodeService';


const myNotoSerifGeorgian = Noto_Serif_Georgian({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
});

export default function Users() {
    
    const [rowClick, setRowClick] = useState(true);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [filters, setFilters] = useState(null);
    const [checked, setChecked] = useState(false);
    const [selectedCity, setSelectedCity] = useState(null);
    const [date, setDate] = useState(null);

    
    const products = [
        
        {
            UserID: "487441",
            image: 'Avatar1',
            Module: "nathan.roberts@example.com",
            Designation: 'Principal',
            CreatedDate: '29-02-2023',
            Group: 'Principal, User',
            Activate: '',
            children: [
                {
                    key: '0-0',
                    label: 'Work',
                    data: 'Work Folder',
                    icon: 'pi pi-fw pi-cog',
                    children: [
                        { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                        { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
                    ]
                },
                {
                    key: '0-1',
                    label: 'Home',
                    data: 'Home Folder',
                    icon: 'pi pi-fw pi-home',
                    children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
                }
            ]
        },
        {
            UserID: "487442",
            image: 'Avatar2',
            UserEmail: "michelle.rivera@example.com",
            Designation: 'Principal',
            CreatedDate: '29-02-2023',
            Group: 'Principal, User',
            Activate: '',
        },
        {
            UserID: "487441",
            image: 'Avatar3',
            UserEmail: "debbie.baker@example.com",
            Designation: 'Assistant Principal',
            CreatedDate: '29-02-2023',
            Group: 'Principal, User',
            Activate: '',
        },
        {
            UserID: "487441",
            image: 'Avatar3',
            UserEmail: "debbie.baker@example.com",
            Designation: 'Assistant Principal',
            CreatedDate: '29-02-2023',
            Group: 'Principal, User',
            Activate: '',
        },

        {
            UserID: "487441",
            image: 'Avatar3',
            UserEmail: "debbie.baker@example.com",
            Designation: 'Assistant Principal',
            CreatedDate: '29-02-2023',
            Group: 'Principal, User',
            Activate: '',
        },
        {
            UserID: "487441",
            image: 'Avatar3',
            UserEmail: "debbie.baker@example.com",
            Designation: 'Assistant Principal',
            CreatedDate: '29-02-2023',
            Group: 'Principal, User',
            Activate: '',
        },
        {
            UserID: "487441",
            image: 'Avatar3',
            UserEmail: "debbie.baker@example.com",
            Designation: 'Assistant Principal',
            CreatedDate: '29-02-2023',
            Group: 'Principal, User',
            Activate: '',
        },
        {
            UserID: "487441",
            image: 'Avatar3',
            UserEmail: "debbie.baker@example.com",
            Designation: 'Assistant Principal',
            CreatedDate: '29-02-2023',
            Group: 'Principal, User',
            Activate: '',
        },
        {
            UserID: "487441",
            image: 'Avatar3',
            UserEmail: "debbie.baker@example.com",
            Designation: 'Assistant Principal',
            CreatedDate: '29-02-2023',
            Group: 'Principal, User',
            Activate: '',
        },
        {
            UserID: "487441",
            image: 'Avatar3',
            UserEmail: "debbie.baker@example.com",
            Designation: 'Assistant Principal',
            CreatedDate: '29-02-2023',
            Group: 'Principal, User',
            Activate: '',
        },
        {
            UserID: "487441",
            image: 'Avatar3',
            UserEmail: "debbie.baker@example.com",
            Designation: 'Assistant Principal',
            CreatedDate: '29-02-2023',
            Group: 'Principal, User',
            Activate: '',
        },
    ]
    
    const TableImage = (rowData) => {
        console.log("rowData.image", rowData.image);
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

    const ActivateBody = (rowData) => {
        return <>
            <div className='flex w-full'> <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
        </>;
    };


    const actionBodyTemplate = (rowData) => {
        return <><div className="flex justify-center text-[16px] gap-[10px] xl:gap-[1.042vw] w-full">
            <Link href=''> <i className='cgupod-eye'></i></Link>
            <Link href='' onClick={() => setVisibleRight(true)}> <i className='cgupod-user-tick'></i></Link>
            <Link href=''> <i className='cgupod-trash'></i></Link>
            <Link href=''> <i className='cgupod-security-safe'></i></Link>
        </div></>;
    };
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
   
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);;
  


    return (
        <>
            {/* row */}
            <div className={myNotoSerifGeorgian.className}>
                <div className="text-[#262626] text-[32px] xl:text-[1.667vw] dark:text-[#fff]">
                    Users
                </div>
            </div>

            <div className='pt-[24px] xl:pt-[1.25vw] '>
                <div className="bg-white border border-[#F2EEEE] rounded-lg xl:rounded-[0.521vw] dark:bg-[#13161B] dark:border-[#1F2A37] dark:text-[#fff]">
                    <div className="flex items-center justify-between xl:px-[1.042vw] px-4 xl:pt-[1.042vw] pt-4 xl:pb-[0.990vw] pb-4 border-b border-b-[#F2EEEE] dark:text-[#fff] 
                    dark:border-[#1F2A37]">
                        <div className="flex flex-wrap items-center xl:gap-[0.521vw] gap-2">
                            <div className="text-[#262626] text-[16px] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-5 dark:text-[#fff]">User Access</div>

                        </div>

                    </div>

                   
                    <div className="card">
                        <TreeTable value={nodes}   className=" datatablePlusIcon custTable tableCust custCheckBox custTable tableCust" stripedRows 
                        style={{ width: "80%" }}>
                        <Column field="name" header="Module" expander  style={{ minWidth: "25rem" }} sortable className="fontStyle py-[ 0.417vw] px-[1.042vw] " ></Column>

                        <Column field="name" header="Module" expander  style={{ minWidth: "25rem" }} sortable className="fontStyle py-[ 0.417vw] px-[1.042vw] " ></Column>

                        <Column field="size" header="Access"   style={{ minWidth: "25rem" }} body={ActivateBody} showApplyButton={false} showClearButton={false} showFilterMenuOptions={false} sortable className="fontStyle"></Column>
                      
                            
                        </TreeTable>
                    </div>

                </div>

            </div>

            
            <div className="mt-[32px] lg:mt-[0] lg:absolute bottom-0 left-0 right-0">
              
                <div className="flex items-center justify-between">
                    <div className="col">
                        <Link
                            href={""} 
                            className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white 
                            text-[16px] xl:text-[0.833vw] px-[10px] xl:px-[0.625vw] py-[10px] xl:py-[0.421vw] transition ease-in-out delay-150 dark:border-[#F5747C] dark:bg-[#13161B] dark:text-[#F5747C]"
                           >
                            <i className="mr-[10px] xl:mr-[0.417vw] cgupod-close-circle text-[22px] xl:text-[1.146]"></i>
                            Cancel
                        </Link>
                    </div>
                    <div className="col">
                        <Link
                            href={""}  onClick={()=>setSuccessfullyUserImportedpopup(true)}
                            className="flex items-center bg-[#AF1E27] hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#fff] hover:text-white text-[16px] xl:text-[0.833vw] px-[10px] xl:px-[0.625vw] py-[10px] xl:py-[0.421vw] transition ease-in-out delay-150"
                        >
                             <i className="mr-[8px] xl:mr-[0.417vw] cgupod-plus text-[18px] xl:text-[1.146]"></i>
                            Apply
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
