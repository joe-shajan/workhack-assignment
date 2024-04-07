import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type AnalysisItemType = {
  icon?: string;
  heading?: string;
  summaryPoints?: any;
};

const Footer = () => (
  <div className="self-stretch rounded-md bg-ghostwhite-200 overflow-hidden flex flex-col items-center justify-center py-2 px-5 box-border max-w-full text-base">
    <div className="flex flex-row items-center justify-start gap-[12px] max-w-full">
      <img
        className="h-4 w-4 relative"
        loading="lazy"
        alt=""
        src="/star01.svg"
      />
      <div className="flex flex-row items-center justify-start gap-[4px] max-w-[calc(100%_-_28px)] sm:flex-wrap">
        <b className="relative tracking-[-0.02em] leading-[22px] inline-block min-w-[34px]">
          70%
        </b>
        <div className="relative tracking-[-0.02em] leading-[22px] inline-block max-w-full">
          Increase in conversion by making this change
        </div>
      </div>
    </div>
  </div>
);

type PointsType = {
  heading: any;
  subHeading: any;
};
const Points = ({ heading, subHeading }: PointsType) => {
  return (
    <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[10px] max-w-full">
      <div className="flex flex-row items-start justify-start p-0.5">
        <div className="h-[18px] w-[18px] relative rounded-[50%] box-border border-[1px] border-solid border-gray-900" />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[622px] max-w-full md:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch relative tracking-[-0.04em] leading-[22px] font-semibold">
            {heading}
          </div>
        </div>
        <div className="self-stretch relative text-base tracking-[-0.04em] leading-[22px] text-dimgray-200">
          {/* <span className="font-semibold">{`Why? `}</span> */}
          <span>{subHeading}</span>
        </div>
      </div>
    </div>
  );
};

export type HeadingType = {
  icon?: string;
  heading?: string;
};

const Heading = ({ icon, heading }: HeadingType) => (
  <div className="self-stretch rounded-md bg-whitesmoke-100 box-border overflow-hidden flex flex-row items-start justify-between py-4 px-6 max-w-full gap-[20px] text-gray-300 border-b-[1px] border-solid border-whitesmoke-300 md:flex-wrap">
    <div className="w-[730px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border max-w-full">
      <div className="self-stretch flex flex-row items-start justify-start gap-[10px] max-w-full sm:flex-wrap">
        <div className="h-[27.5px] flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0 box-border">
          <img className="w-6 h-6 relative" loading="lazy" alt="" src={icon} />
        </div>
        <div className="flex-1 flex flex-row items-start justify-start gap-[4px] min-w-[420px] max-w-full sm:flex-wrap sm:min-w-full">
          <div className="relative tracking-[-0.04em] font-semibold xs:text-lgi capitalize">
            {heading}
          </div>
          <div className="flex flex-col items-start justify-start pt-[12.5px] px-0 pb-0">
            <div className="w-1.5 h-1.5 relative rounded-[50%] bg-dimgray-100" />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0 box-border min-w-[291px] max-w-full text-xl text-dimgray-100">
            <div className="self-stretch relative tracking-[-0.02em] leading-[22px] xs:text-base xs:leading-[18px]">
              The overall usability and interaction is assessed
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-row items-start justify-start gap-[4px] text-sm text-darkolivegreen-300">
      <button className="cursor-pointer [border:none] p-2.5 bg-palegoldenrod rounded-2xs flex flex-row items-start justify-start hover:bg-khaki">
        <b className="relative text-xl tracking-[-0.01em] leading-[14px] inline-block font-text-base-regular text-darkolivegreen-100 text-left min-w-[30px] xs:text-base xs:leading-[22px]">
          3.0
        </b>
      </button>
      <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0">
        <div className="h-[21px] relative tracking-[-0.01em] leading-[28px] font-semibold inline-block shrink-0 min-w-[14px]">
          /5
        </div>
      </div>
    </div>
  </div>
);
const AnalysisItem: FunctionComponent<AnalysisItemType> = ({
  icon,
  heading,
  summaryPoints,
}) => {
  return (
    <div className="self-stretch rounded-mid bg-white-white box-border overflow-hidden flex flex-col items-start justify-start max-w-full text-left text-5xl text-gray-400 font-text-base-regular border-[2px] border-solid border-whitesmoke-400">
      <Heading icon={icon} heading={heading} />
      <div className="self-stretch flex flex-row items-center justify-start py-0 px-6 box-border max-w-full text-lg">
        <div className="flex-1 flex flex-col items-start justify-center py-8 px-0 box-border gap-[32px] max-w-full sm:gap-[16px_32px]">
          {summaryPoints.map(({ heading, subHeading }: any) => (
            <Points heading={heading} subHeading={subHeading} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AnalysisItem;
