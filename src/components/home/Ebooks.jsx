import { Link } from "react-router-dom";

export default function Ebooks() {
  return (
    <div className="mb-[70px] max-w-[1828px] mx-auto">
      <div className="text-center mb-14">
        <span className="text-stone-900 text-5xl lg:text-6xl font-extrabold lg:leading-[66px]">
          Download our{" "}
          <span className="lowercase text-amber-400">INVESTOR EBOOKS</span>
        </span>
      </div>
      <div className="grid gap-4 xl:grid-cols-4 xs:grid-cols-1 sm:grid-cols-2">
        {ebooks.map(({ title, image }, i) => (
          <div className="flex flex-col items-center gap-6" key={i}>
            <img className="w-[400px] h-[400px]" src={image} alt="" />
            <div className="max-w-[335px] text-center text-stone-900 text-lg font-semibold uppercase">
              {title}
            </div>
            <Link to="/pricing" className="max-w-[292px] w-full px-6 py-3 bg-amber-400 rounded-[10px] justify-center items-center gap-1.5 inline-flex text-stone-900 text-base font-medium">
              Explore our pricing
              <img className="w-5 h-5" src="/icons/arrow-forward.svg" alt="" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const ebooks = [
  {
    title: "WHAT THEY DON'T TELL YOU ABOUTREAL ESTATE INVESTING",
    image: "/images/Rectangle 45.png",
  },
  {
    title: "RESIDENT TENANT LANDLORD ORDINANCE",
    image: "/images/Rectangle 46.png",
  },
  {
    title: "WHERE TO INVESTIN THE CHICAGO MARKET",
    image: "/images/Rectangle 47.png",
  },
  {
    title: "15 TIPS CHICAGOLANDLORDS MUST KNOW",
    image: "/images/Rectangle 48.png",
  },
];
