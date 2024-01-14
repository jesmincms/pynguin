import { useState } from 'react';
import Accordion from './Accordion';
export default function OurServices() {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const accordionData = [
    {
      title: 'Property Marketing',
      content: `Expert property marketing in Florida, showcasing your property to the right audience for faster, profitable leasing. Tenant Screening: Rigorous tenant screening in Central Florida to secure reliable tenants, minimizing risks and ensuring stable tenancies for your properties.`
    },
    {
      title: 'Tenant Screening',
      content: `Every application we receive undergoes careful screening to keep you protected. We only place well-qualified tenants in your home that meet our stringent requirements.`
    },
    {
      title: 'Maintenance and Repairs',
      content: `Comprehensive maintenance and swift repair services in Florida to keep properties in top condition, ensuring tenant safety and property value.`
    },
    {
      title: 'Rent Collection',
      content: `Streamlined rent collection in Florida’s dynamic market, ensuring timely payments and maintaining positive tenant relations for optimal income.`
    },
    {
      title: 'Property Inspections',
      content: `Thorough property inspections in Florida, documenting conditions and ensuring upkeep, preserving property allure and value, giving owners peace of mind.`
    },
    {
      title: 'Financial Reporting',
      content: `Transparent financial reporting for Florida properties, providing regular, detailed insights into income and expenses for informed decision-making.`
    },
    {
      title: 'Evictions',
      content: `Professional, legally compliant eviction processes in Florida, resolving issues amicably or acting decisively to protect properties and minimize disruptions.`
    },
    {
      title: 'Legal Guidance',
      content: `Expert navigation of Florida’s property laws to ensure your investment’s compliance and protection from legal pitfalls.`
    }
  ];

  return (
    <div className=" text-left bg-amber-400 px-10 xl:px-[160px] py-[60px]">
      <div className="flex items-start justify-between gap-10 xl:gap-[150px] flex-col xl:flex-row">
        <div className="max-w-[634px]">
          <span className="text-black text-3xl md:text-5xl font-['Helvetica Light'] md:leading-[64px]">
            <span className="text-white font-bold font-['Helvetica']">
              Our services{" "}
            </span>
            are designed to let you to chill, while we do the work of managing
            your property
          </span>
        </div>
 
        <div className="w-full">



        {accordionData.map((item, index) => (
            <Accordion
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
    </div>
  );
}
