import { Link } from "react-router-dom";

export default function WhyHomeowners() {
  return (
    <div className="bg-white mb-10 sm:mb-[90px]">
      <div className="max-w-[940px] mx-auto">
        <span className="text-3xl md:text-5xl font-normal font-['Helvetica Light'] md:leading-[64px] tracking-wide">
          Why <span className="font-bold font-['Helvetica']">homeowners</span>
          trust Pynguin Property Management in Orlando
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[70px] max-w-[1560px] mx-auto mt-6 md:mt-[70px]">
        {content.map(({ title, desc, image }, i) => (
          <div
            className="bg-yellow-50 py-10 px-8 xl:py-[70px] xl:px-[60px] rounded-[36px] xl:rounded-[60px] relative text-left flex flex-col justify-between"
            key={i}
          >
            <div className="bg-amber-400 rounded-tr-[100px] rounded-br-[100px] text-xl xl:text-[26px] w-10 xl:w-[50px] h-9 xl:h-11 flex items-center justify-center absolute -left-1 top-[40px] xl:top-[70px]">
              {i + 1}
            </div>
            <div className="text-[22px] font-bold font-['Helvetica'] leading-7 ml-[20px]">
              {title}
              <div className="font-normal font-['Helvetica Light'] text-lg xl:text-[22px] leading-[30px] tracking-tight mt-1">
                {desc}
              </div>
            </div>
            <img
              alt=""
              src={image}
              className="mx-auto mt-6 xl:mt-14 md:max-w-fit lg:max-w-full max-h-fit"
            />
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link to="/pricing" className="px-5 py-3 bg-amber-400 rounded-[10px] justify-center items-center gap-1.5 inline-flex mt-10 xl:mt-[70px] font-medium">
          Explore our pricing
          <img
            alt=""
            src="/icons/arrow-forward.svg"
            className="inline-block ml-3"
          />
        </Link>
      </div>
    </div>
  );
}

const content = [
  {
    title: "Responsible Tenants",
    desc: `We conduct thorough tenant
      screenings, including credit checks,
      background checks, and reference
      verifications, to identify qualified
      tenants who are likely to pay rent on
      time and maintain the property in
      good condition.`,
    image: `/images/image 33.png`,
  },
  {
    title: "Local Expertise & Experience",
    desc: `We have been managing proprties in
      the Greater Orlando Area for 20 years.
      We have a better understanding of
      local market conditions, tenant
      demographics, and local regulations,
      and we have the experience to guide
      you through it all.`,
    image: `/images/image 35.png`,
  },
  {
    title: "Management & Repairs",
    desc: `Timely maintenance helps prevent
      property deterioration and ensures
      that the rental property remains
      attractive to tenants. We have a
      network of reliable and qualified
      contractors to handle maintenance
      requests and repairs promptly.`,
    image: `/images/image 34.png`,
  },
];
