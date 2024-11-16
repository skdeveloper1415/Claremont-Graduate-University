import React, { useState, useRef } from "react";
import { Noto_Serif_Georgian } from "@next/font/google";
import Link from "next/link";
import { ScrollPanel } from "primereact/scrollpanel";
import { Checkbox } from "primereact/checkbox";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const FocusAreaTwo = () => {
  const [checked, setChecked] = useState(false);
  const [domain, setDomain] = useState("");
  const [competency, setCompetency] = useState("");
  const [notes, setNotes] = useState("");
  const [questions, setQuestions] = useState("");
  const [value, setValue] = useState("");
  const DomainList = [
    { name: "Philosophy of Education", code: "PE" },
    { name: "Pedagogy", code: "PM" },
    { name: "Science of Learning", code: "SL" },
    { name: "Socio-Emotional Learning", code: "SE" },
    { name: "Funds of Knowledge", code: "FK" },
    { name: "School Climate & Culture", code: "SC" },
    { name: "Community & Cultural Wealth", code: "CC" },
    { name: "Socio-Political Identity", code: "SP" },
    { name: "Global Perspective", code: "GP" },
  ];
  const CompetencyList = [
    {
      name: "2.4 Help candidates Level Up with Steadily Increasing Rigo",
      code: "SP",
    },
    { name: "2.5 Help candidates Level Up ", code: "GP" },
  ];
  const QuestionsList = [
    {
      name: "How and when should I adapt subject matter curriculum?",
      code: "PE",
    },
  ];

  return (
    <>
      <div className={myNotoSerifGeorgian.className}>
        <div className="text-[#262626] text-[32px] xl:text-[1.667vw]">
        Focus Area 2
        </div>
      </div>

      <div className="bg-white rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw] mt-[32px] xl:mt-[1.667vw] SidebarHeight">
        <ScrollPanel style={{ width: "100%", height: "100%" }}>
          <div className="xl:mb-[0.833vw] mb-[16px] grid gap-[20px] xl:gap-[1.042vw]">
            <div className="bg-[#FCF5F6] py-[16px] xl:py-[0.833vw] px-[20px] xl:px-[1.042vw] mb-[20px] xl:mb-[1.042vw] grid gap-[20px] xl:gap-[1.042vw] rounded-lg">
              <div className="flex flex-col gap-[6px]">
                <div className="text-[14px] xl:text-[0.729vw] text-[#262626] font-medium">
                  Domain
                </div>
                <div className="custInput">
                  <Dropdown
                    value={domain}
                    onChange={(e) => setDomain(e.value)}
                    options={DomainList}
                    optionLabel="name"
                    placeholder="--Select here --"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[6px]">
                <div className="text-[14px] xl:text-[0.729vw] text-[#262626] font-medium">
                  Competency
                </div>
                <div className="custInput">
                  <Dropdown
                    value={competency}
                    onChange={(e) => setCompetency(e.value)}
                    options={CompetencyList}
                    optionLabel="name"
                    placeholder="--Select here --"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[6px]">
                <div className="text-[14px] xl:text-[0.729vw] text-[#262626] font-medium">
                  Inquiry Questions for High-impact Practices
                </div>
                <div className="custInput">
                  <Dropdown
                    value={questions}
                    onChange={(e) => setQuestions(e.value)}
                    options={QuestionsList}
                    optionLabel="name"
                    placeholder="--Select here --"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[6px]">
                <div className="text-[14px] xl:text-[0.729vw] text-[#262626] font-medium">
                  Notes
                </div>
                <div className="custTextArea">
                  <InputTextarea
                    placeholder="Write text here ..."
                    autoResize
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={6}
                    cols={30}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            <div className="bg-[#FCF5F6] py-[16px] xl:py-[0.833vw] px-[20px] xl:px-[1.042vw] mb-[20px] xl:mb-[1.042vw] grid gap-[20px] xl:gap-[1.042vw] rounded-lg">
              <div className="flex flex-col gap-[6px]">
                <div className="text-[14px] xl:text-[0.729vw] text-[#262626] font-medium">
                  Domain
                </div>
                <div className="custInput">
                  <Dropdown
                    value={domain}
                    onChange={(e) => setDomain(e.value)}
                    options={DomainList}
                    optionLabel="name"
                    placeholder="--Select here --"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[6px]">
                <div className="text-[14px] xl:text-[0.729vw] text-[#262626] font-medium">
                  Competency
                </div>
                <div className="custInput">
                  <Dropdown
                    value={competency}
                    onChange={(e) => setCompetency(e.value)}
                    options={CompetencyList}
                    optionLabel="name"
                    placeholder="--Select here --"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[6px]">
                <div className="text-[14px] xl:text-[0.729vw] text-[#262626] font-medium">
                  Inquiry Questions for High-impact Practices
                </div>
                <div className="custInput">
                  <Dropdown
                    value={questions}
                    onChange={(e) => setQuestions(e.value)}
                    options={QuestionsList}
                    optionLabel="name"
                    placeholder="--Select here --"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[6px]">
                <div className="text-[14px] xl:text-[0.729vw] text-[#262626] font-medium">
                  Notes
                </div>
                <div className="custTextArea">
                  <InputTextarea
                    placeholder="Write text here ..."
                    autoResize
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={6}
                    cols={30}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            <div className="bg-[#FCF5F6] py-[16px] xl:py-[0.833vw] px-[20px] xl:px-[1.042vw] mb-[20px] xl:mb-[1.042vw] grid gap-[20px] xl:gap-[1.042vw] rounded-lg">
              <div className="flex flex-col gap-[6px]">
                <div className="text-[14px] xl:text-[0.729vw] text-[#262626] font-medium">
                  Domain
                </div>
                <div className="custInput">
                  <Dropdown
                    value={domain}
                    onChange={(e) => setDomain(e.value)}
                    options={DomainList}
                    optionLabel="name"
                    placeholder="--Select here --"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[6px]">
                <div className="text-[14px] xl:text-[0.729vw] text-[#262626] font-medium">
                  Competency
                </div>
                <div className="custInput">
                  <Dropdown
                    value={competency}
                    onChange={(e) => setCompetency(e.value)}
                    options={CompetencyList}
                    optionLabel="name"
                    placeholder="--Select here --"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[6px]">
                <div className="text-[14px] xl:text-[0.729vw] text-[#262626] font-medium">
                  Inquiry Questions for High-impact Practices
                </div>
                <div className="custInput">
                  <Dropdown
                    value={questions}
                    onChange={(e) => setQuestions(e.value)}
                    options={QuestionsList}
                    optionLabel="name"
                    placeholder="--Select here --"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[6px]">
                <div className="text-[14px] xl:text-[0.729vw] text-[#262626] font-medium">
                  Notes
                </div>
                <div className="custTextArea">
                  <InputTextarea
                    placeholder="Write text here ..."
                    autoResize
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={6}
                    cols={30}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            <div className="grid gap-[4px] xl:gap-[0.208vw]">
              <div className="text-[14px] xl:text-[0.729vw] text-[#262626] font-medium">
                Respond to the inquiry questions selected above and list the
                specific evidence or data (i.e. student behaviors, teacher
                moves, work samples, etc) that you would like your Clinical
                Faculty Advisor to collect regarding the target high-impact
                practice.
              </div>
              <div className="custTextArea">
                <InputTextarea
                  placeholder="Write text here ..."
                  autoResize
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={6}
                  cols={30}
                  className="w-full"
                />
              </div>
            </div>
            <div className="grid gap-[4px] xl:gap-[0.208vw]">
              <div className="text-[14px] xl:text-[0.729vw] text-[#262626] font-medium">
                What questions do you have about implementing this competency in
                your lesson?
              </div>
              <div className="custTextArea">
                <InputTextarea
                  placeholder="Write text here ..."
                  autoResize
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={6}
                  cols={30}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </ScrollPanel>
      </div>
      <div className="mt-[32px] lg:mt-[0] lg:absolute bottom-[-70px] left-0 right-0">
        <div className="flex items-center justify-between">
          <div className="col">
            <Link
              href="javascript:void(0)"
              className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] opacity-30 transition ease-in-out delay-150"
            >
              <i className="mr-[8px] xl:mr-[0.417vw] cgupod-close-circle text-[22px] xl:text-[1.146vw]"></i>
              Cancel
            </Link>
          </div>
          <div className="flex gap-1">
            <Link
              href="javascript:void(0)"
              className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] transition ease-in-out delay-150"
            >
              <i className="mr-[8px] xl:mr-[0.417vw] cgupod-save-file text-[22px] xl:text-[1.146vw]"></i>
              Save
            </Link>
            <Link
              href="javascript:void(0)"
              className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] transition ease-in-out delay-150"
            >
              <i className="mr-[8px] xl:mr-[0.417vw] cgupod-tick-circle text-[22px] xl:text-[1.146vw]"></i>
              Submit
            </Link>
            <Link
              href="javascript:void(0)"
              className="flex items-center bg-white hover:bg-[#AF1E27] border border-[#AF1E27] rounded-[8px] gap-[8px] xl:gap-[0.417vw]
                 xl:rounded-[0.417vw] text-[#AF1E27] hover:text-white text-[16px] xl:text-[0.833vw] px-[20px] xl:px-[1.042vw] py-[12px]
                 xl:py-[0.625vw] transition ease-in-out delay-150"
            >
              Next{" "}
              <i className="mr-[8px] xl:mr-[0.417vw] cgupod-arrow-right-line text-[18px] xl:text-[0.938vw]"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FocusAreaTwo;
