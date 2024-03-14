import React from "react";

const WhatTenants = () => {
  return (
    <div className="py-10 lg:py-16 xl:py-20 bg-[#F2F2F2]">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 gap-6 mb-10">
          <div className="col-span-12 pr-4 lg:col-span-6">
            <h2 className="text-[28px] leading-[34px] text-center lg:text-start">
              <span className="font-bold">What Tenants Love about Pynguin</span>{" "}
              Property Management for their Orlando Area Rental
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 xl:col-start-3 xl:col-end-10">
            <div className="grid grid-cols-12 gap-5 xl:gap-20">
              <div className="col-span-6 text-center md:col-span-4">
                <img className="mx-auto mb-5" src="/icons/layer_1.svg" alt="" />
                <span>
                  <span className="font-bold">Cashless</span> Security Deposit
                  with Obligo™
                </span>
              </div>
              <div className="col-span-6 text-center md:col-span-4">
                <img className="mx-auto mb-5" src="/icons/layer_2.svg" alt="" />
                <span>
                  Tenants Enjoy
                  <span className="font-bold">Free Renters Insurance</span>
                </span>
              </div>
              <div className="col-span-6 text-center md:col-span-4">
                <img className="mx-auto mb-5" src="/icons/layer_1.svg" alt="" />
                <span>
                  Improve Your <span className="font-bold">Credit Score</span>{" "}
                  While you Rent
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatTenants;
