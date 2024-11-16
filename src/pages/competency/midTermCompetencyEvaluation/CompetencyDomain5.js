import DoughnutChart from "@/components/allchart/doughnutchart";
import HorizontalBarChart from "@/components/allchart/horizontalbarchart";
import { Noto_Serif_Georgian } from "@next/font/google";
import { Column } from "jspdf-autotable";
import "primeicons/primeicons.css";
import { Accordion, AccordionTab } from "primereact/accordion";
import { DataTable } from "primereact/datatable";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import { products } from "@/components/staticdata";
import { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import Link from "next/link";
import { ScrollPanel } from "primereact/scrollpanel";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const ComepetencyDomain5 = () => {
  const DoughnutchartData = [
    { value: 208, name: "280 \n Teaching\n\n over 55%" },
    { value: 65, name: "290 \n Teaching\n\n over 55%" },
    { value: 50, name: "270\n Teaching \n\n over 55%" },
  ];
  const [rowClick, setRowClick] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const LessonPlanData = {
    label: [
      "1-Below Expectations",
      "2 - Emerging",
      "3 - Developing",
      "4 - Meeting",
      "5 - Refining",
      "N/A - Not enough Evi..",
    ],
    value: [
      {
        value: 32,
        itemStyle: {
          color: "#8276B1",
        },
      },
      {
        value: 45,
        itemStyle: {
          color: "#8276B1",
        },
      },
      {
        value: 54,
        itemStyle: {
          color: "#8276B1",
        },
      },

      {
        value: 62,
        itemStyle: {
          color: "#8276B1",
        },
      },

      {
        value: 50,
        itemStyle: {
          color: "#8276B1",
        },
      },

      {
        value: 5,
        itemStyle: {
          color: "#8276B1",
        },
      },
    ],
  };

  const CustomHeader = ({ label, label2 }) => (
    <div className="custom-accordion-header flex gap-2 items-center">
      <span className="custom-accordion-icon text-base">{label}</span>
      <h3 className="py-2 px-4 rounded-full bg-[#FCF5F6] text-xs text-[#888888]">
        {label2}
      </h3>
    </div>
  );

  return (
    <>
      <div className={myNotoSerifGeorgian.className}>
        <div className="flex gap-4 mb-[20px] xl:mb[1.67vw]">
          <div className="text-[#262626] text-[32px] xl:text-[1.667vw]">
          Domain 5: Funds of Knowledge
          </div>
          <p className="text-sm text-[#424242] font-medium m-0 flex items-center justify-center bg-[#F0E9EA] py-[6px] px-3 rounded-md">
          Relationships: Teacher, Candidate’s, Households
          </p>
        </div>
      </div>
      <div className="SidebarHeight">
        <ScrollPanel style={{ width: "100%", height: "100%" }}>
          <div className="bg-white rounded-[8px] xl:rounded-[0.417vw] p-4 border relative grid grid-cols-12 gap-3">
            <div className="col-span-12">
              <div className="text-[16px] text-[#262626] font-medium">
                Progress
              </div>
            </div>
            <div className=" bg-white dark:bg-[#191A1E] col-span-4 border-r border-[#CFCCC3]">
              <div className="xl:h-[9.375vw] h-[180px] px-4">
                <DoughnutChart
                  data={DoughnutchartData}
                  color={["#f6ca6e", "#c47cb5", "#FFAF23"]}
                  radius={["7%", "50%"]}
                />
              </div>
              <div className="bg-[#FCF5F6] py-[6px] px-[8px] rounded flex justify-between items-center mx-4">
                <div className="text-[#888] text-xs font-medium">
                  Total Points
                </div>
                <div className="text-lg font-semibold text-[#262626]">22</div>
              </div>
            </div>
            <div className="xl:h-[9.375vw] h-[180px] col-span-8 pr-4">
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
                maxv={60}
                data={LessonPlanData}
              />
            </div>
          </div>
          {/* row */}
          <div
            className="bg-white rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw]
       mt-[32px] xl:mt-[1.667vw] border relative"
          >
            <Accordion className="competency-accordion">
              <AccordionTab
                header={
                  <CustomHeader
                    label="Support Productive Learning with Culturally Sustaining Practices"
                    label2="Strand 1.1"
                  />
                }
              >
                <DataTable
                  value={products}
                  className="custTable tableCust custCheckBox"
                  scrollable
                  responsiveLayout="scroll"
                  style={{ width: "100%" }}
                  rows={10}
                  onSelectionChange={(e) => setSelectedProducts(e.value)}
                  selectionMode={rowClick ? null : "checkbox"}
                  selection={selectedProducts}
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
                    header="Concerns"
                    selectionMode="multiple"
                    headerStyle={{ minWidth: "1rem" }}
                  ></Column>

                  <Column
                    field="id"
                    header="strengths"
                    sortable
                    style={{ minWidth: "10rem" }}
                  ></Column>

                  <Column
                    header="Notable Strengths"
                    selectionMode="multiple"
                    headerStyle={{ minWidth: "1rem" }}
                  ></Column>
                </DataTable>
              </AccordionTab>

              <AccordionTab
                header={
                  <CustomHeader
                    label="Identify & Meet Candidate’s Where They Are"
                    label2="Strand 1.2"
                  />
                }
              >
                <DataTable
                  value={products}
                  className="custTable tableCust custCheckBox"
                  scrollable
                  responsiveLayout="scroll"
                  style={{ width: "100%" }}
                  rows={10}
                  onSelectionChange={(e) => setSelectedProducts(e.value)}
                  selectionMode={rowClick ? null : "checkbox"}
                  selection={selectedProducts}
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
                    header="Concerns"
                    selectionMode="multiple"
                    headerStyle={{ minWidth: "1rem" }}
                  ></Column>

                  <Column
                    field="id"
                    header="strengths"
                    sortable
                    style={{ minWidth: "10rem" }}
                  ></Column>

                  <Column
                    header="Notable Strengths"
                    selectionMode="multiple"
                    headerStyle={{ minWidth: "1rem" }}
                  ></Column>
                </DataTable>
              </AccordionTab>

              <AccordionTab
                header={
                  <CustomHeader
                    label="Develop Productive & Inclusive Relationships with Households"
                    label2="Strand 1.3"
                  />
                }
              >
                <DataTable
                  value={products}
                  className="custTable tableCust custCheckBox"
                  scrollable
                  responsiveLayout="scroll"
                  style={{ width: "100%" }}
                  rows={10}
                  onSelectionChange={(e) => setSelectedProducts(e.value)}
                  selectionMode={rowClick ? null : "checkbox"}
                  selection={selectedProducts}
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
                    header="Concerns"
                    selectionMode="multiple"
                    headerStyle={{ minWidth: "1rem" }}
                  ></Column>

                  <Column
                    field="id"
                    header="strengths"
                    sortable
                    style={{ minWidth: "10rem" }}
                  ></Column>

                  <Column
                    header="Notable Strengths"
                    selectionMode="multiple"
                    headerStyle={{ minWidth: "1rem" }}
                  ></Column>
                </DataTable>
              </AccordionTab>


            </Accordion>
            <div className="flex leading-5">
              <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-semibold mt-[22px] xl:mt-[1.146vw]">
                Question 1
              </div>
            </div>
            <div className="mt-2 bg-[#FCF5F6] rounded-[8px] xl:rounded-[0.417vw] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw]">
              <div className="popupForm inputlabel">
                <form>
                  <div className="space-y-[20px] xl:space-y-[1.042vw]">
                    <div className="flex flex-col gap-[6px]">
                      <div className="text-[14px] xl:text-[0.729vw] text-[#262626] font-medium">
                        Question
                      </div>
                      <div className="custInput">
                        <InputTextarea
                          placeholder="Write text here ..."
                          autoResize
                          // value={value}
                          // onChange={(e) => setValue(e.target.value)}
                          className="w-full !h-20"
                          rows={6}
                          cols={30}
                        />
                      </div>
                      <div className="text-[14px] xl:text-[0.729vw] text-[#262626] font-medium">
                        Notes
                      </div>
                      <div className="custInput">
                        <InputTextarea
                          placeholder="Write text here ..."
                          autoResize
                          // value={value}
                          // onChange={(e) => setValue(e.target.value)}
                          className="w-full"
                          rows={6}
                          cols={30}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="flex leading-5">
              <div className="text-[16px] xl:text-[0.833vw] text-[#262626] font-semibold mt-[22px] xl:mt-[1.146vw]">
                Question 2
              </div>
            </div>
            <div className="mt-2 bg-[#FCF5F6] rounded-[8px] xl:rounded-[0.417vw] px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.833vw]">
              <div className="popupForm inputlabel">
                <form>
                  <div className="space-y-[20px] xl:space-y-[1.042vw]">
                    <div className="flex flex-col gap-[6px]">
                      <div className="text-[14px] xl:text-[0.729vw] text-[#262626] font-medium">
                        Question
                      </div>
                      <div className="custInput">
                        <InputTextarea
                          placeholder="Write text here ..."
                          autoResize
                          // value={value}
                          // onChange={(e) => setValue(e.target.value)}
                          className="w-full !h-20"
                          rows={6}
                          cols={30}
                        />
                      </div>
                      <div className="text-[14px] xl:text-[0.729vw] text-[#262626] font-medium">
                        Notes
                      </div>
                      <div className="custInput">
                        <InputTextarea
                          placeholder="Write text here ..."
                          autoResize
                          // value={value}
                          // onChange={(e) => setValue(e.target.value)}
                          className="w-full"
                          rows={6}
                          cols={30}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </ScrollPanel>
      </div>

      <div className="mt-[40px] xl:mt-[2.083vw] lg:mt-[0] lg:absolute bottom-[-70px] left-0 right-0">
        <div className="flex items-center justify-between">
          <div className="col">
            <Link
              href={""}
              className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] opacity-30 transition ease-in-out delay-150"
            >
              <i className="mr-[8px] xl:mr-[0.417vw] cgupod-close-circle text-[22px] xl:text-[1.146]"></i>
              Cancel
            </Link>
          </div>
          <div className="flex gap-1">
            <Link
              href={""}
              className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] transition ease-in-out delay-150"
            >
              <i className="mr-[8px] xl:mr-[0.417vw] cgupod-print text-[22px] xl:text-[1.146]"></i>
              Print PDF
            </Link>
            <Link
              href={""}
              className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] transition ease-in-out delay-150"
            >
              <i className="mr-[8px] xl:mr-[0.417vw] cgupod-tick-circle text-[22px] xl:text-[1.146]"></i>
              Submit
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComepetencyDomain5;
