import React from "react";

const Homeowners = () => {
  return (
    <div className="py-10 lg:py-16 xl:py-20 services_homeowners bg-[#F7C74F]">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 pr-4 text-center lg:col-span-6 lg:text-start">
            <h2 className="text-[28px] font-normal leading-[39px] mb-8">
              Why <span className="font-bold">Homeowners Love Pynguin</span>{" "}
              Property Management in Central Florida
            </h2>
            <p className="mb-8">
              In the heart of Central Florida, our team is dedicated to
              providing comprehensive property management solutions that ensure
              peace of mind for our landlords.{" "}
            </p>
            <p className="text-white">
              With a focus on building warm, lasting relationships, we blend
              innovative strategies with a personal touch to manage your
              property efficiently.{" "}
            </p>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="grid grid-cols-12 gap-3 xl:gap-6">
              <div className="col-span-6 text-center md:col-span-4">
                <img className="mx-auto mb-2" src="/icons/group_3.svg" alt="" />
                <span className="text-sm font-bold xl:text-base">Quick Responses</span>
              </div>
              <div className="col-span-6 text-center md:col-span-4">
                <img className="mx-auto mb-2" src="/icons/group_4.svg" alt="" />
                <span className="text-sm font-bold xl:text-base">Experienced Team</span>
              </div>
              <div className="col-span-6 text-center md:col-span-4">
                <img className="mx-auto mb-2" src="/icons/group_9.svg" alt="" />
                <span className="text-sm font-bold xl:text-base">Local Experience</span>
              </div>
              <div className="col-span-6 text-center md:col-span-4">
                <img className="mx-auto mb-2" src="/icons/group_2.svg" alt="" />
                <span className="text-sm font-bold xl:text-base">
                  Quality Repair Vendors
                </span>
              </div>
              <div className="col-span-6 text-center md:col-span-4">
                <img className="mx-auto mb-2" src="/icons/group_5.svg" alt="" />
                <span className="text-sm font-bold xl:text-base">Honest Counsel</span>
              </div>
              <div className="col-span-6 text-center md:col-span-4">
                <img className="mx-auto mb-2" src="/icons/group_8.svg" alt="" />
                <span className="text-sm font-bold xl:text-base">Responsible Tenants</span>
              </div>
              <div className="col-span-6 text-center md:col-span-4">
                <img className="mx-auto mb-2" src="/icons/group_1.svg" alt="" />
                <span className="text-sm font-bold xl:text-base">
                  Emergency Assistance
                </span>
              </div>
              <div className="col-span-6 text-center md:col-span-4">
                <img className="mx-auto mb-2" src="/icons/group_6.svg" alt="" />
                <span className="text-sm font-bold xl:text-base">6-point Guarantee</span>
              </div>
              <div className="col-span-6 text-center md:col-span-4">
                <img className="mx-auto mb-2" src="/icons/group_7.svg" alt="" />
                <span className="text-sm font-bold xl:text-base">No Hidden Fees</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homeowners;
