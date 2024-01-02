import Accordion from './Accordion';
export default function OurServices() {

  
  const accordionData = [
    {
      title: 'Property Marketing',
      content: `Every application we receive undergoes careful screening to keep you protected. We only place well-qualified tenants in your home that meet our stringent requirements.`
    },
    {
      title: 'Tenant Screening',
      content: `Every application we receive undergoes careful screening to keep you protected. We only place well-qualified tenants in your home that meet our stringent requirements.`
    },
    {
      title: 'Maintenance',
      content: `Every application we receive undergoes careful screening to keep you protected. We only place well-qualified tenants in your home that meet our stringent requirements.`
    },
    {
      title: 'Rent Collection',
      content: `Every application we receive undergoes careful screening to keep you protected. We only place well-qualified tenants in your home that meet our stringent requirements.`
    },
    {
      title: 'Property Inspections',
      content: `Every application we receive undergoes careful screening to keep you protected. We only place well-qualified tenants in your home that meet our stringent requirements.`
    },
    {
      title: 'Financial Reporting',
      content: `Every application we receive undergoes careful screening to keep you protected. We only place well-qualified tenants in your home that meet our stringent requirements.`
    },
    {
      title: 'Evictions',
      content: `Every application we receive undergoes careful screening to keep you protected. We only place well-qualified tenants in your home that meet our stringent requirements.`
    },
    {
      title: 'Legal Guidance',
      content: `Every application we receive undergoes careful screening to keep you protected. We only place well-qualified tenants in your home that meet our stringent requirements.`
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



        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
            


        </div>
      </div>
    </div>
  );
}
