const Accordion = ({
  title,
  content,
  index,
  activeIndex,
  setActiveIndex,
  setIsActive,
  column,
  background,
  backgroundColor,
}) => {
  const isActive = index === activeIndex;

  const handleClick = () => {
    setActiveIndex(isActive ? null : index);
  };

  return (
    <div className={`col-span-12 lg:col-span-${column}`}>
      <div
        className={`w-full text-black text-[20px] leading-[28px] accordion ${
          background && `bg-[#${backgroundColor}] ps-10 pr-4 py-4`
        }`}
      >
        <div
          className={`accordion_title  cursor-pointer ${
            !background && `pt-4 pb-5`
          }`}
          onClick={handleClick}
        >
          <h3 className={`${
              background && "mb-3"
            }`}>{title}</h3>

          <div
            className={`w-8 h-8 bg-zinc-300 bg-opacity-0 rounded-md border border-black ${
              isActive ? "" : "rotate-[270deg]"
            }`}
          >
            <img src="/icons/arrow 1.svg" alt="" />
          </div>
        </div>
        {isActive && (
          <div className={`accordion-cotext-black text-[20px] font-normal leading-[28px] ${
            background ? "mb-1 mr-9" : "ml-10 mb-4"
          }`}>
            {content}
          </div>
        )}
        {!background && <div className="w-full h-[1px] bg-black" />}
      </div>
    </div>
  );
};

export default Accordion;
