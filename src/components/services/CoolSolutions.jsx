import React from "react";

const CoolSolutions = () => {
  return (
    <div className="py-10 lg:py-16 xl:py-20 cool_solutions">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 gap-5 mb-16">
          <div className="col-span-12 text-center lg:col-start-3 lg:col-end-11 xl:col-start-4 xl:col-end-10">
            <h2 className="text-[28px] leading-[39px]">
              Cool Solutions, Warm Relations. That's the Pynguin Promise.
              Stamped with <span className="font-bold">our guarantees.</span>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 mb-10 lg:gap-8">
          <div className="h-auto col-span-12 mb-4 md:col-span-6">
            <div className="cool_solutions_item">
              <div className="cool_solutions_image">
                <img src="/icons/Badge.svg" alt="" />
              </div>
              <div className="cool_solutions_content">
                <p className="mb-4 font-bold uppercase">
                  21 DAY RENTAL GUARANTEE
                </p>
                <p>
                  We guarantee that we can find a quality tenant for your home
                  in 21 days, or the first 2 months of management fees are FREE!
                </p>
              </div>
            </div>
          </div>
          <div className="h-auto col-span-12 mb-4 md:col-span-6">
            <div className="cool_solutions_item">
              <div className="cool_solutions_image">
                <img src="/icons/Badge.svg" alt="" />
              </div>
              <div className="cool_solutions_content">
                <p className="mb-4 font-bold uppercase">HAPPINESS GUARANTEE</p>
                <p>
                  If for any reason you are not completely happy with our
                  services & want to leave us, you can cancel your management
                  agreement without penalty at any time.
                </p>
              </div>
            </div>
          </div>
          <div className="h-auto col-span-12 mb-4 md:col-span-6">
            <div className="cool_solutions_item">
              <div className="cool_solutions_image">
                <img src="/icons/Badge.svg" alt="" />
              </div>
              <div className="cool_solutions_content">
                <p className="mb-4 font-bold uppercase">LEASING GUARANTEE</p>
                <p>
                  We guarantee the Tenant will stay for at least 9 months, or we
                  will find a replacement FOR FREE!
                </p>
              </div>
            </div>
          </div>
          <div className="h-auto col-span-12 mb-4 md:col-span-6">
            <div className="cool_solutions_item">
              <div className="cool_solutions_image">
                <img src="/icons/Badge.svg" alt="" />
              </div>
              <div className="cool_solutions_content">
                <p className="mb-4 font-bold uppercase">PET GUARANTEE</p>
                <p>
                  For no extra charge to owners, we guarantee your home will not
                  be damaged by any approved pet.
                </p>
              </div>
            </div>
          </div>
          <div className="h-auto col-span-12 mb-4 md:col-span-6">
            <div className="cool_solutions_item">
              <div className="cool_solutions_image">
                <img src="/icons/Badge.svg" alt="" />
              </div>
              <div className="cool_solutions_content">
                <p className="mb-4 font-bold uppercase">
                  NON-COMPETE GUARANTEE
                </p>
                <p>
                  This one is for our listing agent friends. Every now and then
                  a landlord decides to sell their property. Pynguin is not in
                  the business of buying and selling homes. And we back that
                  with a $5,000 guarantee.
                </p>
              </div>
            </div>
          </div>
          <div className="h-auto col-span-12 mb-4 md:col-span-6">
            <div className="cool_solutions_item">
              <div className="cool_solutions_image">
                <img src="/icons/Badge.svg" alt="" />
              </div>
              <div className="cool_solutions_content">
                <p className="mb-4 font-bold uppercase">EVICTION GUARANTEE</p>
                <p>
                  If a tenant we place & manage must be evicted, we'll handle
                  the eviction free up to 1 year.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="px-6 py-[10px] bg-black rounded-[10px] justify-center items-center gap-1.5 flex text-[#F7C74F] text-base font-medium w-full md:w-fit mx-auto">
        Get a FREE Rental Analysis
        </button>
      </div>
    </div>
  );
};

export default CoolSolutions;
