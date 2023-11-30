export default function ArticlesAndPodcasts() {
  return (
    <div className="ml-5 md:ml-10 xl:ml-[216px] my-10 xl:my-[96px] overflow-x-hidden">
      <div className="flex justify-between items-end gap-5 mb-11">
        <div className="max-w-[1137px] text-stone-900 text-2xl sm:text-4xl lg:text-6xl font-normal font-['Helvetica Light'] lg:leading-[66px] text-left">
          Explore helpful articles and podcasts about property management
        </div>
        <div className="w-[54px] h-12 bg-zinc-300 bg-opacity-0 rounded-lg border-2 border-black flex items-center">
          <img
            src="/icons/arrow 1.svg"
            alt=""
            className="-rotate-90 w-[54px]"
          />
        </div>
      </div>
      <div className="flex gap-4 overflow-auto">
        {articlesAndPodcasts.map(({ title, desc, btnText }, i) => (
          <div
            key={i}
            className="max-w-[456px] bg-stone-50 p-5 text-left gap-6 flex flex-col items-start"
          >
            <div className="w-[333px] text-stone-900 text-base sm::text-lg font-semibold uppercase">
              {title}
            </div>
            <div className="w-[372px] text-stone-900 text-sm sm:text-base font-normal leading-snug">
              {desc}
            </div>
            <button className="justify-center items-center gap-1.5 flex text-amber-400 text-base font-medium">
              {btnText}{" "}
              <img
                src="/icons/arrow-forward.svg"
                alt=""
                className="black-to-yellow"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const articlesAndPodcasts = [
  {
    title:
      "Real Estate Investment for Chicago Landlords: Building Your Rental Property Portfolio",
    desc: "Investing in rental real estate can be an excellent way for landlords to generate income and build wealth over time. The Chicago real estate market, in particular, offers many opportunities for investment due to its large population, diverse neighborhoods, and stable property values. However, real estate investment also comes with risks that landlords must go in prepared to mitigate. Here are some tips for successful real estate investment in Chi",
    btnText: "Full article",
  },
  {
    title: "What Are the 7 Steps to Buying a Home in Chicago?",
    desc: "Are you hoping to add to Chicago's population of 2.66 million?If so, you must learn the 7 steps to buying a home!Buying a home can be a bit complicated, especially for first-timers. It is not as easy as entering a sports store and purchasing your favorite team's jersey. After all, a property is one of the most significant investments you will ever make.Thankfully, you are in the right place for moving to Chicago. In this guide, you'll",
    btnText: "Full article",
  },
  {
    title:
      "Real Estate Investment for Chicago Landlords: Building Your Rental Property Portfolio",
    desc: "1. Read your lease. No, seriously read it. It won't be the most exciting night table material but you'll thank yourself when you do read it. A lease is a binding legal contract. It creates a binding relationship between you and your landlord. What are you agreeing to? If you don't understand, ask questions before you sign it.",
    btnText: "Listen Now",
  },
  {
    title: "Scaling a Multi-Million Dollar Real Estate Business in Chicago",
    desc: "1. Read your lease. No, seriously read it. It won't be the most exciting night table material but you'll thank yourself when you do read it. A lease is a binding legal contract. It creates a binding relationship between you and your landlord. What are you agreeing to? If you don't understand, ask questions before you sign it.",
    btnText: "Listen Now",
  },
];
