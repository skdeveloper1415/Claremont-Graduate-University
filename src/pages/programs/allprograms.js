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
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function AllPrograms() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const [rowClick, setRowClick] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [filters, setFilters] = useState(null);
  // Data table 
  const products = [
    {
      id: "487441",
      programName: "Added Credential Art",
      inProgress: "12",
      onHold: "11",
      incomplete: '8',
      completed: '20',
      total: '51',
      Action: '5',
    },
    {
      id: "487442",
      programName: "Added Credential Art",
      inProgress: "12",
      onHold: "11",
      incomplete: '8',
      completed: '20',
      total: '51',
      Action: '5',
    },
    {
      id: "487443",
      programName: "Added Credential Art",
      inProgress: "12",
      onHold: "11",
      incomplete: '8',
      completed: '20',
      total: '51',
      Action: '5',
    },
    {
      id: "487444",
      programName: "Added Credential Art",
      inProgress: "12",
      onHold: "11",
      incomplete: '8',
      completed: '20',
      total: '51',
      Action: '5',
    },
    {
      id: "487445",
      programName: "Added Credential Art",
      inProgress: "12",
      onHold: "11",
      incomplete: '8',
      completed: '20',
      total: '51',
      Action: '5',
    },
    {
      id: "487446",
      programName: "Added Credential Art",
      inProgress: "12",
      onHold: "11",
      incomplete: '8',
      completed: '20',
      total: '51',
      Action: '5',
    },
    {
      id: "487447",
      programName: "Added Credential Art",
      inProgress: "12",
      onHold: "11",
      incomplete: '8',
      completed: '20',
      total: '51',
      Action: '5',
    },
    {
      id: "487448",
      programName: "Added Credential Art",
      inProgress: "12",
      onHold: "11",
      incomplete: '8',
      completed: '20',
      total: '51',
      Action: '5',
    },
    {
      id: "487449",
      programName: "Added Credential Art",
      inProgress: "12",
      onHold: "11",
      incomplete: '8',
      completed: '20',
      total: '51',
      Action: '5',
    },
    {
      id: "487450",
      programName: "Added Credential Art",
      inProgress: "12",
      onHold: "11",
      incomplete: '8',
      completed: '20',
      total: '51',
      Action: '5',
    },
    {
      id: "487451",
      programName: "Added Credential Art",
      inProgress: "12",
      onHold: "11",
      incomplete: '8',
      completed: '20',
      total: '51',
      Action: '5',
    },
    {
      id: "487452",
      programName: "Added Credential Art",
      inProgress: "12",
      onHold: "11",
      incomplete: '8',
      completed: '20',
      total: '51',
      Action: '5',
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

  const graphic = [
    {
      type: "image",
      style: {
        image: "/assets/images/svg/male_student.svg",
        width: 35,
        height: 35,
        shape: {
          // x: 0,
          // y: 0,
          // width: 20,
          // height: 20,
          // r: 2, // Border radius
          // stroke: "#ffff", // Border color
          // lineWidth: 1, // Border width
          // fill: "gba(1, 24, 73, 0.2)"
        },
      },
      center: 'center',
      left: "35%",
      right: 'center',
      top: "center",
    },
  ]

  const graphic1 = [
    {
      type: "image",
      style: {
        image: "/assets/images/svg/female_student.svg",
        width: 35,
        height: 35,
        shape: {
          // x: 0,
          // y: 0,
          // width: 20,
          // height: 20,
          // r: 2, // Border radius
          // stroke: "#ffff", // Border color
          // lineWidth: 1, // Border width
          // fill: "gba(1, 24, 73, 0.2)"
        },
      },
      center: 'center',
      left: "35%",
      right: 'center',
      top: "center",
    },
  ]

  const StatusSnapshotData = {
    label: [
      "Active",
      "On Hold",
      "Completed",
      "Withdrawn",
      "Dismissed",
    ],
    value: [
      {
        value: 15,
        itemStyle: {
          color: currentTheme === 'dark' ? '#B3B0D5' : "#8276B1",
        },
      },
      {
        value: 135,
        itemStyle: {
          color: currentTheme === 'dark' ? '#B3B0D5' : "#8276B1",
        },
      },
      {
        value: 25,
        itemStyle: {
          color: currentTheme === 'dark' ? '#B3B0D5' : "#8276B1",
        },
      },

      {
        value: 150,
        itemStyle: {
          color: currentTheme === 'dark' ? '#B3B0D5' : "#8276B1",
        },
      },
      {
        value: 252,
        itemStyle: {
          color: currentTheme === 'dark' ? '#B3B0D5' : "#8276B1",
        },
      },
    ],
  };

  const EthinicitySnapshotData = [
    {
      value: 220,
      itemStyle: {
        color: "#9E8D71",
      },
    },
    {
      value: 180,
      itemStyle: {
        color: "#18B557",
      },
    },
    {
      value: 50,
      itemStyle: {
        color: "#8276B1",
      },
    },
    {
      value: 150,
      itemStyle: {
        color: "#CFC9B8",
      },
    },
  ];

  const SubjectSnapshotData = [
    {
      value: 220,
      itemStyle: {
        color: "#968FC3",
      },
    },
    {
      value: 180,
      itemStyle: {
        color: "#968FC3",
      },
    },
  ];

  return (
    <>
      <div className='mb-[24px] xl:mb-[1.25vw] mt-[16px] xl:mt-[0.833vw]'>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[24px] xl:gap-[1.250vw]'>
          {/* Program Snapshot start*/}
          <div className='tilesShadow bg-[#FFFFFF] dark:bg-[#13161B] rounded-lg'>
            <div className='flex justify-between gap-1 pt-[20px] px-[20px] xl:pt-[1.042vw] xl:px-[1.042vw]'>
              <div>
                <div className='text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#FFFFFF] font-medium'>Program Snapshot</div>
                <div className='text-[36px] xl:text-[1.875vw] text-[#262626] dark:text-[#FFFFFF] font-semibold'>52</div>
              </div>
              <div>
                <div className='flex justify-end items-center gap-2'>
                  <div className='text-[16px] xl:text-[0.833vw] text-[#262626]dark:text-[#FFFFFF] font-medium'>4.2%</div>
                  <div className="text-center">
                      <span className="cgupod-circle-fill-r-up text-[#18B557] text-[20px] xl:text-[1.042vw]"></span>
                  </div>
                </div>
                <div className='text-[12px] xl:text-[0.625vw] text-[#888888] dark:text-[#818181] font-normal'>
                  vs last month
                </div>
              </div>
            </div>
            <div className="h-[50px] mb-[25px] xl:mb-[1.302vw] pr-[20px] xl:pr-[1.042vw]">
              <StackedProgressChart
                data={{
                  value1: [50],
                  value2: [20],
                  value3: [30],
                  value4: [50]
                }}
                color1={"#9E8D71"}
                color2={"#18B557"}
                color3={"#8276B1"}
                color4={"#CFC9B8"}
                lableshow1={false}
                lableshow2={false}
                lableshow3={false}
                lableshow4={false}
                borderRadius1={[2, 0, 0, 2]}
                borderRadius2={[0, 0, 0, 0]}
                borderRadius3={[0, 0, 0, 0]}
                borderRadius4={[0, 2, 2, 0]}
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
              <div className='flex items-center sm:gap-[8px]'>
                <div className='flex items-center gap-[5px] lg:gap-[7px]'>
                  <div className='w-[3px] bg-[#9E8D71] h-[37px] xl:h-[1.927vw] pl-1'></div>
                  <div>
                    <div className='flex items-center gap-1'>
                      <div className='text-[18px] xl:text-[0.938vw] text-[#262626] dark:text-[#FFFFFF] font-medium'>22</div>
                      <div className='text-[14px] xl:text-[0.729vw] text-[#888888] dark:text-[#818181] font-normal'>
                        42%
                      </div>
                    </div>
                    <div className='text-[12px] xl:text-[0.625vw] text-[#424242] dark:text-[#AAAAAA] font-normal'>Credentials</div>
                  </div>
                </div>
                <div className='flex items-center gap-[5px] lg:gap-[7px]'>
                  <div className='w-[3px] bg-[#18B557] h-[37px] xl:h-[1.927vw] pl-1'></div>
                  <div>
                    <div className='flex items-center gap-1'>
                      <div className='text-[18px] xl:text-[0.938vw] text-[#262626] dark:text-[#FFFFFF] font-medium'>20</div>
                      <div className='text-[14px] xl:text-[0.729vw] text-[#888888] dark:text-[#818181] font-normal'>
                        38%
                      </div>
                    </div>
                    <div className='text-[12px] xl:text-[0.625vw] text-[#424242] dark:text-[#AAAAAA]  font-normal'>Degree</div>
                  </div>
                </div>
                <div className='flex items-center gap-[5px] lg:gap-[7px]'>
                  <div className='w-[3px] bg-[#8276B1] h-[37px] xl:h-[1.927vw] pl-1'></div>
                  <div>
                    <div className='flex items-center gap-1'>
                      <div className='text-[18px] xl:text-[0.938vw] text-[#262626] dark:text-[#FFFFFF] font-medium'>5</div>
                      <div className='text-[14px] xl:text-[0.729vw] text-[#888888] dark:text-[#818181] font-normal'>
                        10%
                      </div>
                    </div>
                    <div className='text-[12px] xl:text-[0.625vw] text-[#424242] dark:text-[#AAAAAA]  font-normal'>Test</div>
                  </div>
                </div>
                <div className='flex items-center gap-[5px] lg:gap-[7px]'>
                  <div className='w-[3px] bg-[#8276B1] h-[37px] xl:h-[1.927vw] pl-1'></div>
                  <div>
                    <div className='flex items-center gap-1'>
                      <div className='text-[18px] xl:text-[0.938vw] text-[#262626] dark:text-[#FFFFFF] font-medium'>5</div>
                      <div className='text-[14px] xl:text-[0.729vw] text-[#888888] dark:text-[#818181] font-normal'>
                        10%
                      </div>
                    </div>
                    <div className='text-[12px] xl:text-[0.625vw] text-[#424242] dark:text-[#AAAAAA]  font-normal'>Other</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Program Snapshot end */}

          {/* Status Snapshot start*/}
          <div className='tilesShadow bg-[#FFFFFF] dark:bg-[#13161B] rounded-lg'>
            <div className='flex justify-between gap-1 pt-[20px] px-[20px] xl:pt-[1.042vw] xl:px-[1.042vw]'>
              <div>
                <div className='text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#FFFFFF] font-medium'>Status Snapshot</div>
                <div className='text-[36px] xl:text-[1.875vw] text-[#262626] dark:text-[#FFFFFF] font-semibold'>1,495</div>
              </div>
              <div>
                <div className='flex justify-end items-center gap-2'>
                  <div className='text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#FFFFFF] font-medium'>-5.1%</div>
                  <div className="text-center">
                      <span className="cgupod-circle-fill-r-down text-[#F82A2A] text-[20px] xl:text-[1.042vw]"></span>
                  </div>
                </div>
                <div className='text-[12px] xl:text-[0.625vw] text-[#888888] dark:text-[#818181] font-normal'>
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
                    color: currentTheme === 'dark' ? '#FFFFFF' : "#262626",
                    fontSize: 12,
                    fontWeight: 500,
                    position: "right",
                  }}
                  minv={0}
                  maxv={300}
                  data={StatusSnapshotData}
                />
              </div>
            </div>
          </div>
          {/* Status Snapshot end */}

          {/* Ethnicity Snapshot start*/}
          <div className='tilesShadow bg-[#FFFFFF] dark:bg-[#13161B] rounded-lg'>
            <div className='flex justify-between gap-1 pt-[20px] px-[20px] xl:pt-[1.042vw] xl:px-[1.042vw]'>
              <div>
                <div className='text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#FFFFFF] font-medium'>Ethnicity Snapshot</div>
                <div className='text-[36px] xl:text-[1.875vw] text-[#262626] dark:text-[#FFFFFF] font-semibold'>1,421</div>
              </div>
              <div>
                <div className='flex justify-end items-center gap-2'>
                  <div className='text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#FFFFFF] font-medium'>0%</div>
                  <div className="text-center">
                      <span className="cgupod-circle-fill-minus text-[#F82A2A] dark:text-[#F5D8DA] opacity-25 dark:opacity-100 text-[20px] xl:text-[1.042vw]"></span>
                    </div>
                </div>
                <div className='text-[12px] xl:text-[0.625vw] text-[#888888] dark:text-[#818181] font-normal'>
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
                    "White",
                    "Hispanic",
                    "Black",
                    "Asian",
                  ]}
                  name={["DFW Rate"]}
                  minvalue={0}
                  intervalvalue={100}
                  maxvalue={300}
                  data={EthinicitySnapshotData}
                />

              </div>
            </div>
          </div>
          {/* Ethnicity Snapshot end */}

          {/* Gender Snapshot start */}
          <div className='tilesShadow bg-[#FFFFFF] dark:bg-[#13161B] rounded-lg'>
            <div className='flex justify-between gap-1 pt-[20px] px-[20px] xl:pt-[1.042vw] xl:px-[1.042vw]'>
              <div>
                <div className='text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#FFFFFF] font-medium'>Gender Snapshot</div>
                <div className='text-[36px] xl:text-[1.875vw] text-[#262626] dark:text-[#FFFFFF] font-semibold'>1,685</div>
              </div>
              <div>
                <div className='flex justify-end items-center gap-2'>
                  <div className='text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#FFFFFF] font-medium'>4.2%</div>
                  <div className="text-center">
                      <span className="cgupod-circle-fill-r-up text-[#18B557] text-[20px] xl:text-[1.042vw]"></span>
                  </div>
                </div>
                <div className='text-[12px] xl:text-[0.625vw] text-[#888888] dark:text-[#818181] font-normal'>
                  vs last month
                </div>
              </div>
            </div>
            <div className='grid grid-cols-2 px-5 xl:pb-[0vw] pb-[5px]'>
              <div>
                <div className='w-full h-[125px] xl:h-[6.510vw]'>
                  <PieChartWithImage
                    chartname={"Services"}
                    data={[
                      { value: 65, name: 'Class Support (26)' },
                      { value: 35, name: 'Other (34)' },
                    ]}
                    radius={['60%', '90%']}
                    center={['50%', '50%']}
                    graphic={graphic}
                    color={currentTheme === 'dark' ?  ['#9E8D71', '#1F2631'] : ['#9E8D71', '#F0E9EA']}
                    legend={{
                      show: false,
                    }}
                  />
                </div>
                <div className='flex items-center justify-center gap-1'>
                  <div className='text-[12px] xl:text-[0.625vw] text-[#424242] dark:text-[#AAAAAA] font-normal'>
                    Male
                  </div>
                  <div className='text-[18px] xl:text-[0.938vw] text-[#262626] dark:text-[#FFFFFF] font-medium'>
                    1044
                  </div>
                  <div className='text-[14px] xl:text-[0.729vw] text-[#888888] dark:text-[#818181] font-normal'>
                    65%
                  </div>
                </div>
              </div>
              <div>
                <div className='w-full h-[125px] xl:h-[6.510vw]'>
                  <PieChartWithImage
                    chartname={"Services"}
                    data={[
                      { value: 35, name: 'Class Support (26)' },
                      { value: 65, name: 'Other (34)' },
                    ]}
                    radius={['60%', '90%']}
                    center={['50%', '50%']}
                    graphic={graphic1}
                    color={currentTheme === 'dark' ?  ['#968FC3', '#1F2631'] : ['#968FC3', '#F0E9EA']}
                    legend={{
                      show: false,
                    }}
                  />
                </div>
                <div className='flex items-center justify-center gap-1'>
                  <div className='text-[12px] xl:text-[0.625vw] text-[#424242] dark:text-[#AAAAAA] font-normal'>
                    Female
                  </div>
                  <div className='text-[18px] xl:text-[0.938vw] text-[#262626] dark:text-[#FFFFFF] font-medium'>
                    641
                  </div>
                  <div className='text-[14px] xl:text-[0.729vw] text-[#888888] dark:text-[#818181] font-normal'>
                    35%
                  </div>
                </div>
              </div>


            </div>
          </div>
          {/* Gender Snapshot end */}

          {/* Subject Snapshot start*/}
          <div className='tilesShadow bg-[#FFFFFF] dark:bg-[#13161B] rounded-lg'>
            <div className='flex justify-between gap-1 pt-[20px] px-[20px] xl:pt-[1.042vw] xl:px-[1.042vw]'>
              <div>
                <div className='text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#FFFFFF] font-medium'>Subject Snapshot</div>
                <div className='text-[36px] xl:text-[1.875vw] text-[#262626] dark:text-[#FFFFFF] font-semibold'>12</div>
              </div>
              <div>
                <div className='flex justify-end items-center gap-2'>
                  <div className='text-[16px] xl:text-[0.833vw] text-[#262626] dark:text-[#FFFFFF] font-medium'>-5.1%</div>
                  <div className="text-center">
                      <span className="cgupod-circle-fill-r-down text-[#F82A2A] text-[20px] xl:text-[1.042vw]"></span>
                  </div>
                </div>
                <div className='text-[12px] xl:text-[0.625vw] text-[#888888] dark:text-[#818181] font-normal'>
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
                    "English",
                    "Multiple Subject",
                  ]}
                  name={["Subject Snapshot"]}
                  minvalue={0}
                  intervalvalue={100}
                  maxvalue={300}
                  data={SubjectSnapshotData}
                />
              </div>
            </div>
          </div>
          {/* Subject Snapshot end */}
        </div>
      </div>
      <div className="bg-white dark:bg-[#13161B] border border-[#F2EEEE] dark:border-[#1F2A37] rounded-lg xl:rounded-[0.521vw]">
        <div className="flex items-center justify-between xl:px-[1.042vw] px-4 xl:pt-[1.042vw] pt-4 xl:pb-[0.990vw] pb-4">
          <div className="flex flex-wrap items-center xl:gap-[0.521vw] gap-2">
            <div className="text-[#262626] dark:text-[#FFFFFF] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-5">Overall Programs</div>
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
            field="id"
            header="ID"
            sortable
            style={{ minWidth: "10rem" }}
          ></Column>
          <Column
            field="programName"
            header="Program Name"
            showFilterMatchModes={false}
            showFilterMenuOptions={false}
            showClearButton={false}
            showApplyButton={false}
            filter
            filterElement={SearchFilterTemplate}
            style={{ minWidth: "15rem" }}
          ></Column>
          <Column
            field="inProgress"
            header="In Progress"
            showFilterMatchModes={false}
            showFilterMenuOptions={false}
            showClearButton={false}
            showApplyButton={false}
            filter
            filterElement={SearchFilterTemplate}
            style={{ minWidth: "12rem" }}
          ></Column>
          <Column
            field="onHold"
            header="On Hold"
            showFilterMatchModes={false}
            showFilterMenuOptions={false}
            showClearButton={false}
            showApplyButton={false}
            filter
            filterElement={SearchFilterTemplate}
            style={{ minWidth: "12rem" }}
          ></Column>
          <Column
            field="incomplete"
            header="Incomplete"
            showFilterMatchModes={false}
            showFilterMenuOptions={false}
            showClearButton={false}
            showApplyButton={false}
            filter
            filterElement={SearchFilterTemplate}
            style={{ minWidth: "12rem" }}
          ></Column>
          <Column
            field="completed"
            header="Completed"
            showFilterMatchModes={false}
            showFilterMenuOptions={false}
            showClearButton={false}
            showApplyButton={false}
            filter
            filterElement={SearchFilterTemplate}
            style={{ minWidth: "12rem" }}
          ></Column>
          <Column
            field="total"
            header="Total"
            showFilterMatchModes={false}
            showFilterMenuOptions={false}
            showClearButton={false}
            showApplyButton={false}
            filter
            filterElement={SearchFilterTemplate}
            style={{ minWidth: "12rem" }}
          ></Column>
          <Column
            field="action"
            header="Action"
            className='action-shadow-table'
            frozen
            alignFrozen="right"
            align='center'
            style={{ minWidth: "5em" }}
            body={actionBodyTemplate}
          ></Column>
        </DataTable>

      </div>
    </>
  );
}