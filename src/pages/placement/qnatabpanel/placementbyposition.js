import StackVerticalBarChart from "@/components/allchart/stackverticalbarchart";
import React from "react";
import { Dropdown } from "primereact/dropdown";
import { Sidebar } from "primereact/sidebar";

const PlacementByPosition = () => {
  return (
    <div>
      <div className="grid ml-4 ">
        <div className="bg-white dark:bg-[#13161B] rounded-[12px] xl:mb-[0.625vw] mb-[12px] p-4">
          <div className="flex justify-between">
            <div className="text-[16px] xl:text-[0.833vw] font-medium">
              Placement by Position
            </div>
          </div>
          <div className="xl:h-[20.833vw] h-[400px]">
            <StackVerticalBarChart
              legend={{
                show: true,
                icon: "roundRect",
                bottom: "0%",
                left: "0%",
                itemWidth: 10,
                itemHeight: 10,
                textStyle: {
                  color: "#53565A",
                  fontSize: 10,
                },
              }}
              grid={{
                top: "10%",
                left: "0%",
                right: "0%",
                bottom: "10%",
                containLabel: true,
              }}
              data={[
                [122, 132, 145, 162, 178],
                [76, 87, 99, 105, 111],
                [30, 45, 49, 57, 67],
              ]}
              color={["#8276B1", "#FFCA6D", "#18B557"]}
              barname1={"Pre Teaching"}
              barname2={"Teaching"}
              barname3={"Field Work"}
              barWidth={"40%"}
              maxv={400}
              xAxisData={[
                "Spring 2020",
                "Summer 2020",
                "Spring 2021",
                "Summer 2021",
                "Spring 2022",
              ]}
              xAxisLabel={{
                show: true,
                color: "#424242",
                fontSize: 11,
                width: 80,
                overflow: "break",
                interval: 0,
              }}
            />
          </div>
        </div>

        <div className="w-full mt-2 bg-white dark:bg-[#13161B] dark:border-[#1F2A37] rounded-[12px] xl:mb-[1.667vw] mb-[32px] p-4">
          <div className="px-[20px] xl:px-[1.042vw] py-[10px] xl:py-[0.521vw] flex justify-between border-b dark:border-[#1F2A37]">
            <div className="xl:text-[0.833vw] text-[16px] font-medium text-[#262626] dark:text-[#fff]">
              Cross Dimension - Placements
            </div>
            <div className="flex gap-2">
              <div className="flex flex-col bg-[#FFFAFB] dark:bg-[#1C2026] xl:px-[0.833vw] xl:py-[0.417vw] px-4 py-2 rounded-lg border dark:border-[#1F2A37]">
                <span className="xl:text-[0.521vw] text-[10px] text-[#888] font-normal">
                  Vertical Dimension
                </span>
                <span className="xl:text-[0.729vw] text-[14px] text-[#262626] dark:text-[#fff] font-normal">
                  Position
                </span>
              </div>
              <div className="flex flex-col bg-[#FFFAFB] dark:bg-[#1C2026] xl:px-[0.833vw] xl:py-[0.417vw] px-4 py-2 rounded-lg border dark:border-[#1F2A37]">
                <span className="xl:text-[0.521vw] text-[10px] text-[#888] font-normal">
                  Horizontal Dimension
                </span>
                <span className="xl:text-[0.729vw] text-[14px] text-[#262626] dark:text-[#fff] font-normal">
                  Subject
                </span>
              </div>
              <div className="flex bg-[#fff] dark:bg-[#13161B] dark:border-[#1F2A37] rounded-lg border">
                <div className="flex px-[16px] xl:px-[0.833vw] items-center gap-[8px] xl:gap-[0.417vw] dark:text-[#818181]">
                  <i className="cgupod-setting-candle"></i>
                  <span className="text-[12px] xl:text-[0.625vw] text-[#888]">
                    Configure
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[16px] xl:mt-[0.833vw] flex justify-center items-center
           border border-[#EAE0E0] dark:border-[#1F2A37] text-[14px] xl:text-[0.729vw] text-[#262626] font-semibold
           rounded-t-md p-[20px] xl:p-[1.042vw] dark:text-[#fff]">
          Subject
          </div>
          <table className="mb-4 w-full">
            <thead className="border dark:border-[#1F2A37]">
              <tr className="text-[14px] xl:text-[0.729vw] text-[#262626] font-normal dark:text-[#fff]">
                <th className="p-[12px] xl:p-[0.625vw]">Position</th>
                <th className="p-[12px] xl:p-[0.625vw]">Math</th>
                <th className="p-[12px] xl:p-[0.625vw]">English</th>
                <th className="p-[12px] xl:p-[0.625vw]">Science</th>
                <th className="p-[12px] xl:p-[0.625vw]">Multiple Subject</th>
                <th className="p-[12px] xl:p-[0.625vw]">History</th>
              </tr>
            </thead>
            <tbody className="text-[#424242] dark:text-[#AAA]">
              <tr className="text-center border dark:border-[#1F2A37] text-[14px] xl:text-[0.729vw] ">
                <td className="p-[16px] xl:p-[0.833vw] font-bold">Field Work</td>
                <td>10</td>
                <td>12</td>
                <td>14</td>
                <td>16</td>
                <td>16</td>
              </tr>
              <tr className="text-center border dark:border-[#1F2A37] text-[14px] xl:text-[0.729vw]">
                <td className="bg-[#FCF5F6] dark:bg-[#1C2026] p-[16px] xl:p-[0.833vw] font-bold">Teaching</td>
                <td className="bg-[#FCF5F6] dark:bg-[#1C2026]">14</td>
                <td className="bg-[#FCF5F6] dark:bg-[#1C2026]">17</td>
                <td className="bg-[#FCF5F6] dark:bg-[#1C2026]">19</td>
                <td className="bg-[#FCF5F6] dark:bg-[#1C2026]">22</td>
                <td className="bg-[#FCF5F6] dark:bg-[#1C2026]">22</td>
              </tr>
              <tr className="text-center border dark:border-[#1F2A37] text-[14px] xl:text-[0.729vw]">
                <td className="p-[16px] xl:p-[0.833vw] font-bold">
                Pre Teaching
                </td>
                <td>16</td>
                <td>18</td>
                <td>22</td>
                <td>43</td>
                <td>43</td>
    
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlacementByPosition;
