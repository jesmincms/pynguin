export default function AsSeenIn() {
  return (
    <div className="relative mt-16 mb-20">
      <div className="flex-col justify-start items-center gap-5 inline-flex">
        <div className="text-center text-stone-900 text-3xl font-extrabold leading-[33px]">
          As Seen In
        </div>
      </div>
      <div className="flex max-w-[1304px] gap-10 lg:gap-2 justify-between mx-auto mt-10 flex-wrap items-center">
        <img alt="" className="h-fit w-fit" src="/logos/entrepreneur.png" />
        <img alt="" className="h-fit w-fit" src="/logos/forbes.png" />
        <img alt="" className="h-fit w-fit" src="/logos/inc.png" />
        <img alt="" className="h-fit w-fit" src="/logos/huffington-post.png" />
        <img alt="" className="h-fit w-fit" src="/logos/inman.png" />
        <img alt="" className="h-fit w-fit" src="/logos/engadget.png" />
        <img alt="" className="h-fit w-fit" src="/logos/cio.png" />
        <img alt="" className="h-fit w-fit" src="/logos/business_com.png" />
      </div>
    </div>
  );
}
