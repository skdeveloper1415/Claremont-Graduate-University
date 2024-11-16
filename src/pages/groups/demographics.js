import React, { useState } from "react";
import { Noto_Serif_Georgian } from "@next/font/google";
import Link from "next/link";
import Image from "next/image";
import VerticalBarChart from "@/components/allchart/verticalbarchart";
import ChartWrapper from "@/components/chartwrapper/competency";
import PieChartWithImage from "@/components/allchart/piechartwithimage";
import { ScrollPanel } from "primereact/scrollpanel";
import { useTheme } from "next-themes";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Demographics() {

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const EthinicitySnapshotData = [
    {
      value: 245,
    },
    {
      value: 260,
    },
    {
      value: 235,
    },
    {
      value: 175,
    },
    {
      value: 205,
    },
    {
      value: 90,
    },
    {
      value: 185,
    },
    {
      value: 135,
    },
  ];

  const AgeSnapshot = [
    {
      value: 220,
    },
    {
      value: 185,
    },
    {
      value: 249,
    },
    {
      value: 155,
    },
    {
      value: 115,
    },
  ];

  const graphic = [
    {
      type: "image",
      style: {
        image: "/assets/images/svg/male_student.svg",
        width: 50,
        height: 50,
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
      center: "center",
      left: "center",
      right: "center",
      top: "center",
    },
  ];

  const graphic1 = [
    {
      type: "image",
      style: {
        image: "/assets/images/svg/female_student.svg",
        width: 50,
        height: 50,
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
      center: "center",
      left: "center",
      right: "center",
      top: "center",
    },
  ];

  return (
    <>
      {/**Title**/}
      <div className={myNotoSerifGeorgian.className}>
        <div className="text-[#262626] text-[32px] xl:text-[1.667vw] dark:text-white">
          Demographics
        </div>
      </div>
      <div className="PersonalDetails">
        <ScrollPanel style={{ width: "100%", height: "100%" }}>
          <div className="grid grid-cols-12 xl:mt-[1.250vw] mt-6 xl:gap-[1.250vw] gap-5">
            {/**col-12**/}
            <div className="col-span-12">
              <div className="bg-white shadow-[0px 1px 2px 0px] shadow-[rgba(0,0,0,0.08)] rounded-lg xl:rounded-[0.521vw] xl:p-[1.042vw] p-5 relative dark:bg-[#13161B]">
                <ChartWrapper
                  title={"Ethnicity Snapshot"}
                  ExportIcon={true}
                  tabSection={true}
                  infoIcon={true}
                  bulbIcon={true}
                  downloadIcon={true}
                  graphIcon={true}
                  data={
                    <div className="w-full h-[290px] xl:h-[15.156vw]">
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
                        barcolor={["#FF9475"]}
                        labelposition={"outside"}
                        labelcolor={[currentTheme == "dark" ? "#AAAAAA" : "#424242"]}
                        xAxisLabeldata={[
                          "White",
                          "Hispanic",
                          "Black",
                          "Asian",
                          "American",
                          "Japanese",
                          "Chinese",
                          "African American",
                        ]}
                        name={["DFW Rate"]}
                        minvalue={0}
                        intervalvalue={50}
                        maxvalue={300}
                        data={EthinicitySnapshotData}
                      />
                    </div>
                  }
                />
                <div className="text-xs font-normal text-[#888888] text-center pt-2 absolute -left-5 top-1/2 -rotate-90">
                  No. of Users
                </div>
                <div className="text-xs font-normal text-[#888888] text-center pt-2">
                  Age Groups
                </div>
              </div>
            </div>
            {/**col-6**/}
            <div className="col-span-12 lg:col-span-5">
              <div
                className="bg-white shadow-[0px 1px 2px 0px] shadow-[rgba(0,0,0,0.08)] rounded-lg xl:rounded-[0.521vw] xl:p-[1.042vw] p-5 dark:bg-[#13161B]">
                <ChartWrapper
                  title={"Gender Snapshot"}
                  ExportIcon={true}
                  tabSection={true}
                  infoIcon={true}
                  bulbIcon={true}
                  downloadIcon={true}
                  graphIcon={true}
                  data={
                    <div className="grid grid-cols-2 xl:gap-[2.083vw] gap-[30px]">
                      <div>
                        <div className="w-full xl:h-[9.375vw]">
                          <PieChartWithImage
                            chartname={"Services"}
                            data={[
                              { value: 65, name: "Class Support (26)" },
                              { value: 35, name: "Other (34)" },
                            ]}
                            radius={["70%", "100%"]}
                            center={["50%", "50%"]}
                            graphic={graphic}
                            color={["#9E8D71", "#F0E9EA"]}
                            legend={{
                              show: false,
                            }}
                          />
                        </div>
                        <div className="text-[#424242] xl:text-[0.729vw] text-base font-normal text-center xl:mt-[0.833vw] mt-3 dark:text-[#AAAAAA]">
                          Male
                        </div>
                        <div className="text-[#262626] xl:text-[0.938vw] font-semibold text-center space-x-1 dark:text-white">
                          <span>1044</span>
                          <span className="text-[#888888] text-xs xl:text-[0.729vw] font-normal dark:text-[#818181]">
                            65%
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="w-full xl:h-[9.375vw]">
                          <PieChartWithImage
                            chartname={"Services"}
                            data={[
                              { value: 35, name: "Class Support (26)" },
                              { value: 65, name: "Other (34)" },
                            ]}
                            radius={["70%", "100%"]}
                            center={["50%", "50%"]}
                            graphic={graphic1}
                            color={["#968FC3", "#F0E9EA"]}
                            legend={{
                              show: false,
                            }}
                          />
                        </div>
                        <div className="text-[#424242] xl:text-[0.729vw] text-base font-normal text-center xl:mt-[0.833vw] mt-3 dark:text-[#AAAAAA]">
                          Male
                        </div>
                        <div className="text-[#262626] xl:text-[0.938vw] font-semibold text-center space-x-1 dark:text-white">
                          <span>1044</span>
                          <span className="text-[#888888] text-xs xl:text-[0.729vw] font-normal dark:text-[#818181]">
                            65%
                          </span>
                        </div>
                      </div>
                      <div className="col-span-2 text-[#5D5384] xl:text-[1.042vw] text-xl font-light xl:leading-[1.250vw] leading-6 text-center dark:text-[#E0E0EF]">
                        of which <span className="font-bold">30%</span> of the
                        male candidate are more than the female candidate
                      </div>
                    </div>
                  }
                />
              </div>
            </div>
            {/**col-6**/}
            <div className="col-span-12 lg:col-span-7">
              <div className="bg-white shadow-[0px 1px 2px 0px] shadow-[rgba(0,0,0,0.08)] rounded-lg xl:rounded-[0.521vw] xl:p-[1.042vw] p-5 relative dark:bg-[#13161B]">
                <ChartWrapper
                  title={"Age Snapshot"}
                  ExportIcon={true}
                  tabSection={true}
                  infoIcon={true}
                  bulbIcon={true}
                  downloadIcon={true}
                  graphIcon={true}
                  data={
                    <div className="w-full h-[290px] xl:h-[16.146vw]">
                      <div className="bg-[#FCF5F6] xl:py-[0.417vw] py-1 xl:px-[0.833vw] px-3 inline-flex rounded xl:rounded-[0.417vw] text-[#424242] font-normal xl:text-[0.729vw] text-xs space-x-1 dark:bg-[#1C2026] dark:text-[#AAAAAA]">
                        <span className="text-[#262626] font-semibold dark:text-white">35%</span>
                        <span>of users are more in the</span>
                        <span className="text-[#262626] font-semibold dark:text-white">
                          age group 30-34
                        </span>
                      </div>
                      <VerticalBarChart
                        legend={{
                          show: false,
                        }}
                        grid={{
                          top: "12%",
                          right: "15",
                          bottom: "15%",
                          left: "20",
                          containLabel: true,
                        }}
                        barcolor={["#968FC3"]}
                        labelposition={"outside"}
                        labelcolor={[currentTheme == "dark" ? "#AAAAAA" : "#424242"]}
                        xAxisLabeldata={[
                          "20-24",
                          "25-29",
                          "30-34",
                          "35-40",
                          "40+",
                        ]}
                        name={["DFW Rate"]}
                        minvalue={0}
                        intervalvalue={50}
                        maxvalue={300}
                        data={AgeSnapshot}
                      />
                    </div>
                  }
                />
                <div className="text-xs font-normal text-[#888888] text-center pt-2 absolute -left-5 top-1/2 -rotate-90">
                  No. of Users
                </div>
                <div className="text-xs font-normal text-[#888888] text-center pt-2">
                  Age Groups
                </div>
              </div>
            </div>
          </div>
        </ScrollPanel>
      </div>
      {/**Title**/}
    </>
  );
}
