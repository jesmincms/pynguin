import CountUp from "react-countup";

export default function Benefits() {
  return (
    <div className="flex justify-center flex-col items-center md:flex-row gap-5 md:gap-3 xl:gap-20 my-14 text-stone-900">
      <div className="w-[266px] h-40 bg-amber-200 rounded-[20px] shadow border border-stone-300 border-opacity-5 flex-col justify-center items-center gap-2.5 flex px-3">
        <div className="text-[40px] font-medium">
          <CountUp enableScrollSpy delay={2} end={14} />+
        </div>
        <div className="text-lg font-normal">Years in Business</div>
      </div>
      <div className="w-[266px] h-40 bg-amber-200 rounded-[20px] shadow border border-stone-300 border-opacity-5 flex-col justify-center items-center gap-2.5 flex px-3">
        <div className="text-[40px] font-medium">
          <CountUp enableScrollSpy delay={2} end={50} />+
        </div>
        <div className="text-lg font-normal">5 Star Google Reviews</div>
      </div>
      <div className="w-[266px] h-40 bg-amber-200 rounded-[20px] shadow border border-stone-300 border-opacity-5 flex-col justify-center items-center gap-2.5 flex px-3">
        <div className="text-[40px] font-medium">
          <CountUp enableScrollSpy delay={2} end={83} />%
        </div>
        <div className="text-lg font-normal">Tenant Renewal</div>
      </div>
      <div className="w-[266px] h-40 bg-amber-200 rounded-[20px] shadow border border-stone-300 border-opacity-5 flex-col justify-center items-center gap-2.5 flex px-3">
        <div className="text-[40px] font-medium">
          <CountUp enableScrollSpy delay={2} end={99.7} />%
        </div>
        <div className="text-lg font-normal">Rents Collected</div>
      </div>
      <div className="w-[266px] h-40 bg-amber-200 rounded-[20px] shadow border border-stone-300 border-opacity-5 flex-col justify-center items-center gap-2.5 flex px-3">
        <div className="text-[40px] md:text-[34px] lg:text-[40px] font-medium">
          <CountUp enableScrollSpy delay={2} end={13} /> mins
        </div>
        <div className="text-lg font-normal">Work order response time</div>
      </div>
    </div>
  );
}
