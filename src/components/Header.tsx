import { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
  return (
    <header className="self-stretch flex flex-row items-start justify-between py-[19.2px] pr-14 pl-[66.8px] gap-[20px] text-left text-3xl-6 text-white-white font-inter sm:pl-[33px] sm:pr-7 sm:box-border">
      <div className="w-[136.1px] flex flex-col items-start justify-start pt-[6.2px] px-0 pb-0 box-border">
        <div className="self-stretch flex flex-row items-start justify-start gap-[11.4px]">
          <div className="h-[26px] flex flex-col items-start justify-start pt-[1.4px] px-0 pb-0 box-border">
            <img
              className="w-[21.7px] h-[24.6px] relative object-cover"
              loading="lazy"
              alt=""
              src="/logo.png"
            />
          </div>
          <b className="flex-1 relative tracking-[-0.04em] whitespace-nowrap">
            workhack
          </b>
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-2.5 px-4 bg-brand-500 rounded-lg flex flex-row items-start justify-start gap-[8px]">
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
          alt=""
          src="/plus.svg"
        />
        <div className="relative text-sm tracking-[-0.02em] leading-[20px] font-text-base-regular text-white-white text-left inline-block min-w-[47px] whitespace-nowrap">
          Sign up
        </div>
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
          alt=""
          src="/chevrondown.svg"
        />
      </button>
    </header>
  );
};

export default Header;
