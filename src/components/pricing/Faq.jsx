import React, { useState } from "react";
import Title from "../Title";
import FaqAccordion from "./FaqAccordion";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const accordionData = [
    {
      title: "What services do you offer as a property management company?",
      content: `Our services include tenant screening, rent collection, maintenance and repairs, property inspections, financial reporting, and handling tenant issues or evictions.`,
    },
    {
      title: "How do you determine the rental price for my property?",
      content: `Our services include tenant screening, rent collection, maintenance and repairs, property inspections, financial reporting, and handling tenant issues or evictions.`,
    },
    {
      title: "What is your process for screening tenants?",
      content: `Our services include tenant screening, rent collection, maintenance and repairs, property inspections, financial reporting, and handling tenant issues or evictions.`,
    },
    {
      title: "How do you handle maintenance and repairs?",
      content: `Our services include tenant screening, rent collection, maintenance and repairs, property inspections, financial reporting, and handling tenant issues or evictions.`,
    },
    {
      title: "What are your fees and how are they structured?",
      content: `Our services include tenant screening, rent collection, maintenance and repairs, property inspections, financial reporting, and handling tenant issues or evictions.`,
    },
    {
      title: "How do you handle late or missed rent payments?",
      content: `Our services include tenant screening, rent collection, maintenance and repairs, property inspections, financial reporting, and handling tenant issues or evictions.`,
    },
    {
      title: "Can I choose to approve or deny potential tenants?",
      content: `Our services include tenant screening, rent collection, maintenance and repairs, property inspections, financial reporting, and handling tenant issues or evictions.`,
    },
    {
      title: "How often will I receive financial reports?",
      content: `Our services include tenant screening, rent collection, maintenance and repairs, property inspections, financial reporting, and handling tenant issues or evictions.`,
    },
    {
      title: "What is your approach to tenant retention and satisfaction?",
      content: `Our services include tenant screening, rent collection, maintenance and repairs, property inspections, financial reporting, and handling tenant issues or evictions.`,
    },
    {
      title: "How do you handle emergency situations or after-hours requests",
      content: `Our services include tenant screening, rent collection, maintenance and repairs, property inspections, financial reporting, and handling tenant issues or evictions.`,
    },
  ];
  return (
    <div className="bg-[#FFFAE5] py-20">
      <div className="container p-5 mx-auto">
        <Title title="Frequently Asked Questions" />
          {accordionData.map((item, index) => (
            <FaqAccordion
              key={index}
              index={index}
              title={item.title}
              content={item.content}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
      </div>
    </div>
  );
};

export default Faq;

