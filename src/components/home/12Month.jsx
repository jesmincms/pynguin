export default function Month12() {
  return (
    <div className="bg-white p-2">
      <div className="bg-black rounded-[30px] max-w-[1584px] px-5 py-10 lg:px-[100px] lg:py-[90px] mx-auto my-10 md:my-[100px] grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="text-left max-w-[630px]">
          <div>
            <span className="text-white text-3xl md:text-5xl font-bold font-['Helvetica'] md:leading-[60px] tracking-wide">
              Get all <span className="text-yellow-400">12 months</span> of
              rental income in advance.
            </span>
          </div>
          <div className="mt-7">
            <span className="text-white text-[18px] md:text-[26px] md:leading-[37px]">
              With Pynguin's{" "}
              <span className="text-yellow-400 font-bold">RENT</span>
              <span className="font-bold">ADV</span> program, our landlords can
              get a full year's worth of tenant rent payments up front in one
              lump-sum check. That's money in the bank for you to build on.
            </span>
          </div>
          <button className="text-black text-[22px] font-medium leading-snug bg-yellow-400 rounded-[10px] py-2 px-8 md:py-4 md:px-14 my-5">
            Learn More
          </button>
        </div>

        <div className="flex justify-start lg:justify-end">
          <img src="/images/Jan to Dec.png" alt="" />
        </div>
      </div>
    </div>
  );
}
