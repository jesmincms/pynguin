import React from "react";

const AreYouReady = () => {
  return (
    <div className="py-10 text-white bg-black lg:py-16 xl:py-20 are_you_ready">
      <div className="container px-4 mx-auto text-center">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-start-3 lg:col-end-11 xl:col-start-4 xl:col-end-10">
            <h3 className="text-[36px] leading-[43px]">
              Are you ready to become a landlord?
            </h3>
            <p>
              Schedule a free consultation with one of our property management
              pros now.
            </p>
            <button className="px-6 py-[10px] bg-[#F7C74F] rounded-[10px] justify-center items-center gap-1.5 flex text-black text-base font-medium w-full md:w-fit mx-auto mt-8">
              Schedule a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreYouReady;
