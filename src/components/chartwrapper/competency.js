import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import { OverlayPanel } from 'primereact/overlaypanel';
import { CSVLink } from "react-csv";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useReactToPrint } from "react-to-print";
import ReactFullscreen from 'react-easyfullscreen';
import ExcelDownloader from '../exportn/ExcelDownloader';
import PdfDownloader from '../exportn/PdfDownloader';
import { Dropdown } from "primereact/dropdown";

export default function ChartWrapper(props) {

  const [visible, setVisible] = useState(false);
  const [infoIcon, setInfoIcon] = useState(props.infoIcon);
  const [dropdown2, setDropdown2] = useState(props.dropdown2);
  const [dropdown1, setDropdown1] = useState(props.dropdown1);
  const [bulbIcon, setBulbIcon] = useState(props.bulbIcon);
  const [ExportIcon, setExportIcon] = useState(props.ExportIcon);
  const [graphIcon, setGraphIcon] = useState(props.ExportIcon);
  const [downloadIcon, setDownloadIcon] = useState(props.ExportIcon);
  const [maximizeIcon, setMaximizeIcon] = useState(props.maximizeIcon);
  const op = useRef(null);
  const Bots = useRef();
  const handleClick = (e) => {
    document.querySelector('body').classList.toggle('echartHeight');
  }

  //Print Function
  const handlePrintBots = useReactToPrint({
    content: () => Bots.current,
  });

  const { formatDownloadedData = [], formatFileName = 'Demo', isDetailedExport = false, disablepdf = false, title = 'abc', subtitle = 'abc', placeholder1 = 'Dimention', placeholder2 = 'Dimention2', data = [] } = props;

  const headers = [
    { label: "First Name", key: "id" },
    { label: "Last Name", key: "name" },
    { label: "Email", key: "value" },
    { label: "Age", key: "age" }
  ];

  const csvReport = {
    data: formatDownloadedData,
    headers: headers,
    filename: `${formatFileName}.csv`
  };

  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
  ];

  return (
    <div>
      <ReactFullscreen>
        {({ ref, onToggle, onExit }) => (
          <div ref={ref} className=' h-full'>
            <div>
              <div className='flex items-center justify-between pb-[16px] lg:pb-[24px] xl:pb-[1.25vw]'>
                <div className=''>
                  <div className={`text-[#262626] dark:text-[#FFF] text-[14px] xl:text-[0.938vw] font-medium  ${props.text}`}>
                    <p>{props.title}</p>
                  </div>
                  <div className={`text-[#6C768B] text-[14px] xl:text-[0.729vw] font-normal  ${props.text}`}><p>{props.subtitle}</p></div>
                </div>
                <div className='space-x-[16px] optionbtn flex items-center wrapper_icons custm_dropdwon text-[#6C768B] dark:text-[#B3B9C6]'>
                  {
                    dropdown1 == true ?
                      <Dropdown
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.value)}
                        options={cities}
                        optionLabel="name"
                        placeholder={props.placeholder1}
                        className="w-full xl:w-[10.417vw] md:h-[40px]"
                        style={{ border: "1px solid #DDE1EA", borderRadius: "8px" }}
                      />
                      : null
                  }
                  {
                    dropdown2 == true ?
                      <Dropdown
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.value)}
                        options={cities}
                        optionLabel="name"
                        placeholder={props.placeholder2}
                        className="w-full xl:w-[10.417vw] md:h-[40px]"
                        style={{ border: "1px solid #DDE1EA", borderRadius: "8px" }}
                      />
                      : null
                  }
                  {
                    graphIcon == true ?
                      <Link href='' className='leading-none'><i className='cgupod-search text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.94vw] align-top dark:text-[#AAAAAA]'></i></Link>
                      : null
                  }                  
                  {
                    downloadIcon == true ?
                      <Link href='' className='leading-none'><i className='cgupod-barchart text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.94vw] align-top dark:text-[#AAAAAA]'></i></Link>
                      : null
                  }                  
                  {
                    bulbIcon == true ?
                      <Link href='' className='leading-none'><i className='cgupod-circle-info text-[#424242] dark:text-[#AAAAAA] text-[14px] xl:text-[0.94vw] align-top dark:text-[#AAAAAA]'></i></Link>
                      : null
                  }                  
                                  
                  {
                    maximizeIcon == true ?
                      <Link href=''
                        className='leading-none'
                        onClick={() => {
                          onToggle();
                        }}
                      >
                        <i onClick={handleClick} className='redingtonHR-info text-[14px] xl:text-[0.94vw] align-top'>Maximize</i></Link>
                      : null
                  }
                  {
                    ExportIcon == true ?
                      <div>
                        <div className="card flex">
                          <button onClick={(e) => op.current.toggle(e)}>
                            <div className="cursor-pointer flex items-center leading-none">
                              <i className='cgupod-more-square dark:text-[#AAAAAA] text-[14px] xl:text-[0.94vw] align-top' ></i>
                            </div>
                          </button>
                          <OverlayPanel ref={op} className="dropdownList">
                            <div className='flex flex-col text-left gap-y-2 wrapperOption text-[14px] xl:text-[0.730vw] text-[#363A44] dark:text-[#B3B9C6]'>
                              <button className='flex gap-2 items-center hover:text-[#4FB155] dark:hover:text-[#4FB155] ease-linear duration-200' href='' onClick={() => { handlePrintBots(); onExit(); }}>
                                <i className='pi pi-print '></i>
                                <span>Print to pdf</span>
                              </button>
                              <button className='flex gap-2 items-center hover:text-[#4FB155] dark:hover:text-[#4FB155] ease-linear duration-200'>
                              <i className='pi pi-download '></i>
                              <CSVLink {...csvReport}>Export to CSV</CSVLink>
                              </button>
                              <div className='flex gap-2 items-center cursor-pointer hover:text-[#4FB155] dark:hover:text-[#4FB155] ease-linear duration-200'>
                                <i className='pi pi-download '></i>
                                <ExcelDownloader data={formatDownloadedData} />
                              </div>
                              <div className='flex gap-2 items-center cursor-pointer hover:text-[#4FB155] dark:hover:text-[#4FB155] ease-linear duration-200'>
                                <i className='pi pi-download '></i>
                                <PdfDownloader
                                  title={title}
                                  isDetailedExport={isDetailedExport}
                                  data={formatDownloadedData}
                                  id={props.id}
                                /></div>
                            </div>
                          </OverlayPanel>
                        </div>
                      </div>
                      : null
                  }
                </div>
              </div>
              <div className="">
                <div className='grid grid-cols-1 wrapper_icons center-content'>
                  <div ref={Bots}>
                    {props.data}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </ReactFullscreen>
    </div>
  )
}