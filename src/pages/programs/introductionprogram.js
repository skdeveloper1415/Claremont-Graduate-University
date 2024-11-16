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
import BarchartWithImage from '@/components/allchart/barchartwithimage';
import { Tab, TabList, Tabs } from "react-tabs";

export default function IntroductionProgram() {
    const [importScorepopup, setImportScorepopup] = useState(false)
    const [rowClick, setRowClick] = useState(true);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [filters, setFilters] = useState(null);
    const [activeTab, setActiveTab] = useState(0);
    // Data table 
    const products1 = [
        {
            semester: "Fall 2022",
            ptCount: "13",
            newEnroll: "3",
            geoNear: "3",
            geoFar: '3',
            term1: '3',
            term2: '3',
            term3: '3',
            term4: '3',
            directTOclear: '3',
            cgu: '3',
            nonCgu: '3',
            perCgu: '45%',
            perGeoFar: '45%',
            perNewEnroll: '45%',
            Action: '5',
        },
        {
            semester: "Fall 2022",
            ptCount: "13",
            newEnroll: "3",
            geoNear: "3",
            geoFar: '3',
            term1: '3',
            term2: '3',
            term3: '3',
            term4: '3',
            directTOclear: '3',
            cgu: '3',
            nonCgu: '3',
            perCgu: '45%',
            perGeoFar: '45%',
            perNewEnroll: '45%',
            Action: '5',
        },
        {
            semester: "Fall 2022",
            ptCount: "13",
            newEnroll: "3",
            geoNear: "3",
            geoFar: '3',
            term1: '3',
            term2: '3',
            term3: '3',
            term4: '3',
            directTOclear: '3',
            cgu: '3',
            nonCgu: '3',
            perCgu: '45%',
            perGeoFar: '45%',
            perNewEnroll: '45%',
            Action: '5',
        },
        {
            semester: "Fall 2022",
            ptCount: "13",
            newEnroll: "3",
            geoNear: "3",
            geoFar: '3',
            term1: '3',
            term2: '3',
            term3: '3',
            term4: '3',
            directTOclear: '3',
            cgu: '3',
            nonCgu: '3',
            perCgu: '45%',
            perGeoFar: '45%',
            perNewEnroll: '45%',
            Action: '5',
        },
        {
            semester: "Fall 2022",
            ptCount: "13",
            newEnroll: "3",
            geoNear: "3",
            geoFar: '3',
            term1: '3',
            term2: '3',
            term3: '3',
            term4: '3',
            directTOclear: '3',
            cgu: '3',
            nonCgu: '3',
            perCgu: '45%',
            perGeoFar: '45%',
            perNewEnroll: '45%',
            Action: '5',
        },
        {
            semester: "Fall 2022",
            ptCount: "13",
            newEnroll: "3",
            geoNear: "3",
            geoFar: '3',
            term1: '3',
            term2: '3',
            term3: '3',
            term4: '3',
            directTOclear: '3',
            cgu: '3',
            nonCgu: '3',
            perCgu: '45%',
            perGeoFar: '45%',
            perNewEnroll: '45%',
            Action: '5',
        },
        {
            semester: "Fall 2022",
            ptCount: "13",
            newEnroll: "3",
            geoNear: "3",
            geoFar: '3',
            term1: '3',
            term2: '3',
            term3: '3',
            term4: '3',
            directTOclear: '3',
            cgu: '3',
            nonCgu: '3',
            perCgu: '45%',
            perGeoFar: '45%',
            perNewEnroll: '45%',
            Action: '5',
        },
        {
            semester: "Fall 2022",
            ptCount: "13",
            newEnroll: "3",
            geoNear: "3",
            geoFar: '3',
            term1: '3',
            term2: '3',
            term3: '3',
            term4: '3',
            directTOclear: '3',
            cgu: '3',
            nonCgu: '3',
            perCgu: '45%',
            perGeoFar: '45%',
            perNewEnroll: '45%',
            Action: '5',
        },
        {
            semester: "Fall 2022",
            ptCount: "13",
            newEnroll: "3",
            geoNear: "3",
            geoFar: '3',
            term1: '3',
            term2: '3',
            term3: '3',
            term4: '3',
            directTOclear: '3',
            cgu: '3',
            nonCgu: '3',
            perCgu: '45%',
            perGeoFar: '45%',
            perNewEnroll: '45%',
            Action: '5',
        },
        {
            semester: "Fall 2022",
            ptCount: "13",
            newEnroll: "3",
            geoNear: "3",
            geoFar: '3',
            term1: '3',
            term2: '3',
            term3: '3',
            term4: '3',
            directTOclear: '3',
            cgu: '3',
            nonCgu: '3',
            perCgu: '45%',
            perGeoFar: '45%',
            perNewEnroll: '45%',
            Action: '5',
        },
        {
            semester: "Fall 2022",
            ptCount: "13",
            newEnroll: "3",
            geoNear: "3",
            geoFar: '3',
            term1: '3',
            term2: '3',
            term3: '3',
            term4: '3',
            directTOclear: '3',
            cgu: '3',
            nonCgu: '3',
            perCgu: '45%',
            perGeoFar: '45%',
            perNewEnroll: '45%',
            Action: '5',
        },
        {
            semester: "Fall 2022",
            ptCount: "13",
            newEnroll: "3",
            geoNear: "3",
            geoFar: '3',
            term1: '3',
            term2: '3',
            term3: '3',
            term4: '3',
            directTOclear: '3',
            cgu: '3',
            nonCgu: '3',
            perCgu: '45%',
            perGeoFar: '45%',
            perNewEnroll: '45%',
            Action: '5',
        },
    ];


    const products2 = [
        {
            id: "487441",
            image: 'Avatar1',
            name: 'Marvin McKinney',
            isp: "Ava Erby",
            ispTimestamp: "1/13/2023",
            semester: "Fall 2022",
            geoMode: "GeoFar",
            clinRole: "Teacher of Record",
            term: "3",
            eco: '3',
            clinSetting: 'Public Charter',
            clinState: 'CA',
            cinSite: 'Alliance',
            credSubj: 'Math',
            email: 'jackson.graham@gmail.com',
            prelimInst: 'CGU',
            nonCguPrelim: '-',
            setId: '292',
            termId: '292',
            firstTerm: 'CGU',
            Action: '5',
        },
        {
            id: "487441",
            image: 'Avatar1',
            name: 'Marvin McKinney',
            isp: "Ava Erby",
            ispTimestamp: "1/13/2023",
            semester: "Fall 2022",
            geoMode: "GeoFar",
            clinRole: "Teacher of Record",
            term: "3",
            eco: '3',
            clinSetting: 'Public Charter',
            clinState: 'CA',
            cinSite: 'Alliance',
            credSubj: 'Math',
            email: 'jackson.graham@gmail.com',
            prelimInst: 'CGU',
            nonCguPrelim: '-',
            setId: '292',
            termId: '292',
            firstTerm: 'CGU',
            Action: '5',
        },
        {
            id: "487441",
            image: 'Avatar1',
            name: 'Marvin McKinney',
            isp: "Ava Erby",
            ispTimestamp: "1/13/2023",
            semester: "Fall 2022",
            geoMode: "GeoFar",
            clinRole: "Teacher of Record",
            term: "3",
            eco: '3',
            clinSetting: 'Public Charter',
            clinState: 'CA',
            cinSite: 'Alliance',
            credSubj: 'Math',
            email: 'jackson.graham@gmail.com',
            prelimInst: 'CGU',
            nonCguPrelim: '-',
            setId: '292',
            termId: '292',
            firstTerm: 'CGU',
            Action: '5',
        },
        {
            id: "487441",
            image: 'Avatar1',
            name: 'Marvin McKinney',
            isp: "Ava Erby",
            ispTimestamp: "1/13/2023",
            semester: "Fall 2022",
            geoMode: "GeoFar",
            clinRole: "Teacher of Record",
            term: "3",
            eco: '3',
            clinSetting: 'Public Charter',
            clinState: 'CA',
            cinSite: 'Alliance',
            credSubj: 'Math',
            email: 'jackson.graham@gmail.com',
            prelimInst: 'CGU',
            nonCguPrelim: '-',
            setId: '292',
            termId: '292',
            firstTerm: 'CGU',
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

    // chart data 
    const PrelimCredData = {
        label: [
            "Non-CGU",
            "CGU",
            "Direct to Clear",
        ],
        value: [
            {
                value: 2,
                itemStyle: {
                    color: "#8276B1",
                },
            },
            {
                value: 4,
                itemStyle: {
                    color: "#8276B1",
                },
            },

            {
                value: 7,
                itemStyle: {
                    color: "#8276B1",
                },
            },
        ],
    };

    const TermFall = [
        {
            value: 4,
            itemStyle: {
                color: "#9E8D71",
            },
        },
        {
            value: 7,
            itemStyle: {
                color: "#9E8D71",
            },
        },
        {
            value: 5,
            itemStyle: {
                color: "#9E8D71",
            },
        },
        {
            value: 4,
            itemStyle: {
                color: "#9E8D71",
            },
        },
    ];

    const GeoStatus = [
        {
            value: 220,
            itemStyle: {
                color: "#9E8D71",
            },
        },
        {
            value: 180,
            itemStyle: {
                color: "#968FC3",
            },
        }
    ];

    return (
        <>
            <div className='mb-[24px] xl:mb-[1.25vw] mt-[16px] xl:mt-[0.833vw]'>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[24px] xl:gap-[1.250vw]'>
                    {/* PT Snapshot - Fall 2022 start*/}
                    <div className='tilesShadow bg-[#FFFFFF] dark:bg-[#13161B] rounded-lg'>
                        <div className='flex justify-between gap-1 pt-[20px] px-[20px] xl:pt-[1.042vw] xl:px-[1.042vw]'>
                            <div>
                                <div className='text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#FFFFFF] font-medium'>PT Snapshot - Fall 2022</div>
                                <div className='text-[36px] xl:text-[1.875vw] text-[#262626] dark:text-[#FFFFFF] font-semibold'>13</div>
                            </div>
                            <div>
                                <div className='flex justify-end items-center gap-2'>
                                    <div className='text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#FFFFFF] font-medium'>4.2%</div>
                                    <div className="text-center">
                                        <span className="cgupod-circle-fill-r-up text-[#18B557] text-[20px] xl:text-[1.042vw]"></span>
                                    </div>
                                </div>
                                <div className='text-[12px] xl:text-[0.625vw] text-[#888888] font-normal'>
                                    vs last month
                                </div>
                            </div>
                        </div>
                        <div className="h-[50px] mb-[15px] xl:mb-[0.781vw] pr-[20px] xl:pr-[1.042vw]">
                            <StackedProgressChart
                                data={{
                                    value1: [60],
                                    value2: [40],
                                }}
                                color1={"#8276B1"}
                                color2={"#9E8D71"}
                                lableshow1={false}
                                lableshow2={false}
                                borderRadius1={[2, 0, 0, 2]}
                                borderRadius2={[0, 2, 2, 0]}
                                grid={{
                                    left: "2",
                                    right: "2",
                                    top: "15",
                                    bottom: "0",
                                    height: "100%",
                                    containLabel: true,
                                }}

                            />
                        </div>
                        <div className='px-[20px] xl:px-[1.042vw] pb-[20px] xl:pb-[1.042vw] '>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <div className='text-[16px] xl:text-[0.833vw] text-[#8276B1] font-medium'>New Enrollment</div>
                                    <div className='flex items-center gap-1'>
                                        <div className='text-[24px] xl:text-[1.25vw] text-[#262626] font-medium dark:text-[#fff]'>7</div>
                                        <div className='text-[16px] xl:text-[0.833vw] text-[#888888] font-normal'>54%</div>

                                    </div>
                                </div>
                                <div>
                                    <div className='text-[16px] xl:text-[0.833vw] text-[#9E8D71] font-medium'>New Enrollment</div>
                                    <div className='flex items-center gap-1 justify-end'>
                                        <div className='text-[24px] xl:text-[1.25vw] text-[#262626] font-medium dark:text-[#fff]'>6</div>
                                        <div className='text-[16px] xl:text-[0.833vw] text-[#888888] font-normal'>46%</div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* PT Snapshot - Fall 2022 end */}

                    {/* Geo Status - Fall 2022 start */}
                    <div className='tilesShadow bg-[#FFFFFF] dark:bg-[#13161B] p-[20px] xl:p-[1.042vw] rounded-lg'>
                        <div className='text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#FFFFFF] font-medium mb-5'>Geo Status - Fall 2022</div>
                        <div className='grid grid-cols-2 place-content-center'>
                            <div className='w-full h-[140px] xl:h-[8.510vw]'>
                                <BarchartWithImage
                                    legend={{
                                        show: false,
                                    }}
                                    grid={{
                                        top: "12",
                                        right: "10",
                                        bottom: "0",
                                        left: "10",
                                        containLabel: true,
                                    }}
                                    barwidth={50}
                                    barcolor={["#5287DF"]}
                                    labelposition={["insideTop"]}
                                    xAxisLabeldata={[
                                        "White",
                                        "Hispanic",
                                    ]}
                                    name={["DFW Rate"]}
                                    minvalue={0}
                                    intervalvalue={100}
                                    maxvalue={300}
                                    data={GeoStatus}
                                />
                            </div>
                            <div className='text-[20px] xl:text-[1.042vw] text-[#5D5384] dark:text-[#E0E0EF] mt-5 font-light'>
                                of which <span className='font-bold'>64%</span> of the candidate far away from the school
                            </div>
                        </div>
                    </div>
                    {/* Geo Status - Fall 2022 end */}

                    {/* Term - Fall 2022t start*/}
                    <div className='tilesShadow bg-[#FFFFFF] dark:bg-[#13161B] rounded-lg'>
                        <div className='flex justify-between gap-1 pt-[20px] px-[20px] xl:pt-[1.042vw] xl:px-[1.042vw]'>
                            <div>
                                <div className='text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#FFFFFF] font-medium'>Term - Fall 2022</div>
                                <div className='text-[36px] xl:text-[1.875vw] text-[#262626] dark:text-[#FFFFFF] font-semibold'>71%</div>
                            </div>
                            <div>
                                <div className='flex justify-end items-center gap-2'>
                                    <div className='text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#FFFFFF] font-medium'>0%</div>
                                    <div className="text-center">
                                        <span className="cgupod-circle-fill-minus text-[#F82A2A] opacity-25 text-[20px] xl:text-[1.042vw]"></span>
                                    </div>
                                </div>
                                <div className='text-[12px] xl:text-[0.625vw] text-[#888888] font-normal'>
                                    vs last month
                                </div>
                            </div>
                        </div>
                        <div className='xl:pb-[1.042vw] pb-[20px]'>
                            <div className='w-full h-[125px] xl:h-[7.510vw]'>

                                <VerticalBarChart
                                    legend={{
                                        show: false,
                                    }}
                                    grid={{
                                        top: "12",
                                        right: "15",
                                        bottom: "0",
                                        left: "20",
                                        containLabel: true,
                                    }}
                                    barcolor={["#5287DF"]}
                                    labelposition={["insideTop"]}
                                    xAxisLabeldata={[
                                        "Term 1",
                                        "Term 2",
                                        "Term 3",
                                        "Term 4",
                                    ]}
                                    name={["DFW Rate"]}
                                    minvalue={0}
                                    intervalvalue={2}
                                    maxvalue={8}
                                    data={TermFall}
                                />

                            </div>
                        </div>
                    </div>
                    {/* Term - Fall 2022 end */}

                    {/* Prelim Cred - Fall 2022 start*/}
                    <div className='tilesShadow bg-[#FFFFFF] dark:bg-[#13161B] rounded-lg'>
                        <div className='flex justify-between gap-1 pt-[20px] px-[20px] xl:pt-[1.042vw] xl:px-[1.042vw]'>
                            <div>
                                <div className='text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#FFFFFF] font-medium'>Prelim Cred - Fall 2022</div>
                                <div className='text-[36px] xl:text-[1.875vw] text-[#262626] dark:text-[#FFFFFF] font-semibold'>88%</div>
                            </div>
                            <div>
                                <div className='flex justify-end items-center gap-2'>
                                    <div className='text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#FFFFFF] font-medium'>4.2%</div>
                                    <div className="text-center">
                                        <span className="cgupod-circle-fill-r-up text-[#18B557] text-[20px] xl:text-[1.042vw]"></span>
                                    </div>
                                </div>
                                <div className='text-[12px] xl:text-[0.625vw] text-[#888888] font-normal'>
                                    vs last month
                                </div>
                            </div>
                        </div>
                        <div className='xl:pb-[1.042vw] pb-[20px]'>
                            <div className='w-full h-[125px] xl:h-[7.510vw]'>
                                <HorizontalBarChart
                                    legend={{
                                        show: false,
                                    }}
                                    grid={{
                                        top: "5%",
                                        right: "20",
                                        bottom: "0",
                                        left: "20",
                                        containLabel: true,
                                    }}
                                    label={{
                                        show: true,
                                        color: "#262626",
                                        fontSize: 12,
                                        fontWeight: 500,
                                        position: "right",
                                    }}
                                    minv={0}
                                    maxv={8}
                                    data={PrelimCredData}
                                />
                            </div>
                        </div>
                    </div>
                    {/* Prelim Cred - Fall 2022 end */}
                </div>
            </div>

            <div className="bg-white dark:bg-[#13161B] border border-[#F2EEEE] dark:border-[#1F2A37] rounded-lg xl:rounded-[0.521vw]">
                <div className="flex items-center justify-between xl:px-[1.042vw] px-4 xl:pt-[1.042vw] pt-4 xl:pb-[0.990vw] pb-4 border-b dark:border-b-[#1F2A37] border-b-[#F2EEEE]">
                    <div className="flex flex-wrap items-center xl:gap-[0.521vw] gap-2">
                        <div className="text-[#262626] dark:text-[#FFFFFF] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-5">Candidate Enrollment</div>
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
                <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
                    <div className='px-[20px] xl:px-[1.042vw] py-[8px]'>
                        <TabList>
                            <div className='flex items-center gap-2'>
                                <Tab>
                                    <div className={`text-[12px] xl:text-[0.625vw] px-[20px] xl:px-[1.042vw] py-[6px] rounded-[6px] cursor-pointer  ${activeTab === 0
                                        ? "text-[#fff] bg-[#EC4751] dark:bg-[#AF1E27] font-normal"
                                        : "text-[#424242] bg-[#fff]  hover:bg-[#F0E9EA] border border-[#EAE0E0] dark:border-[#374151] dark:text-[#AAAAAA] dark:bg-[#13161B] font-normal"
                                        }`}>Enrollment Summary</div>
                                </Tab>
                                <Tab>
                                    <div className={`text-[12px] xl:text-[0.625vw] px-[20px] xl:px-[1.042vw] py-[6px] rounded-[6px] cursor-pointer ${activeTab === 1
                                        ? "text-[#fff] bg-[#EC4751] dark:bg-[#AF1E27] font-normal"
                                        : "text-[#424242] bg-[#fff]  hover:bg-[#F0E9EA] border border-[#EAE0E0] dark:border-[#374151] dark:text-[#AAAAAA] dark:bg-[#13161B] font-normal"
                                        }`}>
                                        Enrollment Details
                                    </div>
                                </Tab>

                            </div>
                        </TabList>
                    </div>
                </Tabs>

                {(activeTab === 0) ?
                    <DataTable value={products1}
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
                            field="semester"
                            header="Semester"
                            showFilterMatchModes={false}
                            showFilterMenuOptions={false}
                            showClearButton={false}
                            showApplyButton={false}
                            filter
                            filterElement={SearchFilterTemplate}
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="ptCount"
                            header="PT Count"
                            sortable
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="newEnroll"
                            header="New Enroll"
                            sortable
                            style={{ minWidth: "8rem" }}
                        ></Column>
                        <Column
                            field="geoNear"
                            header="Geo Near"
                            sortable
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="geoFar"
                            header="Geo Far"
                            sortable
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="term1"
                            header="Term 1"
                            sortable
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="term2"
                            header="Term 2"
                            sortable
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="term3"
                            header="Term 3"
                            sortable
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="term4"
                            header="Term 4"
                            sortable
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="directTOclear"
                            header="Direct to Clear"
                            sortable
                            style={{ minWidth: "8rem" }}
                        ></Column>
                        <Column
                            field="cgu"
                            header="CGU"
                            sortable
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="nonCgu"
                            header="Non CGU"
                            sortable
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="perCgu"
                            header="% CGU"
                            sortable
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="perGeoFar"
                            header="% Geo Far"
                            sortable
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="perNewEnroll"
                            header="% New Enroll"
                            sortable
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
                    : null}
                {(activeTab === 1) ?
                    <DataTable value={products2}
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
                            style={{ minWidth: "15rem" }}
                        ></Column>
                        <Column
                            field="isp"
                            header="ISP"
                            showFilterMatchModes={false}
                            showFilterMenuOptions={false}
                            showClearButton={false}
                            showApplyButton={false}
                            filter
                            filterElement={SearchFilterTemplate}
                            style={{ minWidth: "12rem" }}
                        ></Column>
                        <Column
                            field="ispTimestamp"
                            header="ISP Timestamp"
                            showFilterMatchModes={false}
                            showFilterMenuOptions={false}
                            showClearButton={false}
                            showApplyButton={false}
                            filter
                            filterElement={SearchFilterTemplate}
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="semester"
                            header="Semester"
                            showFilterMatchModes={false}
                            showFilterMenuOptions={false}
                            showClearButton={false}
                            showApplyButton={false}
                            filter
                            filterElement={SearchFilterTemplate}
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="geoMode"
                            header="GeoMode"
                            showFilterMatchModes={false}
                            showFilterMenuOptions={false}
                            showClearButton={false}
                            showApplyButton={false}
                            filter
                            filterElement={SearchFilterTemplate}
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="clinRole"
                            header="ClinRole"
                            showFilterMatchModes={false}
                            showFilterMenuOptions={false}
                            showClearButton={false}
                            showApplyButton={false}
                            filter
                            filterElement={SearchFilterTemplate}
                            style={{ minWidth: "12rem" }}
                        ></Column>
                        <Column
                            field="term"
                            header="Term #"
                            sortable
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="eco"
                            header="Eco"
                            sortable
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="clinSetting"
                            header="Clin Setting"
                            showFilterMatchModes={false}
                            showFilterMenuOptions={false}
                            showClearButton={false}
                            showApplyButton={false}
                            filter
                            filterElement={SearchFilterTemplate}
                            style={{ minWidth: "9rem" }}
                        ></Column>
                        <Column
                            field="clinState"
                            header="Clin State"
                            showFilterMatchModes={false}
                            showFilterMenuOptions={false}
                            showClearButton={false}
                            showApplyButton={false}
                            filter
                            filterElement={SearchFilterTemplate}
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="cinSite"
                            header="Cin Site"
                            showFilterMatchModes={false}
                            showFilterMenuOptions={false}
                            showClearButton={false}
                            showApplyButton={false}
                            filter
                            filterElement={SearchFilterTemplate}
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="credSubj"
                            header="Cred Subj"
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
                            style={{ minWidth: "18rem" }}
                        ></Column>
                        <Column
                            field="prelimInst"
                            header="Prelim Inst"
                            showFilterMatchModes={false}
                            showFilterMenuOptions={false}
                            showClearButton={false}
                            showApplyButton={false}
                            filter
                            filterElement={SearchFilterTemplate}
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="nonCguPrelim"
                            header="Non CGU Prelim"
                            showFilterMatchModes={false}
                            showFilterMenuOptions={false}
                            showClearButton={false}
                            showApplyButton={false}
                            filter
                            filterElement={SearchFilterTemplate}
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="setId"
                            header="Set ID"
                            sortable
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="termId"
                            header="Term ID"
                            sortable
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="firstTerm"
                            header="First Term"
                            showFilterMatchModes={false}
                            showFilterMenuOptions={false}
                            showClearButton={false}
                            showApplyButton={false}
                            filter
                            filterElement={SearchFilterTemplate}
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
                    : null}
            </div>


        </>
    );
}