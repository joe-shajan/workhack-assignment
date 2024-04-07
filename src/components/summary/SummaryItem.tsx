import { FunctionComponent } from "react";

export type SummaryItemType = {
  icon?: string;
  headding?: string;
  text?: string;
};

const SummaryItem: FunctionComponent<SummaryItemType> = ({
  icon,
  headding,
  text,
}) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
      <div className="w-[448px] h-[31px] flex flex-row items-center justify-start gap-[206px] max-w-full">
        <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0"
            loading="lazy"
            alt="icon"
            src={icon}
          />
          <div className="relative tracking-[-0.04em] font-semibold xs:text-lgi capitalize">
            {headding}
          </div>
        </div>
      </div>

      <div className="self-stretch rounded-2xl bg-whitesmoke-200 flex flex-row items-center justify-center py-4 px-6 box-border max-w-full text-lg text-gray-400">
        <div className="flex-1 flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch relative tracking-[-0.04em] leading-[22px]">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryItem;
