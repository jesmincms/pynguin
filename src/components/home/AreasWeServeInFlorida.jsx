export default function AreasWeServeInFlorida() {
  return (
    <div className=" bg-orange-50">
      <div className=" max-w-[1304px] mx-auto gap-3 py-10 xl:py-[87px]">
        <div className="text-center">
          <span className="text-stone-900 text-5xl md:text-6xl font-extrabold md:leading-[66px]">
            Areas We <span className="text-amber-400">Serve in Florida</span>
          </span>
        </div>
        <div className="max-w-[1238px] mx-auto text-center text-black text-base font-normal leading-snug mt-[28px] mb-[55px]">
          We're happy to serve many of the surrounding areas here in Central
          Florida. Below are the current cities and locations that we operate
          in. If you don't see your area listed, don't hesitate to reach out to
          us and we'll see if we can work together.
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-4">
              {cities1.map((city, i) => (
                <li className="text-left mb-2.5" key={i}>
                  <div className="w-2.5 h-[9.65px] bg-amber-400 rounded-full inline-block mr-3" />
                  {city}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/Rectangle 66.png"
              alt=""
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const cities1 = [
  "Altamonte Springs",
  "Apopka",
  "Avalon Park",
  "Casselberry",
  "Clermont",
  "Daytona Beach",
  "DeLand",
  "Deltona",
  "Eastwood",
  "Kissimmee",
  "Lakeland",
  "Lake Mary",
  "Longwood",
  "Maitland",
  "New Smyrna Beach",
  "Ocoee",
  "Orlando",
  "Ormond Beach",
  "Oviedo",
  "Palm Bay",
  "Poinciana",
  "Sanford",
  "Stoneybrook",
  "Waterford Lakes",
  "Windermere",
  "Winter Garden",
  "Winter Park",
  "Winter Springs",
  "Wildwood",
];
