import React from "react";

const WereReady = () => {
  return (
    <div className="py-10 lg:py-16 xl:py-20 bg-[#D9D9D9]">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 text-center lg:col-start-3 lg:col-end-11">
            <h2 className="text-[28px] leading-[34px] mb-8">
              We’re ready to start delivering rental income to you!
            </h2>
            <div className="flex justify-center gap-3">
              <button className="px-6 py-[10px] bg-black rounded-[10px] justify-center items-center gap-1.5 flex text-[#F7C74F] text-base font-medium w-full md:w-fit">
              See Our Pricing
              </button>
              <button className="px-6 py-[10px] bg-white rounded-[10px] justify-center items-center gap-1.5 flex text-black text-base font-medium w-full md:w-fit">
                Get Your Estimate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WereReady;
