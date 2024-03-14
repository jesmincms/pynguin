import { useState } from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const accordionData = [
    {
      title: "How long have you been doing this in Orlando, Florida?",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magni perferendis, aperiam asperiores in animi, odio mollitia voluptas vero sint cupiditate dolores, ipsum a nulla excepturi ut! Molestias, ipsa animi?`,
    },
    {
      title:
        "How is Pynguin different from other property management companies in Florida?",
      content: `Every application we receive undergoes careful screening to keep you protected. We only place well-qualified tenants in your home that meet our stringent requirements.`,
    },
    {
      title:
        "What is your role as a property manager? What is your philosophy about property management?",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magni perferendis, aperiam asperiores in animi, odio mollitia voluptas vero sint cupiditate dolores, ipsum a nulla excepturi ut! Molestias, ipsa animi?`,
    },
    {
      title: "How do you communicate with owners?",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magni perferendis, aperiam asperiores in animi, odio mollitia voluptas vero sint cupiditate dolores, ipsum a nulla excepturi ut! Molestias, ipsa animi?`,
    },
    {
      title: "When are rent distributions made to owners?",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magni perferendis, aperiam asperiores in animi, odio mollitia voluptas vero sint cupiditate dolores, ipsum a nulla excepturi ut! Molestias, ipsa animi?`,
    },
    {
      title:
        "What is this no-security deposit option? It sounds like an awful idea for owners.",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magni perferendis, aperiam asperiores in animi, odio mollitia voluptas vero sint cupiditate dolores, ipsum a nulla excepturi ut! Molestias, ipsa animi?`,
    },
    {
      title: "What do I need to do to prepare my property for rental?",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magni perferendis, aperiam asperiores in animi, odio mollitia voluptas vero sint cupiditate dolores, ipsum a nulla excepturi ut! Molestias, ipsa animi?`,
    },
    {
      title: "How do you determine the right rent amount?",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magni perferendis, aperiam asperiores in animi, odio mollitia voluptas vero sint cupiditate dolores, ipsum a nulla excepturi ut! Molestias, ipsa animi?`,
    },
    {
      title: "What is included in a lease agreement?",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magni perferendis, aperiam asperiores in animi, odio mollitia voluptas vero sint cupiditate dolores, ipsum a nulla excepturi ut! Molestias, ipsa animi?`,
    },
    {
      title: "How do you screen potential tenants?",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magni perferendis, aperiam asperiores in animi, odio mollitia voluptas vero sint cupiditate dolores, ipsum a nulla excepturi ut! Molestias, ipsa animi?`,
    },
    {
      title: "What are my responsibilities as a landlord?",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magni perferendis, aperiam asperiores in animi, odio mollitia voluptas vero sint cupiditate dolores, ipsum a nulla excepturi ut! Molestias, ipsa animi?`,
    },
    {
      title: "Are there any specific laws for renting property in Florida?",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magni perferendis, aperiam asperiores in animi, odio mollitia voluptas vero sint cupiditate dolores, ipsum a nulla excepturi ut! Molestias, ipsa animi?`,
    },
  ];

  return (
    <div className="bg-[#D9D9D9] py-10 lg:py-16 xl:py-20">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 gap-5 mb-6">
          <div className="col-span-12 text-center lg:col-span-8 lg:text-start">
            <h2 className="text-[28px] leading-[34px]">
              <span className="font-bold">FAQs for Landlords</span> <br /> Landlords
              often have a lot of questions about the process and how we do
              things. Here are a few of the most common questions for Central
              Florida property renters:
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-5">
            {accordionData.map((item, index) => (
              <Accordion
                key={index}
                index={index}
                title={item.title}
                content={item.content}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                column={10}
                background={false}
                backgroundColor="F7C74F"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
