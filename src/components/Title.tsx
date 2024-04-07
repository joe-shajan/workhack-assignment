import { FunctionComponent } from "react";

const Title: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] text-center text-17xl text-white-white font-text-base-regular">
      <div className="w-[285px] flex flex-col items-start justify-start gap-[32px] xs:gap-[16px_32px]">
        <div className="flex flex-row items-start justify-start py-0 px-[13px]">
          <div className="w-[259px] relative tracking-[-0.04em] leading-[28px] font-medium inline-block md:text-10xl md:leading-[22px] xs:text-3xl xs:leading-[17px]">
            Your form report
          </div>
        </div>
        <div className="self-stretch rounded-smi [background:linear-gradient(94.97deg,_rgba(255,_255,_255,_0.07),_rgba(255,_255,_255,_0))] flex flex-row items-start justify-start py-[5px] px-[3px] border-[0.5px] border-solid border-gray-600">
          <button className="cursor-pointer [border:none] p-0 bg-gray-500 h-14 flex-1 relative rounded-3xs">
            <img
              className="absolute top-[18px] left-[24px] w-5 h-5 overflow-hidden hidden"
              alt=""
              src="/plus.svg"
            />
            <img
              className="absolute top-[18px] left-[115px] w-5 h-5 overflow-hidden hidden"
              alt=""
              src="/chevrondown.svg"
            />
            <div className="absolute top-[6px] left-[67px] w-[186px] h-11 flex flex-col items-end justify-center p-2.5 box-border">
              <img className="w-6 h-6 relative z-[1]" alt="" src="/share.svg" />
            </div>
            <div className="absolute top-[16px] left-[39px] text-base tracking-[-0.02em] leading-[24px] font-semibold font-text-base-regular text-white-white text-left z-[1]">
              Share report snapshot
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Title;
