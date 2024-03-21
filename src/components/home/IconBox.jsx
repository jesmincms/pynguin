export default function IconBox() {
  return (
    <div className="max-w-[1200px] flex flex-col md:flex-row justify-between items-center mx-auto mt-7 md:mt-20 gap-2 md:gap-2">
      <div className="flex flex-col items-center max-w-[200px]">
        <img src="/icons/fast-time.svg" alt="" />
        <div className="text-3xl font-normal leading-10 text-center text-black">
          Fast Responses
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center max-w-[200px] mt-5">
        <img src="/icons/team.svg" alt="" />
        <div className="text-3xl font-normal leading-10 text-center text-black">
          Experienced Team
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center max-w-[200px]">
        <img src="/icons/cancel.svg" alt="" />
        <div className="text-3xl font-normal leading-10 text-center text-black">
          Cancel Anytime
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center max-w-[200px]">
        <img src="/icons/heart-outline.svg" alt="" />
        <div className="text-3xl font-normal leading-10 text-center text-black">
          Honest Counsel
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center max-w-[200px]">
        <img src="/icons/24-hours.svg" alt="" />
        <div className="text-3xl font-normal leading-10 text-center text-black">
          Emergency Assistance
        </div>
      </div>
    </div>
  );
}
