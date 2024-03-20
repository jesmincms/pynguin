export default function RentalAnalysis() {
  return (
    <div className="bg-amber-400">
      <div className="max-w-[1680px] mx-1 md:ml-[60px] md:mr-[60px] min-[1919px]:mr-0 flex items-center justify-between gap-10 md:gap-[100px] pt-9 relative flex-col md:flex-row">
        <div className="flex-1 max-w-[1047px]">
          <div className="max-w-[560px] text-left">
            <span className="text-stone-900 text-5xl lg:text-6xl font-extrabold leading-[66px]">
              GET A FREE RENTAL ANALYSIS <br />
              <span className="text-white">IN SECONDS.</span>
            </span>
          </div>
          <div className="justify-start items-start gap-[11px] flex w-full mt-14 flex-col md:flex-row">
            <input
              type="text"
              placeholder="Enter property adress"
              className="px-5 py-3 bg-white rounded-[10px] shadow justify-start items-center gap-2.5 flex text-zinc-500 text-base font-normal leading-snug flex-1 w-full md:w-px"
            />
            <button className="px-5 py-3 bg-stone-900 rounded-[10px] justify-center items-center gap-1.5 flex text-white text-base font-medium w-full md:w-fit">
              View Report
              <img
                alt=""
                src="/icons/arrow-forward.svg"
                className="invert ml-1.5"
              />
            </button>
          </div>
        </div>

        <div className="md:w-[591px]">
          <div className="w-[591px] h-[591px] right-0 top-[37px] absolute mix-blend-multiply bg-amber-100 rounded-full" />
          <img
            alt=""
            src="/images/Pyn-Owners-app-screen.png"
            className="mt-20 z-10 relative md:mr-[84px] md:ml-auto"
          />
        </div>
      </div>
    </div>
  );
}
