import React, { useState } from "react";
import Accordion from "./Accordion";

const WhyRenting = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const accordionData = [
    {
      title: "High Demand for Rentals",
      content: `Unlike some areas that have seasonal fluctuations, Orlando and Central Florida's consistent climate and year-round tourist attractions support a steady rental market throughout the year. This can lead to more consistent income for property owners.
      `,
    },
    {
      title:
        "Diverse Tenant Pool",
      content: `Unlike some areas that have seasonal fluctuations, Orlando and Central Florida's consistent climate and year-round tourist attractions support a steady rental market throughout the year. This can lead to more consistent income for property owners.
      `,
    },
    {
      title:
        "Year-Round Rental Opportunity",
      content: `Unlike some areas that have seasonal fluctuations, Orlando and Central Florida's consistent climate and year-round tourist attractions support a steady rental market throughout the year. This can lead to more consistent income for property owners.
`,
    },
    {
      title: "Appreciation Potential",
      content: `Unlike some areas that have seasonal fluctuations, Orlando and Central Florida's consistent climate and year-round tourist attractions support a steady rental market throughout the year. This can lead to more consistent income for property owners.
`,
    },
  ];

  return (
    <div className="py-10 lg:py-16 xl:py-20">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 gap-5 mb-10">
          <div className="col-span-12 text-center lg:col-start-3 lg:col-end-10">
            <h2 className="text-[28px] leading-[39px]">
              Why renting your property in Orlando and Central Florida can work
              for you
            </h2>
            <p>
              Renting out property in Orlando and Central Florida offers several
              key benefits, largely due to the region's unique characteristics
              and economic dynamics. Here are four key benefits:
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4">
            {accordionData.map((item, index) => (
              <Accordion
                key={index}
                index={index}
                title={item.title}
                content={item.content}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                column={6}
                background={true}
                backgroundColor="F7C74F"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default WhyRenting;
