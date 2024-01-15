import React from "react";
import Title from "../Title";
import { IoCheckmarkSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const PricingTable = () => {
  return (
    <div className="py-14 lg:py-20">
      <div className="container mx-auto">
        <Title
          title="Pricing Designed Like Everything Else at Pynguin – Clear, Fair & Stress-free."
          subtitle="GCR&D Management fees may vary and are quoted on a case by case basis to ensure we are meeting your needs, but listed below are the current rate ranges for residential management."
        />

        <div className="overflow-x-auto">
          <table className="min-w-[800px] w-full table-auto">
            <thead>
              <tr className="text-center">
                <th></th>
                <th className="pt-6 pb-4 bg-[#FFEDBA] rounded-t-[40px]">
                  <span className="text-2xl font-bold">Budget</span>
                  <img
                    className="mx-auto"
                    src="/images/pricing_icon_1.svg"
                    alt=""
                  />
                </th>
                <th className="pt-6 pb-4 bg-[#FFC629] rounded-t-[40px]">
                  <span className="text-2xl font-bold">Full Service</span>
                  <img
                    className="mx-auto"
                    src="/images/pricing_icon_2.svg"
                    alt=""
                  />
                </th>
                <th className="pt-6 pb-4 bg-[#FFC629] rounded-t-[40px]">
                  <span className="text-2xl font-bold">Premium</span>
                  <img
                    className="mx-auto"
                    src="/images/pricing_icon_3.svg"
                    alt=""
                  />
                </th>
              </tr>
            </thead>
            <tbody className="shadow-outline-red relative rounded-tl-[40px] rounded-b-[15px] rounded-tr-[0px] overflow-hidden text-sm text-[#1E1E1E]">
              <div className="top-left-border"></div>
              <div className="bottom-left-border"></div>
              <div className="bottom-right-border"></div>
              <tr className="border-b border-[#000000] bg-[#EEEEEE]">
                <td className="border-r border-[#000000] p-8 rounded-tl-[40px]">
                  Monthly Management Fee
                </td>
                <td className="border-r border-[#000000]  p-8 bg-[#EEEEEE] text-xl font-bold">
                  4.9% + $79 (of monthly rent)
                </td>
                <td className="border-r border-[#000000]  p-8 bg-[#EEEEEE] text-xl font-bold">
                  6.9% + $79 (of monthly rent)
                </td>
                <td className="p-8 bg-[#EEEEEE] text-xl font-bold">
                  8.9% + $79 (of monthly rent)
                </td>
              </tr>
              <tr className="border-b border-[#000000]">
                <td className="border-x border-[#000000]  p-8 bg-[#EEEEEE]">
                  Leasing Fee
                </td>
                <td className="border-r border-[#000000]  p-8 bg-[#EEEEEE]">
                  One Month’s Rent
                </td>
                <td className="border-r border-[#000000]  p-8 bg-[#EEEEEE]">
                  One Month’s Rent
                </td>
                <td className="p-8 bg-[#EEEEEE]">One Month’s Rent</td>
              </tr>
              <tr className="border-b border-[#000000]">
                <td className="border-x border-[#000000] px-8 py-3">
                  Lease Renewal Fee
                </td>
                <td className="border-r border-[#000000] px-8 py-3">$500</td>
                <td className="border-r border-[#000000] px-8 py-3">$250</td>
                <td className="px-8 py-3 border-r border-[#000000]">
                  <IoCheckmarkSharp className="text-[#FFC629] text-2xl" />
                </td>
              </tr>
              <tr className="border-b border-[#000000]">
                <td className="border-x border-[#000000] px-8 py-3">
                  Annual Market Rent Analysis
                </td>
                <td className="border-r border-[#000000] px-8 py-3">
                  <IoCheckmarkSharp className="text-[#FFC629] text-2xl" />
                </td>
                <td className="border-r border-[#000000] px-8 py-3">
                  <IoCheckmarkSharp className="text-[#FFC629] text-2xl" />
                </td>
                <td className="px-8 py-3 border-r border-[#000000]">
                  <IoCheckmarkSharp className="text-[#FFC629] text-2xl" />
                </td>
              </tr>
              <tr className="border-b border-[#000000]">
                <td className="border-x border-[#000000] px-8 py-3">
                  Property Marketing
                </td>
                <td className="border-r border-[#000000] px-8 py-3">
                  <IoCheckmarkSharp className="text-[#FFC629] text-2xl" />
                </td>
                <td className="border-r border-[#000000] px-8 py-3">
                  <IoCheckmarkSharp className="text-[#FFC629] text-2xl" />
                </td>
                <td className="px-8 py-3 border-r border-[#000000]">
                  <IoCheckmarkSharp className="text-[#FFC629] text-2xl" />
                </td>
              </tr>
              <tr className="border-b border-[#000000]">
                <td className="border-x border-[#000000] px-8 py-3">
                  Property Showings
                </td>
                <td className="border-r border-[#000000] px-8 py-3">
                  <IoCheckmarkSharp className="text-[#FFC629] text-2xl" />
                </td>
                <td className="border-r border-[#000000] px-8 py-3">
                  <IoCheckmarkSharp className="text-[#FFC629] text-2xl" />
                </td>
                <td className="px-8 py-3 border-r border-[#000000]">
                  <IoCheckmarkSharp className="text-[#FFC629] text-2xl" />
                </td>
              </tr>
              <tr className="border-b border-[#000000]">
                <td className="border-x border-[#000000] px-8 py-3">
                  Tenant Screening
                </td>
                <td className="border-r border-[#000000] px-8 py-3">
                  <IoCheckmarkSharp className="text-[#FFC629] text-2xl" />
                </td>
                <td className="border-r border-[#000000] px-8 py-3">
                  <IoCheckmarkSharp className="text-[#FFC629] text-2xl" />
                </td>
                <td className="px-8 py-3 border-r border-[#000000]">
                  <IoCheckmarkSharp className="text-[#FFC629] text-2xl" />
                </td>
              </tr>
              <tr className="border-b border-[#000000]">
                <td className="border-x border-[#000000] px-8 py-3">
                  Move-in Coordination
                </td>
                <td className="border-r border-[#000000] px-8 py-3">
                  <IoCheckmarkSharp className="text-[#FFC629] text-2xl" />
                </td>
                <td className="border-r border-[#000000] px-8 py-3">
                  <IoCheckmarkSharp className="text-[#FFC629] text-2xl" />
                </td>
                <td className="px-8 py-3 border-r border-[#000000]">
                  <IoCheckmarkSharp className="text-[#FFC629] text-2xl" />
                </td>
              </tr>
              <tr className="border-b border-[#000000]">
                <td className="border-x border-[#000000] px-8 py-3">
                  Rent Collection
                </td>
                <td className="border-r border-[#000000] px-8 py-3">
                  <IoCheckmarkSharp className="text-[#FFC629] text-2xl" />
                </td>
                <td className="border-r border-[#000000] px-8 py-3">
                  <IoCheckmarkSharp className="text-[#FFC629] text-2xl" />
                </td>
                <td className="px-8 py-3 border-r border-[#000000]">
                  <IoCheckmarkSharp className="text-[#FFC629] text-2xl" />
                </td>
              </tr>
              <tr className="border-b border-[#000000]">
                <td className="border-x border-[#000000] px-8 py-3">
                  Maintenance Coordination
                </td>
                <td className="border-r border-[#000000] px-8 py-3">
                  <IoCheckmarkSharp className="text-[#FFC629] text-2xl" />
                </td>
                <td className="border-r border-[#000000] px-8 py-3">
                  <IoCheckmarkSharp className="text-[#FFC629] text-2xl" />
                </td>
                <td className="px-8 py-3 border-r border-[#000000]">
                  <IoCheckmarkSharp className="text-[#FFC629] text-2xl" />
                </td>
              </tr>
              <tr className="border-b border-[#000000]">
                <td className="border-x border-[#000000] px-8 py-3">
                  Monthly Reporting
                </td>
                <td className="border-r border-[#000000] px-8 py-3">
                  <IoCheckmarkSharp className="text-[#FFC629] text-2xl" />
                </td>
                <td className="border-r border-[#000000] px-8 py-3">
                  <IoCheckmarkSharp className="text-[#FFC629] text-2xl" />
                </td>
                <td className="px-8 py-3 border-r border-[#000000]">
                  <IoCheckmarkSharp className="text-[#FFC629] text-2xl" />
                </td>
              </tr>
              <tr className="border-b border-[#000000]">
                <td className="border-x border-[#000000] px-8 py-3">
                  24/7 Emergency Response
                </td>
                <td className="border-r border-[#000000] px-8 py-3">
                  <IoCheckmarkSharp className="text-[#FFC629] text-2xl" />
                </td>
                <td className="border-r border-[#000000] px-8 py-3">
                  <IoCheckmarkSharp className="text-[#FFC629] text-2xl" />
                </td>
                <td className="px-8 py-3 border-r border-[#000000]">
                  <IoCheckmarkSharp className="text-[#FFC629] text-2xl" />
                </td>
              </tr>
              <tr className="border-b border-[#000000]">
                <td className="border-x border-[#000000] px-8 py-3">
                  Eviction Coordination
                </td>
                <td className="border-r border-[#000000] px-8 py-3">$199</td>
                <td className="border-r border-[#000000] px-8 py-3">$99</td>
                <td className="px-8 py-3 border-r border-[#000000]">
                  <IoCheckmarkSharp className="text-[#FFC629] text-2xl" />
                </td>
              </tr>
              <tr className="border-b border-[#000000]">
                <td className="border-x border-[#000000] px-8 py-3">
                  Inspections
                </td>
                <td className="border-r border-[#000000] px-8 py-3">
                  $99 per inspection
                </td>
                <td className="border-r border-[#000000] px-8 py-3">Annual</td>
                <td className="px-8 py-3 border-r border-[#000000]">
                  Bi-Annua
                </td>
              </tr>
              <tr className="border-b border-[#000000]">
                <td className="border-x border-[#000000] px-8 py-3">
                  Photography
                </td>
                <td className="border-r border-[#000000] px-8 py-3">
                  <IoMdClose className="text-[#D9D9D9] text-2xl" />
                </td>
                <td className="border-r border-[#000000] px-8 py-3">
                  <IoCheckmarkSharp className="text-[#FFC629] text-2xl" />
                </td>
                <td className="px-8 py-3 border-r border-[#000000]">
                  <IoCheckmarkSharp className="text-[#FFC629] text-2xl" />
                </td>
              </tr>
              <tr className="border-b border-[#000000]">
                <td className="border-x border-[#000000] px-8 py-3">
                  Bill Pay
                </td>
                <td className="border-r border-[#000000] px-8 py-3">
                  <IoMdClose className="text-[#D9D9D9] text-2xl" />
                </td>
                <td className="border-r border-[#000000] px-8 py-3">
                  <IoMdClose className="text-[#D9D9D9] text-2xl" />
                </td>
                <td className="px-8 py-3 border-r border-[#000000]">
                  <IoCheckmarkSharp className="text-[#FFC629] text-2xl" />
                </td>
              </tr>
              <tr className="border-b border-[#000000]">
                <td className="border-x border-[#000000] px-8 py-3">
                  Professional Photography
                </td>
                <td className="border-r border-[#000000] px-8 py-3">
                  <IoMdClose className="text-[#D9D9D9] text-2xl" />
                </td>
                <td className="border-r border-[#000000] px-8 py-3">
                  <IoMdClose className="text-[#D9D9D9] text-2xl" />
                </td>
                <td className="px-8 py-3 border-r border-[#000000]">
                  <IoCheckmarkSharp className="text-[#FFC629] text-2xl" />
                </td>
              </tr>
              <tr className="border-b border-[#000000]">
                <td className="border-x border-[#000000] px-8 py-3">
                  Virtual Tours / Video Marketing
                </td>
                <td className="border-r border-[#000000] px-8 py-3">
                  <IoMdClose className="text-[#D9D9D9] text-2xl" />
                </td>
                <td className="border-r border-[#000000] px-8 py-3">
                  <IoMdClose className="text-[#D9D9D9] text-2xl" />
                </td>
                <td className="px-8 py-3 border-r border-[#000000]">
                  <IoCheckmarkSharp className="text-[#FFC629] text-2xl" />
                </td>
              </tr>
              <tr className="border-b border-[#000000]">
                <td className="border-x border-[#000000] px-8 py-3">
                  6-Month Tenant Guarantee
                </td>
                <td className="border-r border-[#000000] px-8 py-3">
                  <IoMdClose className="text-[#D9D9D9] text-2xl" />
                </td>
                <td className="border-r border-[#000000] px-8 py-3">
                  <IoMdClose className="text-[#D9D9D9] text-2xl" />
                </td>
                <td className="px-8 py-3 border-r border-[#000000]">
                  <IoCheckmarkSharp className="text-[#FFC629] text-2xl" />
                </td>
              </tr>
              <tr className="border-b border-[#000000]">
                <td className="border-x border-[#000000] px-8 py-3">
                  Rented in 30 Days Guarantee
                </td>
                <td className="border-r border-[#000000] px-8 py-3">
                  <IoMdClose className="text-[#D9D9D9] text-2xl" />
                </td>
                <td className="border-r border-[#000000] px-8 py-3">
                  <IoMdClose className="text-[#D9D9D9] text-2xl" />
                </td>
                <td className="px-8 py-3 border-r border-[#000000]">
                  <IoCheckmarkSharp className="text-[#FFC629] text-2xl" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
