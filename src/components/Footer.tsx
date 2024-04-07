import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <footer className="self-stretch bg-gray-200 overflow-hidden flex flex-row items-start justify-start pt-[114px] pb-[85px] pr-[386px] pl-[387px] box-border max-w-full text-center text-43xl font-text-base-regular lg:pl-[193px] lg:pr-[193px] lg:box-border sm:pl-24 sm:pr-24 sm:box-border xs:pt-[74px] xs:px-5 xs:pb-[55px] xs:box-border">
      <div className="w-[667px] flex flex-row items-start justify-start relative max-w-full">
        <img
          className="h-[299px] w-[1129px] absolute   right-[-245px] bottom-[-91px] object-cover"
          loading="lazy"
          alt=""
          src="/footer-img.png"
        />
        <div className="flex-1 relative tracking-[-0.06em] leading-[97%] font-semibold text-transparent !bg-clip-text [background:linear-gradient(255.64deg,_#fff,_rgba(230,_201,_255,_0.93)_51.5%,_rgba(205,_145,_255,_0.83))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block max-w-full z-[1] md:text-31xl md:leading-[48px] xs:text-18xl xs:leading-[36px]">{`Build better forms that are supercharged with AI `}</div>
      </div>
      <div className="w-[195px] flex flex-col items-start justify-start pt-[184px] px-0 pb-0 box-border ml-[-431px]">
        <button className="text-base font-text-base-regular text-white-white text-left cursor-pointer [border:none] py-4 px-5 bg-brand-500 self-stretch rounded-3xs flex flex-row items-start justify-start z-[1]">
          Try WorkHack today!
        </button>
      </div>
    </footer>
  );
};

export default Footer;
