import React, { useState, useRef } from "react";
import StackedProgressChart from "@/components/allchart/stackedprogresschart";
import HorizontalBarChart from "@/components/allchart/horizontalbarchart";
import VerticalBarChart from "@/components/allchart/verticalbarchart";
import { useTheme } from "next-themes";
import ReactEcharts from "echarts-for-react";
import { Carousel } from "primereact/carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Index() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const StatusSnapshotData = {
    label: ["Multiple Subject", "Science", "English"],
    value: [
      {
        value: 135,
        itemStyle: {
          color: "#8276B1",
        },
      },
      {
        value: 25,
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

  const PlacementTrendData = [
    {
      value: 350,
      itemStyle: {
        color: "#8276B1",
      },
    },
    {
      value: 300,
      itemStyle: {
        color: "#9E8D71",
      },
    },
    {
      value: 250,
      itemStyle: {
        color: "#8276B1",
      },
    },
    {
      value: 350,
      itemStyle: {
        color: "#9E8D71",
      },
    },
    {
      value: 300,
      itemStyle: {
        color: "#8276B1",
      },
    },
  ];

  const data = [
    [[5, 5, 9000, "Mean GPA\n 3.88", 212]],
    [[13, 5, 9000, "> 3.25 GPA\n 48%", 2016]],
    [[21, 5, 9000, "Avg. Int. Score\n 74%", 2017]],
  ];

  const CAGRchart = {
    title: {
      text: "GPA",
      textStyle: {
        fontSize: 16,
        fontWeight: "normal",
        color: currentTheme === 'dark' ? '#818181' : "#888888",
        
      },
    },

    tooltip: {
      backgroundColor: currentTheme == "dark" ? "#191A1E" : "#fff",
      borderColor: currentTheme == "dark" ? "#363A44" : "#EDEEF1",
      textStyle: {
        color: currentTheme == "dark" ? "#fff" : "#6C768B", // Set the text color
      },
    },
    grid: {
      left: "0",
      top: "-40%",
      right: "0",
    },
    xAxis: {
      type: "value",
      scale: true,
      min: 0,
      axisLabel: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      scale: true,

      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    series: [
      {
        name: "2015",
        data: data[0],
        type: "scatter",
        symbolSize: function (data) {
          console.log("symbol data :-", data);
          // return Math.sqrt(data[2]) / 5e2;
          return Math.sqrt(data[2]);
        },
        label: {
          show: true,
          color: currentTheme === "dark" ? "#FFFFFF" : "#424242",
          formatter: function (param) {
            return param.data[3];
          },
          // position: 'top'
        },
        normal: {
          focus: "series",
          show: true,
        },

        itemStyle: {
          color: currentTheme === "dark" ? "#312C49" : "#F7F7FB",
        },
      },
      {
        name: "2016",
        data: data[1],
        show: true,
        type: "scatter",
        symbolSize: function (data) {
          console.log("symbol data 1999:-", data);
          return Math.sqrt(data[2]);
        },
        label: {
          show: true,
          color: currentTheme === "dark" ? "#FFFFFF" : "#424242",
          formatter: function (param) {
            return param.data[3];
          },
          // position: 'top'
        },
        normal: {
          focus: "series",
          show: true,
        },

        itemStyle: {
          color: currentTheme === "dark" ? "#5D5384" : "#E0E0EF",
        },
      },
      {
        name: "2017",
        data: data[2],
        show: true,
        type: "scatter",
        symbolSize: function (data) {
          console.log("symbol data 1999:-", data);
          return Math.sqrt(data[2]);
        },
        label: {
          show: true,
          color: currentTheme === "dark" ? "#ffffff" : "#ffffff",
          formatter: function (param) {
            return param.data[3];
          },
          // position: 'top'
        },
        normal: {
          focus: "series",
          show: true,
        },

        itemStyle: {
          color: currentTheme === "dark" ? "#B3B0D5" : "#8276B1",
        },
      },
    ],
  };
  const [products, setProducts] = useState([]);
  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  return (
    <>
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={false}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="custm_swiper"
        >
      <div className="pl-[20px] xl:pl-[1.042vw]">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[15px] lg:gap-[24px] xl:gap-[1.250vw]">
            <SwiperSlide >
              {" "}
              <div className="col">
                <div className="bg-white dark:bg-[#13161B] h-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08)] rounded-[8px] xl:rounded-[0.417vw] p-[20px] xl:p-[1.042vw]">
                  <div className="flex justify-between">
                    <div className="col">
                      <div className="text-[#262626] dark:text-white text-[16px] xl:text-[0.833vw] font-medium">
                        Total Applicants
                      </div>
                      <div className="text-[#262626] dark:text-white text-[36px] xl:text-[1.875vw] font-semibold">
                        3,214
                      </div>
                    </div>
                    <div className="col">
                      <div className="text-[#262626] dark:text-white text-[16px] xl:text-[0.833vw] font-medium text-end">
                        4.2%
                        <i className="ml-[8px] xl:ml-[0.417vw] cgupod-circle-fill-r-up text-[#18B557] text-[20px] xl:text-[1.042vw]"></i>
                      </div>
                      <div className="text-[#888888] dark:text-[#818181] text-[12px] xl:text-[0.625vw]">
                        vs last month
                      </div>
                    </div>
                  </div>
                  <div className="w-full xl:h-[6.302vw] h-[121px]">
                    <StackedProgressChart
                      data={{
                        value1: [50],
                        value2: [20],
                      }}
                      color1={currentTheme === 'dark' ?  '#B3B0D5': '#8276B1'}
                      color2={"#9E8D71"}
                      lableshow1={false}
                      lableshow2={false}
                      borderRadius1={[2, 0, 0, 2]}
                      borderRadius2={[0, 2, 2, 0]}
                      grid={{
                        left: "0",
                        right: "0",
                        bottom: "0",
                        height: "60%",
                        containLabel: true,
                      }}
                    />
                  </div>
                  <div className="flex justify-between">
                    <div className="col">
                      <div className="text-[#8276B1] text-[16px] xl:text-[0.833vw] font-medium flex">
                        <i className="mr-[8px] xl:mr-[0.417vw] cgupod-preliminary text-[20px] xl:text-[1.042vw]"></i>
                        Preliminary
                      </div>
                      <div className="flex items-center gap-[8px] xl:gap-[0.417vw]">
                        <div className="text-[#262626] dark:text-white text-[24px] xl:text-[1.250vw] font-medium">
                          76%
                        </div>
                        <div className="text-[#888888] dark:text-[#818181] text-[16px] xl:text-[0.833vw]">
                          2443
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="text-[#9E8D71] text-[16px] xl:text-[0.833vw] font-medium">
                        Induction
                        <i className="ml-[8px] xl:ml-[0.417vw] cgupod-Induction text-[20px] xl:text-[1.042vw]"></i>
                      </div>
                      <div className="flex items-center justify-end gap-[8px] xl:gap-[0.417vw]">
                        <div className="text-[#262626] dark:text-white text-[24px] xl:text-[1.250vw] font-medium">
                          24%
                        </div>
                        <div className="text-[#888888] dark:text-[#818181] text-[16px] xl:text-[0.833vw]">
                          771
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="col">
                <div
                  className="bg-white dark:bg-[#13161B] h-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08)] rounded-[8px]
               xl:rounded-[0.417vw] p-[20px] xl:p-[1.042vw]"
                >
                  <div className="flex justify-between h-full">
                    <div className="col">
                      <div className="text-[#262626] dark:text-white text-[16px] xl:text-[0.833vw] font-medium">
                        Subject
                      </div>
                      <div className="text-[#262626] dark:text-white text-[36px] xl:text-[1.875vw] font-semibold">
                        577
                      </div>
                    </div>
                    <div className="col">
                      <div className="text-[#262626] dark:text-white text-[16px] xl:text-[0.833vw] font-medium text-end">
                        -5.1%
                        <i className="ml-[8px] xl:ml-[0.417vw] cgupod-circle-fill-r-down text-[#F82A2A] text-[20px] xl:text-[1.042vw]"></i>
                      </div>
                      <div className="text-[#888888] dark:text-[#818181] text-[12px] xl:text-[0.625vw]">
                        vs last month
                      </div>
                    </div>
                  </div>
                  <div className="w-full xl:h-[9.375vw] h-[180px]">
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
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="col">
                <div className="bg-white dark:bg-[#13161B] h-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08)] rounded-[8px] xl:rounded-[0.417vw] p-[20px] xl:p-[1.042vw]">
                  <div className="flex justify-between">
                    <div className="col">
                      <div className="text-[#262626] dark:text-white text-[16px] xl:text-[0.833vw] font-medium">
                        Term Snapshot
                      </div>
                      <div className="text-[#262626] dark:text-white text-[36px] xl:text-[1.875vw] font-semibold">
                        1,874
                      </div>
                    </div>
                    <div className="col">
                      <div className="text-[#262626] dark:text-white text-[16px] xl:text-[0.833vw] font-medium text-end">
                        0%{" "}
                        <i className="ml-[8px] xl:ml-[0.417vw] cgupod-circle-fill-minus text-[#F5D8DA] text-[20px] xl:text-[1.042vw]"></i>
                      </div>
                      <div className="text-[#888888] dark:text-[#818181] text-[12px] xl:text-[0.625vw]">
                        vs last month
                      </div>
                    </div>
                  </div>
                  <div className="xl:h-[9.375vw] h-[180px]">
                    <VerticalBarChart
                      legend={{
                        show: false,
                      }}
                      grid={{
                        top: "12%",
                        right: "0%",
                        bottom: "5%",
                        left: "0%",
                        containLabel: true,
                      }}
                      barcolor={[""]}
                      labelposition={["insideTop"]}
                      xAxisLabeldata={[
                        "Spring’20",
                        "Summer’20",
                        "Spring’21",
                        "Summer’21",
                        "Spring’22",
                      ]}
                      name={["DFW Rate"]}
                      minvalue={0}
                      intervalvalue={100}
                      maxvalue={400}
                      data={PlacementTrendData}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="col">
                <div className="bg-white dark:bg-[#13161B] h-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08)] rounded-[8px] xl:rounded-[0.417vw] p-[20px] xl:p-[1.042vw]">
                  <div className="flex justify-between">
                    <div className="col">
                      <div className="text-[#262626] dark:text-white text-[16px] xl:text-[0.833vw] font-medium">
                        Quick Glance
                      </div>
                      <div className="text-[#262626] dark:text-white text-[36px] xl:text-[1.875vw] font-semibold">
                        78%
                      </div>
                    </div>
                    <div className="col">
                      <div className="text-[#262626] dark:text-white text-[16px] xl:text-[0.833vw] font-medium text-end">
                        4.2%
                        <i className="ml-[8px] xl:ml-[0.417vw] cgupod-circle-fill-r-up text-[#18B557] text-[20px] xl:text-[1.042vw]"></i>
                      </div>
                      <div className="text-[#888888] dark:text-[#818181] text-[12px] xl:text-[0.625vw]">
                        vs last month
                      </div>
                    </div>
                  </div>
                  <div className="w-full xl:h-[9.375vw] h-[180px]">
                    <ReactEcharts height={"100%"} option={CAGRchart} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="col">
                <div className="bg-white dark:bg-[#13161B] h-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08)] rounded-[8px] xl:rounded-[0.417vw] p-[20px] xl:p-[1.042vw]">
                  <div className="flex justify-between">
                    <div className="col">
                      <div className="text-[#262626] dark:text-white text-[16px] xl:text-[0.833vw] font-medium">
                        Total Applicants
                      </div>
                      <div className="text-[#262626] dark:text-white text-[36px] xl:text-[1.875vw] font-semibold">
                        3,214
                      </div>
                    </div>
                    <div className="col">
                      <div className="text-[#262626] dark:text-white text-[16px] xl:text-[0.833vw] font-medium text-end">
                        4.2%
                        <i className="ml-[8px] xl:ml-[0.417vw] cgupod-circle-fill-r-up text-[#18B557] text-[20px] xl:text-[1.042vw]"></i>
                      </div>
                      <div className="text-[#888888] dark:text-[#818181] text-[12px] xl:text-[0.625vw]">
                        vs last month
                      </div>
                    </div>
                  </div>
                  <div className="w-full xl:h-[6.302vw] h-[121px]">
                    <StackedProgressChart
                      data={{
                        value1: [50],
                        value2: [20],
                      }}
                      color1={currentTheme === 'dark' ?  '#B3B0D5': '#8276B1'}
                      color2={"#9E8D71"}
                      lableshow1={false}
                      lableshow2={false}
                      borderRadius1={[2, 0, 0, 2]}
                      borderRadius2={[0, 2, 2, 0]}
                      grid={{
                        left: "0",
                        right: "0",
                        bottom: "0",
                        height: "60%",
                        containLabel: true,
                      }}
                    />
                  </div>
                  <div className="flex justify-between">
                    <div className="col">
                      <div className="text-[#8276B1] text-[16px] xl:text-[0.833vw] font-medium flex">
                        <i className="mr-[8px] xl:mr-[0.417vw] cgupod-preliminary text-[20px] xl:text-[1.042vw]"></i>
                        Preliminary
                      </div>
                      <div className="flex items-center gap-[8px] xl:gap-[0.417vw]">
                        <div className="text-[#262626] dark:text-white text-[24px] xl:text-[1.250vw] font-medium">
                          76%
                        </div>
                        <div className="text-[#888888] dark:text-[#818181] text-[16px] xl:text-[0.833vw]">
                          2443
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="text-[#9E8D71] text-[16px] xl:text-[0.833vw] font-medium">
                        Induction
                        <i className="ml-[8px] xl:ml-[0.417vw] cgupod-Induction text-[20px] xl:text-[1.042vw]"></i>
                      </div>
                      <div className="flex items-center justify-end gap-[8px] xl:gap-[0.417vw]">
                        <div className="text-[#262626] dark:text-white text-[24px] xl:text-[1.250vw] font-medium">
                          24%
                        </div>
                        <div className="text-[#888888] dark:text-[#818181] text-[16px] xl:text-[0.833vw]">
                          771
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="col">
                <div className="bg-white dark:bg-[#13161B] h-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08)] rounded-[8px] xl:rounded-[0.417vw] p-[20px] xl:p-[1.042vw]">
                  <div className="flex justify-between">
                    <div className="col">
                      <div className="text-[#262626] dark:text-white text-[16px] xl:text-[0.833vw] font-medium">
                        Subject
                      </div>
                      <div className="text-[#262626] dark:text-white text-[36px] xl:text-[1.875vw] font-semibold">
                        577
                      </div>
                    </div>
                    <div className="col">
                      <div className="text-[#262626] dark:text-white text-[16px] xl:text-[0.833vw] font-medium text-end">
                        -5.1%
                        <i className="ml-[8px] xl:ml-[0.417vw] cgupod-circle-fill-r-down text-[#F82A2A] text-[20px] xl:text-[1.042vw]"></i>
                      </div>
                      <div className="text-[#888888] dark:text-[#818181] text-[12px] xl:text-[0.625vw]">
                        vs last month
                      </div>
                    </div>
                  </div>
                  <div className="w-full xl:h-[9.375vw] h-[180px]">
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
            </SwiperSlide>
          </div>
      </div>
        </Swiper>
      {/* row */}
    </>
  );
}
