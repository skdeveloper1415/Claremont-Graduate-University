import React, { useEffect, useRef, useState } from "react";
import Layout from "@/components/layout/layout";
import FilterComponent from "@/components/filtercomponent";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { Column } from "primereact/column";
import Link from "next/link";
import { Noto_Serif_Georgian } from "@next/font/google";
import { Checkbox } from "primereact/checkbox";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Sidebar } from "primereact/sidebar";
import { ScrollPanel } from "primereact/scrollpanel";
import Overview from "./alltabs/overview";
import Contact from "./alltabs/contact";
import Staff from "./alltabs/staff";
import Placements from "./alltabs/placements";
import Facilities from "./alltabs/facilities";
import Demographics from "./alltabs/demographics";
import Jobs from "./alltabs/job";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Index() {
  const [schoolPopup, setSchoolPopup] = useState(false);
  const [rowClick, setRowClick] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [visiblePre, setVisiblePre] = useState(false);
  const [filters, setFilters] = useState(null);
  const [postObservation, setPostObservation] = useState(false);
  const [observationScrip, setObservationScrip] = useState(false);
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
          paddingTopValue = computedStyles.getPropertyValue('padding-top');
          numericValue = parseFloat(paddingTopValue);
          console.log('Padding-top value:', numericValue);

        }

        const popupTitle = popupTitleRef.current;
        let height;
        if (popupTitle) {

          height = popupTitle.offsetHeight;
          console.log(height + ' height of ref');
          setElementHeight(height + numericValue);

        }
      }, 200);

      return () => {
        clearTimeout(timeoutId);
      };
    }

    // Initial update
    updateTapScrollHeight();

    // Update elementHeight on window resize
    const handleResize = () => {
      updateTapScrollHeight();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup: remove the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [schoolPopup, visiblePre, postObservation, observationScrip]);

  const elementStyle = {
    height: `calc(100vh - ${elementHeight}px)`,
  };
  /* Popup scroll height end */

  // Data table
  const products = [
    {
      schoolid: "487441",
      schoolname: "Added Credential Art",
      schooladmin: "12",
      schooltype: "11",
      incomplete: "8",
      grades: "20",
      updatestatus: "5",
      preteaching: "4",
      res: "4",
      intern: "4",
      candidatereach: "4",
      total: "51",
      miles: "51",
      Action: "5",
    },
    {
      schoolid: "487441",
      schoolname: "Added Credential Art",
      schooladmin: "12",
      schooltype: "11",
      incomplete: "8",
      grades: "20",
      updatestatus: "5",
      preteaching: "4",
      res: "4",
      intern: "4",
      candidatereach: "4",
      total: "51",
      miles: "51",
      Action: "5",
    },
    {
      schoolid: "487441",
      schoolname: "Added Credential Art",
      schooladmin: "12",
      schooltype: "11",
      incomplete: "8",
      grades: "20",
      updatestatus: "5",
      preteaching: "4",
      res: "4",
      intern: "4",
      candidatereach: "4",
      total: "51",
      miles: "51",
      Action: "5",
    },
    {
      schoolid: "487441",
      schoolname: "Added Credential Art",
      schooladmin: "12",
      schooltype: "11",
      incomplete: "8",
      grades: "20",
      updatestatus: "5",
      preteaching: "4",
      res: "4",
      intern: "4",
      candidatereach: "4",
      total: "51",
      miles: "51",
      Action: "5",
    },
    {
      schoolid: "487441",
      schoolname: "Added Credential Art",
      schooladmin: "12",
      schooltype: "11",
      incomplete: "8",
      grades: "20",
      updatestatus: "5",
      preteaching: "4",
      res: "4",
      intern: "4",
      candidatereach: "4",
      total: "51",
      miles: "51",
      Action: "5",
    },
    {
      schoolid: "487441",
      schoolname: "Added Credential Art",
      schooladmin: "12",
      schooltype: "11",
      incomplete: "8",
      grades: "20",
      updatestatus: "5",
      preteaching: "4",
      res: "4",
      intern: "4",
      candidatereach: "4",
      total: "51",
      miles: "51",
      Action: "5",
    },
    {
      schoolid: "487441",
      schoolname: "Added Credential Art",
      schooladmin: "12",
      schooltype: "11",
      incomplete: "8",
      grades: "20",
      updatestatus: "5",
      preteaching: "4",
      res: "4",
      intern: "4",
      candidatereach: "4",
      total: "51",
      miles: "51",
      Action: "5",
    },
    {
      schoolid: "487441",
      schoolname: "Added Credential Art",
      schooladmin: "12",
      schooltype: "11",
      incomplete: "8",
      grades: "20",
      updatestatus: "5",
      preteaching: "4",
      res: "4",
      intern: "4",
      candidatereach: "4",
      total: "51",
      miles: "51",
      Action: "5",
    },
    {
      schoolid: "487441",
      schoolname: "Added Credential Art",
      schooladmin: "12",
      schooltype: "11",
      incomplete: "8",
      grades: "20",
      updatestatus: "5",
      preteaching: "4",
      res: "4",
      intern: "4",
      candidatereach: "4",
      total: "51",
      miles: "51",
      Action: "5",
    },
    {
      schoolid: "487441",
      schoolname: "Added Credential Art",
      schooladmin: "12",
      schooltype: "11",
      incomplete: "8",
      grades: "20",
      updatestatus: "5",
      preteaching: "4",
      res: "4",
      intern: "4",
      candidatereach: "4",
      total: "51",
      miles: "51",
      Action: "5",
    },
    {
      schoolid: "487441",
      schoolname: "Added Credential Art",
      schooladmin: "12",
      schooltype: "11",
      incomplete: "8",
      grades: "20",
      updatestatus: "5",
      preteaching: "4",
      res: "4",
      intern: "4",
      candidatereach: "4",
      total: "51",
      miles: "51",
      Action: "5",
    },
  ];

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
          <i className="cgupod-eye"></i>
        </div>
      </>
    );
  };
  const UpdateStatus = (rowData) => {
    return (
      <>
        <div class="flex gap-1 justify-center items-center border border-[#18B557] rounded-2xl bg-[#DEF7EC] font-medium dark:bg-[#18B557] py-[4px] px-[12px] xl:py-[0.208vw] xl:px-[0.625vw]">
          <div class="w-1 h-1 bg-[#18B557] dark:bg-[#fff] rounded"></div>
          <div class="text-[#18B557] dark:text-[#fff] text-[12px] xl:text-[0.625vw] font-medium capitalize">
            Active
          </div>
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

  const SchoolNameBody = (rowData) => {
    return <div onClick={() => setSchoolPopup(true)}>{rowData.schoolname}</div>;
  };

  return (
    <Layout pageTitle="School">
      <FilterComponent />
      <div className="mt-[16px] xl:mt-[0.833vw] ">
        <div className="bg-white dark:bg-[#13161B] border border-[#F2EEEE] dark:border-[#1F2A37] rounded-lg xl:rounded-[0.521vw]">
          <div className="flex items-center justify-between xl:px-[1.042vw] px-4 xl:pt-[1.042vw] pt-4 xl:pb-[0.990vw] pb-4 border-b dark:border-b-[#1F2A37] border-b-[#F2EEEE]">
            <div className="flex flex-wrap items-center xl:gap-[0.521vw] gap-2">
              <div className="text-[#262626] dark:text-[#FFFFFF] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-5">Schools</div>
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
            <div className="px-[20px] xl:px-[1.042vw] py-[8px]">
              <TabList>
                <div className="flex items-center gap-2">
                  <Tab>
                    <div
                      className={`text-[12px] xl:text-[0.625vw] px-[20px] xl:px-[1.042vw] py-[6px] rounded-[6px] cursor-pointer  ${activeTab === 0
                          ? "text-[#fff] bg-[#EC4751] dark:bg-[#AF1E27] font-normal"
                          : "text-[#424242] bg-[#fff]  hover:bg-[#F0E9EA] border border-[#EAE0E0] dark:border-[#374151] dark:text-[#AAAAAA] dark:bg-[#13161B] font-normal"
                        }`}
                    >
                      All Schools
                    </div>
                  </Tab>
                  <Tab>
                    <div
                      className={`text-[12px] xl:text-[0.625vw] px-[20px] xl:px-[1.042vw] py-[6px] rounded-[6px] cursor-pointer ${activeTab === 1
                          ? "text-[#fff] bg-[#EC4751] dark:bg-[#AF1E27] font-normal"
                          : "text-[#424242] bg-[#fff]  hover:bg-[#F0E9EA] border border-[#EAE0E0] dark:border-[#374151] dark:text-[#AAAAAA] dark:bg-[#13161B] font-normal"
                        }`}
                    >
                      Elementary Schools
                    </div>
                  </Tab>
                  <Tab>
                    <div
                      className={`text-[12px] xl:text-[0.625vw] px-[20px] xl:px-[1.042vw] py-[6px] rounded-[6px] cursor-pointer ${activeTab === 2
                          ? "text-[#fff] bg-[#EC4751] dark:bg-[#AF1E27] font-normal"
                          : "text-[#424242] bg-[#fff]  hover:bg-[#F0E9EA] border border-[#EAE0E0] dark:border-[#374151] dark:text-[#AAAAAA] dark:bg-[#13161B] font-normal"
                        }`}
                    >
                      Public Schools
                    </div>
                  </Tab>
                  <Tab>
                    <div
                      className={`text-[12px] xl:text-[0.625vw] px-[20px] xl:px-[1.042vw] py-[6px] rounded-[6px] cursor-pointer ${activeTab === 3
                          ? "text-[#fff] bg-[#EC4751] dark:bg-[#AF1E27] font-normal"
                          : "text-[#424242] bg-[#fff]  hover:bg-[#F0E9EA] border border-[#EAE0E0] dark:border-[#374151] dark:text-[#AAAAAA] dark:bg-[#13161B] font-normal"
                        }`}
                    >
                      Charter Schools
                    </div>
                  </Tab>
                  <Tab>
                    <div
                      className={`text-[12px] xl:text-[0.625vw] px-[20px] xl:px-[1.042vw] py-[6px] rounded-[6px] cursor-pointer ${activeTab === 4
                          ? "text-[#fff] bg-[#EC4751] dark:bg-[#AF1E27] font-normal"
                          : "text-[#424242] bg-[#fff]  hover:bg-[#F0E9EA] border border-[#EAE0E0] dark:border-[#374151] dark:text-[#AAAAAA] dark:bg-[#13161B] font-normal"
                        }`}
                    >
                      Others
                    </div>
                  </Tab>
                </div>
              </TabList>
            </div>
          </Tabs>
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
              style={{ minWidth: '1rem', maxWidth: '1rem' }}
            ></Column>
            <Column
              field="schoolid"
              header="School ID"
              sortable
              style={{ minWidth: "10rem" }}
            ></Column>
            <Column
              field="schoolname"
              header="School Name"
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              body={SchoolNameBody}
              style={{ minWidth: "15rem" }}
            ></Column>
            <Column
              field="schooladmin"
              header="School Admin"
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="schooltype"
              header="School Type"
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="grades"
              header="Grades"
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="updatestatus"
              header="Update Status"
              body={UpdateStatus}
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="preteaching"
              header="Pre Teaching"
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="res"
              header="Res"
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              style={{ minWidth: "10rem" }}
            ></Column>
            <Column
              field="intern"
              header="Intern"
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              style={{ minWidth: "10rem" }}
            ></Column>
            <Column
              field="candidatereach"
              header="Candidate Reach"
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              style={{ minWidth: "10rem" }}
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
              field="miles"
              header="Miles"
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
              header="Action"
              className="action-shadow-table"
              frozen
              alignFrozen="right"
              align="center"
              style={{ minWidth: "5em" }}
              body={actionBodyTemplate}
            ></Column>
          </DataTable>
        </div>
      </div>
      {/* School Popup Start*/}
      <Sidebar
        visible={schoolPopup}
        position="right"
        blockScroll={true}
        onHide={() => setSchoolPopup(false)}
        className="custmSidebar sidebarwidth"
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
                    className="border border-[#FFFFFF] dark:border-[#4B5563] p-[28px] xl:p-[1.458vw] rounded-[16px] xl:rounded-[0.833vw]"
                  >
                    {/* row */}
                    <div className="inline-block bg-[#F0F0F7] rounded-[4px] xl:rounded-[0.208vw] px-[10px] xl:px-[0.521vw] py-[4px] xl:py-[0.208vw] text-[#5D5384] text-[14px] xl:text-[0.729vw] mb-[20px] xl:mb-[1.042vw] dark:bg-[#4E456D] dark:text-[#E0E0EF]">
                      School ID: PTM001
                    </div>
                    {/* row */}
                    <div className={myNotoSerifGeorgian.className}>
                      <div className="text-[#312C49] dark:text-[#F7F7FB] text-[40px] xl:text-[2.500vw] leading-[1.1]">
                        Anderson Mill ES
                      </div>
                    </div>
                    {/* row */}
                    <div className="mt-[32px] xl:mt-[1.667vw]">
                      <div className="grid grid-cols-2 gap-[24px] xl:gap-[1.250vw]">
                        <div className="col h-[100%]">
                          <div className="bg-[#CECDE5] dark:bg-[#13161B] rounded-[8px] xl:rounded-[0.417vw] px-[16px] xl:px-[0.833vw] py-[10px] xl:py-[0.521vw]">
                            <div className="flex items-center gap-[8px] xl:gap-[0.417vw]">
                              <div className="bg-[#fff] text-white dark:bg-[#4E456D]  min-w-[42px] min-h-[42px] rounded-[4px] xl:rounded-[0.208vw] flex items-center justify-center">
                                <i className="cgupod-calender text-[24px] xl:text-[1.25] text-[#888888] dark:text-[#818181]"></i>
                              </div>
                              <div className="col">
                                <div className="text-[#4E456D] text-[12px] xl:text-[0.625vw] w-full dark:text-[#F7F7FB]">
                                  Last Update Date
                                </div>
                                <div className="text-[#312C49] text-[16px] xl:text-[0.833vw] font-medium dark:text-[#F7F7FB]">
                                  29/08/2022
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col h-[100%]">
                          <div className="bg-[#CECDE5] dark:bg-[#13161B] rounded-[8px] xl:rounded-[0.417vw] px-[16px] xl:px-[0.833vw] py-[10px] xl:py-[0.521vw]">
                            <div className="flex items-center gap-[8px] xl:gap-[0.417vw]">
                              <div className="bg-[#fff] text-white dark:bg-[#4E456D]  min-w-[42px] min-h-[42px] rounded-[4px] xl:rounded-[0.208vw] flex items-center justify-center">
                                <i className="cgupod-tick-circle text-[24px] xl:text-[1.25vw] dark:text-[#818181] text-[#888888]"></i>
                              </div>
                              <div className="col">
                                <div className="text-[#4E456D] text-[12px] xl:text-[0.625vw] dark:text-[#F7F7FB]">
                                  Status
                                </div>
                                <div className="text-[#312C49] text-[16px] xl:text-[0.833vw] font-medium dark:text-[#F7F7FB]">
                                  Active
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
                      <Tab>Contact</Tab>
                      <Tab>Staff</Tab>
                      <Tab>Placements</Tab>
                      <Tab>Facilities</Tab>
                      <Tab>Demographics</Tab>
                      <Tab>Jobs</Tab>
                    </TabList>
                  </div>
                </ScrollPanel>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <div className="bg-[#FCF5F6] dark:bg-[#1C2026] h-full pt-[70px] xl:pt-[3.646vw] px-[60px] xl:px-[3.125vw] pb-[36px] xl:pb-[1.875vw]">
                <div className="relative h-full">
                  <TabPanel>
                    <Overview />
                  </TabPanel>
                  <TabPanel>
                    <Contact />
                  </TabPanel>
                  <TabPanel>
                    <Staff />
                  </TabPanel>
                  <TabPanel>
                    <Placements />
                  </TabPanel>
                  <TabPanel>
                    <Facilities />
                  </TabPanel>
                  <TabPanel>
                    <Demographics />
                  </TabPanel>
                  <TabPanel>
                    <Jobs />
                  </TabPanel>
                </div>
              </div>
            </div>
          </div>
        </Tabs>
      </Sidebar>
      {/* School Popup - End*/}
    </Layout>
  );
}
