import { Link } from "react-router-dom";

export default function OurGuarantees() {
  return (
    <div className="flex flex-col text-stone-900 bg-[#FFFCF4] py-10 lg:py-[86px] mt-7 lg:mt-[100px] text-left">
      <div className="max-w-[1329px] text-center mx-auto">
        <span className="text-[34px] lg:text-[45px] font-normal lg:leading-[60px]">
          Cool Solutions, Warm Relations. That's the Pynguin Promise. Stamped
          with <span className="font-semibold">our guarantees</span>
        </span>
      </div>

      <div className="grid md:grid-rows-3 grid-cols-1 md:grid-cols-2 gap-8 xl:gap-x-[197px] max-w-[1329px] mx-auto mt-[75px] mb-6">
        <div className="flex gap-7 items-center md:items-start flex-col md:flex-row">
          <img alt="" className="" src="/icons/guarantee-badge.svg" />
          <div>
            <div className="text-[21px] lg:text-[28px] text-center md:text-left font-semibold uppercase leading-[33.60px] mb-3">
              21 DAY RENTAL GUARANTEE
              <img
                alt=""
                src="/icons/youtube-yellow.svg"
                className="inline-block ml-3 pb-2"
              />
            </div>
            <div className="text-neutral-500 text-xl font-normal leading-loose">
              We guarantee that we can find a quality tenant for your home in 21
              days, or the first 2 months of management fees are FREE!
            </div>
          </div>
        </div>

        <div className="flex gap-7 items-center md:items-start flex-col md:flex-row">
          <img alt="" className="" src="/icons/guarantee-badge.svg" />
          <div>
            <div className=" text-[21px] lg:text-[28px] text-center md:text-left font-semibold uppercase leading-[33.60px] mb-3">
              HAPPINESS GUARANTEE
              <img
                alt=""
                src="/icons/youtube-yellow.svg"
                className="inline-block ml-3 pb-2"
              />
            </div>
            <div className="text-neutral-500 text-xl font-normal leading-loose">
              If for any reason you are not completely happy with our services &
              want to leave us, you can cancel your management agreement without
              penalty at any time.
            </div>
          </div>
        </div>

        <div className="flex gap-7 items-center md:items-start flex-col md:flex-row">
          <img alt="" className="" src="/icons/guarantee-badge.svg" />
          <div>
            <div className="text-[21px] lg:text-[28px] text-center md:text-left font-semibold uppercase leading-[33.60px] mb-3">
              LEASING GUARANTEE
              <img
                alt=""
                src="/icons/youtube-yellow.svg"
                className="inline-block ml-3 pb-2"
              />
            </div>
            <div className="text-neutral-500 text-xl font-normal leading-loose">
              We guarantee the Tenant will stay for at least 9 months, or we
              will find a replacement FOR FREE!
            </div>
          </div>
        </div>

        <div className="flex gap-7 items-center md:items-start flex-col md:flex-row">
          <img alt="" className="" src="/icons/guarantee-badge.svg" />
          <div>
            <div className="text-[21px] lg:text-[28px] text-center md:text-left font-semibold uppercase leading-[33.60px] mb-3">
              PET GUARANTEE
              <img
                alt=""
                src="/icons/youtube-yellow.svg"
                className="inline-block ml-3 pb-2"
              />
            </div>
            <div className="text-neutral-500 text-xl font-normal leading-loose">
              For no extra charge to owners, we guarantee your home will not be
              damaged by any approved pet.
            </div>
          </div>
        </div>

        <div className="flex gap-7 items-center md:items-start flex-col md:flex-row">
          <img alt="" className="" src="/icons/guarantee-badge.svg" />
          <div>
            <div className=" text-[21px] lg:text-[28px] text-center md:text-left font-semibold uppercase leading-[33.60px] mb-3">
              RESULTS GUARANTEE
              <img
                alt=""
                src="/icons/youtube-yellow.svg"
                className="inline-block ml-3 pb-2"
              />
            </div>
            <div className="text-neutral-500 text-xl font-normal leading-loose">
              Pay us only after you get results. You don’t pay us a dime until
              your property is rented & rent is collected.
            </div>
          </div>
        </div>

        <div className="flex gap-7 items-center md:items-start flex-col md:flex-row">
          <img alt="" className="" src="/icons/guarantee-badge.svg" />
          <div>
            <div className="text-[21px] lg:text-[28px] text-center md:text-left font-semibold uppercase leading-[33.60px] mb-3">
              EVICTION PROTECTION
              <img
                alt=""
                src="/icons/youtube-yellow.svg"
                className="inline-block ml-3 pb-2"
              />
            </div>
            <div className="text-neutral-500 text-xl font-normal leading-loose">
              If a tenant we place & manage must be evicted, we'll handle the
              eviction free up to 1 year.
            </div>
          </div>
        </div>
      </div>

      <div className="gap-5 flex justify-center text-base font-medium">
        <button className="px-4 md:px-10 py-3 bg-amber-400 rounded-[10px] justify-center items-center flex">
          VIEW OUR GUARANTEES
        </button>
        <Link to="/contact" className="px-4 md:px-10 py-3 rounded-[10px] border border-stone-900 justify-center items-center flex">
          CONTACT US
        </Link>
      </div>
    </div>
  );
}
