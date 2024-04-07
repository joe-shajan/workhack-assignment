import { FunctionComponent } from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import Footer from "../components/Footer";
import { AISummary } from "../components/summary/AISummary";
import AnalysisItem from "../components/AnalysisItem";

const summaryData = {
  ratings: {
    ["form usability"]: "3.0",
    ["nudgets & incentives"]: "2.4",
    ["form intelligence"]: "4.4",
    ["conversion optimisation"]: "3.4",
  },
  overallRating: "3.0",
  summary: [
    {
      heading: "form usability",
      icon: "/palette.svg",
      shortSummary: `Simplify conditional logic and ensure essential fields only.
      Consider multi-step forms and label placement for better
      usability.`,
      summaryPoints: [
        {
          heading:
            "Simplify logic flow and consider a multi-step form with a progress indicator to increase conversions.",
          subHeading:
            "The form follows a single-column layout but has complex conditional paths.",
        },
        {
          heading:
            "Ensure labels are left-aligned or above fields to boost readability and conversions.",
          subHeading:
            "Form layout specifics are unclear, but a straightforward approach is suggested.",
        },
        {
          heading:
            "Review and ensure all fields are necessary, possibly reducing fields to 3 to lower abandonment rates.",
          subHeading:
            "The form has a mix of required and optional fields, with conditional logic to reduce visible fields.",
        },
      ],
    },
    {
      heading: "nudges & incentives",
      icon: "/laptop02.svg",
      shortSummary: `Leverage persuasive language and clear incentives to boost form completion. Optimize CTAs for better engagement.`,
      summaryPoints: [
        {
          heading: `Use persuasive, action-oriented CTAs and integrate words like "free" and "easy".`,
          subHeading: `The CTA is action-oriented and positive, avoiding the word "Submit".`,
        },
        {
          heading:
            "Clearly communicate the value of the free session to increase completion rates.",
          subHeading: "A free coaching session is offered as an incentive.",
        },
      ],
    },
    {
      heading: "form intelligence",
      icon: "/lightningfilled.svg",
      shortSummary: `Leverage AI for assistance and data enrichment. Enhance personalization for a tailored user experience.`,
      summaryPoints: [
        {
          heading: `Clarify the character count indicator by specifying whether it's a minimum or maximum`,
          subHeading: `Why? Clarify the character count indicator by specifying whether it's a minimum or maximum limit`,
        },
        {
          heading:
            "Clarify the character count indicator by specifying whether it's a minimum or maximum ",
          subHeading:
            "Why? Clarify the character count indicator by specifying whether it's a minimum or maximum limit",
        },
      ],
    },
    {
      heading: "conversion optimisation",
      icon: "/filterfunnel02.svg",
      shortSummary: `Implement progress saving and re-engagement strategies. Optimize fields and include social proof to enhance conversions.`,
      summaryPoints: [
        {
          heading: `Clarify the character count indicator by specifying whether it's a minimum or maximum`,
          subHeading: `Why? Clarify the character count indicator by specifying whether it's a minimum or maximum limit`,
        },
        {
          heading:
            "Clarify the character count indicator by specifying whether it's a minimum or maximum ",
          subHeading:
            "Why? Clarify the character count indicator by specifying whether it's a minimum or maximum limit",
        },
      ],
    },
  ],
};

const DetailedReport: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-gray-400 overflow-hidden flex flex-col items-start justify-start gap-[94px] tracking-[normal] sm:gap-[47px_94px] xs:gap-[23px_94px]">
      <main className="self-stretch flex flex-col items-end justify-start gap-[56.3px] max-w-full sm:gap-[28px_56.3px]">
        <Header />
        <Title />
        <section className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full text-left text-13xl text-midnightblue-200 font-text-base-regular">
          <div className="w-[1101px] flex flex-row items-start justify-start relative max-w-full">
            <div className="h-[512px] w-[1439.5px] absolute   top-[96px] left-[-170px] flex items-center justify-center z-[0]">
              <img
                className="h-full w-full object-contain absolute left-[0px] top-[67px] [transform:scale(2.389)]"
                alt=""
                src="/glassmorphism.svg"
              />
            </div>
            <div className="h-[2390px] w-[1090px] absolute   right-[-17px] bottom-[-18px] rounded-[34px] bg-gray-700 z-[1]" />
            <div className="flex-1 rounded-[26px] bg-ghostwhite-100 overflow-hidden flex flex-col items-start justify-start pt-6 px-8 pb-[51px] box-border gap-[32px] max-w-full z-[2] lg:pt-5 lg:pb-[21px] lg:box-border sm:gap-[16px_32px] sm:pb-5 sm:box-border">
              <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-4 box-border gap-[16px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                  <div className="relative tracking-[-0.04em] md:text-7xl xs:text-lgi">
                    <span className="font-semibold">{`Acme Inc. `}</span>
                    <span>FormRoast</span>
                  </div>
                  <div className="h-9 flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
                    <img
                      className="w-[26.1px] h-[30px] relative object-cover"
                      loading="lazy"
                      alt=""
                      src="/globe.png"
                    />
                  </div>
                </div>
                <AISummary summaryData={summaryData} />
              </div>
              <div className="self-stretch flex flex-row items-start justify-center pt-0 px-0 pb-4 box-border max-w-full text-5xl sm:text-sm text-white-white">
                <div className="rounded-3xl [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#a140f2] overflow-hidden flex flex-row items-start justify-start py-3 px-[31px] box-border whitespace-nowrap max-w-full">
                  <div className="relative tracking-[-0.02em] leading-[24px]">
                    <span>{`You’re missing out on `}</span>
                    <b>47%</b>
                    <span> of your leads!</span>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-11xl text-midnightblue-100">
                <div className="relative tracking-[-0.05em] leading-[28px] font-semibold md:text-5xl md:leading-[22px] xs:text-lg xs:leading-[17px]">
                  In depth analysis
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full text-lg text-gray-400 sm:gap-[16px_32px]">
                {summaryData.summary.map(({ heading, icon, summaryPoints }) => (
                  <AnalysisItem
                    icon={icon}
                    heading={heading}
                    summaryPoints={summaryPoints}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DetailedReport;
