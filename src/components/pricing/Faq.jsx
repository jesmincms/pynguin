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
      content: `We conduct a comprehensive market analysis considering factors like location, property condition, and current market trends to set a competitive yet profitable rental price for your property.`,
    },
    {
      title: "What is your process for screening tenants?",
      content: `We perform thorough background checks including credit history, employment verification, criminal record checks, and past rental history to ensure reliable and responsible tenants.`,
    },
    {
      title: "How do you handle maintenance and repairs?",
      content: `We have a network of trusted contractors and handle all maintenance requests promptly. We also conduct regular property inspections to address any potential issues proactively.`,
    },
    {
      title: "What are your fees and how are they structured?",
      content: `Our fees vary based on the services provided. Typically, we charge a percentage of the monthly rent collected. We also provide a detailed breakdown of any additional fees for services like tenant placement or property inspections.`,
    },
    {
      title: "How do you handle late or missed rent payments?",
      content: `We have a strict policy for late payments, including notices and fees as per the lease agreement. In case of repeated missed payments, we handle the eviction process in accordance with local laws.`,
    },
    {
      title: "Can I choose to approve or deny potential tenants?",
      content: `While we handle tenant screening, we always respect your preferences and decisions. We will present potential tenants to you for final approval, ensuring they meet your criteria.`,
    },
    {
      title: "How often will I receive financial reports?",
      content: `We provide monthly financial reports detailing income, expenses, and any noteworthy activities related to your property. You can also request custom reports as needed.`,
    },
    {
      title: "What is your approach to tenant retention and satisfaction?",
      content: `We prioritize tenant satisfaction through prompt response to maintenance requests, regular communication, and ensuring a pleasant living environment, which in turn aids in tenant retention.`,
    },
    {
      title: "How do you handle emergency situations or after-hours requests",
      content: `We have a 24/7 emergency line and protocol in place to promptly address any urgent issues, ensuring the safety and well-being of tenants and the integrity of your property.`,
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

