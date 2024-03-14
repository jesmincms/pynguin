import React from "react";

const ServicesBanner = () => {
  return (
    <div className="services_banner py-12 md:py-20 xl:pt-[110px] xl:pb-[160px] bg-[#F3F3F3]">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-6">
            <h1 className="text-4xl font-normal leading-10 text-[#000000] text-center lg:text-start">
              <span className="font-bold">
                Pynguin Property Management Services
              </span>{" "}
              for Central Florida rentals. Designed so you can chill while we do
              the work.{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBanner;
