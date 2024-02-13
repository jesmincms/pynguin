import { Link } from "react-router-dom";

export default function HomeBanner() {
  return (
    <>

    <div className="home-banner  flex flex-col justify-center items-center md:pt-12 md:pb-[350px] px-2 relative">
      <div className="text-center text-stone-900 text-4xl font-extrabold md:leading-[60px] max-w-[680px]">
        ORLANDO PROPERTY MANAGEMENT
      </div>
      <div className="text-center text-stone-900 text-[26px] font-normal uppercase leading-[38.74px] tracking-[2.60px] mt-2">
        Guaranteed Rent/ Guaranteed Quality Residents
      </div>

      <div className="flex gap-5 mt-[40px] flex-col md:flex-row">
        <button className="px-5 py-3 bg-amber-400 justify-center items-center gap-1.5 inline-flex text-stone-900 text-base font-medium uppercase tracking-wide">
          Free Instant Rental Analysis
          <img src="/icons/arrow-forward.svg" alt="" className="w-5 h-5" />
        </button>
        <Link to="/pricing" className="px-5 py-3 bg-amber-100 justify-center items-center gap-[11px] inline-flex text-stone-900 text-base font-medium uppercase tracking-wide">
          Pricing
          <img src="/icons/arrow-forward.svg" alt="" className="w-5 h-5" />
        </Link>
        <button className="px-5 py-3 bg-stone-900 justify-center items-center gap-[11px] inline-flex text-white text-base font-medium uppercase tracking-wide">
          Find a Rental
          <img
            src="/icons/arrow-forward.svg"
            alt=""
            className="w-5 h-5 invert"
          />
        </button>
        <button className="px-5 py-3 bg-amber-100 justify-center items-center gap-[11px] inline-flex text-stone-900 text-base font-medium uppercase tracking-wide">
          Areas we serve
          <img src="/icons/arrow-forward.svg" alt="" className="w-5 h-5" />
        </button>
      </div>
      <div className="text-center text-stone-900 text-xl font-normal leading-[29.80px] absolute bottom-10">
        Your property rented in 21 days or you pay us nothing
        {/* <img
          src="/icons/underline 1.svg"
          alt=""
          className="absolute top-[29.92px] right-0"
        /> */}
      </div>
    </div>
    </>
  );
}
