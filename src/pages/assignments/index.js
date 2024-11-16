import StudentDetailsSidebar from "@/components/assignment";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout/layout";
import FilterComponent from "@/components/filtercomponent";
import React, { useEffect, useRef, useState } from "react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import StackedProgressChart from "@/components/allchart/stackedprogresschart";
import DoughnutChartAssignment from "@/components/allchart/doghnutchartassignment";
import DoughnutChart from "@/components/allchart/doughnutchart";
import HorizontalBarChart from "@/components/allchart/horizontalbarchart";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Sidebar } from "primereact/sidebar";
import OverviewPage from "./overview";
import ProfilePage from "./profile";
import ContactPage from "./contact";
import AdmissionPage from "./admission";
import ProgramPlan from "./programplan";
import QualificationsPage from "./qualifications";
import GroupsPage from "./groups";
import EnrollmentPage from "./enrollment";
import PlacementData from "./placement";
import EmploymentPage from "./employment";
import InductionPage from "./induction";
import NotesPage from "./notes";
import { Noto_Serif_Georgian } from "@next/font/google";
import { ScrollPanel } from "primereact/scrollpanel";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const AssignmentPage = () => {
  const [detailSidebar, setDetailSidebar] = useState(false);
  // Data table
  const [rowClick, setRowClick] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [filters, setFilters] = useState(null);
  const [schoolData, setSchoolData] = useState(null);
  const [endDate, setEndDate] = useState("");
  const [date, setDate] = useState("");
  const [others, setOthers] = useState(false);
  const [time, setTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [postObservation, setPostObservation] = useState(false);
  const [visibleRight, setVisibleRight] = useState(false);
  const [visiblePre, setVisiblePre] = useState(false);
  const [observationScrip, setObservationScrip] = useState(false);
  const [subjectMatter, setSubjectMatter] = useState(false);
  const [teachingPhase, setTeachingPhase] = useState(false);
  /* Popup scroll height start */
  const popupPaddingTopRef = useRef(null);
  const popupTitleRef = useRef(null);
  const [elementHeight, setElementHeight] = useState(0);
  useEffect(() => {
    const updateTapScrollHeight = () => {
      let timeoutId = setTimeout(() => {
        const popupPaddingTop = popupPaddingTopRef.current;
        let computedStyles, paddingTopValue, numericValue;
        if (popupPaddingTop) {
          computedStyles = window.getComputedStyle(popupPaddingTop);
          paddingTopValue = computedStyles.getPropertyValue("padding-top");
          numericValue = parseFloat(paddingTopValue);
          console.log("Padding-top value:", numericValue);
        }

        const popupTitle = popupTitleRef.current;
        let height;
        if (popupTitle) {
          height = popupTitle.offsetHeight;
          console.log(height + " height of ref");
          setElementHeight(height + numericValue);
        }
      }, 200);

      return () => {
        clearTimeout(timeoutId);
      };
    };

    // Initial update
    updateTapScrollHeight();

    // Update elementHeight on window resize
    const handleResize = () => {
      updateTapScrollHeight();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup: remove the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [
    visibleRight,
    visiblePre,
    postObservation,
    observationScrip,
    detailSidebar,
  ]);

  const elementStyle = {
    height: `calc(100vh - ${elementHeight}px)`,
  };
  /* Popup scroll height end */
  const handleSubjectmatter = (value) => {
    setSubjectMatter(value);
  };
  const handleTeachingPhase = (value) => {
    setTeachingPhase(value);
  };

  const products = [
    {
      Groupname: "Candidate Group",
      Groupdescription: "Lorem Ipsum is simply dummy ",
      Users: "2",
      Groupcreateddate: "07-05-2023",
      Createdby: "Paul",
      Lastmodifieddate: "07-05-2023",
      Action: "5",
    },
    {
      Groupname: "Candidate Group",
      Groupdescription: "Lorem Ipsum is simply dummy ",
      Users: "2",
      Groupcreateddate: "07-05-2023",
      Createdby: "Paul",
      Lastmodifieddate: "07-05-2023",
      Action: "5",
    },
    {
      Groupname: "Candidate Group",
      Groupdescription: "Lorem Ipsum is simply dummy ",
      Users: "2",
      Groupcreateddate: "07-05-2023",
      Createdby: "Paul",
      Lastmodifieddate: "07-05-2023",
      Action: "5",
    },
    {
      Groupname: "Candidate Group",
      Groupdescription: "Lorem Ipsum is simply dummy ",
      Users: "2",
      Groupcreateddate: "07-05-2023",
      Createdby: "Paul",
      Lastmodifieddate: "07-05-2023",
      Action: "5",
    },
    {
      Groupname: "Candidate Group",
      Groupdescription: "Lorem Ipsum is simply dummy ",
      Users: "2",
      Groupcreateddate: "07-05-2023",
      Createdby: "Paul",
      Lastmodifieddate: "07-05-2023",
      Action: "5",
    },
    {
      Groupname: "Candidate Group",
      Groupdescription: "Lorem Ipsum is simply dummy ",
      Users: "2",
      Groupcreateddate: "07-05-2023",
      Createdby: "Paul",
      Lastmodifieddate: "07-05-2023",
      Action: "5",
    },
    {
      Groupname: "Candidate Group",
      Groupdescription: "Lorem Ipsum is simply dummy ",
      Users: "2",
      Groupcreateddate: "07-05-2023",
      Createdby: "Paul",
      Lastmodifieddate: "07-05-2023",
      Action: "5",
    },
    {
      Groupname: "Candidate Group",
      Groupdescription: "Lorem Ipsum is simply dummy ",
      Users: "2",
      Groupcreateddate: "07-05-2023",
      Createdby: "Paul",
      Lastmodifieddate: "07-05-2023",
      Action: "5",
    },
    {
      Groupname: "Candidate Group",
      Groupdescription: "Lorem Ipsum is simply dummy ",
      Users: "2",
      Groupcreateddate: "07-05-2023",
      Createdby: "Paul",
      Lastmodifieddate: "07-05-2023",
      Action: "5",
    },
    {
      Groupname: "Candidate Group",
      Groupdescription: "Lorem Ipsum is simply dummy ",
      Users: "2",
      Groupcreateddate: "07-05-2023",
      Createdby: "Paul",
      Lastmodifieddate: "07-05-2023",
      Action: "5",
    },
    {
      Groupname: "Candidate Group",
      Groupdescription: "Lorem Ipsum is simply dummy ",
      Users: "2",
      Groupcreateddate: "07-05-2023",
      Createdby: "Paul",
      Lastmodifieddate: "07-05-2023",
      Action: "5",
    },
    {
      Groupname: "Candidate Group",
      Groupdescription: "Lorem Ipsum is simply dummy ",
      Users: "2",
      Groupcreateddate: "07-05-2023",
      Createdby: "Paul",
      Lastmodifieddate: "07-05-2023",
      Action: "5",
    },
  ];

  const SearchFilterTemplate = (options) => {
    return (
      <>
        <div className="SearchFilter xl:p-[0.729vw] p-3 xl:rounded-[0.521vw] rounded-lg bg-white boxshadow01 xl:space-y-[0.625vw] space-y-3">
          <span className="p-input-icon-left custm-filterserach">
            <i
              className="cgupod-td-filter-serach"
              style={{ color: "#9CA1AB", fontSize: "0.8rem" }}
            />
            <InputText
              placeholder="Search"
              className="xl:h-[2.292vw] h-[36px] placeholder:font-normal placeholder:text-[#9CA1AB]"
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
                  <label
                    htmlFor={category.key}
                    className="ml-2 font-medium text-[#374151] xl:text-[0.833vw] text-sm"
                  >
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
        <div className="flex items-center xl:gap-[0.833vw] gap-3 text-[#888888] xl:text-[0.938vw] text-sm">
          <Link href={""} onClick={() => setDetailSidebar(true)}>
            <i className="cgupod-eye"></i>
          </Link>
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
  const DoughnutchartData = [
    { value: 208, name: "Assignment \n Score \n\n 76%" },
    { value: 50, name: "" },
  ];
  const DoughnutchartDataTwo = [
    { value: 208, name: "Submission \n Rate \n\n 83%" },
    { value: 20, name: "" },
  ];
  const LessonPlanData = {
    label: [
      "Candidates Not \n Submitted > 2",
      "CandidatesNot \n  Submitted < 2",
      "Candidates \n Submitted All",
    ],
    value: [
      {
        value: 25,
        itemStyle: {
          color: "#8276B1",
        },
      },
      {
        value: 150,
        itemStyle: {
          color: "#8276B1",
        },
      },
      {
        value: 252,
        itemStyle: {
          color: "#8276B1",
        },
      },
    ],
  };
  const schoolInfo = [
    { name: "Sparks Elementary", code: "01" },
    { name: "Sparks ", code: "02" },
  ];

  return (
    <>
      <Layout pageTitle="Assignments">
        <FilterComponent bgcolor="#4FB155" />
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-[1.25vw] mb-[24px] xl:mb-[1.25vw] mt-[16px] xl:my-[0.833vw]">
          <div className="bg-white rounded-[16px] dark:bg-[#191A1E] border border-[#CFCCC3] dark:border-[#191A1E]">
            <div className="p-[16px] xl:p-[0.833vw] pt-[0px] xl:pt-[0vw] ">
              <div className="flex justify-between gap-1 pt-[20px] px-[8px] xl:pt-[1.042vw]">
                <div>
                  <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-medium dark:text-[#fff]">
                    Courses Snapshot (CY)
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 mt-1">
                <div className="col-span-6 p-[12px] xl:p-[0.421vw] text-start">
                  <div className="xl:text-[1.875vw] text-[36px] font-semibold text-[#424242] dark:text-[#AAA]">
                    52
                  </div>
                  <div className="xl:text-[0.729vw] text-[14px] font-medium text-[#888] dark:text-[#818181]">
                    Course Created
                  </div>
                </div>
                <div className="col-span-6  p-[8px] xl:p-[0.221vw] border-l-2 text-start">
                  <div className="px-[14px] xl:px-[0.729vw]">
                    <div className="xl:text-[1.875vw] text-[36px] font-semibold text-[#424242] dark:text-[#AAA]">
                      12
                    </div>
                    <div className="xl:text-[0.729vw] text-[14px] font-medium text-[#888] dark:text-[#818181]">
                      Avg. Candidate Per Course
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[50px] mb-[25px] xl:mb-[1.302vw] pr-[20px] xl:pr-[1.042vw]">
                <StackedProgressChart
                  data={{
                    value1: [50],
                    value2: [30],
                    value3: [10],
                  }}
                  color1={"#9E8D71"}
                  color2={"#FFCA6D"}
                  color3={"#8276B1"}
                  lableshow1={false}
                  lableshow2={false}
                  lableshow3={false}
                  borderRadius1={[2, 0, 0, 2]}
                  borderRadius2={[0, 0, 0, 0]}
                  borderRadius3={[0, 2, 2, 0]}
                  grid={{
                    left: "2",
                    right: "2",
                    top: "10",
                    bottom: "0",
                    height: "100%",
                    containLabel: true,
                  }}
                />
              </div>
              <div className="px-[20px] xl:px-[1.042vw] pb-[20px] xl:pb-[1.042vw] ">
                <div className="flex items-center justify-between sm:gap-[8px]">
                  <div className="flex items-center gap-[5px] lg:gap-[7px]">
                    <div className="w-[3px] bg-[#9E8D71] h-[37px] xl:h-[1.927vw] pl-1"></div>
                    <div>
                      <div className="text-[12px] xl:text-[0.625vw] text-[#424242] dark:text-[#AAAAAA] font-normal">
                        Pre-Teaching
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="text-[18px] xl:text-[0.938vw] text-[#262626] dark:text-[#FFFFFF] font-medium">
                          22
                        </div>
                        <div className="text-[14px] xl:text-[0.729vw] text-[#888888] dark:text-[#818181] font-normal">
                          53%
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-[5px] lg:gap-[7px]">
                    <div className="w-[3px] bg-[#FFCA6D] h-[37px] xl:h-[1.927vw] pl-1"></div>
                    <div>
                      <div className="text-[12px] xl:text-[0.625vw] text-[#424242] dark:text-[#AAA]  font-normal">
                        Teaching
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="text-[18px] xl:text-[0.938vw] text-[#262626] dark:text-[#FFFFFF] font-medium">
                          20
                        </div>
                        <div className="text-[14px] xl:text-[0.729vw] text-[#888888] dark:text-[#818181] font-normal">
                          42%
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-[5px] lg:gap-[7px]">
                    <div className="w-[3px] bg-[#8276B1] h-[37px] xl:h-[1.927vw] pl-1"></div>
                    <div>
                      <div className="text-[12px] xl:text-[0.625vw] text-[#424242] dark:text-[#AAAAAA]  font-normal">
                        Field Work
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="text-[18px] xl:text-[0.938vw] text-[#262626] dark:text-[#FFFFFF] font-medium">
                          10
                        </div>
                        <div className="text-[14px] xl:text-[0.729vw] text-[#888888] dark:text-[#818181] font-normal">
                          5%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[16px] dark:bg-[#191A1E] border border-[#CFCCC3] dark:border-[#191A1E]">
            <div className="p-[16px] xl:p-[0.833vw] pt-[0px] xl:pt-[0vw] ">
              <div className="flex justify-between gap-1 pt-[20px] px-[8px] xl:pt-[1.042vw]">
                <div>
                  <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-medium dark:text-[#fff]">
                    Assignments Snapshot (CY)
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 mt-1">
                <div className="col-span-6 p-[12px] xl:p-[0.421vw] text-start">
                  <div className="xl:text-[1.875vw] text-[36px] font-semibold text-[#424242] dark:text-[#AAA]">
                    52
                  </div>
                  <div className="xl:text-[0.729vw] text-[14px] font-medium text-[#888] dark:text-[#818181]">
                    Course Created
                  </div>
                </div>
                <div className="col-span-6  p-[8px] xl:p-[0.221vw] border-l-2 text-start">
                  <div className="px-[14px] xl:px-[0.729vw]">
                    <div className="xl:text-[1.875vw] text-[36px] font-semibold text-[#424242] dark:text-[#AAA]">
                      3
                    </div>
                    <div className="xl:text-[0.729vw] text-[14px] font-medium text-[#888] dark:text-[#818181]">
                      Avg. Candidate Per Course
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[50px] mb-[25px] xl:mb-[1.302vw] pr-[20px] xl:pr-[1.042vw]">
                <StackedProgressChart
                  data={{
                    value1: [50],
                    value2: [30],
                    value3: [10],
                  }}
                  color1={"#9E8D71"}
                  color2={"#FFCA6D"}
                  color3={"#8276B1"}
                  lableshow1={false}
                  lableshow2={false}
                  lableshow3={false}
                  borderRadius1={[2, 0, 0, 2]}
                  borderRadius2={[0, 0, 0, 0]}
                  borderRadius3={[0, 2, 2, 0]}
                  grid={{
                    left: "2",
                    right: "2",
                    top: "10",
                    bottom: "0",
                    height: "100%",
                    containLabel: true,
                  }}
                />
              </div>
              <div className="px-[20px] xl:px-[1.042vw] pb-[20px] xl:pb-[1.042vw] ">
                <div className="flex items-center justify-between sm:gap-[8px]">
                  <div className="flex items-center gap-[5px] lg:gap-[7px]">
                    <div className="w-[3px] bg-[#9E8D71] h-[37px] xl:h-[1.927vw] pl-1"></div>
                    <div>
                      <div className="text-[12px] xl:text-[0.625vw] text-[#424242] dark:text-[#AAAAAA] font-normal">
                        Pre-Teaching
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="text-[18px] xl:text-[0.938vw] text-[#262626] dark:text-[#FFFFFF] font-medium">
                          22
                        </div>
                        <div className="text-[14px] xl:text-[0.729vw] text-[#888888] dark:text-[#818181] font-normal">
                          48%
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-[5px] lg:gap-[7px]">
                    <div className="w-[3px] bg-[#FFCA6D] h-[37px] xl:h-[1.927vw] pl-1"></div>
                    <div>
                      <div className="text-[12px] xl:text-[0.625vw] text-[#424242] dark:text-[#AAAAAA]  font-normal">
                        Teaching
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="text-[18px] xl:text-[0.938vw] text-[#262626] dark:text-[#FFFFFF] font-medium">
                          20
                        </div>
                        <div className="text-[14px] xl:text-[0.729vw] text-[#888888] dark:text-[#818181] font-normal">
                          42%
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-[5px] lg:gap-[7px]">
                    <div className="w-[3px] bg-[#8276B1] h-[37px] xl:h-[1.927vw] pl-1"></div>
                    <div>
                      <div className="text-[12px] xl:text-[0.625vw] text-[#424242] dark:text-[#AAAAAA]  font-normal">
                        Field Work
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="text-[18px] xl:text-[0.938vw] text-[#262626] dark:text-[#FFFFFF] font-medium">
                          5
                        </div>
                        <div className="text-[14px] xl:text-[0.729vw] text-[#888888] dark:text-[#818181] font-normal">
                          10%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[16px] dark:bg-[#191A1E] border border-[#CFCCC3] dark:border-[#191A1E]">
            <div className="p-[16px] xl:p-[0.833vw] pt-[0px] xl:pt-[0vw] ">
              <div className="flex justify-between gap-1 pt-[20px] px-[8px] xl:pt-[1.042vw]">
                <div>
                  <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-medium dark:text-[#fff]">
                    Assignments Snapshot (CY)
                  </div>
                </div>
              </div>
              <div className="xl:h-[11.375vw] h-[180px] flex justify-between">
                <DoughnutChartAssignment
                  data={DoughnutchartData}
                  color={["#FFC866", "#F0E9EA"]}
                  radius={["15%", "40%"]}
                />
                <DoughnutChartAssignment
                  data={DoughnutchartDataTwo}
                  color={["#FFC866", "#F0E9EA"]}
                  radius={["15%", "40%"]}
                />
              </div>
            </div>
          </div>
          <div className=" bg-white rounded-[16px] dark:bg-[#191A1E] border border-[#CFCCC3] dark:border-[#191A1E]">
            <div className="p-[16px] xl:p-[0.833vw] pt-[0px] xl:pt-[0vw] ">
              <div className="flex justify-between gap-1 pt-[20px] px-[5px] xl:pt-[1.042vw] xl:px-[0.265vw]">
                <div>
                  <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-medium dark:text-[#fff]">
                    Submission Snapshot (CY)
                  </div>
                  <div className="text-[36px] xl:text-[1.875vw] text-[#262626] font-semibold dark:text-[#fff]">
                    577
                  </div>
                </div>
                <div>
                  <div className="flex justify-end items-center gap-2">
                    <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-medium dark:text-[#fff]">
                      -5.1%
                    </div>
                    <div className="text-center">
                      <span className="cgupod-circle-fill-r-down text-[#F82A2A] text-[22px]"></span>
                    </div>
                  </div>
                  <div className="text-[12px] xl:text-[0.625vw] text-[#888888] font-normal mt-1 dark:text-[#818181]">
                    vs last month
                  </div>
                </div>
              </div>
              <div className="xl:h-[9.375vw] h-[180px]">
                <HorizontalBarChart
                  legend={{
                    show: false,
                    icon: "roundRect",
                    bottom: "0%",
                    left: "0%",
                    itemWidth: 10,
                    itemHeight: 10,
                  }}
                  grid={{
                    top: "5%",
                    right: "2%",
                    bottom: "0%",
                    left: "2%",
                    containLabel: true,
                  }}
                  label={{
                    show: true,
                    color: "#424242",
                    fontWeight: "bold",
                    position: "right",
                  }}
                  minv={0}
                  maxv={300}
                  data={LessonPlanData}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[24px] xl:mt-[1.250vw]">
          <div className="bg-white dark:bg-[#13161B] border border-[#F2EEEE] dark:border-[#1F2A37] rounded-lg xl:rounded-[0.521vw]">
            <div className="flex flex-wrap items-center justify-between xl:px-[1.042vw] px-4 xl:pt-[1.042vw] pt-4 xl:pb-[0.990vw] pb-4">
              <div className="flex flex-wrap items-center xl:gap-[0.521vw] gap-2">
                <div className="text-[#262626] xl:text-[0.833vw] dark:text-[#fff] text-sm font-medium xl:leading-[1.042vw] leading-5">
                  Candidate Summary
                </div>
                <div className="text-[#888888] dark:bg-[#1C2026] dark:text-[#818181] xl:text-[0.625vw] text-xs font-medium xl:leading-[0.938vw] leading-5 bg-[#FCF5F6] xl:rounded-[0.938vw] rounded-2xl xl:px-[0.729vw] px-3 xl:py-[0.313vw] py-1">
                  Display 1 to 10 of 150
                </div>
              </div>
              <div className="flex flex-wrap items-center xl:gap-[1.250vw] gap-5">
              <div className="custom_search">
                  <span className="p-input-icon-left custm-search">
                    <i className="cgupod-td-searchbar xl:text-[0.833vw] text-xs text-[#888888]" />
                    <InputText
                      placeholder="Search"
                      className="xl:h-[2.083vw] h-[36px] w-full xl:w-[16.927vw] placeholder:text-[#888888] placeholder:font-normal placeholder:xl:text-[0.833vw]"
                      style={{
                        background: "#FFFFFF",
                        border: "1px solid #EAE0E0",
                      }}
                    />
                  </span>
                </div>
                <div className="flex flex-wrap items-center xl:gap-[0.521vw] gap-2">
                  <Link
                    href={"javascript:void(0)"}
                    className="text-[#888888] dark:text-[#AAAAAA] dark:bg-[#13161B] dark:border-[#374151] font-normal xl:text-[0.729vw] text-xs bg-white border border-[#EAE0E0] xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg flex items-center xl:gap-[0.521vw] gap-2"
                  >
                    <i className="cgupod-print"></i>
                    <span>Print</span>
                  </Link>
                  <Link
                    href={"javascript:void(0)"}
                    className="text-[#888888] dark:text-[#AAAAAA] dark:bg-[#13161B] dark:border-[#374151] font-normal xl:text-[0.729vw] text-xs bg-white border border-[#EAE0E0] xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg flex items-center xl:gap-[0.521vw] gap-2"
                  >
                    <i className="cgupod-download"></i>
                    <span>Download</span>
                  </Link>
                  <Link
                    href={"javascript:void(0)"}
                    className="text-[#888888] dark:text-[#AAAAAA] dark:bg-[#13161B] dark:border-[#374151] font-normal xl:text-[0.729vw] text-xs bg-white border border-[#EAE0E0] xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg flex items-center xl:gap-[0.521vw] gap-2"
                  >
                    <i className="cgupod-export-file"></i>
                    <span>Export Xls</span>
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
                selectionMode="multiple"
                style={{ maxWidth: "3rem" }}
              ></Column>
              <Column
                field="Groupname"
                header="Group Name"
                showFilterMatchModes={false}
                showFilterMenuOptions={false}
                showClearButton={false}
                showApplyButton={false}
                filter
                filterElement={SearchFilterTemplate}
                style={{ minWidth: "10rem" }}
              ></Column>
              <Column
                field="Groupdescription"
                header="Group Description"
                showFilterMatchModes={false}
                showFilterMenuOptions={false}
                showClearButton={false}
                showApplyButton={false}
                filter
                filterElement={SearchFilterTemplate}
                style={{ minWidth: "17rem" }}
              ></Column>
              <Column
                field="Users"
                header="Users"
                sortable
                style={{ minWidth: "7rem" }}
              ></Column>
              <Column
                field="Groupcreateddate"
                header="Group Created Date"
                showFilterMatchModes={false}
                showFilterMenuOptions={false}
                showClearButton={false}
                showApplyButton={false}
                filter
                filterElement={SearchFilterTemplate}
                style={{ minWidth: "15rem" }}
              ></Column>
              <Column
                field="Createdby"
                header="Created by"
                showFilterMatchModes={false}
                showFilterMenuOptions={false}
                showClearButton={false}
                showApplyButton={false}
                filter
                filterElement={SearchFilterTemplate}
                style={{ minWidth: "10rem" }}
              ></Column>
              <Column
                field="Lastmodifieddate"
                header="Last Modified Date"
                showFilterMatchModes={false}
                showFilterMenuOptions={false}
                showClearButton={false}
                showApplyButton={false}
                filter
                filterElement={SearchFilterTemplate}
                style={{ minWidth: "12rem" }}
              ></Column>
              <Column
                field="Action"
                header="Action"
                style={{ minWidth: "10rem" }}
                align="center"
                body={actionBodyTemplate}
                sortable
                frozen
                alignFrozen="right"
              ></Column>
            </DataTable>
          </div>
        </div>
        <div>
          {/* <StudentDetailsSidebar
            visible={detailSidebar}
            blockScroll={true}
            onHides={() => setDetailSidebar(false)}
          /> */}
          <Sidebar
            visible={detailSidebar}
            position="right"
            blockScroll={true}
            onHide={() => setDetailSidebar(false)}
            className="custmSidebar studentDetails"
          >
            {" "}
            <Tabs>
              <div className="grid grid-cols-12 h-full">
                <div className="col-span-12 lg:col-span-4">
                  <div
                    ref={popupPaddingTopRef}
                    className="bg-[#E0E0EF] dark:bg-[#0C0E12] h-full pt-[30px] xl:pt-[3.646vw] "
                  >
                    <div className="px-[50px] xl:px-[2.604vw]">
                      <div
                        ref={popupTitleRef}
                        className="border border-[#FFFFFF] dark:border-[#374151] p-[28px] xl:p-[1.458vw] rounded-[16px] xl:rounded-[0.833vw]"
                      >
                        {/* row */}
                        <div className="inline-block bg-[#F0F0F7] dark:bg-[#4E456D] dark:text-[#E0E0EF] rounded-[4px] xl:rounded-[0.208vw] px-[10px] xl:px-[0.521vw] py-[4px] xl:py-[0.208vw] text-[#5D5384] text-[14px] xl:text-[0.729vw] mb-[20px] xl:mb-[1.042vw]">
                          Candidate ID: CGU001
                        </div>
                        {/* row */}
                        <div>
                          <Image
                            src={"/assets/images/svg/Student-Ava-Brown.svg"}
                            alt="Student Detail"
                            width={64}
                            height={64}
                          />
                        </div>
                        <div className={myNotoSerifGeorgian.className}>
                          <div className="text-[#312C49] dark:text-[#F7F7FB] text-[40px] xl:text-[2.500vw] leading-[1.1]">
                            Ava Brown
                          </div>
                        </div>
                        {/* row */}
                        <div className="mt-[32px] xl:mt-[1.667vw]">
                          <div className="grid grid-cols-2 gap-[24px] xl:gap-[1.250vw]">
                            <div className="col h-[100%]">
                              <div className="bg-[#CECDE5] dark:bg-[#13161B] rounded-[8px] xl:rounded-[0.417vw] px-[16px] xl:px-[0.833vw] py-[10px] xl:py-[0.521vw]">
                                <div className="flex items-center gap-[8px] xl:gap-[0.417vw]">
                                  <div className="bg-[#fff] dark:bg-[#4E456D] text-white min-w-[42px] min-h-[42px] rounded-[4px] xl:rounded-[0.208vw] flex items-center justify-center">
                                    <i className="cgupod-user text-[24px] xl:text-[1.25] text-[#888888] dark:text-[#fff]"></i>
                                  </div>
                                  <div className="col">
                                    <div className="text-[#4E456D] text-[12px] xl:text-[0.625vw] w-full dark:text-[#F0F0F7]">
                                      Position
                                    </div>
                                    <div className="text-[#312C49] text-[16px] xl:text-[0.833vw] font-medium dark:text-[#F7F7FB]">
                                      Pre Teaching
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col h-[100%]">
                              <div className="bg-[#CECDE5] dark:bg-[#13161B] rounded-[8px] xl:rounded-[0.417vw] px-[16px] xl:px-[0.833vw] py-[10px] xl:py-[0.521vw]">
                                <div className="flex items-center gap-[8px] xl:gap-[0.417vw]">
                                  <div className="bg-[#fff] dark:bg-[#4E456D] text-white min-w-[42px] min-h-[42px] rounded-[4px] xl:rounded-[0.208vw] flex items-center justify-center">
                                    <i className="cgupod-tick-circle text-[24px] xl:text-[1.25vw] text-[#888888] dark:text-[#fff]"></i>
                                  </div>
                                  <div className="col">
                                    <div className="text-[#4E456D] text-[12px] xl:text-[0.625vw] dark:text-[#F0F0F7]">
                                      Grades
                                    </div>
                                    <div className="text-[#312C49] text-[16px] xl:text-[0.833vw] font-medium dark:text-[#F7F7FB]">
                                      9,10,11
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ScrollPanel className="popupTabs" style={elementStyle}>
                      <div className="pr-[20px] xl:pr-[3.646vw] pl-[40px] xl:pl-[5.74vw]">
                        <TabList>
                          <Tab>Overview</Tab>
                          <Tab>Profile</Tab>
                          <Tab>Contact</Tab>
                          <Tab>Admission</Tab>
                          <Tab>Program Plan</Tab>
                          <Tab>Qualification</Tab>
                          <Tab>Groups</Tab>
                          <Tab>Enrollment</Tab>
                          <Tab>Placement</Tab>
                          <Tab>Employment</Tab>
                          <Tab>Induction</Tab>
                          <Tab>Notes</Tab>
                        </TabList>
                      </div>
                    </ScrollPanel>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-8">
                  <ScrollPanel className="popup-right-scroll h-[100vh] bg-[#FCF5F6] dark:bg-[#1C2026]">
                    <div className="px-[60px] xl:px-[3.125vw] pt-[40px] xl:pt-[2.083vw] pb-[25px] xl:pb-[1.302vw]">
                      <div className="relative">
                        <TabPanel>
                          <OverviewPage />
                        </TabPanel>
                        <TabPanel>
                          <ProfilePage />
                        </TabPanel>
                        <TabPanel>
                          <ContactPage />
                        </TabPanel>
                        <TabPanel>
                          <AdmissionPage
                            handleSubjectmatter={handleSubjectmatter}
                          />
                        </TabPanel>
                        <TabPanel>
                          <ProgramPlan />
                        </TabPanel>
                        <TabPanel>
                          <QualificationsPage />
                        </TabPanel>
                        <TabPanel>
                          <GroupsPage />
                        </TabPanel>
                        <TabPanel>
                          <EnrollmentPage />
                        </TabPanel>
                        <TabPanel>
                          <PlacementData
                            handleTeachingPhase={handleTeachingPhase}
                          />
                        </TabPanel>
                        <TabPanel>
                          <EmploymentPage />
                        </TabPanel>
                        <TabPanel>
                          <InductionPage />
                        </TabPanel>
                        <TabPanel>
                          <NotesPage />
                        </TabPanel>
                      </div>
                    </div>
                  </ScrollPanel>
                </div>
              </div>
            </Tabs>
          </Sidebar>

          <Sidebar
            blockScroll={true}
            visible={subjectMatter}
            position="right"
            onHide={() => setSubjectMatter(false)}
            style={{ background: "#FCF5F6" }}
            className="custmSidebar width600"
          >
            <div className="xl:px-[1.667vw] px-7 xl:pt-[1.667vw] pt-7 ">
              <div className={myNotoSerifGeorgian.className}>
                <div
                  className="text-[#262626] xl:text-[1.25vw] text-xl font-normal xl:leading-[1.563vw] leading-7
             border-b border-[#EAE0E0] xl:pb-[1.25vw] pb-5"
                >
                  CSET/Subject Matter Rubric
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between h-[85%] xl:px-[1.667vw] px-7">
              {/**Form Start**/}
              <div>
                <div className="mt-[30px] xl:mt-[1.563vw]"></div>
                <div className="bg-[#fff] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw] grid gap-[10px] xl:gap-[0.521vw] rounded">
                  <div className="text-[18px] xl:text-[0.938vw] text-[#262626] font-medium">
                    Relevant Coursework
                  </div>
                  <div
                    className="border rounded px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw]
               flex justify-between text-[14px] xl:text-[0.729vw]"
                  >
                    <div className="font-normal">Applied for</div>
                    <div className="font-medium text-[#262626]">
                      CRED/M.A. - Preliminary
                    </div>
                  </div>
                  <div className="text-[18px] xl:text-[0.938vw] text-[#262626] font-medium mt-2">
                    GPA
                  </div>
                  <div
                    className="border rounded px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw]
               flex justify-between text-[14px] xl:text-[0.729vw]"
                  >
                    <div className="font-normal">Grade Point Average</div>
                    <div className="font-medium text-[#262626]">3.456</div>
                  </div>
                  <div className="text-[18px] xl:text-[0.938vw] text-[#262626] font-medium mt-2">
                    CSET Exams
                  </div>
                  <div
                    className="border rounded px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw] gap-[30px] xl:gap-[1.563vw] 
               grid text-[14px] xl:text-[0.729vw]"
                  >
                    <div className="flex justify-between">
                      <div className="font-normal">At Admission</div>
                      <div className="font-medium text-[#262626]">3.2</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="font-normal">At Interview</div>
                      <div className="font-medium text-[#262626]">4.3</div>
                    </div>
                  </div>
                  <div className="text-[18px] xl:text-[0.938vw] text-[#262626] font-medium mt-2">
                    Rigor
                  </div>
                  <div className="text-[14px] xl:text-[0.729vw] rounded border px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw] text-[#262626]">
                    No Induction Records
                  </div>
                </div>
                {/**Form End**/}
              </div>
              {/**Footer***/}
              <div className="flex flex-wrap items-center justify-end">
                <div>
                  <Link
                    href="javascript:void(0)"
                    className="text-[#AF1E27] xl:text-[0.938vw] text-base font-normal xl:leading-[1.25vw] leading-5 bg-white border border-[#AF1E27] rounded-lg xl:rounded-[0.521vw] flex items-center xl:gap-[0.521vw] gap-2 xl:py-[0.625vw] py-3 xl:px-[1.042vw] px-5"
                    onClick={() => setSubjectMatter(false)}
                  >
                    <i className="cgupod-close-circle"></i>
                    <span>Close</span>
                  </Link>
                </div>
              </div>
              {/**Footer***/}
            </div>
          </Sidebar>
          <Sidebar
            blockScroll={true}
            visible={teachingPhase}
            position="right"
            onHide={() => setTeachingPhase(false)}
            // style={{ background: "#FCF5F6" }}
            className="custmSidebar width600"
          >
            <div className="h-[100%]">
              <div className="xl:px-[1.667vw] px-7 xl:pt-[1.667vw] pt-7">
                <div className={myNotoSerifGeorgian.className}>
                  <div className="text-[#262626] dark:text-[#fff] xl:text-[1.25vw] text-xl font-normal xl:leading-[1.563vw] leading-7 xl:pb-[1.25vw] pb-5">
                    Filters
                  </div>
                </div>
              </div>
              <div className="grid xl:px-[1.667vw] px-7 h-[100%]">
                {/**Form Start**/}
                <div>
                  <div className="mt-[30px] xl:mt-[1.563vw]"></div>
                  <div className="gap-[16px] xl:gap-[0.833vw] grid">
                    <div className="flex flex-col gap-[4px] xl:gap-[0.208vw]">
                      <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626] dark:text-[#fff] dark:text-[#fff]">
                        School
                      </span>
                      <div className="custInput custDropdown">
                        <Dropdown
                          value={schoolData}
                          onChange={(e) => setSchoolData(e.value)}
                          options={schoolInfo}
                          optionLabel="name"
                          placeholder="Select"
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid #EAE0E0",
                            borderRadius: "8px",
                            fontSize: "0.729vw",
                          }}
                          className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[4px] xl:gap-[0.208vw] popupForm inputlabel custInput">
                      <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626] dark:text-[#fff] ">
                        Start Date
                      </span>
                      <Calendar
                        value={date}
                        onChange={(e) => setDate(e.value)}
                        showIcon
                        placeholder="DD/MM/YYYY"
                        className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #EAE0E0",
                          borderRadius: "8px",
                          fontSize: "0.729vw",
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-[4px] xl:gap-[0.208vw] popupForm inputlabel custInput">
                      <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626] dark:text-[#fff] ">
                        End Date
                      </span>
                      <Calendar
                        value={endDate}
                        onChange={(e) => setEndDate(e.value)}
                        showIcon
                        placeholder="DD/MM/YYYY"
                        className="xl:h-[2.083vw] h-[36px] xl:w-full placeholder:text-[12px] placeholder:text-[#888] placeholder:font-normal"
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #EAE0E0",
                          borderRadius: "8px",
                          fontSize: "0.729vw",
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-[4px] xl:gap-[0.208vw] popupForm inputlabel custInput">
                      <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626] dark:text-[#fff] ">
                        Start Date
                      </span>
                      <Calendar
                        id="calendar-timeonly"
                        value={time}
                        onChange={(e) => setTime(e.value)}
                        timeOnly
                      />
                    </div>
                    <div className="flex flex-col gap-[4px] xl:gap-[0.208vw] popupForm inputlabel custInput">
                      <span className="text-[14px] xl:text-[0.729vw] font-medium text-[#262626] dark:text-[#fff] ">
                        End Date
                      </span>
                      <Calendar
                        id="calendar-timeonly"
                        value={endTime}
                        onChange={(e) => setEndTime(e.value)}
                        timeOnly
                      />
                    </div>
                    <div className="gap-[8px] xl:gap-[0.417vw] flex items-center loginInput">
                      <Checkbox
                        onChange={(e) => setOthers(e.checked)}
                        checked={others}
                      ></Checkbox>
                      <div className="text-[#424242] dark:text-[#fff] text-[14px] xl:text-[0.729vw] font-normal">
                        Use Default
                      </div>
                    </div>
                  </div>

                  {/**Form End**/}
                </div>
                {/**Footer***/}
                <div className="flex items-center justify-between mt-[60px] xl:mt-[3.125vw]">
                  <Link
                    href="javascript:void(0)"
                    className="text-[#AF1E27] xl:text-[0.938vw] text-base font-normal xl:leading-[1.25vw] leading-5 bg-white border border-[#AF1E27] dark:bg-[#13161B] rounded-lg xl:rounded-[0.521vw] flex items-center xl:gap-[0.521vw] gap-2 xl:py-[0.625vw] py-3 xl:px-[1.042vw] px-5"
                    onClick={() => setTeachingPhase(false)}
                  >
                    <i className="cgupod-close-circle"></i>
                    <span>Cancel</span>
                  </Link>
                  <Link
                    href="javascript:void(0)"
                    onClick={() => setTeachingPhase(false)}
                    className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] dark:bg-[#13161B] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] transition ease-in-out delay-150"
                  >
                    <i className="mr-[8px] xl:mr-[0.417vw] cgupod-tick-circle text-[22px] xl:text-[1.146vw]"></i>
                    Apply
                  </Link>
                </div>
                {/**Footer***/}
              </div>
            </div>
          </Sidebar>
        </div>
      </Layout>
    </>
  );
};
export default AssignmentPage;
