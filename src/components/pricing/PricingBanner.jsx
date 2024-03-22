import React from "react";

const PricingBanner = () => {
  return (
    <div className="py-14 lg:py-20 bg-amber-400">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 gap-5">
          <div className="flex flex-col justify-center col-span-12 xl:pr-10 lg:col-span-7">
            <h2 className="text-[45px] xl:text-[60px] font-bold leading-[60px] mb-6">OUR PROCESS & PRICING, MORE REASONS TO DIVE IN</h2>
            <p className="mb-6 lg:mb-0">
            Our comprehensive property management services for Central Florida property owners include tenant screening, maintenance, and financial reporting, all delivered through a client-focused process and adaptable pricing to ensure satisfaction and optimal property performance.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <img className="mx-auto" src="/images/pynguin-planting-flowers.png" alt="Pricing Banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingBanner;
