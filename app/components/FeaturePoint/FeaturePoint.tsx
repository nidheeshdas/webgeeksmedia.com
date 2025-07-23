interface FeaturePointProps {
  iconSrc: string;
  title: string;
  description: string;
}

export function FeaturePoint({ iconSrc, title, description }: FeaturePointProps) {
  return (
    <div className="flex gap-5 items-start">
      <div className="bg-green-400 rounded-lg flex items-center justify-center size-14 shrink-0">
        <img src={iconSrc} alt={title} className="w-9 h-9" />
      </div>
      <div className="flex flex-col gap-[9px]">
        <h3 className="font-satoshi text-[24px] font-bold text-black leading-[32px]">{title}</h3>
        <p className="font-satoshi text-[17px] text-gray-600 leading-normal">{description}</p>
      </div>
    </div>
  );
}