import SummaryItem from "./SummaryItem";

const Chart = ({ ratings, overallRating }: any) => {
  return (
    <div className="flex-1 bg-whitesmoke-100 box-border overflow-hidden flex flex-col items-start justify-start pt-8 pb-[52px] pr-3.5 pl-[31px] gap-[41px] min-w-[339px] max-w-full border-r-[2px] border-solid border-whitesmoke-400 sm:gap-[20px_41px] sm:pt-[21px] sm:pb-[34px] sm:box-border sm:min-w-full">
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-full text-11xl text-midnightblue-100">
        <div className="flex-1 flex flex-col items-center justify-center gap-[16px] max-w-full">
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px] sm:flex-wrap">
            <div className="relative tracking-[-0.04em] font-semibold md:text-5xl xs:text-lg">
              AI Summary
            </div>
            <div className="w-[109px] rounded-[14px] bg-palegoldenrod box-border flex flex-row items-center justify-center py-4 px-2.5 gap-[2px] text-13xl text-darkolivegreen-100 border-[1.5px] border-solid border-goldenrod">
              <b className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[48px] md:text-7xl md:leading-[22px] xs:text-lgi xs:leading-[17px]">
                {overallRating}
              </b>
              <div className="flex justify-end flex-col text-lg text-darkolivegreen-200 min-w-[35px]">
                /5.0
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[462px] flex flex-row items-start justify-center pt-0 px-5 pb-20 box-border max-w-full">
        <div className="w-[110px] flex flex-col items-start justify-start gap-[4px]">
          <div className="flex flex-row items-start justify-start py-0 px-[35px]">
            <div className="rounded-md bg-palegoldenrod flex flex-row items-start justify-start py-0.5 px-2">
              <b className="relative tracking-[-0.01em] leading-[28px] inline-block min-w-[24px]">
                3.0
              </b>
            </div>
          </div>
          <div className="self-stretch relative tracking-[-0.01em] leading-[20px] text-gray-400 text-center inline-block min-w-[110px]">
            Form Usability
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-end justify-start gap-[3.3px] min-h-[144px] max-w-full xs:h-auto">
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[25.5px] pl-[30px] box-border max-w-full">
          <div className="h-[32.7px] flex-1 relative max-w-full xs:h-auto xs:min-h-[32.700000000000045]">
            <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-between gap-[20px] max-w-full xs:flex-wrap">
              <div className="rounded-md bg-palegoldenrod flex flex-row items-start justify-start py-0.5 px-2">
                <b className="relative tracking-[-0.01em] leading-[28px] inline-block min-w-[24px]">
                  3.4
                </b>
              </div>
              <input
                className="w-10 [border:none] [outline:none] bg-peachpuff h-8 rounded-md flex flex-row items-start justify-start py-0.5 px-2 box-border font-text-base-regular font-bold text-base text-saddlebrown"
                placeholder="2.4"
                type="text"
              />
            </div>
            <img
              className="absolute top-[32px] left-[70px] w-[101px] h-[0.7px] z-[2]"
              alt=""
              src="/vector-17.svg"
            />
            <img
              className="absolute top-[32px] left-[234px] w-[101px] h-[0.7px] z-[2]"
              alt=""
              src="/vector-17.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between relative gap-[20px] text-gray-400 xs:flex-wrap">
          <div className="w-[100px] relative tracking-[-0.01em] leading-[20px] inline-block shrink-0">
            Conversion Optimisation
          </div>
          <div className="w-[91px] relative tracking-[-0.01em] leading-[20px] inline-block shrink-0">{`Nudges & Incentives`}</div>
          <div className="h-[252px] w-[248.7px] absolute   top-[-130px] left-[109.1px]">
            <img
              className="absolute top-[0px] left-[0px] w-[248.7px] h-[252px]"
              alt=""
              src="/group-34.svg"
            />
            <img
              className="absolute top-[54.9px] left-[45.8px] rounded-[5.27px] w-[138.8px] h-[182.3px] z-[1]"
              alt=""
              src="/vector-19.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-7 pl-5 text-green">
        <div className="flex flex-col items-start justify-start gap-[4px]">
          <div className="flex flex-row items-start justify-start py-0 px-[42px]">
            <div className="rounded-md bg-lightgoldenrodyellow flex flex-row items-start justify-start py-0.5 px-[7.5px]">
              <b className="relative tracking-[-0.01em] leading-[28px] inline-block min-w-[25px]">
                4.4
              </b>
            </div>
          </div>
          <div className="relative tracking-[-0.01em] leading-[28px] text-gray-400 inline-block min-w-[124px]">
            Form Intelligence
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-full text-lg text-gray-400">
        <div className="flex-1 relative tracking-[-0.02em] leading-[24px] font-semibold inline-block max-w-full">{`The form has several areas for improvement, including adding a phone number field, redesigning the 'Do you use any of these tools?' section, and adding incentives and trust badges. `}</div>
      </div>
    </div>
  );
};

const Summary = ({ summary }: any) => {
  return (
    <div className="w-[460px] flex flex-col items-start justify-start pt-[37px] px-0 pb-0 box-border min-w-[460px] max-w-full text-5xl text-midnightblue-300 sm:min-w-full md:flex-1">
      <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full xs:gap-[20px_40px]">
        {summary.map(({ icon, heading, shortSummary }: any) => (
          <SummaryItem icon={icon} headding={heading} text={shortSummary} />
        ))}
      </div>
    </div>
  );
};

export const AISummary = ({ summaryData }: any) => {
  const { overallRating, summary, ratings } = summaryData;
  return (
    <div className="self-stretch rounded-mid bg-white-white box-border overflow-hidden flex flex-row items-start justify-start py-0 pr-[23px] pl-0 gap-[29px] max-w-full text-base text-darkolivegreen-100 border-[2px] border-solid border-gray-800 md:flex-wrap md:p-5 md:box-border">
      <Chart ratings={ratings} overallRating={overallRating} />
      <Summary summary={summary} />
    </div>
  );
};
