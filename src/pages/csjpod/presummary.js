import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { Tag } from "primereact/tag";
import { OverlayPanel } from "primereact/overlaypanel";
import { products } from "../../components/staticdata";
import { Sidebar } from "primereact/sidebar";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Noto_Serif_Georgian } from "@next/font/google";
import PostObservationDebreif from "./viewpostobservation/postobservationdebreif";
import GeneralReflection from "./viewpostobservation/generalreflection";
import ReflectionofCompetencyFocusAreas from "./viewpostobservation/reflectionofcompetencyfocusareas";
import FocusArea1 from "./viewpostobservation/focusarea1";
import FocusArea2 from "./viewpostobservation/focusarea2";
import FocusArea3 from "./viewpostobservation/focusarea3";
import AdditionalInformation from "./viewpostobservation/additionalinformation";
import LessonContext from "./observationscript/lessoncontext";
import CompetencyEvidenceCollection from "./observationscript/competencyevidencecollection";
import AttachmentsScript from "./observationscript/attachmentscript";
import LogicalTips from "./viewlessonplan/logicaltips";
import FrontMatter from "./viewlessonplan/frontmatter";
import ReflectionData from "./viewlessonplan/reflection";
import BeginingLesson from "./viewlessonplan/begininglesson";
import MiddleLesson from "./viewlessonplan/middlelesson";
import EndLesson from "./viewlessonplan/endlesson";
import RigorousIntentional from "./viewlessonplan/rigorous";
import ChecksUnderstanding from "./viewlessonplan/checksunderstanding";
import AttachmentsData from "./viewlessonplan/attachments";
import PreObservationPopup from "./viewpreobservation/preobservation";
import CompetencySelection from "./viewpreobservation/competencyselection";
import FocusAreaOne from "./viewpreobservation/focusareaone";
import FocusAreaTwo from "./viewpreobservation/focusareatwo";
import FocusAreaThree from "./viewpreobservation/focusareathree";
import AttachmentPage from "./viewpreobservation/attachment";
import AdditionalInfo from "./viewpreobservation/additionalinfo";
import { ScrollPanel } from "primereact/scrollpanel";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const PreObservationSummary = () => {
  const [rowClick, setRowClick] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [filters, setFilters] = useState(null);
  const [postObservation, setPostObservation] = useState(false);
  const [visibleRight, setVisibleRight] = useState(false);
  const [visiblePre, setVisiblePre] = useState(false);
  const [observationScrip, setObservationScrip] = useState(false);
  const op = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

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
  }, [visibleRight, visiblePre, postObservation, observationScrip]);

  const elementStyle = {
    height: `calc(100vh - ${elementHeight}px)`,
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
                className="cgupod-document-text"
                style={{ fontSize: "1.042vw" }}
              ></i>
              <div className="text-[14px] xl:text-[0.729vw] font-normal">
                View Lesson Plan
              </div>
            </div>
            <div
              className="flex py-[10px] xl:py-[0.521vw] px-[16px] xl:px-[0.833vw] gap-[0.521vw] border cursor-pointer"
              onClick={() => setVisiblePre(true)}
            >
              <i
                className="cgupod-archive-book"
                style={{ fontSize: "1.042vw" }}
              ></i>
              <div className="text-[14px] xl:text-[0.729vw] font-normal">
                View Pre Observation
              </div>
            </div>
            <div
              className="flex py-[10px] xl:py-[0.521vw] px-[16px] xl:px-[0.833vw] gap-[0.521vw] border cursor-pointer"
              onClick={() => setPostObservation(true)}
            >
              <i
                className="cgupod-clipboard-text"
                style={{ fontSize: "1.042vw" }}
              ></i>
              <div className="text-[14px] xl:text-[0.729vw] font-normal">
                View Post Observation
              </div>
            </div>
            <div
              className="flex py-[10px] xl:py-[0.521vw] px-[16px] xl:px-[0.833vw] gap-[0.521vw] border cursor-pointer"
              onClick={() => setObservationScrip(true)}
            >
              <i
                className="cgupod-document-text"
                style={{ fontSize: "1.042vw" }}
              ></i>
              <div className="text-[14px] xl:text-[0.729vw] font-normal">
                Observation Script
              </div>
            </div>
          </div>
        </OverlayPanel>
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
  return (
    <div>
      <div className="pt-[16px] xl:pt-[0.833vw] ">
        <div className="bg-white border border-[#F2EEEE] dark:border-[#1F2A37] dark:bg-[#13161B] rounded-lg xl:rounded-[0.521vw]">
          <div className="flex items-center justify-between xl:px-[1.042vw] px-4 xl:pt-[1.042vw] pt-4 xl:pb-[0.990vw] pb-4 border-b border-b-[#F2EEEE] dark:border-b-[#1F2A37]">
            <div className="flex flex-wrap items-center xl:gap-[0.521vw] gap-2">
              <div className="text-[#262626] dark:text-[#fff] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-5">
                Summary
              </div>
              <div className="text-[#888888] dark:text-[#818181] dark:bg-[#1C2026] xl:text-[0.625vw] text-xs font-medium xl:leading-[0.938vw] leading-5
               bg-[#FCF5F6] xl:rounded-[0.938vw] rounded-2xl xl:px-[0.729vw] px-3 xl:py-[0.313vw] py-1">
                Display 1 to 10 of 150
              </div>
            </div>
            <div className="flex flex-wrap items-center xl:gap-[1.250vw] gap-5">
              <div className="custom_search">
                <span className="p-input-icon-left">
                  <i className="pi pi-search" />
                  <InputText
                    placeholder="Search"
                    className="xl:h-[2.083vw] h-[36px] xl:w-[16.927vw]"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #EAE0E0",
                      borderRadius: "8px",
                    }}
                  />
                </span>
              </div>
              <div className="flex items-center xl:gap-[0.521vw] gap-2">
                <Link
                  href={""}
                  className="text-[#888888] dark:text-[#AAAAAA] dark:bg-[#13161B] dark:border-[#374151] font-normal xl:text-[0.729vw] text-xs bg-white border border-[#EAE0E0] xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg hover:bg-[#F0E9EA]"
                >
                  <i className="cgupod-print mr-2"></i>
                  <span>Print</span>
                </Link>
                <Link
                  href={""}
                  className="text-[#888888] dark:text-[#AAAAAA] dark:bg-[#13161B] dark:border-[#374151] font-normal xl:text-[0.729vw] text-xs bg-white border border-[#EAE0E0] xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg hover:bg-[#F0E9EA]"
                >
                  <i className="cgupod-download mr-2"></i>
                  <span>Download</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="px-[20px] xl:px-[1.042vw] py-[8px]">
            <div className="flex items-center gap-2">
              <div className="text-[12px] xl:text-[0.625vw] px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.417vw] rounded-[6px] cursor-pointer text-[#fff] bg-[#EC4751] font-normal leading-tight">
                All
              </div>
              <div
                className="text-[12px] xl:text-[0.625vw] px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.417vw] rounded-[6px] cursor-pointer 
              dark:bg-[#13161B] dark:border-[#374151] dark:text-[#AAAAAA] text-[#424242] bg-[#fff] border border-[#EAE0E0] font-normal leading-tight hover:bg-[#F0E9EA]"
              >
                Pending
              </div>
              <div
                className="text-[12px] xl:text-[0.625vw] px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.417vw] rounded-[6px] cursor-pointer
              dark:bg-[#13161B] dark:border-[#374151] dark:text-[#AAAAAA] text-[#424242] bg-[#fff] border border-[#EAE0E0] font-normal leading-tight hover:bg-[#F0E9EA]"
              >
                In Progress
              </div>
              <div
                className="text-[12px] xl:text-[0.625vw] px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.417vw] rounded-[6px] cursor-pointer
              dark:bg-[#13161B] dark:border-[#374151] dark:text-[#AAAAAA] text-[#424242] bg-[#fff] border border-[#EAE0E0] font-normal leading-tight hover:bg-[#F0E9EA]"
              >
                Submitted
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
              field="PODNumber"
              header="POD Number"
              sortable
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
              header="Date"
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
              header="Due Date"
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="Time"
              header="Time"
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              style={{ minWidth: "12rem" }}
            ></Column>
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
              header="Phase"
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="Observation"
              header="Observation"
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              style={{ minWidth: "8rem" }}
            ></Column>
            <Column
              field="Mood"
              header="Mood"
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              style={{ minWidth: "8rem" }}
            ></Column>
            <Column
              field="PostObsStatus"
              header="Pre Obs Status"
              sortable
              body={PostObsStatusData}
              style={{ minWidth: "13rem" }}
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
        </div>
      </div>

      {/* View Lesson Plan Sidebar */}
      <Sidebar
        visible={visibleRight}
        position="right"
        blockScroll={true}
        onHide={() => setVisibleRight(false)}
        className="custmSidebar widthOne"
      >
        <Tabs>
          <div className="grid grid-cols-12 h-full">
            <div className="col-span-12 lg:col-span-5">
              <div
                ref={popupPaddingTopRef}
                className="bg-[#E0E0EF] dark:bg-[#0C0E12] h-full pt-[30px] xl:pt-[3.646vw] "
              >
                <div className="px-[20px] xl:px-[3.646vw]">
                  <div
                    ref={popupTitleRef}
                    className="border border-[#FFFFFF] dark:border-[#374151] p-[28px] xl:p-[1.458vw] rounded-[16px] xl:rounded-[0.833vw]"
                  >
                    {/* row */}
                    <div className="inline-block bg-[#F0F0F7] dark:bg-[#4E456D] rounded-[4px] xl:rounded-[0.208vw] px-[10px] xl:px-[0.521vw] py-[4px] xl:py-[0.208vw] text-[#5D5384] dark:text-[#E0E0EF] text-[14px] xl:text-[0.729vw] mb-[20px] xl:mb-[1.042vw]">
                      Candidate ID : 421754
                    </div>
                    {/* row */}
                    <div className={myNotoSerifGeorgian.className}>
                      <div className="text-[#312C49] dark:text-[#FFF] text-[40px] xl:text-[2.500vw] leading-[1.1]">
                        Lesson Plan
                      </div>
                    </div>
                    {/* row */}
                    <div className="mt-[32px] xl:mt-[1.667vw]">
                      <div className="grid grid-cols-2 gap-[24px] xl:gap-[1.250vw]">
                        <div className="col h-[100%]">
                          <div className="bg-[#CECDE5] dark:bg-[#13161B] rounded-[8px] xl:rounded-[0.417vw] px-[16px] xl:px-[0.833vw] py-[10px] xl:py-[0.521vw]">
                            <div className="flex items-center gap-[8px] xl:gap-[0.417vw]">
                              <div className="bg-[#fff] dark:bg-[#4E456D] text-white min-w-[42px] min-h-[42px] rounded-[4px] xl:rounded-[0.208vw] flex items-center justify-center">
                                <i className="cgupod-user text-[24px] xl:text-[1.25] text-[#888888] dark:text-[#FFF]"></i>
                              </div>
                              <div className="col">
                                <div className="text-[#4E456D] dark:text-[#F0F0F7] text-[12px] xl:text-[0.625vw] w-full">
                                  Candidate Name
                                </div>
                                <div className="text-[#312C49] dark:text-[#F7F7FB] text-[16px] xl:text-[0.833vw] font-medium">
                                  Ava Abad
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col h-[100%]">
                          <div className="bg-[#CECDE5] dark:bg-[#13161B] rounded-[8px] xl:rounded-[0.417vw] px-[16px] xl:px-[0.833vw] py-[10px] xl:py-[0.521vw]">
                            <div className="flex items-center gap-[8px] xl:gap-[0.417vw]">
                              <div className="bg-[#fff] dark:bg-[#4E456D] text-white min-w-[42px] min-h-[42px] rounded-[4px] xl:rounded-[0.208vw] flex items-center justify-center">
                                <i className="cgupod-tick-circle text-[24px] xl:text-[1.25vw] text-[#888888] dark:text-[#FFF]"></i>
                              </div>
                              <div className="col">
                                <div className="text-[#4E456D] dark:text-[#F0F0F7] text-[12px] xl:text-[0.625vw]">
                                  Status
                                </div>
                                <div className="text-[#312C49] dark:text-[#F7F7FB] text-[16px] xl:text-[0.833vw] font-medium">
                                  Submitted
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
                      <Tab>Logistical Tips</Tab>
                      <Tab>Front Matter</Tab>
                      <Tab>Reflection</Tab>
                      <Tab>Beginning of Your Lesson</Tab>
                      <Tab>Middle of Your Lesson</Tab>
                      <Tab>End of Your Lesson</Tab>
                      <Tab>Rigorous & Intentional Differentiation</Tab>
                      <Tab>Checks for Understanding</Tab>
                      <Tab>Attachments</Tab>
                    </TabList>
                  </div>
                </ScrollPanel>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <ScrollPanel className="popup-right-scroll h-[100vh] bg-[#FCF5F6] dark:bg-[#1C2026]">
                <div className="px-[60px] xl:px-[3.125vw] pt-[70px] xl:pt-[3.646vw] pb-[36px] xl:pb-[1.875vw]">
                  <div className="relative">
                    <TabPanel>
                      <LogicalTips />
                    </TabPanel>
                    <TabPanel>
                      <FrontMatter />
                    </TabPanel>
                    <TabPanel>
                      <ReflectionData />
                    </TabPanel>
                    <TabPanel>
                      <BeginingLesson />
                    </TabPanel>
                    <TabPanel>
                      <MiddleLesson />
                    </TabPanel>
                    <TabPanel>
                      <EndLesson />
                    </TabPanel>
                    <TabPanel>
                      <RigorousIntentional />
                    </TabPanel>
                    <TabPanel>
                      <ChecksUnderstanding />
                    </TabPanel>
                    <TabPanel>
                      <AttachmentsData />
                    </TabPanel>
                  </div>
                </div>
              </ScrollPanel>
            </div>
          </div>
        </Tabs>
      </Sidebar>

      {/* View Pre Observation Sidebar */}
      <Sidebar
        visible={visiblePre}
        position="right"
        blockScroll={true}
        onHide={() => setVisiblePre(false)}
        className="custmSidebar widthOne"
      >
        <Tabs>
          <div className="grid grid-cols-12 h-full">
            <div className="col-span-12 lg:col-span-5">
              <div
                ref={popupPaddingTopRef}
                className="bg-[#E0E0EF] dark:bg-[#0C0E12] h-full pt-[30px] xl:pt-[3.646vw] "
              >
                <div className="px-[20px] xl:px-[3.646vw]">
                  <div
                    ref={popupTitleRef}
                    className="border border-[#FFFFFF] dark:border-[#374151] p-[28px] xl:p-[1.458vw] rounded-[16px] xl:rounded-[0.833vw]"
                  >
                    {/* row */}
                    <div className="inline-block bg-[#F0F0F7] dark:text-[#E0E0EF] dark:bg-[#4E456D] rounded-[4px] xl:rounded-[0.208vw] px-[10px] xl:px-[0.521vw] py-[4px] xl:py-[0.208vw] text-[#5D5384] text-[14px] xl:text-[0.729vw] mb-[20px] xl:mb-[1.042vw]">
                      Candidate ID : 421754
                    </div>
                    {/* row */}
                    <div className={myNotoSerifGeorgian.className}>
                      <div className="text-[#312C49] dark:text-[#FFF] text-[40px] xl:text-[2.500vw] leading-[1.1]">
                        Pre Observation
                      </div>
                    </div>
                    {/* row */}
                    <div className="mt-[32px] xl:mt-[1.667vw]">
                      <div className="grid grid-cols-2 gap-[24px] xl:gap-[1.250vw]">
                      <div className="col h-[100%]">
                          <div className="bg-[#CECDE5] dark:bg-[#13161B] rounded-[8px] xl:rounded-[0.417vw] px-[16px] xl:px-[0.833vw] py-[10px] xl:py-[0.521vw]">
                            <div className="flex items-center gap-[8px] xl:gap-[0.417vw]">
                              <div className="bg-[#fff] dark:bg-[#4E456D] text-white min-w-[42px] min-h-[42px] rounded-[4px] xl:rounded-[0.208vw] flex items-center justify-center">
                                <i className="cgupod-user text-[24px] xl:text-[1.25] text-[#888888] dark:text-[#FFF]"></i>
                              </div>
                              <div className="col">
                                <div className="text-[#4E456D] dark:text-[#F0F0F7] text-[12px] xl:text-[0.625vw] w-full">
                                  Candidate Name
                                </div>
                                <div className="text-[#312C49] dark:text-[#F7F7FB] text-[16px] xl:text-[0.833vw] font-medium">
                                  Ava Abad
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col h-[100%]">
                          <div className="bg-[#CECDE5] dark:bg-[#13161B] rounded-[8px] xl:rounded-[0.417vw] px-[16px] xl:px-[0.833vw] py-[10px] xl:py-[0.521vw]">
                            <div className="flex items-center gap-[8px] xl:gap-[0.417vw]">
                              <div className="bg-[#fff] dark:bg-[#4E456D] text-white min-w-[42px] min-h-[42px] rounded-[4px] xl:rounded-[0.208vw] flex items-center justify-center">
                                <i className="cgupod-tick-circle text-[24px] xl:text-[1.25vw] text-[#888888] dark:text-[#FFF]"></i>
                              </div>
                              <div className="col">
                                <div className="text-[#4E456D] dark:text-[#F0F0F7] text-[12px] xl:text-[0.625vw]">
                                  Status
                                </div>
                                <div className="text-[#312C49] dark:text-[#F7F7FB] text-[16px] xl:text-[0.833vw] font-medium">
                                  Submitted
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
                      <Tab>Pre - Observation</Tab>
                      <Tab>Competency Selection</Tab>
                      <Tab>Focus Area 1</Tab>
                      <Tab>Focus Area 2</Tab>
                      <Tab>Focus Area 3</Tab>
                      <Tab>Additional Information</Tab>
                      <Tab>Attachments</Tab>
                    </TabList>
                  </div>
                </ScrollPanel>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <ScrollPanel className="popup-right-scroll h-[100vh] bg-[#FCF5F6] dark:bg-[#1C2026]">
                <div className="px-[60px] xl:px-[3.125vw] pt-[70px] xl:pt-[3.646vw] pb-[36px] xl:pb-[1.875vw]">
                  <div className="relative">
                    <TabPanel>
                      <PreObservationPopup />
                    </TabPanel>
                    <TabPanel>
                      <CompetencySelection />
                    </TabPanel>
                    <TabPanel>
                      <FocusAreaOne />
                    </TabPanel>
                    <TabPanel>
                      <FocusAreaTwo />
                    </TabPanel>
                    <TabPanel>
                      <FocusAreaThree />
                    </TabPanel>
                    <TabPanel>
                      <AdditionalInfo />
                    </TabPanel>
                    <TabPanel>
                      <AttachmentPage />
                    </TabPanel>
                  </div>
                </div>
              </ScrollPanel>
            </div>
          </div>
        </Tabs>
      </Sidebar>

      {/* View post observation start */}
      <Sidebar
        visible={postObservation}
        position="right"
        onHide={() => setPostObservation(false)}
        blockScroll={true}
        className="custmSidebar widthOne"
      >
        <Tabs>
          <div className="grid grid-cols-12 h-full">
            <div className="col-span-12 lg:col-span-5">
              <div
                ref={popupPaddingTopRef}
                className="bg-[#E0E0EF] h-full pt-[30px] xl:pt-[3.646vw] "
              >
                <div className="px-[20px] xl:px-[3.646vw]">
                  <div
                    ref={popupTitleRef}
                    className="border border-[#FFFFFF] p-[28px] xl:p-[1.458vw] rounded-[16px] xl:rounded-[0.833vw]"
                  >
                    {/* row */}
                    <div className="inline-block bg-[#F0F0F7] rounded-[4px] xl:rounded-[0.208vw] px-[10px] xl:px-[0.521vw] py-[4px] xl:py-[0.208vw] text-[#5D5384] text-[14px] xl:text-[0.729vw] mb-[20px] xl:mb-[1.042vw]">
                      Candidate ID : 421754
                    </div>
                    {/* row */}
                    <div className={myNotoSerifGeorgian.className}>
                      <div className="text-[#312C49] text-[40px] xl:text-[2.500vw] leading-[1.1]">
                        Post Observation Debrief
                      </div>
                    </div>
                    {/* row */}
                    <div className="mt-[32px] xl:mt-[1.667vw]">
                      <div className="grid grid-cols-2 gap-[24px] xl:gap-[1.250vw]">
                        <div className="col h-[100%]">
                          <div className="bg-[#CECDE5] rounded-[8px] xl:rounded-[0.417vw] px-[16px] xl:px-[0.833vw] py-[10px] xl:py-[0.521vw]">
                            <div className="flex items-center gap-[8px] xl:gap-[0.417vw]">
                              <div className="bg-[#fff] text-white min-w-[42px] min-h-[42px] rounded-[4px] xl:rounded-[0.208vw] flex items-center justify-center">
                                <i className="cgupod-user text-[24px] xl:text-[1.25] text-[#888888]"></i>
                              </div>
                              <div className="col">
                                <div className="text-[#4E456D] text-[12px] xl:text-[0.625vw] w-full">
                                  Candidate Name
                                </div>
                                <div className="text-[#312C49] text-[16px] xl:text-[0.833vw] font-medium">
                                  Ava Abad
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col h-[100%]">
                          <div className="bg-[#CECDE5] rounded-[8px] xl:rounded-[0.417vw] px-[16px] xl:px-[0.833vw] py-[10px] xl:py-[0.521vw]">
                            <div className="flex items-center gap-[8px] xl:gap-[0.417vw]">
                              <div className="bg-[#fff] text-white min-w-[42px] min-h-[42px] rounded-[4px] xl:rounded-[0.208vw] flex items-center justify-center">
                                <i className="cgupod-tick-circle text-[24px] xl:text-[1.25vw] text-[#888888]"></i>
                              </div>
                              <div className="col">
                                <div className="text-[#4E456D] text-[12px] xl:text-[0.625vw]">
                                  Status
                                </div>
                                <div className="text-[#312C49] text-[16px] xl:text-[0.833vw] font-medium">
                                  Submitted
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
                      <Tab>Post-observation Debrief</Tab>
                      <Tab>General Reflection</Tab>
                      <Tab>Reflection of Competency Focus Areas</Tab>
                      <Tab>Focus Area 1</Tab>
                      <Tab>Focus Area 2</Tab>
                      <Tab>Focus Area 3</Tab>
                      <Tab>Additional Information</Tab>
                    </TabList>
                  </div>
                </ScrollPanel>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <ScrollPanel className="popup-right-scroll h-[100vh] bg-[#FCF5F6] ">
                <div className="px-[60px] xl:px-[3.125vw] pt-[70px] xl:pt-[3.646vw] pb-[36px] xl:pb-[1.875vw]">
                  <div className="relative">
                    <TabPanel>
                      <PostObservationDebreif />
                    </TabPanel>
                    <TabPanel>
                      <GeneralReflection />
                    </TabPanel>
                    <TabPanel>
                      <ReflectionofCompetencyFocusAreas />
                    </TabPanel>
                    <TabPanel>
                      <FocusArea1 />
                    </TabPanel>
                    <TabPanel>
                      <FocusArea2 />
                    </TabPanel>
                    <TabPanel>
                      <FocusArea3 />
                    </TabPanel>
                    <TabPanel>
                      <AdditionalInformation />
                    </TabPanel>
                  </div>
                </div>
              </ScrollPanel>
            </div>
          </div>
        </Tabs>
      </Sidebar>
      {/* View post observation end */}

      {/* Observation Script start */}
      <Sidebar
        visible={observationScrip}
        position="right"
        onHide={() => setObservationScrip(false)}
        blockScroll={true}
        className="custmSidebar widthOne"
      >
        <Tabs>
          <div className="grid grid-cols-12 h-full">
            <div className="col-span-12 lg:col-span-5">
              <div
                ref={popupPaddingTopRef}
                className="bg-[#E0E0EF] h-full pt-[30px] xl:pt-[3.646vw] "
              >
                <div className="px-[20px] xl:px-[3.646vw]">
                  <div
                    ref={popupTitleRef}
                    className="border border-[#FFFFFF] p-[28px] xl:p-[1.458vw] rounded-[16px] xl:rounded-[0.833vw]"
                  >
                    {/* row */}
                    <div className="inline-block bg-[#F0F0F7] rounded-[4px] xl:rounded-[0.208vw] px-[10px] xl:px-[0.521vw] py-[4px] xl:py-[0.208vw] text-[#5D5384] text-[14px] xl:text-[0.729vw] mb-[20px] xl:mb-[1.042vw]">
                      Candidate ID : 421754
                    </div>
                    {/* row */}
                    <div className={myNotoSerifGeorgian.className}>
                      <div className="text-[#312C49] text-[40px] xl:text-[2.500vw] leading-[1.1]">
                        Observation Script
                      </div>
                    </div>
                    {/* row */}
                    <div className="mt-[32px] xl:mt-[1.667vw]">
                      <div className="grid grid-cols-2 gap-[24px] xl:gap-[1.250vw]">
                        <div className="col h-[100%]">
                          <div className="bg-[#CECDE5] rounded-[8px] xl:rounded-[0.417vw] px-[16px] xl:px-[0.833vw] py-[10px] xl:py-[0.521vw]">
                            <div className="flex items-center gap-[8px] xl:gap-[0.417vw]">
                              <div className="bg-[#fff] text-white min-w-[42px] min-h-[42px] rounded-[4px] xl:rounded-[0.208vw] flex items-center justify-center">
                                <i className="cgupod-user text-[24px] xl:text-[1.25] text-[#888888]"></i>
                              </div>
                              <div className="col">
                                <div className="text-[#4E456D] text-[12px] xl:text-[0.625vw] w-full">
                                  Candidate Name
                                </div>
                                <div className="text-[#312C49] text-[16px] xl:text-[0.833vw] font-medium">
                                  Ava Abad
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col h-[100%]">
                          <div className="bg-[#CECDE5] rounded-[8px] xl:rounded-[0.417vw] px-[16px] xl:px-[0.833vw] py-[10px] xl:py-[0.521vw]">
                            <div className="flex items-center gap-[8px] xl:gap-[0.417vw]">
                              <div className="bg-[#fff] text-white min-w-[42px] min-h-[42px] rounded-[4px] xl:rounded-[0.208vw] flex items-center justify-center">
                                <i className="cgupod-tick-circle text-[24px] xl:text-[1.25vw] text-[#888888]"></i>
                              </div>
                              <div className="col">
                                <div className="text-[#4E456D] text-[12px] xl:text-[0.625vw]">
                                  Status
                                </div>
                                <div className="text-[#312C49] text-[16px] xl:text-[0.833vw] font-medium">
                                  Submitted
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
                      <Tab>Lesson Context</Tab>
                      <Tab>Competency Evidence Collection</Tab>
                      <Tab>Attachments</Tab>
                    </TabList>
                  </div>
                </ScrollPanel>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <ScrollPanel className="popup-right-scroll h-[100vh] bg-[#FCF5F6] pt-[70px] xl:pt-[3.646vw] pb-[36px] xl:pb-[1.875vw]">
                <div className="px-[60px] xl:px-[3.125vw]">
                  <div className="relative">
                    <TabPanel>
                      <LessonContext />
                    </TabPanel>
                    <TabPanel>
                      <CompetencyEvidenceCollection />
                    </TabPanel>
                    <TabPanel>
                      <AttachmentsScript />
                    </TabPanel>
                  </div>
                </div>
              </ScrollPanel>
            </div>
          </div>
        </Tabs>
      </Sidebar>
      {/*  Observation Script end*/}
    </div>
  );
};

export default PreObservationSummary;
