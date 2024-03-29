const Accordion = ({ title, content, index, activeIndex, setActiveIndex, setIsActive }) => {
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

        <div
          className={`w-9 h-8 bg-zinc-300 bg-opacity-0 rounded-md border-2 border-black ${
            isActive ? "rotate-180" : ""
          }`}
        >
          <img src="/icons/arrow 1.svg" alt="" />
        </div>
      </div>
      {isActive && (
        <div className="accordion-cotext-black text-[22px] font-normal font-['Helvetica Light'] leading-[37px] ml-10 mb-4">
          {content}
        </div>
      )}
      <div className="w-full h-[2px] bg-black" />
    </div>
  );
};

export default Accordion;
