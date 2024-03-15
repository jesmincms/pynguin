import { useState } from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const accordionData = [
    {
      title: "How long have you been doing this in Orlando Florida?",
      content: `<p>First of all we are investors and owners or rental property to.  Our owners bought their first Orlando real Estate in 2003 and by 2005 had over 25 local Orlando Rental properties of their own that they rented and managed on their own.  In 2010, they decided to start their own  Real Estate brokerage focusing on helping investors find investment property locally.   We actually ended up going on road shows to Singapore and Dubai and sold 100’s of Orlando florida homes at a time.  All these clients needed property management, and at first we referred it to local Orlando companies.  Well we soon learned not everyone did things the way did.  So we stopped referring it out and started our own Rental division.  Today thats all we do, we no longer sell or buy properties for clients.  We were soon managing over 500 homes and ended up hiring consultants to make sure we setup our processes and systems.  We did’nt want to make mistakes to learn.   Our owner also at its peak managed a hedge fund with over $100 million in Real Estate assets.  All assets they had to manage, the point being we’ve been learning how to do this for a long time.</p>`,
    },
    {
      title:
        "How is Pynguin properties different from other property management companies?",
      content: `<p>First things first, all we do is Property management.  Which is not the case with 99% of property management companies.  We focus on this only.  Which means we don’t get distracted with trying to convince you to sell something or buy a different property.  We also put our efforts into becoming masters of this.    Second, we’ve been doing this since 2010, and we’ve had the time to fine tune our processes and systems.  And thats what we are all about.  We have an onboarding process for owners, and onboarding process for tenants.  A portal for each.  A Proven repeatable system to get the most amount of money for your rental property in the shortest amount of time.  We know how to market homes, we actually place every rental on 190+ websites worldwide.  We also have a predefined set of rules we follow for what we look for in a tenant, we call it our box, and we don’t EVER go outside these rules.  Every time we have, we’ve been burned.  So we stick to our rules.  The bottom line is we are investors too, our owner manages a hedge fund with at its peak had over $100 million in Real Estate assets.  So we are only doing what we have had experience doing.  And to be clear, if you’re an owner that wants us to break our rules, we are not the company for you.  This is all we do, and we don’t believe we know it all, but we do believe we know better than most of our clients when it comes to Renting real estate in Orlando Florida.</p>`,
    },
    {
      title:
        "How quickly can I expect a response from PPM?",
      content: `<p>We have Trademarked the phrase “Orlando’s Responsive Property Manager™” and we take that term seriously. We track our teams’ email communications for initial response times. We also monitor the status through completion of any email requests received from both residents and clients (owners). Our owner's handbook, which we will share, states that we will be back to you the same day if you are in touch with us before noon EST, and by the next morning if after noon EST. However, more often than not, it is much quicker than that.</p>`,
    },
    {
      title: "What is our role as a property manager?",
      content: `
      <ol>
        <li>Set the rent price</li>
        <li>Taking pictures and advertising and marketing the property</li>
        <li>Prepare the Vacant Unit for rent-Meaning inspect for damages and fix items that need to be fixed before it’s rented.</li>
        <li>Screen and select quality tenants</li>
        <li>Prepare the lease agreement</li>
        <li>Handle tenant complaints and issues</li>
        <li>Collect rent and adjust price for inflation and demand over time</li>
        <li>Maintenance and repair on the property</li>
        <li>Contract and supervise contractors</li>
        <li>Handle moving out and in the rare case elections</li>
      </ol>
      `,
    },
    {
      title: "What is your philosophy about property management?",
      content: `<p>Simply put we believe in finding the best qualified tenant in the shortest amount of time period.    As a manager of large rental pools we learned a long time ago the WORST thing you can do is price a rental property too high and let it sit and lose revenue.  So we believe in pricing properties to rent based on the current market conditions.  Meaning if it’s taking longer than 30 days to rent a property, we are going to be pricing it below market to get it rented quicker.  If the market is moving quick and there is high demand, we are all about getting more for the property than the current market is getting.  I’ll repeat we are hedge fund managers, trained to maximize revenue.  And I’ll repeat what we stated in other answers, if you don’t agree with this philosophy we are not the property managers for you.  We got to these philosophies from over 20 years of doing this.  And yes we think we know better, we don’t know it all.  But we think when it comes to property management we know better than the average investor.</p>`,
    },
    {
      title:
        "How do you communicate with owners?",
      content: `<p>Promptly and thoroughly. We are constantly in contact with our Clients. We are constantly providing updates to our Clients. Sometimes too much. We want you to know we are working hard and will keep you up to date. Most of our Owners trust us to make the right decision, but we wait for the you to tell us that. We have the proprietary software that allows us to always have the latest information. You can always call or email and we will respond the same day. It is our Company policy</p>`,
    },
    {
      title: "In Orlando Property management, what is an expense reserve, and do you require it?",
      content: `<p>Yes we require it.  It is an account that is setup separately for the property manager to use for expenses that occur while we manage the property.  This is something that will get funded through your immediate rental income.   We require $500 in your reserve account at all times.</p>`,
    },
    {
      title: "When are rent distributions made to owners?",
      content: `<p>Monthly statements are emailed on the 11th of the month. Owner payments are made on the 21st.  We wait till the 21st just to make sure if someone pays it late you are not waiting a long period to get your money.   If maintenance items or other expenses have cropped up, the amount will be deducted from the rental income and listed on the Owner Statement.</p>`,
    },
    {
      title: "What’s your collection process?",
      content: `<p>All rents are due on or before the first of each month and are considered late after 5:00 p.m. on the 1st of each month. We send out a first letter of delinquency on the 3rd, followed by a three-day Notice to Vacate letter. For residents who haven’t paid in full by the 13th of the month, we initiate the eviction process. We do make rental payment agreements on a case- by-case basis.</p>`,
    },
    {
      title: "How does the No Security Deposit Option work?",
      content: `
      <ul>
        <li>Property owners have told us that security deposits can be a real headache. No one likes taking the time to collect deposits or haggle with tenants over how much to return when their lease expires.</li>
        <li>To minimize those headaches and give your property a competitive advantage, we’ve created a No Security Deposit Option . Qualified renters provide a secure billing authorization instead of making a large cash deposit upfront. You bill them for damages and repairs as needed, up to a limited amount. The benefit to you: Because renters love avoiding deposits, your property rents faster!</li>
        <li>Only tenants who meet certain requirements (e.g., bank account balance history and available credit) qualify for this deposit-free option. When you need to collect from your tenant, you’ll receive the balance in installments using the payment method of their choice. When the lease is up, there’s no need to return deposit money!</li>
      </ul>
      `,
    },
    {
      title: "What do I need to do to prepare my property for rent?",
      content: `
      <ul>
        <li>Carpets should be professionally cleaned and in good condition with no pet odor.</li>
        <li>Premises interior and exterior should be in ‘move-in’ condition no less than 3 business days prior to the lease start date.</li>
        <li>All windows and sliding glass doors should operate and lock properly with screens in good condition.</li>
        <li>All appliances and other systems related to the premises should be clean and in good condition: refrigerator, stove, dishwasher, microwave, disposal, air conditioners, heaters, A/C system, garage door openers.</li>
        <li>All plumbing and fixtures should be in good condition and working properly.</li>
        <li>All bathroom and kitchen tile should be properly caulked or grouted with no loose tiles or cracks.</li>
        <li>Window treatments are a requirement and should be in clean and working condition.</li>
        <li>All electrical outlets and switches should be working properly and have cover plates.</li>
        <li>The air conditioning system should be in good working order, properly charged, coils clean, drain line open, new filter installed, duct work in good condition, vent registers clean and adjustable.</li>
        <li>Smoke alarm properly installed in bedroom areas and in proper working order.</li>
        <li>Fire extinguisher-five pound-on the premises and properly serviced.</li>
        <li>All light fixtures should have light bulbs and be in proper working order.</li>
        <li>Ceiling fans if any, should be clean and in proper working order.</li>
        <li>Smell and Odors the property should smell clean and pleasant. It should not smell of mold, mildew or pets. Smell or odors are the first thing a prospective tenant will notice when entering a property.</li>
        <li>Check all Closets and Storage Areas, are the doors and closets in good shape? Check rods, hooks, shelves and lights. The walls and floors should be clean.</li>
        <li>Yard irrigation system if any, should be in good working order. Recently mowed</li>
        <li>Well water system and any water softener system, if applicable, should be in good working order with appropriate chemicals added at proper levels</li>
        <li>House number should be properly displayed on the front of the house as well as any street mailbox.</li>
        <li>Roof should be free from any leaks.</li>
        <li>All debris, trash, discards should be removed from the premises, including the attic.</li>
        <li>All exterior door locks should be changed between occupants.</li>
        <li>Redirect your mail, or inform Legends Realty of the forwarding address of your previous tenant.</li>
        <li>Remotes (Gate Access, Garage) ensure all remotes have new batteries and are left within the home.</li>
        <li>Pool/Spa Maintenance, all swimming pools must have a continuous safety barrier maintained by the pool owner that restricts access by young children to the pool. Ensure your fencing and pool equipment complies with the current legislation. Legends Realty encourages all owners to include monthly pool maintenance. Please discuss this with your property manager who can recommend pool care providers.</li>
        <li>Copies of all warranties, service contracts, termite and/or pest control contracts should be provided to Legends Realty</li>
        <li>Copy of insurance declarations page should be provided to Pynguin Property Management. Any homeowners’ policy should be changed to a landlord’s policy with minimum limits of $100,000/$300,000 and naming management agent as an additional insured.</li>
      </ul>
      `,
    },
    {
      title: "How do you determine the right rental amount?",
      content: `<p>First we will start off by being blunt and letting you know, we respect what you think it should rent for but we won’t be listening to you.  We do this for a living, have done it for a long time and have done it well.    We have a  process that we trust thats actually very simple.  We go by what similar properties to yours have rented for in the last 30-90 days along with current supply and demand principal.  Our goal is to rent your property for the most amount of money in the shortest amount of time.  The key to us is not asking for too much and taking an additional 30 days to rent.  Because that quickly hits your ROI.  Once again we are hedge fund managers trying to maximize the return on your investment.</p>`,
    },
    {
      title: "What is included in a lease agreement?",
      content: `<p>So we are big on using attorneys to draw up our leases.  They create a comprehensive agreement that includes all provisions required to protect you along with following the legal requirements by the state of florida.  Bottom line everything you need is included in the agreement.</p>`,
    },
    {
      title: "How do you screen potential tenants?",
      content: `
      <p>So the bottom line is we have a set of rules we follow, we like calling them our box, and we don’t go outside them.  When we were only managing our own properties every time we went outside our rules we got burned.  So the bottom line is we have a set of standards and we don’t go out side them.  More importantly we treat everyone the same and hold everyone to the same standard.</p>
      <br />
      <p>We conduct credit, eviction, and background checks on every applicant while carefully complying with Fair Housing Laws and all Florida laws regarding tenants.</p>
      <br />
      <p>We require a 600 or higher credit score , however, we will accept as low as a 550 with a higher deposit. We use your overall credit score, rental history and income to evaluate your security deposit.</p>
      <br />
      <p>We look into any current or past evictions or tenant-landlord disputes. If you have record of a current eviction, recent eviction, or debt owed to a previous landlord, these are disqualifying factors under our requirements.</p>
      <br />
      <p>Current bankruptcies will not be accepted – Discharged Bankruptcies with documentation is acceptable.</p>
      `,
    },
    {
      title: "Are there any specific laws for renting in florida?",
      content: `
      <p>In 2023, Florida witnessed significant amendments to its rental laws, impacting landlords and tenants. Governor Ron DeSantis signed new legislation aiming to balance the rights and responsibilities within the rental market. These changes reflect an evolving landscape in real estate, particularly in areas like Orlando, Florida, where the rental market is a critical component of the local economy.</p>
      <br />
      <p>a. Expanded Tenant Rights and Responsibilities</p>
      <br />
      <p>The Florida Statutes, particularly Chapter 83, outline the foundational legal framework of landlord-tenant relationships. The recent amendments emphasize the importance of written lease agreements, providing clarity and legal recourse for both parties. Notably, the laws stipulate that landlords and tenants must adhere to agreed-upon terms, with landlords mandated to maintain habitable living conditions and tenants required to comply with payment schedules and property care.</p>
      <br />
      <p>b. Adjustments to Termination Notices</p>
      <br />
      <p>A critical change in the 2023 amendments is extending the notice period for month-to-month tenancy terminations. Landlords must now provide at least 30 days written notice before the end of the monthly period, switched from the previous 15-day requirement. This change necessitates more strategic planning from landlords regarding tenancy terminations, marking a significant shift in the landlord-tenant dynamic.</p>
      <br />
      <p>c. Rent Control and Payment Regulations</p>
      <br />
      <p>Florida continues its stance against rent control, aligning with several other states in the U.S. The state law prohibits local entities from imposing any form of rent control. However, landlords must provide tenants with written receipts for all rent payments, enhancing transparency and accountability. Additionally, the state now caps late fees, preventing landlords from imposing excessive charges on delayed rent payments.</p>
      <br />
      <p>d. Security Deposit and Fee Alternatives</p>
      <br />
      <p>The updated laws offer flexibility in terms of security deposits. Landlords can now provide tenants the option to pay a fee instead of a traditional security deposit. This amendment reflects the growing market presence of companies offering such services, where tenants pay a small monthly fee in exchange for the company covering potential damages.</p>
      <br />
      <p>e. Enhanced Tenant Privacy</p>
      <br />
      <p>Tenant privacy rights have been bolstered, with landlords now required to give at least 24 hours' notice before accessing rental premises, except in emergencies. This amendment strengthens tenant rights and ensures their peaceful enjoyment of rented accommodations.</p>
      <br />
      <p>f. Miya’s Law</p>
      <br />
      <p>A notable inclusion in the recent legislative changes is Miya’s Law, which mandates landlords of specific rental properties to conduct background checks on employees as a condition of employment. This law aims to enhance tenant safety and holds landlords accountable for the conduct of their employees.</p>
      <br />
      <p>g. State Preemption Over Local Authorities</p>
      <br />
      <p>The 2023 amendments reinforce state preemption over local authorities in matters related to residential tenancies. This change ensures uniformity in landlord-tenant laws across Florida, reducing complexities arising from varied local regulations.</p>
      <br />
      <p>Conclusion</p>
      <br />
      <p>The 2023 amendments reinforce state preemption over local authorities in matters related to residential tenancies. This change ensures uniformity in landlord-tenant laws across Florida, reducing complexities arising from varied local regulations.</p>
      `,
    },
    {
      title: "Does the State of Florida require a property manager to be licensed?",
      content: `
      <p>Yes, Property Managers perform tasks that are considered licensed activities. We have held our Managing Broker License since 2010. All licensed companies can be verified on the State of Florida license lookup page DBPR.</p>
      `,
    },
    {
      title: "How can I get references on your services from past or current clients ?",
      content: `
      <p>Yes, Property Managers perform tasks that are considered licensed activities. We have held our Managing Broker License since 2010. All licensed companies can be verified on the State of Florida license lookup page DBPR.</p>
      `,
    },
    {
      title: "Does the State of Florida require a property manager to be licensed?",
      content: `
      <p>Yes, Property Managers perform tasks that are considered licensed activities. We have held our Managing Broker License since 2010. All licensed companies can be verified on the State of Florida license lookup page DBPR.</p>
      `,
    },
    {
      title: "Do you manage both short term and long term rentals in Orlando Florida?",
      content: `
      <p>At this time we only manage properties for owners who are seeking long term rentals. We do not manage any vacation rentals, AIRBNB, or furnished properties.</p>
      `,
    },
    {
      title: "Is Pyngiun Property Management insured?",
      content: `
      <p>Pynguin Property management carries a business liability, workers compensation, umbrella and professional liability (E&O) policies with minimum $1,000,000 limits.</p>
      `,
    },
    {
      title: "Should I allow pets in my Orlando rental?",
      content: `
      <p>We ask that you keep all options open. Many quality tenants do have pets. A person’s application will reflect how they will care for your property including how they will allow the keep of an animal in your home.</p>
      `,
    },
    {
      title: "How can I protect my Orlando rental from pets?",
      content: `
      <p>We will accept animals of well qualified applicants only. These applicants will show us pictures of their pet and provide us information such as breed, weight, & age. This helps rule out the 40 pound mix that turns out to be a 150 pound Pitbull. An approved tenant with a pet will pay either additional security deposit or a non-refundable pet fee. A home with hardwood, tile, or wood laminate is more pet friendly from a Landlord’s perspective than a home with carpet throughout.</p>
      `,
    },
    {
      title: "Who holds the tenants security deposit?",
      content: `
      <p>Pynguin Property Management holds all tenant security deposits in a separate escrow account. After the tenant vacates the property a thorough move out assessment will be conducted to determine if there are any damages to the unit.</p>
      `,
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
