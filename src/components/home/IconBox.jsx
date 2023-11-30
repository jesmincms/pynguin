export default function IconBox() {
  return (
    <div className="max-w-[1544px] flex flex-col md:flex-row justify-between items-center mx-auto mt-7 md:mt-20 gap-16 md:gap-6">
      <div className="flex flex-col items-center max-w-[164px]">
        <img src="/icons/fast-time.svg" alt="" />
        <div className="text-center text-black text-3xl font-normal leading-10">
          Fast Responses
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center max-w-[164px] mt-5">
        <img src="/icons/team.svg" alt="" />
        <div className="text-center text-black text-3xl font-normal leading-10">
          Experienced Team
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center max-w-[164px]">
        <img src="/icons/cancel.svg" alt="" />
        <div className="text-center text-black text-3xl font-normal leading-10">
          Cancel Anytime
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center max-w-[164px]">
        <img src="/icons/heart-outline.svg" alt="" />
        <div className="text-center text-black text-3xl font-normal leading-10">
          Honest Counsel
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center max-w-[164px]">
        <img src="/icons/24-hours.svg" alt="" />
        <div className="text-center text-black text-3xl font-normal leading-10">
          Emergency Assistance
        </div>
      </div>
    </div>
  );
}
