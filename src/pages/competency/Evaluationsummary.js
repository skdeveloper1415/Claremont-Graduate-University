import { Noto_Serif_Georgian } from "@next/font/google";
import Link from "next/link";
import { Checkbox } from "primereact/checkbox";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { OverlayPanel } from "primereact/overlaypanel";
import { Sidebar } from "primereact/sidebar";
import { useEffect, useRef, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { products } from "../../components/staticdata";
import { ScrollPanel } from "primereact/scrollpanel";
import Domain1 from "../csjpod/csjCompetency/Domain1";
import ComepetencyDomain1 from "./midTermCompetencyEvaluation/ComepetencyDomain1";
import ClinickApplications from "./MidTermReports/ClinickApplications";
import ClinickCourse from "./MidTermReports/ClinickCourse";
import ComepetencyDomain2 from "./midTermCompetencyEvaluation/CompetencyDomain2";
import ComepetencyDomain3 from "./midTermCompetencyEvaluation/CompetencyDomain3";
import ComepetencyDomain4 from "./midTermCompetencyEvaluation/CompetencyDomain4";
import ComepetencyDomain5 from "./midTermCompetencyEvaluation/CompetencyDomain5";
import ComepetencyDomain6 from "./midTermCompetencyEvaluation/CompetencyDomain6";
import ComepetencyDomain7 from "./midTermCompetencyEvaluation/CompetencyDomain7";
import ComepetencyDomain8 from "./midTermCompetencyEvaluation/CompetencyDomain8";
import ComepetencyDomain9 from "./midTermCompetencyEvaluation/CompetencyDomain9";
import CsjCompetencyGoals from "./MidTermReports/CsjCompetencyGoals";
import CourseGradeProgress from "./MidTermReports/CourseGradeProgress";
import TrackToCompleteProgram from "./MidTermReports/TrackToCompleteProgram";
import CandidateInput from "./MidTermReports/CandidateInput";
import NextSteps from "./MidTermReports/NextSteps";
import Signature from "./MidTermReports/Signature";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const Evaluationsummary = () => {
  const [rowClick, setRowClick] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [visibleRight, setVisibleRight] = useState(false);
  const [visiblePre, setVisiblePre] = useState(false);
  const [filters, setFilters] = useState(null);
  const op = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const [midtermSecon, setMidtermSecon] = useState(false);
  const handleMidTermCompSecond = () => {
    setMidtermSecon(true);
  };

  const [midTermReports, setMidTermReports] = useState(false);

  const midtermReport = () => {
    setMidTermReports(true);
  };

  /* Popup scroll height start */
  const popupPaddingTopRef = useRef(null);
  const popupTitleRef = useRef(null);
  const popupPaddingTopRef1 = useRef(null);
  const popupTitleRef1 = useRef(null);
  const popupPaddingTopRef2 = useRef(null);
  const popupTitleRef2 = useRef(null);
  const [elementHeight, setElementHeight] = useState(0);
  const [elementHeight1, setElementHeight1] = useState(0);
  const [elementHeight2, setElementHeight2] = useState(0);
  useEffect(() => {
    const updateTapScrollHeight = () => {
      let timeoutId = setTimeout(() => {
        const popupPaddingTop = popupPaddingTopRef.current;
        const popupPaddingTop1 = popupPaddingTopRef1.current;
        const popupPaddingTop2 = popupPaddingTopRef2.current;

        let computedStyles, paddingTopValue, numericValue;
        let computedStyles1, paddingTopValue1, numericValue1;
        let computedStyles2, paddingTopValue2, numericValue2;

        if (popupPaddingTop) {
          computedStyles = window.getComputedStyle(popupPaddingTop);
          paddingTopValue = computedStyles.getPropertyValue("padding-top");
          numericValue = parseFloat(paddingTopValue);
          console.log("Padding-top value:", numericValue);
        }

        if (popupPaddingTop1) {
          computedStyles1 = window.getComputedStyle(popupPaddingTop1);
          paddingTopValue1 = computedStyles1.getPropertyValue("padding-top");
          numericValue1 = parseFloat(paddingTopValue1);
          console.log("Padding-top value:", numericValue1);
        }

        if (popupPaddingTop2) {
          computedStyles2 = window.getComputedStyle(popupPaddingTop2);
          paddingTopValue2 = computedStyles2.getPropertyValue("padding-top");
          numericValue2 = parseFloat(paddingTopValue2);
          console.log("Padding-top value:", numericValue2);
        }

        const popupTitle = popupTitleRef.current;
        const popupTitle1 = popupTitleRef1.current;
        const popupTitle2 = popupTitleRef2.current;

        let height;
        let height1;
        let height2;

        if (popupTitle) {
          height = popupTitle.offsetHeight;
          console.log(height + " height of ref");
          setElementHeight(height + numericValue);
        }
        if (popupTitle1) {
          height1 = popupTitle1.offsetHeight;
          console.log(height1 + " height of ref");
          setElementHeight1(height1 + numericValue1);
        }
        if (popupTitle2) {
          height2 = popupTitle2.offsetHeight;
          console.log(height2 + " height of ref");
          setElementHeight1(height2 + numericValue1);
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
  }, [visibleRight, midtermSecon, midTermReports, visiblePre]);

  const elementStyle = {
    height: `calc(100vh - ${elementHeight}px)`,
  };
  const elementStyle1 = {
    height: `calc(100vh - ${elementHeight1}px)`,
  };
  const elementStyle2 = {
    height: `calc(100vh - ${elementHeight2}px)`,
  };
  /* Popup scroll height end */
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
          <i
            className="cgupod-three-dots"
            style={{ fontSize: "0.3rem" }}
            onClick={(e) => op.current.toggle(e)}
          ></i>
        </div>
        <OverlayPanel ref={op} className="csjPodPanel">
          <div className="flex flex-col text-left text-[#424242] dark:text-[#B3B9C6]">
            <div
              className="flex py-[10px] xl:py-[0.521vw] px-[16px] xl:px-[0.833vw] gap-[0.521vw] border cursor-pointer"
              onClick={() => setVisibleRight(true)}
            >
              <i
                className="cgupod-document-text text-[20px] xl:text-[1.042vw]"
                style={{ fontSize: "1.042vw" }}
              ></i>
              <div className="text-[14px] xl:text-[0.729vw] font-normal">
                Midterm Evaluation
              </div>
            </div>
            <div
              className="flex py-[10px] xl:py-[0.521vw] px-[16px] xl:px-[0.833vw] gap-[0.521vw] border cursor-pointer"
              onClick={() => setVisiblePre(true)}
            >
              <i
                className="cgupod-archive-book text-[20px] xl:text-[1.042vw]"
                style={{ fontSize: "1.042vw" }}
              ></i>
              <div className="text-[14px] xl:text-[0.729vw] font-normal">
                Midterm Report
              </div>
            </div>
          </div>
        </OverlayPanel>
      </>
    );
  };

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
    console.log("rowData.image", rowData.image);
    return (
      <div>
        <img
          src={`./assets/images/svg/${rowData.image}.svg`}
          className="w-7 h-7 xl:w-[1.667vw] xl:h-[1.667vw]"
          width={48}
          height={48}
          alt="avatar"
        />
      </div>
    );
  };
  const PostObsStatusData = (rowData) => {
    if (rowData.PostObsStatus === "Inprogress") {
      return (
        <>
          <div className="flex items-center text-[12px] xl:text-[0.625vw] font-medium text-[#e3a008] bg-[#fffce1] border border-[#e3a008] py-[4px] xl:py-[0.208vw] px-[12px] xl:px-[0.625vw]  rounded-2xl xl:rounded-[0.833vw] gap-2">
            <div className="bg-[#e3a008] h-[6px] w-[6px] rounded-full mb-[1px]"></div>
            <div>{rowData.PostObsStatus}</div>
          </div>
        </>
      );
    } else if (rowData.PostObsStatus === "Submitted") {
      return (
        <>
          <div className="flex items-center text-[12px] xl:text-[0.625vw] font-medium text-[#49c57c]  bg-[#def7ec] border border-[#18b557] py-[4px] xl:py-[0.208vw] px-[12px] xl:px-[0.625vw] rounded-2xl xl:rounded-[0.833vw] gap-2">
            <div className="bg-[#18b557] h-[6px] w-[6px] rounded-full mb-[1px]"></div>
            <div>{rowData.PostObsStatus}</div>
          </div>
        </>
      );
    } else if (rowData.PostObsStatus === "Pending") {
      return (
        <>
          <div className="flex items-center text-[12px] xl:text-[0.625vw] font-medium text-[#f82a2a] bg-[#fde8e8] border border-[#f82a2a] py-[4px] xl:py-[0.208vw] px-[12px] xl:px-[0.625vw] rounded-2xl xl:rounded-[0.833vw] gap-2">
            <div className="bg-[#f82a2a] h-[6px] w-[6px] rounded-full mb-[1px]"></div>
            <div>{rowData.PostObsStatus}</div>
          </div>
        </>
      );
    } else {
      return <></>;
    }
  };
  const LplanStatusData = (rowData) => {
    if (rowData.LPlanStatus === "Inprogress") {
      return (
        <>
          <div className="flex items-center text-[12px] xl:text-[0.625vw] font-medium text-[#e3a008] bg-[#fffce1] border border-[#e3a008] py-[4px] xl:py-[0.208vw] px-[12px] xl:px-[0.625vw]  rounded-2xl xl:rounded-[0.833vw] gap-2">
            <div className="bg-[#e3a008] h-[6px] w-[6px] rounded-full mb-[1px]"></div>
            <div>{rowData.LPlanStatus}</div>
          </div>
        </>
      );
    } else if (rowData.LPlanStatus === "Submitted") {
      return (
        <>
          <div className="flex items-center text-[12px] xl:text-[0.625vw] font-medium text-[#49c57c]  bg-[#def7ec] border border-[#18b557] py-[4px] xl:py-[0.208vw] px-[12px] xl:px-[0.625vw] rounded-2xl xl:rounded-[0.833vw] gap-2">
            <div className="bg-[#18b557] h-[6px] w-[6px] rounded-full mb-[1px]"></div>
            <div>{rowData.LPlanStatus}</div>
          </div>
        </>
      );
    } else if (rowData.LPlanStatus === "Pending") {
      return (
        <>
          <div className="flex items-center text-[12px] xl:text-[0.625vw] font-medium text-[#f82a2a] bg-[#fde8e8] border border-[#f82a2a] py-[4px] xl:py-[0.208vw] px-[12px] xl:px-[0.625vw] rounded-2xl xl:rounded-[0.833vw] gap-2">
            <div className="bg-[#f82a2a] h-[6px] w-[6px] rounded-full mb-[1px]"></div>
            <div>{rowData.LPlanStatus}</div>
          </div>
        </>
      );
    } else {
      return <></>;
    }
  };
  const PreObsStatusData = (rowData) => {
    if (rowData.PreObsStatus === "Inprogress") {
      return (
        <>
          <div className="flex items-center text-[12px] xl:text-[0.625vw] font-medium text-[#e3a008] bg-[#fffce1] border border-[#e3a008] py-[4px] xl:py-[0.208vw] px-[12px] xl:px-[0.625vw]  rounded-2xl xl:rounded-[0.833vw] gap-2">
            <div className="bg-[#e3a008] h-[6px] w-[6px] rounded-full mb-[1px]"></div>
            <div>{rowData.PreObsStatus}</div>
          </div>
        </>
      );
    } else if (rowData.PreObsStatus === "Submitted") {
      return (
        <>
          <div className="flex items-center text-[12px] xl:text-[0.625vw] font-medium text-[#49c57c]  bg-[#def7ec] border border-[#18b557] py-[4px] xl:py-[0.208vw] px-[12px] xl:px-[0.625vw] rounded-2xl xl:rounded-[0.833vw] gap-2">
            <div className="bg-[#18b557] h-[6px] w-[6px] rounded-full mb-[1px]"></div>
            <div>{rowData.PreObsStatus}</div>
          </div>
        </>
      );
    } else if (rowData.PreObsStatus === "Pending") {
      return (
        <>
          <div className="flex items-center text-[12px] xl:text-[0.625vw] font-medium text-[#f82a2a] bg-[#fde8e8] border border-[#f82a2a] py-[4px] xl:py-[0.208vw] px-[12px] xl:px-[0.625vw] rounded-2xl xl:rounded-[0.833vw] gap-2">
            <div className="bg-[#f82a2a] h-[6px] w-[6px] rounded-full mb-[1px]"></div>
            <div>{rowData.PreObsStatus}</div>
          </div>
        </>
      );
    } else {
      return <></>;
    }
  };
  return (
    <div>
      <div>
        <div className="bg-white dark:bg-[#13161B] rounded-lg xl:rounded-[0.521vw]">
          <div className="flex items-center justify-between xl:px-[1.042vw] px-4 xl:pt-[1.042vw] pt-4 xl:pb-[0.990vw] pb-4 border-b border-b-[#F2EEEE] dark:border-[#1F2A37]">
            <div className="flex flex-wrap items-center xl:gap-[0.521vw] gap-2">
              <div className="text-[#262626] dark:text-[#FFFFFF] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-5">
                Overall Programs
              </div>
              <div className="text-[#888888] dark:text-[#818181] xl:text-[0.625vw] text-xs font-medium xl:leading-[0.938vw] leading-5 bg-[#FCF5F6] dark:bg-[#1C2026] xl:rounded-[0.938vw] rounded-2xl xl:px-[0.729vw] px-3 xl:py-[0.313vw] py-1">
                Display 1 to 10 of 150
              </div>
            </div>
            <div className="flex flex-wrap items-center xl:gap-[1.250vw] gap-5">
              <div>
                <span className="p-input-icon-left custm-search">
                  <i className="cgupod-td-searchbar xl:text-[0.833vw] text-xs text-[#888888]" />
                  <InputText
                    placeholder="Search"
                    className="p-inputtext p-component p-inputtext p-component xl:h-[2.083vw] h-[36px] xl:w-[16.927vw] placeholder:text-[#888888] placeholder:font-normal placeholder:xl:text-[0.833vw]"
                  />
                </span>
              </div>
              <div className="flex items-center xl:gap-[0.521vw] gap-2">
                <Link
                  href={""}
                  className="text-[#888888] dark:text-[#818181] font-normal xl:text-[0.729vw] text-xs bg-white dark:bg-[#13161B] border border-[#EAE0E0] dark:border-[#374151] xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg"
                >
                  <i className="cgupod-print mr-2"></i>
                  <span>Print</span>
                </Link>
                <Link
                  href={""}
                  className="text-[#888888] dark:text-[#818181] font-normal xl:text-[0.729vw] text-xs bg-white dark:bg-[#13161B] border border-[#EAE0E0] dark:border-[#374151] xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg"
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
              "Fname",
              "Semester",
              "Date",
              "DueDate",
              "Time",
              "School",
              "Subject",
              "Advisor",
              "Phase",
              "Observation",
              "Mood",
            ]}
            dataKey="id"
          >
            <Column
              selectionMode="multiple"
              style={{ minWidth: "1rem", maxWidth: "1rem" }}
            ></Column>
            <Column
              field="image"
              header=""
              body={TableImage}
              style={{ minWidth: "4rem" }}
            ></Column>
            <Column
              field="id"
              header="Candidate ID"
              sortable
              style={{ minWidth: "10rem" }}
            ></Column>
            <Column
              field="Fname"
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
              field="Semester"
              header="Semester"
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="Date"
              header="Midtem Date"
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="DueDate"
              header="Final Date"
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              style={{ minWidth: "12rem" }}
            ></Column>
            {/* <Column
              field="Time"
              header="Time"
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              style={{ minWidth: "12rem" }}
            ></Column> */}
            <Column
              field="School"
              header="School"
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              style={{ minWidth: "8rem" }}
            ></Column>
            <Column
              field="Subject"
              header="Subject"
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              style={{ minWidth: "8rem" }}
            ></Column>
            <Column
              field="Mentor"
              header="Mentor"
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="Phase"
              header="Mid Tirm Total Points"
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              style={{ minWidth: "12rem" }}
            ></Column>

            <Column
              field="Phase"
              header="Mid Tirm Avg Score"
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              style={{ minWidth: "12rem" }}
            ></Column>

            <Column
              field="Phase"
              header="Final Total Points"
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              style={{ minWidth: "12rem" }}
            ></Column>

            <Column
              field="Phase"
              header="Final Avg Score"
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              style={{ minWidth: "12rem" }}
            ></Column>

            <Column
              field="Phase"
              header="Final Band"
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
              header="Actions"
              className="action-shadow-table"
              frozen
              alignFrozen="right"
              align="center"
              style={{ minWidth: "5rem" }}
              body={actionBodyTemplate}
            ></Column>
          </DataTable>
          {/* View Lesson Plan Sidebar */}
          <Sidebar
            visible={visibleRight}
            position="right"
            blockScroll={true}
            onHide={() => setVisibleRight(false)}
            className="custmSidebar sidebarwidth"
          >
            <div className="grid grid-cols-12 h-full">
              <div className="col-span-12 lg:col-span-4">
                <div
                  ref={popupPaddingTopRef}
                  className="bg-[#E0E0EF] dark:bg-[#13161B] h-full pt-[30px] xl:pt-[3.646vw] "
                >
                  <div className="px-[20px] xl:px-[30px]">
                    <div
                      ref={popupTitleRef}
                      className="border border-[#FFFFFF] dark:border-[#0f1013] dark:bg-[#0f1013] p-[28px] xl:p-[1.458vw] rounded-[16px] xl:rounded-[0.833vw]"
                    >
                      {/* row */}
                      <div className={myNotoSerifGeorgian.className}>
                        <div className="inline-block bg-[#F0F0F7] dark:bg-[#13161B] rounded-[4px] xl:rounded-[0.208vw] px-[10px] xl:px-[0.521vw] py-[4px] xl:py-[0.208vw] text-[#5D5384] dark:text-[#818181] text-[14px] xl:text-[0.729vw] mb-[20px] xl:mb-[1.042vw]">
                          User ID: 487441
                        </div>
                        {/* row */}
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-[#f2f2f4] mb-2">
                          <img
                            src="/assets/images/Avatar.png"
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                        <div className="text-[#312C49] dark:text-[#ffffff] text-[40px] xl:text-[2.500vw] leading-[1.1]">
                          Nathan Roberts
                        </div>
                      </div>
                      {/* row */}
                      <div className="mt-[32px] xl:mt-[1.667vw]">
                        <div className="grid grid-cols-2 gap-[24px] xl:gap-[1.250vw]">
                          <div className="col h-[100%]">
                            <div className="bg-[#CECDE5] dark:bg-[#13161B] rounded-[8px] xl:rounded-[0.417vw] px-[16px] xl:px-[0.833vw] py-[10px] xl:py-[0.521vw]">
                              <div className="flex items-center gap-[8px] xl:gap-[0.417vw]">
                                <div className="bg-[#fff] dark:bg-[#0f1013] text-white min-w-[42px] min-h-[42px] rounded-[4px] xl:rounded-[0.208vw] flex items-center justify-center">
                                  <i className="cgupod-user text-[24px] xl:text-[1.25] text-[#888888]"></i>
                                </div>
                                <div className="col">
                                  <div className="text-[#4E456D] dark:text-[#888] text-[12px] xl:text-[0.625vw] w-full">
                                    Semester
                                  </div>
                                  <div className="text-[#312C49] dark:text-[#fff] text-[16px] xl:text-[0.833vw] font-medium">
                                    Spring 2017
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col h-[100%]">
                            <div className="bg-[#CECDE5] dark:bg-[#13161B] rounded-[8px] xl:rounded-[0.417vw] px-[16px] xl:px-[0.833vw] py-[10px] xl:py-[0.521vw]">
                              <div className="flex items-center gap-[8px] xl:gap-[0.417vw]">
                                <div className="bg-[#fff] dark:bg-[#0f1013] text-white min-w-[42px] min-h-[42px] rounded-[4px] xl:rounded-[0.208vw] flex items-center justify-center">
                                  <i className="cgupod-tick-circle text-[24px] xl:text-[1.25vw] text-[#888888]"></i>
                                </div>
                                <div className="col">
                                  <div className="text-[#4E456D] dark:text-[#888] text-[12px] xl:text-[0.625vw]">
                                    School
                                  </div>
                                  <div className="text-[#312C49] dark:text-[#fff] text-[16px] xl:text-[0.833vw] font-medium">
                                    Crooks Elem
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
                    <div className="pr-[20px] xl:pr-[30px] pl-[30px] xl:pl-[30px] pt-[60px]">
                      <div className="flex flex-col gap-4">
                        <h4 className="text-[#000] dark:text-[#fff] text-[24px] xl:text-[24px] leading-[1.1]">
                          Candidate Details
                        </h4>
                        <div className="pb-4 flex gap-2 items-center border-b border-solid border-[#F2EEEE] dark:border-[#1F2A37]">
                          <div>
                            <span className="w-[40px] h-[40px] flex justify-center items-center bg-[#f0f0f7] rounded-md dark:bg-[#0f1013]">
                              <i className="cgupod-calender text-xl"></i>
                            </span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-xs text-[#424242] dark:text-[#818181]">
                              Midterm Date
                            </span>
                            <h5 className="text-base font-medium text-[#262626] dark:text-[#fff]">
                              27-02-2022
                            </h5>
                          </div>
                        </div>
                        <div className="pb-4 flex gap-2 items-center border-b border-solid border-[#F2EEEE] dark:border-[#1F2A37]">
                          <div>
                            <span className="w-[40px] h-[40px] flex justify-center items-center bg-[#f0f0f7] rounded-md dark:bg-[#0f1013]">
                              <i className="cgupod-calender text-xl"></i>
                            </span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-xs text-[#424242] dark:text-[#818181]">
                              Midterm Date
                            </span>
                            <h5 className="text-base font-medium text-[#262626] dark:text-[#fff]">
                              27-02-2022
                            </h5>
                          </div>
                        </div>

                        <div className="pb-4 flex gap-2 items-center border-b border-solid border-[#F2EEEE] dark:border-[#1F2A37]">
                          <div>
                            <span className="w-[40px] h-[40px] flex justify-center items-center bg-[#f0f0f7] rounded-md dark:bg-[#0f1013]">
                              <i className="cgupod-calender text-xl"></i>
                            </span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-xs text-[#424242] dark:text-[#818181]">
                              Midterm Date
                            </span>
                            <h5 className="text-base font-medium text-[#262626] dark:text-[#fff]">
                              27-02-2022
                            </h5>
                          </div>
                        </div>

                        <div className="pb-4 flex gap-2 items-center border-b border-solid border-[#F2EEEE] dark:border-[#1F2A37]">
                          <div>
                            <span className="w-[40px] h-[40px] flex justify-center items-center bg-[#f0f0f7] rounded-md dark:bg-[#0f1013]">
                              <i className="cgupod-calender text-xl"></i>
                            </span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-xs text-[#424242] dark:text-[#818181]">
                              Midterm Date
                            </span>
                            <h5 className="text-base font-medium text-[#262626] dark:text-[#fff]">
                              27-02-2022
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollPanel>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-8">
                <ScrollPanel className="popup-right-scroll h-[100vh]">
                  <div className="bg-[#FCF5F6] dark:bg-[#0f1013] px-[20px] py-[20px] sm:px-[40px] sm:py-[40px] 2xl:px-[60px] 2xl:py-[70px] h-full">
                    <div className="relative">
                      <div className="bg-[#FCF5F6] dark:bg-[#0f1013] h-full pb-[36px] xl:pb-[1.875vw]">
                        <div className="">
                          <h4 className="text-[32px] text-[#262626] dark:text-[#fff]">
                            Overview
                          </h4>
                          <div className="mt-6 grid grid-cols-12 gap-6">
                            <div className="col-span-12 lg:col-span-4">
                              <div className="bg-white dark:bg-[#13161B] p-3 2xl:p-5 flex gap-3 border border-solid border-[#EAE0E0] dark:border-[#1F2A37] shadow-md rounded-lg info-card">
                                <i className="cgupod-award text-5xl"></i>
                                <div className="flex flex-col gap-2">
                                  <span className="text-sm 2xl:text-base text-[#888]">
                                    Midterm Total Points
                                  </span>
                                  <h4 className="flex gap-2 items-end">
                                    <span className="text-xl text-[#262626] dark:text-[#fff] font-semibold">
                                      20
                                    </span>
                                    <div className="text-sm text-[#18B557] font-bold flex gap-1">
                                      <img
                                        src="/assets/images/uparrow.svg"
                                        className="w-[18px] h-[12px]"
                                      />
                                      10%
                                    </div>
                                  </h4>
                                </div>
                              </div>
                            </div>
                            <div className="col-span-12 lg:col-span-4">
                              <div className="bg-white dark:bg-[#13161B] p-3 2xl:p-5 flex gap-3 border border-solid border-[#EAE0E0] dark:border-[#1F2A37] shadow-md rounded-lg info-card">
                                <i className="cgupod-teacher text-5xl"></i>
                                <div className="flex flex-col gap-2">
                                  <span className="text-sm 2xl:text-base text-[#888]">
                                    Midterm Total Points
                                  </span>
                                  <h4 className="flex gap-2 items-end">
                                    <span className="text-xl text-[#262626] dark:text-[#fff] font-semibold">
                                      20
                                    </span>
                                    <div className="text-sm text-[#18B557] font-bold flex gap-1">
                                      <img
                                        src="/assets/images/uparrow.svg"
                                        className="w-[18px] h-[12px]"
                                      />
                                      10%
                                    </div>
                                  </h4>
                                </div>
                              </div>
                            </div>
                            <div className="col-span-12 lg:col-span-4">
                              <div className="bg-white dark:bg-[#13161B] p-3 2xl:p-5 flex gap-3 border border-solid border-[#EAE0E0] dark:border-[#1F2A37] shadow-md rounded-lg info-card">
                                <div>
                                  <img
                                    src="/assets/images/robertfox.png"
                                    className="icon"
                                  />
                                </div>
                                <div className="flex flex-col gap-2">
                                  <span className="text-sm 2xl:text-base text-[#888]">
                                    Mentor
                                  </span>
                                  <h4 className="flex gap-2 items-end">
                                    <span className="text-xl text-[#262626] dark:text-[#fff] font-semibold">
                                      Ava Alan
                                    </span>
                                    {/* <div className="text-sm text-[#18B557] font-bold flex gap-1">
                              <img
                                src="/assets/images/uparrow.svg"
                                className="w-[18px] h-[12px]"
                              />
                              10%
                            </div> */}
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-12">
                          <h4 className="text-xl text-[#262626] dark:text-[#fff]">Summary</h4>
                          <div className="mt-6 grid grid-cols-12 gap-6">
                            <div className="bg-white dark:bg-[#13161B] p-4 flex gap-7 justify-center items-center border border-solid border-[#EAE0E0] dark:border-[#1F2A37] shadow-md rounded-lg h-52 col-span-6 lg:col-span-4">
                              <div className="flex flex-col items-center gap-2">
                                <h4 className="text-sm 2xl:text-lg text-[#262626] dark:text-[#fff] font-medium text-center">
                                  <span className="block text-sm text-[#888]">
                                    Competency Evaluation
                                  </span>
                                  Midterm Competency
                                </h4>
                                <button
                                  onClick={handleMidTermCompSecond}
                                  className="border border-solid border-[#AF1E27] py-2 px-4 flex items-center justify-center gap-2 text-[#AF1E27] text-sm rounded-md"
                                >
                                  Open
                                  <img src="/assets/images/export.svg" />
                                </button>
                              </div>
                            </div>
                            <div className="bg-white dark:bg-[#13161B] p-4 flex gap-7 justify-center items-center border border-solid border-[#EAE0E0] dark:border-[#1F2A37] shadow-md rounded-lg h-52 col-span-6 lg:col-span-4">
                              <div className="flex flex-col items-center gap-2">
                                <h4 className="text-sm 2xl:text-lg text-[#262626] dark:text-[#fff] font-medium text-center">
                                  <span className="block text-sm text-[#888]">
                                    Competency Reports
                                  </span>
                                  Midterm Competency Report
                                </h4>
                                <button
                                  onClick={midtermReport}
                                  className="border border-solid border-[#AF1E27] py-2 px-4 flex items-center justify-center gap-2 text-[#AF1E27] text-sm rounded-md"
                                >
                                  Open
                                  <img src="/assets/images/export.svg" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollPanel>
              </div>
            </div>
          </Sidebar>

          {/* open on click open button compotency evaluation */}
          <Sidebar
            visible={midtermSecon}
            position="right"
            blockScroll={true}
            onHide={() => setMidtermSecon(false)}
            className="custmSidebar studentDetails"
          >
            <Tabs>
              <div className="grid grid-cols-12 h-full">
                <div className="col-span-12 lg:col-span-4">
                  <div
                    ref={popupPaddingTopRef1}
                    className="bg-[#E0E0EF] h-full pt-[10px] xl:pt-[1.646vw] "
                  >
                    <div
                      ref={popupTitleRef1}
                      className="px-[20px] xl:px-[3.646vw]"
                    >
                      <div className="bg-white py-2 px-3 gap-2 inline-flex mb-4 text-sm text-[#4B586E] rounded">
                        <img src="/assets/images/arrow-left.svg" />
                        Go Back
                      </div>
                      <div className="border border-[#FFFFFF] p-7 rounded-[16px] xl:rounded-[0.833vw]">
                        {/* row */}
                        <div className="inline-block bg-[#F0F0F7] rounded-[4px] xl:rounded-[0.208vw] px-[10px] xl:px-[0.521vw] py-[4px] xl:py-[0.208vw] text-[#5D5384] text-[14px] xl:text-[0.729vw] mb-[20px] xl:mb-[1.042vw]">
                          User ID: 487441
                        </div>
                        {/* row */}

                        <div className="text-[#312C49] text-[45px] leading-[1.1]">
                          Midterm competency
                        </div>
                        {/* row */}
                        <div className="mt-[32px] xl:mt-[1.667vw]">
                          <div className="bg-[#F0F0F7] rounded-[8px] px-4 py-[10px]">
                            <div className="flex items-center gap-[8px]">
                              <div className="bg-[#968FC3] text-white min-w-[42px] min-h-[42px] rounded-[4px] flex items-center justify-center">
                                <img src="/assets/images/tick-square.svg" />
                              </div>
                              <div className="text-[#312C49] text-xl font-medium w-full">
                                Completed
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ScrollPanel className="popupTabs" style={elementStyle1}>
                      <div className="pr-[20px] xl:pr-[3.646vw] pl-[40px] xl:pl-[5.74vw]">
                        <TabList>
                          <Tab>Domain 1</Tab>
                          <Tab>Domain 2</Tab>
                          <Tab>Domain 3</Tab>
                          <Tab>Domain 4</Tab>
                          <Tab>Domain 5</Tab>
                          <Tab>Domain 6</Tab>
                          <Tab>Domain 7</Tab>
                          <Tab>Domain 8</Tab>
                          <Tab>Domain 9</Tab>
                        </TabList>
                      </div>
                    </ScrollPanel>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-8">
                  <ScrollPanel className="popup-right-scroll h-[100vh] bg-[#FCF5F6] ">
                    <div className="px-[60px] xl:px-[3.125vw] pt-[70px] xl:pt-[3.646vw] pb-[36px] xl:pb-[1.875vw]">
                      <div className="relative">
                        <TabPanel>
                          <ComepetencyDomain1 />
                        </TabPanel>
                        <TabPanel>
                          <ComepetencyDomain2 />
                        </TabPanel>
                        <TabPanel>
                          <ComepetencyDomain3 />
                        </TabPanel>
                        <TabPanel>
                          <ComepetencyDomain4 />
                        </TabPanel>
                        <TabPanel>
                          <ComepetencyDomain5 />
                        </TabPanel>
                        <TabPanel>
                          <ComepetencyDomain6 />
                        </TabPanel>
                        <TabPanel>
                          <ComepetencyDomain7 />
                        </TabPanel>
                        <TabPanel>
                          <ComepetencyDomain8 />
                        </TabPanel>
                        <TabPanel>
                          <ComepetencyDomain9 />
                        </TabPanel>
                      </div>
                    </div>
                  </ScrollPanel>
                </div>
              </div>
            </Tabs>
          </Sidebar>

          {/* open on click competency evaluation reports */}

          <Sidebar
            visible={midTermReports}
            position="right"
            blockScroll={true}
            onHide={() => setMidTermReports(false)}
            className="custmSidebar contempt-sidebar !w-[95%]"
          >
            <Tabs>
              <div className="grid grid-cols-12 h-full">
                <div className="col-span-12 lg:col-span-4">
                  <div
                    ref={popupPaddingTopRef2}
                    className="bg-[#E0E0EF] h-full pt-[30px] px-8 dark:bg-[#0C0E12]"
                  >
                    <div
                      ref={popupTitleRef2}
                      className="border border-[#FFFFFF] p-[28px] xl:p-[1.458vw] rounded-[16px] xl:rounded-[0.833vw] dark:border-[#374151]"
                    >
                      {/* row */}
                      <div className="inline-block bg-[#F0F0F7] rounded-[4px] xl:rounded-[0.208vw] px-[10px] xl:px-[0.521vw] py-[4px] xl:py-[0.208vw] text-[#5D5384] text-[14px] xl:text-[0.729vw] mb-[20px] xl:mb-[1.042vw] dark:bg-[#4E456D] dark:text-[#E0E0EF]">
                        User ID: 487441
                      </div>
                      {/* row */}

                      <div className="text-[#312C49] text-[48px] leading-[1.1] dark:text-[#fff]">
                        Mid Term competency Report
                      </div>
                      {/* row */}
                      <div className="mt-[32px] xl:mt-[1.667vw]">
                        <div className="bg-[#F0F0F7] rounded-[8px] px-4 py-[10px] dark:bg-[#13161B]">
                          <div className="flex items-center gap-[8px]">
                            <div className="bg-[#968FC3] text-white min-w-[42px] min-h-[42px] rounded-[4px] flex items-center justify-center">
                              <img src="/assets/images/tick-square.svg" />
                            </div>
                            <div className="text-[#312C49] text-xl font-medium w-full dark:text-[#fff]">
                              Completed
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ScrollPanel className="popupTabs" style={elementStyle2}>
                      <div className="pr-[20px] xl:pr-[3.646vw] pl-[40px] xl:pl-[5.74vw]">
                        <TabList>
                          <Tab>Clinical Application of CSJ Competencies</Tab>
                          <Tab>Clinical Course Assignments</Tab>
                          <Tab>CSJ Competency Goals</Tab>
                          <Tab>Course Grade Progress</Tab>
                          <Tab>On Track to Complete Program?</Tab>
                          <Tab>Candidate Input</Tab>
                          <Tab>Next Steps for the Semester</Tab>
                          <Tab>Signatures</Tab>
                        </TabList>
                      </div>
                    </ScrollPanel>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-8">
                  <ScrollPanel className="popup-right-scroll h-[100vh] bg-[#FCF5F6] dark:bg-[#1C2026]">
                    <div className="px-[60px] xl:px-[3.125vw] pt-[70px] xl:pt-[3.646vw] pb-[36px] xl:pb-[1.875vw]">
                      <div className="relative ">
                        <TabPanel>
                          <ClinickApplications />
                        </TabPanel>

                        <TabPanel>
                          <ClinickCourse />
                        </TabPanel>
                        <TabPanel>
                          <CsjCompetencyGoals />
                        </TabPanel>
                        <TabPanel>
                          <CourseGradeProgress />
                        </TabPanel>
                        <TabPanel>
                          <TrackToCompleteProgram />
                        </TabPanel>
                        <TabPanel>
                          <CandidateInput />
                        </TabPanel>
                        <TabPanel>
                          <NextSteps />
                        </TabPanel>
                        <TabPanel>
                          <Signature />
                        </TabPanel>
                      </div>
                    </div>
                  </ScrollPanel>
                </div>
              </div>
            </Tabs>
          </Sidebar>
        </div>
      </div>
    </div>
  );
};

export default Evaluationsummary;
