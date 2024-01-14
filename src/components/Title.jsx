import React from "react";

const Title = ({ subtitle, title, titleCss, subtitleCss, position }) => {
    if(position === "left") {
        position = "text-left";
    } else if(position === "right") {
        position = "text-right";
    } else {
        position = "text-center mx-auto";
    }
  return (
    <div className={`mb-14 max:w-[90%] lg:max-w-[60%] ${position}`}>
      {title && <h3 className={`mb-6 text-[40px] lg:text-[54px] font-bold leading-[60px] tracking-tight text-black ${titleCss}`}>{title}</h3>}
      {subtitle && <p className={`leading-[30px] text-black ${subtitleCss}`}>{subtitle}</p>}
    </div>
  );
};

export default Title;
