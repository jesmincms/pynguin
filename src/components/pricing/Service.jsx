import React from "react";
import { Link } from "react-router-dom";
import Title from "../Title";

const Service = () => {
  return (
    <div className="py-14 lg:py-20">
      <div className="container p-4 mx-auto">
        <Title title="Add-on Services" />
        <div className="p-14 xl:py-20 xl:px-36 bg-[#FFFAE5] rounded-3xl">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <img
                className="mb-3"
                src="/images/service_1.svg"
                alt="Service 01"
              />
              <p className="text-lg font-bold">
                Additional Inspections <br /> No Eviction Guarantee / Eviction
                Protection <br /> Notice Posting <br /> Results Guarantee <br />{" "}
                In-Depth Pet Screening <br /> Rent Default Insurance
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <img
                className="mb-3"
                src="/images/service_2.svg"
                alt="Service 01"
              />
              <p className="text-lg font-bold">
                Professional Photography <br /> Annual Property Performance
                Review <br />
                Annual Rent Increase Evaluation <br /> Resident Liability
                Insurance <br />
                Maintenance Cost Control Guarantee <br /> Monthly HVAC Filters
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <img
                className="mb-3"
                src="/images/service_3.svg"
                alt="Service 01"
              />
              <p className="text-lg font-bold">
                Virtual Tours / Video Marketing <br /> Happiness Guarantee{" "}
                <br /> Home Warranty Dispatch <br /> Preventative Maintenance
                Program <br /> Resident Liability Insurance <br /> Annual Pest
                Contro
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center ">
          <Link to="/contact" className="max-w-[292px] w-full px-6 py-3 bg-amber-400 rounded-[10px] justify-center items-center gap-1.5 inline-flex text-stone-900 text-base font-medium">
            Let's Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
