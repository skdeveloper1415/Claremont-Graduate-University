import { Noto_Serif_Georgian } from "@next/font/google";
import { ScrollPanel } from "primereact/scrollpanel";

const myNotoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const FinalRubrics = () => {
  return (
    <>
      <div className={myNotoSerifGeorgian.className}>
        <div className="text-[#262626] text-[32px] xl:text-[1.667vw]">
          Domain 1 : Philosophy of Education
        </div>
        <p className="text-sm text-[#888]">
          Relationships: Purpose, Self, Content
        </p>
      </div>
 
      <div className="PersonalDetails">
        <ScrollPanel style={{ width: "100%", height: "100%" }}>
          <div
            className="bg-white rounded-[8px] xl:rounded-[0.417vw] px-[40px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw]
       mt-[32px] xl:mt-[1.667vw] relative"
          >
            <div className="gap-[16px] xl:gap-[0.833vw] flex flex-col mb-6">
              <div className="text-[16px] xl:text-[1.042vw] font-medium text-[#262626]">
                Use the rubric below to asses candidates' progress in enacting
                each of CGU's Critical Social Justice Competencies.
              </div>
              <div className="bg-[#FCF5F6] px-5 py-4 rounded-lg">
                <div className="text-[14px] xl:text-[1vw] font-medium mb-1 text-[#262626]">
                  For each competency strand, assign candidates a score of 1-5.*
                </div>
                <div className="border py-3 px-4 bg-white rounded-lg">
                  <div className="text-sm font-normal text-[#888]">
                    The source of evidence may include but is not limited to:
                  </div>
                  <ul className="list-disc pl-6 flex flex-col gap-1">
                    <li className="text-sm font-normal text-[#888]">PODs</li>
                    <li className="text-sm font-normal text-[#888]">
                      Informals (documented)
                    </li>
                    <li className="text-sm font-normal text-[#888]">
                      Discussion with candidates
                    </li>
                    <li className="text-sm font-normal text-[#888]">
                      Observations of candidates
                    </li>
                    <li className="text-sm font-normal text-[#888]">
                      Planning materials produced by candidates
                    </li>
                    <li className="text-sm font-normal text-[#888]">
                      Candidate’s response to feedback
                    </li>
                    <li className="text-sm font-normal text-[#888]">
                      Candidate’s efforts in meeting the competency
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollPanel>
      </div>
    </>
  );
};

export default FinalRubrics;
