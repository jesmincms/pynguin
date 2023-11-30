export default function WhenItComes() {
  return (
    <div className="max-w-[1556px] flex flex-col lg:flex-row mx-auto text-stone-900 justify-between gap-5 lg:gap-16 mt-[30px]">
      <img
        className="max-w-[771px] max-h-[527px] rounded-[40px] lg:w-1/2 h-auto object-contain"
        src="/images/Rectangle 52.png"
        alt=""
      />
      <div className="flex flex-col justify-center text-left">
        <div className="max-w-[721px] text-[28px] md:text-[36px] lg:text-[55px] font-normal leading-tight">
          March into better property management with Pynguin.
        </div>
        <div className="text-base font-normal leading-relaxed mt-[16px] lg:mt-[47px]">
          Welcome to a different kind of property management company. One that
          believes that life should be enjoyed, not spent sweating the small
          stuff(or even the big stuff) when it comes to your rental property. At
          Pynguin Property Management, we make owning rental property easy. We
          care about you, your property, and your tenant.
        </div>

        <div className="gap-5 flex mt-5 lg:mt-20">
          <button className="px-10 py-3 bg-amber-400 rounded-[10px] justify-center items-center gap-1.5 flex text-base font-medium">
            Services & Pricing
          </button>
          <button className="px-10 py-3 rounded-[10px] border border-stone-900 justify-center items-center gap-1.5 flex text-base font-medium">
            Schedule a Call
          </button>
        </div>
        <div className="items-center gap-2.5 flex mt-8">
          <div className=" text-[28px] sm:text-[40px] font-medium">4.8</div>
          <div className="flex">
            <img src="/icons/star.svg" alt="" />
            <img src="/icons/star.svg" alt="" />
            <img src="/icons/star.svg" alt="" />
            <img src="/icons/star.svg" alt="" />
            <img src="/icons/star.svg" alt="" />
          </div>
          <div className="text-lg font-semibold">100+ reviews</div>
        </div>
      </div>
    </div>
  );
}
