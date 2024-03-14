import React from "react";

const ServicesCTA = () => {
  return (
    <div className="py-10 text-white bg-black services_cta lg:py-16">
      <div className="container px-4 mx-auto text-center">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-start-3 lg:col-end-10 xl:col-start-4 xl:col-end-9">
            <h2 className="text-[28px] leading-[39px]">Get an instant Rental Analysis</h2>
            <p>
              Find out how much you can charge for your rental property in
              Florida
            </p>
            <div className="justify-start items-start gap-[11px] flex w-full mt-8 flex-col md:flex-row">
              <input
                type="text"
                placeholder="Enter property adress"
                className="px-6 py-[10px] bg-white shadow justify-start items-center gap-2.5 flex text-zinc-500 text-base font-normal leading-snug flex-1 w-full md:w-px"
              />
              <button className="px-6 py-[10px] bg-[#F7C74F] rounded-[10px] justify-center items-center gap-1.5 flex text-black text-base font-medium w-full md:w-fit">
                Get Your Estimate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCTA;
