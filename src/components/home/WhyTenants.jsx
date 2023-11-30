export default function WhyTenants() {
  return (
    <div className="bg-white mt-3 mb-10 xl:mb-[100px]">
      <div className="max-w-[984px] mx-auto">
        <span className="text-black text-3xl md:text-5xl font-normal font-['Helvetica'] md:leading-[61px] tracking-wider">
          Why <span className="font-bold">tenants </span>love owners who choose
          Pynguin Property Management
        </span>
      </div>
      <div className="text-center text-black text-lg sm:text-[22px] font-normal leading-relaxed mt-5">
        This is opportunity for some keyword rich H2 copy from the SEO partner
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 xl:gap-[70px] max-w-[1560px] mx-auto">
        {content.map(({ title, desc, image }, i) => (
          <div className="p-6 xl:py-[70px] xl:px-[60px]" key={i}>
            <img alt="" src={image} className="mx-auto mb-4" />
            <div className="text-center text-black text-xl lg:text-[32px] font-normal font-['Helvetica Light'] lg:leading-[44px]">
              {title}
              <div className="text-base lg:text-xl leading-[30px] mt-5">
                {desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const content = [
  {
    title: "Cashless Security Deposit with Obligo™",
    desc: `Qualified new renters can forego paying a large lump-sum cash deposit cash security deposit at move-in and pay it over time.`,
    image: `/icons/payment.svg`,
  },
  {
    title: "Tenants Enjoy Free Renters Insurance",
    desc: `Feel secure and comfortable in your rental home. Free renters insurance gives you peace of mind that you are covered for unexpected events such as fire, theft, or damage.`,
    image: `/icons/insurance-paper.svg`,
  },
  {
    title: "Improve Your Credit Score While you Rent",
    desc: `Improve your credit score as you rent. Couldn’t be easier. We report your monthly on-time payments to participating Credit Bureaus so that your Credit Score gets a boost.`,
    image: `/icons/credit-score.svg`,
  },
];
