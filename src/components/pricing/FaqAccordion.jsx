const FaqAccordion = ({
  title,
  content,
  index,
  activeIndex,
  setActiveIndex,
  setIsActive,
}) => {
  const isActive = index === activeIndex;

  const handleClick = () => {
    setActiveIndex(isActive ? null : index);
  };

  return (
    <div className="w-full text-black text-[20px] sm:text-[22px] font-bold font-['Helvetica'] leading-[42px]">
      <div
        className="flex items-center justify-between pt-4 pb-5 cursor-pointer"
        onClick={handleClick}
      >
        <div>{title}</div>
        <div className={`w-8 h-8 bg-[#FFC629] bg-opacity-0`}>
          <img
            className={`${isActive ? "rotate-180" : ""}`}
            src="/icons/faq_arrow_down.svg"
            alt=""
          />
        </div>
      </div>
      {isActive && (
        <div className="accordion-cotext-black text-[22px] font-normal font-['Helvetica Light'] leading-[37px] mb-4">
          {content}
        </div>
      )}
      <div className="w-full h-[2px] bg-black" />
    </div>
  );
};

export default FaqAccordion;
