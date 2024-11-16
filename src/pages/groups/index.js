import React, { useEffect, useRef, useState } from "react";
import { Noto_Serif_Georgian } from "@next/font/google";
import Link from "next/link";
import Image from "next/image";
import { Sidebar } from "primereact/sidebar";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import Layout from "@/components/layout/layout";
import FilterComponent from "@/components/filtercomponent";
import Combogroup from "@/components/groups/creategroup";
import GroupinfoDetails from "./groupinfodetails";
import Demographics from "./demographics";
import Cset from "./cset";
import Tpa from "./tpa";
import Placements from "./placements";
import Ctcdemo from "./ctcdemo";
import CTCStatus from "./ctcstatus";
import { ScrollPanel } from "primereact/scrollpanel";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function index() {
  const [tdCandidateGroupview, settdCandidateGroupview] = useState(false);
  const [CreateGrouppopup, setCreateGrouppopup] = useState(false);
  // Data table
  const [rowClick, setRowClick] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [filters, setFilters] = useState(null);

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
  }, [tdCandidateGroupview]);

  const elementStyle = {
    height: `calc(100vh - ${elementHeight}px)`,
  };
  /* Popup scroll height end */

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
          <Link href={""}>
            <i className="cgupod-user-tick"></i>
          </Link>
          <Link href={""} onClick={() => settdCandidateGroupview(true)}>
            <i className="cgupod-eye"></i>
          </Link>
          <Link href={""}>
            <i className="cgupod-trash"></i>
          </Link>
          <Link href={""}>
            <i className="cgupod-copy"></i>
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

  return (
    <>
      <Layout pageTitle="Groups">
        <FilterComponent bgcolor="#4FB155" />
        <div className="mt-[16px] xl:mt-[0.833vw]">
          <div className="bg-white dark:bg-[#13161B] border border-[#F2EEEE] dark:border-[#1F2A37] rounded-lg xl:rounded-[0.521vw]">
            <div className="flex flex-wrap items-center justify-between xl:px-[1.042vw] px-4 xl:pt-[1.042vw] pt-4 xl:pb-[0.990vw] pb-4">
              <div className="flex flex-wrap items-center xl:gap-[0.521vw] gap-2">
                <div className="text-[#262626] dark:text-white xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-5">
                  Groups Details
                </div>
                <div className="text-[#888888] xl:text-[0.625vw] text-xs font-medium xl:leading-[0.938vw] leading-5 bg-[#FCF5F6] dark:bg-[#1C2026] xl:rounded-[0.938vw] rounded-2xl xl:px-[0.729vw] px-3 xl:py-[0.313vw] py-1">
                  Display 1 to 10 of 150
                </div>
              </div>
              <div className="flex flex-wrap items-center xl:gap-[1.250vw] gap-5">
                <div>
                  <span className="p-input-icon-left custm-search">
                    <i className="cgupod-td-searchbar xl:text-[0.833vw] text-xs text-[#888888]" />
                    <InputText
                      placeholder="Search"
                      className="xl:h-[2.083vw] h-[36px] w-full xl:w-[16.927vw] placeholder:text-[#888888] placeholder:font-normal placeholder:xl:text-[0.833vw]" />
                  </span>
                </div>
                <div className="flex flex-wrap items-center xl:gap-[0.521vw] gap-2">
                  <Link
                    href={""}
                    className="text-[#888888] font-normal xl:text-[0.729vw] text-xs bg-white border border-[#EAE0E0] xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg flex items-center xl:gap-[0.521vw] gap-2 dark:bg-[#13161B] dark:border-[#374151] dark:text-[#818181]"
                  >
                    <i className="cgupod-print"></i>
                    <span>Print</span>
                  </Link>
                  <Link
                    href={""}
                    className="text-[#888888] font-normal xl:text-[0.729vw] text-xs bg-white border border-[#EAE0E0] xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg flex items-center xl:gap-[0.521vw] gap-2 dark:bg-[#13161B] dark:border-[#374151] dark:text-[#818181]"
                  >
                    <i className="cgupod-download"></i>
                    <span>Download</span>
                  </Link>
                </div>
                <Link
                  href={""}
                  onClick={() => setCreateGrouppopup(true)}
                  className="bg-[#AF1E27] rounded text-white xl:text-[0.729vw] text-xs font-normal xl:leading-[0.938vw] leading-5 xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 flex items-center xl:gap-[0.521vw] gap-2"
                >
                  <i className="cgupod-add-circle"></i>
                  <span>Create Group</span>
                </Link>
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
      </Layout>
      <Combogroup
        visible={CreateGrouppopup}
        onHides={() => setCreateGrouppopup(false)}
      />
      <Sidebar
        visible={tdCandidateGroupview}
        position="right"
        blockScroll={true}
        onHide={() => settdCandidateGroupview(false)}
        className="custmSidebar width1800"
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
                    className="border border-[#FFFFFF] p-[28px] xl:p-[1.458vw] rounded-[16px] xl:rounded-[0.833vw] dark:border-[#4B5563]"
                  >
                    {/* row */}
                    <div className="inline-block bg-[#F0F0F7] rounded-[4px] xl:rounded-[0.208vw] px-[10px] xl:px-[0.521vw] py-[4px] xl:py-[0.208vw] text-[#5D5384] text-[14px] xl:text-[0.729vw] mb-[20px] xl:mb-[1.042vw] dark:bg-[#4E456D] dark:text-[#AAAAAA]">
                    ID: 487441
                    </div>
                    {/* row */}
                    <div className={myNotoSerifGeorgian.className}>
                      <div className="text-[#312C49] text-[40px] xl:text-[2.500vw] leading-[1.1] dark:text-[#F8F7F4]">
                      Candidate Group
                      </div>
                    </div>
                    {/* row */}
                    <div className="mt-[32px] xl:mt-[1.667vw]">
                      <div className="grid grid-cols-2 gap-[24px] xl:gap-[1.250vw]">
                        <div className="col h-[100%]">
                          <div className="bg-[#CECDE5] rounded-[8px] xl:rounded-[0.417vw] px-[16px] xl:px-[0.833vw] py-[10px] xl:py-[0.521vw] dark:bg-[#13161B]">
                            <div className="flex items-center gap-[8px] xl:gap-[0.417vw]">
                              <div className="bg-[#fff] text-white min-w-[42px] min-h-[42px] rounded-[4px] xl:rounded-[0.208vw] flex items-center justify-center dark:bg-[#4E456D]">
                                <i className="cgupod-user text-[24px] xl:text-[1.25] text-[#888888] dark:text-[#818181]"></i>
                              </div>
                              <div className="col">
                                <div className="text-[#4E456D] text-[12px] xl:text-[0.625vw] w-full dark:text-[#F0F0F7]">
                                Created by
                                </div>
                                <div className="text-[#312C49] text-[16px] xl:text-[0.833vw] font-medium dark:text-[#F7F7FB]">
                                Paul
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col h-[100%]">
                          <div className="bg-[#CECDE5] rounded-[8px] xl:rounded-[0.417vw] px-[16px] xl:px-[0.833vw] py-[10px] xl:py-[0.521vw] dark:bg-[#13161B]">
                            <div className="flex items-center gap-[8px] xl:gap-[0.417vw]">
                              <div className="bg-[#fff] text-white min-w-[42px] min-h-[42px] rounded-[4px] xl:rounded-[0.208vw] flex items-center justify-center dark:bg-[#4E456D]">
                                <i className="cgupod-calender text-[24px] xl:text-[1.25vw] text-[#888888] dark:text-[#818181]"></i>
                              </div>
                              <div className="col">
                                <div className="text-[#4E456D] text-[12px] xl:text-[0.625vw] dark:text-[#F0F0F7]">
                                Created Date
                                </div>
                                <div className="text-[#312C49] text-[16px] xl:text-[0.833vw] font-medium dark:text-[#F7F7FB]">
                                2/13/2021
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
                      <Tab>Group Info</Tab>
                      <Tab>Demographics</Tab>
                      <Tab>CSET</Tab>
                      <Tab>TPA</Tab>
                      <Tab>Placements</Tab>
                      <Tab>CTC Demo</Tab>
                      <Tab>CTC Status</Tab>
                    </TabList>
                  </div>
                </ScrollPanel>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <div className="bg-[#FCF5F6] dark:bg-[#1C2026] h-full pt-[70px] xl:pt-[3.646vw] px-[60px] xl:px-[3.125vw] pb-[36px] xl:pb-[1.875vw]">
                <div className="relative h-full">
                  <TabPanel>
                    <GroupinfoDetails />
                  </TabPanel>
                  <TabPanel>
                    <Demographics />
                  </TabPanel>
                  <TabPanel>
                    <Cset />
                  </TabPanel>
                  <TabPanel>
                    <Tpa />
                  </TabPanel>
                  <TabPanel>
                    <Placements />
                  </TabPanel>
                  <TabPanel>
                    <Ctcdemo />
                  </TabPanel>
                  <TabPanel>
                    <CTCStatus />
                  </TabPanel>
                </div>
              </div>
            </div>
          </div>
        </Tabs>
      </Sidebar>
    </>
  );
}
